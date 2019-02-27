
function make_deals_div(prod_discount,prod_link,prod_img_link,prod_title,counter_id,counter_time){
	var deals_div="";
	deals_div += "<div class=\"col-md-3 col-sm-6 dbox\"><div class=\"box-01\"><div class=\"product-actual-price\">";
	deals_div += prod_discount+'%';
	deals_div += "<\/div><div class=\"product-image\"><a href=\"";
	deals_div += prod_link;
	deals_div += "\" target=\"_blank\"><img style=\"max-width:160px;max-height:160px;\"src=\"";
	deals_div += prod_img_link;
	deals_div += "\"><\/a><\/div><div class=\"product-details\"><div style=\" white-space: nowrap;overflow: hidden; text-overflow: ellipsis;\"class=\"product-name\">";
	deals_div += prod_title;
	deals_div += "<\/div><div class=\"product-price\">&nbsp;<span id=\"";
	deals_div += counter_id;
	deals_div += "\">";
	deals_div += counter_time;
	deals_div += "<\/span>"+"&nbsp; &nbsp;<span title=\"Click here if you want to stop tracking\" class=\"btn btn-danger btn-xs removebtn\" id=\"remove_button_"+counter_id+"\"> remove<\/span>"+" <\/div><\/div><\/div><\/div>";
	
	return deals_div;

}



function populate_deal_reminders(){

	chrome.storage.local.get({'deals_reminders':[],},function(item){
	
		$('#dispprods').html('');
		var i=0,j=0,k=0;
		var temp_arr=item.deals_reminders.slice(0);

		var processed_arr=item.deals_reminders.slice(0);
		var deals_to_be_displayed_arr=[];
		var deals_displayed=[];
		var deal_can_be_displayed=true;
		console.log('temp array length'+temp_arr.length);

		if(temp_arr.length<=0){
			$('#dispprods').html('<h2>Click on "Remind Me" on the deals to start tracking them.</h2>');
			console.log('rerurning from populate deals');
			return;
		}


		for(i=0;i<temp_arr.length;i++){

			// if(is_deal_to_be_displayed_now(temp_arr[i].start_time)){

			// 	deals_to_be_displayed_arr.push(temp_arr[i]);
			// }
			deals_to_be_displayed_arr.push(temp_arr[i]);
		}

		console.log('gone through temp array');	
		//display deals

		console.log('size of to be displayed'+deals_to_be_displayed_arr.length)

		console.log(temp_arr);

		if(deals_to_be_displayed_arr.length<=0){
			$('#dispprods').html('<h2>None of the Deals you tracked is going to start in the next 30 minutes</h2>');
		}

		for(i=0;i<deals_to_be_displayed_arr.length;i++){
			deal_can_be_displayed=true;
			var deal=deals_to_be_displayed_arr[i];
			// var deals_div=deals_div_str(deal.link,deal.image_url,deal.title,deal.percent_off,deal.start_time);
			var prod_discount=parseInt(deal.percent_off);
			var prod_link=deal.link;
			var prod_img_link=deal.image_url;
			var prod_title=deal.title;
			var counter_id='counter_'+i;
			var counter_time=get_time_reamaining(deal.start_time);
			if(counter_time<0){
				counter_time=0;
			}
			
			console.log(counter_time);
			console.log(typeof counter_time );

			for(j=0;j<deals_displayed.length;j++){
				if(deals_displayed[j].title==deal.title){
					deal_can_be_displayed=false;
					break;
				}
				else{
					// console.log('inserting'+i);
					deal_can_be_displayed=true;
				}
			}

			if(deal_can_be_displayed){
				// $('#deals_div').append('<br><br>'+deals_div);	
				var deals_div=make_deals_div(prod_discount,prod_link,prod_img_link,prod_title,counter_id,counter_time);
				$('#dispprods').append(deals_div);
				display = document.querySelector('#'+counter_id);
				startTimer(counter_time,display)
			}
			
			deals_displayed.push(deals_to_be_displayed_arr[i]);


		}

		// remove displayed deals
 		// 	for(j=0;j<deals_displayed.length;j++){
 		// 		console.log(deals_displayed[j]);
 		// 		for(k=0;k<processed_arr.length;k++){
 		// 			console.log(deals_displayed[j].title);
 		// 			console.log(processed_arr[k].title);
 		// 			if(deals_displayed[j].title===processed_arr[k].title ){
 		// 				console.log(deals_displayed[j].notified);
 							
 		// 				if(deals_displayed[j].notified){
			// 				console.log('splicing item'+deals_displayed[j].title );
	 	// 					processed_arr.splice(k,1);
	 	// 					break;

 		// 				}
 		// 			}
 		// 		}
 		// 	}
 		// console.log(deals_displayed);
 		// console.log(processed_arr);
 		// // update storage
 		// chrome.storage.local.set({'deals_reminders':processed_arr},function(e){
 		// 	console.log('saved reminder');
 		// });


	});

}


function get_time_reamaining(time_str){
	var date_part=time_str.split(' ')[0];
	var time_part=time_str.split(' ')[1];

	date_part=date_part.split('-'); 
	time_part=time_part.split(':');

	var deal_time=new Date(date_part[0],date_part[1]-1,date_part[2],time_part[0],time_part[1],0,0);

	var time_now=new Date();

	console.log(deal_time);
	console.log(time_now);

	return parseInt((deal_time-time_now)/1000) ;

}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}


function is_deal_to_be_displayed_now(time_str){


	var date_part=time_str.split(' ')[0];
	var time_part=time_str.split(' ')[1];

	date_part=date_part.split('-'); 
	time_part=time_part.split(':');

	var deal_time=new Date(date_part[0],date_part[1]-1,date_part[2],time_part[0],time_part[1],0,0);


	var time_to_comapre= new Date();

	// time_to_comapre.setHours(time_to_comapre.getHours() + 1);
	time_to_comapre.setMinutes(time_to_comapre.getMinutes() + 30);
	var time_to_compare_1 =new Date();

	console.log(deal_time);

	console.log(time_to_comapre);

	if(deal_time<=time_to_comapre ){
		return true;
	}
	else{
		return false;
	}

}

