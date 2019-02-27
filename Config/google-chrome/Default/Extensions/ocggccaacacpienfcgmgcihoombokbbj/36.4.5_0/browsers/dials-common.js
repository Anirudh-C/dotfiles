var sponsorGroupId = '10000000000010';

if (!localStorage.getItem("sd.install_time")) {
    localStorage.setItem("sd.install_time", new Date().getTime());
}

if(typeof ServerDials != "undefined"){
    ServerDials
        .setInstallTime(
            Math.round(parseInt(localStorage.getItem("sd.install_time")) / 1000)
        )
        .setClientSoftware("lsp_chome") //lsp_ff
        .setConfig("minVisits", 4)
        .setConfig("userType", "new");

    ServerDials.setMapClass(function () {
        var serverGroupsIds = {};
        this.init = function (serverDials, cb) {
            var serverGroupsMap = {};

            serverDials.forEach(function (serverDial) {
                serverGroupsMap[serverDial.group.globalId] = serverDial.group;
            });
            var serverGroupsGlobalIds = Object.keys(serverGroupsMap);
            
            cb();

        };
        this.map = function (serverDial) {
            var groupId = serverDial.group.globalId == "default" ? GROUP_DEFAULT_ID : sponsorGroupId;

            var dial = {
                "id": createDialId(serverDial.url, groupId),
                "groupId": groupId,
                "url": serverDial.url,
                "title": serverDial.title,
                "addDate": Date.now(),
                "orderNum": 0,
                "image": null,
                "bg_color": null,
                "text_color": null,
                "thumb_type": null,
                "is_deleted": 0
            };

            //console.info('serverDial', serverDial, dial);

            if (serverDial.previewUrl) {
                dial.image = serverDial.previewUrl;
                dial.thumb_type = 2;
            } else {
                dial.thumb_type = 2;
            }

            //console.log("MAP", dial);

            return dial;
        };
    });

    ServerDials.onDialsUpdate.addListener(function (dials) {
        addSponsorGroups(dials);
    });

    BRW_langLoaded(function(){
        BRW_getFileSystem(function(){
        FF_whileLoaded(function () {        
            setTimeout(function(){
                var install = parseInt(localStorage.getItem("install-key") || 0);
                var checked = localStorage.getItem("dials-installed") || false;
                var now = Date.now();
                            
                if(
                    !checked && 
                    (
                        install == 0 ||
                        (now - install) < (10 * 60 *1000)
                    )
                ){
                    ServerDials.fetch({
                        userType: "new"
                    }, function (err, dials) {
                        if (err) {
                            groupDials = [];
                            console.error("Fail to fetch dials from the server", err);
                        } else {
                            //console.info("ServerDials", dials);
                            groupDials = dials;
                        }

                        addSponsorGroups(dials);
                    });
                }            
            }, 350);
        }, function () {
            return (typeof CNT !== "undefined") ? true : false;
        }, {
            name: "Wait for CNT"
        });
    });});
}

function addSponsorGroups(dials) {
    if(!dials || !dials.length) return;

    var addSponsorGroupId = false;
    var getDefaultGroupId = true;

    for(var k in dials){
        if(dials[k].groupId == sponsorGroupId){
            addSponsorGroupId = true;
        }else if(dials[k].groupId == false){
            getDefaultGroupId = true;
        }
    }

    Async.chain([
        function (nextHandler) {
            if(!getDefaultGroupId){
                nextHandler();
            }else{
                BRW_dbTransaction(function (tx) {
                    BRW_dbSelect({ //Param
                            tx: tx,
                            from: 'GROUPS',
                            where: {
                                'type': GROUP_TYPE_DEFAULT
                            }
                        },
                        function (results) {
                            if(results.rows.length){
                                GROUP_DEFAULT_ID = results.rows[0].id;

                                for(var k in dials){
                                    if(!dials[k].groupId) dials[k].groupId = GROUP_DEFAULT_ID;
                                }

                            }else{
                                console.warn('No default group');
                            }

                            nextHandler();
                        },
                        function (error){  
                            console.warn(error);
                            nextHandler();
                        }
                    );
                });
            }
        },
        function (nextHandler) {
            if(!addSponsorGroupId){
                nextHandler();
            }else{
                BRW_dbTransaction(function (tx) {
                    BRW_dbSelect({ //Check group
                        tx: tx,
                        from: 'GROUPS',
                        where: {
                            'id': sponsorGroupId
                        }
                    },
                    function (grp) {
                        if (grp.rows.length == 0) {
                            var insert = {
                                id: sponsorGroupId,
                                type: 1,
                                title: translate("group_sponsoredst"),
                                addDate: Date.now(),
                                orderNum: 2
                            };
        
                            BRW_dbInsert({ //Param
                                    tx: tx,
                                    table: 'GROUPS',
                                    'set': insert,
                                    //passive: ['groups', 'dials']
                                },
                                function () {
                                    nextHandler();
                                    //createSponsorDials(serverDials);
                                },
                                function () {}
                            );
                        }
                    });
                });
            }
        },
        function () {
            addSponsorDials(dials);
        }
    ]);
}

function addSponsorDials(dials) {
    BRW_dbTransaction(function (tx) {
        BRW_dbSelect({ //Param
                tx: tx,
                from: 'DIALS',
                /*where: {
                    'groupId': sponsorGroupId,
                },*/
                whereIn: {
                    'key': 'groupId', 'arr': [sponsorGroupId, GROUP_DEFAULT_ID]
                }
            },
            function (results) {
                var orderNum = 0,
                    count = 0;

                if (results.rows.length > 0) {
                    for (var key in results.rows){
                        if (results.rows[key].id) {
                            var val = results.rows[key];
                            
                            for (var k in dials){
                                if (dials[k].id == val.id) {
                                    dials.splice(k, 1);
                                    break;
                                }
                            }

                            orderNum = Math.max(orderNum, parseInt(val.orderNum));
                            count++;
                        }
                    }
                } 

                if (dials.length == 0) return;

                for (var key in dials) {
                    dials[key].orderNum = orderNum++;
                    
                    BRW_dbInsert({
                            tx: tx,
                            table: 'DIALS',
                            'set': dials[key]
                        }
                    );
                }

                localStorage.setItem("dials-installed", 1);
                
                setTimeout(function () {
                    if(typeof refreshSidebarGroups == "function"){
                        refreshSidebarGroups();
                    }else{
                        BRW_sendMessage({
                            command: "refreshSidebarGroups"
                        });
                    }
                }, 165);
            }
        );
    });
}