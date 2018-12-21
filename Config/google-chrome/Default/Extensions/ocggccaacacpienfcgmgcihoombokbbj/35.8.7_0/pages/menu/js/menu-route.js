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
}else{
var scripts = [
        "../../vendor/jquery-3.3.1.min.js",
        "../../vendor/jquery-ui/js/jquery-ui.min.js",
        "../../vendor/bootstrap/js/bootstrap.min.js",
        //"../../vendor/md5.js",
        "../common.js",
];

if(head.browser.name == 'ff'){
    scripts = scripts.concat([
            "../../vendor/q.js",
            "../../vendor/dexie.min.js",
            "../../vendor/LargeLocalStorage.js",

            "../../browsers/browser-firefox-webext.js",
            "../../browsers/datebase-firefox.js",
    ]);
}else if(head.browser.name == 'chrome'){
    scripts = scripts.concat([
        "../../browsers/browser-chrome.js",
        "../../browsers/datebase-chrome.js",
    ]);
    }

scripts = scripts.concat([
        "../common/module/analytics.js",
        "../common/auth/js/auth.js",
        "./js/menu.js",
]);

//Add styles
scripts = scripts.concat([
    "../common/auth/style/flex.css",
    "../common/auth/style/font-awesome.min.css",
    "../common/auth/style/style.css",
]);

//Custom scrollbar
scripts = scripts.concat([
    "../../vendor/scrollbar/jquery.mCustomScrollbar.concat.min.js",
    "../../vendor/scrollbar/jquery.mCustomScrollbar.min.css",
]);
}

head.load(scripts);