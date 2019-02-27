function getURLDeets() {
    console.log('In URL Deets Parsimony!');
    //var url_val  = $('#emfl input').val();
    var url_val  = $('div.add-link input.form-control').val();
    console.log(url_val);

    console.log(window.location.href);

    if (valdoUreldo(url_val)) {
    	console.log('belissimo! looks like snow in perito moreno!');
		//showTempAlert('Hang on, we are getting the product details!','alert-success',1000,$('div.add-link'));

    	//if site is tracked and is product page? how can we know if product page?
    	//hmm, don't check if product page, not necessary

    	if (url_val.match('amazon.in')) {
    		if ((url_val.match('/dp/') || url_val.match('/gp/product/')) && (!url_val.match('/gp/product/handle-buy'))){
    			//looks fine
    		} else {
    			showTempAlert('This does not look like an amazon product page','alert-error',3000,$('div.add-link'));
				$('#addlinktext').val('');
				return;

    		}	
   		 }	

		else if (url_val.match('snapdeal.com') && !url_val.match('\\/product\\/')) {

			showTempAlert('This does not look like a snapdeal product page','alert-error',3000,$('div.add-link'));
			$('#addlinktext').val('');
			return;
		} 

    		fetchWishProdData(url_val);


    }
    else {
    	console.log('umm looks like white noise');
    	showTempAlert('This does not look like a valid link!','alert-error',3000,$('div.add-link'));
		$('#addlinktext').val('');
    }
} // getUrlDeets

function valdoUreldo(url_val) {
	if(/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url_val)) {
  		return true;
	} else {
  		return false;
	}
} //valdoUreldo

// check if url is valid

// check if url is product?

//I don't understand retail. Do I want to be in retail? Life is mysterious and short, which makes for a potent tragedy that is soon forgotten.

//fetchWishProdData(url_val,fetch_site)



var azParseProd = function(response) {

	console.log('Digesting, chewing, mulling');


	var resp_elem, price_hold_all, price_str;

	resp_elem = $('<div/>').append($.parseHTML(response));

	
	prod_deets.prod_site='az';



	prod_deets.prod_categ = $.trim(resp_elem.find(cssLocs.az.category).text());
	prod_deets.prod_categ_alt = $.trim(resp_elem.find(cssLocs.az.category_alt).text());

	//cssLocs in helperfuncs.js has the details stored
	prod_deets.prod_title = cleanTitle(resp_elem.find(cssLocs.az.title).text());
	prod_deets.prod_title_raw = $.trim(resp_elem.find(cssLocs.az.title).text());

	//store text in brackets separately; this makes search heard 
	prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

	//if price not in this location, look in alternate
	//var chk_price=$.trim(resp_elem.find(cssLocs.az.price).text());
	var chk_price=textFind(resp_elem.find(cssLocs.az.price).contents());

	if (chk_price=='') {
		prod_deets.prod_price = cleanPrice(textFind(resp_elem.find(cssLocs.az.price_alt).contents()));
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

	prod_deets.prod_img = $.trim(resp_elem.find(cssLocs.az.prod_img).attr('src'));

	prod_deets.prod_img = repairimglinks(prod_deets.prod_img);

	console.log(prod_deets);
	

	if (prod_deets.prod_img==undefined || prod_deets.prod_img=='') {
		showTempAlert('This does not look like a product page','alert-error',3000,$('div.add-link'));
		$('#addlinktext').val('');
	} else {

	insertPiddle(prod_deets,resp_elem);
	sendWishProd();

	}


} //amazon



var fkParseProd = function(response) {


	var resp_elem, price_hold_all, price_str;


	resp_elem = $('<div/>').append($.parseHTML(response));

	prod_deets.prod_site='fk';


	prod_deets.prod_categ = $.trim(resp_elem.find(cssLocs.fk.category).text());
	prod_deets.prod_categ_alt = $.trim(resp_elem.find(cssLocs.fk.category_alt).text());

	//cssLocs in helperfuncs.js has the details stored
	prod_deets.prod_title = cleanTitle(resp_elem.find(cssLocs.fk.title).text());
	prod_deets.prod_title_raw = $.trim(resp_elem.find(cssLocs.fk.title).text());

	//store text in brackets separately; this makes search heard 
	prod_deets.prod_bracktitle = $.trim(resp_elem.find(cssLocs.fk.bracktitle).text());

	//if price not in this location, look in alternate
	var chk_price=$.trim(resp_elem.find(cssLocs.fk.price).text());

	if (chk_price=='') {
		prod_deets.prod_price = cleanPrice(resp_elem.find(cssLocs.fk.price_alt).text());
	}
	else {
		prod_deets.prod_price = cleanPrice(chk_price);
	}




	prod_deets.prod_srch = prod_deets.prod_title;

	try {
		prod_deets.prod_img = $.trim(resp_elem.find(cssLocs.fk.prod_thmb).attr('style')).split('-image:url(')[1].split(')')[0];
		prod_deets.prod_img = repairimglinks(prod_deets.prod_img);
	}	
	catch(err) {
		console.error('flip image not found!');
		prod_deets.prod_img='';
	}
	//console.log('mc: '+ prod_deets.prod_srch+' '+prod_deets.prod_price);


	console.log(prod_deets);
	

	if (prod_deets.prod_img==undefined || prod_deets.prod_img=='') {
		showTempAlert('This does not look like a product page','alert-error',3000,$('div.add-link'));
		$('#addlinktext').val('');
	} else {

	insertPiddle(prod_deets,resp_elem);
	sendWishProd();

	}



} //flipkart

var sdParseProd = function(response) {


	var resp_elem, price_hold_all, price_str;

	resp_elem = $('<div/>').append($.parseHTML(response));

	prod_deets.prod_site='sd';


	prod_deets.prod_categ = $.trim(resp_elem.find(cssLocs.sd.category).text());
	prod_deets.prod_categ_alt = $.trim(resp_elem.find(cssLocs.sd.category_alt).text());



	//cssLocs in helperfuncs.js has the details stored
	prod_deets.prod_title = cleanTitle(resp_elem.find(cssLocs.sd.title).text());
	prod_deets.prod_title_raw = $.trim(resp_elem.find(cssLocs.sd.title).text());

	//store text in brackets separately; this makes search heard 
	prod_deets.prod_bracktitle = $.trim(resp_elem.find(cssLocs.sd.bracktitle).text());

	//if price not in this location, look in alternate
	var chk_price=$.trim(resp_elem.find(cssLocs.sd.price).text());

	if (chk_price=='') {
		prod_deets.prod_price = cleanPrice(resp_elem.find(cssLocs.sd.price_alt).text());
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


	prod_deets.prod_img = $.trim(resp_elem.find(cssLocs.sd.prod_thmb).attr('src'));

	prod_deets.prod_img = repairimglinks(prod_deets.prod_img);


	console.log(prod_deets);
	

	if (prod_deets.prod_img==undefined || prod_deets.prod_img=='') {
		showTempAlert('This does not look like a product page','alert-error',3000,$('div.add-link'));
		$('#addlinktext').val('');
	} else {
	insertPiddle(prod_deets,resp_elem);
	sendWishProd();

	}

} //snapdeal


var myParseProd = function(response) {

	var resp_elem, price_hold_all, price_str;


	resp_elem = $('<div/>').append($.parseHTML(response));

	prod_deets.prod_site='my';

	$('#'+whisperbox).css('visibility','visible');

	prod_deets.prod_categ = $.trim(resp_elem.find(cssLocs.my.category).text());
	prod_deets.prod_categ_alt = $.trim(resp_elem.find(cssLocs.my.category_alt).text());



	//cssLocs in helperfuncs.js has the details stored
	prod_deets.prod_title = cleanTitle(resp_elem.find(cssLocs.my.title).text());
	prod_deets.prod_title_raw = $.trim(resp_elem.find(cssLocs.my.title).text());

	//store text in brackets separately; this makes search heard 
	prod_deets.prod_bracktitle = $.trim(resp_elem.find(cssLocs.my.bracktitle).text());

	//if price not in this location, look in alternate
	var chk_price=textFind(resp_elem.find(cssLocs.my.price).contents());

	if (chk_price=='') {
		prod_deets.prod_price = textFind(resp_elem.find(cssLocs.my.price_alt).contents());
	}
	else {
		prod_deets.prod_price = cleanPrice(chk_price);
	}

	prod_deets.prod_srch = prod_deets.prod_title;

	prod_deets.prod_img = $.trim(resp_elem.find(cssLocs.my.prod_img).attr('src'));
	prod_deets.prod_img = repairimglinks(prod_deets.prod_img);
	console.log(prod_deets);
	

	if (prod_deets.prod_img==undefined || prod_deets.prod_img=='') {
		showTempAlert('This does not look like a product page','alert-error',3000,$('div.add-link'));
		$('#addlinktext').val('');
	} else {

	insertPiddle(prod_deets,resp_elem);
	sendWishProd();

	}

} //myntra

var jaParseProd = function(response) {


	var resp_elem, price_hold_all, price_str;


	resp_elem = $('<div/>').append($.parseHTML(response));

	prod_deets.prod_site='ja';


	prod_deets.prod_categ = $.trim(resp_elem.find(cssLocs.ja.category).text());
	prod_deets.prod_categ_alt = $.trim(resp_elem.find(cssLocs.ja.category_alt).text());


	//cssLocs in helperfuncs.js has the details stored
	prod_deets.prod_title = cleanTitle(textFindAll(resp_elem.find(cssLocs.ja.title).contents())) + ' ' + $.trim(resp_elem.find(cssLocs.ja.bracktitle).text());
	prod_deets.prod_title_raw = $.trim(textFindAll(resp_elem.find(cssLocs.ja.title).contents())) + ' ' + $.trim(resp_elem.find(cssLocs.ja.bracktitle).text());

	//store text in brackets separately; this makes search heard 
	prod_deets.prod_bracktitle = $.trim(resp_elem.find(cssLocs.ja.bracktitle).text());

	//if price not in this location, look in alternate
	var chk_price=textFind(resp_elem.find(cssLocs.ja.price).contents());

	if (chk_price=='') {
		prod_deets.prod_price = textFind(resp_elem.find(cssLocs.ja.price_alt).contents());
	}
	else {
		prod_deets.prod_price = cleanPrice(chk_price);
	}



	prod_deets.prod_srch = prod_deets.prod_title;

	prod_deets.prod_img = $.trim(resp_elem.find(cssLocs.ja.prod_thmb).attr('data-image-big'));

	console.log(prod_deets);
	

	if (prod_deets.prod_img==undefined || prod_deets.prod_img=='') {
		showTempAlert('This does not look like a product page','alert-error',3000,$('div.add-link'));
		$('#addlinktext').val('');
	} else {

	insertPiddle(prod_deets,resp_elem);
	sendWishProd();

	}


} //jabong

var ebParseProd = function(response) {


	var resp_elem, price_hold_all, price_str;


	resp_elem = $('<div/>').append($.parseHTML(response));


	prod_deets.prod_site='eb';


	prod_deets.prod_categ = $.trim(resp_elem.find(cssLocs.eb.category).text());
	prod_deets.prod_categ_alt = $.trim(resp_elem.find(cssLocs.eb.category_alt).text());


	//cssLocs in helperfuncs.js has the details stored
	prod_deets.prod_title_raw = $.trim(tittlyFind(resp_elem.find(cssLocs.eb.title).contents()));
	prod_deets.prod_title = cleanTitle(prod_deets.prod_title_raw);

	//store text in brackets separately; this makes search heard 
	prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

	//if price not in this location, look in alternate
	var chk_price=textFind(resp_elem.find(cssLocs.eb.price).contents());

	if (chk_price=='') {
		prod_deets.prod_price = textFind(resp_elem.find(cssLocs.eb.price_alt).contents());
	}
	else {
		prod_deets.prod_price = cleanPrice(chk_price);
	}


	prod_deets.prod_srch = prod_deets.prod_title;

	prod_deets.prod_img = $.trim(resp_elem.find(cssLocs.eb.prod_img).attr('src'));

	console.log(prod_deets);


	if (prod_deets.prod_img==undefined || prod_deets.prod_img=='') {
		showTempAlert('This does not look like a product page','alert-error',3000,$('div.add-link'));
		$('#addlinktext').val('');
	} else {

	insertPiddle(prod_deets,resp_elem);
	sendWishProd();

	}
	
} //homeshop

var scParseProd = function(response) {

	var resp_elem, price_hold_all, price_str;


	resp_elem = $('<div/>').append($.parseHTML(response));


	prod_deets.prod_site='sc';


	prod_deets.prod_categ = $.trim(resp_elem.find(cssLocs.sc.category).text());
	prod_deets.prod_categ_alt = $.trim(resp_elem.find(cssLocs.sc.category_alt).text());



	//cssLocs in helperfuncs.js has the details stored
	prod_deets.prod_title = cleanTitle(textFindAll(resp_elem.find(cssLocs.sc.title).contents()));
	prod_deets.prod_title_raw = $.trim(textFindAll(resp_elem.find(cssLocs.sc.title).contents()));

	//store text in brackets separately; this makes search heard 
	prod_deets.prod_bracktitle = $.trim(resp_elem.find(cssLocs.sc.bracktitle).text());

	//if price not in this location, look in alternate
	var chk_price=textFind(resp_elem.find(cssLocs.sc.price).contents());

	if (chk_price=='') {
		prod_deets.prod_price = textFind(resp_elem.find(cssLocs.sc.price_alt).contents());
	}
	else {
		prod_deets.prod_price = cleanPrice(chk_price);
	}

	prod_deets.prod_srch = prod_deets.prod_title;

	prod_deets.prod_img = $.trim(resp_elem.find(cssLocs.sc.prod_thmb).attr('content'));
	insertPiddle(prod_deets, resp_elem);
	console.log(prod_deets);

	//if missing, then error message needs to be displayed!

	if (prod_deets.prod_img==undefined || prod_deets.prod_img=='') {
		showTempAlert('This does not look like a product page','alert-error',3000,$('div.add-link'));
		$('#addlinktext').val('');
	} else {

	sendWishProd();

	}


} //shopclues


function succSendWish(response) {
	console.log('Great success! Paint into wall');
	console.log(response);
	
	var piddle = prod_deets.product_id+prod_deets.prod_site;
	$('#makkhi_pop_id').text(piddle);
	$('#makkhi_pop_img_src').text(prod_deets.prod_img);
	$('#makkhidiv ').click();
}

function failSendWish(response) {
	console.log('Woe is me! Terrible. Apologize');
	showTempAlert('Whoops! Something went wrong. Try again','alert-error',3000,$('div.add-link'));
	console.log(response);
}

function showTempAlert(alert_msg,alert_level,show_time,insert_after_elem) {
	$('<span class="alert '+alert_level+'">'+alert_msg+'</span>').insertAfter(insert_after_elem);
	setTimeout(function() {
	    $('span.alert').fadeOut(1000,function(){
	    	$(this).remove();
	    });
	}, show_time);
}