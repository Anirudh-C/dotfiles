/**
 * New tab page TodoList
 */

var windowHeight, windowWidth, todoShowTimer, loadedToDoResponse;

/**
 * Display to do link
 *
 * @param response Object
 */
function displayTodoLink(response) { 
    loadedToDoResponse = response;
    
    if(response && response.displayDials)
        addPageDialsNoticeCloseHandler(response);
    if(response.displayTodoDialPanel) {
        var $todoLink = $("#todo-link");
        var $todoCounter = $("#todo-link-done-counter");
        
        if(getDisplayTodoDialPanel()) {
            toggleHeaderLinksColor((typeof (response.image) != "undefined" && response.image) ||
                (typeof (response.video) != "undefined" && response.video));
            $todoLink.show().css("display","inline-block");
            displayTodoContainer(response);
        }
    }
}

/**
 * Display to do container
 *
 * @param response Object
 */
function displayTodoContainer(response) { 
    if(response.displayTodoDialPanel) {
        var $todoContainer = $("#todo-container");
        windowHeight = parseInt($(window).height());
        windowWidth = parseInt($(window).width());
        
        var containerHeight = parseInt(response.displayTodoSize.height);
        var containerWidth = parseInt(response.displayTodoSize.width);
        
        if(typeof (response.displayTodoCoordinates) != "undefined") {
            var displayTop, displayLeft;
            var defaultPopupMargin = 25;

            if(!response.displayTodoCoordinates) {
                displayTop = (windowHeight - parseInt(response.displayTodoSize.height) - 100) / 2;
                displayLeft = defaultPopupMargin;
            } else {
                displayTop = parseInt(response.displayTodoCoordinates.top);
                displayLeft =  parseInt(response.displayTodoCoordinates.left);
            }

            if(((displayLeft + containerWidth) > windowWidth) || (displayLeft < 0) || ((displayTop + containerHeight) > windowHeight) || (displayTop < 0)) {
                displayTop = windowHeight - containerHeight - 209;
                displayLeft = 25;
            }
            
            $todoContainer.css({"left" : displayLeft + "px", "top" : displayTop + "px"});

            $(window).resize(function() {
                var $todoContainer = $("#todo-container");
                if($todoContainer.is(":visible")) {
                        if(todoShowTimer)
                            clearTimeout(todoShowTimer);
                        todoShowTimer = setTimeout(function() {
                            calculateNewTodoPosition();
                        }, 50);
                }
            });
        }

        var $todoWork = $(".empty-todo-list, .done-todo-list, .work-todo-list, .todo-service-content");
        $todoWork.css({
            "min-width" : response.displayTodoSize.width,
            "min-height" : response.displayTodoSize.height,
            "max-width" : response.displayTodoSize.width,
            "max-height" : response.displayTodoSize.height
        });
        
        $(".todo-service-content").css({
            "min-width" : response.displayTodoSize.width,
            "min-height" : 43 + parseInt(response.displayTodoSize.height) ,
            "max-width" : response.displayTodoSize.width,
            "max-height" : 43 + parseInt(response.displayTodoSize.height)
        });

        
        if (response.visibleTodoPanel && windowWidth >= containerWidth && windowHeight > containerHeight) {
            if (!$todoContainer.is(":visible")) {
                setTimeout(function () {
                    $todoContainer.fadeIn(750);
                }, 250);
            }
        } else {
            var $todoCounter = $("#todo-link-done-counter");
            //$todoCounter.css({"display" : "inline-block"});
            $todoCounter.css({"display" : "inline"});
        }
    }
    addPageDialsNoticeCloseHandler(response);
    

    setTodoListOpacityHover();
    setTodoListOpacity();
    addTodoListDraggableProperty();
    addTodoListResizeProperty();
}
/**
 * Calculate new to do position
 */
function calculateNewTodoPosition() { 
    var $todoContainer = $("#todo-container");
    var defaultPopupMargin = 25;

    var coordinates = getDisplayTodoCoordinates();
    windowHeight = parseInt($(window).height());
    windowWidth = parseInt($(window).width());

    var Stoppos = $todoContainer.position();
    var displayLeft = parseInt(Stoppos.left);
    var displayTop = parseInt(Stoppos.top);

    var containerWidth = $todoContainer.width();
    var containerHeight = $todoContainer.height();

    if((displayLeft + containerWidth) >= windowWidth) {
        $todoContainer.css({"left" : windowWidth - containerWidth});
    } else {
        if(coordinates) {
            if(coordinates.left + containerWidth >= windowWidth) {
                $todoContainer.css({"left" : windowWidth - containerWidth});
            } else {
                $todoContainer.css({"left" : coordinates.left});
            }
        }
        else{
            $todoContainer.css({"left" : defaultPopupMargin});
        }
    }

    var containerPadding = coordinates ? 0 : 120;
    if(windowHeight - containerHeight - containerPadding >= 0) {
        if((displayTop + containerHeight) + containerPadding >= windowHeight) {
            $todoContainer.css({"top" : windowHeight - containerHeight - containerPadding});
        } else {
            if(coordinates) {
                if(coordinates.top + containerHeight >= windowHeight) {
                    $todoContainer.css({"top" : windowHeight - containerHeight});
                } else {
                    $todoContainer.css({"top" : coordinates.top});
                }
            } else {
                $todoContainer.css({"top" : (windowHeight - containerHeight)/2});
            }
        }
    } else {
        $todoContainer.css({"top" : 0});
    }

    if(displayLeft < 0)
        $todoContainer.css({"left" : 0});

    if(displayTop < 0)
        $todoContainer.css({"top" : 0});

    //if(!$todoContainer.is(":visible"))
        //$todoContainer.fadeIn(300);
}

/**
 * Add show hide to do panel click handler
 */
function addShowHideTodoPanelClickHandler() { 
    $("#todo-popup-hide").on("click", hideTodoPopupClickHandler);
    
    $("#todo-link").on("click", function(e) {
        e.preventDefault();
        
        var $todoContainer = $("#todo-container");
        var $todoCounter = $("#todo-link-done-counter");
        var isVisible = getVisibleTodoPanel();
        
        if(isVisible) {
            $todoContainer.fadeOut(250);
            $todoCounter.css({"display": "inline"});
            BRW_sendMessage({command: "changeTodoContainerVisible", "val": !isVisible});
        } else {
            windowHeight = parseInt($(window).height());
            windowWidth = parseInt($(window).width());
                        
            if(windowWidth >= $todoContainer.width() && windowHeight > $todoContainer.height()) {
                calculateNewTodoPosition();
                $todoContainer.fadeIn(250);
                $todoCounter.css({"display" : "none"});
                $("#todo-footer-input").focus();
                BRW_sendMessage({command: "changeTodoContainerVisible", "val": !isVisible});
            }
        }
    });
}

/**
 * Hide to do popup click handler
 */
function hideTodoPopupClickHandler() { 
    var $todoContainer = $("#todo-container");
    var $todoCounter = $("#todo-link-done-counter");
    var isVisible = $todoContainer.is(":visible");
    if(isVisible) {
        $todoContainer.fadeOut(250);
        $todoCounter.css({"display": "inline"});
        BRW_sendMessage({command: "changeTodoContainerVisible", "val": !isVisible});
    }
}

/**
 * Hide to do popup
 */
function hideTodoPopup() { 
    var $todoContainer = $("#todo-container");
    var $todoCounter = $("#todo-link-done-counter");
    var isVisible = $todoContainer.is(":visible");
    if(isVisible) {
        $todoContainer.hide();
        $todoCounter.css({"display": "inline"});
        BRW_sendMessage({command: "changeTodoContainerVisible", "val": !isVisible});
    }
}



function setTodoListOpacityHover(force){
    $(".todo-container-content").on("mouseover", function(){
        setTodoListOpacity(0.6);
    });
    
    $(".todo-container-content").on("mouseleave", function(){
        setTodoListOpacity();
    });
}
    
function setTodoListOpacity(force){
    var opacity = getTodoPanelOpacity() * 1;
    
    if(force && force > opacity) opacity = force;
    
    $(".todo-container-content").stop().animate({
        "background-color": "rgba(0,0,0,"+opacity+")"
    }, 250);
    $(".todo-header").stop().animate({
        "background-color": "rgba(0,0,0," + Math.min(1, (opacity + 0.2)) + ")"
    }, 250);
}

/**
 * Add to do list sortable
 */
/*
function addTodoListSortableProperty() { 
    $("#work-todo-list").find("ul").sortable({ axis: 'y',
        update: function( event, ui ) {
            var changedItems = [];
            var order = 0;
            $("#work-todo-list").find(".work-todo-list-item-checkbox").each(function() {
                changedItems.push({"id" : $(this).attr("data-item-id"), "order" : ++order});
                
                //if(typeof SYNC == "object") SYNC.changeToDo({
                //    id      : $(this).attr("data-item-id"),
                //    title   : $(this).parent().siblings(".work-todo-list-item-title").text()
                //});
                
            });
            BRW_sendMessage({command: "changeTodoItemSort", "items": changedItems});
            $("#todo-footer-input").focus();
        }
    });
}
*/


/**
 * Add to do list draggable
 */
function addTodoListDraggableProperty() {     
    $("#todo-container").draggable({ handle: "#todo-header", containment: "#background-borders", scroll: false, delay:0,
        start: function(event, ui) {
            //console.info("TODO draggable", event);
        },
        stop: function(event, ui) {
            updateTodoListCoordinates($(this));
            $("#todo-footer-input").focus();
        }
    });
}

/**
 * Update to do list coordinates
 *
 * @param $el jQuery element
 */
function updateTodoListCoordinates($el) { 
    var Stoppos = $el.position();
    var left = parseInt(Stoppos.left);
    var top = parseInt(Stoppos.top);
    BRW_sendMessage({command: "changeTodoItemCoordinates", "left": left,  "top": top});
}

/**
 * Add to do list resize property
 */
function addTodoListResizeProperty() {
    $(".todo-container-content").resizable({
        containment: "#background-borders",
        maxHeight: parseInt($(window).height() * 0.8) || 550,
        maxWidth: 600,
        minHeight: 350,
        minWidth: 430,
        handles: 'e, s, se',
        resize: function( event, ui ) {
            var width =  ui.size.width - 30;
            var height = ui.size.height - 84;
            $(".empty-todo-list, .done-todo-list, .work-todo-list").css({"min-width" : width, "min-height" : height, "max-width" : width, "max-height" : height});
            $(".todo-service-content").css({"min-width" : width, "min-height" : 43 + parseInt(height), "max-width" : width, "max-height" : 43 + parseInt(height)});
        },
        stop: function( event, ui ) {
            BRW_sendMessage({command: "changeTodoItemSize", "width": ui.size.width - 30,  "height": ui.size.height - 84});
            updateTodoListCoordinates($("#todo-container"));
            $("#todo-footer-input").focus();
        }
    });
}

$(function() {
    if(getDisplayTodoDialPanel()) {
        addShowHideTodoPanelClickHandler();
    }
    /*
    $("#todo-container").on("click", ".work-todo-list-item-title .link", (event)=>{ // Task #1535.1
        var link = String($(event.currentTarget).text()).trim();
        
        console.info(link);
        
        if(link.indexOf('//') === 0) link = 'http:'+link;
        else
        if(link.indexOf('//') === -1 || link.indexOf('//') > 6) link = 'http://'+link;
        
        console.info(link);
        
        openUrlInNewTab(link);
    });
    
    */
});













