/* Holds functions which detect if the given URL belongs
   to a cart page of some portal
*/

var jabongCart = function(URL) {
	return URL.match('http://www.jabong.com/cart');
}

var myntraCart = function(URL) {
	return URL.match('http://www.myntra.com/checkout/cart');
}

var homeshop18Cart = function(URL) {
	return URL.match('homeshop18.com/shopping-cart');
}

var ebayCart = function(URL) {
	return URL.match('order2.ebay.in');
}

var infibeamCart = function(URL) {
	return URL.match('infibeam.com/ShowCart.action');
}

var naaptolCart = function(URL) {
	return URL.match('naaptol.com/checkout');
}

var indiaTimesCart = function(URL) {
	return URL.match('indiatimes.com/control/reviewoptions') || URL.match('indiatimes.com/control/checkout_gcValidateOneStep');
}

var shopcluesCart = function(URL) {
	return URL.match('dispatch=checkout.checkout');
}

var firstCryCart = function(URL) {
	return URL.match('firstcry.com/fccheckout.aspx');
}

var babyOyeCart = function(URL) {
	return URL.match('babyoye.com/control/checkoutreview');
}

var paytmCart = function(URL) {
	return URL.match('paytm.com/checkout') || URL.match('paytm.com/cart');
}

var fabfurnishCart = function(URL) {
	return URL.match('fabfurnish.com/cart');
}

var pepperfryCart = function(URL) {
	return URL.match('pepperfry.com/checkout/cart');
}

var urbanladderCart = function(URL) {
	return URL.match('urbanladder.com/cart');
}

var fashionaraCart = function(URL) {
	return URL.match('fashionara.com/onestepcheckout');
}

var lenskartCart = function(URL) {
	return URL.match('lenskart.com/checkout');
}

var foodpandaCart = function(URL) {
	return URL.match('foodpanda.in/review');
}

var justeatCart = function(URL) {
	return URL.match('justeat.in/order/checkout');
}

var dominosCart = function(URL) {
	return URL.match('.dominos.co.in/menu.php');
}

var pizzahutCart = function(URL) {
	if (URL.match('pizzahut.co.in')) {
		return /\/OrderReview$/.test(URL);
	}
	return false;
}

var makemytripCart = function(URL) {
	return URL.match('makemytrip.com') && URL.match('/review/');
}

var cleartripCart = function(URL) {
	if(URL.match('cleartrip.com')) {
		return /\/review$/.test(URL) || /\/info$/.test(URL);
	}
	return false;
}

var goibiboCart = function(URL) {
	if (URL.match('goibibo.com')) {
		return URL.match('flight-booking') || URL.match('bus-booking') || URL.match('hotel-booking');
	}
	return false;
}



