browser.runtime.sendMessage({
    type: "legacy",
    action: "newtab-replace",
    url: extensionGetUrl('/pages/newtab/newtab.html'),
}).then(reply => {
    if (reply) console.log("response from legacy add-on: " + reply.content);
});

browser.runtime.onMessage.addListener((msg, sender, sendReply) => {
    if(typeof message == "object" && message.handler) return;

    if (typeof msg == "object" && msg.action == "force-migration") {
        Migration.silent = false;
        //Migration.devMode = true;
        Migration.check({force:true});
    }
});

(function(){
    var SDKMigration = function(){};
    
    SDKMigration.prototype = {
        port : false,
        timeout : false,
        onEmpty : false,
        onEmptyCalled : false,
        completeTimeout: false,
        silent: true,
        devMode: false,
        SDK: {
            id: "resource://team-at-livestartpage-dot-com",
            migration: "/data/migration.html"
        },
        fs: {},
                
        reset: function(){
            var ts = this;
        
            ts.checkList = {
                localStorage: false,
                tables: false,
                files: false,
                backups: false,
                blobs: true
            };
    
            ts.statFiles = {all:0, saved:0, fault:0};
            ts.emptyList = [];
            ts.newtabOpened = false;
            ts.started = Date.now();
            ts.blobs = {};
            ts.progress = {done:[], wait:[]};
        },
        
        check: function(mode){
            var ts = this;
            
            if(typeof mode !== "object") mode = {mode: mode || false};
            
            ts.timeout = mode.timeout || false;
            ts.onEmpty = mode.onEmpty || false;
            
            if(mode.force){
                ts.connect();
            }else{
                browser.storage.local.get('migration-status').then(result=>{
                    //console.info(result);

                    if(typeof result == "object" && result['migration-status'] !== "done"){
                        ts.connect();
                    }else{
                        console.info("Migration already done");
                        ts.process(false);
                    }
                });
            }
        },
        
        connect: function(){
            var ts = this;
            
            if(ts.devMode){
                if(!localStorage.getItem("background-opened")){ // DEV Mode
                    localStorage.setItem("background-opened", 1);
                    clearTimeout(ts.timeout);

                    setTimeout(()=>{
                        browser.tabs.create({
                            url: extensionGetUrl("/pages/backend/backend-firefox-webext.html"),
                            active: false
                        });
                    }, 2500);

                    return;
                }
            }
            
            ts.reset();
            
            if(ts.port) ts.disconnect();
            ts.port = browser.runtime.connect({name: "connection-to-legacy"});
            
            ts.listeners();
            ts.post("init");
            ts.blobsCounter();
        },
        
        status: function(){
            var ts = this;
            
            var time = Date.now() - ts.started;
            var done = [], wait = [];
            
            for(var key in ts.checkList){
                if(ts.checkList[key]) done.push(key);
                else wait.push(key);
            }
            
            if(!ts.silent) console.info("Status. Time:", time/1e3, "Done:", done, "Wait:", wait);
            
            ts.progress.done = done;
            ts.progress.wait = wait;
            
            if(
                !wait.length
                ||
                (
                    Date.now() - ts.started > 30000
                    &&
                    done.indexOf('localStorage') !== -1
                    &&
                    done.indexOf('tables') !== -1
                )
            ){
                console.log("Migration DONE!");
                ts.completePending();
            }
            
            if(wait.length){
                setTimeout(()=>{
                    ts.status();
                }, 500);
            }
        },
        
        process: function(time){
            var key = 'migration-process';
            
            if(time === false){
                localStorage.removeItem(key);
            }else{
                localStorage.setItem(key, time);
            }
        },
        
        completePending: function(){
            var ts = this;
            
            //if(ts.completeTimeout) return;
            
            ts.completeTimeout = setTimeout(()=>{
                ts.complete();                
            }, 1000);
        },
        
        complete: function(){
            var ts = this;
                        
            if(!ts.progress.wait.length || Date.now() - ts.started > 45000){ // Close status tab
                ts.fullComplete();
            }
            
            ts.reloadAllPages(true);
        },
        
        disconnect: function(){
            var ts = this;
            
            try{
                ts.port.disconnect();
                //ts.port = false;
            }catch(ex){
                console.warn(ex);
            }
        },
        
        fullComplete: function(timeout){
            var ts = this;
            
            setTimeout(()=>{
                ts.closeSDKPages();
            }, timeout || 0);

            ts.process(false);
            browser.storage.local.set({'migration-status':'done'});

            setTimeout(()=>{
                ts.disconnect();
            }, 1000);
        },
        
        closeSDKPages: function(){
            var ts = this;
            
            //var migrationURL = ts.SDK.id + ts.SDK.migration;

            browser.tabs.query({}, tabs => {
                for(var i in tabs){
                    //if(tabs[i].url.indexOf(migrationURL) !== -1){
                    if(tabs[i].url.indexOf(ts.SDK.id) !== -1){
                        ts.removeTab(tabs[i]);
                    }
                }
            });
        },
        
        reloadAllPages: function(openNewTab){
            var ts = this;
            
            if(ts.newtabOpened) return;
            ts.newtabOpened = true;
                        
            getSettingsTabPages(reloadTabPages);
            getOptionsTabPages(reloadTabPages);
            getNetTabPages(reloadTabPages);
            
            if(openNewTab){
                setTimeout(()=>{
                    browser.tabs.create({
                        url: extensionGetUrl('/pages/newtab/newtab.html'),
                        active: true
                    });
                }, 150);
            }
        },
        
        removeTab: function(tab){
            var ts = this;
            
            if(!ts.silent) console.info("Remove tab", tab);
            
            setTimeout(()=>{
                browser.tabs.remove(tab.id);
            }, 500);
        },
        
        listeners: function(){
            var ts = this;
            
            ts.port.onMessage.addListener((msg) => {
                //console.info("PORT", msg);
                ts.listenerHandler(msg);
            });
        },
        
        listenerHandler(msg){
            var ts = this;
            
            if(typeof msg == "object" && msg.type == "sdk"){
                switch(msg.action){
                    case "hello":
                        clearTimeout(ts.timeout);
                        ts.process(Date.now());
                        ts.status();
                        
                        if(!ts.devMode){
                            setTimeout(()=>{
                                ts.start(); // Disable in DEV Mode
                            }, 0);//15e3);
                        }
                    break;
                    case "ping":
                        //console.info("ping", Date.now());
                    break;
                    case "send-local-storage":
                        ts.writeLocalStorage(msg.data);
                    break;
                    case "send-tables-data":
                        ts.writeTablesData(msg.data);
                    break;
                    case "send-base64-data":
                        ts.writeBase64Data(msg.data);
                    break;
                    case "send-fs-data":
                        ts.writeLocalFile(msg.data);
                    break;
                    case "send-files-finished":
                        ts.askBackups();
                    break;
                    case "send-backups":
                        ts.wtiteBackups(msg.data);
                    break;
                }
            }else{
                ts.log({err:"Unknown message", data:msg});
            }
        },
        
        start : function(){
            var ts = this;
            
            ts.log("Start migration");
            
            Async.chain([
                function (nextHandler) { // Get local storage and tables
                    ts.post("start-migration");
                    
                    setTimeout(()=>{
                        nextHandler();
                    }, 350);
                },
                function (nextHandler) { // Get files
                    //ts.post("get-attachments"); // DEV
                    
                    ts.fs.request = indexedDB.open("fileStorage");
                    ts.fs.tables = ["files", "attachments"];
                    
                    ts.fs.request.onsuccess = ()=>{
                        ts.fs.db = ts.fs.request.result;
                        /*
                        ts.fs.tx = ts.fs.db.transaction(ts.fs.tables, 'readonly');
                        ts.fs.store = ts.fs.tx.objectStore("attachments");
                        */
                        if(!ts.silent) console.info("File System", ts.fs);
                        
                        ts.post("get-attachments");
                    }
                    
                    
                    setTimeout(()=>{
                        nextHandler();
                    }, 250);
                },
                function (nextHandler) { // Get files
                    //ts.askBackups();
                }
            ]);
        },
        
        askBackups: function(){
            var ts = this;
            
            ts.post("get-backups");
            
        },
        
        wtiteBackups: function(data){
            var ts = this;
            
            try{
                for(var key in data){
                    for(var k in data[key].data.DIALS){
                        if(String(data[key].data.DIALS[k].image).indexOf(ts.SDK.id) === 0){
                            data[key].data.DIALS[k].image = String(data[key].data.DIALS[k].image).replace(ts.SDK.id, '');
                        }
                    }
                    
                    for(var k in data[key].data.storage){
                        if(String(data[key].data.storage[k].val).indexOf(ts.SDK.id) === 0){
                            data[key].data.storage[k].val = String(data[key].data.storage[k].val).replace(ts.SDK.id, '');
                        }
                    }
                }
            }catch(ex){
                console.warn(ex);
            }
            
            if(!ts.silent) console.log("wtiteBackups", data);
            
            setBackupsDump(data);
            
            ts.checkList.backups = true;
            
        },
            
        isEmpty: function(name){
            var ts = this;
            
            ts.emptyList.push(name);
            
            //console.info('emptyList', ts.emptyList);
            
            if(
                (ts.emptyList.indexOf('localStorage') !== -1)
            ){
                if(!ts.onEmptyCalled && typeof ts.onEmpty == "function"){
                    ts.onEmpty();
                    
                    ts.fullComplete(3000);
                    //ts.reloadAllPages(false);
                }
            }
        },
        
        writeLocalStorage : function(data){
            var ts = this;
            
            if(!ts.silent) console.info("GOT localStorage", data);
            
            try{
                for(var key in data){
                    if(data[key].indexOf(ts.SDK.id) === 0) data[key] = data[key].replace(ts.SDK.id, '');
                    
                    localStorage.setItem(key, data[key]);
                    
                    if(data[key].indexOf("blob:resource://") === 0){
                        ts.remakeBlobUrl(data[key], (newBlobUrl)=>{
                            localStorage.setItem(key, newBlobUrl);
                        });
                    }
                }
                
                if(Object.keys(data).length <= 10 && !data['install-key']){
                    ts.isEmpty('localStorage');
                }
            }catch(ex){
                ts.log(ex, "warn");
            }
            
            ts.checkList.localStorage = true;
        },
        
        writeTablesData : function(data){
            var ts = this;
            
            if(!ts.silent) console.info("GOT tables data", data);
            
            var tables = Object.keys(data);
            
            Async.each(tables, 
                (name, next) => {
                    try{
                        ts.restoreTable(name, data[name], next);
                    }catch(ex){
                        console.warn(ex);
                        next();
                    }
                },
                ()=>{
                    // Finish
                
                    ts.checkList.tables = true;
                    
                })
            ;
        },
        
        restoreTable : function(name, data, callback){
            var ts = this;
            
            Async.chain([
                function (nextHandler) { // Clear
                    BRW_dbUnsafeDeleteAll(name, 
                        () => { // Success
                            nextHandler();
                        }, 
                        () => { // Error
                            console.warn("Can`t clear the table ", name);
                            nextHandler();
                        }, 
                        crc32(name)
                    );
                },
                function (nextHandler) { // Write
                    BRW_dbTransaction(function (tx) {
                        Async.arrayProcess(data, function (row, arrayProcessCallback) {
                            ts.restoreTableRow(tx, name, row, arrayProcessCallback);
                        }, function () {
                            callback();
                        });
                    });
                }
            ]);
        }, 
        
        restoreTableRow : function(tx, name, item, cb){
            var ts = this;
            
            if(name == "DIALS" || name == "IMAGES"){
                if(String(item.image).indexOf(ts.SDK.id) === 0){
                    item.image = String(item.image).replace(ts.SDK.id, '');
                }
            }
            
            var insert = {
                param: {
                    tx: tx,
                    table: name,
                    'set': item
                },
                success: function (response) {
                    //console.log("OK", response);
                    cb();
                },
                error: function (obj, err) {
                    console.warn("ERR", err);
                    cb();
                }
            };
            
            BRW_dbInsert(insert.param, insert.success, insert.error);
                        
            if(name == "DIALS" || name == "IMAGES"){
                if(String(item.image).indexOf("blob:resource://") === 0){
                    ts.remakeBlobUrl(item.image, (newBlobUrl)=>{
                        if(!ts.silent) console.info(item.image, newBlobUrl);
                        
                        BRW_dbUpdate(
                            {
                                tx: tx,
                                table: name,
                                'set': {image:newBlobUrl},
                                where: {key: 'id', val: item.id}
                            },
                            (success) => {
                                if(!ts.silent) console.info(success);
                            },
                            (ex)=>{console.warn(ex);}
                        );
                        
                    });
                }
            }
        },
        
        remakeBlobUrl : function(blobUrl, callback){
            var ts = this;
            
            return; // DEV
            
            if(!ts.silent) console.info("remakeBlobUrl", blobUrl);
            
            ts.blobs[blobUrl] = {
                done    : false,
                callback: callback
            };
            
            ts.post({
                action: "remake-blob",
                url: blobUrl
            });
        },
        
        writeBase64Data : function(obj){
            var ts = this;
            
            if(obj.oldURL && ts.blobs[obj.oldURL] && !ts.blobs[obj.oldURL].done){                
                try{
                    var blob = b64toBlob(obj.base64);
                    var blobUrl = URL.createObjectURL(blob);

                    //console.info("writeBlobData", blob, blobUrl);

                    ts.blobs[obj.oldURL].callback.call(ts, blobUrl);
                    ts.blobs[obj.oldURL].done = true;
                    
                    blob = null;
                    ts.blobs[obj.oldURL].callback = null;
                }catch(ex){
                    ts.blobs[obj.oldURL].done = false;
                    ts.blobs[obj.oldURL].fail = true;
                }
            }
            
            ts.blobsCounter();
        },
        
        blobsCounter : function(){
            var ts = this;
            
            var isDone = true;
            
            if(Object.keys(ts.blobs).length){
                for(var key in ts.blobs){
                    if(!ts.blobs[key].done && !ts.blobs[key].fail){
                        isDone = false;
                    }
                }
            }
            
            ts.checkList.blobs = isDone;
        },
        
        writeLocalFile : function(obj){
            var ts = this;
            
            //path: "themes/wqaw7x28jya043nz0piq/wqaw7x28jya043nz0piq.tablet.mp4", fname: "thumbnails/1aff8c631a89f11b2dea4653acd85736", data:
            
            try{
                ts.statFiles.all = obj.all;
                
                if(!ts.silent) console.info("writeLocalFile", obj.path, obj.fname);//, obj.data);
                
                var tx = ts.fs.db.transaction(ts.fs.tables, 'readwrite');
                var store = tx.objectStore("attachments");
                var complete = obj.cur + "/" + obj.all;
                
                var putRequest = store.put({
                    path: obj.path, 
                    fname: obj.fname, 
                    data: obj.data
                });
                
                putRequest.onsuccess = function() {
                    ts.checkList.files = Math.max(ts.numFromFraction(complete), ts.numFromFraction(ts.checkList.files));
                };
                
                obj = null;
                
                
                /*
                var name = String(obj.path).split('/').pop();
                var blob = b64toBlob(obj.data);
                var blobUrl = URL.createObjectURL(blob);

                fileStorage.setAttachment(obj.fname, name, blob).then(function(result) {
                    console.info("setAttachment", result);
                    ts.statFiles.saved++;
                });
                */
            }catch(ex){
                console.warn(ex);
                ts.statFiles.fault++;
            }
            
            
        },
            
        numFromFraction: function(str){
            if(!str) return 0;
            
            var result = 0;
            var arr = String(str).split('/');
            
            if(arr.length == 2 && parseInt(arr[0]) && parseInt(arr[1])){
                result = parseInt(arr[0]) / parseInt(arr[1]);
            }
            
            return result;
        },
        
        log : function(info, type, postToAddon){
            var ts = this;
            
            console[type || "info"](info);
            
            /*
            if(postToAddon !== false){
                ts.post({
                    action: "log",
                    info: String(info)
                });
            }
            */
        },
        
        post : function(msg){
            var ts = this;
            
            if(typeof msg != "object") msg = {action : String(msg)};
            msg.type = "migration";
            
            ts.port.postMessage(msg);
        }
    }
    
    this.Migration = new SDKMigration();
}).apply(self);