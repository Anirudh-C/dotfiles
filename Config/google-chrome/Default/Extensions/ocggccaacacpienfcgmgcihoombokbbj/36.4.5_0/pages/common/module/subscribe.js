var fbFollowUrl = "https://www.facebook.com/plugins/follow?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100008474131751&amp;layout=standard&amp;show_faces=true&amp;colorscheme=light&amp;width=138&amp;height=21";

$(function () {
    $("[hrefout]").unbind("click").on("click", (el)=>{
        openUrlInNewTab($(el.currentTarget).attr("hrefout"));
    });
    
    subscribeShowHandler();
    
});


function subscribeShowHandler(){
    
    var install = parseInt(localStorage.getItem('install-key')) || parseInt(localStorage.getItem('installed-key'));
        
    if(install && !isNaN(install)){
        var done = localStorage['subscribe-done'] || false;
        var dont = localStorage['subscribe-dont-show'] || false;
        
        if(!done && !dont){
            var last = parseInt(localStorage['subscribe-shown']) || 0;
            var now = Date.now();
            var day = 24 * 60 * 60 * 1000;
            
            //console.info(last === 0, now - install > day * 3, last > 0, now - last > day * 7);
            
            if(
                (
                    last === 0 &&
                    now - install > day * 3
                ) || (
                    last > 0 &&
                    now - last > day * 7
                )
            ){
                var $modal = $("#subscribe-app-dialog");
                
                /* // Task #1650
                var $note  = $modal.find(".subscribe-fb-note-wrap");
                var $iframe = $modal.find("iframe");
                $iframe.attr("src", fbFollowUrl);
                */
                
                $modal.modal();
                
                $modal.find("a").on("click", (e)=>{
                    setSubscribeDone();
                });
                
                $modal.find(".dont-show-it-anymore").on("click", (e)=>{
                    setSubscribeNever();
                });
                
                /* // Task #1650
                if(true){// iFrame click detect
                    var overFrame = -1;
                    
                    $iframe.hover( function() {
                        overFrame = 1;
                        $note.attr("hovered", $(this).parents(".subscribe-big").attr("data-count"));
                    }, function() {
                        overFrame = -1;
                        $note.attr("hovered", "");
                    });


                    $(window).blur( function() {
                        if( overFrame != -1 ) setSubscribeDone();
                        
                        if($note.attr("hovered") == "fb"){
                            //$note.addClass("clicked"); // Task #1008
                            $("#fbiframe").addClass("clicked");
                        }
                    });
                }
                */
                
                $modal.on('hidden.bs.modal', function () {
                    setSubscribeLater();
                });
                
                function setSubscribeDone(){
                    localStorage.setItem('subscribe-done', Date.now());
                }
                function setSubscribeLater(){
                    localStorage.setItem('subscribe-shown', Date.now());
                }
                function setSubscribeNever(){
                    localStorage.setItem('subscribe-dont-show', Date.now());
                    $modal.modal("hide");
                }
                
                /* // Task #1650
                setTimeout(()=>{
                    autosizeFbFrame($iframe);
                }, 10);
                
                closeSubscribePopup();
                */
            }
        }
    }
}

function closeSubscribePopup() {
    chrome.tabs.onUpdated.addListener(function (tabId) {
        chrome.tabs.get(tabId, tab => {
            if (tab.url.indexOf("www.facebook.com/plugins/close_popup.php?reload") !== -1) {
                setTimeout(()=>{
                    chrome.tabs.remove(tabId);
                }, 500);
            }
        });
    });
}

function autosizeFbFrame($iframe){
    var lang = String(localStorage.getItem('definedLocation')).toLowerCase().split('-').shift();
    
    if(lang == "ru") $iframe.css("width", 176);
    else
    if(lang == "en") $iframe.css("width", 110);
    
    
    //#text-size
    try{
        $.ajax({ // start before dom is ready
            url: fbFollowUrl,
            type: 'get',
            dataType: 'html',
            success: function(data) {
                var $data = $(data);
                var txt = String($data.find("div:eq(0)").text());
                var len = 1 + txt.length;

                
                $text = $("#text-size");
                $text.text(txt);
                width = $text.width() + 41;
                
                if(lang == "ru") width = Math.max(176, width);
                else width = Math.max(110, width);
                
                $iframe.css("width", width);
            }
        });
    }catch(ex){
        console.warn(ex);
    }
}