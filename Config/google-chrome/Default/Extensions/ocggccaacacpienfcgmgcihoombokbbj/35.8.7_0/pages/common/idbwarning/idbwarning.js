$(function(){
    
    $("body").load("../common/idbwarning/idbwarning.html", function(){
        var $title = $(".idbw-title");
        var $body = $(".idbw-body");
        
        $title.html(chrome.i18n.getMessage("broken_nohistory_title"));
        $body.html(chrome.i18n.getMessage("broken_nohistory_text"));
        
        var quickGuideEn = document.querySelector( ".guide-en" );
        var quickGuideRu = document.querySelector( ".guide-ru" );
        var addonId = chrome.extension.getURL("/").replace('moz-extension://','').replace('/','');
                
        if(quickGuideEn){
            quickGuideEn.addEventListener("click", function() {
                chrome.tabs.create({
                    url: "https://everhelper.me/fix-57-lsp.php?addon-id=" + addonId + "&addon=lsp",
                    active: true
                });
            }, false);
        }else
        if(quickGuideRu){
            quickGuideRu.addEventListener("click", function() {
                chrome.tabs.create({
                    url: "https://everhelper.me/fix-57-ru-lsp.php?addon-id=" + addonId + "&addon=lsp",
                    active: true
                });
            }, false);
        }
        
    });
    
    
    
});