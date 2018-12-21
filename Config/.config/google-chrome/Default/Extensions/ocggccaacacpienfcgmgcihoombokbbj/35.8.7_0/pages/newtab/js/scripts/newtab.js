// merge

var _PAGE = "newtab";

var isMigration = parseInt(localStorage.getItem("migration-process"));

if(isMigration && Date.now() - isMigration < 45e3){
    var scripts = [
        "../../vendor/jquery-3.3.1.min.js",
        "../../vendor/jquery-ui/js/jquery-ui.min.js",
        "../common/in-migration/in-migration.js",
        "../common/in-migration/in-migration.css",
    ];
    
    setInterval(()=>{
        isMigration = parseInt(localStorage.getItem("migration-process"));
        
        if(!isMigration || Date.now() - isMigration > 45e3){
            document.location.reload();
        }
    }, 3000);
    
    head.load(scripts);
}else{
    var storageKeyName = "indexeddb-check-passed";
    var isDBChecked = parseInt(localStorage.getItem(storageKeyName));
    
    if(isDBChecked && Date.now() - isDBChecked < 30*24*60*60*3){
        startNormal();
    }else{
        var db = window.indexedDB.open('test');
        db.onerror = function(){
            localStorage.setItem(storageKeyName, 0);
            startDBWarning();
        }
        db.onsuccess = function(){
            localStorage.setItem(storageKeyName, Date.now());
            startNormal();
        }
    }    
}

function startDBWarning(){
    var scripts = [
        "../../vendor/jquery-3.3.1.min.js",
        "../../vendor/bootstrap/js/bootstrap.min.js",
        //"../../browsers/browser-firefox-webext.js",
        //"../common.js",
    ];
    
    scripts = scripts.concat([
        "../common/idbwarning/idbwarning.js",
        "../common/idbwarning/idbwarning.css",
    ]);
    
    head.load(scripts);
}
    
function startNormal(){
if(head.browser.name == 'ff') head.load("css/firefox.css");

var scripts = [
        "../../vendor/jquery-3.3.1.min.js",
        "../../vendor/jquery-ui/js/jquery-ui.min.js",
        "../../vendor/bootstrap/js/bootstrap.min.js",
        "../../vendor/parallax.min.js",
        "../../vendor/clock/js/vendor/jquery.counteverest.js",
        "../../vendor/jquery.pulse.min.js",
        "../../vendor/contextmenu/jquery.contextmenu.js",
        "../../vendor/jGrowl/jquery.jgrowl.min.js",
        "../../vendor/md5.js",
        "../common.js",
];

if(head.browser.name == 'ff'){
    scripts = scripts.concat([
        "../../vendor/q.js",
        "../../vendor/dexie.min.js",
        "../../vendor/LargeLocalStorage.js",

        "../../browsers/browser-firefox-webext.js",
        "../../browsers/page-firefox-webext.js",
        "../../browsers/datebase-firefox.js",
        "../client/show-livestartpage-message.js"
    ]);
}else if(head.browser.name == 'chrome'){
    scripts = scripts.concat([
        "../../browsers/browser-chrome.js",
        "../../browsers/datebase-chrome.js",
        "../../browsers/page-chrome.js",
        "../client/show-livestartpage-message.js"
    ]);
    }

scripts = scripts.concat([
        "../common/module/preload.js",
        "../common/module/analytics.js",
        
        "../common/auth/js/auth.js",
        "../common/pass/js/passcode.js",
        "../common/backup/js/backup.js",
        "../common/module/suggestions.js",
        "../common/welcome/welcome.js",
        "../common/options/js/value.js",
        "../common/phototags/js/tags.js",
        
]);

if(parseInt(localStorage.getItem("tiles-block-display")) !== 0){
    scripts = scripts.concat([
        "js/sidebar.js",
        "js/new_dial.js",
        "js/tile_context_menu.js",
        "js/group_context_menu.js",
        "js/ondialsearch.js",
    ]);
}
 
scripts = scripts.concat([
        "js/search.js",
        "js/theme.js",
        "js/page.js",
        "js/tiles.js",
        "js/popup.js",
        "js/todo.js",
        "js/clock.js",
        "js/speech.js",
        "js/weather.js",
        "js/rate.js",
        "js/bookmarks.js",
        "js/relax.js",
        //"js/relax_advanced.js",
        "js/actions.js",
        "../common/auth/js/sync.js",
        "js/modules.js",
        //"js/ondialsearch.js",
    
        "../common/focus/focus.js",
        
        "css/relax.css",
        "css/footer.css",
        "css/search.css",
        "css/clock/clock.css",
        "../common/auth/style/sync.css",
        "../common/phototags/css/tags.css",
]);
   

if(head.browser.name == 'chrome'){
    scripts = scripts.concat([
        "js/pageview.js"
    ]);
}

//Add styles
scripts = scripts.concat([
    "../common/auth/style/flex.css",
    "../common/auth/style/font-awesome.min.css",
    "../common/auth/style/style.css",

    "../common/backup/style/backup.css",
    "../common/focus/focus.css",
    "../common/welcome/style/welcome.css",
]);

//Custom scrollbar
scripts = scripts.concat([
    "../../vendor/scrollbar/jquery.mCustomScrollbar.concat.min.js",
    "../../vendor/scrollbar/jquery.mCustomScrollbar.min.css",
]);
    
scripts = scripts.concat([
    "../../vendor/aws-sdk-2.272.1.min.js",
    "../common/mind/mind.js",
    "../common/mind/style/mind.css",
]);
    
scripts = scripts.concat([
    "../common/date-picker/date-picker.js",
    "../common/date-picker/date-picker.css",
    
    "../common/time-picker/time.js",
    "../common/time-picker/time.css",
    
    "../common/messages/messages.js",

    "../common/todo/todo.js",
    "../common/todo/todo.css",
]);
    
scripts = scripts.concat([
    "../common/hints/hints.js",
    "../common/hints/hints.css",
]);

scripts = scripts.concat([
    "../common/weather/openweather.js",
]);

var D = new Date();
var hours = D.getHours();

if(hours >= 20 || hours <= 6){
    scripts = scripts.concat([
        "css/night.css",
    ]);
}

    head.load(scripts);
}
