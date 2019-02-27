/*
 * Copyright (c) 2012 Kernel Insights. All rights reserved.  
 */




chrome.runtime.sendMessage({method: "showpageicon"}, function(response){});
//chrome.runtime.sendMessage({method: "pageviewtracking", host: window.location.hostname}, function(response){});

// chrome.runtime.sendMessage({method:'pop_dst',site:window.location.hostname});



if (window.location.hostname == 'www.flipkart.com') {
	may_sale_other_site_notifs();
	var fk_sub_kp=false;
	var fk_sub_kp_sub_val='';

	prod_deets.prod_site = "fk";

	 $('.header-form-search input[type="text"]').on( "keydown", function(event) {
	      if(event.which == 13) {
	      	fk_sub_kp=true;
	      	fk_sub_kp_sub_val=$(this).val();
	      	console.log($(this).val());
	      	sendsearchIntent('fk',$(this).val());

	      }
	      return true;
	      	
	   });


	 $('body').on('click','.header-form-search ul li a', function(){
	 		console.log($(this).text());
	 		//return true to propogateevents
	 		sendsearchIntent('fk',$(this).text());
	 		return true;
	 });

	 
	  $('.header-form-search button').on('click',function(event){
	  		if(fk_sub_kp && fk_sub_kp_sub_val == $('.header-form-search input[type="text"]').val()) {
	  			fk_sub_kp=false;
	  		}
	  		else{
	  			console.log($('.header-form-search input[type="text"]').val());
	  			sendsearchIntent('fk',$('.header-form-search input[type="text"]').val());	
	  		}
			
			return true;

	  });

	 

	$('body').on("click",'button:contains("ADD TO CART")', function(){
		console.log('ADD TO CART CLICKED');
		sendcartevent('fk','add to cart',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);
		return true;
	});



	$('body').on("click",'button:contains("BUY NOW")', function(){
		console.log('BUY NOW CLICKED');
		sendcartevent('fk','buy now',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);
		return true;
	});

	//eof search
	flipkart_react_page();
	//sriram was here
	//getFKBulkPrices();
} // flipmatch

if (window.location.hostname == 'www.amazon.in') {
	prod_deets.prod_site ='az';
	may_sale_other_site_notifs();
	var az_sub_kp=false;
	var az_sub_kp_sub_val='';

	$('body').on("click","#suggestions-template #suggestions .s-suggestion",function(){
			console.log($(this).text());
			sendsearchIntent('az',$(this).text());
			return true;
	});

	$('body').on( "keydown",'#twotabsearchtextbox',function(event) {
      if(event.which == 13) {
      	az_sub_kp=true;
      	az_sub_kp_sub_val=$("#twotabsearchtextbox").val();
      	// console.log($(this).val());
      	sendsearchIntent('az',$("#twotabsearchtextbox").val());
      }
      return true;
      	
	});

	$('body').on('click',"form.nav-searchbar input[type='submit']",function(){

		if(az_sub_kp && az_sub_kp_sub_val == $("#twotabsearchtextbox").val()) {
  			az_sub_kp=false;
  		}
  		else{
  			console.log($("#twotabsearchtextbox").val());
  			sendsearchIntent('az',$("#twotabsearchtextbox").val());	
  		}
	
	});



	$('body').on("click",'input#add-to-cart-button',function(){
		console.log('Add to cart clicked');
		sendcartevent('az','add to cart',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);
	});

	$('body').on("click",'input#buy-now-button',function(){
		console.log('Buy now clicked');
		sendcartevent('az','Buy now',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);
	});

	//eof sear

	refreshAlertPrices();
	lickHotStove('az');

	var flipref=window.location.href;

	var amazon_all_url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});


		if(amazon_all_url_params['tag']!='makkhichoos0c-21' && amazon_all_url_params['tag']!='smartmakkhi-21' && amazon_all_url_params['tag']!='tatkallgt-21' && amazon_all_url_params['tag']!='tatkalprc-21'&& amazon_all_url_params['tag']!='makkhimanual-21'&&  amazon_all_url_params['tag']!=undefined && !amazon_all_url_params['tag'].match("makkhi") && !amazon_all_url_params['tag'].match("ditto") && !amazon_all_url_params['tag'].match("tatkal") ){

			console.log('setting is_our_az to false');
			set_is_our_affy('is_our_az',false);
			set_affy('az_search',true);
			set_affy('az_price',true);
			get_affy_flags();



		}
		else if((amazon_all_url_params['tag']!=undefined) && (amazon_all_url_params['tag']=='makkhichoos0c-21' || amazon_all_url_params['tag']=='smartmakkhi-21' || amazon_all_url_params['tag']=='tatkallgt-21' ||amazon_all_url_params['tag']=='tatkalprc-21'|| amazon_all_url_params['tag']=='makkhimanual-21' || amazon_all_url_params['tag'].match("makkhi") || amazon_all_url_params['tag'].match("ditto") || amazon_all_url_params['tag'].match("tatkal")) ){
			console.log('setting is_our_az to true');
			set_is_our_affy('is_our_az',true);

		}


	if ((flipref.match('/dp/') || flipref.match('/gp/product/')) && (!flipref.match('/gp/product/handle-buy'))){

		prod_deets.prod_img=$.trim($(cssLocs.az.prod_img).attr('src'));

		// insertTag(false);

		// $('#feedback').css('margin-left','0px');
		// $('#useme').css('display','inline');

		window.onbeforeunload=function(){
		var hover_time_array;
			if(ga_whisperbox_hover_times.length==0){
				hover_time_array='results_not_hovered';
				
			}
			else if(ga_whisperbox_hover_times.length>0){
				hover_time_array=ga_whisperbox_hover_times.join();
			}
			chrome.runtime.sendMessage({ method:"time_spent_in_results",message:hover_time_array });

			if(ga_graph_hover_times.length==0){
				hover_time_array='graph_not_hovered';

			}
			else if(ga_graph_hover_times.length>0){
				hover_time_array=ga_graph_hover_times.join();
			}
			// chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array,prod_id:prod_deets.product_id,page_url:window.location.href });
			// chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array,prod_id:prod_deets.product_id+prod_deets.prod_site,page_url:window.location.href });
			chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array,prod_id:prod_deets.product_id+prod_deets.prod_site,page_url:window.location.href });
			// send_graph_times(hover_time_array);

		};


		//tag=makkhichoos0c-21/smartmakkhi-21
		var amazon_all_url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});

		if(amazon_all_url_params['tag']!='makkhichoos0c-21' && amazon_all_url_params['tag']!='smartmakkhi-21' && amazon_all_url_params['tag']!='tatkallgt-21' && amazon_all_url_params['tag']!='tatkalprc-21'&& amazon_all_url_params['tag']!='makkhimanual-21'&&  amazon_all_url_params['tag']!=undefined && !amazon_all_url_params['tag'].match("makkhi") && !amazon_all_url_params['tag'].match("ditto") && !amazon_all_url_params['tag'].match("tatkal") ){
			set_affy('az_search',true);
			set_affy('az_price',true);
			get_affy_flags();
		}

		prod_deets.prod_site='az';

		// // $('#'+whisperbox).css('visibility','visible');
		// //trackMakkhiBoxDisplay(prod_deets.prod_site);
		var kindle_prod = false;
		var gen_bread = $('#wayfinding-breadcrumbs_container');
		if ( $(gen_bread).find('li').text().toLowerCase().match('kindle') ) {
			kindle_prod = true;
			console.log('buhahahaha');
		}

		// check if the breadcrumb is available
		// var crumbs = $('ul.a-horizontal.a-size-small li').filter(':even');
		// if ((crumbs.length > 0) &&  $(crumbs[0]).find('a').text().trim()!='') {
		// 	//found crumbs
		// 	//console.log('DEBUG: \n\nfound crumbs\n\n');
		// 	prod_deets.prod_categ = $(crumbs[0]).find('a').text().trim();
		// 	prod_deets.prod_categ_alt = $(crumbs[crumbs.length - 1]).find('a').text().trim();

		// 	trackCateg('amazon', prod_deets.prod_categ, prod_deets.prod_categ_alt);

		// } else {
		// 	console.log('Hayaiyyo Miyazaki no crumbs trail');
		// 	prod_deets.prod_categ = $.trim($(cssLocs.az.category).text());
		// 	prod_deets.prod_categ_alt = $.trim($(cssLocs.az.category_alt).text());
		// 	trackCateg('amazon', prod_deets.prod_categ, prod_deets.prod_categ_alt);
		// }
		var breadcrumb_list = $(".a-breadcrumb li a");
		var crumbs = ""
		for(i=0; i<breadcrumb_list.length;i++){
			crumbs += $.trim($(breadcrumb_list[i]).text());
			crumbs += "_";
		}
		if(crumbs){
			crumbs = crumbs.slice(0,-1);
		}
		crumbs = crumbs?crumbs:"";

		prod_deets.prod_categ_alt = crumbs;
		if(crumbs){
			prod_deets.prod_categ = crumbs.split('_')[crumbs.split('_').length-1];
		}
		//cssLocs in helperfuncs.js has the details stored
		prod_deets.prod_title = cleanTitle($(cssLocs.az.title).text());
		prod_deets.prod_title_raw = $.trim($(cssLocs.az.title).text());

		//store text in brackets separately; this makes search heard 
		prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

		//if price not in this location, look in alternate
		var chk_price=textFind($(cssLocs.az.price).contents());

		if (chk_price=='') {
			prod_deets.prod_price = cleanPrice(textFind($(cssLocs.az.price_alt).contents()));
		}
		else {
			prod_deets.prod_price = cleanPrice(chk_price);
		}

		prod_deets.ss = 0;
		var oosData = $(cssLocs.az.oos);
		if(oosData.length > 0) {
			prod_deets.ss = 1;
		}

		var disc_prod=$(cssLocs.az.disc_prod);
		if (disc_prod.length>0) {
			prod_deets.ss = 2;
		}

		prod_deets.prod_srch = prod_deets.prod_title;

		if (isBook()) {
			//check if this is paperback or hardcover
			if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
				prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
			}

			book_details=get_book_details(prod_deets.prod_site)

						


			if((book_details.isbn_10!='') || (book_details.isbn_13 !='') ){

				if((book_details.isbn_13!='')){

					//prod_deets.prod_srch="isbn:"+book_details.isbn_10;
					prod_deets.prod_srch=book_details.isbn_13;
				}

				else{
					if(book_details.isbn_10 !=''){

						prod_deets.prod_srch=book_details.isbn_10;
				}


					}
				}
			

		}
		else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}

		
		// prod_deets.prod_img = $("#imageBlock img#landingImage").attr('src');
		try{
			prod_deets.prod_img = document.querySelectorAll('#imageBlock img#landingImage')[0].getAttribute('data-old-hires');	
		}catch(err){
			prod_deets.prod_img = $.trim($(cssLocs.az.prod_img).attr('src'));
		}

		

		if(!prod_deets.prod_img){
			try{
				if($("#imageBlock img#landingImage").attr('data-a-dynamic-image')){
					var img_data =JSON.parse($("#imageBlock img#landingImage").attr('data-a-dynamic-image'));
					if(img_data){
						var img_srcs = Object.keys(img_data);
						for(var i=0;  i<img_srcs.length;i++){
							if(img_data[img_srcs[i]][0]>400||img_data[img_srcs[i]][1]>400){
								prod_deets.prod_img = img_srcs[i];
								break;
							}
						}			
					}

				}	

			}
			catch(err){

			}
		}


		// If kindle store; do it all again
		if (kindle_prod) {
			prod_deets.prod_title = $('#ebooksProductTitle').text().trim();
			prod_deets.prod_srch = prod_deets.prod_title;
			prod_deets.prod_title_raw = prod_deets.prod_title;
			prod_deets.prod_price = cleanPrice(textFind($('.kindle-price .a-color-price').contents()));
			prod_deets.prod_categ = 'kindle store';
			prod_deets.prod_categ_alt = 'ebooks';
		}

		insertPiddle(prod_deets);

		var az_pid_match_group="";

		if(window.location.href.match(/dp\/(.+)\/ref/)){
			az_pid_match_group = window.location.href.match(/dp\/(.+)\/ref/);
		}else if(window.location.href.match(/dp\/(.+)\/\?/)){
			az_pid_match_group = window.location.href.match(/dp\/(.+)\/\?/);
		}else if(window.location.href.match(/dp\/(.+)\?/)){
			az_pid_match_group = window.location.href.match(/dp\/(.+)\?/);
		}else if(window.location.href.match(/dp\/(.+)$/)){
			az_pid_match_group = window.location.href.match(/dp\/(.+)$/);
		}else if(window.location.href.match(/\/gp\/product\/(.+?)\b/)){
			az_pid_match_group = window.location.href.match(/\/gp\/product\/(.+?)\b/);
		}

		if(az_pid_match_group[1]){
			prod_deets.product_id = az_pid_match_group[1];
		}

		if($('#variation_size_name select[name="dropdown_selected_size_name"]').val() != undefined){
			if($('#variation_size_name select[name="dropdown_selected_size_name"]').val() != -1){
				prod_deets.product_id = $('#variation_size_name select[name="dropdown_selected_size_name"]').val().split(",")[1];
			}
			else{
				prod_deets.product_id = $('#variation_size_name select[name="dropdown_selected_size_name"] option:eq(1)').val().split(",")[1];
			}
		}

		console.log(prod_deets);
		insert_main_container();
		// if (checkDeetsComplete()) {
		// 	getGraph();
		// 	checkUUID();
		// 	game_categ_check();
		// } else {
		// 	checkCassy();
		// }	
			// wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
			// if(url_params['tag']=='makkhiwalk-21'){
			// 	setTimeout(do_walk_through,1000);
			// }
			// else{
			// 	console.log('not a walk through');
			// 	console.log(url_params['ascsubtag']);
			// }
		// $('#makkhi_min_box').css('top','400px');
		// checkYogiLevitate();
	} //   pidmatch
	else{
		game_categ_check();
	}

	// limit the #welcomebox size.
	// $('#welcomebox .row-btm img').css('width', '20px');
	$('head').append(
		'<style type="text/css">\
			#welcomebox .row-btm img {\
				width: 20px !important;\
			}\
		</style>'
	);

} // azmatch




// Homeshop


if (window.location.hostname == 'www.homeshop18.com') {
may_sale_other_site_notifs();

var flipref=window.location.href;


if (flipref.match('product\\:')) {

// insertTag(false);


prod_deets.prod_site='hs';

// $('#'+whisperbox).css('visibility','visible');
// //trackMakkhiBoxDisplay(prod_deets.prod_site);

prod_deets.prod_categ = $.trim($(cssLocs.hs.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.hs.category_alt).text());

if (prod_deets.prod_categ != '' && prod_deets.prod_categ_alt != '') {
	trackCateg('homeshop18', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.hs.title).text());
prod_deets.prod_title_raw = $.trim($(cssLocs.hs.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.hs.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.hs.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}


prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}

prod_deets.prod_img = $.trim($(cssLocs.hs.prod_img).attr('value'));
insertPiddle(prod_deets);
console.log(prod_deets);
// getGraph();
// checkUUID();
// wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
insert_main_container();
} //   pidmatch

	// if (homeshop18Cart(document.URL)) {
	// 	var portal = 'hs';
	// 	var req = getCouponList(portal);
	// 	var couponList = [];
	// 	insertTag(true);
	// 	req.done(function(response) {
	// 		var response = $.parseJSON(response);
	// 		//couponList = response['couponList'];
	// 		couponList=response;
	// 		console.log('couponlist is ');
	// 		console.log(couponList);
	// 		// fill in the couponbox here!
	// 		fillCoupons(couponList, portal);
	// 	});


	// 	$('#'+whisperbox).css('visibility','visible');
	// 	//trackMakkhiBoxDisplay(prod_deets.prod_site);
	// } // cart


} // hsmatch



// ebay


if (window.location.hostname.match('.ebay.in')) {
	may_sale_other_site_notifs();
	console.log('ebay');
	
	var eb_sub_kp=false;
	var eb_sub_kp_sub_val='';

	$('body').on('keydown',"input.ui-autocomplete-input",function(){
			if(event.which == 13) {
				// alert($(this).val());
				sendsearchIntent('eb',$(this).val());
		      	eb_sub_kp=true;
		      	eb_sub_kp_sub_val=$(this).val();

			}
			return true;
	});


	$('body').on('click',"input[type='submit'][value='Search']",function(){
			if(eb_sub_kp && eb_sub_kp_sub_val == $("input.ui-autocomplete-input").val()) {
	  			eb_sub_kp=false;
	  		}
	  		else{
	  			// alert($("input.ui-autocomplete-input").val());
	  			sendsearchIntent('eb',$("input.ui-autocomplete-input").val());	
	  		}
			return true;
	});

	$('body').on("click","ul.ui-autocomplete li a",function(){
			// alert($(this).text());
			sendsearchIntent('eb',$(this).text());
			return true;
	});


	$('body').on('click','#isCartBtn_btn',function(){

		// alert('addto cart button clicked');
		sendcartevent('eb','add to cart',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);

	});

	$('body').on('click','#binBtn_btn',function(){
		// alert('buy button clicked');
		sendcartevent('eb','buy button',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);
	});


//end of sear
var flipref=window.location.href;

if ($('#Body[itemtype="http://schema.org/Product"]').length>0 || $('#Body[itemtype="https://schema.org/Product"]').length>0 ) {
console.log('ss')

// insertTag(false);


prod_deets.prod_site='eb';

// $('#'+whisperbox).css('visibility','visible');
// //trackMakkhiBoxDisplay(prod_deets.prod_site);

prod_deets.prod_categ = $.trim($(cssLocs.eb.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.eb.category_alt).text());

if (prod_deets.prod_categ != '' && prod_deets.prod_categ_alt != '') {
	trackCateg('ebay', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}
//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title_raw = $.trim(tittlyFind($(cssLocs.eb.title).contents()));
prod_deets.prod_title = cleanTitle(prod_deets.prod_title_raw);

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.eb.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.eb.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}


prod_deets.prod_srch = prod_deets.prod_title;

prod_deets.prod_img = $.trim($(cssLocs.eb.prod_img).attr('src'));


if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}

// insertPiddle(prod_deets);
// console.log(prod_deets);
// getGraph();
// checkUUID();
// wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
insert_main_container();
} //   pidmatch

	// if (ebayCart(document.URL)) {
	// 	console.log('at ebay cart page');
	// 	var portal = 'eb';
	// 		var req = getCouponList(portal);
	// 		var couponList = [];
	// 		insertTag(true);
	// 		req.done(function(response) {
	// 			var response = $.parseJSON(response);
	// 			//couponList = response['couponList'];
	// 			couponList=response;
	// 			console.log('couponlist is ');
	// 			console.log(couponList);
	// 			// fill in the couponbox here!
	// 			fillCoupons(couponList, portal);
	// 		});
	// 		$('#'+whisperbox).css('visibility','visible');	
	// 		//trackMakkhiBoxDisplay(prod_deets.prod_site);
	// }// cart match

} // ebmatch




// infibeam


if (window.location.hostname.match('.infibeam.com')) {

may_sale_other_site_notifs();
var flipref=window.location.href;

if (flipref.match('\\.html') && (($('#ib_details').length>0) || ($('#product-overview').length>0)) )  {

// insertTag(false);


prod_deets.prod_site='ib';

// $('#'+whisperbox).css('visibility','visible');
// //trackMakkhiBoxDisplay(prod_deets.prod_site);


prod_deets.prod_categ = $.trim($(cssLocs.ib.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.ib.category_alt).text());

if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	trackCateg('infibeam', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.ib.title).text());
prod_deets.prod_title_raw = $.trim($(cssLocs.ib.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.ib.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.ib.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}


prod_deets.prod_srch = prod_deets.prod_title;
if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}


		book_details=get_book_details(prod_deets.prod_site)		
			if((book_details.isbn_10!='') || (book_details.isbn_13 !='') ){
				if((book_details.isbn_13!='')){

					//prod_deets.prod_srch="isbn:"+book_details.isbn_10;
					prod_deets.prod_srch=book_details.isbn_13;
				}

				else{
					if(book_details.isbn_10 !=''){

						prod_deets.prod_srch=book_details.isbn_10;
				}


					}
				}
			

}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}
prod_deets.prod_img = $("#product-images img").attr('src');
insertPiddle(prod_deets);
insert_main_container();
// getGraph();
// checkUUID();
// wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
} //   pidmatch
	// if (infibeamCart(document.URL)) {
	// 	var portal = 'ib';
	// 	var req = getCouponList(portal);
	// 	var couponList = [];
	// 	insertTag(true);
	// 	req.done(function(response) {
	// 		var response = $.parseJSON(response);
	// 		//couponList = response['couponList'];
	// 		couponList=response;
	// 		console.log('couponlist is ');
	// 		console.log(couponList);
	// 		// fill in the couponbox here!
	// 		fillCoupons(couponList, portal);
	// 	});
	// 	$('#addCoupon').click();
	// 	$('#'+whisperbox).css('visibility','visible');
	// 	//trackMakkhiBoxDisplay(prod_deets.prod_site);
	
	// } // first page towards cart

} // ibmatch



if ((window.location.hostname == 'www.kernelinsights.com') || (window.location.hostname == 'www.makkhichoose.com') || (window.location.hostname == 'makkhichoose.com'))  {

	var kiref = window.location.href;

	if (kiref.match('SolveForMakkhi')) {
		insertTag(false);
		$('#'+whisperbox).css({'visibility':'visible','height':'250px'});
		$('#'+whisperboxcontent).css({'visibility':'visible'});
		$('#'+whisperboxcontent)
		.html('<span style="font-size:14px; font-weight:bold; color: #4f4f4f;"> You have MakkhiChoose!</span>  <br><span style="font-size:10px; font-weight:bold; color: #4f4f4f;">Lower prices will appear here when you are browsing online stores.</span><br><br><span style="font-size:10px; font-weight:bold; color: #2b5f91;"> Clue: Spotted headerRight? Good, now think about why those words repeat. Good Luck!</span>');

		$('#'+ whisperbox + ' span.'+whisperboxtab).css({
				'background-image':alert_url_str,'display':'inline !important'});

		$('#'+whisperbox)
                .animate({left:'0'},  300)
                .addClass('open');
		$('#'+whisperbox)
                .animate({left:'-' + $('#'+whisperbox).outerWidth()}, 300)
                .removeClass('open');

	} //match solveformakkhi

	if (kiref.match('youvegotmakkhichoose')) {
		insertTag(false);
		$('#'+whisperbox).css({'visibility':'visible','height':'250px'});
		$('#'+whisperboxcontent).css({'visibility':'visible'});
		$('#'+whisperboxcontent)
		.html('<span style="font-size:14px; font-weight:bold; color: #4f4f4f;"> You have MakkhiChoose!</span>  <br><span style="font-size:10px; font-weight:bold; color: #4f4f4f;">Lower prices will appear here when you are browsing online stores.</span>');

		$('#'+ whisperbox + ' span.'+whisperboxtab).css({
				'background-image':alert_url_str,'display':'inline !important'});


		$('#'+whisperbox)
                .animate({left:'0'},  300)
                .addClass('open');
		$('#'+whisperbox)
                .animate({left:'-' + $('#'+whisperbox).outerWidth()}, 300)
                .removeClass('open');

	} //match solveformakkhi


	console.log(kiref);

} //ki


if (window.location.hostname == 'www.naaptol.com') {

may_sale_other_site_notifs();
var flipref=window.location.href;

if ($('#product_page').length>0) {


insertTag(false);

prod_deets.prod_site='nt';

$('#'+whisperbox).css('visibility','visible');
//trackMakkhiBoxDisplay(prod_deets.prod_site);

prod_deets.prod_categ = $.trim($(cssLocs.nt.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.nt.category_alt).text());

if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	trackCateg('naaptol', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.nt.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.nt.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.nt.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.nt.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();
wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
} //   pidmatch

if (naaptolCart(document.URL)) {
	// var portal = 'nt';
	// var req = getCouponList(portal);
	// var couponList = [];
	// insertTag(true);
	// req.done(function(response) {
	// 	var response = $.parseJSON(response);
	// 	//couponList = response['couponList'];
	// 	couponList=response;
	// 	console.log('couponlist is ');
	// 	console.log(couponList);
	// 	// fill in the couponbox here!
	// 	fillCoupons(couponList, portal);
	// });

	// $('#'+whisperbox).css('visibility','visible');
	//trackMakkhiBoxDisplay(prod_deets.prod_site);	
} // naaptol cart page

} // naaptol


//indiatimes

if (window.location.hostname == 'shopping.indiatimes.com') {

may_sale_other_site_notifs();
var flipref=window.location.href;

if ($('div.productdetailwrapper').length>0) {


insertTag(false);


prod_deets.prod_site='it';

$('#'+whisperbox).css('visibility','visible');
//trackMakkhiBoxDisplay(prod_deets.prod_site);
prod_deets.prod_categ = $.trim($(cssLocs.it.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.it.category_alt).text());


//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = $.trim(cleanTitle($(cssLocs.it.title).text()));
prod_deets.prod_title_raw = $.trim($(cssLocs.it.title).text());

if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	trackCateg('indiatimes', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.it.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.it.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}

var shp_price = textFind($(cssLocs.it.price_shp).contents(),-1);

try {
	prod_deets.prod_price = parseInt(prod_deets.prod_price)+parseInt(shp_price);
	$(cssLocs.it.price_alt).parent().append('<br><b>including shipping charges \u20B9 '+prod_deets.prod_price + '</b><br>');

} catch (err) {
	console.log('oopsie, sneaky shipping price not added!');
}

console.log('IndiaTimes Sneaky Shipping Price! '+ (prod_deets.prod_price + shp_price));
console.log($(cssLocs.it.price_shp).html());

prod_deets.prod_srch = $.trim(prod_deets.prod_title).replace('\u00A0',' ');

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}

console.log(prod_deets);
insertPiddle(prod_deets);
getGraph();
checkUUID();

} //   pidmatch
	if (indiaTimesCart(document.URL)) {
		// var portal = 'it';
		// console.log('in justeat cart');
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag(true);
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });
		// $('#'+whisperbox).css('visibility','visible');
		//trackMakkhiBoxDisplay(prod_deets.prod_site);
	} // cart page

} // indiatimes

// SnapDeal


if (window.location.hostname == 'www.snapdeal.com') {

may_sale_other_site_notifs();
$('.searchformButton').on("click",function(event){
	// console.log('search button clicked');
	console.log($('.searchformInput').val());
	sendsearchIntent('sd',$('.searchformInput').val());
	return true;
});	


$('.searchformInput').on( "keydown",function(event){
	if(event.which == 13) {
		console.log($('.searchformInput').val());
		sendsearchIntent('sd',$('.searchformInput').val());
		return true;		
	}
});



 $('body').on('click','.searchAutoSuggstn a', function(){
 		console.log($(this).text());
 		sendsearchIntent('sd',$(this).text());
 		//return true to propogateevents
 		return true;
 });


 $('#buy-button-id').on("click", function(){
	console.log('BUY NOW CLICKED');
	sendcartevent('sd','Buy Now',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);
	return true;
});


$('#add-cart-button-id').on("click", function(){
	console.log('ADD TO CART CLICKED');
	sendcartevent('sd','Add to cart',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);
	return true;
});

$('.floatingBuys').on("click", function(){
	console.log('BUY NOW CLICKED');
	sendcartevent('sd','Buy Now',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);
	return true;
});

//eof sear

refreshAlertPrices();

var flipref=window.location.href;

if (flipref.match('\\/product\\/')) {


window.onbeforeunload=function(){
var hover_time_array;
	if(ga_whisperbox_hover_times.length==0){
		hover_time_array='results_not_hovered';
		
	}
	else if(ga_whisperbox_hover_times.length>0){
		hover_time_array=ga_whisperbox_hover_times.join();
	}
	chrome.runtime.sendMessage({ method:"time_spent_in_results",message:hover_time_array });


	if(ga_graph_hover_times.length==0){
		hover_time_array='graph_not_hovered';

	}
	else if(ga_graph_hover_times.length>0){
		hover_time_array=ga_graph_hover_times.join();
	}
	// chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array });
	// chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array,prod_id:prod_deets.product_id,page_url:window.location.href });
	chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array,prod_id:prod_deets.product_id+prod_deets.prod_site,page_url:window.location.href });

	// send_graph_times(hover_time_array);

};

prod_deets.prod_img = $.trim($(cssLocs.sd.prod_img).attr('src'));
// insertTag(false);


prod_deets.prod_site='sd';

// $('#'+whisperbox).css('visibility','visible');
// //trackMakkhiBoxDisplay(prod_deets.prod_site);

	var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});

	if(url_params['aff_id']!='2042'&&url_params['aff_id']!=undefined){
		set_affy('sd_search',true);
		set_affy('sd_price',true);
		get_affy_flags();
	}


// prod_deets.prod_categ = $.trim($(cssLocs.sd.category).text());
// prod_deets.prod_categ_alt = $.trim($(cssLocs.sd.category_alt).text());


// if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
// 	trackCateg('snapdeal', prod_deets.prod_categ, prod_deets.prod_categ_alt);
// }


var breadcrumb_list = $(".bread-crumb a");
var crumbs = ""
for(i=0; i<breadcrumb_list.length;i++){
	crumbs += $.trim($(breadcrumb_list[i]).text());
	crumbs += "_";
}
if(crumbs){
	crumbs = crumbs.slice(0,-1);
}
crumbs = crumbs?crumbs:"";

prod_deets.prod_categ_alt = crumbs;
if(crumbs){
	prod_deets.prod_categ = crumbs.split('_')[crumbs.split('_').length-1];
}



//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.sd.title).text());
prod_deets.prod_title_raw = $.trim($(cssLocs.sd.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.sd.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=$.trim($(cssLocs.sd.price).text());

if (chk_price=='') {
	prod_deets.prod_price = cleanPrice($(cssLocs.sd.price_alt).text());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}

prod_deets.ss = 0;
var oosData = $(cssLocs.sd.oos);
if(oosData.length > 0) {
	prod_deets.ss = 1;
}

var disc_prod=$(cssLocs.sd.disc_prod);
if (disc_prod.length>0) {
	prod_deets.ss = 2;
}

prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}


		
			book_details=get_book_details(prod_deets.prod_site)

				

			if((book_details.isbn_10!='') || (book_details.isbn_13 !='') ){

				if((book_details.isbn_13!='')){

					//prod_deets.prod_srch="isbn:"+book_details.isbn_10;
					prod_deets.prod_srch=book_details.isbn_13;
				}

				else{
					if(book_details.isbn_10 !=''){

						prod_deets.prod_srch=book_details.isbn_10;
				}


					}
				}
			
		
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}


prod_deets.prod_img = $.trim($(cssLocs.sd.prod_img).attr('src'));

insertPiddle(prod_deets);

console.log(prod_deets);
// $('body').on("click", cantHandleTruth); 
$('body').on("click",doc_click_handler);
// if (checkDeetsComplete()) {
// 	getGraph();
// 	checkUUID();
// 	send_sd_match(window.location.href);
// } else {
// 	checkCassy();
// }
// wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
insert_main_container();

} //   pidmatch

} // flipmatch



//saholic

if (window.location.hostname == 'www.saholic.com') {

may_sale_other_site_notifs();
var flipref=window.location.href;

if ($('#productDetail').length>0 && $('#resultFoundNo').length==0) {


// insertTag(false);

prod_deets.prod_site='sa';

// $('#'+whisperbox).css('visibility','visible');
// //trackMakkhiBoxDisplay(prod_deets.prod_site);

prod_deets.prod_categ = $.trim($(cssLocs.sa.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.sa.category_alt).text());

if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	trackCateg('saholic', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.sa.title).text());
prod_deets.prod_title_raw = $.trim($(cssLocs.sa.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.sa.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.sa.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}


insertPiddle(prod_deets);
// getGraph();
// checkUUID();
insert_main_container();

} //   pidmatch

} // saholic



//yebhi

if (window.location.hostname == 'www.yebhi.com') {

may_sale_other_site_notifs();
var flipref=window.location.href;

if ($('div.pdnamedescrpt').length>0) {


insertTag(false);


prod_deets.prod_site='ye';

$('#'+whisperbox).css('visibility','visible');
//trackMakkhiBoxDisplay(prod_deets.prod_site);

prod_deets.prod_categ = $.trim($(cssLocs.ye.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.ye.category_alt).text());

if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	trackCateg('yebhi', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.ye.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.ye.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.ye.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}

insertPiddle(prod_deets);
getGraph();
checkUUID();
wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
} //   pidmatch

} // yebhi



//myntra
// if (window.location.hostname == 'www.myntra.com') {

// 	insertTag(false);
// 	var myntrality_logo = chrome.extension.getURL('myntrality_logo.png');
// 	$('#welcomebox').css('visibility', 'hidden');
// 	if ($('.app_store').length !== 0) {
// 			$('#welcomebox').css('visibility', 'hidden');
// 			$('#'+whisperbox).css({'visibility':'visible','height':'250px'});
// 			$('#'+whisperboxcontent).css({'visibility':'visible'});
// 			//trackMakkhiBoxDisplay(prod_deets.prod_site);
// 			$('#'+whisperboxcontent)
// 			.html('<span style="font-size:14px; display: block; font-weight:bold; color: #4f4f4f; margin: 10px 0px 10px 0px !important;"> You can now  browse Myntra on your desktop using MakkhiChoose. Unlike the last time, this should not be an issue \:\) </span><a href="#" class="myntralityLink" style="display: block !important; margin: 30px 0 0 70px !important; text-decoration: none !important; font-size: 1.2em !important; color: #B40486 !important; font-weight: 500 !important;"><span class="toMyntrality">Take me to Myntra Mobile</span></a>');

// 			$('.myntralityLink').click(function(e) {
// 				e.preventDefault();
// 				requestWebReqPermission();
// 			});

// 			$('#'+ whisperbox + ' span.'+whisperboxtab).css({
// 					'background-image': alert_url_str, 'display': 'inline !important'});

// 			$('#'+whisperbox)
// 		            .animate({left:'0'},  300)
// 		            .addClass('open');
// 	}
// }


if (window.location.hostname == 'www.myntra.com'){
	may_sale_other_site_notifs();
	$("body").on("keydown",".desktop-searchBar",function(){
		if(event.which == 13) {
			// alert($(this).val());
			// console.log(($(this).val()));
			sendsearchIntent('my',$(this).val());
		}
		return true;
	});

	$("body").on("mouseup",".desktop-autoSuggest li.desktop-suggestion",function(){
			// alert($(this).text());
			console.log($(this).text());
			sendsearchIntent('my',$(this).text());
			return true;
	});

	$("body").on("click",".desktop-submit",function(){
			// alert($(".desktop-searchBar").val());
			console.log($(".desktop-searchBar").val());
			sendsearchIntent('my',$(".desktop-searchBar").val());
			return true;
	});



	//other page

	$("body").on("keydown","div.query input",function(){
		if(event.which == 13) {
			console.log($(this).val());
			sendsearchIntent('my',$(this).val());
		}
		return true;
	});
	// div.autosuggest
	$("body").on("mousedown",function(event){
			if($(event.target).hasClass('suggestion') && $(event.target).prop("tagName")=="LI"){
				console.log(event.target);
				console.log($(event.target).text());
				sendsearchIntent('my',$(event.target).text());
			}
			else{
				// console.log('no match');
				// console.log($(event.target).attr("class"));
				// console.log(event.target);
			}

	});

	$("body").on("click","div.query a.submit",function(){
		 	console.log($("div.query input").val());
			sendsearchIntent('my',$("div.query input").val());
	});

	$("body").on("click","button.pdp-add-to-bag.pdp-button",function(event){
			try{
				prod_deets.prod_title=$("h1.pdp-title").text();
			}
			catch(err){
				
			}
			console.log("Add to Bag clicked");
			sendcartevent('my','add to cart',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);

	});
	//end of sear

	if(window.location.pathname.match("buy")){
		// var bc =  $(".breadcrumbs-container .breadcrumbs-link");
		// var paths_len = window.location.pathname.split("/").length;
		// prod_deets.product_id = window.location.pathname.split("/")[paths_len-2];
		// prod_deets.prod_title = $("h1.pdp-title").text();
		// prod_deets.prod_price =  $(".pdp-price").text().replace(" ","").slice(3);
		// prod_deets.prod_fulltitle = prod_deets.prod_title;
		// prod_deets.prod_title_raw = prod_deets.prod_title;
		// prod_deets.prod_srch = prod_deets.prod_title;
		// prod_deets.prod_categ = $(bc[bc.length-1]).text();
		// prod_deets.prod_categ_alt = $(bc[bc.length-2]).text();
		// prod_deets.prod_site = "my";

		// insertTag(false);

		// checkUUID();
		// $('#'+whisperbox).css('visibility','visible');
		// wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);

		my_url_watcher();

	}

}


if (window.location.hostname == 'www.myntrality.com' || window.location.hostname == 'myntrality.com') {

	refreshAlertPrices();
	var flipref=window.location.href;

	if ($('h4.pdt-code').length>0 || $('#product-description').length>0) {


	// insertTag(false);


	prod_deets.prod_site='my';

	// $('#'+whisperbox).css('visibility','visible');
	// //trackMakkhiBoxDisplay(prod_deets.prod_site);
	prod_deets.prod_categ = $.trim($(cssLocs.my.category).text());
	prod_deets.prod_categ_alt = $.trim($(cssLocs.my.category_alt).text());

	if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
		trackCateg('myntra', prod_deets.prod_categ, prod_deets.prod_categ_alt);
	}

	//cssLocs in helperfuncs.js has the details stored
	prod_deets.prod_title = cleanTitle($(cssLocs.my.title).text());
	prod_deets.prod_title_raw = $.trim($(cssLocs.my.title).text());

	//store text in brackets separately; this makes search heard 
	prod_deets.prod_bracktitle = $.trim($(cssLocs.my.bracktitle).text());

	//if price not in this location, look in alternate
	var chk_price=textFind($(cssLocs.my.price).contents());

	if (chk_price=='') {
		prod_deets.prod_price = textFind($(cssLocs.my.price_alt).contents());
	}
	else {
		prod_deets.prod_price = cleanPrice(chk_price);
	}



	prod_deets.prod_srch = prod_deets.prod_title;

	if (isBook()) {
			//check if this is paperback or hardcover
			if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
				prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
			}
	}
	else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
				prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
			}

	prod_deets.prod_img = $.trim($(cssLocs.my.prod_img).attr('src'));
	insertPiddle(prod_deets);

	console.log(prod_deets);
	// getGraph();
	// checkUUID();
	insert_main_container();

	} //   pidmatch

	// var portal = 'my';
	// if (myntraCart(document.URL)) {
	// 	var req = getCouponList(portal);
	// 	var couponList = [];
	// 	insertTag(true);
	// 	req.done(function(response) {
	// 		var response = $.parseJSON(response);
	// 		//couponList = response['couponList'];
	// 		couponList=response;
	// 		console.log('couponlist is ');
	// 		console.log(couponList);
	// 		// fill in the couponbox here!
	// 		fillCoupons(couponList, portal);
	// 	});

	// 	$('#'+whisperbox).css('visibility','visible');
	// 	//trackMakkhiBoxDisplay(prod_deets.prod_site);
	// } // checkout page

} // myntra


//jabong
if (window.location.hostname == 'www.jabong.com') {
may_sale_other_site_notifs();
$("body").on("keydown",".top-search-wrapper input[type='text']",function(){
		if(event.which == 13) {
			// alert($(this).val());
			sendsearchIntent('ja',$(this).val());

		}
		return true;
});

$("body").on("click",".top-search-wrapper #results li a",function(){
	
		// alert($(this).text());
		sendsearchIntent('ja',$(this).text());
		return true;
});

$("body").on("click",".search-containter", function(){
		// alert($(".top-search-wrapper input[type='text']").val());
		sendsearchIntent('ja',$(".top-search-wrapper input[type='text']").val());
		return true;
});

$("body").on("click","button.add-to-cart",function(){
		// alert("Clicked Add to cart");
		sendcartevent('ja','add to cart',prod_deets.product_id,window.location.href,prod_deets.prod_title_raw);
});

//end of sear
refreshAlertPrices();
var flipref=window.location.href;

/*
//old code for detecting product page
if ($('div.product-detail-sec').length>0 || $('#productDetailNew').length>0) {


insertTag(false);

prod_deets.prod_site='ja';


$('#'+whisperbox).css('visibility','visible');

prod_deets.prod_categ = $.trim($(cssLocs.ja.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.ja.category_alt).text());

if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	trackCateg('jabong', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle(textFindAll($(cssLocs.ja.title).contents())) + ' ' + $.trim($(cssLocs.ja.bracktitle).text());
prod_deets.prod_title_raw = $.trim(textFindAll($(cssLocs.ja.title).contents())) + ' ' + $.trim($(cssLocs.ja.bracktitle).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.ja.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.ja.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.ja.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}

prod_deets.prod_img = $.trim($(cssLocs.ja.prod_img).attr('src'));
insertPiddle(prod_deets);

console.log(prod_deets);
getGraph();
checkUUID();

} //   pidmatch
*/

//detecting product page
if($("div#productInfo ul.prod-main-wrapper").length>0){	
	prod_deets.prod_img=$(cssLocs.ja.prod_img).attr('src');
	// insertTag(false);
	prod_deets.prod_site='ja';
	// $('#'+whisperbox).css('visibility','visible');
	// //trackMakkhiBoxDisplay(prod_deets.prod_site);

	// prod_deets.prod_categ=$.trim($(cssLocs.ja.category).text());

	// prod_deets.prod_categ_alt=$.trim($(cssLocs.ja.category_alt).text());

	// if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	// 	trackCateg('jabong', prod_deets.prod_categ, prod_deets.prod_categ_alt);
	// }
	var breadcrumb_list = $(".breadcrumb a");
	var crumbs = ""
	for(i=0; i<breadcrumb_list.length;i++){
		crumbs += $.trim($(breadcrumb_list[i]).text());
		crumbs += "_";
	}
	if(crumbs){
		crumbs = crumbs.slice(0,-1);
	}
	crumbs = crumbs?crumbs:"";

	prod_deets.prod_categ_alt = crumbs;
	if(crumbs){
		prod_deets.prod_categ = crumbs.split('_')[crumbs.split('_').length-1];
	}

	title=$(cssLocs.ja.title_brand).text()+" "+$(cssLocs.ja.title_product).text();

	prod_deets.prod_title = cleanTitle(title);
	prod_deets.prod_title_raw = $.trim(title);

	var chk_price=$(cssLocs.ja.price).text();

	if (chk_price=='') {
		//do something
	}
	else {
		prod_deets.prod_price = cleanPrice(chk_price);
	}
	prod_deets.prod_srch = prod_deets.prod_title;

	if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
	}
	else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}

	// prod_deets.prod_img=$(cssLocs.ja.prod_img).attr('src');
	prod_deets.prod_img=$(".product-carousel img.first").attr('src')
	console.log(prod_deets.prod_img);


	insertPiddle(prod_deets);

	//sending sku instead of product id
	prod_deets.product_id=$.trim($("span:contains('SKU')").siblings().text());

	console.log(prod_deets);
	insert_main_container();

	// getGraph();
	// checkUUID();

// wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);


//to fix some css
// $('#'+pralurrt).css({
// 		'padding':'7px 7px 7px 10px',
// 		'border-bottom': '1px solid #CCC',
// 	});



}//product page

	// var portal = 'ja';
	// if (jabongCart(document.URL)) {
	// 	var req = getCouponList(portal);
	// 	var couponList = [];
	// 	insertTag(true);
	// 	req.done(function(response) {
	// 		var response = $.parseJSON(response);
	// 		//couponList = response['couponList'];
	// 		couponList=response;
	// 		console.log('couponlist is ');
	// 		console.log(couponList);
	// 		// fill in the couponbox here!
	// 		fillCoupons(couponList, portal);
	// 	});

	// 	$('#'+whisperbox).css('visibility','visible');
	// 	////trackMakkhiBoxDisplay(prod_deets.prod_site);
	// } // checkout page
} // jabong



//shopclues
if (window.location.hostname == 'www.shopclues.com') {
	may_sale_other_site_notifs();
var flipref=window.location.href;


if ($(cssLocs.sc.title).length>0) {


// insertTag(false);


prod_deets.prod_site='sc';

$('#'+whisperbox).css('visibility','visible');
////trackMakkhiBoxDisplay(prod_deets.prod_site);


prod_deets.prod_categ = $.trim($(cssLocs.sc.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.sc.category_alt).text());

if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	trackCateg('shopclues', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle(textFindAll($(cssLocs.sc.title).contents()));
prod_deets.prod_title_raw = $.trim(textFindAll($(cssLocs.sc.title).contents()));

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.sc.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.sc.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.sc.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}

prod_deets.prod_img = $.trim($(cssLocs.sc.prod_img).attr('src'));
insertPiddle(prod_deets);
console.log(prod_deets);

//checkDeetsComplete();
getGraph();
checkUUID();
wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
} //   pidmatch
	var portal = 'sc';
	if (shopcluesCart(document.URL)) {
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag(true);
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });


		// $('#'+whisperbox).css('visibility','visible');
		////trackMakkhiBoxDisplay(prod_deets.prod_site);
	} // checkout page

} // shopclues




//firstcry
if (window.location.hostname == 'www.firstcry.com') {
may_sale_other_site_notifs();
var flipref=window.location.href;

if ($(cssLocs.fc.title).length>0) {


// insertTag(false);


prod_deets.prod_site='fc';

// $('#'+whisperbox).css('visibility','visible');
// //trackMakkhiBoxDisplay(prod_deets.prod_site);

prod_deets.prod_categ = $.trim($(cssLocs.fc.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.fc.category_alt).text());

if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	trackCateg('firstcry', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle(textFindAll($(cssLocs.fc.title).contents()));
prod_deets.prod_title_raw = cleanTitle(textFindAll($(cssLocs.fc.title).contents()));

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.fc.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.fc.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.fc.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

prod_deets.prod_img = $.trim($(cssLocs.fc.prod_img).attr('content'));
prod_deets.prod_thmb = $.trim($(cssLocs.fc.prod_thmb).attr('src'));

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}

insertPiddle(prod_deets);

console.log(prod_deets);
// getGraph();
// checkUUID();
// wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
insert_main_container();
} //   pidmatch
console.log('in firstcry');
// if (firstCryCart(document.URL)) {
// 	console.log('in firstcry cart');
// 	var portal = 'fc';
// 	var req = getCouponList(portal);
// 	var couponList = [];
// 	insertTag(true);
// 	req.done(function(response) {
// 		var response = $.parseJSON(response);
// 		//couponList = response['couponList'];
// 		couponList=response;
// 		console.log('couponlist is ');
// 		console.log(couponList);
// 		// fill in the couponbox here!
// 		fillCoupons(couponList, portal);
// 	});
// 	$('#'+whisperbox).css('visibility','visible');
// 	//trackMakkhiBoxDisplay(prod_deets.prod_site);
// }	

} // firstcry



//babyoye
if (window.location.hostname == 'www.babyoye.com') {
may_sale_other_site_notifs();
var flipref=window.location.href;

if ($(cssLocs.bo.title).length>0) {


insertTag(false);


prod_deets.prod_site='bo';

$('#'+whisperbox).css('visibility','visible');
////trackMakkhiBoxDisplay(prod_deets.prod_site);


prod_deets.prod_categ = $.trim($(cssLocs.bo.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.bo.category_alt).text());


if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	trackCateg('babyoye', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}
//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle(textFindAll($(cssLocs.bo.title).contents()));
prod_deets.prod_title_raw = cleanTitle(textFindAll($(cssLocs.bo.title).contents()));

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.bo.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.bo.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.bo.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}


insertPiddle(prod_deets);
getGraph();
checkUUID();
wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
} //   pidmatch

	if (babyOyeCart(document.URL)) {
		// var portal = 'bo';
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag(true);
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });
		// $('span.discount_tab_code_text').click();

		// $('#'+whisperbox).css('visibility','visible');	
		////trackMakkhiBoxDisplay(prod_deets.prod_site);
	} // cart review page

} // babyoye

if(window.location.href.match("www.voonik.com/")){
	may_sale_other_site_notifs();
	console.log("page loaded");
	prod_deets.prod_site = "vo";

	// $("body").on("keydown","#form1 #global_search_box",function(){
	// 	if(event.which == 13) {
	// 		// alert($(this).val());
	// 		alert(($(this).val()));
	// 		console.log('key down');
	// 		// sendsearchIntent('my',$(this).val());
	// 	}
	// 	return true;
	// });


	$("body").on("click","#form1 input[type='submit'][name='commit']",function(){
			// alert($(this).val());
		// alert(($("#form1 #global_search_box" ).val()));
		sendsearchIntent('vo',$("#form1 #global_search_box" ).val());
		console.log("click search button");
		return true;
	});



	$("body").on("click","ul.ui-autocomplete li a" ,function(){
			// alert($(this).val());
		// alert(($(this).text()));
		sendsearchIntent('vo',$(this).text());
		console.log("click suggestion");
		return true;
	});

	$("body").on("click",".main_prod_text #buy_btn",function(){
		// alert("buy button clicked prod_title is"+$(".main_prod_text p:eq(0)").text());
		sendcartevent('vo','buy now',prod_deets.product_id,window.location.href,$(".main_prod_text p:eq(0)").text());
	});

	$("body").on("click",".product_column_listing .btn_wrap #buy_btn",function(){
			var vk_title = $(this).attr('sourceprodid').split('?')[0].replace(/-/g,' ');
			sendcartevent('vo','buy now',prod_deets.product_id,window.location.href,vk_title);
	});

	// if($("#background_div .infoRow .infoTitle p:eq(0)").text() == "Product Details"){
	// 	//voonik product page
	// 	console.log("voonik product page");
	// 	try{

	// 		var crumb_list = [];
	// 		var crumbs = $("div.breadcumbs a");
	// 		for(var i =0; i< crumbs.length; i++){
	// 			crumb_list.push($(crumbs[i]).text());
	// 		}
	// 		prod_deets.prod_categ = crumb_list[crumb_list.length-1];
	// 		prod_deets.prod_categ_alt = crumb_list.join("_");
	// 	}
	// 	catch (err){
	// 		console.log("categ error");
	// 	}


	// 	prod_deets.product_id = $(".main_prod_text #buy_btn").attr('data-item-id');
	// 	prod_deets.prod_title = $(".main_prod_text h1").text();
	// 	prod_deets.prod_srch = $(".main_prod_text h1").text();
	// 	prod_deets.prod_title_raw = $(".main_prod_text h1").text();
	// 	prod_deets.prod_site = "vo";
	// 	prod_deets.prod_img = "https:"+JSON.parse($(".main_prod_text #buy_btn").attr("data-no-of-pictures"))[0]["original"];
	// 	prod_deets.prod_link = window.location.href;

	// 	try{
	// 		price = parseInt($(".priceRow.prod_details .prod_details span p").text().replace("Rs.",""));

	// 		if(isNaN(price)){
	// 			price = parseInt($(".main_prod_text #buy_btn").attr("data-price").replace("Rs.",""));	
	// 		}
	// 	}
	// 	catch(err){

	// 	}
	// 	prod_deets.prod_price = price;

	// 	update_data_for_spa();
	// }
	// else{
	// 	console.log("not a voonik prduct page");
	// }

	function voonik_react_page_task(){

		var old_url = window.location.href;

		function voonik_url_change_checker(){
			// console.log("in vo url checker");

			if(old_url != window.location.href){
				//url change detected
				$("#mc_host").remove();

				if(window.location.href.match('/recommendations/') || $(".product-details-page:eq(1)").length>0){
					//product page
					console.log("vo pp detected");
					voonik_product_page_task();
				}
				else{
					//not a product page
					console.log("vo not pp detected");
					$("#mc_host").remove();
				}
			}
			else{
				// no change in url
				
			}

			old_url = window.location.href;
			setTimeout(voonik_url_change_checker,1000);

		}

		var page_load_checker = "";

		function voonik_product_page_task(){

			if(page_load_checker!=""){
				window.clearTimeout(page_load_checker);
			}

			function product_page_load_checker(){

				if($(".loadingBreadcrumb").length>0){
					console.log("page is being loaded");
					page_load_checker = setTimeout(product_page_load_checker, 1000);
					return;
				}
				else{

					if(page_load_checker!=""){
						window.clearTimeout(page_load_checker);
					}	

					var crumb_list = [];
					var crumbs = $("ol.breadcrumb a");
					for(var i =0; i< crumbs.length; i++){
						crumb_list.push($(crumbs[i]).text());
					}

					prod_deets.prod_categ = crumb_list[crumb_list.length-1];
					prod_deets.prod_categ_alt = crumb_list.join("_");

					prod_deets.product_id = $(".product-details li div:contains('SKU')+div").text();
					prod_deets.prod_title = $(".product-details h1").text();
					prod_deets.prod_srch = $(".product-details h1").text();
					prod_deets.prod_title_raw = $(".product-details h1").text();
					prod_deets.prod_site = "vo";
					prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
					if(!prod_deets.prod_img.startsWith('http:')){
						prod_deets.prod_img = 'http:' + prod_deets.prod_img;
					}
					prod_deets.prod_price = parseInt($(".product-details h2 span").text().replace("Rs.",""))
					prod_deets.prod_link = window.location.href;

					update_data_for_spa();

				}

			}

			product_page_load_checker();

		}

		if(window.location.href.match('/recommendations/') || $(".product-details-page:eq(1)").length>0){
			//product page
			voonik_product_page_task();
			voonik_url_change_checker();
		}
		else{
			voonik_url_change_checker();	
		}




	}

	voonik_react_page_task()

}



if(window.location.href.match("www.fabindia.com")){
	prod_deets.prod_site = 'fi';
	may_sale_other_site_notifs();
	if(window.location.href.match('/products/')){
		//product page
		var fi_url_params = window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});

		var crumb_list = [];
		var crumbs = $("div.breadcrumlnk span a");
		for(var i =0; i< crumbs.length; i++){
			crumb_list.push($.trim($(crumbs[i]).text()));
		}

		prod_deets.prod_categ = crumb_list[crumb_list.length-1];
		prod_deets.prod_categ_alt = crumb_list.join("_");

		prod_deets.product_id = $(".productdetail_container").attr('data-pid');
		prod_deets.prod_title = $(".productdetailbucket h1").text();
		prod_deets.prod_srch = $(".productdetailbucket h1").text()
		prod_deets.prod_title_raw = $(".productdetailbucket h1").text()
		prod_deets.prod_site = "fi";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price = parseInt($(".productdetailbucket span[itemprop='price'] span.sp_amt").text().replace(',',''));
		prod_deets.prod_link = window.location.href;
		update_data_for_spa();

	}
}

if(window.location.href.match("www.chumbak.com")){
	may_sale_other_site_notifs();
	function ch_is_page_loading(){
		if($('.ui-view-container.products-loading-div').length>1){
			//page is loading
			return true;

		}
		else{
			return false;
		}
	}

	var ch_page_task_timer = "" 
	function ch_page_task(){


		if(ch_page_task_timer){
			console.log('clearing ch page task timer');
			window.clearTimeout(ch_page_task_timer);
		}

		console.log('in ch_page_task');
		if(ch_is_page_loading()){
			ch_page_task_timer = setTimeout(ch_page_task,1000);
			return;
		}
		else{
			console.log('page loaded');
			if($(".buy-now-btn") && $(".link-guide-wrap")){
				console.log('prod page detected');
				$("#mc_host").remove();
				//extract content
				//insert results
				ch_get_page_deets();				
			}
			else{
				// do nothing
				$("#mc_host").remove();
				console.log('normal page');
			}

		}
	}


		var ch_old_url = window.location.href;
		var ch_url_check_timer = '';

		function ch_url_change_checker(){
			// console.log("in url change checker");

			if(ch_url_check_timer){
				// console.log('clearing ch_url_check_timer');
				window.clearTimeout(ch_url_check_timer);
			}


			if(ch_old_url != window.location.href){
				//url change detected
				$("#mc_host").remove();
				// console.log('calling ch_page_task');
	
				if(ch_page_task_timer){
					// console.log('clearing ch page task timer');
					window.clearTimeout(ch_page_task_timer);
				}

				ch_page_task();
			}
			else{
				// no change in url
				
			}

			ch_old_url = window.location.href;
			ch_url_check_timer = setTimeout(ch_url_change_checker,1000);

		}

		function ch_get_page_deets(){

			// var ch_url = "https://api-cdn.chumbak.com//web-api"+window.location.pathname+'?device=desktop';
			var ch_url = "https://api-cdn.chumbak.com/v1"+window.location.pathname+'?device=desktop';
			var ch_req= {
			    "type":"GET",
			    "url":ch_url
		    };
		   var dyn_req = backPostGet(ch_req);

		   dyn_req.done(function(res){

				prod_deets.product_id = res.product.entity_id;
				prod_deets.prod_title = res.product.name;
				prod_deets.prod_srch = res.product.name;
				prod_deets.prod_title_raw = res.product.name;
				prod_deets.prod_site = "ch";
				prod_deets.prod_img = "https://media.chumbak.com/media/catalog/product/"+res.product.meta_info.meta_image;
				prod_deets.prod_price = parseInt(res.product.price);
				prod_deets.prod_link = window.location.href;

	            var breadcrumb_list = res.breadcrumbs;
	            var crumbs = ""
	            for(i=0; i<breadcrumb_list.length;i++){
	                crumbs += breadcrumb_list[i].name;
	                crumbs += "_";
	            }
	            if(crumbs){
	                crumbs = crumbs.slice(0,-1);
	            }
	            crumbs = crumbs?crumbs:"";

	            prod_deets.prod_categ_alt = crumbs;
	            prod_deets.prod_categ = "";
	            if(crumbs){
	                prod_deets.prod_categ = crumbs.split('_')[crumbs.split('_').length-1];
	            }
			

				update_data_for_spa();


		   });	

		}

		ch_page_task();
		ch_url_change_checker();
}


if(window.location.href.match('www.ajio.com')){
	may_sale_other_site_notifs();
	prod_deets.prod_site = 'aj';
	if(window.location.href.match('/p/')){
		//prod page
		prod_deets.product_id = window.location.href.split('/p/')[1];
		prod_deets.prod_title = $.trim($(".fnl-pdp-subtitle").text());
		prod_deets.prod_srch = $.trim($(".fnl-pdp-subtitle").text());
		prod_deets.prod_title_raw = $.trim($(".fnl-pdp-subtitle").text());
		prod_deets.prod_site = "aj";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price = parseInt($.trim($("#finprc-amt").text().replace('Rs.','').replace(',','')));
		prod_deets.prod_link = window.location.href;


		var crumb_list = [];
		var crumbs = $(".fnl-plp-searchcat ol li a span");
		for(var i =0; i< crumbs.length; i++){
			crumb_list.push($.trim($(crumbs[i]).text()));
		}

		prod_deets.prod_categ = crumb_list[crumb_list.length-2];
		prod_deets.prod_categ_alt = crumb_list.join("_");


		if(!prod_deets.prod_categ){
			prod_deets.prod_categ ="";
		}


		if(!prod_deets.prod_categ_alt){
			prod_deets.prod_categ_alt ="";
		}

		update_data_for_spa();

	}
}

if(window.location.href.match('www.abof.com')){
	may_sale_other_site_notifs();
	prod_deets.prod_site = 'ab'
	if(window.location.href.match('/product/')){

		if($('a[data-sku]').attr('data-sku')){
			prod_deets.product_id = $('a[data-sku]').attr('data-sku');
		}else{
			prod_deets.product_id = $("meta[name='pageId']").attr('content');
		}

		prod_deets.prod_title = $.trim($(".product-detail__title").text());
		prod_deets.prod_srch = $.trim($(".product-detail__title").text());
		prod_deets.prod_title_raw =$.trim($(".product-detail__title").text());
		prod_deets.prod_site = "ab";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price =parseInt($(".pdp-product-details div[itemprop='price']").attr('content'));
		prod_deets.prod_link = window.location.href;

		var crumb_list = [];
		var crumbs = $(".breadcrumbs__list li a");
		for(var i =0; i< crumbs.length; i++){
			crumb_list.push($.trim($(crumbs[i]).text()));
		}

		prod_deets.prod_categ = crumb_list[crumb_list.length-1];
		prod_deets.prod_categ_alt = crumb_list.join("_");
		
		if(!prod_deets.prod_categ){
			prod_deets.prod_categ = "";
		}

		if(!prod_deets.prod_categ_alt){
			prod_deets.prod_categ_alt="";
		}

		update_data_for_spa();
	}
}

if(window.location.href.match('www.chemistryindia.com')){
	prod_deets.prod_site = 'cy';
	may_sale_other_site_notifs();
	if(window.location.href.match('/product/')){

		prod_deets.product_id = $("#productColorID").attr('value');
	
		prod_deets.prod_title = $.trim($(".product-details h1").text());
		prod_deets.prod_srch = $.trim($(".product-details h1").text());
		prod_deets.prod_title_raw =$.trim($(".product-details h1").text())
		prod_deets.prod_site = "cy";
		prod_deets.prod_img = $(".large-image img").attr("src");
		prod_deets.prod_price =parseInt($('.price-details span.new-price').text().replace('RS.',''));
		prod_deets.prod_link = window.location.href;

		update_data_for_spa();
	}

}

if(window.location.href.match('www.cilory.com')){
	prod_deets.prod_site = 'ci';
	may_sale_other_site_notifs();
	if($('#more_info_block').length>0){

		prod_deets.product_id = $("#product_page_product_id").attr('value');

		prod_deets.prod_title = $('.product_title h1').text();
		prod_deets.prod_srch = $('.product_title h1').text();
		prod_deets.prod_title_raw =$('.product_title h1').text();
		prod_deets.prod_site = "ci";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price =$('#our_price_display').clone().children().remove().end().text()
		prod_deets.prod_link = window.location.href;

		var crumb_list = [];
		var crumbs = $(".breadcrumb a");
		for(var i =0; i< crumbs.length; i++){
			crumb_list.push($.trim($(crumbs[i]).text()));
		}

		prod_deets.prod_categ = crumb_list[crumb_list.length-1];
		prod_deets.prod_categ_alt = crumb_list.join("_");

		update_data_for_spa();


	}

}

if(window.location.href.match('www.itokri.com')){
	prod_deets.prod_site == 'it';
	may_sale_other_site_notifs();
	if(window.location.href.match('/products/')){

		prod_deets.product_id = $(".product-form.section form").attr('data-product-id');

		prod_deets.prod_title = $.trim($(".detail .title").text());
		prod_deets.prod_srch = $.trim($(".detail .title").text());
		prod_deets.prod_title_raw =$.trim($(".detail .title").text());
		prod_deets.prod_site = "it";
		prod_deets.prod_img = "http:"+$(".flex-active-slide img").attr('src');
		prod_deets.prod_price = parseInt($('h2.price').clone().children().remove().end().text().replace(',',''))
		prod_deets.prod_link = window.location.href;

		update_data_for_spa();


	}
}

if(window.location.href.match('www.jaypore.com')){
	prod_deets.prod_site  = 'jp';
	may_sale_other_site_notifs();
	if($(".moreDetails").length>0){
		//product page
		// prod_deets.product_id = window.location.pathname.split('-p')[1];
		var pid_part = window.location.pathname.match(/-p\d+/g);
		if(pid_part && pid_part.length>0){
			prod_deets.product_id = pid_part[0].replace('-p','');
		}
		prod_deets.prod_title = $('.productName').text();
		prod_deets.prod_srch = $('.productName').text();
		prod_deets.prod_title_raw =$('.productName').text();
		prod_deets.prod_site = "jp";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price = parseInt($("#dPrice").text());
		prod_deets.prod_link = window.location.href;

		update_data_for_spa();


	}

}


if(window.location.href.match('kilol.com')){

	prod_deets.prod_site  = 'ki';
	may_sale_other_site_notifs();
	if($(".quicktab-product")){
		//product page
		
		if($("[name='product-nid']").attr('value')){
			prod_deets.product_id = $("[name='product-nid']").attr('value');
		}else{
			prod_deets.product_id = $('link[rel=shortlink]').attr('href').split('node/')[1];
		}

		


		prod_deets.prod_title = $.trim($('.product-title').text());
		prod_deets.prod_srch = $.trim($('.product-title').text());
		prod_deets.prod_title_raw =$.trim($('.product-title').text());
		prod_deets.prod_site = "ki";
		prod_deets.prod_img = $(".cloud-zoom-container img:eq(0)").attr('src');
		prod_deets.prod_price = parseInt($(".price-amount").clone().children().remove().end().text());
		prod_deets.prod_link = window.location.href;

		update_data_for_spa();
	}
}


if(window.location.href.match('www.koovs.com')){
	prod_deets.prod_site  = 'kv';
	may_sale_other_site_notifs();
	if($(".pdtdescpinfo").length>0){

		prod_deets.product_id = $("meta[itemprop='sku']").attr('content');

		prod_deets.prod_title = $.trim($(".product-name").text());
		prod_deets.prod_srch = $.trim($(".product-name").text());
		prod_deets.prod_title_raw =$.trim($(".product-name").text());
		prod_deets.prod_site = "kv";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price = parseInt($("span[itemprop='price']").text().replace(',',''));
		prod_deets.prod_link = window.location.href;

		var breadcrumb_list = $("#breadcrumb a");
		var crumbs = ""
		for(i=0; i<breadcrumb_list.length;i++){
			crumbs += $.trim($(breadcrumb_list[i]).text());
			crumbs += "_";
		}
		if(crumbs){
			crumbs = crumbs.slice(0,-1);
		}
		crumbs = crumbs?crumbs:"";

		prod_deets.prod_categ_alt = crumbs;
		if(crumbs){
			prod_deets.prod_categ = crumbs.split('_')[crumbs.split('_').length-1];
		}


		update_data_for_spa();


	}
}


if(window.location.href.match('www.mirraw.com')){
	prod_deets.prod_site  = 'mi';
	may_sale_other_site_notifs();
	if($("div#specs").length>0){

		prod_deets.product_id = $("span[itemprop='productID']").attr('content');

		prod_deets.prod_title =$(".design_title").text();
		prod_deets.prod_srch = $(".design_title").text();
		prod_deets.prod_title_raw =$(".design_title").text();
		prod_deets.prod_site = "mi";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price = parseInt($(".discount_old_price h3").text().replace('Rs',''));
		prod_deets.prod_link = window.location.href;

		update_data_for_spa();


	}
}

if(window.location.href.match('www.biba.in')){
	prod_deets.prod_site  = 'bi';
	may_sale_other_site_notifs();
	if(window.location.href.match('/p/')){

		prod_deets.product_id = $('.productdetail_container').attr('data-pid');

		prod_deets.prod_title =$('.productdetail_container h1').text();
		prod_deets.prod_srch = $('.productdetail_container h1').text();
		prod_deets.prod_title_raw =$('.productdetail_container h1').text();
		prod_deets.prod_site = "bi";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price = parseInt($("span[itemprop='price'] span.sp_amt").text());
		prod_deets.prod_link = window.location.href;

		update_data_for_spa();


	}
}

if(window.location.href.match('www.faballey.com')){
	may_sale_other_site_notifs();
	prod_deets.prod_site  = 'fl';
	// if($('.proDetailsSec').length>0)
	if($(".prodgopage").length>0){
		//product page
		prod_deets.product_id = $("ul[data-pid]").attr('data-pid');

		prod_deets.prod_title =$.trim($('.proDetailsSec h1').text());
		prod_deets.prod_srch = $.trim($('.proDetailsSec h1').text());
		prod_deets.prod_title_raw =$.trim($('.proDetailsSec h1').text());
		prod_deets.prod_site = "fl";
		prod_deets.prod_img = $(".ProductPopupbox img").attr('src');
		prod_deets.prod_price = parseInt($.trim($('.proDetailsSec h3 span').text()));
		prod_deets.prod_link = window.location.href;

		var breadcrumb_list = $(".homeTop a");
		var crumbs = ""
		for(i=0; i<breadcrumb_list.length;i++){
			crumbs += $.trim($(breadcrumb_list[i]).text());
			crumbs += "_";
		}
		if(crumbs){
			crumbs = crumbs.slice(0,-1);
		}
		crumbs = crumbs?crumbs:"";

		prod_deets.prod_categ_alt = crumbs;
		if(crumbs){
			prod_deets.prod_categ = crumbs.split('_')[crumbs.split('_').length-1];
		}
		update_data_for_spa();
	}	
}

if(window.location.href.match('raymondnext.com')){
	may_sale_other_site_notifs();
	prod_deets.prod_site  = 'rn';
	if(window.location.href.match('/products/')){
		//product page
		prod_deets.product_id = $("[data-product]").attr('data-product');

		prod_deets.prod_title =$.trim($(".product-title h2").text());
		prod_deets.prod_srch = $.trim($(".product-title h2").text());
		prod_deets.prod_title_raw =$.trim($(".product-title h2").text());
		prod_deets.prod_site = "rn";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price = parseInt($("[itemprop='price']").text().replace('Rs.','').replace(',',''))
		prod_deets.prod_link = window.location.href;

		var crumb_list = [];
		var crumbs = $(".breadcrumb a");
		for(var i =0; i< crumbs.length; i++){
			crumb_list.push($.trim($(crumbs[i]).text()));
		}

		prod_deets.prod_categ = crumb_list[crumb_list.length-1];
		prod_deets.prod_categ_alt = crumb_list.join("_");

		update_data_for_spa();


	}	
}

if(window.location.href.match('www.shimply.com')){
	may_sale_other_site_notifs();
	prod_deets.prod_site  = 'sh';
	if($(".product_detail").length>0){
		//product page
		prod_deets.product_id = $("#product_id").attr('value');

		prod_deets.prod_title =$('.product_detail .heading span').text();
		prod_deets.prod_srch = $('.product_detail .heading span').text();
		prod_deets.prod_title_raw =$('.product_detail .heading span').text();
		prod_deets.prod_site = "sh";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price = parseInt($("[itemprop='price']").attr('content'));
		prod_deets.prod_link = window.location.href;

		var crumb_list = [];
		var crumbs = $(".breadcrumb a span");
		for(var i =0; i< crumbs.length; i++){
			crumb_list.push($.trim($(crumbs[i]).text()));
		}

		prod_deets.prod_categ = crumb_list[crumb_list.length-1];
		prod_deets.prod_categ_alt = crumb_list.join("_");

		update_data_for_spa();


	}	
}

if(window.location.href.match('www.veromoda.in')){
	may_sale_other_site_notifs();
	prod_deets.prod_site  = 'vm';
	if($(".product-view").length>0){
		//product page
		prod_deets.product_id = $("[name='product']").attr('value');

		prod_deets.prod_title =$('.product-shop .product-name h1:eq(0)').text();
		prod_deets.prod_srch = $('.product-shop .product-name h1:eq(0)').text();
		prod_deets.prod_title_raw = $('.product-shop .product-name h1:eq(0)').text();
		prod_deets.prod_site = "vm";
		prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_price =parseInt($.trim($(".price-box .price[id^='product-price']").text().replace('Rs.','').replace(',','')));
		prod_deets.prod_link = window.location.href;

		var crumb_list = [];
		var crumbs = $(".breadcrumbs li a");
		for(var i =0; i< crumbs.length; i++){
			crumb_list.push($.trim($(crumbs[i]).text()));
		}

		prod_deets.prod_categ = crumb_list[crumb_list.length-1];
		prod_deets.prod_categ_alt = crumb_list.join("_");

		update_data_for_spa();


	}	
}


if(window.location.href.match('www.stalkbuylove.com')){
	may_sale_other_site_notifs();
	prod_deets.prod_site  = 'sb';
	if($(".product-view").length>0){
		//product page
		prod_deets.product_id = $("[name='product']").attr('value');

		prod_deets.prod_title =$('.product-shop .product-name h1:eq(0)').text();
		prod_deets.prod_srch = $('.product-shop .product-name h1:eq(0)').text();
		prod_deets.prod_title_raw = $('.product-shop .product-name h1:eq(0)').text();
		prod_deets.prod_site = "sb";
		// prod_deets.prod_img = $('meta[property="og:image"]').attr('content');
		prod_deets.prod_img = $(".product-view #cro_pdp_v1_desc_container img").attr('src');
		prod_deets.prod_price = parseInt($("[data-price]").attr('data-price'));
		prod_deets.prod_link = window.location.href;

		var crumb_list = [];
		var crumbs = $(".breadcrumbs li a");
		for(var i =0; i< crumbs.length; i++){
			crumb_list.push($.trim($(crumbs[i]).text()));
		}

		prod_deets.prod_categ = crumb_list[crumb_list.length-2];
		prod_deets.prod_categ_alt = crumb_list.join("_");

		update_data_for_spa();


	}	
}


if(window.location.href.match('www.styletag.com')){
	may_sale_other_site_notifs();
	prod_deets.prod_site  = 'st';

	var st_page_load_check_timer = '';

	function style_tag_page_task(){
		if($('.product-info').length>0){
			//product page
			prod_deets.product_id = $("#product_id").attr('value');

			prod_deets.prod_title =$('.product-info .sale-heading').text();
			prod_deets.prod_srch = $('.product-info .sale-heading').text();
			prod_deets.prod_title_raw = $('.product-info .sale-heading').text();
			prod_deets.prod_site = "st";
			prod_deets.prod_img = $(".sale-main-image img").attr('src');
			prod_deets.prod_price = parseInt($('.product-info #product-price span.col-orange').text().replace('Rs.',''));
			prod_deets.prod_link = window.location.href;

			var crumb_list = [];
			var crumbs = $("breadcrumbs-custom a");
			for(var i =0; i< crumbs.length; i++){
				crumb_list.push($.trim($(crumbs[i]).text().replace('/','')));
			}

			prod_deets.prod_categ = crumb_list[crumb_list.length-1];
			prod_deets.prod_categ_alt = crumb_list.join("_");

			update_data_for_spa();


		}	
	}


	function style_tag_page_load_checker(){
		if($('.loading-spiner-holder').css('display')!="none"){
			//page still loading
			if(st_page_load_check_timer){
				window.clearTimeout(st_page_load_check_timer);
			}
			st_page_load_check_timer = setTimeout(style_tag_page_load_checker,1000)
		}
		else{
			if(st_page_load_check_timer){
				window.clearTimeout(st_page_load_check_timer);
			}
			style_tag_page_task();
		}
	}

	style_tag_page_load_checker();

}

if(window.location.href.match('www.bewakoof.com')){
	may_sale_other_site_notifs();
	prod_deets.prod_site = "bw";
	var bw_load_check_timer = "";

var bw_url_check_timer = "";

var bw_old_url = window.location.href;

function bw_load_checker(){

	if(bw_load_check_timer){
		window.clearTimeout(bw_load_check_timer);
	}

	if($(".busy").css("display")!="none"){
		//page still loading
		bw_load_check_timer=setTimeout(bw_load_checker,1000);
		return;
	}else{
		bw_page_task();
	}
}

function bw_page_task(){

	if(window.location.href.match('/p/')){
		//product page
		console.log('product page');
		prod_deets.product_id = $("#pid").attr('value');

		prod_deets.prod_title = $(".prodboard h1").text();
		prod_deets.prod_srch = $(".prodboard h1").text();
		prod_deets.prod_title_raw = $(".prodboard h1").text();
		prod_deets.prod_site = "bw";
		prod_deets.prod_img = $(".slick-active.slick-current img:eq(0)").attr('src');
		prod_deets.prod_price = parseInt($(".priceOffers .price").text());
		prod_deets.prod_link = window.location.href;

		var crumb_list = [];
		var crumbs = $(".breadcrumb li a");
		for(var i =0; i< crumbs.length; i++){
			crumb_list.push($.trim($(crumbs[i]).text().replace('/','')));
		}

		prod_deets.prod_categ = crumb_list[crumb_list.length-1];
		prod_deets.prod_categ_alt = crumb_list.join("_");

		update_data_for_spa()

	}else{

	}
}

function bw_url_change_checker(){


	if(bw_url_check_timer){
		window.clearTimeout(bw_url_check_timer);
	}

	if(bw_old_url!=window.location.href){
		//url change detected
		bw_old_url = window.location.href;
		bw_url_check_timer = setTimeout(bw_url_change_checker,1000);
		$("#mc_main_host").remove();
		bw_load_checker();
	}
	else{
		bw_old_url = window.location.href;
		bw_url_check_timer = setTimeout(bw_url_change_checker,1000);

	}

}



bw_load_checker();
bw_url_change_checker();

}

if(window.location.href.match('www.nnnow.com')){
	may_sale_other_site_notifs();
	prod_deets.prod_site = "nn";

	var nn_page_load_check_timer = "";

	var nn_old_url = window.location.href;

	var nn_url_check_timer = "";

	function nn_prod_page_load_checker(){

		if(nn_page_load_check_timer){
			window.clearTimeout(nn_page_load_check_timer);
		}

		if($("h1.nw-productinfo-content-info").text() !="" && ($(".nw-product-carousel-main .nw-desktop-only .nw-carousel-item.pdp-carousel-item img.nw-carousel-image").attr('src')) ){
			//page loaded
			if($(".nw-product-display").length>0 ){
				
				prod_deets.product_id = window.location.pathname.split('-')[window.location.pathname.split('-').length-1];

				prod_deets.prod_title = $("h1.nw-productinfo-content-info").text();
				prod_deets.prod_srch = $("h1.nw-productinfo-content-info").text();
				prod_deets.prod_title_raw = $("h1.nw-productinfo-content-info").text();
				prod_deets.prod_site = "nn";
				prod_deets.prod_img = $(".nw-product-carousel-main .nw-desktop-only .nw-carousel-item.pdp-carousel-item img.nw-carousel-image").attr('src');
				prod_deets.prod_price = parseInt($(".description .price").text().replace('Rs.','').replace(',',''));
				prod_deets.prod_link = window.location.href;

				update_data_for_spa();

			}

		}
		else{
			nn_page_load_check_timer = setTimeout(nn_prod_page_load_checker,1000);
			return
		}
	}

	function nn_url_checker(){
		if(nn_url_check_timer){
			window.clearTimeout(nn_url_check_timer);
		}

		if(nn_old_url!=window.location.href){
			//url change detected
			nn_old_url=window.location.href;
			nn_url_check_timer=setTimeout(nn_url_checker,1000);
			nn_page_task();
			$("#mc_main_host").remove();
		}else{
			nn_old_url=window.location.href;
			nn_url_check_timer=setTimeout(nn_url_checker,1000);

		}
	}

	function nn_page_task(){
		if($(".nw-product-display").length>0){
			nn_prod_page_load_checker();
		}
		else{
			//mot product page
		}
	}

	nn_page_task();
	nn_url_checker();


}

if(window.location.href.match('www.limeroad.com/')){
	prod_deets.product_id ='lr';
	
}

if(window.location.href.match("www.craftsvilla.com/")){
	prod_deets.prod_site = "cv";
	if(window.location.href.match("/product/") || window.location.href.match("/shop/")){
		//product page
		var og_url = $("meta[property='og:url']").attr("content");

		try{

			var crumb_list = [];
			var crumbs = $("div#breadcrumb li");
			for(var i =0; i< crumbs.length-1; i++){
				crumb_list.push($.trim($(crumbs[i]).find("span").text()));
			}
			prod_deets.prod_categ = crumb_list[crumb_list.length-1];
			prod_deets.prod_categ_alt = crumb_list.join("_");
		}
		catch (err){
			prod_deets.prod_categ = "";
			prod_deets.prod_categ_alt = "";

			console.log("categ error");
		}

		if(!prod_deets.prod_categ){
			prod_deets.prod_categ = "";
			prod_deets.prod_categ_alt = "";
		}

		prod_deets.product_id = og_url.split('/')[og_url.split('/').length-1];
		prod_deets.prod_title = $.trim($("h1[itemprop='name']").text());
		prod_deets.prod_srch = $.trim($("h1[itemprop='name']").text());
		prod_deets.prod_title_raw = $.trim($("h1[itemprop='name']").text());
		prod_deets.prod_site = "cv";
		prod_deets.prod_img = $("meta[property='og:image']").attr("content");
		prod_deets.prod_link = window.location.href;
		prod_deets.prod_price = parseInt($.trim($("div.pdp-price-offer .pdp-offer-price").text().replace("₹","")));

		update_data_for_spa();

	}
}


if(window.location.href.match("www.mrvoonik.com/")){
	may_sale_other_site_notifs();
	console.log("page loaded");


	// $("body").on("keydown","#form1 #global_search_box",function(){
	// 	if(event.which == 13) {
	// 		// alert($(this).val());
	// 		alert(($(this).val()));
	// 		console.log('key down');
	// 		// sendsearchIntent('my',$(this).val());
	// 	}
	// 	return true;
	// });


	$("body").on("click","#form1 input[type='submit'][name='commit']",function(){
			// alert($(this).val());
		// alert(($("#form1 #global_search_box" ).val()));
		sendsearchIntent('mv',$("#form1 #global_search_box" ).val());
		console.log("click search button");
		return true;
	});



	$("body").on("click","ul.ui-autocomplete li a" ,function(){
			// alert($(this).val());
		// alert(($(this).text()));
		sendsearchIntent('mv',$(this).text());
		console.log("click suggestion");
		return true;
	});

	$("body").on("click",".main_prod_text #buy_btn",function(){
		// alert("buy button clicked prod_title is"+$(".main_prod_text p:eq(0)").text());
		sendcartevent('mv','buy now',prod_deets.product_id,window.location.href,$(".main_prod_text p:eq(0)").text());
	});

	$("body").on("click",".product_column_listing #buy_btn",function(){
			var vk_title = $(this).attr('sourceprodid').split('?')[0].replace(/-/g,' ');
			sendcartevent('mv','buy now',prod_deets.product_id,window.location.href,vk_title);
	});


}



//bookadda
if (window.location.hostname == 'www.bookadda.com') {

var flipref=window.location.href;

if ($(cssLocs.ba.title).length>0) {


// insertTag(false);


prod_deets.prod_site='ba';

// $('#'+whisperbox).css('visibility','visible');
// ////trackMakkhiBoxDisplay(prod_deets.prod_site);

prod_deets.prod_categ = 'books';
prod_deets.prod_categ_alt = $.trim($(cssLocs.ba.category).text())+' '+$.trim($(cssLocs.ba.category_alt).text());



//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle(textFindAll($(cssLocs.ba.title).contents()));
prod_deets.prod_title_raw = cleanTitle(textFindAll($(cssLocs.ba.title).contents()));

if (prod_deets.prod_categ != '' || prod_deets.prod_categ_alt != '') {
	trackCateg('bookadda', prod_deets.prod_categ, prod_deets.prod_categ_alt);
}

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.ba.bracktitle).text());



//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.ba.price).contents());



if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.ba.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}




			book_details=get_book_details(prod_deets.prod_site)

			$("#is_it_a_book_page").text("Yes a bookpage");

			$("#book_isbn_10").text(book_details.isbn_10);
			$("#book_isbn_13").text(book_details.isbn_13);

				


			if((book_details.isbn_10!='') || (book_details.isbn_13 !='') ){

				if((book_details.isbn_13!='')){

					//prod_deets.prod_srch="isbn:"+book_details.isbn_10;
					prod_deets.prod_srch=book_details.isbn_13;
					console.log("set isbn13")
				}

				else{
					if(book_details.isbn_10 !=''){

						prod_deets.prod_srch=book_details.isbn_10;
				}


					}
				}
			

}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}


insertPiddle(prod_deets);
// getGraph();
// checkUUID();
// wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
insert_main_container();

} //   pidmatch

} // bookadda


if (window.location.hostname == "paytmmall.com") {
	may_sale_other_site_notifs();
	$('body').on('mousedown','li',function(event){
		if($(this).parent().parent().siblings('input[type="search"]').length == 1){
			console.log($(this).text());
			// alert(($(this).text()));
			sendsearchIntent('pt',$(this).text());

		}
		return true;
	});


	$('body').on('click',"#suggested-search li a", function(event){
		// alert($(this).text());
		sendsearchIntent('pt',$(this).text());
		return true;
	});


	//product page
	$('body').on('keydown',".searchBox input[type='text']",function(){
		if(event.which == 13) {
			// console.log($(this).val());
			sendsearchIntent('pt',$(this).val());
		}
		return true;
	});


	//other pages
	$('body').on('keydown',"input[type='search']",function(){
		if(event.which == 13) {
			// console.log($(this).val());
			sendsearchIntent('pt',$(this).val());
		}
		return true;
	});
	
	$("body").on("mousedown","button:contains('Buy')",function(){
		console.log("buy button clicked");
		sendcartevent('pt','Buy now',prod_deets.product_id,window.location.href,prod_deets.prod_title);	
		return true;
	});

	//end of sear

	console.log('+------------------------+||||| in paytm');
	
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('jquery-2.0.0.min.js');
	(document.head||document.documentElement).appendChild(s);
	s.onload = function() {
		s.parentNode.removeChild(s);
	};

	var s1 = document.createElement('script');
	s1.src = chrome.extension.getURL('paytm.js');
	(document.head||document.documentElement).appendChild(s1);
	s1.onload = function() {
		s1.parentNode.removeChild(s1);
	};
	
	// Event listener
	document.addEventListener('pitama_communique', function(e) {
		// e.detail contains the transferred data (can be anything, ranging
		// from JavaScript objects to strings).
		// Do something, for example:

		// //to fix some welcomebox update issues this 2lines are must
		// $('#'+whisperbox).remove();
		// $('#welcomebox').remove();
		// $('#makkhi_min_box').remove();
		// if ($('#'+whisperbox).length>0) {
		// 	console.log('fresh happenings, new beginnings');
		// 	$('#'+whisperbox).remove();
		// }
		$("#mc_host").remove();
		//console.log(e);
		if(e.detail.isProdPage) {
			// insertTag(false);
			prod_deets.prod_site='pt';



			// $('#'+whisperbox).css('visibility','visible');
			//trackMakkhiBoxDisplay(prod_deets.prod_site);


			prod_deets.product_id=String(e.detail.prod_id);
			prod_deets.prod_title=e.detail.prod_title;
			prod_deets.prod_title_raw=e.detail.prod_title;
			prod_deets.prod_srch=e.detail.prod_title;
			prod_deets.prod_categ=e.detail.prod_categ;
			prod_deets.prod_categ_alt=e.detail.prod_categ_alt;
			prod_deets.prod_price =  e.detail.prod_sell_price
			prod_deets.prod_link = e.detail.prod_link;
			prod_deets.prod_img = e.detail.prod_img;
			prod_deets.prod_title_raw=e.detail.prod_title;
			trackCateg('paytm', prod_deets.prod_categ, prod_deets.prod_categ_alt);
			// insertTag(false);	
			// $('#'+whisperbox).css('visibility','visible');
			// //console.log(prod_deets);
			// checkUUID();
			// getmmpos();
			update_data_for_spa();
	
		} else if(e.detail.isCheckOutPage) {
			//alert('checkout page');
			// var portal = 'pt';
			// console.log('+----------------------+==== in paytm cart');
			// var req = getCouponList(portal);
			// var couponList = [];
			// insertTag(true);
			// req.done(function(response) {
			// 	var response = $.parseJSON(response);
			// 	//couponList = response['couponList'];
			// 	couponList=response;
			// 	console.log('couponlist is ');
			// 	console.log(couponList);
			// 	// fill in the couponbox here!
			// 	fillCoupons(couponList, portal);
			// });

			// $('#'+whisperbox).css('visibility','visible');
			//trackMakkhiBoxDisplay(prod_deets.prod_site);
		}
		else if(e.detail.isResultsPage){
			//$('#'+whisperbox).css('visibility','hidden');
			//$('#welcomebox').css('visibility','hidden');
			// $('#'+whisperbox).remove();
			// $('#welcomebox').remove();
			$("#mc_host").remove();
		}
	});
	
 pt_url_check();
	
} // paytm

if (window.location.hostname.match('fabfurnish.com')) {
	may_sale_other_site_notifs();
	var portal = 'ff';
	if (fabfurnishCart(document.URL)) {
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag(true);
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });
		// $('#addCoupon').click();
		// $('#'+whisperbox).css('visibility','visible');
		// //trackMakkhiBoxDisplay(prod_deets.prod_site);

	} // cart page
} // fabfurnish

if (window.location.hostname.match('pepperfry.com')) {
	may_sale_other_site_notifs();
	var portal = 'pf';
	if (pepperfryCart(document.URL)) {
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag(true);
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });


		// $('#'+whisperbox).css('visibility','visible');
		//trackMakkhiBoxDisplay(prod_deets.prod_site);
	
	} // cart page
} // pepperfry

if (window.location.hostname.match('urbanladder.com')) {
	may_sale_other_site_notifs();
	var portal = 'ul';
	if (urbanladderCart(document.URL)) {
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag(true);
		// $('.coupon_link').click();
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });


		// $('#'+whisperbox).css('visibility','visible');
		//trackMakkhiBoxDisplay(prod_deets.prod_site);
	} // cart page
} // urbanladder

if (window.location.hostname.match('fashionara.com')) {
	may_sale_other_site_notifs();
	var portal = 'fa';
	isTagInserted = false;
	if (fashionaraCart(document.URL)) {
		$('#checkout_address_cont_btn').click(function() {
			
			if (isTagInserted === false) {
				// var req = getCouponList(portal);
				// var couponList = [];
				// insertTag(true);
				// req.done(function(response) {
				// 	var response = $.parseJSON(response);
				// 	//couponList = response['couponList'];
				// 	couponList=response;
				// 	console.log('couponlist is ');
				// 	console.log(couponList);
				// 	// fill in the couponbox here!
				// 	fillCoupons(couponList, portal);
				// });
				// $('#'+whisperbox).css('visibility','visible');
				// //trackMakkhiBoxDisplay(prod_deets.prod_site);
				// window.setTimeout(function(){
				// 	// $('#cart_apply_coupon').css('display', 'inline');
				// 	document.getElementById('cart_apply_coupon').style.display="inline";
				// }, 1000);
				// tagInserted = true;
			}
		});
	} // cart match
} // fashionara

if (window.location.hostname.match('lenskart.com')) {
	may_sale_other_site_notifs();
	var portal = 'lc';
	console.log('lc');
	if (lenskartCart(document.URL)) {
		console.log('lc cart');
		// //$('button#ContinueButton').click(function(){
		// 		var req = getCouponList(portal);
		// 		var couponList = [];
		// 		insertTag(true);
		// 		req.done(function(response) {
		// 			var response = $.parseJSON(response);
		// 			//couponList = response['couponList'];
		// 			couponList=response;
		// 			console.log('couponlist is ');
		// 			console.log(couponList);
		// 			// fill in the couponbox here!
		// 			fillCoupons(couponList, portal);
		// 		});
		// 		$('#'+whisperbox).css('visibility','visible');
		// 		//trackMakkhiBoxDisplay(prod_deets.prod_site);
		// 		var stopCheckingCheckbox = null;
		// 		var changeCheckbox = function() {
		// 			console.log('in changeCheckbox');
		// 			if($('#coupon-checkbox').length>0 && !$('#coupon-checkbox').is(':checked')) {
		// 				console.log('in changeCheckbox IF');
		// 				document.getElementById('coupon-checkbox').click();
		// 				clearInterval(stopCheckingCheckbox);
		// 			}
		// 		}
		// 		var stopCheckingCheckbox = window.setInterval(changeCheckbox, 2000);
		//});
	} // cart page
} //lenscart

if (window.location.hostname.match('foodpanda.in')) {
	may_sale_other_site_notifs();
	var portal = 'fp';
	if (foodpandaCart(document.URL)) {
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag(true);
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });
		// $('#'+whisperbox).css('visibility','visible');
		// //trackMakkhiBoxDisplay(prod_deets.prod_site);			
	} // cart page
} //foodpanda

if (window.location.hostname.match('justeat.in')) {
	may_sale_other_site_notifs();
	console.log('in justeat');
	var portal = 'je';
	tagIn = false;

	if (justeatCart(document.URL)) {
		// var insertCouponTag = function() {
		// 	console.log('in justeat cart');
		// 	var req = getCouponList(portal);
		// 	var couponList = [];
		// 	insertTag(true);
		// 	req.done(function(response) {
		// 		var response = $.parseJSON(response);
		// 		//couponList = response['couponList'];
		// 		couponList=response;
		// 		console.log('couponlist is ');
		// 		console.log(couponList);
		// 		// fill in the couponbox here!
		// 		fillCoupons(couponList, portal);
		// 	});
		// 	$('#'+whisperbox).css('visibility','visible');
		// 	//trackMakkhiBoxDisplay(prod_deets.prod_site);
		// }
		// $('.btn.btn-default.checkout-address-proceed-btn').click(function() {
		// 	if (!tagIn) {
		// 		insertCouponTag();
		// 		document.getElementsByClassName('add-coupon-btn')[0].click();
		// 		tagIn = true;
		// 	}
		// });
		// $('.btn.btn-default.checkout-delivery-proceed-btn').click(function() {
		// 	if (!tagIn) {
		// 		insertCouponTag();
		// 		document.getElementsByClassName('add-coupon-btn')[0].click();
		// 		tagIn = true;
		// 	}
		// });
	} // cart
} // justeat

if (window.location.hostname.match('pizzaonline.dominos.co.in')) {
	may_sale_other_site_notifs();
	var portal = 'dm';
	if (dominosCart(document.URL)) {
		// console.log('in justeat cart');
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag();
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });
		// $('#'+whisperbox).css('visibility','visible');
		// //trackMakkhiBoxDisplay(prod_deets.prod_site);	
	} // cart page
} // dominos

if (window.location.hostname.match('pizzahut.co.in')) {
	may_sale_other_site_notifs();
	var portal = 'ph';
	if (pizzahutCart(document.URL)) {
		// console.log('in justeat cart');
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag();
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });
		// $('#'+whisperbox).css('visibility','visible');
		// //trackMakkhiBoxDisplay(prod_deets.prod_site);
	} // cart
} // pizzahut

if (window.location.hostname.match('makemytrip.com')) {
	may_sale_other_site_notifs();
	var portal = 'mt';
	if (makemytripCart(document.URL)) {
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag();
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });
		// $('#'+whisperbox).css('visibility','visible');	
		//trackMakkhiBoxDisplay(prod_deets.prod_site);	
	} // cart match
} // makemytrip

if (window.location.hostname.match('cleartrip.com')) {
	may_sale_other_site_notifs();
	var portal = 'ct';
	if (cleartripCart(document.URL)) {
		// console.log('urbanladder cart page');
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag();
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });
		// $('#'+whisperbox).css('visibility','visible');	
		//trackMakkhiBoxDisplay(prod_deets.prod_site);	
	} // cart page
} // cleartrip

if (window.location.hostname.match('goibibo.com')) {
	may_sale_other_site_notifs();
	var portal = 'gb';
	if (goibiboCart(document.URL)) {
		// console.log('urbanladder cart page');
		// var req = getCouponList(portal);
		// var couponList = [];
		// insertTag();
		// req.done(function(response) {
		// 	var response = $.parseJSON(response);
		// 	//couponList = response['couponList'];
		// 	couponList=response;
		// 	console.log('couponlist is ');
		// 	console.log(couponList);
		// 	// fill in the couponbox here!
		// 	fillCoupons(couponList, portal);
		// });
		// $('#promo_check_box').click();
		// $('#'+whisperbox).css('visibility','visible');	
		//trackMakkhiBoxDisplay(prod_deets.prod_site);
	}
} // goibibo

// if (window.location.hostname == 'www.coupondunia.in') {
// 	var coupons = $(cssLocs.couponDunia.hasCoupons);
// 	if (coupons.length > 0) {
// 		var couponList = [];
// 		for (var i=0; i<coupons.length; i++) {
// 			var couponCode = $(coupons[i]).attr('data-code');
// 			if (couponCode != '') {
// 				var website = $(coupons[i]).parent().parent().prev().find('a').attr('data-websitename');
// 				var description = $(coupons[i]).parent().parent().prev().find('div.offer-description-full').text().trim();
// 				if (typeof website == 'undefined' || website == '') {
// 					website = $(coupons[i]).attr('data-websitename');
// 				}
				
// 				if (typeof description == 'undefined' || description == '') {
// 					description = $(coupons[i]).parent().prev().find('a').text().trim();
// 				}
// 				description = description.replace('Less\[\-\]', '');
// 				coupon = {};
// 				coupon.code = couponCode.trim();
// 				coupon.portal = website.trim();
// 				coupon.desc = description.trim();
// 				couponList.push(coupon);
// 			}
// 		}
// 		console.log(couponList);
// 		insertTag(true);
// 		showCoupons(couponList);
// 		getCartList('couponDunia');
// 		$('#'+whisperbox).css('visibility','visible');	
// 	} // has found some coupons on the page
      
// } // coupondunia


// if (window.location.hostname == "www.couponrani.com") {
// 	console.log('rani ke ghar! yay!');
// 	var couponRows = $('div.coupon_tile');
// 	if (couponRows.length == 0) {
// 		couponRows = $('section.coupon_action');
// 	}
// 	var couponList = Array();
// 	console.log('totla len ' + couponRows.length)
// 	// If portal page, go south, or NORTH
// 	console.log(window.location.pathname.slice(1));
// 	if (window.location.pathname.slice(1) in cssLocs.couponRani.portalMap) {
// 		var portalCode =  cssLocs.couponRani.portalMap[window.location.pathname.slice(1)];
// 		console.log('in here');
// 		for (var i=0, len=couponRows.length; i<len; i++) {
// 			var couponRow = $(couponRows[i]);
// 			var coupon = {};
// 			coupon.portal = cssLocs.couponRani.portalMapReverse[portalCode];
// 			coupon.desc = couponRow.find('article p').text().trim();
// 			coupon.code = couponRow.find('aside button[data-coupon]').attr('data-coupon');
// 			if (couponRow.find('aside button[data-coupon]').text() == 'View Coupon') {
// 				// console em
// 				console.log('website : ' + coupon.website);
// 				console.log('coupon  : ' + coupon.code);
// 				console.log('desc    : ' + coupon.desc);
// 				console.log('___________________________');
// 				// push to the list
// 				couponList.push(coupon);				
// 			}
// 		}
		
// 	} else {

// 		for (var i=0, len=couponRows.length; i<len; i++) {
// 			var couponRow = $(couponRows[i]);
// 			var coupon = {};
// 			// check if it is a coupon; if not, continue
// 			//console.log('furur ' + couponRow.find('article button[data-coupon]').text());

// 			// this is a coupon! Process!
// 			// check if this belongs to the websites we support!
// 			var href = couponRow.find('figure a').attr('href');
// 			var siteKey = href.split('/');
// 			var siteKey = siteKey[siteKey.length-1];
// 			// check if it exists in portalMap
// 			if (cssLocs.couponRani.portalMap[siteKey]) {
// 				coupon.code = couponRow.find('button').attr('data-coupon');
// 				coupon.portal = cssLocs.couponRani.portalMapReverse[cssLocs.couponRani.portalMap[siteKey]];
// 				coupon.desc = couponRow.find('article h3 a').text().trim();
// 				if (couponRow.find('article button[data-coupon]').text() == 'View Coupon') {
// 					// console em
// 					console.log('website : ' + coupon.website);
// 					console.log('coupon  : ' + coupon.code);
// 					console.log('desc    : ' + coupon.desc);
// 					console.log('___________________________');
// 					// push to the list
// 					couponList.push(coupon);
// 				}

// 			}
// 		}
// 	}
// 	if (couponList.length != 0) {
// 		insertTag(true);
// 		showCoupons(couponList);
// 		getCartList('couponRani');
// 		$('#'+whisperbox).css('visibility','visible');		
// 	}
// } // couponrani

// if (window.location.hostname == 'www.couponraja.in') {
// 	var couponWrappers = $('div.deal-sub-nw');
// 	var couponList = [];
// 	for (var i=0; i<couponWrappers.length; i++) {
// 		var website = $(couponWrappers[i]).find('div.m-sml-logo-nw a img').attr('alt').split(' Coupons')[0];
// 		//website = website[website.length-1];
// 		var couponCode = $(couponWrappers[i]).find('div#rptcouponshome1_rpthome_pnlvouchercode_'+i).find('div input').attr('value');
// 		var desc = $(couponWrappers[i]).find('p.ofr-sml-descp-nw').text().trim();
// 		desc = desc.replace(/ `/g, desc);
// 		console.log('website --> ' + website);
// 		console.log('couponc --> ' + couponCode);
// 		console.log('descr   --> ' + desc);
// 		console.log('____________________________________');
// 		var coupon = {};
// 		coupon.code = couponCode.trim();
// 		coupon.desc = desc.trim();
// 		coupon.portal = website.trim();
// 		couponList.push(coupon);
// 	}
// 	console.log('couponlist len ' + couponList.length);
// 	if (couponList.length == 0) {
// 		// not on homepage, try to get coupons from store page
// 		console.log('plan b');
// 		couponWrappers = $('div.cpn-lbl').parents('div.coupon-sec');
// 		console.log('len of couponWrappers : ' + couponWrappers.length);
// 		//var website = $('a#hlmerchantwesite span').text();
// 		for (var i=0; i<couponWrappers.length; i++) {
// 			var couponCode = $(couponWrappers[i]).find('div.m-ccode input[type="hidden"]').attr('value');
// 			var desc = $(couponWrappers[i]).find('p.ofr-descp').text();
// 			var website = $('a#hlmerchantwesite span').text().trim();
// 			desc = desc.replace(/ `/g, '');
// 			console.log('code --> ' + couponCode);
// 			//desc = desc.replace(' `', '');
// 			console.log('desc --> ' + desc);
// 			console.log('web  --> ' + website);
// 			var coupon = {};
// 			coupon.code = couponCode;
// 			coupon.desc = desc;
// 			coupon.portal = website;
// 			couponList.push(coupon);
// 		}

// 	}
// 	if (couponList.length > 0) {
// 		insertTag(true);
// 		showCoupons(couponList);
// 		getCartList('couponRaja');
// 		$('#'+whisperbox).css('visibility','visible');
// 	}
// //	$('.'+whisperboxtab).click(function(event) {
// //		// Permissions must be requested from inside a user gesture, like a button's
// //		// click handler.
// //		console.log('in #whisperboxtab click');
// //		requestTabPermissions();
// //    });
// } // couponraja



// if ((window.location.hostname == 'www.makkhichoose.com') || (window.location.hostname == 'makkhichoose.com') || (window.location.hostname == 'localhost') || (window.location.hostname == 'wishlists.makkhichoose.com')) {

// var flipref=window.location.href;

// if (flipref.match('winner')){

// 		var offer_value_str= $('div.intro').attr('offerval');
// 		var offer_id_str= $('div.intro').attr('offerid');
// 		var uid_str= $('div.intro').attr('idval');

// 		var ins_hml = '<strong>It is your lucky day!</strong> \
// 						<p> \
// 							You have won a <span>'+offer_value_str+'</span> gift card from <img src="MakkhiNew/img/az_transp.png" height="44px"/>  <br> \
// 							Simply enter your email address here and click on the button below. \
// 						</p> \
// 						<br /> \
// 						<p id="emfl"> \
// 							<span class="getmail"> \
// 								<input type="text" class="emailval" offerid="'+offer_id_str+'" idval="'+uid_str+'"> \
// 							</span><br><br> \
// 							<a class="install getmail" href="#"><img src="MakkhiNew/img/gift.png" />Get My Gift Card!</a> \
// 						</p>';

// 		$('div.intro').html(ins_hml);

// }


// if ($("#noshow").length>0) {
// 	$("#noshow span").each(function(i){
// 			var azobj={'prodid':$(this).attr('keyprop'),'link':$(this).attr('valprop'),'price':'','dl':$(this).attr('dlprop')};
// 			azPRFetch(azobj);
// 	})
// }


// if (flipref.match('fblogin') || flipref.match('createwishlist')) {
// 	console.log('we here at the north pole, norad!');
// 	$('#makkhidiv').addClass('makkhihere');
// 	$('a.geturldeets, div.add-link a.btn-red').click(getURLDeets);
// } // fblogin


// } //makkhichoose

if (window.location.hostname == "steals.makkhichoose.com" && window.location.pathname == "/recommended") {
	chrome.runtime.sendMessage({method: "getrecommended"}, function(response){
		console.log(response);
		if(response.status) {
			if(response.req == 'succ') {
				var prods_data = response.data.data;
				var fullHtml = '';
				var script = document.createElement("script");
				var scriptsrc = '';
				for (i=0; i<prods_data.length; i++) {
					var eachProd = prods_data[i];
					var dataHtml = '<div class="row" id="dispprods"><div class="col-md-4">\
						<div class="box-01">\
							<div class="product-actual-price">' + eachProd.droppercent + '%</div>\
							<div class="product-image">\
								<a href="' + eachProd.prod_link + '" target="_blank">\
									<img src="' + eachProd.prod_image + '" />\
								</a>\
							</div>\
							<div class="product-details">\
								<div class="product-name">' + eachProd.prod_title + '</div>\
								<div class="product-price"><span class="strikeout">&#x20B9; ' +  eachProd.initialPrice + '</span> &#x20B9; ' + eachProd.currentPrice + '</div>\
							</div>\
						</div>\
					</div>\
					<div class="col-md-8">\
						<div class="box-01-graph">\
							<div id="chart-' + i + '" style="height: 280px; width:100%; !important"></div>\
						</div>\
					</div>\
				</div>';
				scriptsrc += '\nnew Chartkick.LineChart("chart-' + i + '", ' + JSON.stringify(eachProd.listprice) + ',{"colors": ["#8ac5c3"]});\n';
				//console.log(dataHtml);
				//$('#prodsContainer').append(dataHtml);
				fullHtml += dataHtml;
				}
				//console.log(fullHtml);
				document.getElementById('prodsContainer').innerHTML = fullHtml;
				script.innerHTML = scriptsrc;
				document.getElementById('prodsContainer').appendChild(script);

			} else {
				// show error to user
				console.log('error');
			}
		} else {
			//show error to user
			console.log('error');
		}
	});
}

if (window.location.hostname == 'steals.makkhichoose.com' && window.location.pathname == "/deliciousdeals") {

var flipref=window.location.href;
if (flipref.match('deliciousdeals')) {
	console.log('we here at real steel by bill heel');
	console.log($('div.box-01-makkhi').html());
	$('#dispprods').bind("DOMSubtreeModified",function(){

		$('.box-01-makkhi').each(function(){
			console.log('looks like we stuffed the turkey, so to speak');
			var img_val = $(this).find('.product-image img').attr('alt_src');
			var link_val = $(this).find('.product-image a').attr('alt_href');
			var tit_val = $(this).find('.product-name').attr('alt_title');
			$(this).find('.product-image img').attr('src',img_val);
			$(this).find('.product-image a').attr('href',link_val);
			$(this).find('.product-name').html(tit_val);
			$(this).find('.product-actual-price').css('display','block');
			$(this).find('.product-price').css('display','block');
			$(this).addClass('box-01').removeClass('box-01-makkhi');;

		});

		
	});

} // steelydan

} //delishdeals

// function getFKBulkPrices() {
// 	//bulk price update
// 	var bulk_price_items = {};
// 	var lstBlockItems = $('.pu-visual-section').parent();
// 	if(lstBlockItems.length > 0) {
// 		//search page
// 		lstBlockItems.each(function() {
// 			console.log('within loop 1');
// 			var cur_pid = $(this).attr("data-pid");
// 			console.log(cur_pid);
// 			var cur_price = cleanPrice($(this).find('.pu-final span').text());
// 			console.log(cur_price);
// 			bulk_price_items[cur_pid + 'fk'] = cur_price;
// 		});
// 	}

// 	var lstBlockItems1 = $('.fk-extramargin');
// 	if(lstBlockItems1.length > 0) {
// 		//search page
// 		lstBlockItems1.each(function() {
// 			console.log('within loop 2');
// 			var cur_pid = $(this).find('a[data-pid]').attr("data-pid");
// 			console.log(cur_pid);
// 			var cur_price = cleanPrice($(this).find('span.final-price').text());
// 			console.log(cur_price);
// 			bulk_price_items[cur_pid + 'fk'] = cur_price;
// 		});
// 	}

// 	var lstBlockItems2 = $('.fk-recom-item-details');
// 	if(lstBlockItems2.length > 0) {
// 		//search page
// 		lstBlockItems2.each(function() {
// 			console.log('within loop 3');
// 			var cur_pid = $(this).find('a[data-pid]').attr("data-pid");
// 			console.log(cur_pid);
// 			var cur_price = cleanPrice($(this).find('span.final-price').text());
// 			console.log(cur_price);
// 			bulk_price_items[cur_pid + 'fk'] = cur_price;
// 		});
// 	}

// 	console.log('bulk function end');
// 	console.log(bulk_price_items);
// 	console.log(Object.keys(bulk_price_items).length);
// 	putBulkPriceData(bulk_price_items);
// }

// if (window.location.href === "http://localhost:8080/hiddenmessage"){
// 		console.log("hi cashback... from content script");
// 		chrome.runtime.sendMessage({method: "getEmmy"},function(response){

// 			console.log("id_deets ready")
// 			update_cashback_details(response.status.user_id);

// 		});
// }


if ((window.location.href === "http://www.makkhichoose.com/greatindiansale") || (window.location.href === "http://makkhichoose.com/greatindiansale")){
		console.log("hi from content script d" );

	hoverdiv = 'hvd'+createRandString();
	bubs = '<div id="'+ hoverdiv +'" class="triangle-isosceles" style="display:none;"><img src="" height="150px" style="display:block !important;"></div>';
	$('body:first').append(bubs);
	$('#deals_table tbody').on('mouseenter.slowhover','tr td a', onEnter);
	$('#deals_table tbody').on('mouseleave.slowhover','tr td a', onLeave);

	// url_to_image_url_data=JSON.parse($('script#data_script').html());

}



if ((window.location.href === "http://www.makkhichoose.com/azsuperdeals") || (window.location.href === "http://makkhichoose.com/azsuperdeals")){
		console.log("hi from content script d" );

	hoverdiv = 'hvd'+createRandString();
	bubs = '<div id="'+ hoverdiv +'" class="triangle-isosceles" style="display:none;"><img src="" height="150px" style="display:block !important;"></div>';
	$('body:first').append(bubs);
	$('#deals_table tbody').on('mouseenter.slowhover','tr td a', onEnter);
	$('#deals_table tbody').on('mouseleave.slowhover','tr td a', onLeave);

	// url_to_image_url_data=JSON.parse($('script#data_script').html());

}

//To remove newtab deals

// if((window.location.hostname==="www.google.co.in") &&(window.location.pathname==="/_/chrome/newtab")){

// 	chrome.storage.local.get({'showNewTabsDeals':true,},function(item){

// 			if(item.showNewTabsDeals==true){
// 				//we can display
// 				$('#lga img').css('box-sizing','content-box');

// 				if($('#most-visited').length>0){
// 					console.log('called deals');
// 					get_nt_deals()
					
// 				}

// 			}//showdeals if
// 			else{
// 				//do nothing
// 			}
// 	});

// }	



if (window.location.href.match('makkhichoose.com/goldquest')){
 // if (window.location.href.match('/goldquest')){

var email_card

//to check whether users email is sent
// reading with default options (fall back values if the flag is not stored in memory)

  chrome.storage.local.get({
    'gold_quest_mail_sent_to_server':false,
  }, function(items) {

    var is_mail_sent=items.gold_quest_mail_sent_to_server;

    if(is_mail_sent){
    	//mail already sent to server
		email_card = "<div class=\"card-panel grey row lighten-5 mc_sent_emmy\" style=\"font-size:x-large;\" id=\"mail_card\"><span id='email_msg'><span class=\"green-text\">REGISTERED:<\/span> You have entered the contest! If you'd like to change your email, enter below and hit confirm.<\/span> <div class=\"row\"> <div class=\"input-field col s12\"> <input id=\"email\" type=\"email\" class=\"validate\"> <label for=\"email\">Email<\/label> <\/div><\/div><a class=\"waves-effect waves-light btn\" id=\"email_button\">CONFIRM<\/a><\/div>";

    }
    else{
    	//mail is not sent to server

    	email_card = "<div class=\"card-panel grey row lighten-5 mc_emmy_not_sent\" style=\"font-size:x-large;\" id=\"mail_card\"><span id='email_msg'><span class=\"red-text\">NOT REGISTERED:<\/span>To participate enter your email and press the confirm button below<\/span> <div class=\"row\"> <div class=\"input-field col s12\"> <input id=\"email\" type=\"email\" class=\"validate\"> <label for=\"email\">Email<\/label> <\/div><\/div><a class=\"waves-effect waves-light btn\" id=\"email_button\">CONFIRM<\/a><\/div>";


    }

	$('div#top_card').html(email_card);

		if(id_deets.emmy!='' && id_deets.emmy!=undefined){
			console.log('setting email id');
			$('input#email').val(id_deets.emmy);
			$('input#email').attr('uid',id_deets.user_id);
			$('input#email').focus();
		}
		else
		{
			setTimeout(function(){
			$('input#email').val(id_deets.emmy);
			$('input#email').attr('uid',id_deets.user_id);
			$('input#email').focus();
			},1000);
		}

	setTimeout(function(){

		if(is_our_affys['is_our_az']){
			// $.toast('our az');
		}
		else{
			bsend_gq('http://www.amazon.in/gp/goldbox');
			set_is_our_affy('is_our_az',true);
		}


	},1000);


  });



$(document).on("click", "body #email_button",function(){
	bsend_gq('http://www.amazon.in/gp/goldbox');
	set_is_our_affy('is_our_az',true);

});
		
document.addEventListener('quest_mail_ok', function(e) {

	 chrome.storage.local.set({

	 	'gold_quest_mail_sent_to_server':true,
	 	'emmy':($('input#email').val())

	  }, function() {

	  	console.log('set mail sent saved');

	  });

});		


}

if(window.location.href.match("makkhichoose.com/myproducts")){
	$("a.remove-button").click(function(response){
		var pid = "";
		try{
			pid = $(this).attr("data-product-id");	
		}
		catch(err){
			pid = "";
		}
		

		if(pid != ""){
			var pid_in_local_form = pid.slice(-2) + pid.slice(0,-2);

			chrome.storage.local.get({"trackpiddles":""},function(data){
				if(data.trackpiddles != ""){
					var tracked_prods = jQuery.parseJSON(data.trackpiddles);
					if(pid_in_local_form in tracked_prods){
						delete tracked_prods[pid_in_local_form];
					}
                    chrome.storage.local.set({"trackpiddles": JSON.stringify(tracked_prods)}, function () {

                    });
				}
			});	
		}
		
	});
}




if (window.location.href.match('makkhichoose.com/lucky9999')){
 // if (window.location.href.match('/goldquest')){

var email_card

//to check whether users email is sent
// reading with default options (fall back values if the flag is not stored in memory)

  chrome.storage.local.get({
    'gold_quest_mail_sent_to_server':false,
  }, function(items) {

    var is_mail_sent=items.gold_quest_mail_sent_to_server;

    if(is_mail_sent){
    	//mail already sent to server
		email_card = "<div class=\"card-panel grey row lighten-5 mc_sent_emmy\" style=\"font-size:x-large;\" id=\"mail_card\"><span id='email_msg'><span class=\"green-text\">REGISTERED:<\/span> You have entered the contest! If you'd like to change your email, enter below and hit confirm.<\/span> <div class=\"row\"> <div class=\"input-field col s12\"> <input id=\"email\" type=\"email\" class=\"validate\"> <label for=\"email\">Email<\/label> <\/div><\/div><a class=\"waves-effect waves-light btn\" id=\"email_button\">CONFIRM<\/a><\/div>";

    }
    else{
    	//mail is not sent to server

    	email_card = "<div class=\"card-panel grey row lighten-5 mc_emmy_not_sent\" style=\"font-size:x-large;\" id=\"mail_card\"><span id='email_msg'><span class=\"red-text\">NOT REGISTERED:<\/span>To participate enter your email and press the confirm button below<\/span> <div class=\"row\"> <div class=\"input-field col s12\"> <input id=\"email\" type=\"email\" class=\"validate\"> <label for=\"email\">Email<\/label> <\/div><\/div><a class=\"waves-effect waves-light btn\" id=\"email_button\">CONFIRM<\/a><\/div>";


    }

	$('div#top_card').html(email_card);

		if(id_deets.emmy!='' && id_deets.emmy!=undefined){
			console.log('setting email id');
			$('input#email').val(id_deets.emmy);
			$('input#email').attr('uid',id_deets.user_id);
			$('input#email').focus();
		}
		else
		{
			setTimeout(function(){
			$('input#email').val(id_deets.emmy);
			$('input#email').attr('uid',id_deets.user_id);
			$('input#email').focus();
			},1000);
		}

	setTimeout(function(){

		if(is_our_affys['is_our_az']){
			// $.toast('our az');
		}
		else{
			bsend_gq('http://www.amazon.in/gp/goldbox');
			set_is_our_affy('is_our_az',true);
		}


	},1000);


  });



$(document).on("click", "body #email_button",function(){
	bsend_gq('http://www.amazon.in/gp/goldbox');
	set_is_our_affy('is_our_az',true);

});
		
document.addEventListener('quest_mail_ok', function(e) {

	 chrome.storage.local.set({

	 	'gold_quest_mail_sent_to_server':true,
	 	'emmy':($('input#email').val())

	  }, function() {

	  	console.log('set mail sent saved');

	  });

});		


}



if(window.location.href.match('makkhichoose.com/dailydeals')||window.location.href.match('makkhichoose.com/greatindiansale')||window.location.href.match('makkhichoose.com/superdeals')||window.location.href.match('makkhichoose.com/azsuperdeals')||window.location.href.match('makkhichoose.com/sabsebadasale')){
	$('head').append("<script id='from_makkhi'></script>");

	console.log('dailydeals detected');
	if(window.location.href.match('source=makkhi')){
		console.log('triggered reminders');
		$('#menu4 .cust_loader').css('display','block');
		chrome.runtime.sendMessage({method:'clean_old_deals'});
		setTimeout(function(){
			$('#menu4 .cust_loader').css('display','none');
			populate_deal_reminders();
		},800);
	}
	else{
		console.log(window.location.href);
		console.log('source does not match');
	}

	console.log("hi from content script d" );
	hoverdiv = 'hvd'+createRandString();
	bubs = '<div id="'+ hoverdiv +'" class="triangle-isosceles" style="display:none;"><img src="" height="150px" style="display:block !important;"></div>';
	$('body:first').append(bubs);
	$('#deals_table tbody').on('mouseenter.slowhover','tr td a', onEnter);
	$('#deals_table tbody').on('mouseleave.slowhover','tr td a', onLeave);

	

	$('body').on('click','#menu_link_4',function(){

		console.log('menu 4 click detected');
		$('#menu4 .cust_loader').css('display','block');
		chrome.runtime.sendMessage({method:'clean_old_deals'});
		setTimeout(function(){
			$('#menu4 .cust_loader').css('display','none');
			populate_deal_reminders();
		},800);

	});


	$('body').on('click','.removebtn',function(e){

		var deal=$(this).parents('div.dbox');

		var div_title=$(deal).find('.product-name').text();

		chrome.storage.local.get({'deals_reminders':[],},function(item){
			var i=0;

			var temp_arr=item.deals_reminders
			var temp_arr_1=[];

			console.log('temp array');
			console.log(temp_arr);

			for(i=0;i<temp_arr.length;i++){
				if(temp_arr[i].title!=div_title){
					temp_arr_1.push(temp_arr[i]);
				}
			}
			console.log('temp array after push');
			console.log(temp_arr_1);
			chrome.storage.local.set({'deals_reminders':temp_arr_1},function(e){
				console.log('saved reminder');
				$(deal).remove();
			});

		});

	});


	document.addEventListener('remind_me',function(e){
		console.log('from makkhi');
		console.log(e.detail);

		chrome.storage.local.get({'deals_reminders':[],},function(item){
				var i=0;
				var deal_exist=false;

				temp_arr=item.deals_reminders
				console.log('temp array');
				console.log(temp_arr);
				if(temp_arr.length>=50){
					// display message 
					$.toast({'text':'could not add more than 50 reminders','hideAfter':false,'position': 'bottom-right'});
					return;
				}
				for(i=0;i<temp_arr.length;i++){
					if(temp_arr[i].title==e.detail.title){
						deal_exist=true;
						break;
					}
				}
				console.log(deal_exist);
				if(!deal_exist){
					e.detail.notified=false;
					temp_arr.push(e.detail);	
				}
				console.log('temp array after push');
				console.log(temp_arr);
				chrome.storage.local.set({'deals_reminders':temp_arr},function(e){
					console.log('saved reminder');
				});

		});


	});


}


// if (window.location.hostname == 'www.tatacliq.com') {


// 	var tc_link=window.location.href;

// 	window.location.href.match(/\/p-mp\d+/g)

// 	if(tc_link.match(/\/p-mp\d+/g)){
// 		console.log('tc product page found');

// 		prod_deets.prod_title=$('h1.product-name').text();

// 		prod_deets.prod_categ=$.trim($('.breadcrumbs.wrapper li:eq(-2)').text());

// 		// prod_deets.prod_price=parseInt($.trim($('.product-detail .price .sale').text()).slice(1));

// 		if(!prod_deets.prod_price){
// 			price=parseInt($.trim($('.product-detail .price .old').text()).slice(1));
// 		}

// 		prod_deets.prod_bracktitle=prod_deets.prod_title;
// 		prod_deets.prod_fulltitle=prod_deets.prod_title;
// 		prod_deets.prod_title_raw=prod_deets.prod_title;

// 			prod_deets.prod_categ_alt='';

// 			 $('.breadcrumbs.wrapper li').map(function (){
// 				if($.trim($(this).text()) === $.trim($('.breadcrumbs.wrapper li:eq(-1)').text())){
// 					return;
// 				}

// 				prod_deets.prod_categ_alt= prod_deets.prod_categ_alt+$.trim($(this).text())+' ';

// 			});

// 		prod_deets.prod_categ_alt=$.trim(prod_deets.prod_categ_alt);

// 		prod_deets.prod_price=parseInt($.trim($('.product-detail .price .sale').text()).slice(1));

// 		prod_deets.prod_price= parseInt($("input#product_list_price").attr('value'));


// 		if(!prod_deets.prod_price){
// 			prod_deets.prod_price=parseInt($.trim($('.product-detail .price .old').text()).slice(1));
// 		}

// 		prod_deets.prod_site='tc';

// 		prod_deets.prod_srch=prod_deets.prod_title;

// 		prod_deets.product_id=window.location.href.match(/\/p-mp\d+/g)[0].slice(5);

// 		if($(".zoomWindowContainer div").length>0){
// 			prod_deets.prod_img=$(".zoomWindowContainer div").css("background-image").replace('url(','').replace(')','').replace(/\"/gi, "");	
// 		}

// 		if(!prod_deets.prod_img){
// 			prod_deets.prod_img = $(".productImagePrimaryLink img").attr('src');
// 		}
		
// 		if( prod_deets.prod_img &&  !prod_deets.prod_img.startsWith('http')){
// 			prod_deets.prod_img='https://'+prod_deets.prod_img;			
// 		}

// 		var breadcrumb_list = $(".breadcrumbs a");
// 		var crumbs = ""
// 		for(i=0; i<breadcrumb_list.length;i++){
// 			crumbs += $.trim($(breadcrumb_list[i]).text());
// 			crumbs += "_";
// 		}
// 		if(crumbs){
// 			crumbs = crumbs.slice(0,-1);
// 		}
// 		crumbs = crumbs?crumbs:"";

// 		prod_deets.prod_categ_alt = crumbs;
// 		if(crumbs){
// 			prod_deets.prod_categ = crumbs.split('_')[crumbs.split('_').length-1];
// 		}


// 		// insertTag(false);

// 		// checkUUID();

// 		// $('#'+whisperbox).css('visibility','visible');
// 		// wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);
// 		insert_main_container();


// 	}

// }

if(window.location.hostname == "www.tatacliq.com"){
	if(window.location.href.match(/\/p-mp\d+/g)){
		// product page
		tc_pp_task();
	}


	var tc_pp_task_timer = "";

	function tc_pp_task(){
		console.log("doing tc pp task");
		prod_deets.prod_site = "tc";
		if($(".fMO6mN8qLtqRumW90vzk4 h1").length>0){
			console.log("found title for tc pp");
			console.log($(".fMO6mN8qLtqRumW90vzk4 h1").text());
			prod_deets.prod_title = $(".fMO6mN8qLtqRumW90vzk4 h1").text();
		}else{
			tc_pp_task_timer = setTimeout(tc_pp_task,2000);
			console.log("checking after some time");
			return;
		}
		prod_deets.prod_categ="";

		if($(".fMO6mN8qLtqRumW90vzk4 h1").length>0){
			prod_deets.prod_title = $(".fMO6mN8qLtqRumW90vzk4 h1").text();
		}

		if($("._3BuuEa4DZJe-0OCEQmi_K_").length>0){
			prod_deets.prod_price=parseInt($.trim($("._3BuuEa4DZJe-0OCEQmi_K_").text().replace("₹","")));
		}
		prod_deets.prod_categ_alt='';
		prod_deets.prod_srch=prod_deets.prod_title;
		prod_deets.product_id=window.location.href.match(/\/p-mp\d+/g)[0].slice(5);

		prod_deets.prod_img = "";

		if($("._48Yq7ey7AGWA2TfKuT6h2 img.rnVlQIG2OU_zvETUcW0TW").length>0){
			prod_deets.prod_img = $("._48Yq7ey7AGWA2TfKuT6h2 img.rnVlQIG2OU_zvETUcW0TW").attr("src");
		}
		update_data_for_spa();
	}
	var old_url = window.location.href;
	var observer = new MutationObserver(function(){
		console.log("")
		if(old_url != window.location.href  ){
			console.log("new page detected");
			old_url = window.location.href;
			if(window.location.href.match(/\/p-mp\d+/g)){
				window.clearTimeout(tc_pp_task_timer);
				$('#mc_host').remove();
				tc_pp_task();
			}else{
				$('#mc_host').remove();
			}

			
		}
	});
	observer.observe(document.querySelector("body"), {attributes: true, childList: true, subtree: true});
}



if(window.location.href.match("http://www.shop.gadgetsnow.com/mobiles/")){
	
	prod_deets.prod_site = "gn";

	if(($(".buynowpdp a").text() == "Buy Now") && ($(".productdetails table").length>0)){

		// prod_deets.product_id = $(".main_prod_text #buy_btn").attr('data-item-id');
		prod_deets.prod_title = $("h1[itemprop='name']").text();
		prod_deets.prod_srch = $("h1[itemprop='name']").text();
		prod_deets.prod_title_raw = $("h1[itemprop='name']").text();
		prod_deets.prod_site = "gn";
		prod_deets.prod_categ = "Mobiles";
		prod_deets.prod_img = "https:"+$("meta[property='og:image']").attr("content");
		prod_deets.prod_price = $.trim($("#topproductcolumtwo .offerprice").text().replace('`',"")).replace(",","");
		prod_deets.prod_link = window.location.href;

		update_data_for_spa();

	}

}





if(window.location.href.match('flights.makemytrip.com/makemytrip/search/')){

	console.log('new script for mmt domestic flights');
	prod_deets.prod_site='mmt';
	mmt_domestic_page_url_watcher();

}

var mmt_domestic_page__previous_url='';
function mmt_domestic_page_url_watcher(){
	var current_url =  window.location.href;
	console.log('mmt domestic url watcher');
	if(current_url!=mmt_domestic_page__previous_url && current_url!=mmt_domestic_page__previous_url+"#" && mmt_domestic_page__previous_url!='' ){
		// $.toast('url change detected');
		if(current_url.match('flights.makemytrip.com/makemytrip/search/')){
			// $.toast('calling page parser')
			console.log('calling mmt domestic load checker');
			mmt_domestic_page_load_checker();
		}
	}

	mmt_domestic_page__previous_url=current_url;

	setTimeout(mmt_domestic_page_url_watcher,1000);


}


// if(window.location.href.match('cheapfaresindia.makemytrip.com/international')){
if(window.location.href.match("makemytrip.com/air/search")){
	console.log('found international mmt page');
	prod_deets.prod_site='mmt';
	mmt_int_page_url_watcher();

}

var mmt_int_page_previous_url='';
function mmt_int_page_url_watcher(){
	var current_url =  window.location.href;

	if(current_url!=mmt_int_page_previous_url && current_url!=mmt_int_page_previous_url+"#" && mmt_int_page_previous_url!='' ){
		// $.toast('url change detected');
		if(current_url.match('makemytrip.com/air/search')){
			// $.toast('calling page parser')
			mmt_int_page_load_checker();
		}
	}

	mmt_int_page_previous_url=current_url;

	setTimeout(mmt_int_page_url_watcher,1000);


}



if(window.location.href.match("cheapfaresindia.makemytrip.com/international/")){
	console.log('found international mmt page');
	prod_deets.prod_site='mmt';
	mmt_int_page1_url_watcher();

}

var mmt_int_page1_previous_url='';
function mmt_int_page1_url_watcher(){
	var current_url =  window.location.href;

	if(current_url!=mmt_int_page1_previous_url && current_url!=mmt_int_page1_previous_url+"#" && mmt_int_page1_previous_url!='' ){
		// $.toast('url change detected');
		if(current_url.match('cheapfaresindia.makemytrip.com/international/')){
			// $.toast('calling page parser')
			mmt_int_page1_load_checker();
		}
	}

	mmt_int_page1_previous_url=current_url;

	setTimeout(mmt_int_page1_url_watcher,1000);


}



if(window.location.href.match('cleartrip.com')){
	prod_deets.prod_site='ct';
	console.log('dom page url watcher');
	ct_domestic_page_url_watcher();

}



var ct_domestic_page__previous_url='';
var ct_domestic_page_url_watcher_timer;
function ct_domestic_page_url_watcher(){
	var current_url =  window.location.href;

	if(current_url!=ct_domestic_page__previous_url && current_url!=ct_domestic_page__previous_url+"#" && ct_domestic_page__previous_url!='' ){

		// $.toast('url change detected');
		if(current_url.match('cleartrip.com/flights/results?')){
			console.log(ct_domestic_page__previous_url);
			console.log(current_url);
			// $.toast('calling domestic page load checker');
			console.log('calling domestic page load checker');

			clearTimeout(ct_domestic_page_url_watcher_timer);
			ct_domestic_page_load_checker();
		}
		else if(current_url.match('cleartrip.com/flights/international/results?')){
			// $.toast('calling international page parser');
			console.log('calling international page parser');

			clearTimeout(ct_domestic_page_url_watcher_timer);
			ct_international_page_load_checker();
		}

		else{
			remove_makkhi_tag();
		} 
	}

	ct_domestic_page__previous_url=current_url;

	ct_domestic_page_url_watcher_timer=setTimeout(ct_domestic_page_url_watcher,1000);


}

if(window.location.href.match('www.easemytrip.in/EaseAir/searchmidscreen.aspx')||window.location.href.match('www.easemytrip.in/EaseAir/FlightListingRoundTrip.aspx')){
	prod_deets.prod_site='emt';
	//emt domestic page
	emt_domestic_page_load_checker();
	
}


function emt_domestic_page_load_checker(){
	if($('#divprogress').css('display')=='none' &&($('.rupe_txt:eq(0)').text()!='' || $('.rht_main_con2 .rupe_txt:eq(0)').text()!='' )){
		var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});

		var travel_deets={};
		travel_deets.isInternational=false;

		if(url_params['OneWay']=='true'){
			travel_deets.isReturn=false;	
		}
		else{
			travel_deets.isReturn=true;	
		}
		
		travel_deets.fromCityCode=url_params['fromCity'].slice(0,3);
		travel_deets.fromCityName=url_params['fromCity'].slice(0,3);

		travel_deets.toCityCode=url_params['toCity'].slice(0,3);

		travel_deets.nAdults=url_params['adultNum'];
		travel_deets.nChilds =url_params['childNum'];
		travel_deets.nInfants=url_params['infantNum'];

		travel_deets.depatureDate=monthNames[parseInt(url_params['fromDt'].split('/')[1])-1]+' '+url_params['fromDt'].split('/')[0]+' '+url_params['fromDt'].split('/')[2];

		if(travel_deets.isReturn){
			travel_deets.returnDate=monthNames[parseInt(url_params['toDt'].split('/')[1])-1]+' '+url_params['toDt'].split('/')[0]+' '+url_params['toDt'].split('/')[2];
			travel_deets.price=(parseInt($('.rht_main_con2 .rupe_txt:eq(0)').text()) + parseInt($('.rht_main_con3 .rupe_txt:eq(0)').text()))+'';
		}
		else{
			travel_deets.price=parseInt($('.rupe_txt:eq(0)').text())+'';	
		}

		journey_deets=travel_deets;
		get_flights_data(travel_deets);

	}
	else{
		setTimeout(emt_domestic_page_load_checker,1000);
	}
}

if(window.location.href.match('www.easemytrip.in/')){
	var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{})



	// if(url_params['utm_source']=='m_open'){
	// 	$('body').append('"<div id=\"divLoading\" style=\"margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(102, 102, 102); z-index: 30001; opacity: 0.8;\"><p style=\"position: absolute; color: White; top: 50%; left: 45%;\">Loading, please wait...<\/p><\/div>"');
	// 	console.log('easemy trip redirected page');

	// 	console.log('appending to head');
	// 	$('head').append("<script>document.addEventListener('mcf_emt_communique', function(e){$.ajax({type: \"POST\", url: \"http:\/\/www.easemytrip.in\/AirService.asmx\/Req_Start\", data: JSON.stringify({\"searchParameters_\":\"_searchKey=\"+e.detail.url_end_part}), success: function(data){window.location=(e.detail.url_start_part + (data['d']-1) + e.detail.url_end_part); console.log(e.detail.url_start_part + data['d'] + e.detail.url_end_part);}, dataType: 'json', contentType: 'application\/json'});});<\/script>");

	// 	var url_start_part,url_end_part;
	// 	if( url_params['int']=='false' && url_params['OneWay']=='true'){
	// 	    //domestic oneway
	// 	   url_start_part="http://www.easemytrip.in/EaseAir/searchmidscreen.aspx?_searchKey="; 
	// 	   url_end_part="&domType=Any&OneWay=true&fromCity="+url_params['fromCity']+"&toCity="+url_params['toCity']+"&fromDt="+url_params['fromDt']+"&toDt=&adultNum="+url_params['adultNum']+"&childNum="+url_params['childNum']+"&infantNum="+url_params['infantNum']+"&selClass=&selAirLine=Any";

	// 	}

	// 	if( url_params['int']=='false' && url_params['OneWay']=='false'){
	// 	    //domestic return
	// 	   url_start_part="http://www.easemytrip.in/EaseAir/FlightListingRoundTrip.aspx?_searchKey"; 
	// 	   url_end_part="&domType=Any&OneWay=false&fromCity="+url_params['fromCity']+"&toCity="+url_params['toCity']+"&fromDt="+url_params['fromDt']+"&toDt="+url_params['toDt']+"&adultNum="+url_params['adultNum']+"&childNum="+url_params['childNum']+"&infantNum="+url_params['infantNum']+"&selClass=&selAirLine=Any";

	// 	}

	// 	if(url_params['int']=='true' &&  url_params['OneWay']=='true'){
	// 	    //int oneway
	// 	   url_start_part="http://www.easemytrip.in/EaseAir/InternationalFlightListing.aspx?_searchKey="; 
	// 	   url_end_part="&domType=Any&OneWay=true&fromCity="+url_params['fromCity']+"&toCity="+url_params['toCity']+"&fromDt="+url_params['fromDt']+"&toDt=&adultNum="+url_params['adultNum']+"&childNum="+url_params['childNum']+"&infantNum="+url_params['infantNum']+"&selClass=&selAirLine=Any";

	// 	}

	// 	if(url_params['int']=='true' && url_params['OneWay']=='false'){
	// 	    //int roundtrip
	// 	   url_start_part="http://www.easemytrip.in/EaseAir/InternationalFlightListing.aspx?_searchKey="; 
	// 	   url_end_part="&domType=Any&OneWay=false&fromCity="+url_params['fromCity']+"&toCity="+url_params['toCity']+"&fromDt="+url_params['fromDt']+"&toDt="+url_params['toDt']+"&adultNum="+url_params['adultNum']+"&childNum="+url_params['childNum']+"&infantNum="+url_params['infantNum']+"&selClass=&selAirLine=Any";

	// 	}
	// 	console.log('displatching event');
	// 	document.dispatchEvent(new CustomEvent('mcf_emt_communique', {
	// 	    detail: {
	// 	        'url_start_part':url_start_part,
	// 	        'url_end_part':url_end_part
	// 	    }
	// 	}));

	// }

	if(url_params['utm_source']=='m_open' && !window.location.href.match('.aspx') )
	{	
		console.log('found makkhi rdirect page');

		console.log(url_params['utm_source']);

		$('body').append('"<div id=\"divLoading\" style=\"margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(102, 102, 102); z-index: 30001; opacity: 0.8;\"><p style=\"position: absolute; color: White; top: 50%; left: 45%;\">Loading, please wait...<\/p><\/div>"');
		
		if(url_params['OneWay']=='true'){
			// $('#JournyType').val("Oneway");

			$('#SearchType').val("Oneway");

			$('input[placeholder="Type Departure City"]').val(url_params['fromCity']+'-,()');
			$('input[placeholder="Type Destination City"]').val(url_params['toCity']+'-,()');

			$('#ddate').val(url_params['fromDt']);

			$('#optAdult').val(url_params['adultNum']);
			$('#optChild').val(url_params['childNum']);
			$('#optInfant').val(url_params['infantNum']);
		}
		else{
			// $('#JournyType').val("Return");
			$('#SearchType').val("Return");

			$('input[placeholder="Type Departure City"]').val(url_params['fromCity']+'-,()');
			$('input[placeholder="Type Destination City"]').val(url_params['toCity']+'-,()');

			$('#ddate').val(url_params['fromDt']);
			
			$('#rdate').click();
			$('#rdate').val(url_params['toDt']);

			$('#optAdult').val(url_params['adultNum']);
			$('#optChild').val(url_params['childNum']);
			$('#optInfant').val(url_params['infantNum']);

		}

		// if(url_params['int']=='true'){
		// 	 $('#JournyType').val("Int");
		// }
		// else{
		// 	$('#JournyType').val("Dom");
		// }
		history.pushState({}, null, 'www.easemytrip.in');
		$('.sarch-but').click();	
	}

}


if(window.location.href.match('www.easemytrip.in/EaseAir/InternationalFlightListing.aspx')){
	prod_deets.prod_site='emt';
	//emt domestic page
	console.log(" calling emt int load checker");
	emt_int_page_load_checker();
	
}


function emt_int_page_load_checker(){
	console.log("emt int load checker");
	if($('#divprogress').css('display')=='none' && $('.rupe_txt:eq(0)').text()!=''){
		var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});

		var travel_deets={};
		travel_deets.isInternational=true;

		if(url_params['OneWay']=='true'){
			travel_deets.isReturn=false;	
		}
		else{
			travel_deets.isReturn=true;	
		}
		
		travel_deets.fromCityCode=url_params['fromCity'].slice(0,3);
		travel_deets.fromCityName=url_params['fromCity'].slice(0,3);

		travel_deets.toCityCode=url_params['toCity'].slice(0,3);

		travel_deets.nAdults=url_params['adultNum'];
		travel_deets.nChilds =url_params['childNum'];
		travel_deets.nInfants=url_params['infantNum'];

		travel_deets.depatureDate=monthNames[parseInt(url_params['fromDt'].split('/')[1])-1]+' '+url_params['fromDt'].split('/')[0]+' '+url_params['fromDt'].split('/')[2];
		console.log('emt int');
		if(travel_deets.isReturn){
			travel_deets.returnDate=monthNames[parseInt(url_params['toDt'].split('/')[1])-1]+' '+url_params['toDt'].split('/')[0]+' '+url_params['toDt'].split('/')[2];
			// travel_deets.price=(parseInt($('.rht_main_con2 .rupe_txt:eq(0)').text()) + parseInt($('.rht_main_con3 .rupe_txt:eq(0)').text()))+'';
			travel_deets.price=parseInt($('.rupe_txt:eq(0)').text())+'';	
			console.log($('.rupe_txt:eq(0)').text());
		}
		else{
			console.log($('.rupe_txt:eq(0)').text());
			travel_deets.price=parseInt($('.rupe_txt:eq(0)').text())+'';	
		}

		journey_deets=travel_deets;
		get_flights_data(travel_deets);

	}
	else{
		setTimeout(emt_int_page_load_checker,1000);
	}
}


if(window.location.href.match('www.goibibo.com')){
	prod_deets.prod_site='gb';
	goibibo_url_watcher();
}


var gb_page_previous_url='';
var gb_page_url_watcher_timer;
function goibibo_url_watcher(){
	var current_url =  window.location.href;

	if(current_url!=gb_page_previous_url && current_url!=gb_page_previous_url+"#" && gb_page_previous_url!='' ){

		// $.toast('url change detected');
		if(current_url.match('goibibo.com/#flight-searchresult/') || current_url.match('goibibo.com/flights/#flight-searchresult/')){
			//flights results page
			console.log("flights page detected");
			clearTimeout(gb_page_url_watcher_timer);
			gb_page_load_checker();
		}else if(current_url.match('goibibo.com/bus/#bus-')){
			//bus page
			console.log("bus page detected");
			clearTimeout(gb_page_url_watcher_timer);
			gb_bus_page_load_checker();
		}
		else{
			// remove_makkhi_tag();
			// do something to hide the makkhi box
			console.log("removing makkhi box as url change detected");
			$('#mc_main_host').remove();
			
		} 
	}

	gb_page_previous_url=current_url;

	gb_page_url_watcher_timer=setTimeout(goibibo_url_watcher,1000);


}




var gb_page_load_checker_timer;
function gb_page_load_checker(){
    
    if( ($("#show_progress").css("display")=="none") ){

        if(gb_page_load_checker_timer){
            clearTimeout(gb_page_load_checker_timer);
        }
        gb_page_previous_url=window.location.href;
        gb_page_url_watcher_timer=setTimeout(goibibo_url_watcher,1000);
       	
       	gb_page_parser();
       // cleartrip_international_page_parser();
        return;
    }
    else{
        gb_page_load_checker_timer=setTimeout(gb_page_load_checker,1000);
    }

}


function gb_page_parser() {
   
    var travel_deets={};
	
	var deets_array = (window.location.href).split('#air-')[1].split('-');

	console.log(deets_array);

	travel_deets.fromCityCode = deets_array[0];
	travel_deets.toCityCode = deets_array[1];

	if(deets_array[3]!=''){
		travel_deets.isReturn=true;
	}
	else{
		travel_deets.isReturn=false;	
	}
	console.log('gb month');
    console.log(parseInt(deets_array[2].slice(4,6)));
	travel_deets.depatureDate=monthNames[parseInt(deets_array[2].slice(4,6))-1]+' '+deets_array[2].slice(6)+' '+deets_array[2].slice(0,4);

	if(travel_deets.isReturn){
		travel_deets.returnDate=monthNames[parseInt(deets_array[3].slice(4,6))-1]+' '+deets_array[3].slice(6)+' '+deets_array[3].slice(0,4);		
	}

	travel_deets.nAdults=parseInt(deets_array[4]);
	travel_deets.nChilds = parseInt(deets_array[5]);
	travel_deets.nInfants = parseInt(deets_array[6]);

	if (window.location.href.match("from=international-flights")) {
		travel_deets.isInternational=true;	
	}
	else{
		travel_deets.isInternational=false;
	}

	if(!travel_deets.isReturn && !travel_deets.isInternational){
		travel_deets.price = parseInt($("[name='normalfare']:eq(0)").text().replace(',',''));
	}

	if(travel_deets.isReturn && !travel_deets.isInternational){
		travel_deets.price = parseInt($("div[name='FlightPrice'] span:eq(0)").text().replace(",",""));
	}

	if(!travel_deets.isReturn && travel_deets.isInternational){
		travel_deets.price = parseInt($("[name='normalfare']:eq(0)").text().replace(',',''));
	}


	if(travel_deets.isReturn && travel_deets.isInternational){
		travel_deets.price = parseInt($("[name='normalfare']:eq(0)").text().replace(',',''));
	}


    // travel_deets.fromCityCode=fromCityCode;
    // travel_deets.fromCityName=fromCityName;
    // travel_deets.toCityCode=toCityCode;
    // travel_deets.toCityName=toCityName;
    // travel_deets.isReturn=isReturn;
    // travel_deets.depatureDate=depatureDate;
    // travel_deets.returnDate=returnDate;
    // travel_deets.nAdults=nAdults;
    // travel_deets.nChilds=nChilds;
    // travel_deets.nInfants=nInfants;
    // travel_deets.isInternational=false;

    console.log('travel deets');

    console.log(travel_deets);

    journey_deets=travel_deets;

    get_flights_data(travel_deets);


}


if(window.location.href.match("in.musafir.com/Trip/Flights.aspx")){
	prod_deets.prod_site = "mf";
	mf_url_watcher();
}



var mf_page_previous_url='';
var mf_page_url_watcher_timer;
function mf_url_watcher(){
	var current_url =  window.location.href;

	if(current_url!=mf_page_previous_url &&current_url!=mf_page_previous_url+'#' && mf_page_previous_url!='' ) {

		// $.toast('url change detected');
		if(current_url.match("in.musafir.com/Trip/Flights.aspx")){

			clearTimeout(mf_page_url_watcher_timer);
			mf_page_load_checker();
		}
		else{
			remove_makkhi_tag();
		} 
	}

	mf_page_previous_url=current_url;

	mf_page_url_watcher_timer=setTimeout(mf_url_watcher,1000);


}


var mf_page_load_checker_timer;
function mf_page_load_checker(){
    
    if( ($(".loader").length == 0) ){

        if(mf_page_load_checker_timer){
            clearTimeout(mf_page_load_checker_timer);
        }
        mf_page_previous_url=window.location.href;
        mf_page_url_watcher_timer=setTimeout(mf_url_watcher,1000);
       	
       	mf_page_parser();
       // cleartrip_international_page_parser();
        return;
    }
    else{
        mf_page_load_checker_timer=setTimeout(mf_page_load_checker,1000);
    }

}

function mf_page_parser(){

	var travel_deets={};

	var url_params=window.location.hash.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});

    travel_deets.fromCityCode=url_params["o"];
    travel_deets.fromCityName=url_params["o"];

    travel_deets.toCityCode=url_params["d"];
    travel_deets.toCityName=url_params["d"];

    if(indian_cities_codes.indexOf(travel_deets.fromCityCode)==-1 || indian_cities_codes.indexOf(travel_deets.toCityCode)==-1){
		travel_deets.isInternational=true;    	
    }
    else{
    	travel_deets.isInternational=false;
    }

    travel_deets.isReturn=url_params["ed"] ? true : false;
    

    travel_deets.depatureDate= monthNames[url_params["sd"].split("/")[1]-1] + ' ' + url_params["sd"].split("/")[0] + ' ' + "20"+url_params["sd"].split("/")[2]; 

    if(url_params["ed"]){
		travel_deets.returnDate = monthNames[url_params["ed"].split("/")[1]-1] + ' ' + url_params["ed"].split("/")[0] + ' ' + "20"+ url_params["ed"].split("/")[2]; 
    }

    if(url_params["ad"]){
    	travel_deets.nAdults = url_params["ad"];
    }
    else{
    	travel_deets.nAdults = '0';	
    }

    if(url_params["ch"]){
    	travel_deets.nChilds = url_params["ch"];
    }
    else{
    	travel_deets.nChilds = '0';	
    }

    if(url_params["in"]){
    	travel_deets.nInfants = url_params["in"];
    }
    else{
    	travel_deets.nInfants = '0';	
    }
    travel_deets.price = $("p.price:eq(0)").text().replace("Rs","").replace(",","");

    journey_deets = travel_deets;

    get_flights_data(travel_deets);
    
}

// if(window.location.href.match("127.0.0.1:8887/index.html")){
// 	var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
// 	var err_id = url_params["eid"];
// 	chrome.storage.local.get({"error_deets":""},function(response){
// 		console.log(response)
// 		if(response.error_deets!=""){
// 			if(response.error_deets.id == err_id){
// 				console.log("error details found");
// 				$("#report_text").val(JSON.stringify(response.error_deets.deets));
// 			}
// 			else{

// 			}
// 		}
// 	})
// }


if(window.location.href.match("makkhichoose.com/login") || window.location.href.match("ref.makkhichooseweb.appspot.com")){
	$("#intruct-1").addClass("strike");
	chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
	        var id_deets={};
	        id_deets.gcm_id="";
	        id_deets.user_id="";
	        id_deets.emmy="";
	        id_deets.sd_id="";
	        id_deets.gcm_id=response.status.gcm_id;
	        id_deets.user_id=response.status.user_id;
	        id_deets.emmy=response.status.emmy;
	        if(id_deets.user_id){
	        	$("#log-ext-uid").attr("value",id_deets.user_id);
	        }else{
	        	$("#log-ext-uid").attr("value","not_found");
	        }
	 });
}

if(window.location.href.match("makkhichoose.com")){

	chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
	        var id_deets={};
	        id_deets.gcm_id="";
	        id_deets.user_id="";
	        id_deets.emmy="";
	        id_deets.sd_id="";
	        id_deets.gcm_id=response.status.gcm_id;
	        id_deets.user_id=response.status.user_id;
	        id_deets.emmy=response.status.emmy;
	        var user_id = "";
	        if(id_deets.user_id){
	        	user_id = id_deets.user_id;
	        }else{
	        	user_id = id_deets.user_id;
	        }

	        var ext_deets_div = document.createElement("div");
	        ext_deets_div.setAttribute("data-user-id",user_id);
	        ext_deets_div.setAttribute("data-ext-id",chrome.runtime.id);
	        ext_deets_div.setAttribute("data-gcm-id",id_deets.gcm_id);
	        ext_deets_div.setAttribute("id","ext_deets");
	        document.body.appendChild(ext_deets_div);
	 });

}

disp_may_daily_notifs();