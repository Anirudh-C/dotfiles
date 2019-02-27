var _PAGE = "options";

var _PAGE = "newtab";

var isMigration = parseInt(localStorage.getItem("migration-process"));

if(isMigration && Date.now() - isMigration < 45e3){
    var scripts = [
        "../../vendor/jquery-3.3.1.min.js",
        "../../vendor/jquery-ui/js/jquery-ui.min.js",
        "../common/in-migration/in-migration.js",
        "../common/in-migration/in-migration.css",
    ];
}else{
if(head.browser.name == 'ff') head.load("css/firefox.css");

var scripts = [
        "../../vendor/jquery-3.3.1.min.js",
        "../../vendor/jquery-ui/js/jquery-ui.min.js",
        "../../vendor/bootstrap/js/bootstrap.min.js",
        "../../vendor/jGrowl/jquery.jgrowl.min.js",
        "../../vendor/colorpick/js/colpick.js",
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
}//else

scripts = scripts.concat([
        "../common/module/analytics.js",
        "../common/options/js/value.js",
        "../common/options/js/navi.js",
        
        "../common/auth/js/auth.js",
        "../common/pass/js/passcode.js",
        "../common/backup/js/backup.js",
        "../common/module/preload.js",
        //"../common/photohosting/js/photo.js",
        "../common/phototags/js/tags.js",
    
        "js/content/header.js",
        "js/content/welcome.js",
        "js/content/rating.js",
        "js/content/feedback.js",
        "js/content/random_themes.js",
        "js/content/flixel_add.js",
        "js/common.js",
        "js/options.js",
        "../../vendor/share42/share42.js",
    
        "../common/module/subscribe.js",
        "../common/module/css/subscribe.css",
    
        "../common/options/css/navi.css",
        //"../common/photohosting/css/photo.css",
        "../common/phototags/css/tags.css",
]);

//Auth styles
scripts = scripts.concat([
        "../common/auth/style/flex.css",
        "../common/auth/style/font-awesome.min.css",
        "../common/auth/style/style.css",
]);
}

head.load(scripts);