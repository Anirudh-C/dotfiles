// setTimeout(function() {
// 	injectedFunc();
// }, 500);

// var isCheckoutPage = false;
// var currval,preval;
// var injectedFunc = function() {
// 	var ppctrl=$('[ng-controller="productPreviewCtrl as product"]');
// 	var pcctrl=$('[ng-controller="productCategoryCtrl"]');
// 	var ptctrl=$('[ng-controller="paytmCtrl as paytm"]');
	
// 	//to enable DebugInfo
// 	var ptscope=angular.element(ptctrl).scope();
// 	if(ptscope) {
// 		//console.log("enabled debug");
// 	} else {
// 		angular.reloadWithDebugInfo();
// 	}

// 	//checking for product category page
// 	var pcscope=angular.element(pcctrl).scope();
// 	if(pcscope)
// 	{
// 		//console.log("product category page detected");
// 		document.dispatchEvent(new CustomEvent('pitama_communique', {
// 				detail: {
// 							isProdPage: false,
// 							isResultsPage: true
// 						}
// 			}));
						
// 	}

// 	//checking for product page
// 	var ppscope=angular.element(ppctrl).scope();
// 	if(ppscope)
// 	{
// 		if(ppscope.product.product)
// 		{
// 		var currval = ppscope.product.product.product_id;

// 		//read values and send event only if the currently viewing product is different from the previous one
// 		if(currval!=preval)
// 		{
// 		var prod_details= ppscope.product.product;
// 		var product_id = prod_details.product_id;
// 		var prod_categ = prod_details.ancestors[2].name;
// 		var prod_categ_alt= prod_details.ancestors[1].name;
// 		var prod_mrp=prod_details.actual_price;
// 		var prod_title = prod_details.bargain_name;
// 		var prod_img = prod_details.image_url;
// 		var prod_sell_price = prod_details.offer_price;
// 		var prod_link = prod_details.shareurl;
// 		var isProdPage = false;
// 			if(product_id) {
// 				isProdPage = true;
// 			}
// 			//console.log("dispatching event");
// 			document.dispatchEvent(new CustomEvent('pitama_communique', {
// 				detail: {
// 					isProdPage: isProdPage,
// 					prod_id: product_id,
// 					prod_title: prod_title,
// 					prod_categ: prod_categ,
// 					prod_categ_alt: prod_categ_alt,
// 					prod_mrp: prod_mrp,
// 					prod_sell_price: prod_sell_price,
// 					prod_link: prod_link,
// 					prod_img: prod_img
// 				}
// 			}));

// 		}
// 		preval=currval;

// 		}
// 	}

// 	//checking for pages other than product page
// 	ppscope=angular.element(ppctrl).scope();
// 	if(!ppscope){
// 		//console.log("not a product page event");
// 		document.dispatchEvent(new CustomEvent('pitama_communique', {
// 				detail: {
// 							isProdPage: false,
// 							isResultsPage: true
// 						}
// 			}));

// 	}

// 	//checking page at intervals of 500ms
// 	setTimeout(function() {
// 		injectedFunc();
// 	}, 500);



// }



// if (window.location.hostname == 'paytm.com'){

// 	url=window.location.href;
// 	//found paytm.com
// 	console.log('inpaytm');
// 	if(url.match('/p/')){
// 		//product page
// 		console.log('product page detected');
// 		var prod_path=window.location.pathname;

// 		var prod_link_part= prod_path.slice(prod_path.indexOf('/p/'),-1);

// 		var pt_req= {
// 	    "type":"GET",
// 	    "url":"https://catalog.paytm.com/v1"+prod_link_part,
// 	    "content-type":"application/json"

// 	    }

// 	   var dyn_req = backPostGet(pt_req);

// 	   dyn_req.done(function(response){

// 			var prod_details= response;
// 			var product_id = prod_details.product_id;
// 			var prod_categ = prod_details.ancestors[2].name;
// 			var prod_categ_alt= prod_details.ancestors[1].name;
// 			var prod_mrp=prod_details.actual_price;
// 			var prod_title = prod_details.bargain_name;
// 			var prod_img = prod_details.image_url;
// 			var prod_sell_price = prod_details.offer_price;
// 			var prod_link = prod_details.shareurl;

// 			document.dispatchEvent(new CustomEvent('pitama_communique', {
// 				detail: {
// 					isProdPage: true,
// 					prod_id: product_id,
// 					prod_title: prod_title,
// 					prod_categ: prod_categ,
// 					prod_categ_alt: prod_categ_alt,
// 					prod_mrp: prod_mrp,
// 					prod_sell_price: prod_sell_price,
// 					prod_link: prod_link,
// 					prod_img: prod_img
// 				}
// 			}));

// 	   });

// 	}
// 	else{
// 		console.log('not a product page');
// 	}
// }


