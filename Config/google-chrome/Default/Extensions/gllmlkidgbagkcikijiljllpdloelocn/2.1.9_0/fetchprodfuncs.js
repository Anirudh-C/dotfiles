
var fkSuccess = function (server_prod_deets_var, fetch_url,chk_quality=false,back_end_response_deets={}) {

return function(response, textStatus,sent_req) {

	var dyn_prod_deets ={
		prod_title:'',
		prod_bracktitle:'',
		prod_fulltitle:'',
		prod_categ:'',
		prod_price: -1,
		prod_img: '',
		orig_prod_price: prod_deets.prod_price,
		prod_link:fetch_url,
		prod_site:'fk',
		bundle_key: prod_deets.bundle_key,
		call_type: prod_deets.call_type,
		prod_avail: false
	};
	    

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	
// 	resp_elem = $('<div/>').append($.parseHTML(response));

	

	
	
	


// 	if ((resp_elem.find('div.no_results').length > 0) || (resp_elem.find('div.noResults').length > 0)) {

// 		if(chk_quality && back_end_response_deets.prod_deets_match_score>1.8 ){ 
// 			//console.log("no search results found ... but doing some quality control in fk");
// 			//nothing found in search results from plugin
// 			if (parseFloat(back_end_response_deets.sd)>delayUs[back_end_response_deets.website]){

// 				//console.log("prices are out of date");
// 				fetchPSimData(back_end_response_deets,back_end_response_deets.website);
// 				//console.log("send server score");
// 				// send server score 
// 				disp_analytics_send_flags['back_search_fk']='ok';
// 				return;
// 			}

// 			prodlink_txt=back_end_response_deets.title;
// 			price_str=back_end_response_deets.prod_price;
// 			dyn_prod_img=back_end_response_deets.img_src;
// 			prodlink_href=back_end_response_deets.link;

// 			//console.log("server has better score");

// 			//send sever score

// 		}
// 		else{
// 			if(chk_quality){
// 				//prodlink_txt=back_end_response_deets.title;
// 				prodlink_txt=prod_deets.prod_title;
// 			}
// 			else{
// 				prodlink_txt=prod_deets.prod_title;
// 			}

// 		prodlink_href = fetch_url;
// 		//repl_strng='Flipkart (Not Available): <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
// 		// repl_strng='<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Flipkart</span><span class="'+portalmsg+'">Search</span></a>'
// 		 repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"' + 'target="_blank"'+'>\
// 										<div class="row-top">\
// 											<span class="'+portalname+'">' + "Flipkart" + '</span>\
// 										</div>\
// 										<div class="row-btm">\
// 											<img '+'style="opacity: 0.4;"'+' src="' + housefly + '"/>\
// 											<div class="row-btm-title">' + prodlink_txt + '</div>\
// 											<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
// 										</div>\
// 									  </a>';
// 		insertPrice(repl_strng,-1);
// 		disp_analytics_send_flags['back_search_fk']='ok';
// 		dyn_prod_deets.prod_link=fetch_url;
// 		dyn_prod_deets.prod_avail=false;
// 		sendDynData(dyn_prod_deets);
// 		return true;
// 	}
		
// 	} //if


// 	if (resp_elem.find('#search_results').length>0) {


// 		price_hold_all = resp_elem.find('#search_results div[class*="fk-srch-item"]:eq(0) b[class*="final_price"]').contents();
// 		price_str = textFind(price_hold_all);

// 		prodlink_href = resp_elem.find('#search_results div[class*="fk-srch-item"]:eq(0) a[class*="fk-srch-title-txt"]').attr('href');

// 		prodlink_txt = resp_elem.find('#search_results div[class*="fk-srch-item"]:eq(0) div[class*="fk-sitem-image-section"] img').attr('title');

// 	} //if
	
// 	else if (resp_elem.find('#products div.product-unit').length>0) {


// 		price_hold_all = resp_elem.find('#products div.product-unit:eq(0) div.pu-final span[class*="fk-bold"]').contents();
// 		price_str = textFind(price_hold_all);

// 		prodlink_href = resp_elem.find('#products div.product-unit:eq(0) div.pu-title a.fk-display-block').attr('href');

// 		prodlink_txt = resp_elem.find('#products div.product-unit:eq(0) div.pu-title a.fk-display-block').attr('title');

// 		dyn_prod_img = resp_elem.find('#products div.product-unit:eq(0) a.pu-image img').attr('data-src');
// 		// console.log(resp_elem.find('#products div.product-unit:eq(0)')[0].outerHTML);


// 	} //elseif


// 	else if (resp_elem.find('#products div.browse-product').length>0) {

// 		price_hold_all = resp_elem.find('#products div.browse-product:eq(0) div.pu-final').contents();

// 		price_str = textFind(price_hold_all);

// 		prodlink_href = resp_elem.find('#products div.browse-product:eq(0) div.lu-title-wrapper > a.lu-title').attr('href');

// 		prodlink_txt = textFindAll(resp_elem.find('#products div.browse-product:eq(0) div.lu-title-wrapper > a.lu-title').contents());



// 	} //elseif

// 	else if (resp_elem.find('#all_search_page').length>0)  {
		
// 			price_hold_all = resp_elem.find('#all_search_page div[class*="product"]:eq(0) span[class*="final_price"]').contents();
// 			price_str = textFind(price_hold_all);
	
// 			prodlink_href = resp_elem.find('#all_search_page div[class*="product"]:eq(0) a[class*="fk-anchor-link"]').attr('href');

// 			prodlink_txt = resp_elem.find('#all_search_page div[class*="product"]:eq(0) div[class*="fk-product-thumb"] img').attr('title');

// 	} //elseif

// 	else {
		

// //checking whether it is a product page or not 
// // if it is extract info 
// 		if(resp_elem.find("link[rel='canonical']").attr('href').match('/p/')){


// 		var chk_price = resp_elem.find(cssLocs.fk.price).text()


// 		if (chk_price=='') {
// 			price_str = cleanPrice(resp_elem.find(cssLocs.fk.price_alt).text());
// 		}
// 		else {
// 			price_str = cleanPrice(chk_price);
// 		}

// 		// 'http://www.flipkart.com/makkhichoose-result/p/book?pid='

// 		var pid=resp_elem.find('input.btn-buy-now.btn-big.current[data-pid]').attr('data-pid');

// 		if(!pid){
// 			pid=resp_elem.find(cssLocs.fk.pid).attr('data-pid');
// 		}

// 		//prodlink_href =resp_elem.find("link[rel='canonical']").attr('href');

// 		prodlink_href='http://www.flipkart.com/makkhichoose-result/p/book?pid='+pid;

// 		prodlink_txt = cleanTitle(resp_elem.find(cssLocs.fk.title).text());

// 		dyn_prod_img = $.trim(resp_elem.find(cssLocs.fk.prod_img).attr('data-src'));
// 		if(!dyn_prod_img){
// 			dyn_prod_img = $.trim(resp_elem.find(cssLocs.fk.prod_img).attr('src'));
// 		}

// 		}//if

// 	}//else



// //fk
// //search results available.
// 	if(chk_quality){
// 		//console.log("doing check quality in fk");

// 		fetched_page_title_score=make_match_score(prod_deets.prod_title,prodlink_txt);

// 		if((fetched_page_title_score>1.8)||(back_end_response_deets.prod_deets_match_score>1.8)){

		

// 		if(fetched_page_title_score>back_end_response_deets.prod_deets_match_score){

// 			//do something fetched_page_title_score is better

// 			//send score of backend_response_prod_deets, fetched_page_prod_deets  and fetched_page_prod_deets to backend

// 			// no need to update the details to be displayed
// 			//console.log("fetched page has better score");
// 			//console.log("have to send server sccore and deets");
// 		}
// 		else {
// 			//do something backend_response_title score is better

// 			//update deets to be displayed 

// 			//send score of backend_response_prod_deets to backend


// 			if (parseFloat(back_end_response_deets.sd)>delayUs[back_end_response_deets.website]){

// 				//console.log("prices are out of date");
// 				fetchPSimData(back_end_response_deets,back_end_response_deets.website);
// 				//console.log("send server score");
// 				// send server score 
// 				disp_analytics_send_flags['back_search_fk']='ok';
// 				return true;
// 			}
// 			//console.log("making results visible");
// 			prodlink_txt=back_end_response_deets.title;
// 			price_str=back_end_response_deets.prod_price;
// 			dyn_prod_img=back_end_response_deets.img_src;
// 			prodlink_href=back_end_response_deets.link;

// 			//console.log("server has better score");

// 			//send sever score


// 		}
// 	}
// 	else{
// 		prodlink_txt=back_end_response_deets.title;
// 		prodlink_txt=prod_deets.prod_title;
// 		prodlink_href = fetch_url;
// 		//repl_strng='Flipkart (Not Available): <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
// 		// repl_strng='<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Flipkart</span><span class="'+portalmsg+'">Search</span></a>'
// 		repl_strng = repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"' + 'target="_blank"'+'>\
// 										<div class="row-top">\
// 											<span class="'+portalname+'">' + "Flipkart" + '</span>\
// 										</div>\
// 										<div class="row-btm">\
// 											<img '+'style="opacity: 0.4;"'+' src="' + housefly + '"/>\
// 											<div class="row-btm-title">' + prodlink_txt + '</div>\
// 											<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
// 										</div>\
// 									  </a>';
// 		insertPrice(repl_strng,-1);
// 		disp_analytics_send_flags['back_search_fk']='ok';
// 		dyn_prod_deets.prod_link=fetch_url;
// 		dyn_prod_deets.prod_avail=false;
// 		sendDynData(dyn_prod_deets);
// 		return true;
// 	}

// 	}





// 	//repl_strng='Flipkart: Rs. '+price_str+' <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
// 	//repl_strng='<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">Flipkart</span><span class="'+rupees+'">&#8377; '+ price_str+'</span></a>'
// 	var difference_str = get_pricediff_result_row(Number(price_str), Number(prod_deets.prod_price));
// 	var repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '">\
// 					<div class="row-top">\
// 						<span class="'+portalname+'">' + portalname + '</span>\
// 						<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' + price_str + '</span>\
// 					</div>\
// 					<div class="row-btm">\
// 						<img src="' + dyn_prod_img + '"/>\
// 						<div class="row-btm-title">' + prodlink_txt + '</div>' + difference_str +
// 					'</div>\
// 				  </a>';

// 	dyn_prod_deets.prod_title=prodlink_txt;
// 	dyn_prod_deets.prod_price=price_str;
// 	dyn_prod_deets.prod_img = dyn_prod_img;
// 	dyn_prod_deets.prod_link=prodlink_href;
// 	dyn_prod_deets.prod_avail=true;

// 	console.log(dyn_prod_deets);

// 	//trackDisplayedResults(dyn_prod_deets.prod_link);
// 	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
// 	disp_analytics_send_flags['back_search_fk']='ok';

var prodkeys=Object.keys(response.RESPONSE.product);
//no results for some reason
	if (prodkeys.length<=0) {

		if(chk_quality && back_end_response_deets.prod_deets_match_score>1.8 ){ 
			//console.log("no search results found ... but doing some quality control in fk");
			//nothing found in search results from plugin
			if (parseFloat(back_end_response_deets.sd)>delayUs[back_end_response_deets.website]){

				//console.log("prices are out of date");
				fetchPSimData(back_end_response_deets,back_end_response_deets.website);
				//console.log("send server score");
				// send server score 
				disp_analytics_send_flags['back_search_fk']='ok';
				return;
			}

			prodlink_txt=back_end_response_deets.title;
			price_str=back_end_response_deets.prod_price;
			dyn_prod_img=back_end_response_deets.img_src;
			prodlink_href=back_end_response_deets.link;

			//console.log("server has better score");

			//send sever score

		}
		else{
			if(chk_quality){
				//prodlink_txt=back_end_response_deets.title;
				prodlink_txt=prod_deets.prod_title;
			}
			else{
				prodlink_txt=prod_deets.prod_title;
			}

		prodlink_href = fetch_url;
		//repl_strng='Flipkart (Not Available): <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		// repl_strng='<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Flipkart</span><span class="'+portalmsg+'">Search</span></a>'
		 // repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"' + 'target="_blank"'+'>\
			// 							<div class="row-top">\
			// 								<span class="'+portalname+'">' + "Flipkart" + '</span>\
			// 							</div>\
			// 							<div class="row-btm">\
			// 								<img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
			// 								<div class="row-btm-title">' + prodlink_txt + '</div>\
			// 								<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
			// 							</div>\
			// 						  </a>';
		// insertPrice(repl_strng,-1);
		insert_manual_search_box(make_manual_search_box({"prod_site":"fk","prod_link":fetch_url,"website":"Flipkart","title":prod_deets.prod_title,"img_src":prod_deets.prod_img}))

		disp_analytics_send_flags['back_search_fk']='ok';
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		return true;
	}
		
	} //no results check if


prodlink_txt=response.RESPONSE.product[prodkeys[0]]['mainTitle'];
price_str=response.RESPONSE.product[prodkeys[0]]['sellingPrice'];
dyn_prod_img=response.RESPONSE.product[prodkeys[0]]['productAltImage'];
prodlink_href="http://www.flipkart.com"+response.RESPONSE.product[prodkeys[0]]['productPageUrl'];


//fk
//search results available.
	if(chk_quality){
		//console.log("doing check quality in fk");

		fetched_page_title_score=make_match_score(prod_deets.prod_title,prodlink_txt);

		if((fetched_page_title_score>1.8)||(back_end_response_deets.prod_deets_match_score>1.8)){

		

		if(fetched_page_title_score>back_end_response_deets.prod_deets_match_score){

			//do something fetched_page_title_score is better

			//send score of backend_response_prod_deets, fetched_page_prod_deets  and fetched_page_prod_deets to backend

			// no need to update the details to be displayed
			//console.log("fetched page has better score");
			//console.log("have to send server sccore and deets");
		}
		else {
			//do something backend_response_title score is better

			//update deets to be displayed 

			//send score of backend_response_prod_deets to backend


			if (parseFloat(back_end_response_deets.sd)>delayUs[back_end_response_deets.website]){

				//console.log("prices are out of date");
				fetchPSimData(back_end_response_deets,back_end_response_deets.website);
				//console.log("send server score");
				// send server score 
				disp_analytics_send_flags['back_search_fk']='ok';
				return true;
			}
			//console.log("making results visible");
			prodlink_txt=back_end_response_deets.title;
			price_str=back_end_response_deets.prod_price;
			dyn_prod_img=back_end_response_deets.img_src;
			prodlink_href=back_end_response_deets.link;

			//console.log("server has better score");

			//send sever score


		}
	}
	else{
		prodlink_txt=back_end_response_deets.title;
		prodlink_txt=prod_deets.prod_title;
		prodlink_href = fetch_url;
		//repl_strng='Flipkart (Not Available): <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		// repl_strng='<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Flipkart</span><span class="'+portalmsg+'">Search</span></a>'

		// repl_strng = repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"' + 'target="_blank"'+'>\
		// 								<div class="row-top">\
		// 									<span class="'+portalname+'">' + "Flipkart" + '</span>\
		// 								</div>\
		// 								<div class="row-btm">\
		// 									<img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
		// 									<div class="row-btm-title">' + prodlink_txt + '</div>\
		// 									<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
		// 								</div>\
		// 							  </a>';
		// insertPrice(repl_strng,-1);
		insert_manual_search_box(make_manual_search_box({"prod_site":"fk","prod_link":fetch_url,"website":"Flipkart","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));

		disp_analytics_send_flags['back_search_fk']='ok';
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		// sendDynData(dyn_prod_deets);
		return true;
	}

	}//end of check quality if 

	// var difference_str = get_pricediff_result_row(Number(price_str), Number(prod_deets.prod_price));
	// var repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '">\
	// 				<div class="row-top">\
	// 					<span class="'+portalname+'">' + portalname + '</span>\
	// 					<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' + price_str + '</span>\
	// 				</div>\
	// 				<div class="row-btm">\
	// 					<img src="' + dyn_prod_img + '"/>\
	// 					<div class="row-btm-title">' + prodlink_txt + '</div>' + difference_str +
	// 				'</div>\
	// 			  </a>';

	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_img = dyn_prod_img;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;

	insert_price_result_box(make_results_box({"prod_site":"fk","prod_link":prodlink_href,"website":"Flipkart","title":prodlink_txt,"img_src":dyn_prod_img,"prod_price":parseInt(price_str)},"searchid"));

	console.log(dyn_prod_deets);

	//trackDisplayedResults(dyn_prod_deets.prod_link);
	// insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
	disp_analytics_send_flags['back_search_fk']='ok';
disp_analytics_send_flags['back_search_fk']='ok';	
} //closure

} // fkSuccess



var ipSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {


	var resp_elem, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;

	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ip',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};



	resp_elem = $('<div/>').append($.parseHTML(response));


	if ( (resp_elem.find('#divSearchError').length>0) || ($.trim(resp_elem.find('#ContentPlaceHolder1_lblErrormsg').html())!='') || ($.trim(resp_elem.find('#ContentPlaceHolder1_Errorlbl').html())!='')){
	


		//repl_strng='IndiaPlaza: Not available <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		repl_strng='<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">IndiaPlaza</span><span class="'+portalmsg+'">Search</span></a>'

		insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_ip']='ok';
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;

	}
	else {
		price_str = resp_elem.find('div[id*="ContentPlaceHolder1_repBrowseLst"] div.ourPrice span').html();

		prodlink_href=resp_elem.find('div[id*="ContentPlaceHolder1_repBrowseLst"] div.skuName a[id*="ContentPlaceHolder1_repBrowseLst"]').attr('href')

		prodlink_txt=resp_elem.find('div[id*="ContentPlaceHolder1_repBrowseLst"] div.skuName a[id*="ContentPlaceHolder1_repBrowseLst"] span[id*="ContentPlaceHolder1_repBrowseLst"]').html()

	
		price_str=cleanPrice(price_str);

		//repl_strng='IndiaPlaza: Rs. <span class="'+pricespan+'" style="display:inline !important">'+$.trim(price_str).replace('Our Price:','')+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
		repl_strng='<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">IndiaPlaza</span><span class="'+rupees+'">&#8377; '+$.trim(price_str).replace('Our Price:','')+'</span></a>';
		


	} // else


	
	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;

	//trackDisplayedResults(dyn_prod_deets.prod_link);
	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
	disp_analytics_send_flags['back_search_ip']='ok';

} //closure
}




var ibSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {
	

	var resp_elem, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;

	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_img: '',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ib',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};

	
	resp_elem = $('<div/>').append($.parseHTML(response));

	var check_listtype = resp_elem.find('ul.search_result, ul.srch_result').attr('class');

	

	if(check_listtype){


	if (check_listtype.search('search_result')>-1) {
		
		

		
		price_hold_all=resp_elem.find('ul.search_result > li:eq(0) div.price b').contents();
		price_str = textFind(price_hold_all)

		if ((price_str=='') || (price_str==undefined)) {
			price_hold_all=resp_elem.find('ul.search_result > li:eq(0) div.price span.price:eq(0)').contents();
			price_str = textFind(price_hold_all)
		}


		if (resp_elem.find('ul.search_result >  li:eq(0) h2').length>0) {
		prodlink_href = resp_elem.find('ul.search_result > li:eq(0) h2.simple a').attr('href');
		prodlink_txt = resp_elem.find('ul.search_result > li:eq(0) h2.simple a').html();
		}
		else {

		prodlink_href = resp_elem.find('ul.search_result > li:eq(0) > a').attr('href');
		prodlink_txt = resp_elem.find('ul.search_result > li:eq(0) > a').attr('title');

		}


	}

}//test if

	else {
            

		price_hold_all=resp_elem.find('ul.srch_result > li:eq(0) div.price span.normal:eq(0)').contents();
		price_str = textFind(price_hold_all)
		if ((price_str=='') || (price_str==undefined)) {
			
			price_hold_all=resp_elem.find('ul.srch_result > li:eq(0) div.price span.price:eq(0)').contents();
			price_str = textFind(price_hold_all)
		}
	
		if (resp_elem.find('ul.srch_result > li:eq(0) h2').length>0) {
			
		prodlink_href = resp_elem.find('ul.srch_result > li:eq(0) http://www.infibeam.comh2.simple a').attr('href');
		prodlink_txt = resp_elem.find('ul.srch_result > li:eq(0) h2.simple a').html();
		}
		else {
			

		prodlink_href = resp_elem.find('ul.srch_result > li:eq(0) > a').attr('href');
		prodlink_txt = resp_elem.find('ul.srch_result > li:eq(0) > a').attr('title');

		

		

		}


	} // end of else	

	//if the above logic does not extract necessary info
	//trying to extract info by assuming the response to be a book search results page. 
	if(!prodlink_txt)
		{

		prodlink_txt=resp_elem.find("div.resultsrow div:eq(1) div.product-img a img").attr('title');

		
		prodlink_href=resp_elem.find("div.resultsrow div:eq(1) div.product-img a").attr('href');


		

		price_str=resp_elem.find("div.resultsrow div:eq(1) span.final-price:eq(1) ").text().replace(/\D/g,'');

		dyn_prod_img=resp_elem.find("div.resultsrow div:eq(1) div.product-img a img").attr('src');


		
		}//if

	price_str=price_str.replace(/rs\.*|\*|\,/gi,'');
	//repl_strng='InfiBeam: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+'</span> <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'&trackId=saic" target="_blank" style="display:inline !important">Search</a>';
	//repl_strng='<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">InfiBeam</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';


	// var repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '"'+'target="_blank"'+'>\
	// 				<div class="row-top">\
	// 					<span class="'+portalname+'">' + "hello" + '</span>\
	// 					<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' + price_str + '</span>\
	// 				</div>\
	// 				<div class="row-btm">\
	// 					<img src="' + dyn_prod_img + '"/>\
	// 					<div class="row-btm-title">' + prodlink_txt + '</div>' +
	// 				'</div>\
	// 			  </a>';

 	

	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	if(prodlink_href.startsWith('https://www.infibeam.com')){
		dyn_prod_deets.prod_link = 'https://www.infibeam.com' + prodlink_href;
	}
	dyn_prod_deets.prod_img = dyn_prod_img;
	dyn_prod_deets.prod_avail=true;
	
		if(dyn_prod_deets.prod_link){
			insert_price_result_box(make_results_box({"prod_site":"ib","prod_link":prodlink_href,"website":"Infibeam","title":prodlink_txt,"img_src":dyn_prod_img,"prod_price":parseInt(price_str)},"searchid"));	
		}
		else{

		}


	//trackDisplayedResults(dyn_prod_deets.prod_link);
	// insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
	disp_analytics_send_flags['back_search_ib']='ok';
} //closure
}





// indiatimes

var itSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {
	

	var resp_elem, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng, out_of_stock;
	var foundProdListing = false;

	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'it',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};

	
	resp_elem = $('<div/>').append($.parseHTML(response));


	if (resp_elem.find('div.productlisting').length>0) {

		prodlink_txt = resp_elem.find('div.productlisting div.productcoloumn div.productdetail a:eq(0)').html();
		prodlink_href = resp_elem.find('div.productlisting div.productcoloumn div.productdetail a:eq(0)').attr('href');
		price_str = textFind(resp_elem.find('div.productlisting div.productcoloumn div.productdetail div.newprice span.price:eq(0)').contents());
		out_of_stock = resp_elem.find('div.productlisting div.productcoloumn div.outofstock-small').length;

		foundProdListing = true;



	}

	if (foundProdListing){

		repl_strng='Indiatimes: Rs.'+price_str+' <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';


	}

	else {

		//repl_strng='Indiatimes (Not Available): ' + '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		repl_strng='<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Indiatimes</span><span class="'+portalmsg+'">Search</span></a>';

		insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_it']='ok';
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;

	}



	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;

	//trackDisplayedResults(dyn_prod_deets.prod_link);
	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
	disp_analytics_send_flags['back_search_it']='ok';
} //closure
} //it




var msSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {



	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;


	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ms',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};

	resp_elem = $('<div/>').append($.parseHTML(response));

	if (resp_elem.find('div.search_cat_box').length>0) {

		
		price_hold_all=resp_elem.find('div.search_cat_box div.item:eq(0) div.price b').contents();
		price_str = textFind(price_hold_all);

		prodlink_href=resp_elem.find('div.search_cat_box div.item:eq(0) div.item_title a[id="link"]').attr('href');
		prodlink_txt=resp_elem.find('div.search_cat_box div.item:eq(0) div.item_title a[id="link"]').html();

	}

	else if (resp_elem.find('div.msp_left div.item').length>0){


		price_hold_all=resp_elem.find('div.msp_left div.item:eq(0) div.price b').contents();
		price_str = textFind(price_hold_all);
		prodlink_href=resp_elem.find('div.msp_left div.item:eq(0) div.item_title a[id="link"]').attr('href');
		prodlink_txt=resp_elem.find('div.msp_left div.item:eq(0) div.item_title a[id="link"]').html();

	}


	//repl_strng='MySmartPrice: Rs.'+price_str.replace('Rs.','')+' <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
	repl_strng='<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">MySmartPrice</span><span class="'+rupees+'">&#8377; '+price_str.replace('Rs.', '')+'</span></a>';


	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;

	//trackDisplayedResults(dyn_prod_deets.prod_link);
	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
	disp_analytics_send_flags['back_search_ms']='ok';

} //closure
}

//snapdeal

var sdSuccess = function (server_prod_deets_var, fetch_url,chk_quality=false,back_end_response_deets={}) {

return function(response, textStatus,sent_req) {	
	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;

	var dyn_prod_deets ={
		prod_title:'',
		prod_bracktitle:'',
		prod_fulltitle:'',
		prod_categ:'',
		prod_price: -1,
		prod_img: '',
		orig_prod_price: prod_deets.prod_price,
		prod_link:fetch_url,
		prod_site:'sd',
		bundle_key: prod_deets.bundle_key,
		call_type: prod_deets.call_type,
		prod_avail: false
	};

	
	resp_elem = $('<div/>').append($.parseHTML(response));

	var sd_ass = {'srchdiv':'#products div.product-tuple-listing:eq(0)',
				'prod_img': '#products div.product-tuple-listing:eq(0) img.product-image',
				'price': '#products div.product-tuple-listing:eq(0) div.product-tuple-description div.productPrice span.product-price',
				'price_alt':'#products div.product-tuple-listing:eq(0) div.product-tuple-description div.productPrice span.product-price',
				'link': '#products div.product-tuple-listing:eq(0) div.product-tuple-image a',
				'title':'#products div.product-tuple-listing:eq(0) div.product-tuple-description p.product-title'};


	
	if (resp_elem.find(sd_ass['srchdiv']).length>0) {

		prodlink_href=resp_elem.find(sd_ass['link']).attr('href');
		prodlink_txt=$.trim(resp_elem.find(sd_ass['title']).html());
		var dyn_prod_img = resp_elem.find(sd_ass['prod_img']).attr('src');
		price_hold_all=resp_elem.find(sd_ass['price']).contents();
		price_str = textFind(price_hold_all);

		if (price_str=='') {
			price_hold_all=resp_elem.find(sd_ass['price_alt']).contents();
			price_str = textFind(price_hold_all);
		}
		if(price_str ==""){
			console.log("setting price string");
			price_str = resp_elem.find('#products div.product-tuple-listing:eq(0) .product-price').attr("display-price")
			console.log(price_str);
		}


	}
	else if (resp_elem.find('#products-main4 div.product_listing').length>0) {


		prodlink_href=resp_elem.find('#products-main4 div.product_listing:eq(0) a:eq(0)').attr('href');
		prodlink_txt=$.trim(resp_elem.find('#products-main4 div.product_listing:eq(0) a:eq(0) div.product_listing_heading').html());

		price_hold_all=resp_elem.find('#products-main4 div.product_listing:eq(0) a:eq(0) div.product_price').contents();
		price_str = textFind(price_hold_all);

		if (price_str=='') {
			price_hold_all=resp_elem.find('#products-main4 div.product_listing:eq(0) a:eq(0) div.product_price #price').contents();
			price_str = textFind(price_hold_all);
		}


	} // div.product_listing

	else if ($(response).find('#prodTypeId').length>0) {

		prodlink_href = fetch_url;

		
		prodlink_txt=$.trim(resp_elem.find('div.productDeal-right div.prodtitle-head h1').html());

		price_hold_all=resp_elem.find('div.pdp_rightbox div.buyContainer #selling-price-id').contents();
		price_str = textFind(price_hold_all);

		if (price_str=='') {
			price_hold_all=resp_elem.find('div.pdp_rightbox div.buyContainer #selling-price-id #price').contents();
			price_str = textFind(price_hold_all);
		}


	}

	else  {
		//no matches at all?

			if(chk_quality && back_end_response_deets.prod_deets_match_score>1.8){
				//console.log("no search results found ... but doing some quality control in sd");

			if (parseFloat(back_end_response_deets.sd)>delayUs[back_end_response_deets.website]){

				fetchPSimData(back_end_response_deets,back_end_response_deets.website);
				// send server score 
				disp_analytics_send_flags['back_search_sd']='ok';
				return;
			}

			prodlink_txt=back_end_response_deets.title;
			price_str=back_end_response_deets.prod_price;
			dyn_prod_img=back_end_response_deets.img_src;
			prodlink_href=back_end_response_deets.link;

			//send sever score
			}

			else{
				
			
				prodlink_txt=prod_deets.prod_title;
			

	
		//repl_strng='<span style="color: rgb(2,159,204)">Snap</span><span style="color: rgb(189,8,1)">Deal</span>: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		//repl_strng='<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Snapdeal</span><span class="'+rupees+'">Search</span></a>';

		// repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"'+ 'target="_blank"'+'>\
		// 				<div class="row-top">\
		// 					<span class="'+portalname+'">' + "Snapdeal" + '</span>\
		// 				</div>\
		// 				<div class="row-btm">\
		// 					<img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
		// 					<div class="row-btm-title">' + prodlink_txt+ '</div>\
		// 					<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
		// 				</div>\
		// 			  </a>';
		
		insert_manual_search_box(make_manual_search_box({"prod_site":"sd","prod_link":fetch_url,"website":"Snapdeal","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));

		// insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_sd']='ok';
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;
	}

	}

	if(chk_quality){
		//console.log("doing check quality in sd");

		fetched_page_title_score=make_match_score(prod_deets.prod_title,prodlink_txt);
		

		if((fetched_page_title_score>1.8)||(back_end_response_deets.prod_deets_match_score>1.8)){

		if(fetched_page_title_score>back_end_response_deets.prod_deets_match_score){

			//do something fetched_page_title_score is better

			//send score of backend_response_prod_deets, fetched_page_prod_deets  and fetched_page_prod_deets to backend

			// no need to update the details to be displayed

			//console.log("have to send server sccore and deets")
		}
		else {
			//do something backend_response_title score is better

			//update deets to be displayed 

			//send score of backend_response_prod_deets to backend


			if (parseFloat(back_end_response_deets.sd)>delayUs[back_end_response_deets.website]){

				fetchPSimData(back_end_response_deets,back_end_response_deets.website);
				// send server score 
				disp_analytics_send_flags['back_search_sd']='ok';
				return;
			}

			prodlink_txt=back_end_response_deets.title;
			price_str=back_end_response_deets.prod_price;
			dyn_prod_img=back_end_response_deets.img_src;
			prodlink_href=back_end_response_deets.link;

			//send sever score


		}
	}
	else{
		prodlink_txt=prod_deets.prod_title;

	
		//repl_strng='<span style="color: rgb(2,159,204)">Snap</span><span style="color: rgb(189,8,1)">Deal</span>: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		//repl_strng='<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Snapdeal</span><span class="'+rupees+'">Search</span></a>';
		// repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"'+ 'target="_blank"'+'>\
		// 				<div class="row-top">\
		// 					<span class="'+portalname+'">' + "Snapdeal" + '</span>\
		// 				</div>\
		// 				<div class="row-btm">\
		// 					<img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
		// 					<div class="row-btm-title">' + prodlink_txt+ '</div>\
		// 					<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
		// 				</div>\
		// 			  </a>';

		// insertPrice(repl_strng,-1);
		
		insert_manual_search_box(make_manual_search_box({"prod_site":"sd","prod_link":fetch_url,"website":"Snapdeal","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));

		disp_analytics_send_flags['back_search_sd']='ok';
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;
	}

	}


	//repl_strng='<span style="color: rgb(2,159,204)">Snap</span><span style="color: rgb(189,8,1)">Deal</span>: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+'</span> <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
	//repl_strng='<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">Snapdeal</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';

	// var difference_str = get_pricediff_result_row(Number(price_str), Number(prod_deets.prod_price));
	// repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '">\
	// 				<div class="row-top">\
	// 					<span class="'+portalname+'">' + "Snapdeal" + '</span>\
	// 					<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' + price_str + '</span>\
	// 				</div>\
	// 				<div class="row-btm">\
	// 					<img src="' + dyn_prod_img + '"/>\
	// 					<div class="row-btm-title">' + prodlink_txt + '</div>' + difference_str +
	// 				'</div>\
	// 			  </a>';

	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;
	dyn_prod_deets.prod_img = dyn_prod_img;
	console.log(price_str);
	insert_price_result_box(make_results_box({"prod_site":"sd","prod_link":prodlink_href,"website":"Snapdeal","title":prodlink_txt,"img_src":dyn_prod_img,"prod_price":parseInt(price_str)},"searchid"));

	//trackDisplayedResults(dyn_prod_deets.prod_link);
	// insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
	disp_analytics_send_flags['back_search_sd']='ok';
} //closure
}


var azSuccess = function (server_prod_deets_var, fetch_url,chk_quality=false,back_end_response_deets={}) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	
	var dyn_prod_deets ={
		prod_title:'',
		prod_bracktitle:'',
		prod_fulltitle:'',
		prod_categ:'',
		prod_price: -1,
		prod_img: '',
		orig_prod_price: prod_deets.prod_price,
		prod_link:fetch_url,
		prod_site:'az',
		bundle_key: prod_deets.bundle_key,
		call_type: prod_deets.call_type,
		prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;

	if (resp_elem.find('#atfResults #result_0 ul.rsltL > li:eq(0) span.grey').length>0) {


		avail_val  = (resp_elem.find('#atfResults #result_0 ul.rsltL > li:eq(0) span.grey').html().indexOf('unavailable') == -1);

		}


	if  ((!avail_val) || (resp_elem.find('#noResultsTitle').length>0)) {
		//nothing available
		if(chk_quality&& back_end_response_deets.prod_deets_match_score>1.8 ){
			//console.log("no search results found ... but doing some quality control in az");

					if (parseFloat(back_end_response_deets.sd)>delayUs[back_end_response_deets.website]){
						console.log("calling fetchsim from fetch quality");
						fetchPSimData(back_end_response_deets,back_end_response_deets.website);
						// send server score
						disp_analytics_send_flags['back_search_az']='ok'; 
						return;
					}

					prodlink_txt=back_end_response_deets.title;
					price_str=back_end_response_deets.prod_price;
					prod_img=back_end_response_deets.img_src;
					prodlink_href=back_end_response_deets.link;

					//send sever score

		}

		else{

			
			
		prodlink_txt=prod_deets.prod_title;
		

		//repl_strng = 'Amazon: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		//repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Amazon</span><span class="'+portalmsg+'">Search</span></a>';

		// repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"'+ 'target="_blank">\
		// 				<div class="row-top">\
		// 					<span class="'+portalname+'">Amazon</span>\
		// 				</div>\
		// 				<div class="row-btm">\
		// 					<img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
		// 					<div class="row-btm-title">' + prodlink_txt+ '</div>\
		// 					<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
		// 				</div>\
		// 			  </a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		
		insert_manual_search_box(make_manual_search_box({"prod_site":"az","prod_link":fetch_url,"website":"Amazon","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));

		// insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_az']='ok';
		sendDynData(dyn_prod_deets);
		return true;
		}

		} 
	else {

		if (resp_elem.find('#atfResults #s-results-list-atf #result_0').length>0) {

			price_hold_all = resp_elem.find('#atfResults #s-results-list-atf #result_0 span.s-price').contents();

			if (price_hold_all.length==0) {

				price_hold_all = resp_elem.find('#atfResults #s-results-list-atf #result_0 span.a-color-price').contents();
			}


		} //newsearchlisthtml

		else if (resp_elem.find('#atfResults #result_0 ul.rsltL').length>0) {

			price_hold_all = resp_elem.find('#atfResults #result_0 ul.rsltL li.newp span.bld, #atfResults #result_0 ul.rsltL li.mkp2 span.price, #atfResults #result_0 ul.rsltL li.digp span.bld').contents()

		} //ifgridlist
		else if (resp_elem.find('#atfResults #result_0 ul.rsltGridList').length>0) {

			price_hold_all = resp_elem.find('#atfResults #result_0 ul.rsltGridList li.newp span.bld, #atfResults #result_0 ul.rsltGridList li.mkp2 span.price, #atfResults #result_0 ul.rsltGridList li.digp span.bld').contents();


		} //elseifgridlist



		price_str = textFind(price_hold_all);
		if (price_str.length==0) {
			price_str = textFind(price_hold_all,-1);
		}
		prodlink_href = resp_elem.find('#atfResults #result_0 a.s-access-detail-page').attr('href');
		prodlink_txt = $.trim(resp_elem.find('#atfResults #result_0 a.s-access-detail').attr('title'));
		var prod_img = resp_elem.find('#atfResults #result_0 img.s-access-image').attr('src');
		if (prodlink_txt==''){
			prodlink_txt = $.trim(resp_elem.find('#atfResults #result_0 h2.s-access-title').html());
		}	
		price_str=$.trim(price_str.replace(/rs\.*|\*|\,/gi,''));

		
		if(chk_quality){
				//console.log("doing check quality in az");

				fetched_page_title_score=make_match_score(prod_deets.prod_title,prodlink_txt);
				

				if((fetched_page_title_score>1.8)||(back_end_response_deets.prod_deets_match_score >1.8)){

				if(fetched_page_title_score>back_end_response_deets.prod_deets_match_score){

					//do something fetched_page_title_score is better

					//send score of backend_response_prod_deets, fetched_page_prod_deets  and fetched_page_prod_deets to backend

					// no need to update the details to be displayed

					//console.log("have to send server sccore and deets")
				}
				else {
					//do something backend_response_title score is better

					//update deets to be displayed 

					//send score of backend_response_prod_deets to backend


					if (parseFloat(back_end_response_deets.sd)>delayUs[back_end_response_deets.website]){

						fetchPSimData(back_end_response_deets,back_end_response_deets.website);
						// send server score 
						disp_analytics_send_flags['back_search_az']='ok';
						return;
					}

					prodlink_txt=back_end_response_deets.title;
					price_str=back_end_response_deets.prod_price;
					prod_img=back_end_response_deets.img_src;
					prodlink_href=back_end_response_deets.link;

					//send sever score


				}

			}
			else{
				prodlink_txt=prod_deets.prod_title_raw;

		//repl_strng = 'Amazon: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		//repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Amazon</span><span class="'+portalmsg+'">Search</span></a>';
		// repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"'+ 'target="_blank">\
		// 				<div class="row-top">\
		// 					<span class="'+portalname+'">Amazon</span>\
		// 				</div>\
		// 				<div class="row-btm">\
		// 					<img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
		// 					<div class="row-btm-title">' + prodlink_txt+ '</div>\
		// 					<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
		// 				</div>\
		// 			  </a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		// insertPrice(repl_strng,-1);
		
		insert_manual_search_box(make_manual_search_box({"prod_site":"az","prod_link":fetch_url,"website":"Amazon","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));

		disp_analytics_send_flags['back_search_az']='ok';
		sendDynData(dyn_prod_deets);
		return true;
			}
		}
		


		
		//repl_strng='Amazon: <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
//		console.log('type of price_str in azsucss ======= ' + typeof(price_str) + ' ' + price_str);
//		console.log('now? ' + parseInt(price_str).toString());
		price_str = parseInt(price_str).toString();
		var difference_str = get_pricediff_result_row(Number(price_str), Number(prod_deets.price_str));

		//repl_strng='<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">Amazon</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';
		// repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '">\
		// 			<div class="row-top">\
		// 				<span class="'+portalname+'">Amazon</span>\
		// 				<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' + price_str + '</span>\
		// 			</div>\
		// 			<div class="row-btm">\
		// 				<img src="' + prod_img + '"/>\
		// 				<div class="row-btm-title">' + prodlink_txt + '</div>' + difference_str +
		// 			'</div>\
		// 		  </a>';


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_img = prod_img;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		//console.log("calling insert price send data for amazon");
		//trackDisplayedResults(dyn_prod_deets.prod_link);
		// insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
		
		insert_price_result_box(make_results_box({"prod_site":"az","prod_link":prodlink_href,"website":"Amazon","title":prodlink_txt,"img_src":prod_img,"prod_price":parseInt(price_str)},"searchid"));

		disp_analytics_send_flags['back_search_az']='ok';

	} //endelse

} //closure
} //amazon

var ebSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'eb',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if ((resp_elem.find('#Results div.msg div.cnt').length>0)  ||  (resp_elem.find('#ResultSetItems').html()=='')) {
		avail_val  = false;
		}


	if  ((!avail_val)) {
		//repl_strng = 'Ebay.in: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		// repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Ebay</span><span class="'+portalmsg+'">Search</span></a>';
		repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,fetch_url) + '">\
						<div class="row-top">\
							<span class="'+portalname+'">' + portalname + '</span>\
						</div>\
						<div class="row-btm">\
							<img src="' + prod_deets.prod_site + '"/>\
							<div class="row-btm-title">' + prod_deets.prod_img + '</div>\
							<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
						</div>\
					  </a>';
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_eb']='ok';
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {
	
		resp_elem.find('#ResultSetItems table[itemprop="offers"]  tr[itemprop="offers"]').each(function(index) {
			price_hold_all = $(this).find('td.prc div[itemprop="price"] span').contents();
			price_str = cleanPrice(textFind(price_hold_all));

			if (sameProd(price_str,prod_deets.prod_price)) {
				
				if ($(this).find('td.prc span.ship span.tfsp, td.prc span.ship span.gfsp').length==0) {
					ship_val = cleanShipPrice($(this).find('td.prc span.ship span.fee').html());

					price_str=parseFloat(price_str)+parseFloat(ship_val);
				}  

				prodlink_txt = $.trim($(this).find('td.dtl div.ittl a').html());
				prodlink_href = $(this).find('td.dtl div.ittl a').attr('href');
				disp_analytics_send_flags['back_search_eb']='ok';
				return false;
				}

		}); //each

		//repl_strng='Ebay.in: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
		repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">Ebay</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';

		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		//trackDisplayedResults(dyn_prod_deets.prod_link);
		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
		disp_analytics_send_flags['back_search_eb']='ok';

	} //endelse

} //closure
} //ebay



var yeSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ye',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if (resp_elem.find('#divserachzero').length>0  || resp_elem.find('div.price_Reviews').length==0) {
		avail_val  = false;
		}


	if  ((!avail_val)) {
		//repl_strng = 'Yebhi: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Yebhi</span><span class="'+rupees+'">Search</span></a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_ye']='ok';
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {

		price_hold_all = resp_elem.find('div.price_Reviews:eq(0) p.priice span.inr').contents();	

		price_str = textFind(price_hold_all);
	
		prodlink_href = resp_elem.find('div.price_Reviews:eq(0) h2 > a').attr('href');
		prodlink_txt = $.trim(resp_elem.find('div.price_Reviews:eq(0) h2 > a').html());

		//repl_strng='Yebhi: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
		repl_strng='<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">Yebhi</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';

		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		//trackDisplayedResults(dyn_prod_deets.prod_link);
		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
		disp_analytics_send_flags['back_search_ye']='ok';

	} //endelse

} //closure
} //yebhi


//myntra
var mySuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, prod_img,repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'my',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};

	resp_elem = $('<div/>').append($.parseHTML(response));

	//have to be removed 
 	dyn_prod_deets.prod_link=fetch_url;
	dyn_prod_deets.prod_avail=false;
	//  repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"' + 'target="_blank"'+'>\
	// 							<div class="row-top">\
	// 								<span class="'+portalname+'">' + "Myntra" + '</span>\
	// 							</div>\
	// 							<div class="row-btm">\
	// 								<img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
	// 								<div class="row-btm-title">' + prod_deets.prod_title + '</div>\
	// 								<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
	// 							</div>\
	// 						  </a>';

	// insertPrice(repl_strng,-1);
	
	insert_manual_search_box(make_manual_search_box({"prod_site":"my","prod_link":fetch_url,"website":"Myntra","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));

	disp_analytics_send_flags['back_search_ja']='ok';
	return;

	//remove till here for normal function

	var avail_val = true;
	if (resp_elem.find('div.no-results').length>0) {
		avail_val  = false;
		}



	if  ((!avail_val)) {
		//repl_strng = 'Myntra: (Not Available) <a href="'+ affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		// repl_strng = '<a target="_blank" href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Myntra</span><span class="'+portalmsg+'">Search</span></a>';
		insert_manual_search_box(make_manual_search_box({"prod_site":"my","prod_link":fetch_url,"website":"Myntra","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		// insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_my']='ok';
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {

		var myn_ass = {'price': 'div.results-cnt ul.results li[data-styleid]:eq(0) a div.price',
				'link': 'div.results-cnt ul.results li[data-styleid]:eq(0) a',
				'brand':'div.results-cnt ul.results li[data-styleid]:eq(0) a div.brand',
				'title':'div.results-cnt ul.results li[data-styleid]:eq(0) a div.brand, div.results-cnt ul.results li[data-styleid]:eq(0) a div.product',
				'img':'div.results-cnt ul.results li[data-styleid]:eq(0) a img'};

		price_hold_all = resp_elem.find(myn_ass.price).contents();	

		price_str = textFind(price_hold_all);
	
		prodlink_href = resp_elem.find(myn_ass.link).attr('href');
		prodlink_txt = textFindAll(resp_elem.find(myn_ass.title).contents());

		prod_img=resp_elem.find(myn_ass.img).attr('src');

		var difference_str = get_pricediff_result_row(Number(price_str), Number(prod_deets.price_str));

		//repl_strng='Myntra: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
		// repl_strng='<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">Myntra</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';

		// repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '">\
		// 	<div class="row-top">\
		// 		<span class="'+portalname+'">Amazon</span>\
		// 		<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' + price_str + '</span>\
		// 	</div>\
		// 	<div class="row-btm">\
		// 		<img src="' + prod_img + '"/>\
		// 		<div class="row-btm-title">' + prodlink_txt + '</div>' + difference_str +
		// 	'</div>\
		//   </a>';

		  console.log("myntra \n"+repl_strng);


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_img = prod_img;
		dyn_prod_deets.prod_avail=true;

		console.log('inserting my tag');
		console.log(server_prod_deets_var);
		//trackDisplayedResults(dyn_prod_deets.prod_link);
		// insertPriceSendData('', dyn_prod_deets, repl_strng, fetch_url);
		// insertPrice(createStringLink(dyn_prod_deets, prodlink_href,'found'),price_str);
		
		insert_price_result_box(make_results_box({"prod_site":"my","prod_link":prodlink_href,"website":"Myntra","title":prodlink_txt,"img_src":prod_img,"prod_price":parseInt(price_str)},"searchid"));

		disp_analytics_send_flags['back_search_my']='ok';

	} //endelse

} //closure
} //myntra




//jabong
var jaSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ja',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));

	//remove from here
		// repl_strng = '<a target="_blank" href="' + affyLinkify(dyn_prod_deets,fetch_url) + '">\
		// 			<div class="row-top">\
		// 				<span class="'+portalname+'">Jabong</span>\
		// 			</div>\
		// 			<div class="row-btm">\
		// 				<img src="' + housefly + '" style="opacity: 0.4;"/>\
		// 				<div class="row-btm-title">' + prod_deets.prod_title + '</div>\
		// 				<div class="r-box ask-search"><span class="price-diffn ask-search">Search </span></div>\
		// 			</div>\
		// 		  </a>';

	dyn_prod_deets.prod_link=fetch_url;
	dyn_prod_deets.prod_avail=false;
	// insertPrice(repl_strng,-1);
	
	insert_manual_search_box(make_manual_search_box({"prod_site":"ja","prod_link":fetch_url,"website":"Jabong","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));

	disp_analytics_send_flags['back_search_ja']='ok';
	return;

	//remove till here


	var avail_val = true;
	if (resp_elem.find('section.search-product .product-tile').length==0) {
		avail_val  = false;
	}


	if  ((!avail_val)) {
		//repl_strng = 'Jabong: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		//repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">Jabong</span><span class="'+portalmsg+'">Search</span></a>';
		// repl_strng = '<a target="_blank" href="' + affyLinkify(dyn_prod_deets,fetch_url) + '">\
		// 				<div class="row-top">\
		// 					<span class="'+portalname+'">Jabong</span>\
		// 				</div>\
		// 				<div class="row-btm">\
		// 					<img src="' + housefly + '" style="opacity: 0.4;"/>\
		// 					<div class="row-btm-title">' + prod_deets.prod_title + '</div>\
		// 					<div class="r-box ask-search"><span class="price-diffn ask-search">Search </span></div>\
		// 				</div>\
		// 			  </a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		// insertPrice(repl_strng,-1);
		
		insert_manual_search_box(make_manual_search_box({"prod_site":"ja","prod_link":fetch_url,"website":"Jabong","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));


		disp_analytics_send_flags['back_search_ja']='ok';
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {


		if (resp_elem.find('#productsCatalog > li:eq(0) a span.price > strong.fs16').length>0) {
			price_str = textFind(resp_elem.find('#productsCatalog > li:eq(0) a span.price > strong.fs16').contents());
		}
		else if (resp_elem.find('#productsCatalog > li:eq(0) span.itm-priceBox span.old').length>0) {
			price_str = textFind(resp_elem.find('#productsCatalog > li:eq(0) span.itm-priceBox span.old').contents());	
		}
		else {
			// price_str = textFind(resp_elem.find('#productsCatalog > li:eq(0) span.itm-priceBox span.itm-price').contents());
			price_str = textFind(resp_elem.find('section.search-product:eq(0) span.standard-price'));
		}

	
		prodlink_href = resp_elem.find('section.search-product:eq(0) a').attr('href');

		var dyn_prod_img = resp_elem.find('section.search-product:eq(0) img.thumb').attr('src');
		
		prodlink_txt = textFindAll(resp_elem.find('section.search-product:eq(0) div.h4:eq(0)').contents());


		//repl_strng='Jabong: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
		// //repl_strng:'<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">Jabong</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';
		// var difference_str = get_pricediff_result_row(Number(price_str), Number(prod_deets.price_str));
		// repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '">\
		// 				<div class="row-top">\
		// 					<span class="'+portalname+'">' + portalname + '</span>\
		// 					<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' + price_str + '</span>\
		// 				</div>\
		// 				<div class="row-btm">\
		// 					<img src="' + dyn_prod_img + '"/>\
		// 					<div class="row-btm-title">' + prodlink_txt + '</div>' + difference_str +
		// 				'</div>\
		// 			  </a>';

		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		//trackDisplayedResults(dyn_prod_deets.prod_link);
		// insertPriceSendData('', dyn_prod_deets, repl_strng, fetch_url);
		insert_price_result_box(make_results_box({"prod_site":"ja","prod_link":prodlink_href,"website":"Jabong","title":prodlink_txt,"img_src":dyn_prod_img,"prod_price":parseInt(price_str)},"searchid"));
		disp_analytics_send_flags['back_search_ja']='ok';

	} //endelse

} //closure
} //jabong


//shopclues
var scSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
		prod_title:'',
		prod_bracktitle:'',
		prod_fulltitle:'',
		prod_categ:'',
		prod_price: -1,
		prod_img: '',
		orig_prod_price: prod_deets.prod_price,
		prod_link:fetch_url,
		prod_site:'sc',
		bundle_key: prod_deets.bundle_key,
		call_type: prod_deets.call_type,
		prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if (resp_elem.find('div.mainbox-container p.no-items').length>0) {
		avail_val  = false;
	}


	if  ((!avail_val)) {
		//repl_strng = 'ShopClues: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		//repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">ShopClues</span><span class="'+portalmsg+'">Search</span></a>';
		repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,fetch_url) + '">\
						<div class="row-top">\
							<span class="'+portalname+'">' + portalname + '</span>\
						</div>\
						<div class="row-btm">\
							<img src="' + prod_deets.prod_img + '"/>\
							<div class="row-btm-title">' + prod_deets.prod_title + '</div>\
							<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
						</div>\
					  </a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_sc']='ok';
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {


		if (resp_elem.find('div.product-price:eq(0) span.price').length>0) {
			price_str = textFind(resp_elem.find('div.product-price:eq(0) span.price').contents());
		}
		else if (resp_elem.find('div.product-price:eq(0) span.old-price').length>0) {
			price_str = textFind(resp_elem.find('div.product-price:eq(0) span.old-price').contents());	
		}
		else {
			price_str = textFind(resp_elem.find('#productsCatalog > li:eq(0) span.itm-priceBox span.itm-price').contents());	
		}

		prodlink_href = resp_elem.find('div.details:eq(0) a:eq(0)').attr('href');

		var prod_img = resp_elem.find('div.grid-product:eq(0) a img').attr('src2');

		prodlink_txt = $.trim(resp_elem.find('div.details:eq(0) a:eq(0)').html());


		//repl_strng='ShopClues: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
		//epl_strng = '<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">ShopClues</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';
		var difference_str = get_pricediff_result_row(Number(price_str), Number(prod_deets.prod_price));
		repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '">\
						<div class="row-top">\
							<span class="'+portalname+'">' + portalname + '</span>\
							<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' + price_str + '</span>\
						</div>\
						<div class="row-btm">\
							<img src="' + prod_img + '"/>\
							<div class="row-btm-title">' + prodlink_txt + '</div>' + difference_str +
						'</div>\
					  </a>';

		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_img = prod_img;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		//trackDisplayedResults(dyn_prod_deets.prod_link);
		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
		disp_analytics_send_flags['back_search_sc']='ok';
	} //endelse

} //closure
} //shopclues




//firstcry
var fcSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'fc',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));

	// div.se_pro div.urs_txt

	var avail_val = true;
	
	if (resp_elem.find('div.se_pro div.urs_txt').length=0) {
		avail_val  = false;
		}


	if  ((!avail_val)) {


		//repl_strng = 'FirstCry: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">FirstCry</span><span class="'+portalmsg+'">Search</span></a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_fc']='ok';
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {

		price_str = cleanPrice(resp_elem.find('#maindiv div.list_block:eq(0) div.rupee span.r1 a').text())

		if (price_str=='') {

			price_str = cleanPrice(resp_elem.find('#maindiv div.list_block:eq(0) div.rupee span:eq(0) a').text())

		}

	
		prodlink_href = resp_elem.find('#maindiv div.list_block:eq(0) div.list_img a').attr('href');

		
		prodlink_txt = $.trim(resp_elem.find('#maindiv div.list_block:eq(0) div.li_txt1 a').text());


		//repl_strng='FirstCry: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
		repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">FirstCry</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		//trackDisplayedResults(dyn_prod_deets.prod_link);
		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
		disp_analytics_send_flags['back_search_fc']='ok';

	} //endelse

} //closure
} //firstcry



//babyoye
var boSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'bo',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if (resp_elem.find('#listing_right_section p.zero_results').length=0) {
		avail_val  = false;
	}


	if  ((!avail_val)) {
		//repl_strng = 'BabyOye: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">BabyOye</span><span class="'+portalmsg+'">Search</span></a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_bo']='ok';
		sendDynData(dyn_prod_deets);
		return true
	} 
	else {


		price_str = textFind(resp_elem.find('#BPHIM00019 > div.bigView > div > div > div.big_prodetail_tab_discount > p').contents());

		if (price_str=='') {

			price_str = textFind(resp_elem.find('div.product_summary:eq(0) #reBg p').contents());

		}

	
		prodlink_href = resp_elem.find('div.product_summary:eq(0) span.product_title a').attr('href');

		
		prodlink_txt = $.trim(resp_elem.find('div.product_summary:eq(0) span.product_title a').text());


		//repl_strng='BabyOye: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
		repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">BabyOye</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		//trackDisplayedResults(dyn_prod_deets.prod_link);
		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
		disp_analytics_send_flags['back_search_bo']='ok';

	} //endelse

} //closure
} //babyoye


//bookadda
var baSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {


	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng,dyn_prod_img;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_img: '',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ba',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};

	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if (resp_elem.find('#search_container ul.results a.didyoumeant').length>0) {
		avail_val  = false;
		}


	if  ((!avail_val)) {
		//repl_strng = 'BookAdda: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		// repl_strng = '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'"><span class="'+portalname+'">BookAdda</span><span class="'+portalmsg+'">Search</span></a>';
		insert_manual_search_box(make_manual_search_box({"prod_site":"ba","prod_link":fetch_url,"website":"BookAdda","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		// insertPrice(repl_strng,-1);
		disp_analytics_send_flags['back_search_ba']='ok';
		sendDynData(dyn_prod_deets);
		return true
		} 
	else if  (resp_elem.find('#search_container').length>0) {


		price_str = textFind(resp_elem.find('#search_container ul.results li:eq(0) div.details div.secondrow span.new_price strong').contents());

		if (price_str=='') {

			price_str = textFind(resp_elem.find('#search_container ul.results li:eq(0) div.details div.secondrow span.old_price').contents());

		}

	
		prodlink_href = resp_elem.find('#search_container ul.results li:eq(0) div.details > div > a').attr('href');

		
		prodlink_txt = $.trim(resp_elem.find('#search_container ul.results li:eq(0) div.details > div > a h4').html());

		dyn_prod_img = resp_elem.find('#search_container ul.results li:eq(0) div.frame a img').attr('src')




	} //endelseif

	else if (resp_elem.find(cssLocs.ba.title).length>0) {
		
		price_str =cleanPrice(textFind(resp_elem.find(cssLocs.ba.price).contents()));
		prodlink_txt = cleanTitle(textFindAll(resp_elem.find(cssLocs.ba.title).contents()));
		prodlink_href=fetch_url;
	}
	else {
		avail_val=false;
	}

	//if image could not be found using the above selector 
	//page might be a product page  use this selector
	if(!dyn_prod_img){
			dyn_prod_img = resp_elem.find('img[itemprop="image"]').attr('src');
		}


		dyn_prod_deets.prod_img = dyn_prod_img;


	if (avail_val) {
	
		//repl_strng='BookAdda: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">Search</a>';
		// repl_strng='<a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'"><span class="'+portalname+'">BookAdda</span><span class="'+rupees+'">&#8377; '+price_str+'</span></a>';

		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		var difference_str = get_pricediff_result_row(Number(price_str), Number(prod_deets.prod_price));

		

		// var repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '"'+'target="_blank"'+'>\
		// 			<div class="row-top">\
		// 				<span class="'+portalname+'">' + "BookAdda" + '</span>\
		// 				<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' + price_str + '</span>\
		// 			</div>\
		// 			<div class="row-btm">\
		// 				<img src="' + dyn_prod_img + '"/>\
		// 				<div class="row-btm-title">' + prodlink_txt + '</div>' + difference_str +
		// 			'</div>\
		// 		  </a>';

		
		if(resp_elem.find(".notifyme-bttntxt").length>0){
			//out of stock

			// difference_str=get_pricediff_result_row(-1,prod_deets.prod_price);
			// repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '"'+'target="_blank"'+'>\
			// 		<div class="row-top">\
			// 			<span class="'+portalname+'">' + "BookAdda" + '</span>\
			// 		</div>\
			// 		<div class="row-btm">\
			// 			<img src="' + dyn_prod_img + '"/>\
			// 			<div class="row-btm-title">' + prodlink_txt + '</div>' + difference_str +
			// 		'</div>\
			// 	  </a>';

			// insertPrice(repl_strng,'-1');
			
			insert_oos_box(make_results_box({"prod_site":"ba","prod_link":prodlink_href,"website":"BookAdda","title":prodlink_txt,"img_src":dyn_prod_img,"prod_price":parseInt(price_str)},"searchid",true));

			disp_analytics_send_flags['back_search_ba']='ok';
			return true;

		}

		//trackDisplayedResults(dyn_prod_deets.prod_link);
		if(prodlink_href){
			insert_price_result_box(make_results_box({"prod_site":"ba","prod_link":prodlink_href,"website":"BookAdda","title":prodlink_txt,"img_src":dyn_prod_img,"prod_price":parseInt(price_str)},"searchid"));

		}

		//trackDisplayedResults(dyn_prod_deets.prod_link);
		// insert_price_result_box(make_results_box({"prod_site":"ba","prod_link":prodlink_href,"website":"BookAdda","title":prodlink_txt,"img_src":dyn_prod_img,"prod_price":parseInt(price_str)},"searchid"));
		// insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
		disp_analytics_send_flags['back_search_ba']='ok';


	}


} //closure
} //bookadda



var ptSuccess = function (server_prod_deets_var, fetch_url,chk_quality=false,back_end_response_deets={}) {

	return function(response, textStatus,sent_req) {

		var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;

		var dyn_prod_deets ={
		prod_title:'',
		prod_bracktitle:'',
		prod_fulltitle:'',
		prod_categ:'',
		prod_price: -1,
		prod_img: '',
		orig_prod_price: prod_deets.prod_price,
		prod_link:fetch_url,
		prod_site:'pt',
		bundle_key: prod_deets.bundle_key,
		call_type: prod_deets.call_type,
		prod_avail: false
	};


	

		prodlink_txt=prod_deets.prod_title;
		prodlink_href = fetch_url;
		
		repl_strng = repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,fetch_url) + '"' + 'target="_blank"'+'>\
										<div class="row-top">\
											<span class="'+portalname+'">' + "Paytm" + '</span>\
										</div>\
										<div class="row-btm">\
											<img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
											<div class="row-btm-title">' + prodlink_txt + '</div>\
											<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
										</div>\
									  </a>';
		insertPrice(repl_strng,-1);

		disp_analytics_send_flags['back_search_pt']='ok';
	
	}


}


var omgpm_site=function(site,server_prod_deets_var){
	return function(response, textStatus,sent_req){

		var resp_elem;

		var redir_link;

		resp_elem = $('<div/>').append($.parseHTML(response));


		redir_link=resp_elem.find('meta[http-equiv="Refresh"]').attr('content').split('url=')[1];

		if(redir_link!=undefined){

			var dyn_req = backPostGet({
		    	type: "GET",
		    	url: redir_link
			});

			if(site=='my'){
				dyn_req.done(mySuccess(server_prod_deets_var, redir_link))
			}
			else if(site=='ja'){
				dyn_req.done(jaSuccess(server_prod_deets_var, redir_link))
			}


		}



	}
}


var tcSuccess=function(server_prod_deets_var, fetch_url,chk_quality=false,back_end_response_deets={}){
	return function(response, textStatus,sent_req){

		console.log('in tc success');

		var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
		var ship_val;
		var dyn_prod_deets ={
			prod_title:'',
			prod_bracktitle:'',
			prod_fulltitle:'',
			prod_categ:'',
			prod_price: -1,
			prod_img: '',
			orig_prod_price: prod_deets.prod_price,
			prod_link:fetch_url,
			prod_site:'tc',
			bundle_key: prod_deets.bundle_key,
			call_type: prod_deets.call_type,
			prod_avail: false
		};
	    

	  resp_elem = $('<div/>').append($.parseHTML(response));


	  if(resp_elem.find('.product-list').length>0){

	  	console.log('product list found');
	  	// dyn_prod_deets.prod_title=resp_elem.find('.product-list li.product-item:eq(0) div.details h3.product-name a').text();
	  	dyn_prod_deets.prod_title=resp_elem.find('.product-list li.product-item:eq(0) .product-tile h2').text();
	  	dyn_prod_deets.prod_bracktitle=dyn_prod_deets.prod_title;
	  	dyn_prod_deets.prod_fulltitle=dyn_prod_deets.prod_title;
	  	dyn_prod_deets.prod_img=resp_elem.find('.product-list li.product-item:eq(0) div.image a:eq(0) img').attr('src').slice(2);
	  	if(!dyn_prod_deets.prod_img.startsWith('http')){
	  		dyn_prod_deets.prod_img='https://'+resp_elem.find('.product-list li.product-item:eq(0) div.image a:eq(0) img').attr('src').slice(2);
	  	}
	  	dyn_prod_deets.prod_link=resp_elem.find('.product-list li.product-item:eq(0) div.image a:eq(0)').attr('href');
	  	if(!dyn_prod_deets.prod_link.startsWith('http')){
	  		dyn_prod_deets.prod_link='https://www.tatacliq.com'+resp_elem.find('.product-list li.product-item:eq(0) div.image a:eq(0)').attr('href');	
	  	}

	  	if(resp_elem.find('.product-list li.product-item:eq(0) div.details div.price span span:eq(1)').length>0){
			dyn_prod_deets.prod_price=parseInt(($.trim(resp_elem.find('.product-list li.product-item:eq(0) div.details div.price span span:eq(1)' ).text())).slice(1));	  		
	  	}
	  	else{
	  		dyn_prod_deets.prod_price=parseInt(($.trim(resp_elem.find('.product-list li.product-item:eq(0) div.details div.price span span' ).text())).slice(1));	
	  	}


	  	if(chk_quality){



			//console.log("doing check quality in az");

			fetched_page_title_score=make_match_score(prod_deets.prod_title,dyn_prod_deets.prod_title);
			

			if((fetched_page_title_score>1.8)||(back_end_response_deets.prod_deets_match_score >1.8)){

				if(fetched_page_title_score>back_end_response_deets.prod_deets_match_score){

					//do something fetched_page_title_score is better

					//send score of backend_response_prod_deets, fetched_page_prod_deets  and fetched_page_prod_deets to backend

					// no need to update the details to be displayed

					//console.log("have to send server sccore and deets")
				}
				else {
					//do something backend_response_title score is better

					//update deets to be displayed 

					//send score of backend_response_prod_deets to backend


					if (parseFloat(back_end_response_deets.sd)>delayUs[back_end_response_deets.website]){

						fetchPSimData(back_end_response_deets,back_end_response_deets.website);
						// send server score 
						disp_analytics_send_flags['back_search_tc']='ok';
						return;
					}

					dyn_prod_deets.prod_title=back_end_response_deets.title;
				  	dyn_prod_deets.prod_bracktitle=dyn_prod_deets.prod_title;
				  	dyn_prod_deets.prod_fulltitle=dyn_prod_deets.prod_title;
					dyn_prod_deets.prod_price=back_end_response_deets.prod_price;
					dyn_prod_deets.prod_img=back_end_response_deets.img_src;
					dyn_prod_deets.prod_link=back_end_response_deets.link;


				}
			}
			else{
				//both scores are bad insert search link
				prodlink_txt=prod_deets.prod_title_raw;
				// repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"'+ 'target="_blank">\
				// 				<div class="row-top">\
				// 					<span class="'+portalname+'">Tata CLIQ</span>\
				// 				</div>\
				// 				<div class="row-btm">\
				// 					<img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
				// 					<div class="row-btm-title">' + prodlink_txt+ '</div>\
				// 					<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
				// 				</div>\
				// 			  </a>';

				insert_manual_search_box(make_manual_search_box({"prod_site":"tc","prod_link":fetch_url,"website":"TataCliq","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));

				dyn_prod_deets.prod_link=fetch_url;
				dyn_prod_deets.prod_avail=false;
				// insertPrice(repl_strng,-1);
				disp_analytics_send_flags['back_search_tc']='ok';
				sendDynData(dyn_prod_deets);
				return true;


			}

		}



	  	if(!dyn_prod_deets.prod_img.startsWith('http')){
	  		dyn_prod_deets.prod_img='https://'+dyn_prod_deets.prod_img;
	  	}
	  	if(!dyn_prod_deets.prod_link.startsWith('http')){
	  		dyn_prod_deets.prod_link='https://www.tatacliq.com'+dyn_prod_deets.prod_link;	
	  	}

	  	prodlink_href=dyn_prod_deets.prod_link;


		// var difference_str = get_pricediff_result_row(Number(prod_deets.prod_price),Number(dyn_prod_deets.prod_price));

		// var repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '">\
		// 				<div class="row-top">\
		// 					<span class="'+portalname+'">' + 'Tata Cliq'+ '</span>\
		// 					<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' +  + '</span>\
		// 				</div>\
		// 				<div class="row-btm">\
		// 					<img src="' + dyn_prod_deets.prod_img + '"/>\
		// 					<div class="row-btm-title">' + dyn_prod_deets.prod_title + '</div>' + difference_str +
		// 				'</div>\
		// 			  </a>';

		insert_price_result_box(make_results_box({"prod_site":"tc","prod_link":prodlink_href,"website":"TataCliq","title" :dyn_prod_deets.prod_title,"img_src":dyn_prod_deets.prod_img,"prod_price":parseInt(dyn_prod_deets.prod_price)},"searchid"));

		console.log("%c"+dyn_prod_deets,"color:green;");
		console.log(dyn_prod_deets);
		// insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
		disp_analytics_send_flags['back_search_tc']='ok';

		console.log(dyn_prod_deets);
		console.log(repl_strng);
		return;

	  }
	  else{
	  	console.log('results not found');
	  	//results not found

	  	if(chk_quality&& back_end_response_deets.prod_deets_match_score>1.8){
	  		//insert back end response

			if (parseFloat(back_end_response_deets.sd)>delayUs[back_end_response_deets.website]){
				console.log("calling fetchsim from fetch quality");
				fetchPSimData(back_end_response_deets,back_end_response_deets.website);
				// send server score
				disp_analytics_send_flags['back_search_tc']='ok'; 
				return;
			}

			prodlink_txt=back_end_response_deets.title;
			price_str=back_end_response_deets.prod_price;
			prod_img=back_end_response_deets.img_src;
			prodlink_href=back_end_response_deets.link;

			dyn_prod_deets.prod_title=prodlink_txt;
			dyn_prod_deets.prod_price=price_str;
			dyn_prod_deets.prod_img=prod_img;
			dyn_prod_deets.prod_link=prodlink_href;


			// var difference_str = get_pricediff_result_row(Number(prod_deets.prod_price),Number(dyn_prod_deets.prod_price));

			// var repl_strng = '<a href="' + affyLinkify(dyn_prod_deets,prodlink_href) + '">\
			// 			<div class="row-top">\
			// 				<span class="'+portalname+'">' + 'Tata Cliq'+ '</span>\
			// 				<span class="'+portalmsg+'"><span class="rupee-sign">&#8377;</span>' +  + '</span>\
			// 			</div>\
			// 			<div class="row-btm">\
			// 				<img src="' + dyn_prod_deets.prod_img + '"/>\
			// 				<div class="row-btm-title">' + dyn_prod_deets.prod_title + '</div>' + difference_str +
			// 			'</div>\
			// 		  </a>';
			// console.log("%c"+dyn_prod_deets,"color:green;");
			// insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
			insert_price_result_box(make_results_box({"prod_site":"tc","prod_link":prodlink_href,"website":"TataCliq","title": dyn_prod_deets.prod_title,"img_src":dyn_prod_deets.prod_img,"prod_price":parseInt(dyn_prod_deets.prod_price)},"searchid"));

			disp_analytics_send_flags['back_search_tc']='ok';

			return;


	  	}
	  	else{
	  		prodlink_txt=prod_deets.prod_title_raw;	
	  	}

		

		// repl_strng = '<a href="' + affyLinkifySimmanualsearch(dyn_prod_deets,fetch_url) + '"'+ 'target="_blank">\
		// 				<div class="row-top">\
		// 					<span class="'+portalname+'">Tata CLIQ</span>\
		// 				</div>\
		// 				<div class="row-btm">\
		// 					<img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
		// 					<div class="row-btm-title">' + prodlink_txt+ '</div>\
		// 					<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
		// 				</div>\
		// 			  </a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		// insertPrice(repl_strng,-1);
		insert_manual_search_box(make_manual_search_box({"prod_site":"tc","prod_link":fetch_url,"website":"TataCliq","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));
		console.log("%c"+dyn_prod_deets,"color:green;");
		disp_analytics_send_flags['back_search_tc']='ok';
		sendDynData(dyn_prod_deets);
		return true;

	  }

	  console.log('reached end');

	}//end of function	
}