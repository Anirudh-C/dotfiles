function sendToGoogleAnaliticMP(callback){    
    if(callback) callback();
    return true;
}

function gamp(send, type, category, action, label, value){
    if(browserName() == "firefox") return false; // GA Disabled for FF

    var message = {
        command: "sendGoogleAnalytics",
        message: {
            send : send || "",
            type : type || "",
            label : label || "",
            value : value || "",
            action : action || "",
            category : category || "",
            title : document.title,
            clientWidth : document.body.clientWidth,
            clientHeight : document.body.clientHeight,
            pathname: "/"+String(document.location.pathname).split("/").pop().split("\\").pop().split(".").shift(),
            location: document.location.href,

        }
    };
    
    BRW_sendMessage(message);
}
    
    
function gampBackend(data){
    //console.info("gampBackend", data);
    
    var param = {
        "v"     : 1,
        "tid"   : "UA-67774717-12",
        "cid"   : getCidGA(),
        "sr"    : screen.width+"x"+screen.height,
        "vp"    : data.clientWidth+"x"+data.clientHeight,
        "ul"    : String(navigator.language).toLocaleLowerCase(),
        "dt"    : data.title || "Start Page",
        "an"    : "LSP " + String(browserName()).capitalizeFirstLetter(),
        //"t"     : "pageview",
        //"dp"    : "/"+String(document.location.pathname).split("/").pop().split("\\").pop().split(".").shift(),
        //"av"    : "16.1.5"
    }

    if(data.type == "page_load" || data.type == "pageview"){
        param["t" ] = "pageview";
        param["dp"] = data.pathname;

        param["dh"] = String(data.location || document.location.href).split('/');
        param["dh"] = param["dh"][2];

    }else if(data.type == "event"){
        param["t" ] = "event";
        param["ec"] = data.category;
        param["ea"] = data.action;

        if(data.label) param["el"] = data.label;
        if(data.value != undefined) param["ev"] = data.value;
    }//else

    //console.log("GA", param);

    var pArr = [];
    for(var k in param) pArr.push(k + "=" + encodeURIComponent(param[k]));

    sendWithMP(pArr.join('&'));

    /*
    if(typeof BRW_post == 'function'){
        BRW_post(
            "http://www.google-analytics.com/collect",
            param,
            function(data) {
                //ok
            }
        );
    }//if
    */  
}

function sendWithMP(param){
    setTimeout(function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://www.google-analytics.com/collect");

        xhr.onload = function(r) {
            //console.info('Success', this.responseText);
        };
        xhr.onerror = function(ex) {
            console.info('Error GA', ex, xhr);
        };

        xhr.send(param);

    }, 5000);
}

function getCidGA(callback){
    var cid = localStorage.getItem("ga:clientId") || localStorage.getItem("ga-unique-cid");
    
    if(!cid){
        cid = createCidGA();
        //ga(function(tracker) { var clientId = tracker.get('clientId'); console.debug(clientId)});
    }
    
    return cid;
}

function createCidGA(callback){
    var date = new Date();
    var cid = browserName(true).substr(0, 2) + "-" + date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + "-" + Math.ceil(Math.random() * 1e15)
    localStorage.setItem("ga-unique-cid", cid);
    
    BRW_sendMessage({command: "setUninstallURL"});
    
    return cid;
}