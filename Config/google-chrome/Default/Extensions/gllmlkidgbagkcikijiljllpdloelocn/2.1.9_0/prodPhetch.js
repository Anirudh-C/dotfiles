
var fetchDynData = function() {
	return function(response,textStatus,sent_req) {
	//console.log(textStatus);
	console.log('mc: woah, error in talking to fatherboat?');
	console.log(textStatus);
	
	prod_deets.call_type='Dynamic';

	
	var curr_fetch_sites= getFetchSites();
	console.log(curr_fetch_sites);
	var curr_nofetch_sites=top_sites.diff(curr_fetch_sites);
	
	curr_fetch_sites.slice(0,12).filter(fetchDynProdData(''));


	curr_nofetch_sites.filter(addNoFetchSiteLink);
	}//clousre
} //fetchDynData


var fetchDynDataFromSiteList = function(site_list) {
	return function(response,textStatus,sent_req) {
	//console.log(textStatus);
	console.log('mc: woah, error in talking to fatherboat?');
	console.log(textStatus);
	
	prod_deets.call_type='Dynamic';

	
	var curr_fetch_sites= site_list;
	
	curr_fetch_sites.slice(0,12).filter(fetchDynProdData(''));

	}//clousre
} //fetchDynData

var checkProdServerData = function() {
	return function(response) {


		console.log('mc:fatherboat has msg for me?');
		var fetched_sites=[],mod_sites=[],upd_time, now_time, delay_hours, insertPriceBool=true;
		now_time=Date.parse(response['t'].split('.')[0]);
		debug_time =Date.parse('2016-02-04');
		debug_delay_hrs=Math.round((now_time-debug_time)/(1000*60*60));
		
		//examine data that is coming in and figure out, which data to call
		
		//tack on bundle id
		prod_deets.bundle_key = response['bundlekey'];
		//senddata to server
		prod_deets.call_type='Server';

		
		var curr_fetch_sites= getFetchSites();
		var curr_nofetch_sites=top_sites.diff(curr_fetch_sites);

		if (response['found']) {

			console.log('mc:fatherboat has nice msg for me');
			var prods_rec_arr = response['prodvals'];
			console.log(prods_rec_arr);
			for (var i=0; i<prods_rec_arr.length; i++) {
				insertPriceBool=true;
			
				upd_time=Date.parse(prods_rec_arr[i]['prod_updated'].split('.')[0]);
				delay_hours = Math.round((now_time-upd_time)/(1000*60));
				//console.log('DEBUG: delay hours - change for testing');
				//currtime will be 330 (5:30) ahead because of GMT
				//console.log(delay_hours+' ' + prods_rec_arr[i]['prod_site']);

				if ((prod_deets.prod_site == prods_rec_arr[i]['prod_site']) || ($.inArray(prods_rec_arr[i]['prod_site'],curr_fetch_sites)==-1)) {
					insertPriceBool=false;
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
				} //samesite or fetch from unlisted site

				else if (prods_rec_arr[i]['prod_mod']) {
					//product available and must fetch now
					mod_sites.push(prods_rec_arr[i]['prod_site']);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
					fetchDynProdData(prods_rec_arr[i])(prods_rec_arr[i]['prod_site']);
					insertPriceBool=false;
				}//prod_mod
				//TODO 690 for avail and 1410(18hrs) if not; HIGHFREQ 10 MINS (330+10 = 340)
				//TODO 360 for avail and 1080 (18hrs); HIGHFREQ 10 CHANGED NOW TIME

				else if ((delay_hours>=10) && ($.inArray(prods_rec_arr[i]['prod_site'],highfreq_sites)>-1) && ((prods_rec_arr[i]['prod_avail']) || (parseFloat(prods_rec_arr[i].prod_price)!=-1))) {
					//console.log('DEBUG old; fetching new '+prods_rec_arr[i]['prod_site']);
					mod_sites.push(prods_rec_arr[i]['prod_site']);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
					fetchDynProdData(prods_rec_arr[i])(prods_rec_arr[i]['prod_site']);
					insertPriceBool=false;

				}

				else if ((delay_hours>=360) && ((prods_rec_arr[i]['prod_avail']) || (parseFloat(prods_rec_arr[i].prod_price)!=-1))) {
					mod_sites.push(prods_rec_arr[i]['prod_site']);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
					fetchDynProdData(prods_rec_arr[i])(prods_rec_arr[i]['prod_site']);
					insertPriceBool=false;

				}//elseif
				else if ((delay_hours>=10) && (debug_delay_hrs<0) && (prods_rec_arr[i]['prod_site']=='sd')){
					//console.log('zees fixez sd temporary insanity');
					mod_sites.push(prods_rec_arr[i]['prod_site']);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
					fetchDynProdData(prods_rec_arr[i])(prods_rec_arr[i]['prod_site']);
					insertPriceBool=false;

				}

				else if (delay_hours>=1080) {
					mod_sites.push(prods_rec_arr[i]['prod_site']);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
					fetchDynProdData(prods_rec_arr[i])(prods_rec_arr[i]['prod_site']);
					insertPriceBool=false;

				}//elseif


				if (insertPriceBool) {


					if (!prods_rec_arr[i]['prod_avail'] && (parseFloat(prods_rec_arr[i].prod_price)!=-1)) {

						insertSimilarPrice(createStringLink(prods_rec_arr[i], createFetchURL('', prods_rec_arr[i].prod_site),'similar'),prods_rec_arr[i].prod_price);
					}
					else if (parseFloat(prods_rec_arr[i].prod_price)==-1) {
						insertPrice(createStringLink(prods_rec_arr[i],'','notfound'),-1);
					}
					else {
						//pump info into insertPrice
					
						insertPrice(createStringLink(prods_rec_arr[i],'','found'),prods_rec_arr[i].prod_price);
						//show tag
					}
					//show lp tag
					comparePrices(prods_rec_arr[i]);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);

				} // if insertPriceBool

			}//for
	
			//check which sites need to be fetched
			//CHANGE LATER 
			//fetched_sites=mod_sites;

			var tofetch_sites=curr_fetch_sites.diff(fetched_sites);

			tofetch_sites.slice(0,12).filter(fetchDynProdData(''));
			curr_nofetch_sites.diff(fetched_sites).filter(addNoFetchSiteLink);

		} //if responsefound
		else {
			console.log(response);
			console.log(response['miss']);
			console.log(response['misss']==undefined);

			//TODO: include error message and pause
			if (response['miss']!=undefined) {
				$('#'+highlightm).html('<span style="font-style:italic; color:#541A30; display:inline !important">Whoops, something went wrong! Sorry. We are looking into it.</span>');
				$('#'+cutemsg).html('');
				return;
			}

			console.log('mc:fatherboat say son do your own work');
			curr_fetch_sites.slice(0,12).filter(fetchDynProdData(''));
			curr_nofetch_sites.filter(addNoFetchSiteLink);
		}

		} //endclosure
}


var smart_makkhi_pid_list = [];
var is_manual_bundle = false;
var checkSimServerData = function(response) {
	smart_makkhi_pid_list = [];
	is_manual_bundle = false;
	var do_tc_bs=true;
	//console.log('yoohoo! going for simsim');
	//console.log("DEBUG : checking categ response");
	//console.log(response);

	//sending time taken for postpid response
	var totalTime = new Date().getTime()-postpidStartTime

	$('#postpidtime').text("postpidtime "+totalTime);

	chrome.runtime.sendMessage({method:'send_postpid_time',time_diff:totalTime});

	if (response['found']){
		update_pid_list(response['result']);

		if(prod_deets.prod_site=='fk'){
			do_fk_fail_pre_populate_process(response);
		}

		if(response["isDittory"]==true){
			console.log("found dittory products");
			populateDittoryProducts(response);
			disp_analytics_send_flags['all_elastic_data_processed']='ok';
			send_ga_disp_results();
			return;

		}

		if(is_dittory_category()){

			if(isApparel()){
				chrome.runtime.sendMessage({"method":"dittory_categ","site":prod_deets.prod_site,"deets":JSON.stringify(prod_deets),"categ":"apparel"});
			}

			if(isFootWear()){
				chrome.runtime.sendMessage({"method":"dittory_categ","site":prod_deets.prod_site,"deets":JSON.stringify(prod_deets),"categ":"footwear"});
			}

			if(isWatch()){
				chrome.runtime.sendMessage({"method":"dittory_categ","site":prod_deets.prod_site,"deets":JSON.stringify(prod_deets),"categ":"watch"});
			}

		}

		if(is_dittory_sub_categ()){
			chrome.runtime.sendMessage({"method":"dittory_categ_makkhi_results_display","site":prod_deets.prod_site,"deets":JSON.stringify(prod_deets),"categ":"sub_categ"});
		}

		if(response['isExclusive']){

			insert_exclusive_msg();
			return;
		}

		if(response['isManualBundle']){
			console.log('calling is manual bundle');
			response['result']=clean_rep_results(response['result']);
			is_manual_bundle = true;
		}

		prod_deets.simfound=true;

		// $('#'+highlightm).html('<span style="font-style:italic; color:#541A30; display:inline !important">Preview products by hovering over links</span>');
		// $('#'+cutemsg).remove();
		populateSimServerData(response);

		console.log('tc test');
		for (var i=0; i< response.result.length;i++){
			console.log(response.result[i].website)
			if(response.result[i].website=='tc'){
				console.log(response.result[i].website);
				do_tc_bs=false;
				break;
			}
		}

		if(do_tc_bs && response["isDittory"]==false){
			console.log('calling backsearch for tc');
			// fetchDynProdData(prod_deets)('tc');
		}
		else{
			console.log('tc found not calling backsearch');
		}


	}
	else {
		//didn't find anything, do the usual stuff, send to other server
		if ((response['pc']!=undefined) && (response['pc']==-1)) {
			console.log('sim server mamma say dont go back to old server!');
		}

		else {
			console.log('nothing on sim server, sadly');
			fetchOldServerData();
		}
	}


}

function update_pid_list(result_arr){
	for(i=0;i<result_arr.length;i++){
		smart_makkhi_pid_list.push(result_arr[i].pid.toLowerCase()+result_arr[i].website.toLowerCase());
	}
}

function do_fk_fail_pre_populate_process(response){
	//set or unset fk_fail_search based on title availablity here
		if(response.title==undefined || response.title==''){
			fk_fail_search=false;
		}
		else{
	        prod_deets.prod_title=response.title;
	        prod_deets.prod_srch=response.title;
	        prod_deets.prod_title_raw=response.title;
	        fk_fail_search=true;

		}


}

function clean_rep_results(result_arr){
var i=0, j=0;
var result_to_be_shown;
var sites_compared=[];
var final_results=[];
	for(i=0;i<result_arr.length;i++){

		result_to_be_shown=result_arr[i];

		for(j=0;j<result_arr.length;j++){

			if((result_to_be_shown['website']==result_arr[j]['website'])&&(sites_compared.indexOf(result_to_be_shown['website'])==-1)){
				//same website
				if(result_to_be_shown['prod_price']>=result_arr[j]['prod_price']){
					console.log('changing site to be shown');

					result_to_be_shown=result_arr[j];

				}

			}
		}

		if((result_to_be_shown['website']!=prod_deets.prod_site)&&(sites_compared.indexOf(result_to_be_shown['website'])==-1)){

			final_results.push(result_to_be_shown);
			sites_compared.push(result_to_be_shown['website']);

		}


	}

	return final_results;
}


var updateCurrProd = function(response) {
	//console.log('What is this magical thing');
	//console.log(response);

	if ((response['tsd']!=undefined) && (parseFloat(response['tsd'])>delayUs[prod_deets.prod_site])) {
		//send price data now
		var ud_json ={'ud':response['tarud'],'prod_price':prod_deets.prod_price,'product_id':prod_deets.product_id};
		console.log('yo mama so ooold!');
		
		sendPuddleData(ud_json);
	}
}


/*
	var populateSimServerData = function(response) {

	//get data, check what's in there
	//if old, show, but fetch data?
	//if not, show data

	var getp_sites=[], found_sites=[], insertBool=true;
	console.log('mc:simba has nice msg for me');
	var prods_rec_arr = response['result'];

	// If there's no result from abbahobb, get it the oher way
	var hazAbba = false;
	for (var i=0, len=prods_rec_arr.length; i<len; i++) {
		if (prods_rec_arr[i].website == 'az') {
			hazAbba = true;
			break;
		}
	}

	if (!hazAbba) {
		// no aaba.
		console.log('No abba. Calling abba.');
		fetchDynProdData('')('az');
	}

	console.log(prods_rec_arr);

	//update data
	updateCurrProd(response);
	

	//check time, if delay, then add to fetchp_list

	var num_fetch=0;
	for (var i=0; i<prods_rec_arr.length; i++) {

		if (i>7) {
			console.log('stuffed enough in the box, spill danger, over and out!');
			break;

		}

		if (parseFloat(prods_rec_arr[i].prod_price)==0) {
			console.log('failing silently because of zero');
			continue;
		}
	
		if (parseFloat(prods_rec_arr[i].sd)>delayUs[prods_rec_arr[i].website]) {
			getp_sites.push(prods_rec_arr[i].website);
			//found this, dont add discovery link
			found_sites.push(prods_rec_arr[i].website);
			if (num_fetch<3) {
				//three stale products not just three products
				num_fetch+=1;
				fetchPSimData(prods_rec_arr[i],prods_rec_arr[i].website);
			}
			else {

				insertPrice(createStringLinkSim(prods_rec_arr[i],'found'),prods_rec_arr[i].prod_price);
				comparePrices(prods_rec_arr[i]);
			}

		}
		else {
			//show data as usual
			//found this, dont add discovery link
			found_sites.push(prods_rec_arr[i].website);
			insertPrice(createStringLinkSim(prods_rec_arr[i],'found'),prods_rec_arr[i].prod_price);
			comparePrices(prods_rec_arr[i]);

		}
		//process data here TODO
	}
	addDiscoverLinks(found_sites);
} //populateSimServerData
*/
var populateSimServerData = function(response) {

	//get data, check what's in there
	//if old, show, but fetch data?
	//if not, show data

	// var getp_sites=[], found_sites=[], insertBool=true;
	// console.log('mc:simba has nice msg for me');
	// var prods_rec_arr = response['result'];
	// var server_response_match_score;

	// // If there's no result from abbahobb, get it the oher way
	// var hazAbba = false;
	// for (var i=0, len=prods_rec_arr.length; i<len; i++) {
	// 	if (prods_rec_arr[i].website == 'az') {
	// 		hazAbba = true;
	// 		break;
	// 	}
	// }

	// if (!hazAbba) {
	// 	// no aaba.
	// 	console.log('No abba. Calling abba.');
	// 	fetchDynProdData('')('az');
	// }


	// //update data
	// updateCurrProd(response);
	

	// //check time, if delay, then add to fetchp_list
	// no_data_from_elastic=prods_rec_arr.length;
	// var num_fetch=0;
	// console.log('before populate test');

	// if(response['isDittory']){
	// 	$("#isDittory").text("Dittory products");
	// }


	// if(response['clusterlength']){
	// 	$("#clusterlength").text("clusterLength "+response['clusterlength']);
	// }

	// for (var i=0; i<prods_rec_arr.length; i++) {

	// 	console.log(prods_rec_arr[i].website+' ptest');
	// 	if(prod_deets.prod_site!='fk' || prod_deets.prod_site!='pt'){
	// 		server_response_match_score=make_match_score(prod_deets.prod_title_raw,prods_rec_arr[i].title,prods_rec_arr[i].website);
	// 	}
	// 	else{
	// 		server_response_match_score=make_match_score(prod_deets.prod_title,prods_rec_arr[i].title,prods_rec_arr[i].website);	
	// 	}
	// 	elastic_match_scores.push(server_response_match_score);		
	// 	if(!response['isManualBundle'] && !response['isDittory']){


	// 		if(!is_score_ok(server_response_match_score,prods_rec_arr[i].website)){

	// 			console.log('score not ok');
	// 			//do not display that data.
	// 			checkFromplugin_informServer(prods_rec_arr[i],server_response_match_score);
	// 			found_sites.push(prods_rec_arr[i].website);
	// 			continue;

	// 		}
	// 		else{
	// 		}
	// 		console.log('score ok');
	// 	}

	// 	if(prods_rec_arr[i].website == "pt"){
	// 		console.log("pushing paytm");
	// 		var pt_push_temp_obj ={};
	// 		pt_push_temp_obj[prods_rec_arr[i].pid+"pt"] = prods_rec_arr[i].title;
	// 		displayed_results.push(pt_push_temp_obj);
	// 	}

	// 	if (i>7) {
	// 		console.log('stuffed enough in the box, spill danger, over and out!');
	// 		break;

	// 	}

	// 	if (parseFloat(prods_rec_arr[i].prod_price)==0) {
	// 		console.log('failing silently because of zero');
	// 		continue;
	// 	}
	// 	if(prods_rec_arr[i].prod_price==-1 || prods_rec_arr[i].prod_price=='-1'){
	// 		insertPrice(createStringLinkSim(prods_rec_arr[i],'oos'),'oos');
	// 		elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;;
	// 		found_sites.push(prods_rec_arr[i].website);
	// 		continue;
	// 	}
	
	// 	if (parseFloat(prods_rec_arr[i].sd)>delayUs[prods_rec_arr[i].website]) {
	// 		getp_sites.push(prods_rec_arr[i].website);
	// 		//found this, dont add discovery link
	// 		found_sites.push(prods_rec_arr[i].website);
	// 		if (num_fetch<3) {
	// 			//three stale products not just three products
	// 			num_fetch+=1;
	// 			fetchPSimData(prods_rec_arr[i],prods_rec_arr[i].website);
	// 		}
	// 		else {
	// 			console.log("tracked");
	// 			// trackDisplayedResults(prods_rec_arr[i].uid);
	// 			insertPrice(createStringLinkSim(prods_rec_arr[i],'found'),prods_rec_arr[i].prod_price);
	// 			elastic_data_displayed=elastic_data_displayed+1;
	// 			comparePrices(prods_rec_arr[i]);
	// 		}

	// 	}
	// 	else {
	// 		//show data as usual
	// 		//found this, dont add discovery link
	// 		console.log("tracked");
	// 		// trackDisplayedResults(prods_rec_arr[i].uid);
	// 		found_sites.push(prods_rec_arr[i].website);
	// 		insertPrice(createStringLinkSim(prods_rec_arr[i],'found'),prods_rec_arr[i].prod_price);
	// 		elastic_data_displayed=elastic_data_displayed+1;
	// 		comparePrices(prods_rec_arr[i]);

	// 	}
	// 	//process data here TODO
	// }

	// //do check for all sites of category is there;

	// found_sites=checkAllCategSites(found_sites);

	// addDiscoverLinks(found_sites);

	// //do the final check and send analytics data here
	// disp_analytics_send_flags['all_elastic_data_processed']='ok';
	// send_ga_disp_results();

//

	// get data, check what's in there
	// if old, show, but fetch data?
	// if not, show data


	// $("#mc_main_host").css("display","block");
	if(response.totalCount>4 && response.totalCount<100){
		show_all_text = "See more on Makkhichoose website";
		$(result_view).find(".show_more_button_container button").text("See more on Makkhichoose website");		
	}else if(response.totalCount>100){
		show_all_text = "See more on Makkhichoose website";
		$(result_view).find(".show_more_button_container button").text("See more on Makkhichoose website");
	}else{
		$(result_view).find(".show_more_button_container button").text("See more on Makkhichoose website");
	}

	$(result_view).find(".show_more_button_container").css("display","block");

	chrome.storage.local.get({'dittory_site_button_clicked':false},function(response){
		console.log('reading storage for dittory_site_button_clicked ');
		console.log(response);
		if(response.dittory_site_button_clicked){
			// hide beacon
			console.log("hiding beacon");
			$(result_view).find(".show_more_button_container .beacon.show_all_button").css('visibility','hidden');
		}else{
			// display beacon
			console.log("displaying beacon");
			$(result_view).find(".show_more_button_container .beacon.show_all_button").css('visibility','visible');
		}
	});

	var getp_sites=[], found_sites=[], insertBool=true;
	console.log('mc:simba has nice msg for me');
	var prods_rec_arr = response['result'];
	var server_response_match_score;

	// If there's no result from abbahobb, get it the oher way
	var hazAbba = false;
	for (var i=0, len=prods_rec_arr.length; i<len; i++) {
		if (prods_rec_arr[i].website == 'az') {
			hazAbba = true;
			break;
		}
	}

	if (!hazAbba) {
		// no aaba.
		console.log('No abba. Calling abba.');
		fetchDynProdData('')('az');
	}


	//update data
	updateCurrProd(response);
	

	//check time, if delay, then add to fetchp_list
	no_data_from_elastic=prods_rec_arr.length;
	var num_fetch=0;
	console.log('before populate test');

	if(response['isDittory']){
		$("#isDittory").text("Dittory products");
	}


	if(response['clusterlength']){
		$("#clusterlength").text("clusterLength "+response['clusterlength']);
	}

	for (var i=0; i<prods_rec_arr.length; i++) {

		console.log(prods_rec_arr[i].website+' ptest');
		if(prod_deets.prod_site!='fk' || prod_deets.prod_site!='pt'){
			server_response_match_score=make_match_score(prod_deets.prod_title_raw,prods_rec_arr[i].title,prods_rec_arr[i].website);
		}
		else{
			server_response_match_score=make_match_score(prod_deets.prod_title,prods_rec_arr[i].title,prods_rec_arr[i].website);	
		}
		elastic_match_scores.push(server_response_match_score);		
		if(!response['isManualBundle'] && !response['isDittory']){


			if(!is_score_ok(server_response_match_score,prods_rec_arr[i].website)){
				console.log('score not ok');
				//do not display that data.
				checkFromplugin_informServer(prods_rec_arr[i],server_response_match_score);
				found_sites.push(prods_rec_arr[i].website);
				continue;

			}
			console.log('score ok');
		}
		
		if(prods_rec_arr[i].website == "pt"){
			console.log("pushing paytm");
			var pt_push_temp_obj ={};
			// pt_push_temp_obj[prods_rec_arr[i].pid+"pt"] = prods_rec_arr[i].title;
			
			pt_push_temp_obj["pid"] = prods_rec_arr[i].pid+"pt";
			pt_push_temp_obj["title"] = prods_rec_arr[i].title;
	        pt_push_temp_obj["res_price"] = prods_rec_arr[i]["prod_price"];
	        pt_push_temp_obj["page_price"] = parseInt(prod_deets.prod_price);
			displayed_results.push(pt_push_temp_obj);
		}


		if (i>7) {
			console.log('stuffed enough in the box, spill danger, over and out!');
			break;

		}

		if (parseFloat(prods_rec_arr[i].prod_price)==0) {
			console.log('failing silently because of zero');
			continue;
		}
		if(prods_rec_arr[i].prod_price==-1 || prods_rec_arr[i].prod_price=='-1'){
			// insertPrice(createStringLinkSim(prods_rec_arr[i],'oos'),'oos');
			insert_oos_box(make_results_box(prods_rec_arr[i]," ",true));
			elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;;
			found_sites.push(prods_rec_arr[i].website);
			continue;
		}
	
		if (parseFloat(prods_rec_arr[i].sd)>delayUs[prods_rec_arr[i].website]) {
			getp_sites.push(prods_rec_arr[i].website);
			//found this, dont add discovery link
			found_sites.push(prods_rec_arr[i].website);
			if (num_fetch<3) {
				//three stale products not just three products
				num_fetch+=1;
				fetchPSimData(prods_rec_arr[i],prods_rec_arr[i].website);
			}
			else {
				console.log("tracked");
				// trackDisplayedResults(prods_rec_arr[i].uid);
				// insertPrice(createStringLinkSim(prods_rec_arr[i],'found'),prods_rec_arr[i].prod_price);
				insert_price_result_box(make_results_box(prods_rec_arr[i]));
				elastic_data_displayed=elastic_data_displayed+1;
				comparePrices(prods_rec_arr[i]);
			}

		}
		else {
			//show data as usual
			//found this, dont add discovery link
			console.log("tracked");
			// trackDisplayedResults(prods_rec_arr[i].uid);
			found_sites.push(prods_rec_arr[i].website);
			// insertPrice(createStringLinkSim(prods_rec_arr[i],'found'),prods_rec_arr[i].prod_price);
			insert_price_result_box(make_results_box(prods_rec_arr[i]));
			elastic_data_displayed=elastic_data_displayed+1;
			comparePrices(prods_rec_arr[i]);

		}
		//process data here TODO
	}

	//do check for all sites of category is there;

	found_sites=checkAllCategSites(found_sites);

	addDiscoverLinks(found_sites);

	//do the final check and send analytics data here
	disp_analytics_send_flags['all_elastic_data_processed']='ok';
	send_ga_disp_results();
	


	// for (var i=0; i<prods_rec_arr.length; i++){
	// 	insert_price_result_box(make_results_box(prods_rec_arr[i]));
	// }

} //populateSimServerData


function checkAllCategSites(found_sites_1){

	var found_sites_orginal=found_sites_1.slice();	
	var categ_sites=getFetchSites();
	var sites_to_fetch=[];
	var found_sites_modified=found_sites_1.slice();

	console.log('found sites modified');
	console.log(found_sites_modified);

	console.log('categ sites');
	console.log(categ_sites);
	
	if(! isApparel()){
		return found_sites_1;
	}


	var i=0;
	for(i=0;i<categ_sites.length;i++){
		if($.inArray(categ_sites[i],found_sites_modified )>-1){
			//site is already there
			console.log(categ_sites[i]+'already there');

		}
		else{
			//site is not there add to back search list
			console.log(categ_sites[i]+'adding to fetch list');
			sites_to_fetch.push(categ_sites[i]);
		}
	}

	for(i=0;i<sites_to_fetch.length;i++){

		found_sites_modified.push(sites_to_fetch[i]);
	}

	if(isApparel()){
		//start back search for sites
		// $.toast('apparel sites so doing back search');
		console.log('apparel site');
		fetchDynDataFromSiteList(sites_to_fetch)();
		return found_sites_modified;

	}
	else{
		console.log('returning orginals');
		console.log(found_sites_orginal);
		return found_sites_orginal;
	}

}

var addDiscoverLinks = function(found_sites) {

	console.log('Discovery commence!');
	console.log(found_sites);

	var curr_site='';
	var search_sites=getFetchSites();
	//console.log('DEBUG: search_sites '+JSON.stringify(search_sites));
	for (var i=0; i<search_sites.length; i++) {
			curr_site=search_sites[i];
			if (found_sites.indexOf(curr_site)>-1 || (curr_site==prod_deets.prod_site) ) {
				console.log('Discovered '+curr_site);
			} else {
				console.log('Undiscovered '+curr_site);
				// insertPrice(createNotFoundStringLink({'prod_site':curr_site},createFetchURL('',curr_site)),-1);
				insert_manual_search_box(make_manual_search_box({"prod_site":curr_site,"prod_link":createFetchURL('',curr_site),"website":"","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));

			}
	}

} // addDiscoverLinks



function insert_exclusive_msg(){
	
// repl_strng = '<a href="' + '#' + '" style="display: block !important;" target="_blank">\
// 		<div class="row-top">\
// 			\
// 		</div>\
// 		<div class="row-btm">\
// 			<img src="' + prod_deets.prod_img+ '"/>\
// 			<div class="row-btm-title">' + '<span style="font-size:small;">This Product is Exclusive to this site</span>'+ '</div>' + 
// 		'</div>\
// 	  </a>';

is_exclusive = true;

var portal=cssLocs.couponDunia.portalMapReverse[prod_deets.prod_site];

var box="";
box += "  <div class=\"item\" style=\"margin:0px;\">";
box += "            <div class=\"row\" style=\"padding: 5px 16px;\">";
box += "                <div class=\"content\">";
box += "                This Product is Exclusive to " + portal ;
box += "                <\/div>";
box += "                <div class=\"image\" style=\"width:130px; height:98px;\">";
box += "                    <img style=\"max-width:100px; max-height:98px; width:auto; height:auto;\" src=\""+prod_deets.prod_img+"\">";
box += "                <\/div>";
box += "            <\/div>";
box += "    <\/div>";

$(result_view).find("#exclusive").append(box);

if($(mc_root).find("#preview_min_root #price").text()=="loading"){
	$(mc_root).find("#preview_min_root #price").text("Exclusive");
	update_preview_box(make_preview_box("Exclusive",prod_deets.prod_img));
}


addDiscoverLinks([prod_deets.prod_site]);

if(dock_settings =="top" || dock_settings =="bottom"){
	console.log("top dock calling inser carousel");
	insert_to_carousel();
	return;

}
else{
	console.log("not top or bot dock");
}





}