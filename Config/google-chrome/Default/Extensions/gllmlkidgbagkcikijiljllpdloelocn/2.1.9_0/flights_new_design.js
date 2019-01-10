var flights_results = [];

var flights_analyitics_flags = {};

function insert_flights_container(json_data){

	chrome.storage.local.get({"dock_settings":""},function(response){
		if(response.dock_settings !=""){

			if(response.dock_settings[prod_deets.prod_site]){
				//settings available
				dock_settings = response.dock_settings[prod_deets.prod_site];
				load_flights_template();
			}
			else{
				//make settings
				var d_settings = response.dock_settings;
				d_settings[prod_deets.prod_site] = "left"
				chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
					dock_settings = "left";
					load_flights_template();

				});
			}
		}
		else{
				var d_settings = {};
				d_settings[prod_deets.prod_site] = "left"
				chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
					dock_settings = "left";
					load_flights_template();

				});

		}

	});

	function load_flights_template(){
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
				// setevents();
				make_flights_preview_template(json_data);
				// insert_preview_box();
			}
			link.onerror = function(e) {

			};
			document.head.appendChild(link);
	}

	function do_post_template_load_task(main_temlpate_content){

		console.log("got content");
		console.log(main_temlpate_content);
		all_container_templates = main_temlpate_content.cloneNode(true);
		if(dock_settings=="top"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; top:200px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			main_template = main_temlpate_content.querySelector('template#main_template_flights').content;
		}

		if(dock_settings=="left"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; top:100px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			main_template = main_temlpate_content.querySelector('template#flights_main_left').content;
		}

		if(dock_settings=="bottom"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; bottom:100px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			main_template = main_temlpate_content.querySelector('template#main_template_flights').content;
		}

		if(dock_settings=="right"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; right:0px; top:200px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			main_template = main_temlpate_content.querySelector('template#flights_main_left').content;
		}



		var host =  document.getElementById('mc_host');

		
		var dock_icon_0 = chrome.extension.getURL('design_files/resources/images/icons0.png');
		var dock_icon_1 = chrome.extension.getURL('design_files/resources/images/icons1.png');
		var dock_icon_2 = chrome.extension.getURL('design_files/resources/images/icons2.png');
		var dock_icon_3 = chrome.extension.getURL('design_files/resources/images/icons3.png');
		var dock_icon_4 = chrome.extension.getURL('design_files/resources/images/icon4.png');



		main_template.querySelector("#fa_style").href = chrome.extension.getURL('design_files/css/font-awesome.min.css');
		main_template.querySelector("#main_css_style").href = chrome.extension.getURL('design_files/css/popup.css');
		main_template.querySelector("#lato_css").href = chrome.extension.getURL('design_files/fonts/lato/lato.css');

		main_template.querySelector(".main_css_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/popup.css')+"\"";
		main_template.querySelector(".fa_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/font-awesome.min.css')+"\"";
		main_template.querySelector(".lato_css").textContent = "@import \"" + chrome.extension.getURL('design_files/fonts/lato/lato.css')+"\"";


		main_template.querySelector("#green_arrow img").src = chrome.extension.getURL('design_files/resources/images/arrow-green.png');
		main_template.querySelector("#dock_main img").src = dock_icon_0;
		main_template.querySelector("#dock_row_1 img").src = dock_icon_0;
		main_template.querySelector("#dock_row_2 img").src = dock_icon_1;
		main_template.querySelector("#dock_row_3 img").src = dock_icon_2;
		main_template.querySelector("#dock_row_4 img").src = dock_icon_3;
		main_template.querySelector("#dock_row_5 img").src = dock_icon_4;




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


	}

	// load_flights_template();

}

function make_flight_results_template(json_data){

	function load_result_template(){
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
			set_flights_events();
			fetch_flights_data(json_data);

		};
		link.onerror = function(e) {

		};
		document.head.appendChild(link);
	}

	function do_post_template_load_task(template_html){
		all_result_templates = template_html.cloneNode(true);
		if(dock_settings=="top"){
			result_template = template_html.querySelector('template#flights_results').content;	
		}

		if(dock_settings=="left"){
			result_template = template_html.querySelector('template#flights_results_left').content;	
		}

		if(dock_settings=="bottom"){
			result_template = template_html.querySelector('template#flights_results').content;	
		}

		if(dock_settings=="right"){
			result_template = template_html.querySelector('template#flights_results_left').content;	
		}


		
	}

	load_result_template();
}

function make_flights_preview_template(json_data){

	function load_preview_template(){

		var link = document.createElement('link');
		link.rel = 'import';
		link.href = chrome.extension.getURL('design_files/preview_box_templates.html');
		//link.setAttribute('async', ''); // make it async!
		link.onload = function(e) {
			var content = this.import
			console.log("main container import success")
			do_post_template_load_task(content);
			this.remove();
			console.log("removed main container import")
			make_preview_draggable();
			flights_hide_results_display_preview();
			make_flight_results_template(json_data);
		}
		link.onerror = function(e) {

		};
		document.head.appendChild(link);


	}


	 function do_post_template_load_task(main_temlpate_content){
	 	console.log(main_temlpate_content);
		preview_box_template = main_temlpate_content.querySelector('template#preview_mini_box').content;

		var loading_template = preview_box_template.cloneNode(true);
		loading_template.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
		loading_template.querySelector("#pv_popup_close img").src = chrome.extension.getURL('design_files/resources/images/popup-close.png');
		loading_template.querySelector("#price").textContent = "loading";
		loading_template.querySelector("div").style.display = "block";
		//inserting into page
		var preview_root = $(loading_template).insertBefore(result_view);

	}

	load_preview_template();

}


function flights_hide_preview_display_results(){
	
	if(!flights_analyitics_flags['result_view']){
		flights_analyitics_flags['result_view'] = true;
		trackmakkhiboxview_flights(prod_deets.prod_site);
	}
	
	if(dock_settings == "left"){

		$(mc_root).find("#preview_min_root").css("display","none");
		$(mc_root).css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_host").css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_main_host").css({"left":"-500px","top":"100px","right":"auto","width":$(mc_root).find("#results_view_root").css("width")});
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
		$("#mc_main_host").css({"right":"-500px","top":"100px","left":"auto","width":$(mc_root).find("#results_view_root").css("width")});
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

function flights_hide_results_display_preview(){
	
	$(mc_root).find("#results_view_root").css("display","none");
	$("#mc_main_host").css({left:"0px", top:"0px","right":"auto","bottom":"auto","width":"0px"});
	$(mc_root).css({"width":"0px"});
	$("#mc_host").css({"width":"0px"});
	$(mc_root).find("#preview_min_root").css("display","block");


}




function set_flights_events(){

	$(document).on("click",doc_click_handler);
	
	$(result_view).on("click","#result_container a.link",function(){
		if(!flights_analyitics_flags['result_click']){
			flights_analyitics_flags['result_click'] = true;
			chrome.runtime.sendMessage({
				"method":"send_event",
				"eventCategory":"result_click_flights",
				"eventAction": prod_deets.prod_site,
				"eventLabel": "",
				"eventValue": ""
			});			

		}
	});

	$(result_view).on('mousewheel', '#result_container', function (e) {
		var e0 = e.originalEvent,
		delta = e0.wheelDelta || -e0.detail;
		this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
		e.preventDefault();
	});



	//drop down box
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
			chrome.storage.local.get({"dock_settings":""},function(response){
				if(response.dock_settings !=""){
					//make settings
					var d_settings = response.dock_settings;
					d_settings[prod_deets.prod_site] = "left"
					chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
						dock_settings = "left";
						// update_data_for_spa();
						update_flights_view_data();
					});


				}
				else{
						var d_settings = {};
						d_settings[prod_deets.prod_site] = "left"
						chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
							dock_settings = "left";
							// update_data_for_spa();
							update_flights_view_data();

						});

				}

			});
		}

	});

	$(result_view).find(".dropdown-menu #dock_row_2").click(function(){
		//right dock functions
		if(dock_settings!="right"){
			chrome.storage.local.get({"dock_settings":""},function(response){
				if(response.dock_settings !=""){
					//make settings
					var d_settings = response.dock_settings;
					d_settings[prod_deets.prod_site] = "right"
					chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
						dock_settings = "right";
						// update_data_for_spa();
						update_flights_view_data();
					});


				}
				else{
						var d_settings = {};
						d_settings[prod_deets.prod_site] = "right"
						chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
							dock_settings = "right";
							// update_data_for_spa();
							update_flights_view_data();

						});

				}

			});
		}
	});

	$(result_view).find(".dropdown-menu #dock_row_3").click(function(){
		//top dock functions

		if(dock_settings!="top"){
			chrome.storage.local.get({"dock_settings":""},function(response){
				if(response.dock_settings !=""){
					//make settings
					var d_settings = response.dock_settings;
					d_settings[prod_deets.prod_site] = "top"
					chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
						dock_settings = "top";
						// update_data_for_spa();
						update_flights_view_data();
					});


				}
				else{
						var d_settings = {};
						d_settings[prod_deets.prod_site] = "top"
						chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
							dock_settings = "top";
							// update_data_for_spa();
							update_flights_view_data();

						});

				}

			});
		}

	});

	$(result_view).find(".dropdown-menu #dock_row_4").click(function(){
		//bottom dock functions
		if(dock_settings!="bottom"){
			chrome.storage.local.get({"dock_settings":""},function(response){
				if(response.dock_settings !=""){
					//make settings
					var d_settings = response.dock_settings;
					d_settings[prod_deets.prod_site] = "bottom"
					chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
						dock_settings = "bottom";
						// update_data_for_spa();
						update_flights_view_data();
					});


				}
				else{
						var d_settings = {};
						d_settings[prod_deets.prod_site] = "bottom"
						chrome.storage.local.set({"dock_settings":d_settings},function(set_response){
							dock_settings = "bottom";
							// update_data_for_spa();
							update_flights_view_data();

						});

				}

			});
		}		

	});

	$(result_view).find(".dropdown-menu #dock_row_5").click(function(){
		//center dock functions
	})


	$(mc_root).on("click","#preview_min_root",function(e){
	   ctabby_click='button_click';
		flights_hide_preview_display_results();
	});


	// //set preview box hover listener
	// $(mc_root).on("mouseenter","#preview_min_root",function(e){
	//    $(this).data('timeout', setTimeout(function () {
	// 		flights_hide_preview_display_results();
	// 		//send makhibox view analytics
	//     }, 3000));

	// });

 // 	$(mc_root).on("mouseleave","#preview_min_root",function(e){
	// 	// $(mc_root).find("#preview_root").css("display","none");
	// 	// $(result_view).css("display","block");
	// 	clearTimeout($(this).data('timeout'));
	// });
  

	//left arrow in results view
	$(mc_root).on("click","#green_arrow",function(e){
		flights_hide_results_display_preview();
	});

	$(result_view).find(".options_button").on('click',function(){
		chrome.runtime.sendMessage({method:'settings_button_click'});
		chrome.runtime.sendMessage({method: "showOptionsPage"});

	});

	$(result_view).find(".report_button").on('click',function(){
		get_report();			
	});



}



function update_data_for_flights_spa(json_data){
	console.log("in update data for spa");
	if(preview_box_template != "" && result_template!="" && main_template!=""){
		//no need to import
		flights_results = [];
		flights_update_main_container();
		//update event listeners
		set_flights_events();

		var preview_box =  preview_box_template.cloneNode(true);
		
		preview_box.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
		preview_box.querySelector("#pv_popup_close img").src = chrome.extension.getURL('design_files/resources/images/popup-close.png');
		preview_box.querySelector("#price").textContent = "loading";
		preview_box.querySelector("div").style.display = "block";

		$(preview_box).insertBefore(result_view);
		make_preview_draggable();
		flights_hide_results_display_preview();
		fetch_flights_data(json_data);

	}
	else{
		console.log("need to import");
		insert_flights_container(json_data);
	}

}


function flights_update_main_container(){
		console.log("no need to import");
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

 	
	    la_tag = "<style id=\"lato\">\
			@font-face {\
			  font-family: 'Lato';\
			  font-style: normal;\
			  font-weight: 400;\
			  src: url("+chrome.extension.getURL('design_files/fonts/lato/UyBMtLsHKBKXelqf4x7VRQ.woff2')+") format('woff2');\
			  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\
			}\
			@font-face {\
			  font-family: 'Lato';\
			  font-style: normal;\
			  font-weight: 400;\
			  src: url("+chrome.extension.getURL('design_files/fonts/lato/1YwB1sO8YE1Lyjf12WNiUA.woff2')+") format('woff2');\
			  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\
			}\
	     </style>";

	     $("head").append(la_tag);

		$("#mc_main_host").remove();
		// $("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:50%; top:100px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
		var main_temlpate_content = all_container_templates.cloneNode(true);
		if(dock_settings=="top"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; top:100px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			main_template = main_temlpate_content.querySelector('template#main_template_flights').content;
		}

		if(dock_settings=="left"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; top:100px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			main_template = main_temlpate_content.querySelector('template#flights_main_left').content;
		}


		if(dock_settings=="bottom"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; bottom:100px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			main_template = main_temlpate_content.querySelector('template#main_template_flights').content;
		}

		if(dock_settings=="right"){
			$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; right:0px; top:200px; z-index:9999;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
			main_template = main_temlpate_content.querySelector('template#flights_main_left').content;
		}


		
		var host =  document.getElementById('mc_host');

		
		var dock_icon_0 = chrome.extension.getURL('design_files/resources/images/icons0.png');
		var dock_icon_1 = chrome.extension.getURL('design_files/resources/images/icons1.png');
		var dock_icon_2 = chrome.extension.getURL('design_files/resources/images/icons2.png');
		var dock_icon_3 = chrome.extension.getURL('design_files/resources/images/icons3.png');
		var dock_icon_4 = chrome.extension.getURL('design_files/resources/images/icon4.png');


		main_template.querySelector("#fa_style").href = chrome.extension.getURL('design_files/css/font-awesome.min.css');
		main_template.querySelector("#main_css_style").href = chrome.extension.getURL('design_files/css/popup.css');
		main_template.querySelector("#lato_css").href = chrome.extension.getURL('design_files/fonts/lato/lato.css');

		main_template.querySelector(".main_css_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/popup.css')+"\"";
		main_template.querySelector(".fa_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/font-awesome.min.css')+"\"";
		main_template.querySelector(".lato_css").textContent = "@import \"" + chrome.extension.getURL('design_files/fonts/lato/lato.css')+"\"";


		main_template.querySelector("#green_arrow img").src = chrome.extension.getURL('design_files/resources/images/arrow-green.png');
		main_template.querySelector("#dock_main img").src = dock_icon_0;
		main_template.querySelector("#dock_row_1 img").src = dock_icon_0;
		main_template.querySelector("#dock_row_2 img").src = dock_icon_1;
		main_template.querySelector("#dock_row_3 img").src = dock_icon_2;
		main_template.querySelector("#dock_row_4 img").src = dock_icon_3;
		main_template.querySelector("#dock_row_5 img").src = dock_icon_4;


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
}


function flights_update_results_container(){

	var template_html = all_result_templates.cloneNode(true);
	if(dock_settings=="top"){
		result_template = template_html.querySelector('template#flights_results').content;	
	}

	if(dock_settings=="left"){
		result_template = template_html.querySelector('template#flights_results_left').content;	
	}

	if(dock_settings=="bottom"){
		result_template = template_html.querySelector('template#flights_results').content;	
	}

	if(dock_settings=="right"){
		result_template = template_html.querySelector('template#flights_results_left').content;	
	}


}

function update_flights_view_data(){
	
	flights_update_main_container();
	//update event listeners
	set_flights_events();

	var preview_box =  preview_box_template.cloneNode(true);
	
	preview_box.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
	preview_box.querySelector("#pv_popup_close img").src = chrome.extension.getURL('design_files/resources/images/popup-close.png');
	preview_box.querySelector("#price").textContent = "loading";
	// preview_box.querySelector("div").style.display = "block";

	$(preview_box).insertBefore(result_view);
	make_preview_draggable();
	flights_hide_results_display_preview();
	flights_update_results_container();

	console.log("updating view");

	view_update =true;
	for(var i =0; i< flights_results.length;i++){
		insert_flights_card(make_flights_card(flights_results[i]));
	}	
	view_update =false;


    if(journey_deets.isReturn){
     // $('#to_and_fro_deets').html(journey_deets.fromCityCode+' '+'⇄'+' '+journey_deets.toCityCode);
         result_view.querySelector("#from_city_code").textContent = journey_deets.fromCityCode;
         result_view.querySelector("#to_city_code").textContent = journey_deets.toCityCode;
         result_view.querySelector("#jtype").src = chrome.extension.getURL('design_files/resources/images/left-right.png');
    }
    else{
     // $('#to_and_fro_deets').html(journey_deets.fromCityCode+' '+'→'+' '+journey_deets.toCityCode);
         result_view.querySelector("#from_city_code").textContent = journey_deets.fromCityCode;
         result_view.querySelector("#to_city_code").textContent = journey_deets.toCityCode;
         result_view.querySelector("#jtype").src = chrome.extension.getURL('design_files/resources/images/left-right.png');

    }

	flights_hide_preview_display_results();

}