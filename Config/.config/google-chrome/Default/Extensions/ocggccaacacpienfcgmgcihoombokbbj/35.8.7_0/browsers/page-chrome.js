function PGS_addOptionsListener(){
    chrome.extension.onMessage.addListener(function(message) {
        if(typeof message != "object" || !message.command || message.handler) return;

        var view = true;
        
        //console.info(message.command, message);
        
        if (message.command == "themeSendBackgroundVideoToPage") // download video theme complete
            displayLoadedBackgroundVideoTheme(message);
        else if (message.command == "changeStaticBackgroundToOptionsPage") // change static content
            changeStaticBackgroundToOptionsPage(message);
        else if (message.command == "changeLiveBackgroundToOptionsPage") // change video content resolution
            changeLiveBackgroundToOptionsPage(message);
        else if (message.command == "changeFlixerBackgroundToOptionsPage") // change flixer video content
            changeFlixerBackgroundToOptionsPage(message);
        else if (message.command == "changeBackgroundImageFileProgressToPage") // change video content progress
            changeBackgroundImageFileProgress(message);
        else if (message.command == "changeBackgroundFlixerVideoFileProgressToPage") // change flixer video content progress
            changeBackgroundFlixerVideoFileProgressToPage(message);
        else if (message.command == "videoThemeSendDownloadProgressToPage" || message.command == "changeBackgroundVideoFileProgressToPage") // change video theme progress
            changeBackgroundVideoFileProgress(message);
        else if (message.command == "changeBackgroundImageFileErrorToPage") // change video content error
            changeBackgroundImageFileError(message);
        else if (message.command == "changeBackgroundFlixerVideoFileErrorToPage") // change flixer video content error
            changeBackgroundFlixerVideoFileErrorToPage(message);
        else if (message.command == "videoThemeSendDownloadErrorToPage" || message.command == "changeBackgroundVideoFileErrorToPage") // download video theme error
            changeBackgroundVideoFileError(message);
        else if (message.command == "availableContentDownloadError")
            getAvailableContentError(message);
        else if (message.command == "loadMoreLixerContentEnd")
            displayLoadedFlixerContent(message);
        else if (message.command == "removeOptionsContentFavoriteMark")
            removeContentFavoriteMark(message);
        else if (message.command == "downloadQueueDecrease"){
            if (typeof downloadQueueDecreaseClient != "undefined") downloadQueueDecreaseClient();
        }
        else if (message.command == "setThumbForUserImage")
            setThumbForUserImage(message.theme.id, message.url);
        else if (message.command == "downloadImageByUserComplete") {
            downloadImageByUserComplete();
        } else if (message.command == "protectElements") {
            if (protectElements) protectElements();
        } else if (message.command == "readBackup") {
            if (typeof BACK == "object") BACK.readBackup(message.data);
        } else if (message.command == "showLiveStartPageMessage") {
            if(typeof showLiveStartPageMessage == "function") showLiveStartPageMessage(message.message);
        } else if (message.command == "installWaitingContent") {
            if(typeof installThemeNow == "function") installThemeNow(false);
        } else if (message.command == "updateAvailableThemesListOnPageLoad"){
            if(typeof updateAvailableThemesListOnPageLoad == "function"){
                setTimeout(()=>{
                    updateAvailableThemesListOnPageLoad();
                }, 1);
            }
        } else if (message.command == "isThemeExistsResponse"){
            if(typeof NAVI == "object") NAVI.themeFilesExists(message);
        }
        
        /*Collect*/
        if(["changeStaticBackgroundToOptionsPage", "changeLiveBackgroundToOptionsPage", "changeFlixerBackgroundToOptionsPage"].indexOf(message.command) !== -1){
            if(typeof NAVI == "object") NAVI.reloadTheme();
        }
    }); 
}

function PGS_addNewtabListener(){
    chrome.extension.onMessage.addListener(function(message) {
        if(typeof message != "object" || !message.command || message.handler) return;

        //console.info(message.command, message);
        
        if(message.command == "tileThumbLoadComplete") // speed dial each tile load complete
            displayLoadedTileThumbImage(message);
        else if(message.command == "tilesThumbsLoadEnd") // speed dial all tiles load end
            displayNotLoadedTilesThumbImages();
        else if(message.command == "themeSendBackgroundToPage") // download image theme complete
            displayLoadedBackgroundImageTheme(message);
        else if(message.command == "sendVideoThemeOfferToPage") { // download video theme offer
            checkPageDisplayVideoThemeOffer(message);
        } else if(message.command == "themeSendBackgroundVideoToPage") // download video theme complete
            displayLoadedBackgroundVideoTheme(message);
        else if(message.command == "videoThemeSendDownloadProgressToPage") // download video theme progress
            displayLoadingVideoThemeProgress(message);
        else if(message.command == "videoThemeSendDownloadErrorToPage") // download video theme error
            displayLoadingVideoThemeError(message);
        else if(message.command == "imageThemeSendDownloadProgressToPage") // download image theme progress
            displayLoadingImageThemeProgress(message);
        else if(message.command == "imageThemeSendDownloadErrorToPage") // download image theme error
            displayLoadingImageThemeError(message);
        else if(message.command == "hideThemeVideoDownloadOffer") // hide download video theme offer when theme change
            hideThemeVideoDownloadOffer(message);
        else if(message.command == "errorLoadGalleryThumb" || message.command == "errorLoadLiveThumb") // error show on load gallery or auto preview thumb problem
            errorLoadGalleryThumb(message);
        else if(message.command == "pageBgVideoControl")
            pageBgVideoControl(message.tabs);
        else if(message.command == "everhelperCookiesAnswer"){
            if(SYNC) SYNC.evhCookies(message.cookies);
        }
        else if(message.command == "previousSessionButton"){
            previousSessionButton(message.nTabs, message.sessionId);  
        }
        else if(message.command == "displayLoadingProgressInPopup"){
            if(typeof displayLoadingProgressInPopup == "function") displayLoadingProgressInPopup(message); 
            if(typeof displayLoadingImageThemeProgress == "function") displayLoadingImageThemeProgress(message);
        }
        else if(message.command == "protectElements"){
            if(protectElements) protectElements();
        }
        else if(message.command == "refreshSidebarGroups"){
            refreshSidebarGroups();
        }
        else if(message.command == "todoListUpdate"){
            if(typeof TODO == "object") TODO.refresh('lsp');
        }
        else if(message.command == "sidebarDialsUpdate"){
            if(typeof sidebarDialsUpdate == "function") sidebarDialsUpdate();
        }
        else if(message.command == "cantAddNewGroupWithNoDials"){
            if(typeof cantAddGroupWithNoSites == "function") cantAddGroupWithNoSites();
        } else if (message.command == "readBackup") {
            if (typeof BACK == "object") BACK.readBackup(message.data);
        } else if (message.command == "showLiveStartPageMessage") {
            if(typeof showLiveStartPageMessage == "function") showLiveStartPageMessage(message.message);
        } else if (message.command == "dialTitleUpdate") {
            if(typeof dialTitleUpdate == "function") dialTitleUpdate(message.dial);
        }else if (message.command == "setThumbForUserImage"){
            setThumbForUserImage(message.theme.id, message.url);
        }else if (message.command == "updateBackgroundSoft"){
            if(updateBackgroundSoft) updateBackgroundSoft();
        }else if (message.command == "tasksUpdated"){
            if(typeof TODO == 'object') TODO.refresh();
        } else if(String(message.command).indexOf('todoFrontend:') !== -1) {
            if(typeof TODO == "object") TODO.message(message);
        }
    });
}

function PGS_getNewTabCurentTab(callback) {
    chrome.tabs.getCurrent(function(tab) {
        newtabPageTabId = tab.id;
        callback();
    });
}

function PGS_getSettingsCurentTab(callback) {
    chrome.tabs.getCurrent(function(tab) {
        settingsTabId = tab.id;
        callback();
    });
}

$(function(){
    chrome.tabs.onActivated.addListener(function(){
        var video = document.getElementById("background");
        
        if(video){
            BRW_getNetTabPages(function(data){
                
                chrome.tabs.getCurrent(function(currentTab){
                    for(let key in data.tabs) if(data.tabs[key].id == currentTab.id){
                        if(data.tabs[key].active){
                            var player = localStorage.getItem("background-video-state") || "play";
                            
                            if(player == "play") video.play();
                        }else{
                            video.pause();
                        }
                    }
                });      
            });
        }
    });
});