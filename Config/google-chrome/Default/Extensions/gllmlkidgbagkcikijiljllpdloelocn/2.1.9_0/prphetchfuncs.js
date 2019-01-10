var azPrSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str;

	//console.log('DEBUG: az fetch');
	//console.log(fetch_url);

	
	resp_elem = $('<div/>').append($.parseHTML(response));

	oos_prod=resp_elem.find(cssLocs.az.oos).contents();

	if (oos_prod.length>0) {
		console.log('ees OOSed mate, no longer alive, bare shelf');

		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = "oos";
			disp_analytics_send_flags['back_price_az']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}
		
		// insertPrice(createStringLinkSim(server_prod_deets_var,'oos','',server_prod_deets_var['score']),'oos');
		insert_oos_box(make_results_box(server_prod_deets_var,"",true));
		elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
		sendOOSData(server_prod_deets_var);
		disp_analytics_send_flags['back_price_az']='ok';
		return true;
	}



	price_hold_all = resp_elem.find(cssLocs[server_prod_deets_var.website].price).contents();
	var chk_price=textFind(price_hold_all);
	console.log("chk price");
	console.log("%c"+chk_price,"color:brown");

	if (chk_price=='') {
		price_str = cleanPrice(textFind(resp_elem.find(cssLocs[server_prod_deets_var.website].price_alt).contents()));
	}
	else {
		price_str = cleanPrice(chk_price);
	}
	console.log("price string from back price");
	console.log("%c"+price_str,"color:brown");
	if (price_str=='') {
		console.log("price string from back price not found");	
		szcfu_prod=resp_elem.find(cssLocs.az.szcfu).contents();

		if (szcfu_prod.length>0) {
		
			if(server_prod_deets_var.is_dittory == true){
				// server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_az']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return true;			
			}

			console.log('ees confusing and dizzy, bare shelf, server hold me');
			sendAmazeSZCFUData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_az']='ok';
			return true;
		}

		if(server_prod_deets_var.is_dittory == true){
			// server_prod_deets_var.prod_price = "oos";
			disp_analytics_send_flags['back_price_az']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return true;			
		}
		price_str=0;
		//not a background fetch, get it
		//console.log('DEBUG: we not find valu-able information!');
		console.log("%c"+server_prod_deets_var.prod_price,"color:brown");	
		elastic_data_displayed=elastic_data_displayed+1;
		// insertStalePriceOnly(server_prod_deets_var,'found',server_prod_deets_var.prod_price);
		insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
		disp_analytics_send_flags['back_price_az']='ok';
	}

	else {
		//insert this
		console.log("price string from back price found");	

		//console.log('Really for reals? We are we here? we are here!');
		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = parseInt(price_str).toString();
			disp_analytics_send_flags['back_price_az']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return true;			
		}
		server_prod_deets_var.prod_price = parseInt(price_str).toString();
		console.log("%c"+server_prod_deets_var.prod_price,"color:brown");
		elastic_data_displayed=elastic_data_displayed+1;
		// insertPriceSendSimData(server_prod_deets_var,'found',price_str);
		insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
		disp_analytics_send_flags['back_price_az']='ok';
	}

} //closure
} //amazon



var fkPrSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var product_availablity, price_str;

	//console.log('DEBUG: fk price testing');


	// var resp_elem, price_hold_all, price_str, disc_prod;


	// resp_elem = $('<div/>').append($.parseHTML(response));


	// oos_prod=resp_elem.find(cssLocs.fk.oos).contents();

	// if (oos_prod.length>0) {
	// 	console.log('ees OOSed mate, no longer alive, bare shelf');
	// 	insertPrice(createStringLinkSim(server_prod_deets_var,'oos'),'oos');
	// 	elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
	// 	sendOOSData(server_prod_deets_var);
	// 	disp_analytics_send_flags['back_price_fk']='ok';
	// 	//fix for sellers going out of stock
	// 	//server_prod_deets_var.link=server_prod_deets_var.link.split(/\?pid=[\w]+/)[0] + server_prod_deets_var.link.match(/\?pid=[\w]+/);
	// 	//fetchPSimData(server_prod_deets_var,'fk');
	// 	return true;
	// }

	// disc_prod=resp_elem.find(cssLocs[server_prod_deets_var.website].disc_prod).contents();

	// if (disc_prod.length>0) {
	// 	console.log('ees dead mate, no longer alive, bhagwan ko pyaara');
	// 	sendDiscData(server_prod_deets_var);
	// 	disp_analytics_send_flags['back_price_fk']='ok';
	// 	return true;
	// }

	// price_hold_all = resp_elem.find(cssLocs[server_prod_deets_var.website].price).contents();
	// price_str = textFind(price_hold_all).split('.')[0];

	// var chk_price=$.trim(resp_elem.find(cssLocs.fk.price).text());

	// 	if (chk_price=='') {
	// 		price_str = cleanPrice(resp_elem.find(cssLocs.fk.price_alt).text());
	// 	}
	// 	else {
	// 		price_str= cleanPrice(chk_price);
	// 	}

	// 	//console.log('DEBUG: fk price: ');
	// 	//console.log(price_str);

	// 	var shp_price=0;
	// 	try {
	// 		shp_price = cleanPrice(tittlyFind(resp_elem.find(cssLocs.fk.price_shp).contents()).toLowerCase(),1);
	// 		if (shp_price.match('free') && ship_price!='') {
	// 			//looks like free delivery
	// 		}
	// 		else {


	// 			if (isNaN(parseInt(price_str)) || isNaN(parseInt(shp_price))) {
	// 				// hmm nannanana na re nan
	// 			}
	// 			else {
	// 				price_str = parseInt(price_str)+parseInt(shp_price);
	// 			}
	// 		}	

	// 	} catch(err) {
	// 		console.log('couldnt subsume shipping charges, sadly');

	// 	}




	// if (price_str==''){
	// 	//check title
	// 	var prod_title = cleanTitle($(cssLocs[server_prod_deets_var.website]).text());
	// 	if (prod_title=='') {
	// 		console.log('ees dead mate, no longer alive, bhagwan ko pyaara');
	// 		sendDiscData(server_prod_deets_var);
	// 		disp_analytics_send_flags['back_price_fk']='ok';
	// 		return true;
	// 	}
	// 	//insert old values

	// }

	// if (price_str=='') {
	// 	price_str=0;
	// 	elastic_data_displayed=elastic_data_displayed+1;
	// 	insertStalePriceOnly(server_prod_deets_var,'found',server_prod_deets_var.prod_price);
	// 	disp_analytics_send_flags['back_price_fk']='ok';
	// }

	// else {
	// 	//insert this
	// 	server_prod_deets_var.prod_price = price_str;
	// 	elastic_data_displayed=elastic_data_displayed+1;
	// 	insertPriceSendSimData(server_prod_deets_var,'found',price_str);
	// 	disp_analytics_send_flags['back_price_fk']='ok';
	// }

	try{
	product_availablity=response.RESPONSE.productInfo[server_prod_deets_var['uid'].slice(0,-2)]["availabilityDetails"]["product.availability.showBuyButton"];
	price_str= availablity=response.RESPONSE.productInfo[server_prod_deets_var['uid'].slice(0,-2)]["sellingPrice"];
	}
	catch(err){

	}





	if(product_availablity==true){
		disp_analytics_send_flags['back_price_fk']='ok';
		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = price_str;
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}

		server_prod_deets_var.prod_price = price_str;
		console.log("to sim data")
		elastic_data_displayed=elastic_data_displayed+1;
		// insertPriceSendSimData(server_prod_deets_var,'found',price_str);
		insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
		disp_analytics_send_flags['back_price_fk']='ok';

	}
	else{
		//oos
		disp_analytics_send_flags['back_price_fk']='ok';
		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = "oos";
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}

		console.log("normal insert");
		// insertPrice(createStringLinkSim(server_prod_deets_var,'oos'),'oos');
		insert_oos_box(make_results_box(server_prod_deets_var,"",true));
		elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
		disp_analytics_send_flags['back_price_fk']='ok';

	}


} //closure
} //flipkart

var sdPrSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, disc_prod;


	resp_elem = $('<div/>').append($.parseHTML(response));

	oos_prod=resp_elem.find(cssLocs.sd.oos).contents();

	if (oos_prod.length>0) {

		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = "oos";
			insertDittoryProduct(server_prod_deets_var);
			disp_analytics_send_flags['back_price_sd']='ok';
			return;			
		}
		console.log('ees OOSed mate, no longer alive, bare shelf');
		// insertPrice(createStringLinkSim(server_prod_deets_var,'oos'),'oos');
		insert_oos_box(make_results_box(server_prod_deets_var,"",true));
		elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
		sendOOSData(server_prod_deets_var);
		disp_analytics_send_flags['back_price_sd']='ok';
		return true;
	}

	disc_prod=resp_elem.find(cssLocs[server_prod_deets_var.website].disc_prod).contents();

	if (disc_prod.length>0) {

		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = "oos";
			insertDittoryProduct(server_prod_deets_var);
			disp_analytics_send_flags['back_price_sd']='ok';
			return;			
		}
		console.log('ees dead mate, no longer alive, bhagwan ko pyaara');
		sendDiscData(server_prod_deets_var);
		disp_analytics_send_flags['back_price_sd']='ok';
		return true;
	}

	price_hold_all = resp_elem.find(cssLocs[server_prod_deets_var.website].price).contents();
	price_str = textFind(price_hold_all).split('.')[0];

	if (price_str=='') {

		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = "oos";
			insertDittoryProduct(server_prod_deets_var);
			disp_analytics_send_flags['back_price_sd']='ok';
			return;			
		}
		price_str=0;
		console.log("inserting stale prices for sd");
		elastic_data_displayed=elastic_data_displayed+1;
		// insertStalePriceOnly(server_prod_deets_var,'found',server_prod_deets_var.prod_price);
		// insertPrice(createStringLinkSim(server_prod_deets_var,'oos'),'oos');
		insert_oos_box(make_results_box(server_prod_deets_var,"",true));
		disp_analytics_send_flags['back_price_sd']='ok';

	}

	else {
		//insert this
		server_prod_deets_var.prod_price = price_str;
		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = price_str;
			disp_analytics_send_flags['back_price_sd']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}

		
		elastic_data_displayed=elastic_data_displayed+1;
		// insertPriceSendSimData(server_prod_deets_var,'found',price_str);
		insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
		disp_analytics_send_flags['back_price_sd']='ok';
	}


} //closure
} //snapdeal


var myPrSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {


	

	var resp_elem, price_hold_all, price_str;


	resp_elem = $('<div/>').append($.parseHTML(response));

	price_hold_all = resp_elem.find(cssLocs[server_prod_deets_var.website].price).contents();
	price_str = textFind(price_hold_all).split('.')[0];

	if (price_str=='') {

		if(server_prod_deets_var.is_dittory == true){
			// server_prod_deets_var.prod_price = price_str;
			disp_analytics_send_flags['back_price_my']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}

		price_str=0;
		elastic_data_displayed=elastic_data_displayed+1;
		// insertStalePriceOnly(server_prod_deets_var,'found',server_prod_deets_var.prod_price);
		insert_price_result_box(make_results_box(server_prod_deets_var,"",false));

		disp_analytics_send_flags['back_price_my']='ok';

	}

	else {
		//insert this
		server_prod_deets_var.prod_price = price_str;

		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = price_str;
			disp_analytics_send_flags['back_price_my']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}

		elastic_data_displayed=elastic_data_displayed+1;
		// insertPriceSendSimData(server_prod_deets_var,'found',price_str);
		insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
		disp_analytics_send_flags['back_price_my']='ok';

	}


} //closure
} //myntra

var jaPrSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	


	var resp_elem, price_hold_all, price_str;


	resp_elem = $('<div/>').append($.parseHTML(response));

	price_hold_all = resp_elem.find(cssLocs[server_prod_deets_var.website].price).contents();
	price_str = textFind(price_hold_all).split('.')[0];

	if (price_str=='') {
		if(server_prod_deets_var.is_dittory == true){
			// server_prod_deets_var.prod_price = price_str;
			disp_analytics_send_flags['back_price_my']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}
		price_str=0;
		elastic_data_displayed=elastic_data_displayed+1;
		// insertStalePriceOnly(server_prod_deets_var,'found',server_prod_deets_var.prod_price);
		insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
		disp_analytics_send_flags['back_price_ja']='ok';

	}

	else {
		//insert this
		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = price_str;
			disp_analytics_send_flags['back_price_ja']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}
		server_prod_deets_var.prod_price = price_str;
		elastic_data_displayed=elastic_data_displayed+1;
		// insertPriceSendSimData(server_prod_deets_var,'found',price_str);
		insert_price_result_box(make_results_box(server_prod_deets_var,"",false));

		disp_analytics_send_flags['back_price_ja']='ok';

	}


} //closure
} //jabong

var hsPrSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {



	var resp_elem, price_hold_all, price_str;


	resp_elem = $('<div/>').append($.parseHTML(response));

	price_hold_all = resp_elem.find(cssLocs[server_prod_deets_var.website].price).contents();
	price_str = textFind(price_hold_all).split('.')[0];

	if (price_str=='') {
		if(server_prod_deets_var.is_dittory == true){
			// server_prod_deets_var.prod_price = price_str;
			disp_analytics_send_flags['back_price_hs']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}
		price_str=0;
		elastic_data_displayed=elastic_data_displayed+1;
		insertStalePriceOnly(server_prod_deets_var,'found',server_prod_deets_var.prod_price);
		disp_analytics_send_flags['back_price_hs']='ok';
	}

	else {
		//insert this
		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = price_str;
			disp_analytics_send_flags['back_price_hs']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}

		server_prod_deets_var.prod_price = price_str;
		elastic_data_displayed=elastic_data_displayed+1;
		insertPriceSendSimData(server_prod_deets_var,'found',price_str);
		disp_analytics_send_flags['back_price_hs']='ok';
	}



} //closure
} //homeshop

var scPrSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {



	var resp_elem, price_hold_all, price_str;


	resp_elem = $('<div/>').append($.parseHTML(response));


	canonical_link=resp_elem.find('link[rel="canonical"]').attr('href');

	if (canonical_link=='http://www.shopclues.com') {
		console.log('ees Gone mate, no longer alive, dead');
		sendDiscData(server_prod_deets_var);
		disp_analytics_send_flags['back_price_sc']='ok';
		return true;
	}


	price_hold_all = resp_elem.find(cssLocs[server_prod_deets_var.website].price).contents();
	price_str = textFind(price_hold_all).split('.')[0];

	if (price_str=='') {
		price_str=0;
		elastic_data_displayed=elastic_data_displayed+1;
		insertStalePriceOnly(server_prod_deets_var,'found',server_prod_deets_var.prod_price);
		disp_analytics_send_flags['back_price_sc']='ok';
	}

	else {
		//insert this
		server_prod_deets_var.prod_price = price_str;
		elastic_data_displayed=elastic_data_displayed+1;
		insertPriceSendSimData(server_prod_deets_var,'found',price_str);
		disp_analytics_send_flags['back_price_sc']='ok';
	}


} //closure
} //shopclues




var tcPrSuccess = function (server_prod_deets_var, fetch_url) {

	return function(response, textStatus,sent_req) {

		console.log('tc pr success');

		var resp_elem, price_hold_all, price_str;
		resp_elem = $('<div/>').append($.parseHTML(response));

		// price_str=parseInt($.trim(resp_elem.find('.product-detail .price .sale').text()).slice(1));

		price_str=resp_elem.find('input#product_list_price').attr('value');


		console.log('price is'+ price_str);


		if (price_str=='') {

		if(server_prod_deets_var.is_dittory == true){
			// server_prod_deets_var.prod_price = price_str;
			disp_analytics_send_flags['back_price_hs']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			// insertStalePriceOnly(server_prod_deets_var,'found',server_prod_deets_var.prod_price);
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_tc']='ok';
		}

		else {
			//insert this
		if(server_prod_deets_var.is_dittory == true){
			server_prod_deets_var.prod_price = price_str;
			disp_analytics_send_flags['back_price_tc']='ok';
			insertDittoryProduct(server_prod_deets_var);
			return;			
		}
			server_prod_deets_var.prod_price = price_str;
			elastic_data_displayed=elastic_data_displayed+1;
			// insertPriceSendSimData(server_prod_deets_var,'found',price_str);
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_tc']='ok';
		}

	}
}


var ajPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {

		var resp_elem = $('<div/>').append(response);
		var price = "";
		var is_oos = "";
		if($(resp_elem).find("script:contains(window.__PRELOADED_STATE__ =)").length>0){
			var page_deets = JSON.parse($.trim($(resp_elem).find("script:contains(window.__PRELOADED_STATE__ =)").text().replace("window.__PRELOADED_STATE__ =",'')).replace(/;$/,""));
			price = page_deets.product.productDetails.variantOptions[0].priceData.value;
			is_oos = true;
			for(var i=0; i<page_deets.product.productDetails.variantOptions.length;i++){
				if(page_deets.product.productDetails.variantOptions[i].stock.stockLevelStatus == "outOfStock"){
					console.log(page_deets.product.productDetails.variantOptions[i].stock.stockLevelStatus);
				}else{
					is_oos = false;
					break;
				}
			}
		}
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_aj']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_aj']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_aj']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_aj']='ok';
			return true;
		}
	}
}

var ciPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var resp_elem = $('<div/>').append($.parseHTML(response));
		var price = "";
		var is_oos = "";
		is_oos = $(resp_elem).find("#add_to_cart > input").length == 0;
		price = $(resp_elem).find("#our_price_display").contents() && $(resp_elem).find("#our_price_display").contents().filter(function(){return this.nodeType==3}).length>0 && $(resp_elem).find("#our_price_display").contents().filter(function(){return this.nodeType==3})[0].textContent;
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_ci']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_ci']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_ci']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_ci']='ok';
			return true;
		}		
	}
}

var jpPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		var resp_elem = $('<div/>').append($.parseHTML(response));
		is_oos = $(resp_elem).find(".add2BagDisabled").length>0;
		price = $(resp_elem).find("#dPrice").length>0 && $(resp_elem).find("#dPrice").text();
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_jp']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_jp']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_jp']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_jp']='ok';
			return true;
		}
	}
}

var lrPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		// resp_elem = $('<div/>').append($.parseHTML(response));
		var resp_elem = $('<div/>').append(response);

		var variant_id = $(resp_elem).find("#variant_id").attr('value');
		var pid = $(resp_elem).find("#product_id").attr('value');
		var price = $(resp_elem).find("#price_sku").attr('value');
		var url = "https://www.limeroad.com/product/product_dyn_call?product="+ pid + "&variants=[\""+variant_id +"\"]";
		console.log("lr oos check");
		var stock_req = backPostGet({
			type:"get",
			url: url,
			timeout: 3500
		});

		stock_req.done(function(stock_resp){
			console.log("lr oos check");
			is_oos = stock_resp.inventory_details[variant_id].available_stock == 0;
			console.log('is_oos',is_oos);
			console.log(is_oos,price);
			if(!is_oos && price!=""){
				// insert price
				if(server_prod_deets_var.is_dittory == true){
					server_prod_deets_var.prod_price = price;
					disp_analytics_send_flags['back_price_lr']='ok';
					insertDittoryProduct(server_prod_deets_var);
					return;			
				}
				price_str=0;
				elastic_data_displayed=elastic_data_displayed+1;
				insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
				disp_analytics_send_flags['back_price_lr']='ok';
			}else{
				// insert oos
				if(server_prod_deets_var.is_dittory == true){
					server_prod_deets_var.prod_price = "oos";
					disp_analytics_send_flags['back_price_lr']='ok';
					insertDittoryProduct(server_prod_deets_var);
					return;			
				}
				insert_oos_box(make_results_box(server_prod_deets_var,"",true));
				elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
				sendOOSData(server_prod_deets_var);
				disp_analytics_send_flags['back_price_lr']='ok';
				return true;
			}
		});
	}
}

var miPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		var resp_elem = $('<div/>').append(response);
		is_oos = $(resp_elem).find(".sold_div").length>0;
		price = $(resp_elem).find("[itemprop='price']").length>0 && $(resp_elem).find("[itemprop='price']").attr('content');
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_mi']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_mi']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_mi']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_mi']='ok';
			return true;
		}
	}
}

var soPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		var resp_elem = $('<div/>').append(response);

		is_oos = $(resp_elem).find(".availability.out-of-stock").length>0;
		price = $(resp_elem).find("#product_addtocart_form > div.product-shop > div.price-box > span").length>0 && $(resp_elem).find("#product_addtocart_form > div.product-shop > div.price-box > span").text().replace("Rs.","");
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_so']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_so']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_so']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_so']='ok';
			return true;
		}
	}
}

var voPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var resp_elem = $('<div/>').append(response);
		var price = "";
		var is_oos = "";
		if($(resp_elem).find("script:contains(window.__data=)").length>0){
			var page_deets = JSON.parse($.trim($(resp_elem).find("script:contains(window.__data=)").text().replace("window.__data=",'')).replace(/;$/,""));
			var deets_key = Object.keys(page_deets.pdp.pdpData)[0]
			var deets = page_deets.pdp.pdpData[deets_key];
			is_oos = deets.product_stock == 0;
			price = parseInt(deets.price.replace("Rs.","").replace("Rs",""));
		}
		console.log('is_oos');
		console.log(is_oos,price);		
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_vo']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_vo']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_vo']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_vo']='ok';
			return true;
		}
	}
}

var fiPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		var resp_elem = $('<div/>').append(response);

		is_oos = $(resp_elem).find(".search_no").length > 0;
		price = $(resp_elem).find("#lblOfferPrice > span.sp_amt").length>0 && $(resp_elem).find("#lblOfferPrice > span.sp_amt").text().replace(",","");
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_fi']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_fi']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_fi']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_fi']='ok';
			return true;
		}
	}
}

var cyPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		var resp_elem = $('<div/>').append(response);

		is_oos = $(resp_elem).find("h1:contains(Sorry This Product Does't Exist)").length > 0;
		price = $(resp_elem).find(".new-price").length>0 && $(resp_elem).find(".new-price").text().replace(",","").replace("RS.","");
		console.log(price);
		if(!price){
			price = $(resp_elem).find(".price-span") && $(resp_elem).find(".price-span").text()
		}
		console.log('is_oos',is_oos);
		console.log('price',price);
		if(!is_oos && price!=""){
			// insert price
			console.log("setting price for cy");
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_cy']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_cy']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_cy']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_cy']='ok';
			return true;
		}
	}
}

var sbPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		var resp_elem = $('<div/>').append(response);
		is_oos = $(resp_elem).find(".oos-btn").length >0;
		price = $(resp_elem).find(".sku-price-box .price").length > 0  && $(resp_elem).find(".sku-price-box .price").text().replace(",","");

		console.log('is_oos',is_oos);
		console.log('price',price);
		console.log(is_oos,price);

		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_sb']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_sb']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_sb']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_sb']='ok';
			return true;
		}
	}
}
// not working
var kvPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {

		var resp_elem = $('<div/>').append(response);
		var price = "";
		var is_oos = "";
		if($(resp_elem).find("script:contains(window.__INITIAL_STATE__ =)").length>0){
			var page_deets = JSON.parse($.trim($(resp_elem).find("script:contains(window.__INITIAL_STATE__ =)").text().replace("window.__INITIAL_STATE__ =",'')).replace(/;$/,""));
			is_oos = page_deets.productPage.productData.isProductOutOfStock;
			price = page_deets.productPage.productData.price;
		}
		console.log('is_oos');
		console.log(is_oos,price);
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_kv']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_kv']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_kv']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_kv']='ok';
			return true;
		}
	}
}

// not working
var flPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		var resp_elem = $('<div/>').append(response);
		is_oos = $(resp_elem).find("div.mainCntr > div.prodMain > div.prodCntr > div.prodRight > h4 > span.red").length>0;
		price = $(resp_elem).find("div.mainCntr > div.prodMain > div.prodCntr > div.prodRight > h4").length>0 && parseInt($(resp_elem).find("div.mainCntr > div.prodMain > div.prodCntr > div.prodRight > h4").contents().filter(function(){return this.nodeType==3})[0].textContent);
		if(!price){
			price = $(resp_elem).find("div.mainCntr > div.prodMain > div.prodCntr > div.prodRight > h4").length>0 && parseInt($(resp_elem).find("div.mainCntr > div.prodMain > div.prodCntr > div.prodRight > h4").contents().filter(function(){return this.nodeType==3})[1].textContent); 
		}
		console.log('is_oos',is_oos);
		console.log('price');
		console.log(is_oos,price);
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_kv']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_kv']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_kv']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_kv']='ok';
			return true;
		}
	}
}


var cvPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		var resp_elem = $('<div/>').append(response);
		is_oos = $(resp_elem).find(".btn.btn-soldout").length>0;
		price = $(resp_elem).find(".pdp-offer-price").length>0 && $(resp_elem).find(".pdp-offer-price").text().replace('₹','');
		console.log('is_oos',is_oos);
		console.log('price');
		console.log(is_oos,price);
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_cv']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_cv']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_cv']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_cv']='ok';
			return true;
		}
	}
}

var ptPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {

		var price = "";
		var is_oos = "";
		is_oos = !response.instock;
		price = response.offer_price
		console.log('is_oos',is_oos);
		console.log('price');
		console.log(is_oos,price);
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_pt']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_pt']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_pt']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_pt']='ok';
			return true;
		}
	}
}

var chPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		is_oos = Boolean(response.stock_flags.out_of_stock_flag)
		price = parseInt(response.product.price)
		if(response.product.is_special_price){
			price = parseInt(response.product.special_price);
		}
		console.log('is_oos',is_oos);
		console.log('price');
		console.log(is_oos,price);
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_ch']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_ch']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_ch']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_ch']='ok';
			return true;
		}
	}
}

var fyPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		console.log(response);
		var prod_variants = response.product.productVariants

		for(var i=0; i<prod_variants.length; i++){
			if(prod_variants[i].selected){
				is_oos = !prod_variants[i].avail
				price = prod_variants[i].sellerSKUs[0].offerPrice
			}
		}

		if(!is_oos && !price){
			is_oos = prod_variants[0].sellerSKUs[0].inventory == 0;
			price = prod_variants[0].sellerSKUs[0].offerPrice;
		}else{
			console.log(is_oos,price,prod_variants.length)
			console.log(!is_oos,!price,prod_variants.length);
		}

		console.log('is_oos',is_oos);
		console.log('price');
		console.log(is_oos,price);

		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_fy']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_fy']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_fy']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_fy']='ok';
			return true;
		}

	}
}

var nnPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
	
		var price = "";
		var is_oos = "";
		console.log(response);

		is_oos = !response.data.mainStyle.inStock;
		price =  response.data.mainStyle.sellingPriceRange.min;

		console.log('is_oos',response.data.mainStyle.inStock);
		console.log('price');
		console.log(is_oos,price);
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_nn']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_nn']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_nn']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_nn']='ok';
			return true;
		}
	}
}

var itPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {
		var price = "";
		var is_oos = "";
		var resp_elem = $('<div/>').append(response);

		is_oos = $(resp_elem).find(".majortitle").text() === "Oopps!";
		price =  parseInt($(resp_elem).find('h2.price').text().replace(/[^0-9.]/g, "").replace(/^./g,""));
		console.log('is_oos',is_oos);
		console.log('price');
		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_it']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_it']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_it']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_it']='ok';
			return true;
		}
	}
}

var vmPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {

		var price = "";
		var is_oos = "";
		var resp_elem = $('<div/>').append(response);

		is_oos = $(resp_elem).find(".out-of-stock-label").length >0;
		price =  parseInt($.trim($(resp_elem).find(".price-box .price[id^='product-price']").text().replace('Rs.','').replace(',','')));
		if(!price){
			price = parseInt($.trim($(resp_elem).find(".price-box .regular-price[id^='product-price']").text().replace('Rs.','').replace(',','')));
		}
		console.log('is_oos',is_oos);
		console.log('price');
		console.log(is_oos,price);

		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_vm']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_vm']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_vm']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_vm']='ok';
			return true;
		}
	}
}

var rnPrSuccess = function (server_prod_deets_var, fetch_url) {
	return function(response, textStatus,sent_req) {

		var price = "";
		var is_oos = "";
		resp_elem = $('<div/>').append(response);

		is_oos = !($(resp_elem).find("[itemprop='price']").length >0 && $(resp_elem).find(".product-title h2").text())
		price =  parseInt($(resp_elem).find("[itemprop='price']").text().replace('Rs.','').replace(',',''))

		console.log('is_oos',is_oos);
		console.log('price');
		console.log(is_oos,price);

		if(!is_oos && price!=""){
			// insert price
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = price;
				disp_analytics_send_flags['back_price_rn']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			price_str=0;
			elastic_data_displayed=elastic_data_displayed+1;
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			disp_analytics_send_flags['back_price_rn']='ok';
		}else{
			// insert oos
			if(server_prod_deets_var.is_dittory == true){
				server_prod_deets_var.prod_price = "oos";
				disp_analytics_send_flags['back_price_rn']='ok';
				insertDittoryProduct(server_prod_deets_var);
				return;			
			}
			insert_oos_box(make_results_box(server_prod_deets_var,"",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
			sendOOSData(server_prod_deets_var);
			disp_analytics_send_flags['back_price_rn']='ok';
			return true;
		}
	}
}
