var result_view ="";
var mc_root = "";
var main_template ="";
var preview_box_template = "";
var result_template = "";
var preview_loading_template="";
var dittory_template="";
var preview_min_box ="";

var dock_settings = "";

var view_update = false;

var price_results = [];
var oos_results = [];
var search_results = [];
var exclusive_results = [];
var graph_data = "";

var is_dittory_prods = false;

var is_exclusive = false;

var is_product_tracked = false;
var show_all_text = "";


var view_results_first_time = true;
var prod_disp_sent = false;

var release_type =  "";

function insert_main_container(){

	 view_update = false;
	 price_results = [];
	 oos_results = [];
	 search_results = [];
	 exclusive_results = [];
	 graph_data = "";

	 is_dittory_prods = false;
	 is_exclusive = false;

	chrome.storage.local.get({"dock_settings":""},function(response){
		if(response.dock_settings !=""){

			if(response.dock_settings[prod_deets.prod_site]){
				//settings available
				dock_settings = response.dock_settings[prod_deets.prod_site];
				load_template();
			}
			else{
				//make settings
				var d_settings = response.dock_settings;
				d_settings[prod_deets.prod_site] = "left"
				chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
					dock_settings = "left";
					load_template();

				});
			}

			chrome.runtime.sendMessage({method:"dock_settings",dock:dock_settings,site:prod_deets.prod_site});
		}
		else{
				var d_settings = {};
				d_settings[prod_deets.prod_site] = "left"
				chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
					dock_settings = "left";
					load_template();

				});

		}

	});


	function load_template(){

		var link = document.createElement('link');
		link.rel = 'import';
		link.href = chrome.extension.getURL('design_files/main_container.html');
		//link.setAttribute('async', ''); // make it async!
		link.onload = function(e) {
			var content = this.import
			console.log("main container import success")
			do_post_template_load_task(content);
			this.remove();
			console.log("removed main container import")
			setevents();
			// make_results_template();
			insert_preview_box();
			send_sd_match("");
			trackMakkhiboxDisplay(prod_deets.prod_site);
		}
		link.onerror = function(e) {

		};
		document.head.appendChild(link);

	}


	function do_post_template_load_task(main_temlpate_content){

		console.log("got content");
		all_container_templates = main_temlpate_content.cloneNode(true);
		// $("body").append("<div style=\"position:fixed; left:0px; top:200px; z-index:9999;\" id=\"mc_host\"></div>");

		if(dock_settings == "top"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; top:200px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			var host =  document.getElementById('mc_host');

			main_template = main_temlpate_content.querySelector('template#main_template_dock_top').content;
			main_template.querySelector("#owl_css_style").href = chrome.extension.getURL('design_files/css/owl.carousel.min.css');
			main_template.querySelector(".owl_css_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/owl.carousel.min.css');+"\"";
			//graph insert_exclusive_msg
			console.log("setting graph images")
			main_template.querySelector(".graph-bg").src = chrome.extension.getURL('design_files/resources/images/graph-bg.png');
			main_template.querySelector(".graph-dyn").src = chrome.extension.getURL('design_files/resources/images/graph.png');
			main_template.querySelector(".graph_down_arrow").src = chrome.extension.getURL('design_files/resources/images/arrow-down.png');
			

		}
		if(dock_settings == "left"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; bottom:50px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			var host =  document.getElementById('mc_host');

			main_template = main_temlpate_content.querySelector('template#main_template_dock_left').content;	

			//graph imgs
			console.log("setting graph images")
			main_template.querySelector(".graph-bg").src = chrome.extension.getURL('design_files/resources/images/graph-bg.png');
			main_template.querySelector(".graph-dyn").src = chrome.extension.getURL('design_files/resources/images/graph.png');
			main_template.querySelector(".graph_down_arrow").src = chrome.extension.getURL('design_files/resources/images/arrow-down.png');
			

		}

		if(dock_settings == "right"){

			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; right:0px; bottom:50px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			var host =  document.getElementById('mc_host');

			main_template = main_temlpate_content.querySelector('template#main_template_dock_left').content;	

			//graph imgs
			console.log("setting graph images")
			main_template.querySelector(".graph-bg").src = chrome.extension.getURL('design_files/resources/images/graph-bg.png');
			main_template.querySelector(".graph-dyn").src = chrome.extension.getURL('design_files/resources/images/graph.png');
			main_template.querySelector(".graph_down_arrow").src = chrome.extension.getURL('design_files/resources/images/arrow-down.png');

			
		}

		if(dock_settings == "bottom"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; bottom:200px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			var host =  document.getElementById('mc_host');

			main_template = main_temlpate_content.querySelector('template#main_template_dock_bot').content;
			main_template.querySelector("#owl_css_style").href = chrome.extension.getURL('design_files/css/owl.carousel.min.css');
			main_template.querySelector(".owl_css_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/owl.carousel.min.css');+"\"";
			//graph imgs
			console.log("setting graph images")
			main_template.querySelector(".graph-bg").src = chrome.extension.getURL('design_files/resources/images/graph-bg.png');
			main_template.querySelector(".graph-dyn").src = chrome.extension.getURL('design_files/resources/images/graph.png');
			main_template.querySelector(".graph_down_arrow").src = chrome.extension.getURL('design_files/resources/images/arrow-down.png');

		}
		

		var dock_icon_0 = chrome.extension.getURL('design_files/resources/images/icons0.png');
		var dock_icon_1 = chrome.extension.getURL('design_files/resources/images/icons1.png');
		var dock_icon_2 = chrome.extension.getURL('design_files/resources/images/icons2.png');
		var dock_icon_3 = chrome.extension.getURL('design_files/resources/images/icons3.png');
		var dock_icon_4 = chrome.extension.getURL('design_files/resources/images/icon4.png');



		main_template.querySelector("#fa_style").href = chrome.extension.getURL('design_files/css/font-awesome.min.css');
		main_template.querySelector("#main_css_style").href = chrome.extension.getURL('design_files/css/popup.css');

		main_template.querySelector(".main_css_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/popup.css')+"\"";
		main_template.querySelector(".fa_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/font-awesome.min.css')+"\"";

		main_template.querySelector("#green_arrow img").src = chrome.extension.getURL('design_files/resources/images/arrow-green.png');
		main_template.querySelector("#dock_main img").src = dock_icon_0;
		main_template.querySelector("#dock_row_1 img").src = dock_icon_0;
		main_template.querySelector("#dock_row_2 img").src = dock_icon_1;
		main_template.querySelector("#dock_row_3 img").src = dock_icon_2;
		main_template.querySelector("#dock_row_4 img").src = dock_icon_3;
		main_template.querySelector("#dock_row_5 img").src = dock_icon_4;

		main_template.querySelector("#main_logo_img").src = chrome.extension.getURL('moneybag.png');


		var fa = document.createElement('style');
	    fa.type = 'text/css';
	    fa.textContent = '@font-face { font-family: FontAwesome; src: url("'
	        + chrome.extension.getURL('design_files/fonts/fontawesome-webfont.woff')
	        + '"); }';
	     $('head').append(fa);

 		var bp = document.createElement('style');
	    bp.type = 'text/css';
	    bp.textContent = '@font-face { font-family: baloo; src: url("'
	        + chrome.extension.getURL('design_files/fonts/BalooPaaji-Regular.ttf')
	        + '"); }';
	     $('head').append(bp);

 		var bp = document.createElement('style');
	    bp.type = 'text/css';
	    bp.textContent = '@font-face { font-family: baloo; src: url("'
	        + chrome.extension.getURL('design_files/fonts/BalooPaaji-Regular.ttf')
	        + '"); }';
	     $('head').append(bp);

	    la_tag = "<style>\
			@font-face {\
			  font-family: 'Lato';\
			  font-style: normal;\
			  font-weight: 400;\
			  src: local('Lato Regular'), local('Lato-Regular'), url("+chrome.extension.getURL('design_files/fonts/lato/UyBMtLsHKBKXelqf4x7VRQ.woff2')+") format('woff2');\
			  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\
			}\
			@font-face {\
			  font-family: 'Lato';\
			  font-style: normal;\
			  font-weight: 400;\
			  src: local('Lato Regular'), local('Lato-Regular'), url("+chrome.extension.getURL('design_files/fonts/lato/1YwB1sO8YE1Lyjf12WNiUA.woff2')+") format('woff2');\
			  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\
			}\
	     </style>";

	     $("head").append(la_tag);

	       		    la_tag = "<style id='la_tag'>\
			@font-face {\
			  font-family: 'mc_lato';\
			  font-style: normal;\
			  font-weight: 400;\
			  src: local('Lato Regular'), local('Lato-Regular'), url("+chrome.extension.getURL('design_files/fonts/lato/UyBMtLsHKBKXelqf4x7VRQ.woff2')+") format('woff2');\
			  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\
			}\
			@font-face {\
			  font-family: 'mc_lato';\
			  font-style: normal;\
			  font-weight: 400;\
			  src: local('Lato Regular'), local('Lato-Regular'), url("+chrome.extension.getURL('design_files/fonts/lato/1YwB1sO8YE1Lyjf12WNiUA.woff2')+") format('woff2');\
			  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\
			}\
	     </style>";

	     $("head").append(la_tag);





		// var container_dom = host.createShadowRoot({"mode":"open"});
		
         if(shadow_dom_support == "v1"){
            //attachShadow
            var container_dom = host.attachShadow({"mode":"open"});
         }
         else if(shadow_dom_support =="v0"){
            // createShadowRoot
            var container_dom = host.createShadowRoot({"mode":"open"});
         }
		container_dom.appendChild(main_template.cloneNode(true));
		mc_root = container_dom.querySelector("#mc_root");
		result_view = container_dom.querySelector("#results_view_root");

		if(dock_settings=="top"){
			initialize_carousel();
		}

		if(dock_settings=="bottom"){
			initialize_carousel();
		}


		console.log("before right check")
		if(dock_settings == "right"){
			console.log("setting transform to arrow");
			$(result_view).find("#green_arrow img").css("transform","rotate(180deg)");
		}else{
			console.log("not setting transform to arrow");
			console.log(dock_settings);
		}

		// $(result_view).find(".dropdown-menu #dock_main").click(function(){

		// 	if($(result_view).find(".dropdown-menu ul").css("display")=="none"){
		// 		$(result_view).find(".dropdown-menu ul").css("display","block");
		// 	}else if($(result_view).find(".dropdown-menu ul").css("display")=="block"){
		// 		$(result_view).find(".dropdown-menu ul").css("display","none");
		// 	}

		// });


	}
}


function insert_preview_box(){

	var link = document.createElement('link');
	link.rel = 'import';
	link.href = chrome.extension.getURL('design_files/preview_box_templates.html');
	//link.setAttribute('async', ''); // make it async!
	link.onload = function(e) {
		var content = this.import
		console.log("main container import success")
		do_post_template_load_task(content);
		this.remove();
		make_preview_draggable();
		console.log("removed main container import");
		make_results_template();
	}
	link.onerror = function(e) {

	};
	document.head.appendChild(link);

	 function do_post_template_load_task(main_temlpate_content){
	 	console.log(main_temlpate_content);
		preview_loading_template = main_temlpate_content.querySelector('template#loading_template').content;

		var loading_template = preview_loading_template.cloneNode(true);
		loading_template.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
		loading_template.querySelector("#pv_prod_image img").src = prod_deets.prod_img;
		loading_template.querySelector("#pv_load_image img").src = chrome.extension.getURL('design_files/resources/images/spinner.png');

		//inserting into page
		var preview_root = $(loading_template).insertBefore(result_view);

		//making preview template global
		preview_box_template = main_temlpate_content.querySelector('template#price_update_template').content;


		//updating preview min box
		preview_min_box = main_temlpate_content.querySelector('template#preview_mini_box').content;
		loading_template = preview_min_box.cloneNode(true);
		// loading_template.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
		loading_template.querySelector("#logo_img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
		// loading_template.querySelector("#logo_img").src = chrome.extension.getURL('bitcoin.png');
		loading_template.querySelector("#pv_popup_close img").src = chrome.extension.getURL('design_files/resources/images/popup-close.png');
		loading_template.querySelector("#price").textContent = "loading";
		//inserting into page
		var preview_min_root = $(loading_template).insertBefore(result_view);


	}

}


function make_preview_box(price,image){
	// var preview_box =  preview_box_template.cloneNode(true);
	// console.log(preview_box);
	// preview_box.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
	// preview_box.querySelector("#pv_prod_image img").src = image
	

	// if(!isNaN(price)){
	// 	preview_box.querySelector("#pv_prod_price").textContent ='₹'+price;
	// 	if(price<prod_deets.prod_price){
	// 		// preview_box.querySelector("#pv_prod_price").classList.add("green-text");
	// 		preview_box.querySelector("#pv_prod_price").style.color="#8fc952";
	// 	}else{
	// 		preview_box.querySelector("#pv_prod_price").style.color="#f73f52";
	// 	}
	// }
	// else{
	// 	preview_box.querySelector("#pv_prod_price").textContent =price;
	// 	preview_box.querySelector("#pv_prod_price").style.color ="black";
	// }


	// console.log($(preview_box).find("#pv_prod_price"));
	// return preview_box
	return {"price":price,"image":image};
}

function update_preview_box(box){
	// $(mc_root).find("#preview_root").html(box);
	$(mc_root).find("#preview_min_root #pv_img").attr("src",box.image);
}

function update_preview_min(price){

    $(mc_root).find("#preview_min_root #price").text("₹"+price);

    if(parseInt(price)<parseInt(prod_deets.prod_price)){

        $(mc_root).find("#preview_min_root #price").css("color","#8fc952");
    }
    else{
        $(mc_root).find("#preview_min_root #price").css("color","#f73f52");
    }

}


function make_results_template(){
	//lpading template
	var link = document.createElement('link');
	link.rel = 'import';
	link.href = chrome.extension.getURL('design_files/results_template.html');
	//link.setAttribute('async', ''); // make it async!
	link.onload = function(e) {
		var content = this.import
		console.log("result template import success")
		do_post_template_load_task(content);
		this.remove();
		console.log("removed result template import")

		//call data load functions here
	if(["fk","sd"].indexOf(prod_deets.prod_site)>-1){
		if (checkDeetsComplete()) {
			// getGraph();
			checkUUID();
			// game_categ_check();
		} else {
			console.log("calling check cassy");
			checkCassy();
		}	
		get_price_graph();		
	}
	else{
		
		checkUUID();
		$(result_view).find(".graph-title").css("display","none");
		if(dock_settings=="bottom"){
			$(result_view).find(".graph-bg.bottom_dock").css("display","none");
		}
	}	
	hide_results_display_preview_min();
	};
	link.onerror = function(e) {

	};
	document.head.appendChild(link);

	function do_post_template_load_task(template_html){
		all_result_templates = template_html.cloneNode(true);
		if(dock_settings == "left"){
			result_template = template_html.querySelector('template#makkhi_results').content;
			dittory_template = template_html.querySelector('template#dittory_results_left').content;

		}

		if(dock_settings == "top"){
			result_template = template_html.querySelector('template#makkhi_results').content;
			dittory_template = template_html.querySelector('template#dittory_results_top').content;

		}

		if(dock_settings == "right"){
			result_template = template_html.querySelector('template#makkhi_results').content;
			dittory_template = template_html.querySelector('template#dittory_results_left').content;

		}

		if(dock_settings == "bottom"){
			result_template = template_html.querySelector('template#makkhi_results').content;
			dittory_template = template_html.querySelector('template#dittory_results_top').content;

		}




	}

}


function make_results_box(curr_prod_deets_var,afftridtype=' ',oos=false) {

	if(afftridtype==='searchid'){
		curr_prod_deets_var["link"] = curr_prod_deets_var.prod_link;
		curr_prod_deets_var["from_back_search"] =true;
	}
	else{
		curr_prod_deets_var["from_back_search"] =false;
	}

	//checking for results which are 3x more or less than current price
	if(!oos){
		var current_result_price = parseInt(curr_prod_deets_var.prod_price);
		var page_price = parseInt(prod_deets.prod_price);
		var website = "" ;
		if(afftridtype==='searchid'){
			website = curr_prod_deets_var.prod_site;		
		}
		else{
			website = curr_prod_deets_var.website
		}

		if((3*page_price)<(current_result_price) || (page_price)>(3*current_result_price) ){

			console.log("removing site "+website + " price is "+ current_result_price)
			console.log((page_price)<(3*current_result_price));
			console.log((page_price)>(3*current_result_price));

			if(website == "fk" || website == "az" || website == "sd" || website == "tc"){
				insert_manual_search_box(make_manual_search_box({"prod_site":website,"prod_link":createFetchURL('',website),"website":"","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));
			}
			
			return "";
		}
	}


	if(!view_update){
		if(!oos){
			price_results.push(curr_prod_deets_var);	
		}
		else{
			oos_results.push(curr_prod_deets_var);
		}
		
	}

	

	var repl_strng,redir_link;
	
	if(afftridtype==='searchid'){
		redir_link=affyLinkify(curr_prod_deets_var,'');
		curr_prod_deets_var.website = curr_prod_deets_var.prod_site;		
	}
	else{
	redir_link = affyLinkifySim(curr_prod_deets_var,'');
	}

	if ( curr_prod_deets_var.website=='fk'){
			site_name = 'Flipkart';
		} //fk
	else if ( curr_prod_deets_var.website=='az'){
			site_name = 'Amazon';
		} //az
	else if ( curr_prod_deets_var.website=='my'){
			site_name = 'Myntra';
		} //myntra
	else if ( curr_prod_deets_var.website=='ja'){
			site_name = 'Jabong';
		} //jabong
	else if (curr_prod_deets_var.website=='sd'){
			site_name = 'SnapDeal';
		} //snapdeal
	else if (curr_prod_deets_var.website=='sc'){
			site_name = 'ShopClues';
		} //shopclue
	else if (curr_prod_deets_var.website=='hs'){
			site_name = 'HomeShop18';
		} //shopclue
	else if (curr_prod_deets_var.website=='eb') {
		site_name = 'eBay';
	} else if (curr_prod_deets_var.website == 'pt') {
		site_name = 'Paytm';
	}
	else if (curr_prod_deets_var.website == 'tc') {
		site_name = 'Tata Cliq';
		if(!curr_prod_deets_var.img_src.startsWith('http')){
			curr_prod_deets_var.img_src='https://'+curr_prod_deets_var.img_src;
		}
		
	}
	else if(curr_prod_deets_var.website == 'ib'){
		site_name = "infibeam";
	}
	else if(curr_prod_deets_var.website == 'ba'){
		site_name = "Bokkadaa";	
	}
	else{
		console.log("site name does not match")

	}
	console.log(curr_prod_deets_var);
	console.log("website code is " + curr_prod_deets_var.website);
	console.log("site name is"+ site_name);
	console.log("redir_link is "+redir_link);
	//doing deep copy from global variable
	var result_box =  result_template.cloneNode(true);

	result_box.querySelector("a").href = redir_link;
	result_box.querySelector(".site_name").textContent = site_name;
	result_box.querySelector(".prod_title").textContent = curr_prod_deets_var.title;
	result_box.querySelector("a").setAttribute("title",curr_prod_deets_var.title);

	if(oos ==false){
			//decide color here
		result_box.querySelector("div").classList.add("price_result");	
		result_box.querySelector(".main-price").textContent = "₹" + parseInt(curr_prod_deets_var.prod_price);

		if(curr_prod_deets_var.prod_price < prod_deets.prod_price){
			result_box.querySelector(".main-price").classList.add("green-title");
		}
		else{
			result_box.querySelector(".main-price").classList.add("red-title");
		}

	}else{
		result_box.querySelector("div").classList.add("oos_result");
		result_box.querySelector(".main-price").textContent ="Sold";		
		result_box.querySelector(".main-price").style.color = "gray";
	}

	result_box.querySelector(".image img").src = curr_prod_deets_var.img_src;
	return result_box.cloneNode(true);


}


function make_manual_search_box(curr_prod_deets_var,link_type,afftridtype=' ') {

	curr_prod_deets_var["website"] = curr_prod_deets_var["prod_site"];
	if(!view_update){
		search_results.push(curr_prod_deets_var);
	}


	var repl_strng,redir_link;
	var site_name ="";
	redir_link=affyLinkifySimmanualsearch(curr_prod_deets_var,curr_prod_deets_var.prod_link,'');

	if ( curr_prod_deets_var.website=='fk'){
			site_name = 'Flipkart';
		} //fk
	else if ( curr_prod_deets_var.website=='az'){
			site_name = 'Amazon';
		} //az
	else if ( curr_prod_deets_var.website=='my'){
			site_name = 'Myntra';
		} //myntra
	else if ( curr_prod_deets_var.website=='ja'){
			site_name = 'Jabong';
		} //jabong
	else if (curr_prod_deets_var.website=='sd'){
			site_name = 'SnapDeal';
		} //snapdeal
	else if (curr_prod_deets_var.website=='sc'){
			site_name = 'ShopClues';
		} //shopclue
	else if (curr_prod_deets_var.website=='hs'){
			site_name = 'HomeShop18';
		} //shopclue
	else if (curr_prod_deets_var.website=='eb') {
		site_name = 'eBay';
	} else if (curr_prod_deets_var.website == 'pt') {
		site_name = 'Paytm';
	}
	else if (curr_prod_deets_var.website == 'tc') {
		site_name = 'Tata Cliq';
		// if(!curr_prod_deets_var.img_src.startsWith('http')){
		// 	curr_prod_deets_var.img_src='https://'+curr_prod_deets_var.img_src;
		// }
		
	}
	else if(curr_prod_deets_var.website == 'ib'){
		site_name = "infibeam";
	}
	else if(curr_prod_deets_var.website == 'ba'){
		site_name = "Bokkadaa";	
	}

	else{
		site_name = curr_prod_deets_var.website;
	}
	//doing deep copy from global variable
	var result_box =  result_template.cloneNode(true);

	console.log(result_box);

	console.log(site_name);

	console.log(curr_prod_deets_var);

	result_box.querySelector("a").href = redir_link;
	result_box.querySelector(".site_name").textContent = site_name;
	result_box.querySelector(".prod_title").textContent = curr_prod_deets_var.title;

	//decide color here
	result_box.querySelector(".main-price").textContent = "Search"
	result_box.querySelector(".image img").src = curr_prod_deets_var.img_src;
	result_box.querySelector(".image img").classList.add("opaque");

	result_box.querySelector("div").classList.add("manual_search_result");
	return result_box.cloneNode(true);


}


r_box = "";
function insert_price_result_box(result_box){
	if(!prod_disp_sent){
		register_user_action("products_displayed");
		prod_disp_sent = true;
	}
	var results_list = [];
	
	if(!result_box){
		return;
	}

	result_box = result_box.querySelector("div.item");
	r_box = result_box;
	var current_price = parseInt($(result_box).find(".main-price").text().slice(1));
	var current_image = $(result_box).find(".image img").attr("src");

	// results_list = $(mc_root).find("#results_container #price_results a.result_link");
	results_list = $(mc_root).find("#results_container #price_results div.item");
	if(results_list.length==0){
		//no result result box is empty
		$(result_view).find("#results_container #price_results").append(result_box);
		update_preview_box(make_preview_box(current_price,current_image));
		update_preview_min(current_price);
	}
	else{
		//insert it in the correct place based on price order
		var result_inserted = false;
		for(var i=0; i<results_list.length;i++){
			//index starts from top result
			var result_list_el_price=parseInt($(results_list[i]).find(".main-price").text().slice(1));
			if(current_price<result_list_el_price){
				$(result_box).insertBefore(results_list[i]);
				//update welcome box
				if(i==0){
					//1st position
					update_preview_box(make_preview_box(current_price,current_image));
					update_preview_min(current_price);	
				}
				
				var result_inserted = true;
				break;
			}
		}

		if(!result_inserted){
			$(result_view).find("#results_container #price_results").append(result_box);
		}
	}


	if(dock_settings == "top"){
		insert_to_carousel();
		return;
	}


	if(dock_settings == "bottom"){
		insert_to_carousel();
		return;
	}


	
}

function insert_manual_search_box(box){
	// $(result_view).find("#results_container #manual_search").append(box);
	if(!prod_disp_sent){
		register_user_action("products_displayed");
		prod_disp_sent = true;
	}

	$(result_view).find("#results_container #manual_search").append(box);

	if($(mc_root).find("#preview_min_root #price").text()=="loading"){
		$(mc_root).find("#preview_min_root #price").text("Search");
		update_preview_box(make_preview_box("search",prod_deets.prod_img));
	}

	if(dock_settings == "top"){
		insert_to_carousel();
		return;
	}
	if(dock_settings == "bottom"){
		insert_to_carousel();
		return;
	}



}

function insert_oos_box(box){
	if(!prod_disp_sent){
		register_user_action("products_displayed");
		prod_disp_sent = true;
	}

	$(result_view).find("#results_container #oos").append(box);
	if(dock_settings == "top"){
		insert_to_carousel();
		return;
	}

}

function hide_preview_display_results(){
	$(mc_root).find("#preview_min_root").css("display","none");
	//making preview box it draggable
	console.log('hpdr called');
	if(view_results_first_time){
		trackmakkhiboxview(prod_deets.prod_site);
		register_user_action("result_views");
		view_results_first_time = false;
	}


	if(dock_settings == "left"){
		$("#mc_main_host").animate({"left":-500},"fast",function(){
			$(mc_root).find("#preview_root").css("display","none");

			//display resultview
			$(mc_root).find("#results_view_root").css("display","block");
			$("#mc_main_host").animate({"top":"","left":0,"bottom":50,},"fast",function(){
				$("#mc_main_host").css("top","");
				update_button_beacon_positions();

			});
			// $("#mc_main_host").css("top","");
		});
	}

	if(dock_settings == "top"){
		$("#mc_main_host").animate({"left":-500},"fast",function(){
			$(mc_root).find("#preview_root").css("display","none");

			$("#mc_main_host").css({left:"0px", top:"30px", width:"100%"});
			$("#mc_host").css({width:"1100px", margin: "0 auto"});

			//display resultview
			$(mc_root).find("#results_view_root").css("display","block");
			$("#mc_main_host").animate({"top":30},"fast",function(){
				update_button_beacon_positions();
			});
		});
	}

	if(dock_settings == "right"){
		$("#mc_main_host").animate({"right":-500},"fast",function(){
			$(mc_root).find("#preview_root").css("display","none");

			//display resultview
			$(mc_root).find("#results_view_root").css("display","block");
			$("#mc_main_host").animate({"right":0,"bottom":50,"top":""},"fast",function(){
				$("#mc_main_host").css("top","");
				update_button_beacon_positions();
			});
		});
	}

	if(dock_settings == "bottom"){
		$("#mc_main_host").animate({"bottom":-500},"fast",function(){
			$(mc_root).find("#preview_root").css("display","none");

			$("#mc_main_host").css({left:"0px", bottom:"30px", width:"100%"});
			$("#mc_host").css({width:"1100px", margin: "0 auto"});

			//display resultview
			$(mc_root).find("#results_view_root").css("display","block");
			$("#mc_main_host").animate({"bottom":30},"fast",function(){
				update_button_beacon_positions();
			});
		});
	}

	// update_button_beacon_positions();
}

function hide_results_display_preview(){

	if(dock_settings == "left"){
		$("#mc_main_host").animate({"left":-500},"fast",function(){
			$(mc_root).find("#results_view_root").css("display","none");

			//display resultview
			$(mc_root).find("#preview_root").css("display","block");
			$("#mc_main_host").animate({"left":0},"fast");
		});
	}

	if(dock_settings == "top"){
		$(mc_root).find("#results_view_root").css("display","none");

		$("#mc_main_host").css({left:"0px", top:"100px",width:"150px"});
		$("#mc_host").css({width:"150px", margin: "0 auto"});

		//display preview
		$(mc_root).find("#preview_root").css("display","block");
		$("#mc_host").animate({"left":"0px"},"fast");

	}

	if(dock_settings == "right"){
		$("#mc_main_host").animate({"right":-500},"fast",function(){
			$(mc_root).find("#results_view_root").css("display","none");

			//display resultview
			$(mc_root).find("#preview_root").css("display","block");
			$("#mc_main_host").animate({"right":0},"fast");
		});
	}

	if(dock_settings == "bottom"){
		$(mc_root).find("#results_view_root").css("display","none");

		$("#mc_main_host").css({left:"0px", top:"100px",width:"150px"});
		$("#mc_host").css({width:"150px", margin: "0 auto"});

		//display preview
		$(mc_root).find("#preview_root").css("display","block");
		$("#mc_host").animate({"left":"0px"},"fast");

	}

	

}

function hide_preview_min_display_results(){

	if(view_results_first_time){
		trackmakkhiboxview(prod_deets.prod_site);
		register_user_action("result_views");
		view_results_first_time = false;
	}

	if(dock_settings == "left"){

		$(mc_root).find("#preview_min_root").css("display","none");
		$(mc_root).css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_host").css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_main_host").css({"left":"-500px","top":"","bottom":"50px","right":"auto","width":$(mc_root).find("#results_view_root").css("width")});
		$(mc_root).find("#results_view_root").css("display","block");
		$("#mc_main_host").animate({"left":0},"fast");

	}

	if(dock_settings == "top"){
		
		$(mc_root).find("#preview_min_root").css("display","none");
		$("#mc_main_host").css({"top":"-500px","bottom":"auto"});
		$(mc_root).css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_host").css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_main_host").css({left:"0px", width:"100%"});
		$("#mc_host").css({width:"1100px", margin: "0 auto"});
		$(mc_root).find("#results_view_root").css("display","block");
		$("#mc_main_host").animate({"top":30},"fast");

	}

	if(dock_settings == "right"){
		$(mc_root).find("#preview_min_root").css("display","none");
		$(mc_root).css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_host").css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_main_host").css({"right":"-500px","top":"","bottom":"50px","left":"auto","width":$(mc_root).find("#results_view_root").css("width")});
		$(mc_root).find("#results_view_root").css("display","block");
		$("#mc_main_host").animate({"right":0},"fast");
	}

	if(dock_settings == "bottom"){
		$(mc_root).find("#preview_min_root").css("display","none");
		$(mc_root).css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_host").css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_main_host").css({"bottom":"-500px","top":"auto"});
		$("#mc_main_host").css({left:"0px", width:"100%"});
		$("#mc_host").css({width:"1100px", margin: "0 auto"});
		$(mc_root).find("#results_view_root").css("display","block");
		$("#mc_main_host").animate({"bottom":30},"fast");

	}	


}


function hide_results_display_preview_min(){
	// $(mc_root).find("#preview_min_root").css("width")
	$(mc_root).find("#results_view_root").css("display","none");
	$("#mc_main_host").css({left:"0px", top:"0px","right":"auto","bottom":"auto","width":"0px"});
	$(mc_root).css({"width":"0px"});
	$("#mc_host").css({"width":"0px"});
	$(mc_root).find("#preview_min_root").css("display","block");


}


function update_data_for_spa(){
	view_results_first_time = true;
	prod_disp_sent = false;
	if(preview_box_template != "" && result_template!="" && main_template!=""){

	 view_update = false;
	 price_results = [];
	 oos_results = [];
	 search_results = [];
	 exclusive_results = [];
	 graph_data = "";

	 is_dittory_prods = false;
	 is_exclusive = false;
		//no need to import
		console.log("no need to import");

		$("#mc_main_host").remove();

		//update main template
		// $("body").append("<div style=\"position:fixed; left:0px; top:200px; z-index:9999;\" id=\"mc_host\"></div>");
		// $("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; top:200px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
		// var host =  document.getElementById('mc_host');
		// var container_dom = host.attachShadow({"mode":"open"});
		// container_dom.appendChild(main_template.cloneNode(true));
		// mc_root = container_dom.querySelector("#mc_root");
		// result_view = container_dom.querySelector("#results_view_root");
		
		update_main_template();

		//update event listeners
		setevents();

		//update preview box
		var preview_box =  preview_loading_template.cloneNode(true);
		console.log(preview_box);
		preview_box.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
		preview_box.querySelector("#pv_prod_image img").src = prod_deets.prod_img;
		preview_box.querySelector("#pv_load_image img").src = chrome.extension.getURL('design_files/resources/images/spinner.png');

		$(preview_box).insertBefore(result_view);

		//update preview min box
		var loading_template = preview_min_box.cloneNode(true);
		// loading_template.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
		loading_template.querySelector("#logo_img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
		// loading_template.querySelector("#logo_img").src = chrome.extension.getURL('bitcoin.png');
		loading_template.querySelector("#pv_popup_close img").src = chrome.extension.getURL('design_files/resources/images/popup-close.png');
		loading_template.querySelector("#price").textContent = "loading";
		//inserting into page
		var preview_min_root = $(loading_template).insertBefore(result_view);
		make_preview_draggable();
		//update result template
		update_results_template();

		if(dock_settings=="top"){
			initialize_carousel();
		}
		if(dock_settings=="bottom"){
			initialize_carousel();
		}
		send_sd_match("");
		trackMakkhiboxDisplay(prod_deets.prod_site);
	
		if($("#mc_main_host").css("display")=="none"){
			$("#mc_main_host").css("display","block");
		}
		hide_results_display_preview_min();

		if(["fk","sd"].indexOf(prod_deets.prod_site)>-1){
			if (checkDeetsComplete()) {
				// getGraph();
				checkUUID();
				// game_categ_check();
			} else {
				console.log("calling check cassy");
				checkCassy();
			}	
			get_price_graph();		
		}
		else{
				checkUUID();
				$(result_view).find(".graph-title").css("display","none");
				if(dock_settings=="bottom"){
					$(result_view).find(".graph-bg.bottom_dock").css("display","none");
				}
		}

	}
	else{
		console.log("need to import");
		insert_main_container();
	}

}

function update_main_template(){
		var main_temlpate_content = all_container_templates.cloneNode(true);

		if(dock_settings == "top"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; top:200px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			var host =  document.getElementById('mc_host');

			main_template = main_temlpate_content.querySelector('template#main_template_dock_top').content;
			main_template.querySelector("#owl_css_style").href = chrome.extension.getURL('design_files/css/owl.carousel.min.css');
			main_template.querySelector(".owl_css_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/owl.carousel.min.css');+"\"";

			//graph imgs
			console.log("setting graph images")
			main_template.querySelector(".graph-bg").src = chrome.extension.getURL('design_files/resources/images/graph-bg.png');
			main_template.querySelector(".graph-dyn").src = chrome.extension.getURL('design_files/resources/images/graph.png');
			main_template.querySelector(".graph_down_arrow").src = chrome.extension.getURL('design_files/resources/images/arrow-down.png');

		}
		if(dock_settings == "left"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; bottom:50px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			var host =  document.getElementById('mc_host');

			main_template = main_temlpate_content.querySelector('template#main_template_dock_left').content;	

			//graph imgs
			console.log("setting graph images")
			main_template.querySelector(".graph-bg").src = chrome.extension.getURL('design_files/resources/images/graph-bg.png');
			main_template.querySelector(".graph-dyn").src = chrome.extension.getURL('design_files/resources/images/graph.png');
			main_template.querySelector(".graph_down_arrow").src = chrome.extension.getURL('design_files/resources/images/arrow-down.png');

		}

		if(dock_settings == "right"){

			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; right:0px; bottom:50px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			var host =  document.getElementById('mc_host');

			main_template = main_temlpate_content.querySelector('template#main_template_dock_left').content;	

			//graph imgs
			console.log("setting graph images")
			main_template.querySelector(".graph-bg").src = chrome.extension.getURL('design_files/resources/images/graph-bg.png');
			main_template.querySelector(".graph-dyn").src = chrome.extension.getURL('design_files/resources/images/graph.png');
			main_template.querySelector(".graph_down_arrow").src = chrome.extension.getURL('design_files/resources/images/arrow-down.png');

			main_template.querySelector("#green_arrow img").style.transform = "rotate(180deg)";


		}

		if(dock_settings == "bottom"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; bottom:200px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			var host =  document.getElementById('mc_host');

			main_template = main_temlpate_content.querySelector('template#main_template_dock_bot').content;
			main_template.querySelector("#owl_css_style").href = chrome.extension.getURL('design_files/css/owl.carousel.min.css');
			main_template.querySelector(".owl_css_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/owl.carousel.min.css');+"\"";

			//graph imgs
			console.log("setting graph images")
			main_template.querySelector(".graph-bg").src = chrome.extension.getURL('design_files/resources/images/graph-bg.png');
			main_template.querySelector(".graph-dyn").src = chrome.extension.getURL('design_files/resources/images/graph.png');
			main_template.querySelector(".graph_down_arrow").src = chrome.extension.getURL('design_files/resources/images/arrow-down.png');

		}
				
		var dock_icon_0 = chrome.extension.getURL('design_files/resources/images/icons0.png');
		var dock_icon_1 = chrome.extension.getURL('design_files/resources/images/icons1.png');
		var dock_icon_2 = chrome.extension.getURL('design_files/resources/images/icons2.png');
		var dock_icon_3 = chrome.extension.getURL('design_files/resources/images/icons3.png');
		var dock_icon_4 = chrome.extension.getURL('design_files/resources/images/icon4.png');

		main_template.querySelector("#fa_style").href = chrome.extension.getURL('design_files/css/font-awesome.min.css');
		main_template.querySelector("#main_css_style").href = chrome.extension.getURL('design_files/css/popup.css');

		main_template.querySelector(".main_css_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/popup.css')+"\"";
		main_template.querySelector(".fa_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/font-awesome.min.css')+"\"";


		main_template.querySelector("#green_arrow img").src = chrome.extension.getURL('design_files/resources/images/arrow-green.png');
		main_template.querySelector("#dock_main img").src = dock_icon_0;
		main_template.querySelector("#dock_row_1 img").src = dock_icon_0;
		main_template.querySelector("#dock_row_2 img").src = dock_icon_1;
		main_template.querySelector("#dock_row_3 img").src = dock_icon_2;
		main_template.querySelector("#dock_row_4 img").src = dock_icon_3;
		main_template.querySelector("#dock_row_5 img").src = dock_icon_4;
		main_template.querySelector("#main_logo_img").src = chrome.extension.getURL('moneybag.png');

		$("#mc_main_host").css("display","none");
		// var container_dom = host.createShadowRoot({"mode":"open"});

         if(shadow_dom_support == "v1"){
            //attachShadow
            var container_dom = host.attachShadow({"mode":"open"});
         }
         else if(shadow_dom_support =="v0"){
            // createShadowRoot
            var container_dom = host.createShadowRoot({"mode":"open"});
         }


		container_dom.appendChild(main_template.cloneNode(true));
		mc_root = container_dom.querySelector("#mc_root");
		result_view = container_dom.querySelector("#results_view_root");

		if(dock_settings=="top"){
			initialize_carousel();
		}
		if(dock_settings=="bottom"){
			initialize_carousel();
		}



		if(dock_settings == "right"){
			console.log("setting transform to arrow");
			$(result_view).find("#green_arrow img").css("transform","rotate(180deg)");
		}
}

function update_results_template(){
		var template_html= all_result_templates.cloneNode(true);
		if(dock_settings == "left"){
			result_template = template_html.querySelector('template#makkhi_results').content;
			dittory_template = template_html.querySelector('template#dittory_results_left').content;

		}

		if(dock_settings == "top"){
			result_template = template_html.querySelector('template#makkhi_results').content;
			dittory_template = template_html.querySelector('template#dittory_results_top').content;

		}

		if(dock_settings == "right"){
			result_template = template_html.querySelector('template#makkhi_results').content;
			dittory_template = template_html.querySelector('template#dittory_results_left').content;

		}

		if(dock_settings == "bottom"){
			result_template = template_html.querySelector('template#makkhi_results').content;
			dittory_template = template_html.querySelector('template#dittory_results_top').content;

		}


}

//logic based on events
function setevents(){

	set_button_events();

	$(document).on("click",doc_click_handler);
	
	$(result_view).on('mousewheel', '#results_container', function (e) {
		var e0 = e.originalEvent,
		delta = e0.wheelDelta || -e0.detail;
		this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
		e.preventDefault();
	});

	$(result_view).on("click",".result_link",function(e){


		console.log("result_link clicked")
        var row_number=$(this).parent().index()+1;
        var link=$(this).attr('href');
      
        if($(this).parent().hasClass("price_result")){
        	//price result click
         	var ga_obj={};
            ga_obj['row_number']=row_number;
            ga_obj['link']=link;

            if(is_dittory_prods){

			   if(is_dittory_category()){
			        if(isApparel()){
			            chrome.runtime.sendMessage({"method":"dittory_result_click","site":prod_deets.prod_site,"categ":"apparel","link":link});
			        }

			        if(isFootWear()){
			            chrome.runtime.sendMessage({"method":"dittory_result_click","site":prod_deets.prod_site,"categ":"footwear","link":link});
			        }

			        if(isWatch()){
			            chrome.runtime.sendMessage({"method":"dittory_result_click","site":prod_deets.prod_site,"categ":"watch","link":link});
			        }

			   }
			   else{
			   		chrome.runtime.sendMessage({"method":"dittory_result_click","site":prod_deets.prod_site,"categ":"dittory","link":link});
			   }

		      if(is_dittory_sub_categ()){
				    chrome.runtime.sendMessage({"method":"dittory_categ_dittorry_result_click","site":prod_deets.prod_site,"categ":"sub_categ","link":link});
		       }

			     send_result_click(link,row_number,false,is_low_price(this));
			     register_user_action("result_clicks");
			    chrome.runtime.sendMessage({method:'user_clicked_price',ga_obj:ga_obj});

            }else{
					if(is_dittory_category()){
		                if(isApparel()){
		                    chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"apparel","link":link});
		                }

		                if(isFootWear()){
		                    chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"footwear","link":link});
		                }

		                if(isWatch()){
		                    chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"watch","link":link});
		                }

		           }

		          if(is_dittory_sub_categ()){
		                chrome.runtime.sendMessage({"method":"dittory_categ_makkhi_result_click","site":prod_deets.prod_site,"categ":"sub_categ","link":link});

		           }

		          if(isBook()){
		                chrome.runtime.sendMessage({"method":"book_result_click","deets":prod_deets,"link":link});
		           }

		            chrome.runtime.sendMessage({method:'user_clicked_price',ga_obj:ga_obj});
		            send_result_click(link,row_number,false,is_low_price(this));
		            register_user_action("result_clicks");

            }

 
    	
        }
        if($(this).parent().hasClass("oos_result")){
        	//oos result click
        	console.log("OOS result clicked");
       	    var ga_obj={};
            ga_obj['row_number']=row_number;
            ga_obj['link']=link;
           chrome.runtime.sendMessage({method:'user_clicked_oos',ga_obj:ga_obj});

           if(is_dittory_category()){
                if(isApparel()){
                    chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"apparel","link":link});
                }

                if(isFootWear()){
                    chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"footwear","link":link});
                }

                if(isWatch()){
                    chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"watch","link":link});
                }

           }
           if(is_dittory_sub_categ()){
                chrome.runtime.sendMessage({"method":"dittory_categ_makkhi_result_click","site":prod_deets.prod_site,"categ":"sub_categ","link":link});

           }

           if(isBook()){
                chrome.runtime.sendMessage({"method":"book_result_click","deets":prod_deets,"link":link});
           }
            
         send_result_click(link,row_number,false,is_low_price(this));
         register_user_action("result_clicks");
        }
        if($(this).parent().hasClass("manual_search_result")){
        	//manual search clickk
        	console.log("Manual search clicked");
            var ga_obj={};
            ga_obj['row_number']=row_number;
            ga_obj['link']=link;

           if(is_dittory_category()){
                if(isApparel()){
                    chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"apparel","link":link});
                }

                if(isFootWear()){
                    chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"footwear","link":link});
                }

                if(isWatch()){
                    chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"watch","link":link});
                }

           }

          if(is_dittory_sub_categ()){
                chrome.runtime.sendMessage({"method":"dittory_categ_makkhi_result_click","site":prod_deets.prod_site,"categ":"sub_categ","link":link});

           }


          if(isBook()){
                chrome.runtime.sendMessage({"method":"book_result_click","deets":prod_deets,"link":link});
           }

            chrome.runtime.sendMessage({method:'user_clicked_search',ga_obj:ga_obj});

            send_result_click(link,row_number,true,is_low_price(this));
            register_user_action("result_clicks");
        }


        console.log("user clicked "+row_number+" "+ link);



	});



	$(result_view).find(".dropdown-menu #dock_main").click(function(){

		if($(result_view).find(".dropdown-menu ul").css("display")=="none"){
			$(result_view).find(".dropdown-menu ul").css("display","block");
		}else if($(result_view).find(".dropdown-menu ul").css("display")=="block"){
			$(result_view).find(".dropdown-menu ul").css("display","none");
		}

	});

	//dock settings

	$(result_view).find(".dropdown-menu #dock_row_1").click(function(){
		//left dock functions
		if(dock_settings !="left"){
			register_user_action("dock_icon_click");
			chrome.runtime.sendMessage({"method":"dock_icon_click",type:"left","site":prod_deets.prod_site},function(){

			});

			chrome.storage.local.get({"dock_settings":""},function(response){
				if(response.dock_settings !=""){
					//make settings
					var d_settings = response.dock_settings;
					d_settings[prod_deets.prod_site] = "left"
					chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
						dock_settings = "left";
						// update_data_for_spa();
						update_view_data();
					});


				}
				else{
						var d_settings = {};
						d_settings[prod_deets.prod_site] = "left"
						chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
							dock_settings = "left";
							// update_data_for_spa();
							update_view_data();

						});

				}

			});
		}

	});

	$(result_view).find(".dropdown-menu #dock_row_2").click(function(){
		//right dock functions
			register_user_action("dock_icon_click");
			chrome.runtime.sendMessage({"method":"dock_icon_click",type:"right","site":prod_deets.prod_site},function(){

			});

		if(dock_settings!="right"){
			chrome.storage.local.get({"dock_settings":""},function(response){
				if(response.dock_settings !=""){
					//make settings
					var d_settings = response.dock_settings;
					d_settings[prod_deets.prod_site] = "right"
					chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
						dock_settings = "right";
						// update_data_for_spa();
						update_view_data();
					});


				}
				else{
						var d_settings = {};
						d_settings[prod_deets.prod_site] = "right"
						chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
							dock_settings = "right";
							// update_data_for_spa();
							update_view_data();

						});

				}

			});
		}


	});

	$(result_view).find(".dropdown-menu #dock_row_3").click(function(){
		//top dock functions
		register_user_action("dock_icon_click");
		chrome.runtime.sendMessage({"method":"dock_icon_click",type:"top","site":prod_deets.prod_site},function(){

		});

		if(dock_settings!="top"){
			chrome.storage.local.get({"dock_settings":""},function(response){
				if(response.dock_settings !=""){
					//make settings
					var d_settings = response.dock_settings;
					d_settings[prod_deets.prod_site] = "top"
					chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
						dock_settings = "top";
						// update_data_for_spa();
						update_view_data();
					});


				}
				else{
						var d_settings = {};
						d_settings[prod_deets.prod_site] = "top"
						chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
							dock_settings = "top";
							// update_data_for_spa();
							update_view_data();

						});

				}

			});
		}

	});

	$(result_view).find(".dropdown-menu #dock_row_4").click(function(){
		//bottom dock functions
		register_user_action("dock_icon_click");
		chrome.runtime.sendMessage({"method":"dock_icon_click",type:"bot","site":prod_deets.prod_site},function(){

		});

		if(dock_settings!="bottom"){
			chrome.storage.local.get({"dock_settings":""},function(response){
				if(response.dock_settings !=""){
					//make settings
					var d_settings = response.dock_settings;
					d_settings[prod_deets.prod_site] = "bottom"
					chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
						dock_settings = "bottom";
						// update_data_for_spa();
						update_view_data();
					});


				}
				else{
						var d_settings = {};
						d_settings[prod_deets.prod_site] = "bottom"
						chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
							dock_settings = "bottom";
							// update_data_for_spa();
							update_view_data();

						});

				}

			});
		}		
	});

	$(result_view).find(".dropdown-menu #dock_row_5").click(function(){
		//center dock functions
	});


 	$(mc_root).on("click","#preview_root",function(e){
 		if(!$(mc_root).find("#preview_root").hasClass('closed')){
 			$(mc_root).find("#preview_root").addClass('closed')
 			hide_preview_display_results();	
 		}
 		
	});


	//set preview box hover listener
	$(mc_root).on("mouseenter","#preview_root",function(e){
	   $(this).data('timeout', setTimeout(function () {
	 		if(!$(mc_root).find("#preview_root").hasClass('closed')){
	 			$(mc_root).find("#preview_root").addClass('closed')
	 			hide_preview_display_results();	
	 		}
	 		else{
	 			clearTimeout($(this).data('timeout'));
	 		}

			//send makhibox view analytics
	    }, 1000));

	});

 	$(mc_root).on("mouseleave","#preview_root",function(e){
		// $(mc_root).find("#preview_root").css("display","none");
		// $(result_view).css("display","block");
		clearTimeout($(this).data('timeout'));
	});

 	//set preview min click listener
	$(mc_root).on("click","#preview_min_root",function(e){

		console.log("setting button click");
		ctabby_click='button_click';
	    hide_preview_min_display_results();

	});




		//set preview mini box hover listener
	// $(mc_root).on("mouseenter","#preview_min_root",function(e){
	//    $(this).data('timeout', setTimeout(function () {
	// 		hide_preview_min_display_results();
	// 		//send makhibox view analytics
	//     }, 1000));

	// });

 // 	$(mc_root).on("mouseleave","#preview_min_root",function(e){
	// 	// $(mc_root).find("#preview_root").css("display","none");
	// 	// $(result_view).css("display","block");
	// 	clearTimeout($(this).data('timeout'));
	// });
  
	//left arrow in results view
	$(mc_root).on("click","#green_arrow",function(e){
		hide_results_display_preview_min();
		// register_user_action("result_box_close");
	});

	// beacon click
	$(mc_root).on("click",".beacon.msg",function(e){
		chrome.storage.local.get({"beacon_msg":false},function(response){
			if(response.beacon_msg){
				chrome.storage.local.set({"beacon_msg":false},function(response){
					chrome.runtime.sendMessage({"method":"open_beacon_link"},function(respone){
					});
				})
			}
		})
	});

	$(mc_root).on("click","#main_logo_img",function(e){
		chrome.runtime.sendMessage({method:"open_url_in_tab","url":"http://www.makkhichoose.com/login"},function(rsponse){});
		chrome.runtime.sendMessage({"method":"send_event","eventCategory":"result_box_bc_click","eventAction":"result_box_bc_click","eventLabel":""},function(response){});

	})


}


function insert_to_carousel(result){
	
	// var div = document.createElement('div');
	// div.appendChild( result.cloneNode(true) )

	// var result_html = div.innerHTML

	// // var owl = $(result_view).find('.products .owl-carousel');
	// owl.trigger('add.owl.carousel', 
 //                  [jQuery('<div">' + result_html +
 //                          '</div>')]).trigger('refresh.owl.carousel');
 	var carousel_html = $(result_view).find("#results_container #exclusive").html();
	carousel_html += $(result_view).find("#results_container #price_results").html();
	carousel_html +=  $(result_view).find("#results_container #oos").html();
	carousel_html +=  $(result_view).find("#results_container #manual_search").html();

	console.log('carousel_html log');

	// console.log(carousel_html);

	owl.trigger('replace.owl.carousel',[jQuery($.trim(carousel_html))]).trigger('refresh.owl.carousel');

	// owl.trigger('add.owl.carousel', 
 //                  [jQuery('<div">' + result_html +
 //                          '</div>')]).trigger('refresh.owl.carousel');
 	owl.trigger("to.owl.carousel", [0]);


 	if($(result_view).find(".mc_owl_prev").length==0){

 		insert_owl_custom_nav_buttons();
 	}


}

var owl ="";
function initialize_carousel(){
   owl = $(result_view).find('.products .owl-carousel');

    owl.owlCarousel({
        loop: false,
        stagePadding: 30,
        nav: true,
        navText: ["<a class='btn prev'><img src='"+ chrome.extension.getURL("design_files/resources/images/arrow-green.png")+ "'/></a>",
            "<a class='btn next'><img src='"+chrome.extension.getURL("design_files/resources/images/arrow-green.png") +"'/></a>"
        ],
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            650: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

	owl.on('mousewheel', '.owl-stage', function (e) {
	    if (e.deltaY>0) {
	        owl.trigger('prev.owl.carousel');
	    } else {
	        
	        owl.trigger('next.owl.carousel');
	    }
	    e.preventDefault();
	});

}



function insert_owl_custom_nav_buttons(){
    //inserting custom nav buttons
	$(result_view).find(".owl-nav").remove()

	$(result_view).find(".owl-carousel").append('<a href="javascript:;" class="mc_owl_prev" style="position:absolute; top:50%; left:15px;">\
				<img src="'+chrome.extension.getURL("design_files/resources/images/arrow-green.png")+'">\
			</a>')
	$(result_view).find(".owl-carousel").append('<a href="javascript:;" class="mc_owl_next" style="position:absolute; top:50%; right:15px;">\
				<img style="transform: rotate(180deg);"src="'+chrome.extension.getURL("design_files/resources/images/arrow-green.png")+'">\
			</a>')

	$(result_view).on('click','.mc_owl_prev',function(){
		console.log("owl previous button click detected")
		owl.trigger("prev.owl.carousel");
	});

	$(result_view).on('click','.mc_owl_next',function(){
		console.log("owl next button click detected")
		owl.trigger("next.owl.carousel");
	});

}


function get_price_graph(){
	if(prod_deets.product_id) {
		var url= "https://data1.makkhichoose.com/gethistoryprice?pid=~~PID~~&site=~~SITE~~";
		url = url.replace('~~PID~~', prod_deets.product_id).replace('~~SITE~~', prod_deets.prod_site);
		var req_send = backPostGet({
			   type: "GET",
			   url: url,
			   dataType: "json",
			   timeout: 10000,
			});
		req_send.done(price_graph_success );
		req_send.fail(price_graph_failure );
    }
    else{
		$(result_view).find(".graph-title").css("display","none");
	    if(dock_settings=="bottom"){
	        	$(result_view).find(".graph-bg.bottom_dock").css("display","none");
        }
    }
}

function price_graph_success(response){
   	console.log("in graphsuccess");
    if(response.found==true && response.listprice.length > 4){

    	if(!view_update){
    		graph_data =  JSON.parse(JSON.stringify(response));
    	}

    	for(var i =0; i<response.listprice.length;i++){
    		var tr = "<tr><td>"+response.listprice[i][0]+"</td><td>"+response.listprice[i][1]+"</td></tr>"
    		$(result_view).find(".table_div tbody").append(tr);
    	}
    	// $(result_view).find('table.highchart').highchartTable();
	 	var history_icon_img ="";
		 if(response.droppercent == 0){
		    history_icon_img = chrome.extension.getURL('design_files/resources/images/popup-red-up.png');
		}
		else if(response.droppercent > 0){
		    history_icon_img = chrome.extension.getURL('design_files/resources/images/popup.png');
		}
		else if(response.droppercent < 0){
		    history_icon_img = chrome.extension.getURL('design_files/resources/images/popup-red-up.png');
		}
		else
		    {history_icon_img = ''
		}

		$(result_view).find(".graph-dyn").attr("src",history_icon_img);
		$(mc_root).find("#preview_min_root .popup img").attr("src",history_icon_img);
		$(mc_root).find("#preview_min_root .popup img").css("display","block");
	

    	$(result_view).find(".graph-title").css("display","block");

		$(result_view).find('.graph_drop_down').click(function (e) {
		    // e.preventDefault();

		    $(this).toggleClass('active');
		    if(!$(this).hasClass('active')){
		    	chrome.runtime.sendMessage({method:"price_graph_arrow_click","reason":"close","dock":dock_settings});
		    	$(result_view).find('.table_div').css("display","none");	
		    }
		    else{
		    	chrome.runtime.sendMessage({method:"price_graph_arrow_click","reason":"open","dock":dock_settings});
		    	if($(result_view).find('.table_div').hasClass('rendered')){
		    		$(result_view).find('.table_div').css("display","block");		
		    	}
		    	else{

		    		if(dock_settings =="left"){

	    		    	$(result_view).find('table.highchart')
						  .bind('highchartTable.beforeRender', function(event, highChartConfig) {
						  	console.log(highChartConfig);
						    highChartConfig.colors = ['#8fc952'];
						    highChartConfig.xAxis.labels.enabled = false;
						    highChartConfig.xAxis.visible = false;
						    highChartConfig.chart.height = "175";
						  }).highchartTable();

		    		}

		    		if(dock_settings =="top"){
	    		    	$(result_view).find('table.highchart')
						  .bind('highchartTable.beforeRender', function(event, highChartConfig) {
						    highChartConfig.colors = ['#8fc952'];
						    highChartConfig.xAxis.labels.enabled = false;
						    highChartConfig.xAxis.visible = false;
						    highChartConfig.chart.height = "175";


						  }).highchartTable();

		    		}

		    		if(dock_settings =="right"){
	    		    	$(result_view).find('table.highchart')
						  .bind('highchartTable.beforeRender', function(event, highChartConfig) {
						    highChartConfig.colors = ['#8fc952'];
						    highChartConfig.xAxis.labels.enabled = false;
						    highChartConfig.xAxis.visible = false;
						    highChartConfig.chart.height = "175";


						  }).highchartTable();

		    		}

		    		if(dock_settings =="bottom"){
	    		    	$(result_view).find('table.highchart')
						  .bind('highchartTable.beforeRender', function(event, highChartConfig) {
						    highChartConfig.colors = ['#8fc952'];
						    highChartConfig.xAxis.labels.enabled = false;
						    highChartConfig.xAxis.visible = false;
						    highChartConfig.chart.height = "175";

						    highChartConfig.legend.verticalAlign = 'top';


						  }).highchartTable();

		    		}




				  $(result_view).find('.table_div').addClass('rendered');
				  $(result_view).find('.table_div').css("display","block");

				  $(result_view).on("mouseenter",'.table_div',function(){
				  	graph_mouse_over();
				  });


				  $(result_view).on("mouseleave",'.table_div',function(){
				  	graph_mouse_leave();
				  });


		    	}
		    }
		    
		});
    
 
    }
    else
    {
        console.log('history not enough ')
        $(result_view).find(".graph-title").css("display","none");

        if(dock_settings=="bottom"){
        	$(result_view).find(".graph-bg.bottom_dock").css("display","none");
        }
    }
}

function price_graph_failure(){
	// console.log("price graph faillure");
	$(result_view).find(".graph-title").css("display","none");
    if(dock_settings=="bottom"){
        	$(result_view).find(".graph-bg.bottom_dock").css("display","none");
        }
}

var graph_mouse_over = function(){
	ga_graph_hover_times.push(new Date().getTime()+'en');
}

var graph_mouse_leave = function(){
	ga_graph_hover_times.push(new Date().getTime()+'ex');
}

function update_view_data(){

	//no need to import
	console.log("no need to import");

	$("#mc_main_host").remove();

	update_main_template();

	//update event listeners
	setevents();

	//update preview box
	var preview_box =  preview_loading_template.cloneNode(true);
	console.log(preview_box);
	preview_box.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
	preview_box.querySelector("#pv_prod_image img").src = prod_deets.prod_img;
	preview_box.querySelector("#pv_load_image img").src = chrome.extension.getURL('design_files/resources/images/spinner.png');
	preview_box.querySelector("div").style.display = "none";

	$(preview_box).insertBefore(result_view);

	//update preview min box
	var loading_template = preview_min_box.cloneNode(true);
	// loading_template.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
	loading_template.querySelector("#pv_makkhi_logo #logo_img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
	// loading_template.querySelector("#logo_img").src = chrome.extension.getURL('bitcoin.png');
	loading_template.querySelector("#pv_popup_close img").src = chrome.extension.getURL('design_files/resources/images/popup-close.png');
	loading_template.querySelector("#price").textContent = "loading";
	//inserting into page
	var preview_min_root = $(loading_template).insertBefore(result_view);

	make_preview_draggable();
	//update result template
	update_results_template();

	if(is_product_tracked){
		$(result_view).find(".track_button").removeClass("track");
		$(result_view).find(".track_button span:eq(0)").removeClass("fa fa-envelope");
		$(result_view).find(".track_button span:eq(0)").addClass("fa fa-heart");
		$(result_view).find(".track_button span:eq(1)").text("Wishlist");
		$(result_view).find(".track_button").attr("title","Wishlist");
	}



	if(dock_settings=="top"){
		initialize_carousel();
	}
	if(dock_settings=="bottom"){
		initialize_carousel();
	}

	if(is_dittory_prods==true){
		console.log("in dittory result");
		$("#mc_main_host").css("display","block");
		$(result_view).find(".show_more_button_container").css("display","block");
		if(dock_settings=="top"){
			initialise_carousel_for_dittory();
		}
		if(dock_settings=="bottom"){
			initialise_carousel_for_dittory();
		}

	}

	if(is_exclusive){
		insert_exclusive_msg();
	}

	// //call data load functions here
	// if (checkDeetsComplete()) {
	// 	// getGraph();
	// 	checkUUID();
	// 	// game_categ_check();
	// } else {
	// 	checkCassy();
	// }	
	// get_price_graph();
	
	view_update = true;

	if(!is_dittory_prods){
		for(var i=0; i<price_results.length;i++){
			insert_price_result_box(make_results_box(price_results[i],'',false))
		}

		for(var i=0; i<oos_results.length;i++){
			insert_oos_box(make_results_box(oos_results[i],'',true))
		}

		for(var i=0; i<search_results.length;i++){
			insert_manual_search_box(make_manual_search_box(search_results[i],'',false))
		}

	}else{
		for(var i=0; i<price_results.length;i++){
			insertDittoryProduct(price_results[i]);
		}
	}

	if(show_all_text){
		$(result_view).find(".show_more_button_container button").text(show_all_text);
	}

	//displaying results
	hide_preview_display_results();
	$("#mc_main_host").css("display","block");
	price_graph_success(graph_data);
	view_update = false;

}

function track_button_click(){
	register_user_action("track_button_click");
	chrome.runtime.sendMessage({method:"track_click"},function(response){

	});

	chrome.runtime.sendMessage({method: "getEmmy"},function(response){

		try {
			emmy_val = response.status.emmy;
			uuid_val = response.status.uuid;
			gcm_id = response.status.gcm_id;
		}
		catch (err) {
			console.log('Wha wha not even an emmy status?')
			emmy_val = false;
		}

		if (emmy_val) {
			sendTrackMissive(emmy_val,uuid_val,gcm_id, 1); // in JAX

		}	
		else {
			//get email from dialogue box
			get_email_and_track_product(uuid_val,gcm_id);
		} 
	});
}

function get_email_and_track_product(uuid_val,gcm_id){
	var email_popup_box = 	'<div id="mc_email_popup_container" style="width:100%; position:fixed; top:30%; box-sizing:content-box; z-index:99999;">\
			<div id="mc_email_popup" style="box-sizing:content-box; margin:auto; border-width: 1px; border-bottom: 4px solid #9ed763; padding:20px; border-radius: 5px;  width:350px; box-shadow: 0px 0px 38px 2px; background: #fff url('+housefly+') no-repeat right 5px bottom 5px; background-size: 45px;">\
					<div id ="mc_email_popup_close_box" style="box-sizing:content-box; height: 16px; width: 16px;cursor: pointer;background:url('+closebox+');position:relative; top:-5px; left:330px;" title="Close"></div>\
					<div style="font-family: baloo; font-size: 18px; color:#2e3437;">Set your email address to receive updates </div>\
					<input type="text" placeholder="Enter your email" style="border: 0; border-bottom: 1px solid #c5d0d0; width:100%; font-family: \'Lato\'; margin: 15px 0 25px 0px; outline: none; ">\
					<button class="save" style="color: #8fc952; background: none; border: 2px solid #8fc952;     border-radius: 30px; padding: 9px 22px;font-family: \'Lato\', sans-serif; font-weight: bold; font-size: 14px; transition: 0.3s; cursor:pointer; text-align: center; outline:none;">    Save\
					</button>	\
					<div id="mc_email_popup_msg" style="text-align: center; display:none;"> Success </div>\
			</div>\
		 </div>';

	$("body").append(email_popup_box);

	$("body").on("click","#mc_email_popup_container #mc_email_popup_close_box",function(){
		remove_email_popup();
	});

	function remove_email_popup(){
		//remove all events
		$("body").off("click","#mc_email_popup_container #mc_email_popup_close_box");
		$("body").off("click","#mc_email_popup_container .save");

		//remove box
		$("#mc_email_popup_container").remove();		
	}


	$("body").on("click","#mc_email_popup_container .save",function(){
		$("#mc_email_popup_msg").css("display","none");
		var email = $("#mc_email_popup input").val();
			if(validateEmail(email)){
					//display email
					
					chrome.storage.local.set({"emmy":email},function(){
	
						$("#mc_email_popup_msg").css("color","#8fc952");
						$("#mc_email_popup_msg").text("Saving Email");
						$("#mc_email_popup_msg").css("display","block");
						sendTrackMissive(email,uuid_val,gcm_id, 1);
						setTimeout(remove_email_popup,2000);
			
					});
			}
			else{	
					$("#mc_email_popup_msg").css("color","#f73f52");
					$("#mc_email_popup_msg").text("Invalid Email");
					$("#mc_email_popup_msg").css("display","block");
			}
		});	


}

function get_report(){
	 var report_box = '	<div id="mc_report_popup_container" style="width:100%; position:fixed; top:30%; box-sizing:content-box; z-index:99999;">\
			<div id="mc_email_popup" style="margin:auto; border-width: 1px; border-bottom: 4px solid #9ed763; padding:20px; border-radius: 5px;  width:350px; box-shadow: 0px 0px 38px 2px; background: #fff url('+housefly+') no-repeat right 5px bottom 5px; background-size: 45px; box-sizing:content-box;">\
					<div id ="mc_report_popup_close_box" style=" box-sizing:content-box; height: 16px; width: 16px;cursor: pointer;background:url('+closebox+');position:relative; top:-5px; left:330px;" title="Close"></div>\
					<div style="font-family: baloo; font-size: 18px; color:#2e3437;">Please tell us what was wrong </div>\
					<select name="" id="" style="width:100%; outline:none; background-color:white; border: 0; border-bottom: 1px solid #c5d0d0; width:100%; font-family: \'Lato\'; width:100%; font-family: baloo;  color:#2e3437; font-size:12px;">\
						<option value="Results are not relevant to the search">Results are not relevant to the search</option>\
						<option value="Images do not match with product">Images do not match with product</option>\
						<option value="Results are from wrong category">Results are from wrong category</option>\
						<option value="I cannot find what I\'m looking for">I cannot find what I\'m looking for</option>\
						<option value="Others">Others</option>\
					</select>\
					<div style="font-family: baloo; font-size: 18px; color:#2e3437; margin: 5px 0 0px 0px;">Additional Comments </div>\
					<textarea type="text" placeholder="Additional Comments" style="border: 1px solid #c5d0d0; width:100%; font-family: \'Lato\'; margin: 0px 0 25px 0px; outline: none; background-color: white; "></textarea>\
					<button class="submit" style="color: #8fc952; background: none; border: 2px solid #8fc952;     border-radius: 30px; padding: 9px 22px;font-family: \'Lato\', sans-serif; font-weight: bold; font-size: 14px; transition: 0.3s; text-align: center; outline:none; cursor:pointer;">    Submit\
					</button>	\
					<div id="mc_report_popup_msg" style="text-align: center; display:none;"> Success </div>\
			</div>\
		</div>';

	$("body").append(report_box);

	function remove_report_popup(){
		//remove all events
		$("body").off("click","#mc_report_popup_container #mc_report_popup_close_box");
		$("body").off("click","#mc_report_popup_container .submit");
		//remove box
		$("#mc_report_popup_container").remove();		
	}

	$("body").on("click","#mc_report_popup_container #mc_report_popup_close_box",function(){
		remove_report_popup();
	});

	$("body").on("click","#mc_report_popup_container .submit",function(){
		console.log("submit click functions");
		$("#mc_report_popup_container .submit").attr("disabled", true);
		var reason=$('#mc_report_popup_container select').val();
		var comment=$('#mc_report_popup_container textarea').val();
		var link=window.location.href;
		
		$("#mc_report_popup_msg").css("display","none");
		if((comment!="")&&($.trim(comment)!="")){
		    var feedback_obj={
		        'link':link,
		        'comment':comment,
		        'reason':reason,
		        'user_id':id_deets.user_id,
                'gcm_id':id_deets.gcm_id,
                'ver':chrome.runtime.getManifest().version.toString(),
                'ext_id':chrome.runtime.id

		    };
		    
		    var req_send = backPostGet({
		        type: "POST",
		        url: "https://shades.makkhichoose.com/analytics/logextensionfeedback",
		        data: JSON.stringify(feedback_obj),
		        contentType: "application/json; charset=utf-8",
		        dataType: "json",
		        timeout: 3500,
		    });

		    req_send.done(function(response){
		         $('#mc_report_popup_container .submit').attr("disabled", true);
		         $('#mc_report_popup_msg').css('color','#8fc952');
		         $('#mc_report_popup_msg').text("Thank you for your feedback");
		         $("#mc_report_popup_msg").css("display","block");
		        setTimeout(function(){
		            remove_report_popup();
		        },1500);  
		    });

		    req_send.fail(function(response){
		        $('#mc_report_popup_container .submit').attr("disabled", false);
		        $('#mc_report_popup_msg').css('color','#f73f52');
		        $('#mc_report_popup_msg').text("Something went wrong, please try again");
		        $("#mc_report_popup_msg").css("display","block");
		        
		    });
		                     
		}
		else{
		    $('#mc_report_popup_container .submit').attr("disabled", false);
		    $('#mc_report_popup_msg').css('color','#f73f52');
		    $('#mc_report_popup_msg').text("Something went wrong, please try again");
		    $("#mc_report_popup_msg").css("display","block");
		    
		}		
   
	});

}



function wishlist_button_click(){
	chrome.runtime.sendMessage({method:"open_wishlist_page"});
}


function set_button_events(){

	$(result_view).find(".options_button").on('click',function(){
        chrome.runtime.sendMessage({method:'settings_button_click'});
        chrome.runtime.sendMessage({method: "showOptionsPage"});

	});

	$(result_view).find(".track_button").on('click',function(){
		if($(this).hasClass("track")){
			track_button_click();
		}else{
			wishlist_button_click();
		}
	});

	$(result_view).find(".report_button").on('click',function(){
		get_report();			
	});

	$(result_view).find(".tutorial_button").on('click',function(){
		chrome.runtime.sendMessage({"method":"help_button_click","uid":id_deets.user_id});
	});

	$(result_view).find(".show_all_button").on('click',function(){

		if($(result_view).find(".show_more_button_container .beacon.show_all_button").css('visibility')=='visible'){
			chrome.runtime.sendMessage({"method":"show_all_button_with_beacon","uid":id_deets.user_id,"pid":prod_deets.product_id+prod_deets.prod_site});	
		}else{
			chrome.runtime.sendMessage({"method":"show_all_button","uid":id_deets.user_id,"pid":prod_deets.product_id+prod_deets.prod_site});	
		}

		

		chrome.storage.local.set({'dittory_site_button_clicked':true},function(response){

		});
	});



}

function make_preview_draggable(){
	$(mc_root).find("#preview_min_root").draggable({
	 containment:[-90000,-90000,90000,90000],
	  start: function(event, ui) {
	        $(this).addClass('noclick');
	    },
	 stop: makkhimin_drag_stop,
	 zIndex: 99999
	});
	getmmpos();

}

// console.log("setting click event listener");




function doc_click_handler(event){
    
    if(ctabby_click=='button_click'){
    	console.log("button click not closing things");
        ctabby_click='';
        if(site_type=="flights"){
        	flights_hide_preview_display_results();
        }
        else{
        	hide_preview_min_display_results();	
        }
        
        event.preventDefault();
        return;
    }
  

    if($(event.target).is("#mc_host")) {
    	console.log("event to mc_main_host");
        return;
    }
    else{
    	console.log("event target");
    	console.log(event.target);
    	if(prod_deets.prod_site == "aj"){
    		if($(event.target).is(".slick-next")){
    			console.log('ajio image carousee next button auto click');
    			return;
    		}
    	}
    }

    


	if(result_view && (site_type!="flights")&&($(mc_root).find("#preview_root").css("display")=="none")){
		console.log("trying for permissions");
       chrome.runtime.sendMessage({method: "getNotificationPermission"}, function(response){console.log(response)});     
        if($(mc_root).find("#preview_root_min").css("display")!="none"){
	
	        if($(result_view).find(".dropdown-menu ul").css("display")=="block"){
				$(result_view).find(".dropdown-menu ul").css("display","none");
			}
        	hide_results_display_preview_min();
        	register_user_action("result_box_close");

        }
        return;

	   	}

	if(result_view && (site_type=="flights")){
       chrome.runtime.sendMessage({method: "getNotificationPermission"}, function(response){console.log(response)});     
        if($(mc_root).find("#preview_root_min").css("display")!="none"){

	        if($(result_view).find(".dropdown-menu ul").css("display")=="block"){
				$(result_view).find(".dropdown-menu ul").css("display","none");
			}

        	flights_hide_results_display_preview();	
        }
        return;

	   	}


    

}



function register_user_action(action){
	chrome.storage.local.get({"user_action":""},function(response){
		if(response.user_action){
			var user_actions = response.user_action;
			user_actions[action] = user_actions[action] +1;

			if(action == "result_views"){
				user_actions["last_time_result_view_index"] = user_actions["products_displayed"];

			}

			if(action == "result_clicks"){
				user_actions["last_time_result_click_index"] = user_actions["products_displayed"];
			}


			chrome.storage.local.set({"user_action":user_actions},function(response){
				if(action=="products_displayed"){
					if(!user_actions["box_move_tip_displayed"]){
						make_tips_box("box_move_tip");
					}else{
						console.log("useraction "+action)
						check_for_tips(action,user_actions);

					}
				}
				if(action == "coupon_site_visit"){
					check_for_tips(action,user_actions);					
				}

			});
		}
	});
}






function dateDiffInDays(time_in_ms1, time_in_ms2) {
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  var a = new Date(time_in_ms1);
  var b = new Date(time_in_ms2);
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc1 - utc2) / _MS_PER_DAY);
}


function check_for_tips(action,data){
    var tip_last_displayed = data.tip_last_displayed;
    var date_diff = dateDiffInDays(new Date().getTime(),tip_last_displayed);
    console.log(date_diff);
    console.log(date_diff);
    if(date_diff<=0){
        return true;
    }else{
    	if((data["products_displayed"] - data["last_time_result_view_index"])>=30){
    		//display feedback tip
    		make_tips_box("no_use_tip");
    		return;
    	}
    	if((data['result_views'])>=10){
    		//display feedback notification
    		if(data['track_button_click']==0 && data['track_tip_displayed']==false){
    			//display track tip
    			make_tips_box("track_tip");
    		}
    		return;
    	}

    	if(action=="coupon_site_visit"){
			if((data['coupon_site_visit'])>=3){
	    		//display feedback notification
	    		if(data['popup_click_open']==0 && data['coupons_tip_displayed']==false){
	    			//display coupon tip
	    			make_tips_box("coupons_tip");
	    		}
	    		return;
	    	}
    	}
    	
    	
    }


}


function make_tips_box(tip_type){
	// var light_bulb_icon = chrome.extension.getURL("light_bulb.png");
	// var play_icon = chrome.extension.getURL("play_icon.jpg");

	// var tip_data={
	// 	"track_tip":{
	// 		"msg":'<div style="font-size:15px; display:inline; font-style:oblique;">Learn when the price drops </div>',
	// 		"vid": 'https://www.youtube.com/embed/kp2WaAF-jCo?autohide=1&showinfo=0&autoplay=1&rel=0'
	// 	},
	// 	"coupons_tip":{
	// 		"msg":'<div style="font-size:15px;display:inline; font-style:oblique;"> Automatically apply coupons</div>',
	// 		"vid": 'https://www.youtube.com/embed/RZiVdoX1_bg?autohide=1&showinfo=0&autoplay=1&rel=0'
	// 	},
	// 	"no_use_tip":{
	// 		"msg":'<div style="font-size:15px;display:inline;display:inline; font-style:oblique;"> <div style="display:inline-block; ">You Are Not Using Makkhichoose? <br>  <span style="font-style:normal; font-weight:normal;">Here\'s a short video showing how it can help you</span> </div></div>',
	// 		"vid": 'https://www.youtube.com/embed/68uyV-T06Hc?autohide=1&showinfo=0&autoplay=1&rel=0'
	// 	},
	// 	"box_move_tip":{
	// 		"msg":'<div style="font-size:15px; display:inline; font-style:oblique;">You Can Move Makkhi</div>',
	// 		"vid": 'https://www.youtube.com/embed/gqUd9sC1yGQ?autohide=1&showinfo=0&autoplay=1&rel=0'
	// 	}
	// }

	// var msg = tip_data[tip_type]["msg"];
	// var vid = tip_data[tip_type]["vid"];


 // var tip_box ='<div id="mc_tip_popup_container" style="width:100%; position:fixed; top:30%; box-sizing:content-box; z-index:99999; text-align:start;">\
	// 			<div id="mc_tip_popup" style="margin:auto; box-sizing:content-box; border-width: 1px; border-bottom: 4px solid #9ed763; padding:20px; padding-left:5px; padding-right:5px; border-radius: 5px;  width:420px; box-shadow: 0px 0px 38px 2px; background: #fff url('+housefly+') no-repeat right 5px bottom 5px; background-size: 25px; box-sizing:content-box;">\
	// 				<div id="title" style="text-align:left; margin-bottom:-10px;">\
	// 					<h2> <img src="'+light_bulb_icon+'" alt="" style="max-height:45px; vertical-align:middle;" /> <span>'+msg+'</span> </h2>\
	// 					<div class ="mc_tip_popup_close_box" style=" box-sizing:content-box; height: 16px; width: 16px;cursor: pointer;background:url('+closebox+');position:relative; top:-55px; left:400px;" title="Close"></div>\
	// 				</div>\
	// 				<div class="vid_box" style="text-align:center;">\
	// 					<img class="vid_play_icon"src="'+play_icon+'" alt="" style="max-width:420px; vertical-align:middle; cursor:pointer;" />\
	// 				</div>\
	// 					<button class="mc_tip_popup_close_box" style="color: #757575; background: none; border: 2px solid #757575; border-radius: 30px; padding: 4px 11px;font-family: \'Lato\', sans-serif; font-weight: bold; font-size: 14px; transition: 0.3s; text-align: center; outline:none; cursor:pointer;position:relative; top:15px;"> Close\
	// 					</button>\
	// 		</div>\
	// </div>'
	// if(tip_type=="no_use_tip"){
	// 	 tip_box ='<div id="mc_tip_popup_container" style="width:100%; position:fixed; top:30%; box-sizing:content-box; z-index:99999; text-align:start;">\
	// 					<div id="mc_tip_popup" style="margin:auto; box-sizing:content-box; border-width: 1px; border-bottom: 4px solid #9ed763; padding:20px; padding-left:5px; padding-right:5px; border-radius: 5px;  width:420px; box-shadow: 0px 0px 38px 2px; background: #fff url('+housefly+') no-repeat right 5px bottom 5px; background-size: 25px; box-sizing:content-box;">\
	// 						<div id="title" style="text-align:left; margin-bottom:-10px;">\
	// 							<h2> <img src="'+light_bulb_icon+'" alt="" style="max-height:45px; vertical-align:middle; position:relative; top:-15px;" /> <span>'+msg+'</span> </h2>\
	// 							<div class ="mc_tip_popup_close_box" style=" box-sizing:content-box; height: 16px; width: 16px;cursor: pointer;background:url('+closebox+');position:relative; top:-55px; left:400px;" title="Close"></div>\
	// 						</div>\
	// 						<div class="vid_box" style="text-align:center;">\
	// 							<img class="vid_play_icon"src="'+play_icon+'" alt="" style="max-width:420px; vertical-align:middle; cursor:pointer;" />\
	// 						</div>\
	// 							<button class="mc_tip_popup_close_box" style="color: #757575; background: none; border: 2px solid #757575; border-radius: 30px; padding: 4px 11px;font-family: \'Lato\', sans-serif; font-weight: bold; font-size: 14px; transition: 0.3s; text-align: center; outline:none; cursor:pointer;position:relative; top:15px;"> Close\
	// 							</button>\
	// 				</div>\
	// 		</div>'
		
	// }



 // var vid_box ='<div id="mc_vid_popup_container" style="width:100%; position:fixed; top:30%; box-sizing:content-box; z-index:99999; text-align:start;">\
	// 		<div id="mc_vid_popup" style="margin:auto; box-sizing:content-box; border-width: 1px; border-bottom: 4px solid #9ed763; padding:20px; border-radius: 5px;  width:640px; box-shadow: 0px 0px 38px 2px; background: #fff url('+housefly+') no-repeat right 5px bottom 5px; background-size: 45px; box-sizing:content-box;">\
	// 				<div class ="mc_vid_popup_close_box" style=" box-sizing:content-box; height: 16px; width: 16px;cursor: pointer;background:url('+closebox+');position:relative; top:-5px; left:620px;" title="Close"></div>\
	// 				<iframe src="'+vid+'" frameborder="0" width="640" height="360"></iframe>\
	// 				<div>\
	// 					<button class ="mc_vid_popup_close_box" style="color: #757575; background: none; border: 2px solid #757575;     border-radius: 30px; padding: 9px 22px;font-family: \'Lato\', sans-serif; font-weight: bold; font-size: 14px; transition: 0.3s; text-align: center; outline:none; cursor:pointer;"> Close\
	// 					</button>\
	// 				</div>\
	// 		</div>\
	// </div>'



	// chrome.runtime.sendMessage({"method":"tip_action","type":"tip_displayed","tip":tip_type});

	// $("body").append(tip_box);

	// $("body").off("click",".mc_vid_popup_close_box");
	// $("body").off("click",".mc_tip_popup_close_box");
	// $("body").off("click",".mc_tip_popup_close_box");

	// $("body").on("click",".mc_vid_popup_close_box",function(){
	// 	$("body").find("#mc_vid_popup_container").remove();
	// 	chrome.runtime.sendMessage({"method":"tip_action","type":"tip_video_closed","tip":tip_type});
	// });

	// $("body").on("click",".mc_tip_popup_close_box",function(){
	// 	$("body").find("#mc_tip_popup_container").remove();
	// 	chrome.runtime.sendMessage({"method":"tip_action","type":"tip_msg_closed","tip":tip_type});
	// });

	// $("body").on("click",".vid_play_icon",function(){
	// 	// $(".vid_play_icon").css("display","none");
	// 	// $(".mc_tip_text_contents").css("display","none");
	// 	// $(".vid_box").append('<iframe src="'+vid+'" frameborder="0" style="max-width:400px;"></iframe>');
	// 	chrome.runtime.sendMessage({"method":"tip_action","type":"tip_video_clicked","tip":tip_type});
	// 	$("body").find("#mc_tip_popup_container").remove();
	// 	$("body").append(vid_box);
	// });

	// chrome.storage.local.get({"user_action":""},function(response){
	// 	if(response.user_action){
	// 		var user_actions = response.user_action;
	// 		user_actions[tip_type+'_displayed'] = true;
	// 		user_actions["tip_last_displayed"] = new Date().getTime();

	// 		chrome.storage.local.set({"user_action":user_actions},function(response){
			
	// 		});
	// 	}
	// });
}
function update_button_beacon_positions(){
	// coordinates of the containing div

	console.log('update_button_beacon_positions');

	var parent_coords =  result_view.querySelector('.show_more_button_container').getBoundingClientRect();
	var button_coords = result_view.querySelector('.show_more_button_container button').getBoundingClientRect();
	var relative_coords_of_button = {};
	relative_coords_of_button.x = button_coords.x - parent_coords.x;
	relative_coords_of_button.y = button_coords.y - parent_coords.y;

	console.log(relative_coords_of_button);

	$(result_view).find(".show_more_button_container .beacon.show_all_button").css({
		left : relative_coords_of_button.x + 5+'px',
		top: relative_coords_of_button.y+10+'px' 
	});
}