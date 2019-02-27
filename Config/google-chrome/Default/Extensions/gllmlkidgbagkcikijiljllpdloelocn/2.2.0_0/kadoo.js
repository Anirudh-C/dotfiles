if(window.location.href.match('shop.kaadoothebiggame.com')||window.location.href.match('shop.kaadoothebiggame.com/products/kaadoo-nilgiris-biosphere-spots-stripes-edition')||window.location.href.match('shop.kaadoothebiggame.com/products/lions-den-western-india-edition')||window.location.href.match('shop.kaadoothebiggame.com/products/kaadoo-african-savannah-migration-mania-edition')||window.location.href.match("shop.kaadoothebiggame.com/cart")){
	if($("header.site-header").length>0){
		// display_kaddo_model();
		$("<div><img src=\"https://i.imgur.com/frFP44X.png\" style=\" display: block; margin-left: auto; margin-right: auto; margin-top:5px; margin-bottom:20px;\"> </div>").insertAfter("header.site-header");
	}
    $("body").append("<div style=\"position:fixed; bottom:30px; right:35px; z-index:2147483647;\" id=\"mc_kadoo_round_banner\"><a title=\"Close\" style=\"position: absolute; right:0px;width: 36px;height: 36px;cursor: pointer;z-index: 18040;font-size: 0px;background-color: transparent; background-position: 0px 0px; background-image:url('https://i.imgur.com/8PdquKi.png')\" id=\"round_banner_close\"> </a><img src=\"https://i.imgur.com/u5ERFbn.png\" style=\" display: block; margin-left: auto; margin-right: auto; margin-top:0px;\"></div>");

    $("body").on("click","#round_banner_close",function(){
    	$("#mc_kadoo_round_banner").remove();
    });

    setTimeout(function(){
    	$("#mc_kadoo_round_banner").remove();
    },30*1000)


    $("body").on("click","button[name=checkout]",function(){
    	chrome.runtime.sendMessage({"method":"kadoo_checkout_click","link":window.location.href},function(response){});
    });


    $("body").on("click","button[name=add]#AddToCart",function(){
    	chrome.runtime.sendMessage({"method":"kadoo_addtocart_click","link":window.location.href},function(response){});
    });



}

if(window.location.href.match("checkout.shopify.com/12426824/checkouts/")){

	chrome.runtime.sendMessage({"method":"kadoo_checkout_page_visit","link":window.location.href},function(response){});

	if($(".order-summary__sections").length>0){
		// display_kaddo_model();

		$(".order-summary__sections").append("<div id=\"mc_kadoo_coupon\" title=\"Click here to Apply the Coupon\" style=\"cursor:pointer;\"><img src=\"https://i.imgur.com/u5ERFbn.png\" style=\" display: block; margin-left: auto; margin-right: auto; margin-top:0px;\"> </div>");

		// $("body").on("click","#mc_kadoo_coupon",function(){
		// 	copyToClipboard("MCHOOSE20");
		// 	$("#checkout_reduction_code").val("MCHOOSE20");
		// 	$(".order-summary__section.order-summary__section--discount button").click();
		// });

		apply_kadoo_coupon_code();

		$("body").on("mouseenter","#mc_kadoo_coupon img",function(){
			$("#mc_kadoo_coupon img").css("box-shadow","0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19");
		});

		$("body").on("mouseleave","#mc_kadoo_coupon img",function(){
			$("#mc_kadoo_coupon img").css({"box-shadow":""});
		});


	}

    $("body").on("click","button:contains(Continue to shipping method)",function(){
    	chrome.runtime.sendMessage({"method":"kadoo_continue_shopping_click","link":window.location.href},function(response){});
    });


	
}

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

function display_kaddo_model(){

	chrome.storage.local.get({"kadoo_modal_displayed":false},function(response){
		if(response.kadoo_modal_displayed == false){

		    $("head").append("<style id=\"mc_kadoo_modal_styles\">.mc_modal{display: none; \/* Hidden by default *\/ position: fixed; \/* Stay in place *\/ z-index: 1; \/* Sit on top *\/ padding-top: 100px; \/* Location of the box *\/ left: 0; top: 0; width: 100%; \/* Full width *\/ height: 100%; \/* Full height *\/ overflow: auto; \/* Enable scroll if needed *\/ background-color: rgb(0,0,0); \/* Fallback color *\/ background-color: rgba(0,0,0,0.4); \/* Black w\/ opacity *\/}\/* Modal Content *\/.mc_modal-content{max-width:185px; background-color: #fefefe; margin: auto; border: 1px solid #888; position: relative; top:90px; width: 185px;}\/* The Close Button *\/.mc_modal_close{color: #aaaaaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;}<\/style>");

		    $("body").append("<div id=\"mc_kadoo_Modal\" class=\"mc_modal\"> <div class=\"mc_modal-content\"> <span class=\"mc_modal_close\">&times;<\/span> <img src=\"https:\/\/i.imgur.com\/u5ERFbn.png\" style=\" display: block; margin-left: auto; margin-right: auto; margin-top:0px;\"> <\/div><\/div>");

		    $(".mc_modal_close").click(function(){
		    	$('#mc_kadoo_Modal').remove();
		    });

		    $('#mc_kadoo_Modal').css("display","block");

		    chrome.storage.local.set({"kadoo_modal_displayed":true},function(response){
		    	
		    });

		    $("body").click(function(){
		    	if($('#mc_kadoo_Modal').length>0){
		    		$('#mc_kadoo_Modal').remove();	
		    	}
		    });

		}

	});
}


function apply_kadoo_coupon_code(){

	if($(".applied-reduction-code__information").length>0 && ($(".applied-reduction-code__information").text() == "MCHOOSE20")){
		//coupon is already applied	
		is_coupon_applied();
	}
	else{
		//apply coupon here
			$("#checkout_reduction_code").val("MCHOOSE20");
			$(".order-summary__section.order-summary__section--discount button").click();
			is_coupon_applied();
	}
}

var kadoo_coupon_application_check_timer="";
function is_coupon_applied(){
	console.log("in coupons check");
	if($(".applied-reduction-code__information").length>0 && ($(".applied-reduction-code__information").text() == "MCHOOSE20")){
			//coupon application success

			//clearing imer
	        if(kadoo_coupon_application_check_timer != undefined && kadoo_coupon_application_check_timer!=""){
	        	clearTimeout(kadoo_coupon_application_check_timer);
			}

			//display overlay

			$.toast({"text":"<a href=\"#\" style=\"text-decoration: none;\" target=\"_blank\" style=\"min-width:320px;\"><div><div style=\" min-width:320px; font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\"> Great, you have got yourself a 20% discount! </div> </div></a>","position":"mid-center","hideAfter":1000*10});
            $(".jq-toast-single").css("width","320px");

		}

	else{
		kadoo_coupon_application_check_timer = setTimeout(is_coupon_applied,1000);
	}

}


// $("body").append("<div style=\"position:fixed; bottom:30px; right:0px;\" id=\"test\"><a title=\"Close\" style=\"position: absolute; right:0px;width: 36px;height: 36px;cursor: pointer;z-index: 18040;font-size: 0px;background-color: transparent; background-position: 0px 0px; background-image:url('https://i.imgur.com/8PdquKi.png')\"> </a><img src=\"https://i.imgur.com/u5ERFbn.png\" style=\" display: block; margin-left: auto; margin-right: auto; margin-top:0px;\"></div>");