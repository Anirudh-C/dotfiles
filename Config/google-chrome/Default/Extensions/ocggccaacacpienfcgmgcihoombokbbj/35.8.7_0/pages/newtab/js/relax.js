var relaxModeIsActive = false;
var relaxModeBodyClickTimer;
var relaxStartTime;
var windowsResizeListenerOff = false;

localStorage.setItem("fullscreen-meditation", 0);

$(function() {
    var relaxActionStart = false, relaxActionTimeout = false;
    
    $(document).on("click", "#options-relax-popup-close", function(e) {
        e.preventDefault(); e.stopPropagation();
        
        relaxActionStart = true;
        $("#relax-modal-content").modal('hide');
        BRW_sendMessage({command: "setRelaxModalDisable"});
    });

    $(document).on("click", "#options-relax-popup-hide", function(e) {
        e.preventDefault(); e.stopPropagation();
        relaxActionStart = true;
        $("#relax-modal-content").modal('hide');
    });

    var $modal = $('#relax-modal-content');
    $modal.on('hide.bs.modal', function(a,b,c) {
        $modal.css("display","none");
        
        clearTimeout(relaxActionTimeout);
        relaxActionTimeout = setTimeout(()=>{
            if(relaxActionStart) relaxSwitcher("start", true);
            relaxActionStart = false;
        }, 15);
    });
    
    fullScreenKeyHandler();
    meditationFaqLinkHandler();
    relaxAlwaysShowHandler();
});

function relaxAlwaysShowHandler(){
    if(VAL.get('relax-btn-always-show')){
        $("#relax").addClass('relax-always-show');
    }
}

function meditationFaqLinkHandler(){
    $(".options-relax-popup-body-bottom-text-link").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        
        BRW_getAcceptLanguages(function(languages){
            var hasRulanguage = languages.indexOf("ru") != -1;
            
            if(hasRulanguage){
                var url = "http://livestartpage.com/ru/meditation";
            }else{
                var url = "http://livestartpage.com/meditation";
            }
            
            openUrlInNewTab(url);
        });
        
    });
    
}

var Bounce122 = false;
function fullScreenKeyHandler() {
    if(getDisplayRelax() != true) return false;
    
    /*
    if (browserName() == 'firefox' && false) { // Depricated for new FF WebExt
        $(window).keypress(function (event) {
            var code = event.keyCode;// || event.which;
            
            if (code == 122)
                if (!Bounce122) {
                    Bounce122 = true;

                    var isFullScreen = localStorage.getItem("fullscreen-meditation");

                    if (
                        (isFullScreen != 1) &&
                        (window.screen.height - 10 > window.innerHeight)
                    ) {
                        localStorage.setItem("fullscreen-meditation", 1);
                        
                        setTimeout(function () {
                            Bounce122 = false;
                            relaxSwitcher("start");
                        }, 150);
                    } else {
                        localStorage.setItem("fullscreen-meditation", 0);
                        
                        setTimeout(function () {
                            Bounce122 = false;
                            relaxSwitcher("stop");
                        }, 150);
                    }
                }

        });
    } else 
    */
    
    if(true){ //Chrome | Opera
        onWindowResizeFunctions["relax"] = function(event){
            //console.info(event);
            
            if(windowsResizeListenerOff) return;
            
            var prm = true;

            
                

            if (browserName() == 'opera') {
                var maxHeight = window.screen.height,
                    maxWidth = window.screen.width,
                    curHeight = window.innerHeight,
                    curWidth = window.innerWidth;

                if(
                    (maxWidth == curWidth)
                    &&
                    ((maxHeight - curHeight) < 41)
                ){
                    prm = false;
                }else{
                    prm = true;
                }
            }

            //console.info(prm, checkIsNotFullScreen(), localStorage.getItem("fullscreen-meditation"));

            if (checkIsNotFullScreen() == false) { //fullscreen
                if(!MEDITATION.state.relax) relaxSwitcher("start");
                else{
                    setTimeout(()=>{
                        MEDITATION.checkFullScreen();
                    }, 35);
                }
            } else {
                if (prm && localStorage.getItem("fullscreen-meditation") == 1) {
                    MEDITATION.f11Actions((stopF11)=>{
                        //console.info('stopF11', stopF11);
                        if(!stopF11) relaxSwitcher("stop");
                    });
                }
            }
        }
    }
}

/**
 * Start relax mode
 */


function startRelaxMode() {
    MEDITATION.ifFullScreen(()=>{
        suspendResizeListener();
        toggleFullScreen(document.body, true);
    });
    
    $(document).on("keyup", relaxModeCloseHandler);
    
    if(relaxModeBodyClickTimer)
        clearTimeout(relaxModeBodyClickTimer);
    
    relaxModeBodyClickTimer = setTimeout(function() {
        $(document).on("click", relaxModeShowCurrentButton);
    }, 400);
    
    relaxModeIsActive = true;
    relaxStartTime = new Date().getTime();
}

/**
 * Stop relax mode
 */
function stopRelaxMode(){
    suspendResizeListener();
    
    toggleFullScreen(document.body, false);
    
    $(document).off("keyup", relaxModeCloseHandler);
    
    if(relaxModeBodyClickTimer)
        clearTimeout(relaxModeBodyClickTimer);
    
    $(document).off("click", relaxModeShowCurrentButton);
    relaxModeIsActive = false;
    
    if(relaxStartTime) {
        var relaxTimeDiff = Math.ceil((new Date().getTime() - relaxStartTime)/* / 1000*/);
        
        sendToGoogleAnaliticMP(function() {
            gamp('send', 'event', 'relax', 'interval', 'seconds', relaxTimeDiff);
        });
    }
    
    $("#cursor-hide-curtain").css("display","none");
}

var suspendResizeListenerTimeout = false;
function suspendResizeListener(){
    if(suspendResizeListenerTimeout) clearTimeout(suspendResizeListenerTimeout);
    
    windowsResizeListenerOff = true;
        
    suspendResizeListenerTimeout = setTimeout(function(){
        //console.info("LISTENER ON");
        suspendResizeListenerTimeout = false;
        windowsResizeListenerOff = false;
    }, 350);
}

document.addEventListener("mozfullscreenchange", function() {//firefox
    if(document.mozFullScreen != undefined && document.mozFullScreen === false){   
        if(relaxModeIsActive){
            var $stopRelaxBtn = $("#relax-done-btn:eq(0)");
            if($stopRelaxBtn)
                $stopRelaxBtn.trigger("click");
        }
    }
});

/**
 * Relax mode close handler
 *
 * @param e Event
 */
function relaxModeCloseHandler(e) {
    if (e.keyCode == 27 && relaxModeIsActive) {
        var $stopRelaxBtn = $("#relax-done-btn:eq(0)");
        if($stopRelaxBtn) $stopRelaxBtn.trigger("click");// merge
    }
}

/**
 * Toggle page FullScreen mode
 *
 * @param elem Node element
 * @param state Bool
 */
function toggleFullScreen(elem, state) {
    //console.info('toggleFullScreen', elem, state);
    
    if (state) {
        if(checkIsNotFullScreen()) {
            if (elem.requestFullScreen)
                elem.requestFullScreen();
            else if (elem.mozRequestFullScreen)
                elem.mozRequestFullScreen();
            else if (elem.webkitRequestFullScreen)
                elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        
        if(browserName() == "firefox"){// Task #1199// merge
            if (document.mozCancelFullScreen) document.mozCancelFullScreen();
            else 
            if (document.exitFullscreen) document.exitFullscreen();
        }else{
            BRW_sendMessage({command: "setFullScreen", data:{"mode":"exit"}});
        }
        
        /*
        if(!checkIsNotFullScreen()) {
            if (document.cancelFullScreen)
                document.cancelFullScreen();
            else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen();
            else if (document.webkitCancelFullScreen)
                document.webkitCancelFullScreen();
        }
        */
    }
}

/**
 * Check now is not FullScreen mode
 *
 * @returns {boolean}
 */
function checkIsNotFullScreen() {
    var notFullScreen = (document.fullScreenElement !== undefined && document.fullScreenElement === null) 
        || (document.mozFullScreen !== undefined && !document.mozFullScreen)
        || (window.innerWidth != screen.width || window.innerHeight != screen.height)
    ;
    
    if(notFullScreen) $("body").removeAttr("fullscreen");
    else $("body").attr("fullscreen", "1");
    
    return notFullScreen;
}

function checkIsFullScreen() {
    return !checkIsNotFullScreen();
}
    
$(()=>{
    checkIsNotFullScreen();
    
    var timeout = 1000;
    if(browserName() == "firefox") timeout = 1000;

    setTimeout(()=>{
        relaxAutoStart();
    }, timeout);
});

function relaxAutoStart(){
    var locked = localStorage.getItem("pass-code-locked");
    if(locked && locked == "on") return;
    
    var hash = String(document.location.hash).split('#').pop();
    
    if(hash === "meditation"){
        if(
            !getRelaxModalDisable()
            ||
            localStorage.getItem("meditation-enable-fullscreen") !== "on"
        ){
            relaxSwitcher("start");
        }else{
            var meditationStartPremission = true;
            var $curtain = $("<div>").attr("id", "meditation-curtain");
            var $close = $("<span>").addClass("mc-close").attr("title", translate("close"));
            var $start = $("<button>").addClass("mc-start btn btn-success").text(translate("click_to_start_meditating"));

            $start.on("click", ()=>{
                if(meditationStartPremission) relaxSwitcher("start");
                removeCurtain();
            });
            
            $close.on("click", ()=>{
                removeCurtain();
            });
            
            $(document).on("keyup", function(e){
                if(e.keyCode == 27){
                    removeCurtain();
                }

                if(e.keyCode == 13 || e.keyCode == 32){
                    if(meditationStartPremission) $("#relax-start-btn").trigger("click");
                    removeCurtain();
                }
            });

            $curtain.append($close).append($start);

            $("body").append($curtain);

            setTimeout(()=>{
                $curtain.addClass("mc-black");
            }, 35);
            
            function removeCurtain(){
                if($curtain.length) {
                    $curtain.removeClass("mc-black");
                
                    setTimeout(()=>{
                        //meditationStartPremission = false;
                        $curtain.remove();
                    }, 300);
                }
            }
        }
    }
}



