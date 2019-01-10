// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// ga('create', 'UA-96447191-1', 'auto');
// ga('require', 'displayfeatures');
// ga('set', 'checkProtocolTask', function(){});
// ga('send', 'pageview','popup.html');

console.log = function(){}
var prod_site_list ={
	"sp" : "6pm",
	"as" : "asos",
	"ms" : "macys",
	"ns" : "nordstrom",
	"hm" : "h&m",
	"mc" : "modcloth",
	"ft" : "forever21",
	"nr" : "nordstromrack",
	"to" : "tobi",
	"ex" : "express",
	"re" : "revolve",
	"bc" : "backcountry",
	"fp" : "freepeople",
	"bd" : "bloomingdales",
	"ts" : "topshop",
	"sf" : "saksfifthavenue",
	"ap" : "anthropologie",
	"ae" : "aliexpress",
	"nm" : "neimanmarcus",
	"na" : "net-a-porter",
	"jc" : "jcpenney",
	"ff" : "farfetch",
	"lu" : "lulus",
	"wm" : "walmart",
	"ta" : "target",
	"un" : "uniqlo",
	"az": "Amazon",
	"fk": "Flipkart",
	"ab": "Abof",
	"bw": "Bewakoof",
	"ch": "Chumbak",
	"ci": "Cilory",
	"cv": "Craftsvilla",
	"cy":"chemistryindia",
	"ja": "Jabong",
	"kv": "Koovs",
	"lr": "LimeRoad",
	"my": "Myntra",
	"pt": "Paytm",
	"sd": "Snapdeal",
	"sc": "ShopClues",
	"tc": "Tata Cliq",
	"rn": "Raymond Next",
	"fi": "Fabindia",
	"vo": "Voonik",
	"bi": "Biba",
	"fl": "Faballey",
	"so": "Soch",
	"vm": "Veromoda",
	"aj": "Ajio",
	"ba": "Bata",
	"bo": "Babyoye",
	"bs": "Bombay Shirt",
	"cm": "Coolmango",
	"do": "Daily Objects",
	"eb": "Ebay",
	"fy": "Fashion and You",
	"fa": "Fashionara",
	"fc": "Firstcry",
	"hs": "Homeshop",
	"ho": "Hopscotch",
	"ib": "Infibeam",
	"it": "Itokri",
	"jp": "Jaypore",
	"ki": "Kilol",
	"mi": "Mirraw",
	"nn": "Nnnow",
	"sh": "Shimply",
	"sj": "ShopCj",
	"sb": "StalkBuyLove",
	"st": "StyleTag",
	"zv": "Zovi",
	"za":"zara"

}

$(document).ready(function() {

console.log("document loaded");
	window.parent.postMessage({'origin':'popup'}, "*");

	window.addEventListener('message',function(message){
		if(message.data.origin == 'ext'){
			console.log('message from ext');
			console.log(message.data.text);
			console.log(message.data);
			populate_image_list(message.data.data,message.data.site_code)
		}else{
			console.log('message from different origin');
		}
	});

	chrome.storage.local.get({"auto_results_display":true},function(response){
		$('#auto_disp_results input:checkbox').prop('checked',response.auto_results_display);
		// logic to display button
		// if(response.auto_results_display){

		// 	// hide button
		// 	$("#get_results_button").css("display","none");
		// }else{
		// 	chrome.runtime.sendMessage({"method":"should_get_results_button_displayed"},function(response){
		// 		if(response.status){
		// 			// display get results button
		// 			$("#get_results_button").css("display","block");
		// 		}else{
		// 			// do not display get results button
		// 			$("#get_results_button").css("display","none");
		// 		}
		// 	});
		// }
	});

	chrome.runtime.sendMessage({method:"get_coupons_to_display"},function(response){
	    console.log(response);
	        if(response.display_coupons){
	        	console.log("displaying coupons");
	            display_coupons(response.data);
	            // display tab heads
	            $("#tab_list").css("display","flex");
	            $("ul#tab_list li a#coupons").css("display","inline");

	            // if(!$("ul#tab_list li a#tprods").hasClass("active")){
	            // 	// make tab active
	            // 	$("ul#tab_list li a").not($("ul#tab_list li a#coupons")).removeClass("active");
	            // 	$("ul#tab_list li a#coupons").addClass("active");
	            // 	$("div.tab_container").not($("#coupons_container")).css("display","none");
	            // 	$("#coupons_container").css("display","flex");
	            // }

	        }
	        else{
	        	console.log("not displaying coupons");

	        }

	});

	function swapUrls (response) {
		try {
			var my_emmy = response.status.emmy;
			if(my_emmy){
				var link = "https://www.makkhichoose.com/myproducts?email_id="+my_emmy;
				$("#tprods_container .show-another .mc_div_link").attr("data-url",link);
				$("#tprods_container .show-another .mc_div_link").text("View All Products");
				$("#popup_wishlist_button").text("see products you are following");
				$("#popup_wishlist_button").attr("data-url",link);
			}else{
				var link = "https://www.makkhichoose.com";
				$("#tprods_container .show-another .mc_div_link").attr("data-url",link);
				$("#popup_wishlist_button").attr("data-url",link);

			}

			
		} catch(err) {
			console.log(err);
			console.log('weh! no even response');
		}
	}


	chrome.storage.local.set({'new_price_Drops': false}, function() {
		chrome.runtime.sendMessage({method: "showpageicon"}, function(response){});
	});

	chrome.runtime.sendMessage({method: "getEmmy"}, swapUrls);

	chrome.storage.local.get('price_drop_prods',function(data) {

		var stored_price_drops = [];
		if(data != null && data.price_drop_prods != null) {
			stored_price_drops = data.price_drop_prods;
		}

		console.log(stored_price_drops);

		if(stored_price_drops.length > 0) {

			// $('.load-more').css('display', '');
			// $('#explanation').css('display', 'none');
			//alert('some data');
			price_drops_template = document.querySelector("template#pricedrops").content;
			for(i=0; i<stored_price_drops.length; i++) {	
				if(i==3) {
					break;
				}
				var json_data = stored_price_drops[i];
				// var htmlData = '<div class="box-01"><div class="product-actual-price">' + json_data.drop_percent + '%</div><div class="product-image"><a href="' + json_data.url + '" target="_blank"><img src="' + json_data.img_src + '"></a></div><div class="product-details"><div class="product-name">' + json_data.prod_title + '</div><div class="product-price"><span class="strikeout">₹ ' + json_data.start_price + '</span> ₹ ' + json_data.current_price + '</div></div></div><div>';
				$("#tprods_content").append(make_price_drops(json_data));
			}
			// add in link to user-page
			// http://steals.makkhichoose.com/mystuff?email=undefined
			$("#wish_list_container").css("display","none");
			$("#pdp_notifs_container").css("display","block");

			// making tabs visible
			$("#tab_list").css("display","flex");
			$("ul#tab_list li a#tprods").css("display","inline");
			$("ul#tab_list li a").not($("ul#tab_list li a#tprods")).removeClass("active");
			$("ul#tab_list li a#tprods").addClass("active");
			$("div.tab_container").not($("#tprods_container")).css("display","none");
			$("#tprods_container").css("display","flex");			

			chrome.runtime.sendMessage({method: "getEmmy"}, swapUrls);

			// clearing price drops
			chrome.storage.local.set({'price_drop_prods':[],'new_price_Drops':false},function(response){
				console.log("cleared price drops");
			});
		}
		

	});

	function make_price_drops(json_data){
		var template = price_drops_template.cloneNode(true);

		template.querySelector(".price_drop_link").setAttribute("data-url",json_data.url) 
		template.querySelector(".row .image img").src = json_data.img_src;
		template.querySelector(".content p").textContent = json_data.prod_title;
		template.querySelector(".price").textContent = "$"+numberWithCommas(json_data.current_price);
		template.querySelector(".percent_off").textContent = json_data.drop_percent +" %off";
		template.querySelector(".content h5").textContent = json_data.website;
		return template;

	}

	$("body").on("click","#get_results_button",function(e){
		chrome.runtime.sendMessage({method:"get_similar_products_click_on_popup"},function(response){
			console.log("get results_click_sent")
		})
	})
	// tab settings	
	$("body").on("click","ul#tab_list li a",function(e){

		console.log("list click detected");

		if($(this).attr("id") =="settings"){
			chrome.runtime.sendMessage({method: "showOptionsPage"});
			return;
		}


		$("ul#tab_list li a").not(this).removeClass("active");
		$(this).addClass("active");


		var c_id = $(this).attr("id")+'_container'
		$("div.tab_container").not("#"+c_id).css("display","none");
		$("#"+c_id).css("display","flex")

	});



	chrome.storage.local.get({"emmy":""},function(response){

		if(response.emmy==""){
			//display email form
			// $("#email_display_box").text("Set your email address");
			$("#email_box").val("");
		}
		else{
			//display email
			// $("#email_display_box").text(response.emmy);
			$("#email_box").val(response.emmy)
		}

	});

	$("#email_form .save").click(function(){
		var email = $("#email_form input").val();
		if(validateEmail(email)){
			//display email
			display_mesage("Saving email");
			chrome.storage.local.set({"emmy":email},function(){
				$("#email_form").css("display","none");
				$("#email_display_box").text(email);
			});
		}
		else{
			display_mesage("Invalid email");
		}
	});

	$("#email_display_box").click(function(){
		var email_text = $("#email_display_box").text()
		if(email_text !="Set your email address to receive updates"){
			$("#email_form input").val(email_text);
		}
		$("#email_form").css("display","block");
		
	});

	$("#settings_icon").click(function(){
		chrome.runtime.sendMessage({method: "showOptionsPage"});
	})

	$("body").on("click","#coupons_content .mc_copy",function(){
		console.log("logging this");
		console.log(this);
		var coupon = $(this).attr("data-coupon");
		copyToClipboard(coupon);
		chrome.runtime.sendMessage({method:"coupon_copied",coupon:coupon});
		display_mesage("Coupon Copied");
	});	

	$("body").on("click",".price_drop_link",function(){
		console.log("sending click");
		var url = $(this).attr("data-url");
		// chrome.runtime.sendMessage({method:"popup_close_button_clicked"},function(rsponse){});
		chrome.runtime.sendMessage({method:"open_url_in_tab","url":url},function(rsponse){});

	});


	$("body").on("click",".mc_div_link",function(){
		console.log("sending click");
		var url = $(this).attr("data-url");
		// chrome.runtime.sendMessage({method:"popup_close_button_clicked"},function(rsponse){});
		chrome.runtime.sendMessage({method:"open_url_in_tab","url":url},function(rsponse){});

	});

	$("body").on("click","#popup_wishlist_button",function(){
		console.log("sending click");
		var url = $(this).attr("data-url");
		// chrome.runtime.sendMessage({method:"popup_close_button_clicked"},function(rsponse){});
		chrome.runtime.sendMessage({"method":"send_event","eventCategory":"pop_up_wishlist_clicked","eventAction":"wishlist","eventLabel":""},function(response){
		});
		chrome.runtime.sendMessage({method:"open_url_in_tab","url":url},function(rsponse){});

	});

	// $('body').on("change",'#auto_disp_results input:checkbox',function () {

	//     var check = $(this).attr('checked');
	//     console.log(check);
	//     if(check=="checked"){
	//     	console.log("check box clicked");
	//     }else{
	//     	console.log("not checked");
	//     }
	// });


	$('#auto_disp_results input:checkbox').change(function () {
	    var checked = $(this).prop('checked');
	    if(checked){
			chrome.runtime.sendMessage({method:"get_similar_products_click_on_popup"},function(response){
				console.log("get results_click_sent")
		    	chrome.storage.local.set({"auto_results_display":true},function(){

		    	});
			});
	    }else{
	    	chrome.storage.local.set({"auto_results_display":false},function(){
	    	});
	    }
	});

	$("#email_box").on('keyup', function (e) {
	    if (e.keyCode == 13) {
	        // Do something
	        console.log("enter pressed");
	        $("#email_box").blur()
			var email = $("#email_box").val();
			if(validateEmail(email)){
				//display email
				display_mesage("Saving email");
				chrome.storage.local.set({"emmy":email},function(){
				});
			}
			else{
				$("#email_box").val("");
				display_mesage("Invalid email");
			}
	    }
	});

	$("body").on("click","#results_container #user_selection .result_list div.input_img",function(e){
		chrome.runtime.sendMessage({"method":"send_event","eventCategory":"image_search_click","eventAction":"image_click","event_label":$(this).find("img").attr("src")})
		var site_code = $(this).find("img").attr("data-site");
		get_results_and_populate($(this).find("img").attr("src"),site_code);
	});

	$("body").on("click","#results_container #results_view .back_button",function(e){
		$("#results_container #results_view").css("display","none");	
		$("#results_container #user_selection").css("display","block");
		chrome.runtime.sendMessage({"method":"send_event","eventCategory":"image_search_back_button_click","eventAction":"","event_label":""})
	});


	$("body").on("mouseover","#results_container .ditto_website",function(e){
		// console.log("mouse in");
		$(this).text("visit site");

	});

	$("body").on("mouseout","#results_container .ditto_website",function(e){
		// console.log("mouse out");
		var website = $(this).attr("data-website");
		$(this).text(website);
	});

	$("body").on("click","#results_container .ditto_website",function(e){
		var link = $(this).attr("data-url");
		chrome.runtime.sendMessage({"method":"open_url_in_tab","url":link})
		chrome.runtime.sendMessage({"method":"send_event","eventCategory":"image_search_site_click","eventAction":"","event_label":""})
	});
	
	$("body").on("click","#results_view .result_container .results .ditto_img",function(e){
		var link = $(this).attr("data-url");
		chrome.runtime.sendMessage({"method":"open_url_in_tab","url":link})
		chrome.runtime.sendMessage({"method":"send_event","eventCategory":"image_search_ditto_site_click","eventAction":"","event_label":""})
	});

	$("body").on("click","#results_view .result_container #show_more_button",function(e){
		var img_src = $("#results_view .big_image img").attr('src');
		var link = "http://www.makkhichoose.com/imagesearch?img_url="+img_src;
		chrome.runtime.sendMessage({"method":"open_url_in_tab","url":link})
		chrome.runtime.sendMessage({"method":"send_event","eventCategory":"image_search_show_more_click","eventAction":"","event_label":""})
	});



	$("body").on("click","#results_container .reload_button",function(e){
		window.parent.postMessage({'origin':'popup'}, "*");
	});

	$("body").on("change",'.same_site_filter input:checkbox',function(){
		var checked = $(this).prop('checked');
		if(checked){
			// hide
			var same_site_results = $("#results_view .result_container .results div[data-site]");
			for(var i=0; i<same_site_results.length;i++){
				var big_image_site = $("#results_view .big_image").attr("data-site");
				var curr_site = $(same_site_results[i]).attr("data-site");
				if(big_image_site == curr_site){
					$(same_site_results[i]).css("display","none");
				}
				
			}
		}else{
			// unhide
			var same_site_results = $("#results_view .result_container .results div[data-site]");
			for(var i=0; i<same_site_results.length;i++){
				var big_image_site = $("#results_view .big_image").attr("data-site");
				var curr_site = $(same_site_results[i]).attr("data-site");
				if(big_image_site == curr_site){
					$(same_site_results[i]).css("display","inline-block");
				}

			}
		}
	});

	// $("body").on("click","#bc_button",function(e){
	// 	chrome.runtime.sendMessage({method:"open_url_in_tab","url":"http://www.makkhichoose.com/login"},function(rsponse){});
	// 	chrome.runtime.sendMessage({"method":"send_event","eventCategory":"popup_bc_click","eventAction":"popup_bc_click","eventLabel":""},function(response){});
	// });

});


function display_mesage(msg,t_ms){

	if(!t_ms){
		t_ms = 3000;
	}

	$("#snackbar").text(msg);
	$("#snackbar").addClass("show");

	setTimeout(function(){
		$("#snackbar").removeClass("show");

	},t_ms);

}

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}



function display_copy_popup() {
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
    
    setTimeout(function(){
    	popup.classList.toggle('show');
    },1000)
}


var coupons_template;
function display_coupons(response){
	console.log("in display coupons");
	console.log(response);
    coupons_template = document.querySelector("template#coupons").content;
	insert_coupons_template(response);
	//make div visible
	$("#no_coupons").css("display","none");
	$("#coupons_content").css("display","block");
    
}


function insert_coupons_template(c_data){
	console.log(c_data);
    for(var i=0;i<c_data.length;i++){
        $("div#coupons_content").append(make_coupons_div(c_data[i]));
        // console.log(make_copuons_div(c_data[i]));
    }
}

function make_coupons_div(coupon){
    var template = coupons_template.cloneNode(true);
    template.querySelector("h4").textContent = coupon.code;
    template.querySelector("p").innerHTML = coupon.desc;
    template.querySelector(".mc_copy").setAttribute("data-coupon",coupon.code);
    var title_elem = $('<div/>').append($.parseHTML(coupon.desc));
    template.querySelector(".content").setAttribute("title",title_elem.text());
    return template.cloneNode(true);
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function populate_image_list(image_src_list,site_code){
	var template_main = document.querySelector("template#image_list_elem").content;
	$("#results_container .result_list").text("");
	for(var i=0;i<image_src_list.length;i++){
		var template = template_main.cloneNode(true);
		if(image_src_list[i].startsWith("//")){
			image_src_list[i] = "http:" + image_src_list[i];
		}
		template.querySelector(".ditto_img").src = image_src_list[i];
		template.querySelector(".ditto_img").setAttribute("data-site",site_code);
		$("#results_container .result_list").append(template.cloneNode(true));
	}
}

function get_results_and_populate(img_src,site_code){

		
	$("#results_container #user_selection").css("display","none");
	$(".same_site_filter").css("display","none");
	$("#results_container #results_view .big_image img").attr("src",img_src);
	console.log("setting site_code",site_code);
	$("#results_container #results_view .big_image").attr("data-site",site_code);
	// $("#results_container #results_view .result_container").text("");
	$("#results_container #results_view .load_container").css("display","block");
	load_text_animation_handler();
	$("#results_container #results_view .result_container .err_msg").css("display","none");
	$("#results_container #results_view").css("display","block");
	$("#results_container #results_view .result_container .results").text("");


	var deets_obj = {
		"country": "in",
		"includeOOS": false,
		"isAggs": false,
		"image": img_src		
	}
	var result_req = backPostGet({
	        type: "POST",
	        url: "https://data2.makkhichoose.com/gencluster",
	        // url:"http://139.162.26.46:8082/gencluster",
	        data: JSON.stringify(deets_obj),
	        contentType: "application/json; charset=utf-8",
	        dataType: "json",
	        timeout: 300500,

	    });
	result_req.done(real_time_search_success(img_src));

	result_req.fail(real_time_search_fail(img_src));
}

function backPostGet(json_obj) {
	var deferredObject = $.Deferred();
	chrome.runtime.sendMessage({method: "backPostGet", key:json_obj}, function(response) {
		if (response.status) {
			if (response.req == 'succ') {
				deferredObject.resolve(response.data, response.text_status, response.jq_xhr);
			} else {
				deferredObject.reject(response.jq_xhr, response.text_status, response.error);
			}
		}
	});
	return deferredObject.promise();
}


var back_price_sites = ["az","fk","sd","my","ja","tc","aj","ci","jp","lr","mi","so","vo","fi","cy","sb","fl","cv","pt","ch","fy","nn","it","vm","rn"];
function real_time_search_success(img_src){
	return function(response){
		if( $("#results_view .big_image img").attr('src') != img_src ){
			return;
		}
		
		if($("#results_view .big_image").attr("data-site")=="not_available"){
			$(".same_site_filter").css("display","none");
		}else{
			$(".same_site_filter").css("display","inline-block");
		}

		var img_results = response['result'];
		console.log("suucess got results");
		for(var i=0;i<img_results.length;i++){
			var result = img_results[i];
			result["main_image"] = img_src;
			result["order"] = i;
			result["is_dittory"] = true;
			if(back_price_sites.indexOf(result.website)!=-1){
				if(parseFloat(result.sd)>1800){
					//do back price
					console.log("doing backprice");
					// backPrice(result,result.website);
					fetchPSimData(result, result.website)
				}
				else{
					console.log("inserting without backprice for");
					insertDittoryProduct(result);	
				}
			}
			else{
				console.log("inserting without backprice");
				insertDittoryProduct(result);
			}
		}
		$("#results_container #results_view .load_container").css("display","none");
		$("body").scrollTop(0);
		$("#results_container #results_view .result_container").css("display","block");
	}
}

function real_time_search_fail(img_src){
	return function(){
		if( $("#results_view .big_image img").attr('src') != img_src ){
			return;
		}
		$("#results_container #results_view .load_container").css("display","none");
		// $("#results_container #results_view .result_container").text("failed to load results..");
		$("#results_container #results_view .result_container .err_msg").css("display","block");
		$("#results_container #results_view .result_container").css("display","block");

	}	
}


function insertDittoryProduct(result){

	if( $("#results_view .big_image img").attr('src') != result['main_image'] ){
		return;
	}
	var template_main = document.querySelector("template#dittory_results_left").content;
	var result_box = template_main.cloneNode(true);
	var website = result["website"];
	console.log(website);
	website = prod_site_list[website].toLowerCase();
	website = website[0].toUpperCase() + website.slice(1);
	console.log(website);
	var affy_link = affyLinkifyDittory(result,result['link']);
	result_box.querySelector("div").setAttribute("title",result["title"]);
	result_box.querySelector("div").setAttribute("data-site",result["website"]);
	result_box.querySelector("div").setAttribute("data-disp-order",result["order"])
	result_box.querySelector(".ditto_website").textContent= website;
	result_box.querySelector(".ditto_website").setAttribute("data-website",website);
	result_box.querySelector(".ditto_website").setAttribute("data-url",affy_link);
	result_box.querySelector(".ditto_img").setAttribute("data-url","http://www.makkhichoose.com/results?pid="+result["uid"]);
	result_box.querySelector(".ditto_img").src=result["img_src"];
	result_box.querySelector(".ditto_price.mc_price").textContent = '₹'+result['prod_price'];

	if((result['prod_price']=="oos")){
		result_box.querySelector(".ditto_price.mc_price").textContent = "OOS";		
		result_box.querySelector(".ditto_price.mc_price").setAttribute("title","Out of stock");
	}



	var populated_results = $("#results_container #results_view .result_container .results .price_result");
	var result_inserted = false;
	for(var i=0; i<populated_results.length;i++){
		var pop_el_disp_order = $(populated_results[i]).attr("data-disp-order");
		if(result["order"]<pop_el_disp_order){
			console.log($(populated_results[i]));
			$(result_box.cloneNode(true)).insertBefore($(populated_results[i]));
			result_inserted = true;
			break;
		}
	}
	if(!result_inserted){
		$("#results_container #results_view .result_container .results").append(result_box.cloneNode(true));	
	}
	
}


function fetchPSimData(server_prod_deets_var, fetch_site) {
	
	//console.log("in psimdata");
	//console.log(fetch_site);
	//console.log(server_prod_deets_var);	

		console.log('stale, getting freshly baked rice');

		if ((server_prod_deets_var.link=='') || (server_prod_deets_var.link==undefined)){
			return true;
		}

		//To avoid price problem due to sellers going out of stock.
		if(fetch_site=='fk'){
			server_prod_deets_var.link=server_prod_deets_var.link.split(/\?pid=[\w]+/)[0] + server_prod_deets_var.link.match(/\?pid=[\w]+/);
		}

		//changed this to add affilate tracking id 
		var fetch_req = server_prod_deets_var.link;
		console.log("fetch ps sim");
		console.log(fetch_site);

		console.log(fetch_req);

		var backprice_search_url=affyLinkifyback_price(server_prod_deets_var,fetch_req);
		console.log(backprice_search_url);
		// console.log('back_price_url');
		// console.log(backprice_search_url);

		// console.log('fetch_req');
		// console.log(fetch_req);


		var search_url;

	    if(affy_flags[fetch_site+'_price']==true){
	        search_url=backprice_search_url;
	        //setting flags to false;
	        affy_flags[fetch_site+'_price']=false;
	        // set_affy(fetch_site+'_price',false);

	     if(fetch_site=='fk'){
            if(Math.random()>0.66){

                search_url=fetch_req;
            }
        }

	     if(fetch_site=='az'){
            if(Math.random()>1){

                search_url=fetch_req;
            }
        }

	     if(fetch_site=='tc'){
            if(Math.random()>1){

                search_url=fetch_req;
            }
        }

        
	    }
	    else{
	        search_url=fetch_req;
	    }

		
		var back_price_proc="back_price_"+fetch_site;

		disp_analytics_send_flags[back_price_proc]='req_sent';

		console.log("search url");
		console.log(search_url);

		var dyn_req;

		if(fetch_site=='fk'){
	        //usual backsearch request to send affilate params to fk server 
	        var dummy_req = backPostGet({
	            type: "GET",
	            url: search_url
	        });
	        dummy_req.done(function(response){
	        	var resp_elem = $('<div/>').append($.parseHTML(response));
	        });
	        var fk_search_url="http://mobileapi.flipkart.net/2/discover/productInfo/0?pids="+server_prod_deets_var['uid'].slice(0,-2);
	        dyn_req = backPostGet({
	            type: "GET",
	            url: fk_search_url,
	            headers:{
	                // "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36",
	                "x-user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36 FKUA/website/41/website/Desktop"
	            }
	         });

        }else if(fetch_site == "pt"){
        	if(fetch_req.match("paytm.com/shop/p")){
				var pt_request = backPostGet({
					"type":"GET",
					"url":fetch_req
				});

				pt_request.done(function(data, textStatus, jqXHR){
					var resp_elem = $('<div/>').append(data);
					var url = $(resp_elem).find("link[rel='canonical']").attr('href');
					var prod_link_part = url.split('paytmmall.com/')[1];
					var result_req = backPostGet({
						"type":"GET",
						"url":"https://catalog.paytm.com/"+prod_link_part,
						"content-type":"application/json"
					});
					result_req.done(ptPrSuccess(server_prod_deets_var, fetch_req));
				});
        	}else{
        		var url = fetch_req;
				var prod_link_part = url.split('paytmmall.com/')[1];
				var result_req = backPostGet({
					"type":"GET",
					"url":"https://catalog.paytm.com/"+prod_link_part,
					"content-type":"application/json"
				});
				result_req.done(ptPrSuccess(server_prod_deets_var, fetch_req));
        	}
        	return;
        }else if(fetch_site == "ch"){
				var link = document.createElement('a') 
				link.href = fetch_req;
				var url = "https://api-cdn.chumbak.com/v1"+link.pathname+'?device=desktop';
				var result_req = backPostGet({
					"type":"GET",
					"url":url,
					"content-type":"application/json"
				});
				result_req.done(chPrSuccess(server_prod_deets_var, fetch_req));
				console.log("setup backprice for ch");
				return;				
        }else if(fetch_site == "fy"){
			var link = document.createElement('a') 
			link.href = fetch_req;
			var link_part = link.pathname.split('p/')[0]
			var url = "http://www.fashionandyou.com/search-new/product/jbsd/"+server_prod_deets_var.pid;
			var result_req = backPostGet({
				"type":"GET",
				"url":url,
				"content-type":"application/json"
			});
			result_req.done(fyPrSuccess(server_prod_deets_var, fetch_req));
			console.log("setup backprice for fy");
			return;				
        }else if(fetch_site == "nn"){
			var link = document.createElement('a') 
			link.href = fetch_req;
			var link_part = link.pathname.split('p/')[0]
			var url = "https://api.nnnow.com/d/api/product/details"
			var result_req =	backPostGet({
					    "type":"post",
					    "url":url,
					    "data" : JSON.stringify({styleId:server_prod_deets_var.pid}),
						 contentType: "application/json; charset=utf-8",
		                 dataType: "json",
		                 headers: {
		                 	"module"  : "odin",
		                 	"content-type" : "application/json;charset=UTF-8"
		                 }			    
				    });
			result_req.done(nnPrSuccess(server_prod_deets_var, fetch_req));
			return;
        }else{
	        console.log(search_url);
			dyn_req = backPostGet({
		    	type: "GET",
		    	url: search_url
			});
		}

		// dyn_req.fail(handelAmazeBalls404(server_prod_deets_var, fetch_site));
		// dyn_req.fail(simPFail(server_prod_deets_var, fetch_site));
		//dyn_req.fail(handelAmazeBalls404(server_prod_deets_var, fetch_site));
		dyn_req.fail(function(){
			console.log("setting "+back_price_proc+"to ok");
			// disp_analytics_send_flags[back_price_proc]='ok';			
		});


		if ( fetch_site=='fk'){
			dyn_req.done(fkPrSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='sd'){
			dyn_req.done(sdPrSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='my'){
			dyn_req.done(myPrSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='ja'){
			dyn_req.done(jaPrSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='az'){
			dyn_req.done(azPrSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='tc'){
			dyn_req.done(tcPrSuccess(server_prod_deets_var, fetch_req));
			}							
		else if ( fetch_site=='aj'){
			dyn_req.done(ajPrSuccess(server_prod_deets_var, fetch_req));
			}										
		else if ( fetch_site=='ci'){
			dyn_req.done(ciPrSuccess(server_prod_deets_var, fetch_req));
			}													
		else if ( fetch_site=='jp'){
			dyn_req.done(jpPrSuccess(server_prod_deets_var, fetch_req));
			}															
		else if ( fetch_site=='lr'){
			dyn_req.done(lrPrSuccess(server_prod_deets_var, fetch_req));
			}																
		else if ( fetch_site=='mi'){
			dyn_req.done(miPrSuccess(server_prod_deets_var, fetch_req));
			}																					
		else if ( fetch_site=='so'){
			dyn_req.done(soPrSuccess(server_prod_deets_var, fetch_req));
			}															
		else if ( fetch_site=='vo'){
			dyn_req.done(voPrSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='fi'){
			dyn_req.done(fiPrSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='cy'){
			dyn_req.done(cyPrSuccess(server_prod_deets_var, fetch_req));
			}																																																																											
		else if ( fetch_site=='sb'){
			dyn_req.done(sbPrSuccess(server_prod_deets_var, fetch_req));
			}																																																																											
		else if ( fetch_site=='kv'){
			dyn_req.done(kvPrSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='fl'){
			dyn_req.done(flPrSuccess(server_prod_deets_var, fetch_req));
			}																																																																													
		else if ( fetch_site=='cv'){
			dyn_req.done(cvPrSuccess(server_prod_deets_var, fetch_req));
			}																																																																										
		else if ( fetch_site=='it'){
			dyn_req.done(itPrSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='vm'){
			dyn_req.done(vmPrSuccess(server_prod_deets_var, fetch_req));
			}																																																																																			
		else if ( fetch_site=='rn'){
			dyn_req.done(rnPrSuccess(server_prod_deets_var, fetch_req));
			}																																																																																			

}//fetchpssim

function clean_json_string(s){
    s = s.replace(/\\n/g, "\\n")  
                   .replace(/\\'/g, "\\'")
                   .replace(/\\"/g, '\\"')
                   .replace(/\\&/g, "\\&")
                   .replace(/\\r/g, "\\r")
                   .replace(/\\t/g, "\\t")
                   .replace(/\\b/g, "\\b")
                   .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    s = s.replace(/[\u0000-\u0019]+/g,""); 
    return s;
}

function encodeURIComponentFix(in_str) {
	return encodeURIComponent(in_str).replace(/%20/g,'+').replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}

 
 var loading_text_list = [
  "Please submit your Aaadhar for...Kidding",
  "We are too cheap to pay for big servers, so please wait",
  "It took a billion years to evolve, this is just a blip",
  "A good time to think about what's important in life",
  "Did you call your parents this week?",
  "That bitcoin, it's going crazy isn't it!",
  "Patience, is also the name of a card game",
  "A minor form of despair, disguised as a virtue",
  "Moore's law suggests we'll load results faster next year"
  ];


function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}
var random_list = [];
var anim_start_timer = "";
var set_anim_text_timer = "";
var anim_iter = 0;

var timer_array = [];


function load_text_animation_handler(){
	for (var random_list=[],i=0;i<10;++i) random_list[i]=i;
	random_list = shuffle(random_list);
	anim_iter = 0;

	if(anim_start_timer){
		clearTimeout(anim_start_timer);
	}
	if(set_anim_text_timer){
		clearTimeout(set_anim_text_timer);
	}

	for(var i =0; i<timer_array.length && timer_array[i];i++){
		clearTimeout(timer_array[i]);
	}

	$("#results_container #results_view .load_container .loading_text_div").text("Parsing the image");
	timer_array[0] = setTimeout(function(){
		$("#results_container #results_view .load_container .loading_text_div").text("Searching for similar items");
	timer_array[1] =	setTimeout(function(){
			$("#results_container #results_view .load_container .loading_text_div").text("Results will show up here");
	timer_array[2] = setTimeout(function(){
				$("#results_container #results_view .load_container .loading_text_div").text("And now the wait begins");
	timer_array[3] =	setTimeout(set_anim_text,1000);
			},1000);
		},1000);
	},1000);

	function set_anim_text(){
		if(set_anim_text_timer){
			clearTimeout(set_anim_text_timer);
		}
		var text = loading_text_list[random_list[anim_iter]]
		$("#results_container #results_view .load_container .loading_text_div").text(text);
		anim_iter = anim_iter+1
		if(anim_iter >= random_list.length){
			anim_iter = 0;
			random_list = shuffle(random_list)
		}
		set_anim_text_timer = setTimeout(set_anim_text,2000);
	}
}	