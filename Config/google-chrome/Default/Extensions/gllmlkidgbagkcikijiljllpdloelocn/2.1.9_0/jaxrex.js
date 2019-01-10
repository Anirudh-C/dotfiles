var contentScriptListener = function(message, sender, sendResponse) {
	console.log("in contentscript listener, method: " + message.method);
	if (message.method == "applyCoupon") {
		applyCouponAfterTabSwitch(message);
	}
}

var checkCassy= function() {
	console.log('mc: attempting connection with mothership for Cassy');
	chrome.runtime.sendMessage({method: "getCassy"}, parseCassyMissive); //chromeextension
	return;
}

var checkUUID = function() {
	console.log('mc: attempting connection with mothership for uustuff');
	chrome.runtime.sendMessage({method: "getUUID"}, sendRequestClosure); //chromeextension
	return;
}

var trackMotion = function(motion) {
	console.log('mc: attempting to send foo msg to mothership');
	chrome.runtime.sendMessage({ method: "trackMotion", motion: motion });
	return;
}

var trackCateg = function(site, categ, subcateg) {
	console.log('mc: attempting to send where tis thing lies');
	chrome.runtime.sendMessage({ method: "trackCateg", site: site, categ: categ, subcateg: subcateg});
	chrome.runtime.sendMessage({ method: "trackCateg1", site: site, categ: categ, subcateg: subcateg});
	return;
}

var trackDisplayedResults=function(uid="testuid"){
	if(prod_deets.product_id!=''||prod_deets.product_id!=undefined){
		//site_domain_map[prod_deets.prod_site.toLowerCase()]
		/*
		console.log("mc:sending displayed data for "+prod_deets.product_id+prod_deets.prod_site.toLowerCase());
		console.log(prod_deets.prod_site.toLowerCase());
		console.log("displayed product "+uid);
		chrome.runtime.sendMessage({ method: "trackDisplayedResults", prod_page: prod_deets.product_id+prod_deets.prod_site.toLowerCase(), displayed_prod:uid, view_id: "test_id",});
		*/
		
		// displayed_results.push(uid);
	}
	
	//chrome.runtime.sendMessage({ method: "dispElastic", uid:uid});
}

var reportMystuff = function() {
	console.log('mc: attempting to report mystuff to mothership');
	chrome.runtime.sendMessage({method: 'mystuff'});
}

var reportTrackHit = function() {
	console.log('mc: attempting to report prod track stuff');
	chrome.runtime.sendMessage({method: 'trackprod'});
}
var yogiHit = function() {
	console.log('mc: spiritual summon to the senseiwagi');
	chrome.runtime.sendMessage({method: 'yogisend'});
}
var stealsHit = function() {
	console.log('mc: a steal on box was being told to mommy');
	chrome.runtime.sendMessage({method: 'steals'});
}
var getCartList = function(couponSite) {
	console.log('mc: attempting to find cart page in opened tabs');
	chrome.runtime.sendMessage({method: "getCartList"}, handleCartPagesWrapper(couponSite));
	return;
}

var requestTabPermissions = function() {
	console.log('trying to get tab permissions');
	chrome.runtime.sendMessage({method: "getTabPermissions"}, handleTabReqResponse);
	return;
}

var requestWebReqPermission = function() {
	console.log('mc: attempting to get webReq permissions');
	chrome.runtime.sendMessage({method: "getWebReqPerm"}, handleWebReqPerm);
}

var registerWebRequestListeners = function() {
	console.log('msg: sending request to register webrequest listeners');
	chrome.runtime.sendMessage({method: "registerWebRequestListeners"});
}

var removeTabPermissions = function() {
	console.log('removing tab permissions: jaxrex');
	chrome.runtime.sendMessage({method: "removeTabPermissions"});
	return;
}

var removeCookiePermissions = function() {
	console.log('removing cookie permissions: jaxrex');
	chrome.runtime.sendMessage({method: "removeCookiePermissions"});
	return;
}

var handleTabReqResponse = function(response){
	console.log('handleTabReqReponse');
	if (response.status == 'haveAlready' || response.status == 'accepted') {
		$('#tabs').checked = true;
	} else {
		$('#tabs').checked = false;
	}
}

var handleWebReqPerm = function(response) {
	console.log('handleWebReqPerm');
	if (response.status == 'haveAlready' || response.status == 'accepted') {
		// now add a fish catching net. Catching myntra fishes. We vaccinate them.
		registerWebRequestListeners();
		// now reload the window.
		window.setTimeout(function () {
			window.location.reload();
		}, 500);

	} else {
		// o, no permissions!
		console.log('Got no webReq permission :(');
	}
}


var checkTabPerm = function () {
	console.log('checking tab permissions: jaxrex');
	chrome.runtime.sendMessage({method: "checkTabPerm"}, checkTabPermHandler);
	return;
}

var checkTabPermHandler = function (response) {
	console.log('checking Tab Perms');
	console.log(response);
	var status = response.status;
	var asked = response.asked;
	var settingsHit = response.settingsHit;
	if (!status && !asked && !eventAdded && settingsHit < 4) {
		// don't have permissions. hang in a 'prompt'
		showRedirectMsg();
		eventAdded = true;
	} else {
		// have permissions already, do nothing.
	}
}

var checkCookiePerm = function () {
	console.log('checking cookie permissins: jaxrex');
	chrome.runtime.sendMessage({method: "checkCookiePerm"}, checkCookiePermHandler);
	return;
}

var checkCookiePermHandler = function (response) {
	console.log('checking Cookie Perms');
	console.log(response);
	var status = response.status;
	var asked = response.asked;
	var settingsHit = response.settingsHit;
	if (!status && !asked && !eventAdded && settingsHit < 4) {
		// don't have permissions; hang in a redirect
		showRedirectMsg();
		eventAdded = true;
	} else {
		// have permissions already; or asked already
	}
}

var showRedirectMsg = function () {
	console.log('in  show Redirect msg');
//	var tooltipStyle = '<style>#redirectMsg h1{color: black;}</style>';
//	$('head').append(tooltipStyle);
	var logoURL = chrome.extension.getURL('logo_housefly.png');
	var boxHtml = '<div id="redirectMsg"><p>To enable exciting new features,\
					 go to options page!</p><button type="button">options</button><img src="'+logoURL+'"></div>';
	$('body:first').prepend(boxHtml);
	
	$('#redirectMsg').css({
		'display': 'none',
		'position': 'fixed',
		'top': '50px',
		'left': '20px',
		'width': '270px',
		//'height': '30px',
		'z-index': '9999',
		'-webkit-border-radius': '4px',
		'-moz-border-radius': '4px',
		'border-radius': '4px',
		'background-color':'#f9fae1',
//		'-webkit-box-shadow': '0 0 70px 7px #C2C2C2',
		'box-shadow': '0 0 7px 4px #C2C2C2',
		'padding': '10px',
	});
	$('#redirectMsg h1').css({
		'font-size': '1em',
		'color': '#262626',
		'text-align': 'center',
	});
	$('#redirectMsg p').css({
		'padding-top': '3px',
		'font-size': '0.9em',
		'color': '#383838',
		//'text-align': 'center'
	});
	$('#redirectMsg img').css({
		'position': 'relative',
		'left': '77px',
		'bottom': '0'
	})
	
	
	$('#redirectMsg button').css({
		'background': '#3498db',
//		'background-image': '-webkit-linear-gradient(top, #3498db, #2980b9)',
//		'background-image': '-moz-linear-gradient(top, #3498db, #2980b9)',
//		'background-image': '-ms-linear-gradient(top, #3498db, #2980b9)',
//		'background-image': '-o-linear-gradient(top, #3498db, #2980b9)',
//		'background-image': 'linear-gradient(to bottom, #3498db, #2980b9)',
		'-webkit-border-radius': '7',
		'-moz-border-radius': '7',
		'border-radius': '7px',
		'color': '#ffffff',
		'font-size': '1em',
		
		'padding': '5px 5px 5px 5px',
		'text-decoration': 'none'
	});
	// fade in the notification after .5 second
	setTimeout(function() {
		$('#redirectMsg').fadeIn(500);
	}, 500);
	// fade out the notification box after 7 seconds
	setTimeout(function() {
		$('#redirectMsg').fadeOut(500);
	}, 7000);
//.btn:hover {
//  background: #3cb0fd;
//  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
//  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
//  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
//  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
//  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
//  text-decoration: none;
//}
//	var tooltips = $('.'+whisperboxtab).tooltip({
//		items: "div, [perm-prompt]",
//		content: function() {
//			return boxHtml;
//		},
//		position: {
//			my: "left-145px top-170px",
//		},
//	});
//	setTimeout(function(){
//		tooltips.tooltip("open");
//	}, 600);
	
	$('#redirectMsg button').click(function() {
		// remove redirectMsg
		addSettingsHit(1);
		$('#redirectMsg').remove();
		window.open(chrome.extension.getURL("options.html"));
	});
	
}

var addSettingsHit = function (hits) {
	console.log('Adding settings hit');
	chrome.runtime.sendMessage({method: "addSettingsHit", hits: hits});
	return;
}

var copyText = function(text, rowID) {
	console.log('sending text to be copied to the clipbpard');
	chrome.runtime.sendMessage({method: "copyToClipboard", text: text, rowID:rowID}, handleCopyTextResponse);
	return;
}

var pasteText = function() {
	console.log('sending text to paste');
	chrome.runtime.sendMessage({method: "pasteToCouponBox"});
	return;

}


var handleCopyTextResponse = function (response) {
	// first set all rows with rowID attribute to copy, so to get rid of
	// previous "Copied!" message!
	$('div[rowID] a').text('Copy');
	$('div a.foomsg').css('background-color', '#f5f6ce');
	// change copy to copied for the target row
	$('div[rowID="'+response.rowID+'"] a').text('Copied');
	$('div[rowID="'+response.rowID+'"] a').css({'background-color': '#EDEDED'});
	
}

var handleCartPagesWrapper = function(couponSite) {
	return function(response) {
		console.log('got cartpages response ' + response);
		try {
			response.carts;
		} catch(err) {
			console.log('corrupted response from getCartList');
		}
		var carts = response.carts;
		console.log('carts');
		console.log(carts);
		var portalRowClickHandler = function(payload) {
			return function() {
				var couponCode = $(this).find('span.foocode').text();
				console.log('payload ' + i);
				console.log(payload);
				console.log('CUPPON ' + couponCode);
				payload.couponCode = couponCode;
				chrome.runtime.sendMessage(payload);
			}
		} // portalRowClickHandler
		for (var i=0; i<carts.length; i++) {
			console.log('Open for: ' + carts[i].portal);
			console.log('On      : ' + carts[i].tab);
			var portalCode = carts[i].portal;
			var tabID = carts[i].tab;
			var revMappedPortal = cssLocs[couponSite].portalMapReverse[portalCode];
			console.log('revMappedPortal is ' + revMappedPortal);
			
			if (typeof(revMappedPortal) == 'string') {
				var portalCartRow = $('div[portal="'+revMappedPortal+'"]');
				console.log('revMappedPortal is ' + revMappedPortal);
				portalCartRow.removeAttr('rowID');
				portalCartRow.find('a.foomsg').text('Apply');
				
				portalCartRow.find('a.foomsg').css({'font-weight': '700','font-size':'1.2em'});
				//var couponCode = portalCartRow.find('span.foocode').text();
//				if (portalCode == 'pt') {
//					console.log('closer, and in');
//					portalCartRow.addClass('paytmRow');
//					portalCartRow.attr('tab', tabID);
//					console.log('closer, and in II');
//					//portalCartRow.unbind('click');
//					$('.'+whisperboxtab).click(function() {requestCookiePermission();});
//					portalCartRow.unbind('click');
//				} else {
//					var payload = {method: "switchTab", tab: tabID, portalCode: portalCode};
//					portalCartRow.click(portalRowClickHandler(payload));
//				}
				var payload = {method: "switchTab", tab: tabID, portalCode: portalCode};
				portalCartRow.click(portalRowClickHandler(payload));
			} else {
				var portalCartRow = {};
				// revMappedPortal is an Array, try each string in turn
				for (var k=0; k<revMappedPortal.length; k++) {
					portalCartRow = $('div[portal="'+revMappedPortal[k]+'"]');
					if (portalCartRow.length > 0) {
						break;
					}
				}
				portalCartRow.removeAttr('rowID');
				portalCartRow.find('a.foomsg').text('Apply');
				portalCartRow.find('a.foomsg').css({'font-weight': '700','font-size':'1.2em'});
				//var couponCode = portalCartRow.find('span.foocode').text();
//				if (portalCode == 'pt') {
//					console.log('closer, and in');
//					portalCartRow.addClass('paytmRow');
//					portalCartRow.attr('tab', tabID);
//					console.log('closer, and in II');
//					//portalCartRow.unbind('click');
//					$('.'+whisperboxtab).click(function() {requestCookiePermission();});
//					portalCartRow.unbind('click');
//				} else {
//					var payload = {method: "switchTab", tab: tabID, portalCode: portalCode};
//					portalCartRow.click(portalRowClickHandler(payload));
//				}
				var payload = {method: "switchTab", tab: tabID, portalCode: portalCode};
				portalCartRow.click(portalRowClickHandler(payload));
				
			}
		}
	}
} // handleCartPagesWrapper

var requestCookiePermissions = function (fromWhere) {
	// request cookie permissions for paytm
	console.log('inside requestCookiePermission');
	chrome.runtime.sendMessage({method: 'requestCookiePermissions'}, handleCookieReqResponse);
}

var handleCookieReqResponse = function (response) {
//	console.log('GOT COOKIE REQ RESPONSE');
//	console.log(response);
//	var portalRowClickHandler = function(payload) {
//		return function() {
//			var couponCode = $(this).find('span.foocode').text();
//			console.log('payload ' + i);
//			console.log(payload);
//			console.log('CUPPON ' + couponCode);
//			payload.couponCode = couponCode;
//			chrome.runtime.sendMessage(payload);
//		}
//	} // portalRowClickHandler
//	if (response.status == 'haveAlready' || response.status == 'accepted') {
//		// got permissions! yay!
//		console.log('in haveAlready');
//		if (typeof(paytmHooked) == 'undefined') {
//			console.log('in paytmHooked');
//			console.log($('div.foocouponrow.paytmRow'));
//			$('div.foocouponrow.paytmRow').each(function() {
//				var tabID = $(this).attr('tab');
//				var portalCode = 'pt';
//				var payload = {method: "switchTab", tab:parseInt(tabID), portalCode: portalCode};
//				console.log('tabIG '+tabID);
//				$(this).click(portalRowClickHandler(payload));
//			});
//			paytmHooked = true;
//		}
//	} else {
//		// no permissions! fall back to `copy' feature only!
//		$('div.foocouponrow.paytmRow').each(function() {
//			$(this).find('a.foomsg').text('Copy');
//			$(this).attr('rowID', 1);
//			$(this).click(function() {
//				var couponCode = $(this).find('span.foocode').text();
//				console.log('code to be copied: ' + couponCode);
//				var rowID = $(this).attr('rowID');
//				copyText(couponCode, rowID);
//			});
//		});
//	}
	if (response.status == 'haveAlready' || response.status == 'accepted') {
		$('#cookies').checked = true;
	} else {
		$('#cookies').checked = false;
	}
}

var applyCouponAfterTabSwitch = function (response) {
	console.log('in applyCouponAfterTabSwitch');
	var portal = response.portalCode;
	var couponCode = response.couponCode;
	console.log('coupon kode: ' + couponCode);
	// fill in the inputbox with it
	$(cssLocs[portal].couponBox).attr("title", "Hang on! We are applying the coupon for you!");
	$(cssLocs[portal].couponBox).tooltip({ hide: { effect: "fade", duration: 500 } });
	$(cssLocs[portal].couponBox).val(couponCode);
	$(cssLocs[portal].couponBox).tooltip();
	$(cssLocs[portal].couponBox).trigger('mouseenter');
	window.setTimeout(function(){
		$(cssLocs[portal].couponBox).trigger('mouseleave');
	}, 1500);
	setTimeout(function(){
		if (document.URL.match('cleartrip.com')) {
			document.getElementById('check_saving').click();
		} else if (document.URL.match('lenskart.com')) {
			document.getElementsByClassName('back2saved-add')[0].click();
		} else if (document.URL.match('dominos.co.in/menu')) {
			document.getElementById('redeem-coupon-button').click();
		} else if (document.URL.match('naaptol.com')) {
			document.querySelector('a.button_1').click();
		} else if (document.URL.match('paytm.com')) {
			console.log('DANGER! Paytm! sending jax for the job!');
			sendPaytmReq(couponCode);
		} else if (document.URL.match('myntra.com')) {
			console.log('myntra, getting forms to apply coupon(s)');
			// get teh form first
			$('a.blue.apply-coupon.apply')[0].click();
			// rest for eh moment, and get to work
			setTimeout(function () {
				$(cssLocs[portal].couponButton).click();
			}, 1000);
		} else {
			console.log('tryna click ' + cssLocs[portal].couponButton);
			$(cssLocs[portal].couponButton).click();
		}
	}, 2000);
} // applyCouponAfterTabSwitch

function fetchDynProdData(server_prod_deets_var) {
	return function(fetch_site) { 

	console.log(fetch_site);

		if (prod_deets.prod_site == fetch_site) {
			return;
		}
	
		var search_url;
		var fetch_req = createFetchURL(server_prod_deets_var, fetch_site);
		var deets_obj={website:fetch_site};
		var back_search_url=affyLinkifySimbacksearch(deets_obj,fetch_req);

		var my_omgpm=false;
		var ja_omgpm=false;

		var back_search_proc='back_search_'+fetch_site;


	    if(affy_flags[fetch_site+'_search']==true){
		        search_url=back_search_url;
		        //setting flags to false;
		        affy_flags[fetch_site+'_search']=false;
		        set_affy(fetch_site+'_search',false);

			   	 if(fetch_site=='ja'){
			   	 	//set omgpm page parmeter
			   	 	ja_omgpm=true;

		        }

			   	 if(fetch_site=='my'){
			   	 	//set omgpm page parmeter
			   	 	my_omgpm=true;
		        }

	    }
	    else{
	        search_url=fetch_req;
	        // search_url=back_search_url;
	    }


if(fetch_site=='fk'){
	    //usual backsearch request to send affilate params to fk server	
		var dummy_req = backPostGet({
	    	type: "GET",
	    	url: search_url
		});

		//request to get data via mobile api
    	var fk_search_url="https://mobileapi.flipkart.net/2/discover/getSearch?store=search.flipkart.com&start=0&count=10&disableMultipleImage=true&ads-offset=1&q="+prod_deets.prod_title;
    	if(isBook){
    	fk_search_url="https://mobileapi.flipkart.net/2/discover/getSearch?store=search.flipkart.com&start=0&count=10&disableMultipleImage=true&ads-offset=1&q="+prod_deets.prod_srch;	
    	}

		var dyn_req = backPostGet({
	    	type: "GET",
	    	url: fk_search_url,
	    	headers:{
	    		// "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36",
	    		"x-user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36 FKUA/website/41/website/Desktop"
	    	}
 		 });


	    }//if
	 
else{
		
		var dyn_req = backPostGet({
	    	type: "GET",
	    	url: search_url
 		 });
		}//else

		disp_analytics_send_flags[back_search_proc]='sent_req';
		dyn_req.fail(genFail(server_prod_deets_var, fetch_site, fetch_req));
		dyn_req.fail(function(){
			disp_analytics_send_flags[back_search_proc]='ok';			
		});


		if ( fetch_site=='ib'){
			dyn_req.done(ibSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='ip'){
			dyn_req.done(ipSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='it'){
			dyn_req.done(itSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='hs'){
			dyn_req.done(hsSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='ms'){
			dyn_req.done(msSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='nt'){
			dyn_req.done(ntSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='sa'){
			dyn_req.done(saSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='sd'){
			dyn_req.done(sdSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='tr'){
			dyn_req.done(trSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='fk'){
			dyn_req.done(fkSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='az'){
			dyn_req.done(azSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='eb'){
			dyn_req.done(ebSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='ye'){
			dyn_req.done(yeSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='my'){
			if(my_omgpm){
				dyn_req.done(omgpm_site('my'));

			}
			else{
				dyn_req.done(mySuccess(server_prod_deets_var, fetch_req));	
			}
			
			}
		else if ( fetch_site=='ja'){
			if(ja_omgpm){
				dyn_req.done(omgpm_site('ja',server_prod_deets_var));

			}
			else{
				dyn_req.done(jaSuccess(server_prod_deets_var, fetch_req));
			}

			
			}
		else if ( fetch_site=='sc'){
			dyn_req.done(scSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='fc'){
			dyn_req.done(fcSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='bo'){
			dyn_req.done(boSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='ba'){
			dyn_req.done(baSuccess(server_prod_deets_var, fetch_req));
			}
		else if(fetch_site=='tc'){
			console.log('calling tc success');
			dyn_req.done(tcSuccess(server_prod_deets_var, fetch_req));		
		}
		
	}//closure
}//fetchDyn


function sendDynData(dyn_prod_deets_var) {

	

	if (dyn_prod_deets_var.call_type=='Dynamic') {
		return true;
		}
	
	if (isNaN(parseFloat(dyn_prod_deets_var['prod_price']))) {
		dyn_prod_deets_var['prod_price']=-1;
	} //if
	else {
		dyn_prod_deets_var['prod_price']=parseFloat(dyn_prod_deets_var['prod_price']);
	}
		


	var req_send = backPostGet({
		type: "POST",
		// url: "http://search.makkhichoose.com/postprod",
		//url: "http://search.makkhichoose.com/postprod",
		data: JSON.stringify(dyn_prod_deets_var),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
	});
} //sendDynData


var fetchServerData = function () {

	if(prod_deets.prod_site == "gn"){
		fetchDynData()('','just calling for books','');
		return;
	}

	if(isBook())
	{
		//displaying book results from back search
		//send to analytics
		chrome.runtime.sendMessage({"method":"books_display","deets":prod_deets});
		fetchDynData()('','just calling for books','');
		disp_analytics_send_flags["all_elastic_data_processed"] = "ok";
		send_ga_disp_results();
		return;

	}
	// if(isApparel()){
	// 	// $.toast('back searching apparel products');
	// 	// fetchDynData()('','just calling for apparels','');
	// 	// return;

	// }

	if (fetchFromElec()) {
		console.log('permission granted, go forth to elec server');
		prod_deets.pc=2;
		fetchSimServerData();
	}
	else if (fetchFromLappy()) {
		console.log('permission granted, go forth to lappy server');
		prod_deets.pc=2;
		fetchSimServerData();
	}

	else if (fetchFromSim()) {
		console.log('permission granted, go forth to sim server');
		prod_deets.pc=1;
		fetchSimServerData();
	}
	else if (fetchFromFootie()) {
		console.log('permission granted, go forth to footie server');
		prod_deets.pc=1;
		fetchSimServerData();
	}
	else if (fetchFromClockTower()) {
		console.log('permission granted, go forth to clockTTTtower');
		prod_deets.pc=4;
		fetchSimServerData();
	}
	else {
		console.log('nope go to regular server meekly');
		prod_deets.pc=-1;
		fetchSimServerData();
		// TODO Is this madness? Or love? Please come back.
		// fetchOldServerData();
	}
}
 

var failedSimServer = function(response,textstatus) {

	chrome.runtime.sendMessage({"method":"postpid_failure",link:window.location.href,text:textstatus});

// console.log('mc: failed getting sim data, whycome?');
// //console.log('DEBUG: prod_deets ' + (prod_deets.pc == -1));
// chrome.runtime.sendMessage({method:'send_postpid_time',time_diff:'fail'});
// if ((prod_deets.pc!=undefined) && (prod_deets.pc==-1)) {
// 			console.log('sim server failed but dont go back to old server!');
// 			fetchOldServerData();
// 		}

// 		else {
// 			console.log('nothing on sim server, sadly');
// 			fetchOldServerData();
// 		}

if(fk_fail){
	console.log('both postpid and fk api failed');
		addDiscoverLinks(['fk']);
		return;
}
fetchDynData()();
}

//makkhichecky is search.
var fetchOldServerData = function() {
		var req_send = backPostGet({
		    type: "POST",
		    // url: "https://search.makkhichoose.com/postsearch",
		    url: "https://search.makkhichoose.com/postsearch",
		    data: JSON.stringify(prod_deets),
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
			timeout: 3200,
			});
		//munch on data here
		console.log('mc: ok enough talk, parcel the deets');
		req_send.done(checkProdServerData());
		req_send.fail(fetchDynData());
		return req_send;
};



//smartmakkhi is shades.
var fetchSimServerData = function() {
	if(id_deets.user_id!=undefined){
		prod_deets.user_id=id_deets.user_id;
	}
	else{
		prod_deets.user_id='no user Id';	
	}

	if(id_deets.sd_id != undefined){
		prod_deets.sd_id=id_deets.sd_id;
	}
	else{
		prod_deets.sd_id='no sd Id';	
	}
	var postpid_data=prod_deets;
	postpid_data['isDevUse']=isdevuse;
	postpid_data['ext_id'] = chrome.runtime.id;
	postpid_data['req_sites']=["fk", "sd", "az", "pt", "tc"];
	postpid_data['window_height'] =$(window).height();
	postpid_data['window_width'] =$(window).width();
	postpid_data['screen_height'] =screen.height;
	postpid_data['screen_width'] =screen.width;
	postpid_data['is_makkhi_result_click_page']=is_makkhi_result_click_page();
postpidStartTime= new Date().getTime();
		var req_send = backPostGet({
		    type: "POST",
		    // url: "http://shades.makkhichoose.com/postpid",
		    url: "https://data2.makkhichoose.com/makkhitopfour",
		    // url: "http://139.162.26.46:8999/postpid",
		    data: JSON.stringify(postpid_data),
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
			timeout: 4000,

		});
		//munch on data here
		console.log('mc: ok enough talk, parcel sim deets');
		req_send.done(checkSimServerData);
		//oopsie send the regular way
		req_send.fail(failedSimServer);
		return req_send;
};

var putBulkPriceData = function(bulk_data) {

		var req_send = backPostGet({
		    type: "POST",
		    url: "http://shades.makkhichoose.com/bulkpriceupdate",
		    data: JSON.stringify(bulk_data),
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
			timeout: 3000,
		});
		
		req_send.done(function(response) {
			console.log('gundan nalla padiya poi sendhutan');
		});
		
		req_send.fail(function() {
			console.log('gundan sethutan');
		});
		return req_send;
};


var parseCassyMissive =  function(response) {

		try {
			cassy_val = response.status;
		}
		catch (err) {
			console.log('Wha wha not even a hi from cassy?')
			cassy_val = false;
		}

		console.log('mc: mothership sent msg from cassy');
		if (cassy_val) {
			try{
				console.log('mc: mothership says in clipped tones '+cassy_val.substr(0,5));
			}
			catch (err){
				console.log('mc: mothership talk scrambled, me confused, scared!');
				console.log('mc: '+err.message);
			}

			//parse the string to get Css rules
			//then rePopData
			var localCassy = JSON.parse(cassy_val);
			console.log('local cassy!');
			console.log(localCassy);
			if (rePopDeets(localCassy)) {
					console.log('local cassy knows where to look!');
					checkUUID();					
			}
			else {
				console.log('siigh, local cassy letdown just look for wild cassy');
				goWildForCassy();
			}

		
			}//cass_val
		else {
			goWildForCassy();
			
		}
	}//parseCassyMissive

var goWildForCassy = function() {
			console.log('mc: mothership says go and find cassy in the wilderness');
			var ip_req_send = backPostGet({
		    type: "POST",
		    // url: "https://search.makkhichoose.com/askcassy",
		    url: "https://search.makkhichoose.com/askcassy",
			data: JSON.stringify({'site':prod_deets.prod_site,'cassy':1}),
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
			timeout: 2500,
			});

			ip_req_send.done(function(response){
				console.log(response);

				if (!rePopDeets(response)) {
					console.log('cassy was not really all that was she?');					
				}
				else {
					console.log('ja ja you betcha, repop worked!');
					try {
						var json_cassy = JSON.stringify(response);
						chrome.runtime.sendMessage({method: "setCassy", key:json_cassy}, function(response) {});
					}
					catch (err) {
						console.log('whoa now cassy sassy, behaving unstructuredly?');
					}
				}//else	
				console.log('Repopped?');
				console.log(prod_deets);
				checkUUID();
			});
			ip_req_send.fail(function(response){
				console.log('mc: mothership mute, contact fatherboat also fail, so tragic!');
				checkUUID();
			});
}


var sendRequestClosure =  function(response) {
		//sriram start
		var gcm_id = '';
		//sriram end
		try {
			uuid_val = response.status;
			//sriram start
			gcm_id = response.gcm_id;
			//sriram end
		}
		catch (err) {
			console.log('Wha wha not even a status?')
			uuid_val = false;
		}

		console.log('mc: mothership sent msg');
		if (uuid_val) {
			try{
				console.log('mc: mothership says in clipped tones '+uuid_val.substr(0,5));
			}
			catch (err){
				console.log('mc: mothership talk scrambled, me confused, scared!');
				console.log('mc: '+err.message);
			}
			
			prod_deets.id_val = uuid_val;
			prod_deets.gcm_id = gcm_id;
			//add price tracker here
			if (price_sites.indexOf(prod_deets.prod_site) >-1) {
				setTrackerDeets();
			}	
			req_send = fetchServerData();
			//send offer request here;
			//fetchOffer(prod_deets);
			}
		else {
			console.log('mc: mothership says go and find your identity, son');
			var ip_req_send = backPostGet({
		    type: "GET",
			url: "https://search.makkhichoose.com/getip"
			});

			ip_req_send.done(function(response){

				console.log('mc: mothership mute, contact fatherboat and receive msg!');
				var ipval = response.replace(/\./gi,'').substr(0,40);
				var date_val=(new Date()).getTime();
				console.log(date_val);
				var rand_str=Math.floor(Math.random() * 10000);
				var rand_uuid=ipval+'b'+date_val+'b'+rand_str;
				prod_deets.id_val = rand_uuid;
				//sriram start
				prod_deets.gcm_id = gcm_id;
				//sriram end
				req_send = fetchServerData();
				chrome.runtime.sendMessage({method: "setUUID", key:rand_uuid}, function(response) {
					//sriram start
					chrome.runtime.sendMessage({method: "registerbirthmark"}, function(){});
					//sriram end
				});
			});
			ip_req_send.fail(function(response){
				console.log('mc: mothership mute, contact fatherboat also fail, so tragic!');
				var ipval = 'iperr';
				var date_val=(new Date()).getTime();
				var rand_str=Math.floor(Math.random() * 100000);
				var rand_uuid=ipval+'b'+date_val+'b'+rand_str;
				prod_deets.id_val = rand_uuid;
				//sriram start
				prod_deets.gcm_id = gcm_id;
				//sriram end
				req_send = fetchServerData();
				chrome.runtime.sendMessage({method: "setUUID", key:rand_uuid}, function(response) {
					//sriram start
					chrome.runtime.sendMessage({method: "registerbirthmark"}, function(){});
					//sriram end
				});
			});
			
		}
}//closurebrace

function fetchPSimData(server_prod_deets_var, fetch_site) {
	
	//console.log("in psimdata");
	//console.log(fetch_site);
	//console.log(server_prod_deets_var);	

		console.log('stale, getting freshly baked rice');

		//Is this needed?
		if (prod_deets.prod_site == fetch_site) {
			console.log('fetch site same as current site!');
		}
	
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
		if(fetch_req.startsWith("http://")){
			console.log("changing to https");
			fetch_req = fetch_req.replace("http://","https://")
		}else{
			console.log("not starting with http");
			console.log(fetch_req);
		}
		console.log("fetch_req from fetch_ps_sim");
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
	        set_affy(fetch_site+'_price',false);
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

		dyn_req.fail(handelAmazeBalls404(server_prod_deets_var, fetch_site));
		dyn_req.fail(simPFail(server_prod_deets_var, fetch_site));
		//dyn_req.fail(handelAmazeBalls404(server_prod_deets_var, fetch_site));
		dyn_req.fail(function(){
			console.log("setting "+back_price_proc+"to ok");
			disp_analytics_send_flags[back_price_proc]='ok';			
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
		else if ( fetch_site=='sc'){
			dyn_req.done(scPrSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='hs'){
			dyn_req.done(hsPrSuccess(server_prod_deets_var, fetch_req));
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

}//fetchPSimData

function simPFail(server_prod_deets_var, fetch_site) {
	return function(response,textStatus) {
			console.log('ohhho mercil unnacche maccha');
			if (('wd' in server_prod_deets_var) && (server_prod_deets_var['wd']==3)) {
				console.log('Faced with failure you are, back to the board it is-- Beardly Sage');
				return;
			}
			else {
				console.log("backprice failed still inserting price ");

				if(server_prod_deets_var.is_dittory == true){
					insertDittoryProduct(server_prod_deets_var);
					return true;			
				}
			// insertPrice(createStringLinkSim(server_prod_deets_var,server_prod_deets_var.link,'found'),server_prod_deets_var.prod_price);
			insert_price_result_box(make_results_box(server_prod_deets_var,"",false));
			comparePrices(server_prod_deets_var);
			}
		}
	}

function handelAmazeBalls404(server_prod_deets_var, fetch_site) {
	return function(response,textStatus,error_val) {
			console.log('In AmazeBalls');
			if ((response.status==404) && (['az','sc'].indexOf(fetch_site)>-1)) {
				console.log('It really is AmazeBalls and it four oh floored');
				sendDiscData(server_prod_deets_var);
			}
		}
	}

function sendAmazeSZCFUData(server_prod_deets_var) {

		var wd_val, td_val;

		if (('wd' in server_prod_deets_var) && (server_prod_deets_var['wd']==3)) {
			console.log('stale rice confuse, drop down look up housing muddereffer d*e');
			wd_val=8;
			td_val='stl';

		} else {
			wd_val=7;
			td_val=prod_deets.product_id;
		}

		var ud_json={'wd':wd_val,'ud':td_val+prod_deets.prod_site,'tw':prod_deets.prod_site,'td':td_val};
		
		// var req_send = backPostGet({
		// type: "POST",
		// url: "http://shades.makkhichoose.com/postud",
		// data: JSON.stringify(ud_json),
		// contentType: "application/json; charset=utf-8",
		// dataType: "json",
		// timeout: 2500,
		// });

		// req_send.done(function(response){
		// 		console.log('mc: simbaba says your value is welcome');
		// 	});
		// req_send.fail(function(response){
		// 		console.log('mc: y no take disc value');
		// 	});
}


function sendDiscData(server_prod_deets_var) {

		var wd_val, td_val;

		if (('wd' in server_prod_deets_var) && (server_prod_deets_var['wd']==3)) {
			console.log('stale rice discontinued');
			wd_val=4;
			td_val='stl';

		} else {
			wd_val=2;
			td_val=prod_deets.product_id;
		}

		var ud_json={'wd':wd_val,'ud':td_val+prod_deets.prod_site,'tw':prod_deets.prod_site,'td':td_val};
		
		// var req_send = backPostGet({
		// type: "POST",
		// url: "http://shades.makkhichoose.com/postud",
		// data: JSON.stringify(ud_json),
		// contentType: "application/json; charset=utf-8",
		// dataType: "json",
		// timeout: 2500,
		// });

		// req_send.done(function(response){
		// 		console.log('mc: simbaba says your value is welcome');
		// 	});
		// req_send.fail(function(response){
		// 		console.log('mc: y no take disc value');
		// 	});

}


function sendOOSData(server_prod_deets_var) {

		var wd_val, td_val;

		if (('wd' in server_prod_deets_var) && (server_prod_deets_var['wd']==3)) {
			console.log('stale rice oosed');
			wd_val=6;
			td_val='stl';

		} else {
			//OOS signatures are 5 and 6
			wd_val=5;
			td_val=prod_deets.product_id;
		}

		var ud_json={'wd':wd_val,'ud':td_val+prod_deets.prod_site,'tw':prod_deets.prod_site,'td':td_val};
		
		// var req_send = backPostGet({
		// type: "POST",
		// url: "http://shades.makkhichoose.com/postud",
		// data: JSON.stringify(ud_json),
		// contentType: "application/json; charset=utf-8",
		// dataType: "json",
		// timeout: 2500,
		// });

		// req_send.done(function(response){
		// 		console.log('mc: simbaba says your OOS value is welcome');
		// 	});
		// req_send.fail(function(response){
		// 		console.log('mc: y no take OOS value');
		// 	});
}


function sendPuddleData(server_prod_deets_var) {

	var ud_json, wd_val,td_val;

	if (('wd' in server_prod_deets_var) && (server_prod_deets_var['wd']==3)) {
		console.log('stale rice reaction');
		wd_val=3;
		td_val='stl';

	} else {
		wd_val=1;
		td_val=prod_deets.product_id;
	}

	ud_json={'wd':wd_val,'prod_price':server_prod_deets_var.prod_price,'ud':td_val+prod_deets.prod_site,'tw':prod_deets.prod_site,'td':td_val};
	//console.log('DEBUG: REMOVE IN UD ');
	//console.log(ud_json);
	// var req_send = backPostGet({
	// 	type: "POST",
	// 	url: "http://shades.makkhichoose.com/postud",
	// 	data: JSON.stringify(ud_json),
	// 	contentType: "application/json; charset=utf-8",
	// 	dataType: "json",
	// 	timeout: 2500,
	// 	});

	// 	req_send.done(function(response){
	// 			console.log('mc: simbaba says your value is welcome');
	// 		});
	// 	req_send.fail(function(response){
	// 			console.log('mc: y no take puddle value');
	// 		});


} //sendPuddleData

function fetchOffer(prod_deets_var){

	var ud_json={'id_val':prod_deets_var.id_val};
	
	var req_send = backPostGet({
		type: "POST",
		url: "http://makkhichoose.com/fetchoffer",
		data: JSON.stringify(ud_json),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		timeout: 2500,
		});

		req_send.done(function(response){
				setOfferMessage(response);
			});
		req_send.fail(function(response){
				console.log('mc: oh noes no proposition for me!');
			});

}
// function to get coupon list
var getCouponList = function(portal) {
	var couponList = Array();
	var url="http://139.162.26.46:8585/getcouponsdeals?portal="+portal;
	var req = backPostGet({
		type: "GET",
		//url: "https://couponproject2.appspot.com/coupon/getcoupons",
		//data: {'portal':portal},
		url:url,
	});
	req.fail(function() {
		// alert user about failure
		console.log('Failed to get coupon data from the server');
	});
	
	return req;
}

var hakunaMatata = function(portalName, rowNumber) {
	var req = backPostGet({
		type: "POST",
		url: "https://couponproject2.appspot.com/coupon/couponbaga",
		data: {'portalName': portalName, 'rowNumber': rowNumber}
	});
	req.fail(function() {
		console.log('Failed to contact Baga uncle');
	});
	req.done(function() {
		console.log('Baga uncle says hi!');
	});
}

var contactMila = function() {
	var req = backPostGet({
		type: "POST",
		url: "https://couponproject2.appspot.com/coupon/couponmila",
		data: {'mila': window.location.hostname}
	});
	req.fail(function() {
		console.log('Mila is unreachable');
	});
	req.done(function(){
		console.log('Mila aunt says hi!');
	});
}

function sendTrackMissive(emmy_id,uuid_val,gcm_id, trackType) {
	console.log('stalking object for cust');
	var parcel_obj={
						'pid': prod_deets.product_id,
						'website': prod_deets.prod_site,
						'emailid': emmy_id,
						'uuid': uuid_val,
						'title': prod_deets.prod_title_raw,
						'image_data': prod_deets.prod_img,
						'start_price': prod_deets.prod_price,
						'url': prod_deets.prod_link,
						'gcm_id': gcm_id,
						'tt': trackType
					};		
	var wishlist_img = chrome.extension.getURL('wishlist.png');
	console.log(parcel_obj);				

	// ga #
	// report a hit on track prod
	reportTrackHit();

	// now fold, beat and unfold the data for the new mama
	parcel_obj_beaten = {
		'pid': parcel_obj.pid,
		'website': parcel_obj.website,
		'email_id': parcel_obj.emailid,
		'start_price': parcel_obj.start_price,
		'gcm_id': parcel_obj.gcm_id,
		'url':parcel_obj.url,
		'client_type': 0,
		'tt': 1
	}
	var req_send = backPostGet({
		type: "POST",
		// url: "http://shades.makkhichoose.com/pricealert/trackpid",
		url: "https://data1.makkhichoose.com/requestdrop",
		// data: JSON.stringify(parcel_obj),
		data: JSON.stringify(parcel_obj_beaten),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		timeout: 3500,
	});

	req_send.done(function(response){

			is_product_tracked = true;
			$(result_view).find(".track_button").removeClass("track");
			$(result_view).find(".track_button span:eq(0)").removeClass("fa fa-envelope");
			$(result_view).find(".track_button span:eq(0)").addClass("fa fa-heart");
			$(result_view).find(".track_button span:eq(1)").text("Wishlist");
			$(result_view).find(".track_button").attr("title","Wishlist");
			// $.toast("We are tracking the price for you!");
			
			//save for posterity
			var add_datesecs = new Date().getTime();
			console.log(prod_deets.prod_site+prod_deets.product_id+add_datesecs);
			var piddle_pair = {};
			piddle_pair[prod_deets.prod_site+prod_deets.product_id]=add_datesecs;
			chrome.runtime.sendMessage({method: "setTrackPiddle", key:JSON.stringify(piddle_pair)}, function(response) {});			
	});
	req_send.fail(function(response){
		//failure message
		$(result_view).find(".track_button").css({
												    "text-shadow": "1px 1px 0px #f73f52",
												    "background-color": "#f73f52",
												    "-webkit-box-shadow":"none",
												    "box-shadow":"none"
												});

		if(dock_settings == "left"){
			$.toast({
				"text":"This Product Can not be Tracked now",
				"hideAfter":15000,
				"position":"bottom-left"
			});
			$(".jq-toast-wrap").css("z-index","999999");
			$(".jq-toast-single").css("z-index","999999")
		}
		if(dock_settings == "right"){
			$.toast({
				"text":"This Product Can not be Tracked now",
				"hideAfter":15000,
				"position":"bottom-right"
			});
			$(".jq-toast-wrap").css("z-index","999999");
			$(".jq-toast-single").css("z-index","999999")
		}
		if(dock_settings == "top"){
			$.toast({
				"text":"This Product Can not be Tracked now",
				"hideAfter":15000,
				"position":"bottom-center"
			});
			$(".jq-toast-wrap").css("z-index","999999");
			$(".jq-toast-single").css("z-index","999999")
		}
		if(dock_settings == "bottom"){
			$.toast({
				"text":"This Product Can not be Tracked now",
				"hideAfter":15000,
				"position":"top-center"
			});
			$(".jq-toast-wrap").css("z-index","999999");
			$(".jq-toast-single").css("z-index","999999")
		}


	});

} //sendTrackMissive



function getStaleHists() {
	//uncomment to send staleprods
	/*
	console.log('asking server for stale rice dishes');
	var parcel_obj ={'stale':'makkhi'};
	//console.log('DEBUG: Remove! staleprodstest');
	
	var req_send = backPostGet({
		type: "POST",
		url: "http://shades.makkhichoose.com/pricealert/staleprods",
		data: JSON.stringify(parcel_obj),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		timeout: 2500,
		});

	req_send.done(succStaleHists);
	req_send.fail(failStaleHists);
	*/
}

function fetchWishProdData(url_val) {
	
	prod_deets.prod_link=url_val;
	var dyn_req= backPostGet({
	type: "GET",
	url: url_val,
	});

	if (url_val.match('amazon\.in')) {
		console.log('Amazing Jabari Parker');
		dyn_req.done(azParseProd);
	}

	else if (url_val.match('flipkart\.com')) {
		console.log('Fantastic Flipper!');
		dyn_req.done(fkParseProd);
	}
	else if (url_val.match('snapdeal\.com')) {
			console.log('Seductive Sizzler!');
			dyn_req.done(sdParseProd);
	}
	else if (url_val.match('ebay\.in')) {
			console.log('Emotional Entertainer!');
			dyn_req.done(ebParseProd);
	}
	else if (url_val.match('myntra\.com')) {
			console.log('Mama got moxie!');
			dyn_req.done(myParseProd);
	}
	else if (url_val.match('jabong\.com')) {
			console.log('Jivin and lovin to Jazz!');
			dyn_req.done(jaParseProd);
	}
	else if (url_val.match('shopclues\.com')) {
			console.log('Shysters be Clueless!');
			dyn_req.done(scParseProd);
	}

	else {
		console.log('We not digging into these sites, yo!');
		showTempAlert('Oops! We are not tracking this site. Please add from Amazon, Flipkart, Snapdeal, Myntra, Jabong, ShopClues, or Ebay','alert-error',3000,$('div.add-link'));

	}


	dyn_req.fail(parseProdFail);



} // fetchWishProdData

function parseProdFail(response) {
	console.log('Whoopsie, fetchisie failed sensei');
	showTempAlert('Was this a product page? If so, try again!','alert-error',3000,$('div.add-link'));
}


function backPostGet(json_obj) {

	var deferredObject = $.Deferred();

	chrome.runtime.sendMessage({method: "backPostGet", key:json_obj}, function(response) {

		if (response.status) {
			if (response.req=='succ'){
				deferredObject.resolve( response.data, response.text_status,response.jq_xhr );
			}
			else {
				deferredObject.reject( response.jq_xhr, response.text_status,response.error );
			}
		}
		//console.log(response);
	});
	return deferredObject.promise();
}


function sendWishProd() {

	console.log('Someone wants a gift from Santa!');
	//console.log('DEBUG: check for appspot');
	//var url_val = "http://shades.makkhichoose.com/pricealert/insertpricehist";
	var url_val = "http://wishlists.makkhichoose.com/pricealert/insertpricehist";
	var req_send = backPostGet({
		type: "POST",
		url: url_val,
		data: JSON.stringify(prod_deets),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		timeout: 2500,
		});

	req_send.done(succSendWish);
	req_send.fail(failSendWish);

}

function sendclickMenu(site,menu_name) {
    console.log('mc: attempting to send click');
    name = $.trim(menu_name);
    console.log(name);
    chrome.runtime.sendMessage({ method: "trackclickMenu",site:site, menu_name: name });
}

function sendclickButton(site,button_name) {
    console.log('mc: attempting to send click button');
    console.log(button_name);
    if(button_name == "Search" )
    {
        search_name = $('input[type=text][name="q"]').val();
        chrome.runtime.sendMessage({ method: "trackclickSearch",site:site, search_name: search_name });
    }
    else if (button_name == "Go")
    {
    	button_name = "Search";
    	search_name = $('input[type=text][name="field-keywords"]').val();
    	chrome.runtime.sendMessage({ method: "trackclickSearch",site:site, search_name: search_name });
    }
    
    chrome.runtime.sendMessage({ method: "trackclickButton",site:site, button_name: button_name });
}

function set_affy(affy_tag,value){
	var affy_deets={};

	affy_deets['affy']=affy_tag;
	affy_deets['value']=value;
	affy_deets['method']='setaffy';
	//console.log(affy_deets);
	chrome.runtime.sendMessage(affy_deets);
}

function set_is_our_affy(affy_tag,value){
	var affy_deets={};

	affy_deets['affy']=affy_tag;
	affy_deets['value']=value;
	affy_deets['method']='set_is_our_affy';
	//console.log(affy_deets);
	is_our_affys['affy']=affy_tag;
	is_our_affys['value']=value;

	chrome.runtime.sendMessage(affy_deets);
}

// add contentscript listener
chrome.runtime.onMessage.addListener(contentScriptListener);


 function disp_alert_msg(str,state="suc"){
        $('#msg_box').css('visibility', 'visible');
        if(state==="fail"){
            $('#msg_box p#msg').css('color','#FF5600');
        }
        else{
            $('#msg_box p#msg').css('color','green');   
        }

        $('.alert_message_mc p#msg').text(str);


       setTimeout(function(){

        $('.alert_message_mc').css('visibility', 'hidden');
        $('.alert_message_mc p#msg').text('');

       },5000);
 }


function trackMakkhiboxDisplay(prod_site){
	
	chrome.runtime.sendMessage({method:'trackMakkhiBoxDisplay',event_action:'MakkhiBoxDisplay'+prod_site});
	
}

function is_makkhi_result_click_page(){
	var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});

	if(url_params["mct_param"]=="mc_result_click"){
		//result click page
		//send it here
		return true;
	}
	else{
		//not a result click page
		return false;	
	}
}

function trackMakkhiboxDisplay_flights(prod_site){
	chrome.runtime.sendMessage({method:'trackMakkhiBoxDisplay_flights',event_action:'MakkhiBoxDisplay_flights'+prod_site});
}

function trackmakkhiboxview(prod_site){

	chrome.runtime.sendMessage({method:'trackmakkhiboxview',event_action:'makkhiboxview'+prod_site});
}

function trackmakkhiboxview_flights(prod_site){
	chrome.runtime.sendMessage({method:'trackmakkhiboxview_flights',event_action:'makkhiboxview_flights'+prod_site});
}

function backPostGet_get_easemt_trip_data(json_obj) {

    var deferredObject = $.Deferred();

    chrome.runtime.sendMessage({method: "backPostGet_get_easemt_trip_data", key:json_obj}, function(response) {

        if (response.status) {
            if (response.req=='succ'){
                // console.log('backPostGet');
                // console.log(response.data)
                response.data=process_emt_price(response.data);
                deferredObject.resolve( response.data, response.text_status,response.jq_xhr );
            }
            else {
                deferredObject.reject( response.jq_xhr, response.text_status,response.error );
            }
        }
        //console.log(response);
    });
    return deferredObject.promise();
}

function backPostGet_get_easemt_trip_int_data(json_obj) {

    var deferredObject = $.Deferred();

    chrome.runtime.sendMessage({method: "backPostGet_get_easemt_trip_int_data", key:json_obj}, function(response) {

        if (response.status) {
            if (response.req=='succ'){
                // console.log('backPostGet');
                // console.log(response.data)
                response.data=process_emt_price(response.data);
                deferredObject.resolve( response.data, response.text_status,response.jq_xhr );
            }
            else {
                deferredObject.reject( response.jq_xhr, response.text_status,response.error );
            }
        }
        //console.log(response);
    });
    return deferredObject.promise();
}


function process_emt_price(emt_data){


	if(emt_data.onward_trip.length!=0){
		for(var i=0; i<emt_data.onward_trip.length;i++){
			emt_data.onward_trip[i].price =(parseInt(journey_deets.nAdults)*(emt_data.onward_trip[i].abf+emt_data.onward_trip[i].adt)) + (parseInt(journey_deets.nChilds)*(emt_data.onward_trip[i].cbf+emt_data.onward_trip[i].cdt)) + (parseInt(journey_deets.nInfants)*(emt_data.onward_trip[i].ibf+emt_data.onward_trip[i].inft));
		}
	}

	if(emt_data.return_trip.length!=0){
		for(var i=0; i<emt_data.return_trip.length;i++){
			emt_data.return_trip[i].price =(parseInt(journey_deets.nAdults)*(emt_data.return_trip[i].abf+emt_data.return_trip[i].adt)) + (parseInt(journey_deets.nChilds)*(emt_data.return_trip[i].cbf+emt_data.return_trip[i].cdt)) + (parseInt(journey_deets.nInfants)*(emt_data.return_trip[i].ibf+emt_data.return_trip[i].inft));
		}
	}



	return emt_data;
}