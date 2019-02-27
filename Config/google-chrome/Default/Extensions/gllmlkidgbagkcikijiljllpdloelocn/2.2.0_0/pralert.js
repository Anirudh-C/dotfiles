
function addEmmyTrack() {

	//hide till we know uuid
	$('#'+pralurrt).css('display','none');	

	//TODO
	//return true;
	$('#'+emspan+', #trackedprods, #settings').css({
	  // 'position': 'absolute',
	  // 'right': '45px',
	  // 'top': '7px',
	  // '-moz-border-radius':'28',
	  'border-radius': '10px',
	  'font-family': 'Arial',
	  'color': '#fafafa',
	  'font-size': '1em',
	  'padding': '3px 7px 3px 7px',
	  'text-decoration': 'none',
	  'padding-left': '20px',
	});

	$('#'+emspan + ',#trackedprods,#mcsettings').hover(function(){
		$(this).css({
		  'background-color': 'rgba(90, 90, 90, 0.9)'
		})},
		function(){
			$(this).css({
				'background-color': 'rgba(146, 146, 146, 0.9)'
			});
		}
	);
	

	// $('#'+emspan).hover(function(){
	// 	$(this).css({
	// 	  'cursor':'pointer',			 	 	
	// 	  'background': '#3cb0fd',
	// 	  'background-image': '-webkit-linear-gradient(top, #3cb0fd, #3498db)',
	// 	  'background-image': '-moz-linear-gradient(top, #3cb0fd, #3498db)',
	// 	  'background-image': '-ms-linear-gradient(top, #3cb0fd, #3498db)',
	// 	  'background-image': '-o-linear-gradient(top, #3cb0fd, #3498db)',
	// 	  'background-image': 'linear-gradient(to bottom, #3cb0fd, #3498db)',
	// 	  'text-decoration': 'none'});
	// 	},
	// 	function(){
	// 		$(this).css({
	// 			'background': '#3498db',
	// 			'background-image':'none'});
	// 	}
	// );

//checkTrackerDeets();

// check if email stored, if email stored set as data val in box

// if email stored and pid tracked
 	 
 	 //check if pid tracked


//$('#'+emspan).click(prTrackClick); 

} // addEmmyTrack;

function clearOldMsgs() {
	$('.askemmy .error-msg').remove();
	$('.askemmy .success-msg').remove();
}

function prTrackClick(){
	if ($('#' + emspan).hasClass('yes')){

	   	var $this = $('#' + emspan);
	   	var alreadyClicked = $this.data('clicked');
	   	if (alreadyClicked) {
	   	  console.log('alreadyclickedthismate');
	      return false;
	   	}
		$this.data('clicked', true);	
		console.log('going to the back cave');
		chrome.runtime.sendMessage({method: "getEmmy"}, checkEmmyPresent);

	}
	else if ($('#' + emspan).hasClass('mail')) {
		var $this = $(this);
	   	var alreadyClicked = $this.data('clicked');
	   	console.log('alreadyclickedthismate');
	   	if (alreadyClicked) {
	      return false;
	   } 

	   $this.data('clicked', true);	
		

		// var emmy_val = $('#'+pralurrt+ ' span.msg input').val();
		// $('#'+pralurrt+' span.msg input').unbind('focus.enteremail');

		// get email here
		// $('.emmy').css('visibility', 'visible');
		if ( $('.askemmy').css('visibility') == 'hidden' ) {
			$('.askemmy').css('visibility', 'visible');
			return;
		}

		var emmy_val = $('.askemmy input[type="text"]').val();


		if (validateEmail(emmy_val)) {
			console.log('mmm emells so cleaaaan!');
			$('#'+pralurrt+' span.msg input').unbind('focus.wrongemail');
			// $('.askemmy #emmy').val('');
			clearOldMsgs();
			$('.askemmy').append('<p class="success-msg">Awesome! We will let you know when the price drops!</p>');
			
			window.setTimeout(function () {
				$('.askemmy').css('visibility', 'hidden');
			}, 700);

			console.log('Giving locals an Emmy for outstanding persistence!');		
			chrome.runtime.sendMessage({method: "setEmmy", key:emmy_val}, function(response) {});


			if (prod_deets.id_val && prod_deets.id_val!='') {
				console.log('saved a trip, UUID present!');
				//sriram modified
				sendTrackMissive(emmy_val,prod_deets.id_val,prod_deets.gcm_id, 1); // in JAX
			}
			else {
				chrome.runtime.sendMessage({method: "getUUID", key:emmy_val}, function(response) {
					console.log('No UUID yet!');
					console.log(response);
					console.log(emmy_val);
				});
			}

		}
		else {
			console.log('yiikes susfishious smelly email');
			clearOldMsgs();
			$('.askemmy').append('<p class="error-msg">Invalid Email Address. Please try again.</p>');
			// $('.askemmy #emmy').val('');
			$('#'+pralurrt+' span.msg input').val('error in address!');
			$('#'+pralurrt+' span.msg input').bind('focus.wrongemail',function(){
				$('#' + emspan).val(emmy_val);
			});
			$this.data('clicked', false);	
		}
		
	}

	else if ($('#' + emspan).hasClass('trck')) {
		// show tracking link and on click take to track page
		console.log('hasClass trck.. y y y ?');
	}

}

function setTrackerDeets() {

	//REMOVE FOR PRICE ALERTS
	//return true;
	console.log('mc: do we already have a Tracker?');
	chrome.runtime.sendMessage({method: "checkTrackPiddle",key: prod_deets.prod_site+prod_deets.product_id}, checkTrackStatus); //chromeextension
	return;
}


function checkTrackStatus(response) {

		if (response.status=='tracking') {
			
			console.log('product in your kitty!');
			is_product_tracked = true;
			$(result_view).find(".track_button").removeClass("track");
			$(result_view).find(".track_button span:eq(0)").removeClass("fa fa-envelope");
			$(result_view).find(".track_button span:eq(0)").addClass("fa fa-heart");
			$(result_view).find(".track_button span:eq(1)").text("Wishlist");
			$(result_view).find(".track_button").attr("title","Wishlist");


		}
		else if (response.status=='nottracking') {
			//console.log('product not being tracked, but others are!');
			is_product_tracked = false;
	
		}

		else if (response.status=='empty') {
			console.log('product not being tracked!');
			is_product_tracked = false;
		}


		
		return true;

}

function checkEmmyPresent(response) {

	try {
		emmy_val = response.status.emmy;
		uuid_val = response.status.uuid;
		//sriram start
		gcm_id = response.status.gcm_id;
		//sriram end
	}
	catch (err) {
		console.log('Wha wha not even an emmy status?')
		emmy_val = false;
	}

	if (emmy_val) {
		//if email exists, then 
		console.log('mmm email in shelf, like old wine');
		$('#'+pralurrt+ ' span.msg').html('Setting up tracker...');
		//sriram modified
		sendTrackMissive(emmy_val,uuid_val,gcm_id, 1); // in JAX

	}	//if
	else {

		// $('#'+pralurrt+ ' span.msg').html('<input type="text" title="we will send you an email when the price goes down!" value="Enter email address" class="emailval" size="15">');
		// $('#'+emspan).html('Save');
		$('#'+emspan).removeClass('yes');
		$('.askemmy').css('visibility', 'visible');
		$('.askemmy .closebox').click( function() {
			$('.askemmy').css('visibility', 'hidden');
			$('.askemmy #emmy').val('');
		});

		$('#'+emspan).addClass('mail');
		$('#'+emspan).data('clicked',false);
		// $('#'+pralurrt+' span.msg input').bind('focus.enteremail',function(){
		// 	$(this).val('');
		// });
		$('.askemmy input[type="text"]').focus();

		$('.askemmy input[type="submit"]').click(prTrackClick);


	} //else
}  //checkEmmyPresent

function refreshAlertPrices() {

	// get a random string, use to check if to proceed
	//FOR TESTING PURPOSES GOD DOES NOT PLAY DICE
	//console.log('DEBUG: Getting Stale Prices in God Mode!');
	//getStaleHists();
	//return;

	rand_str=Math.floor(Math.random() * 1000);
	if (rand_str<550) {
		// ping server 
		console.log('Get Stale Prices!');
		getStaleHists();
	}

}

function succStaleHists(response) {
	console.log('stash of stale rice, refresh');

	var prods_rec_arr = response['result'];
	console.log(prods_rec_arr);

	for (var i=0; i<prods_rec_arr.length; i++) {
		fetchPSimData(prods_rec_arr[i], prods_rec_arr[i].website);
	}
}

function failStaleHists(response) {
	console.log('didunt getum stale rice cuando?');
}


// Keep these stylish rules in
(function putStyleOn() {
	var style = '<style>\
				.askemmy {\
					background: #fff url(' + housefly + ') no-repeat right 5px bottom 5px;\
					background-size: 45px;\
				}\
				.askemmy {\
				    z-index: 10000;\
				    position: fixed;\
				    display: block;\
				    width: 350px;\
				    height: 145px;\
				    background-color: white;\
				    border-radius: 2px;\
				    box-shadow: rgb(133, 133, 133) 0px 0px 25px 1px;\
				    margin: 0 auto;\
				    text-align: center;\
				    margin-left: 35%;\
				    margin-top: 10%;\
				}\
				.askemmy p#msg {\
				    font-size: 1.1em;\
				    font-weight: 600;\
				    margin-top: 31px;\
				    margin-bottom: 20px;\
				}\
				.askemmy .error-msg {\
					color: #FF5600;\
					padding-top: 10px;\
				}\
				.askemmy .success-msg {\
					color: green;\
					padding-top: 10px;\
				}\
				.askemmy input {\
				    padding: .5em .6em;\
				    display: inline-block;\
				    border: 1px solid #ccc;\
				    box-shadow: inset 0 1px 3px #ddd;\
				    border-radius: 4px;\
				    vertical-align: middle;\
				    -webkit-box-sizing: border-box;\
				    box-sizing: border-box;\
				    line-height: normal;\
				    -webkit-appearance: textfield;\
				    cursor: auto;\
				 }\
				 .askemmy input[type="submit"] {\
				    font-family: inherit;\
				    font-size: 100%;\
				    padding: .5em 1em;\
				    color: white;\
				    font-weight: 600;\
				    border: 1px solid #999;\
				    border: 0 rgba(0,0,0,0);\
				    background-color: rgba(31, 196, 255, .8);\
				    text-decoration: none;\
				    border-radius: 2px;\
				    display: inline-block;\
				    zoom: 1;\
				    line-height: normal;\
				    white-space: nowrap;\
				    vertical-align: middle;\
				    text-align: center;\
				    cursor: pointer;\
				    -webkit-user-drag: none;\
				    -webkit-user-select: none;\
				    user-select: none;\
				    -webkit-box-sizing: border-box;\
				    box-sizing: border-box;\
				 }\
				.askemmy .closebox {\
				    display: inline-block;\
				    height: 16px;\
				    width: 16px;\
				    position: absolute;\
				    right: 4px;\
				    top: 4px;\
				    cursor: pointer;\
				    background: ' + closebox_url + '\
				}\
				.pop-up-report {\
					background: #fff url(' + housefly + ') no-repeat right 5px bottom 5px;\
					background-size: 45px;\
				}\
				.pop-up-report {\
				    z-index: 10000;\
				    position: fixed;\
				    display: block;\
				    width: 400px;\
				    height: 200px;\
				    background-color: white;\
				    border-radius: 2px;\
				    box-shadow: rgb(133, 133, 133) 0px 0px 25px 1px;\
				    margin: 0 auto;\
				    text-align: left;\
				    margin-left: 35%;\
				    margin-top: 10%;\
				    padding-left:10px;\
				    padding-bottom:10px;\
				    padding-top:10px;\
				    font-family: Arial,sans-serif;\
				    font-size:13px;\
				}\
				.pop-up-report textarea {\
					width:380px;\
					height:75px;\
				    padding: .5em .6em;\
				    display: inline-block;\
				    border: 1px solid #ccc;\
				    box-shadow: inset 0 1px 3px #ddd;\
				    border-radius: 4px;\
				    vertical-align: middle;\
				    -webkit-box-sizing: border-box;\
				    box-sizing: border-box;\
				    line-height: normal;\
				    -webkit-appearance: textarea;\
				    cursor: auto;\
				 }\
				 .pop-up-report input[type="button"] {\
				    font-family: Arial,sans-serif;\
				    font-size: 100%;\
				    padding: .5em 1em;\
				    color: white;\
				    font-weight: 600;\
				    border: 1px solid #999;\
				    border: 0 rgba(0,0,0,0);\
				    background-color: rgba(31, 196, 255, .8);\
				    text-decoration: none;\
				    border-radius: 2px;\
				    display: inline-block;\
				    zoom: 1;\
				    line-height: normal;\
				    white-space: nowrap;\
				    vertical-align: middle;\
				    text-align: center;\
				    cursor: pointer;\
				    -webkit-user-drag: none;\
				    -webkit-user-select: none;\
				    user-select: none;\
				    -webkit-box-sizing: border-box;\
				    box-sizing: border-box;\
				    margin-top:5px;\
				 }\
				 .pop-up-report select {\
				 	background-color:rgb(221,221,221);\
				 	border: 1px solid #DDD;\
    				border-radius: 4px 4px 4px 4px;\
    				height:25px;\
    				width:380px;\
    				padding: 3px;\
				 }\
				 .pop-up-report select {\
				 	align: center;\
				 	text-align: center;\
				 }\
 				.alert_message_mc {\
					background: #fff url(' + housefly + ') no-repeat right 5px bottom 5px;\
					background-size: 45px;\
				}\
				.alert_message_mc {\
				    z-index: 10000;\
				    position: fixed;\
				    display: block;\
				    width: 350px;\
				    height: 145px;\
				    background-color: white;\
				    border-radius: 2px;\
				    box-shadow: rgb(133, 133, 133) 0px 0px 25px 1px;\
				    margin: 0 auto;\
				    text-align: center;\
				    margin-left: 35%;\
				    margin-top: 10%;\
				}\
				.alert_message_mc p#msg {\
				    padding-top:60px;\
				}\
				.alert_message_mc p{\
				     margin: auto;\
				}\
				.alert_message_mc .error-msg {\
					color: #FF5600;\
					padding-top: 10px;\
				}\
				.alert_message_mc .success-msg {\
					color: green;\
					padding-top: 10px;\
				}\
				.alert_message_mc input {\
				    padding: .5em .6em;\
				    display: inline-block;\
				    border: 1px solid #ccc;\
				    box-shadow: inset 0 1px 3px #ddd;\
				    border-radius: 4px;\
				    vertical-align: middle;\
				    -webkit-box-sizing: border-box;\
				    box-sizing: border-box;\
				    line-height: normal;\
				    -webkit-appearance: textfield;\
				    cursor: auto;\
				 }\
				 .alert_message_mc input[type="submit"] {\
				    font-family: inherit;\
				    font-size: 100%;\
				    padding: .5em 1em;\
				    color: white;\
				    font-weight: 600;\
				    border: 1px solid #999;\
				    border: 0 rgba(0,0,0,0);\
				    background-color: rgba(31, 196, 255, .8);\
				    text-decoration: none;\
				    border-radius: 2px;\
				    display: inline-block;\
				    zoom: 1;\
				    line-height: normal;\
				    white-space: nowrap;\
				    vertical-align: middle;\
				    text-align: center;\
				    cursor: pointer;\
				    -webkit-user-drag: none;\
				    -webkit-user-select: none;\
				    user-select: none;\
				    -webkit-box-sizing: border-box;\
				    box-sizing: border-box;\
				 }\
				.alert_message_mc .closebox {\
				    display: inline-block;\
				    height: 16px;\
				    width: 16px;\
				    position: absolute;\
				    right: 4px;\
				    top: 4px;\
				    cursor: pointer;\
				    background: ' + closebox_url + '\
				}\
				</style>';

	$('head').append(style);

})();

// (function() {
// 	// add listeners
// 	$('#shave').click(function() {
		
// 	});

// })();