console.log("in buses")
var bus_deets = {
	"from_city":"",
	"to_city":"",
	"doj":""
}

var page_bus_deets = [];
var red_bus_uniques = [];

var bus_site_list={
	"abb":"AbhiBus",
	"rb":"Redbus",
	"gb":"Goibibo"
}

var bus_site_links={};


var bus_analytics_flags = {};

if(window.location.href.match("https://www.abhibus.com/bus_search")){
	page_bus_deets = [];
	bus_data_displayed =[];
	// $('head').append("<style>.dropdown{position: relative; display: inline-block;}.dropdown-content{display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); padding: 12px 16px; z-index: 1;}.dropdown:hover .dropdown-content{display: block;}<\/style>");
	var from_city_code = window.location.href.split('/bus_search')[1].split('/')[1];
	var to_city_code = window.location.href.split('/bus_search')[1].split('/')[3];
	var doj = window.location.href.split('/bus_search')[1].split('/')[5];
	var doj_in_ms = new Date(parseInt(doj.split("-")[2]),parseInt(doj.split("-")[1])-1,parseInt(doj.split("-")[0])).getTime();

	prod_deets.prod_site = "abb";

	bus_deets["from_city"] = from_city_code;
	bus_deets["to_city"] = to_city_code;
	bus_deets["doj"] = doj_in_ms;
	abhibus_page_task();


}

if(window.location.href.match("www.redbus.in/search")){
	page_bus_deets = [];
	bus_data_displayed =[];
	var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});

	var from_city_code = url_params['fromCityName'];
	var from_city_id = url_params['fromCityId'];

	var to_city_code = url_params['toCityName'];
	var to_city_id = url_params['toCityId'];

	var doj = url_params['onward'];
	var doj_in_ms = new Date(parseInt(doj.split("-")[2]),parseInt(month_name_to_num_map[doj.split("-")[1].toLowerCase()])-1,parseInt(doj.split("-")[0])).getTime();


	prod_deets.prod_site = "rb";

	bus_deets["from_city"] = from_city_code;
	bus_deets["to_city"] = to_city_code;
	bus_deets["doj"] = doj_in_ms;
	redbus_page_task(from_city_id,to_city_id,doj);
	// abhibus_page_task();


}

var gb_bus_page_load_checker_timer;
function gb_bus_page_load_checker(){

    $('#mc_main_host').remove();
    if( ($("#show_progress").css("display")=="none") ){

        if(gb_bus_page_load_checker_timer){
            clearTimeout(gb_bus_page_load_checker_timer);
        }
        gb_page_previous_url=window.location.href;
        gb_page_url_watcher_timer=setTimeout(goibibo_url_watcher,1000);
       	
       	gb_bus_page_parser();
       
        return;
    }
    else{
        gb_bus_page_load_checker_timer=setTimeout(gb_bus_page_load_checker,1000);
    }

}

function gb_bus_page_parser(){
	
	var travel_deets = (window.location.href).split('#bus-')[1].split('-');

	var from_city_code = travel_deets[0];
	var from_city_id = travel_deets[7];

	var to_city_code = travel_deets[1];
	var to_city_id = travel_deets[8];

	var doj = travel_deets[2];
	var doj_in_ms = new Date(parseInt(doj.slice(0,4)),parseInt(doj.slice(4,6))-1,parseInt(doj.slice(6))).getTime();


	prod_deets.prod_site = "gb";

	bus_deets["from_city"] = from_city_code;
	bus_deets["to_city"] = to_city_code;
	bus_deets["doj"] = doj_in_ms;
	gb_bus_page_task(from_city_id,to_city_id,doj);

}

function gb_bus_page_task(from_city_code,to_city_code,doj){

	var from_city_n = bus_deets["from_city"];
	var to_city_n = bus_deets["to_city"];

	var all_bus_data_req = "https://www.goibibo.com/bus/getsearch/?versioncode=42&application=bus&actionId=BusFareSearchRequest&transaction_required=123&cache=false&qtype=bus&query=bus-"+from_city_n+'-'+to_city_n+'-'+doj+'--1-0-0--'+from_city_code+'-'+to_city_code+'&flavour=android';
	var all_bus_data_req_obj = {
	"type":"GET",
	"url":all_bus_data_req,
	};


	var all_bus_data_req = backPostGet(all_bus_data_req_obj);

	all_bus_data_req.done(function(all_bus_data_req_response){
		page_bus_deets = [];
		bus_data_displayed =[];
		//proccess data
		var all_bus_data = [];
		// console.log(all_bus_data_req_response);
		var bus_list = all_bus_data_req_response;

		for(var i=0; i<bus_list.length;i++){
			var start_time, end_time, fare, bus_type, operator_name;

			start_time = goibibo_time_to_standard_format(bus_list[i].fl[0].dd,bus_list[i].fl[0].dt);
			end_time = goibibo_time_to_standard_format(bus_list[i].fl[0].ad,bus_list[i].fl[0].at);
			fare = bus_list[i].fd.tf;
			bus_type = bus_list[i].fl[0].bt;
			operator_name = bus_list[i].fl[0].cr

			page_bus_deets.push({start_time :start_time,end_time:end_time,fare:parseInt(fare),bus_type:bus_type,operator_name:operator_name});

		}
		// insert_bus_container();
		update_data_for_bus_spa();
	});


}

function redbus_page_task(from_city_code,to_city_code,doj){

	function red_bus_time_to_common_form(redbus_time){
		return parseInt(redbus_time.split('(')[1].split(')')[0].split('+')[0]);
	}


	var all_redbus_data_req = "https://www.redbus.in/search/result?fromCity="+from_city_code+"&toCity="+to_city_code+"&doj="+doj;
	var all_redbus_data_req_obj = {
	"type":"GET",
	"url":all_redbus_data_req,
	};

	var all_redbus_data_req = backPostGet(all_redbus_data_req_obj);

	all_redbus_data_req.done(function(all_bus_data_req_response){
		//proccess data
		var all_bus_data = [];
		// console.log(all_bus_data_req_response);
		var bus_list = all_bus_data_req_response.SRD[0].RIN[0].InvList;

		for(var i=0; i<bus_list.length;i++){
			var start_time, end_time, fare, bus_type, operator_name;
			
			end_time = red_bus_time_to_common_form(bus_list[i].ArrTimeUnixTimeStamp);
			start_time = red_bus_time_to_common_form(bus_list[i].DepTimeUnixTimeStamp);
			fare = bus_list[i].FrLst[0];
			bus_type = bus_list[i].BsTp;
			operator_name = bus_list[i].Tvs;

			page_bus_deets.push({start_time :start_time,end_time:end_time,fare:parseInt(fare),bus_type:bus_type,operator_name:operator_name});
		}
		// get_goibibo_data();
		// get_abhibus_data();
		insert_bus_container();

	});
}




var abhibus_page_load_check_timer = "";
function abhibus_page_task(){

	if(abhibus_page_load_check_timer){
		window.clearTimeout(abhibus_page_load_check_timer);
	}

	if($("div.loading").length>0){
		abhibus_page_load_check_timer=setTimeout(abhibus_page_task,500);
		return;
	}else{
		//page loaded get data from other sites and display
		extract_bus_list_from_abhibus_page();
		// get_redbus_data();
		// get_goibibo_data();
		// console.log("successfully loaded data");
		insert_bus_container();

	}
}




function get_redbus_data(){

	var from_city_code = "";
	var to_city_code = "";
	var doj = date_in_redbus_format(bus_deets.doj);

	function date_in_redbus_format(time_in_ms){
		var tdate = new Date(time_in_ms);
		return  ""+tdate.getDate()+"-"+monthNames[parseInt(tdate.getMonth())]+"-"+tdate.getFullYear();
	}

	function red_bus_time_to_common_form(redbus_time){
		return parseInt(redbus_time.split('(')[1].split(')')[0].split('+')[0]);
	}

	function get_from_city_code(){

		var from_city_req_url= "https://www.redbus.in/Home/SolarSearch?search="+bus_deets.from_city
		var from_city_req_obj = {
	    "type":"GET",
	    "url":from_city_req_url,
	    };

	    var from_city_req = backPostGet(from_city_req_obj);

	    from_city_req.done(function(from_city_code_req_response){
	    	if(from_city_code_req_response.response.numFound > 0){
	    		//city code available
	    		from_city_code = from_city_code_req_response.response.docs[0].ID

	    		//sending request for to city code
	    		get_to_city_code(); 
	    	}
	    
	    });

	}

   	function get_to_city_code(){
		var to_city_req_url= "https://www.redbus.in/Home/SolarSearch?search="+bus_deets.to_city
		var to_city_req_obj = {
	    "type":"GET",
	    "url":to_city_req_url,
	    };

	    var to_city_req = backPostGet(to_city_req_obj);

	    to_city_req.done(function(to_city_code_req_response){
	    	if(to_city_code_req_response.response.numFound > 0){
	    		//city code available
	    		to_city_code = to_city_code_req_response.response.docs[0].ID;

	    		bus_site_links['redbus'] = "https://www.redbus.in/search?fromCityName="+bus_deets.from_city+"&fromCityId="+from_city_code+"&toCityName="+bus_deets.to_city+"&toCityId="+to_city_code+"&onward="+doj+"&opId=0&busType=Any#";
	    		//sending request to get all bus data
	    		get_all_bus_data(); 
	    	}
	    
	    });

   	}

   	function map_list_to_page_list(bus_list){
   		var not_found_list = [];
   		var matched_index = [];

		for(var i =0; i< page_bus_deets.length; i++){
			var current_bus = page_bus_deets[i];
			for(var j=0; j<bus_list.length; j++){
				if((current_bus.start_time == bus_list[j].start_time) && (current_bus.end_time == bus_list[j].end_time) && check_for_busname_match(current_bus.operator_name,bus_list[j].operator_name)){
					page_bus_deets[i]['red_bus_fare'] = bus_list[j].fare;
					matched_index.push(j);
				}

			}
		}

		for(var i=0; i<page_bus_deets.length;i++){
			if(!page_bus_deets[i].hasOwnProperty('red_bus_fare')){
				page_bus_deets[i]['red_bus_fare'] = '';
			}
		}
		matched_index=_.uniq(matched_index);
		matched_index=_.sortBy(matched_index);

		not_found_list = bus_list.filter(function(element,index,array){
			return !(matched_index.indexOf(index)>-1)
		});
		red_bus_uniques = not_found_list;
	}


   	function get_all_bus_data(){

		var all_bus_data_req = "https://www.redbus.in/search/result?fromCity="+from_city_code+"&toCity="+to_city_code+"&doj="+doj;
		var all_bus_data_req_obj = {
	    "type":"GET",
	    "url":all_bus_data_req,
	    };

	    var all_bus_data_req = backPostGet(all_bus_data_req_obj);

	    all_bus_data_req.done(function(all_bus_data_req_response){
	    	//proccess data
	    	var all_bus_data = [];
	    	// console.log(all_bus_data_req_response);
	    	var bus_list = all_bus_data_req_response.SRD[0].RIN[0].InvList;

	    	for(var i=0; i<bus_list.length;i++){
	    		var start_time, end_time, fare, bus_type, operator_name;
	    		
	    		end_time = red_bus_time_to_common_form(bus_list[i].ArrTimeUnixTimeStamp);
	    		start_time = red_bus_time_to_common_form(bus_list[i].DepTimeUnixTimeStamp);
	    		fare = bus_list[i].FrLst[0];
	    		bus_type = bus_list[i].BsTp;
	    		operator_name = bus_list[i].Tvs;

	    		all_bus_data.push({start_time :start_time,end_time:end_time,fare:parseInt(fare),bus_type:bus_type,operator_name:operator_name});

	    	}

	    	// var data_sorted_by_price = all_bus_data.sort(function(a,b){return a.fare-b.fare });
	    	// insert_deets_to_abhibus(data_sorted_by_price);

	    	// for(var i=0; i<data_sorted_by_price.length; i++){
	    	// 	// console.log("%c"+data_sorted_by_price[i].operator_name+" "+"%c"+data_sorted_by_price[i].bus_type+" "+"%c"+data_sorted_by_price[i].fare,"color:blue","color:green","color:red");
	    	// }

	    	// map_list_to_page_list(all_bus_data);
	    	// insert_bus_data_to_page(page_bus_deets);
	    	// display_data(page_bus_deets,'red_bus_fare');
	    	display_bus_data(all_bus_data,'Redbus');

	    });

   	}

   	get_from_city_code();

}



function get_abhibus_data(){

	function date_in_abhibus_form(date_in_ms,format){
		var rb_date = new Date(date_in_ms);
		if(!format){
			return rb_date.getFullYear() +'-' +(('0'+(rb_date.getMonth()+1)).slice(-2)) +'-' +(('0'+(rb_date.getDate())).slice(-2))	
		}else{
			return (('0'+(rb_date.getDate())).slice(-2)) +'-' +(('0'+(rb_date.getMonth()+1)).slice(-2)) +'-' +rb_date.getFullYear()	
		}
		
	}

	var abibus_bus_code_list = Object.keys(abhi_bus_place_list);

	var from_city_match = didYouMean(bus_deets['from_city'],abibus_bus_code_list);
	var to_city_match = didYouMean(bus_deets['to_city'],abibus_bus_code_list);

	var from_city_code = '';
	var to_city_code = '';

	if(from_city_match && from_city_match.toLowerCase()==bus_deets['from_city'].toLowerCase()){
		from_city_code = abhi_bus_place_list[from_city_match];
	}

	if(to_city_match && to_city_match.toLowerCase()==bus_deets['to_city'].toLowerCase()){
		to_city_code = abhi_bus_place_list[to_city_match];
	}
	var bus_req_obj;
	if(from_city_code && to_city_code){
		 bus_req_obj ={
			sourceid : from_city_code,
			destinationid : to_city_code,
			jdate: date_in_abhibus_form(bus_deets['doj']),
			prd:"mobile",
			source:from_city_match,
			destination:to_city_match,
			filters:"1"
		}
		
	}else{
		console.log("not sending request for data fetch");
		console.log(from_city_match,to_city_match);
		console.log(from_city_code,to_city_code);
		return;
	}

	var abhi_bus_req = backPostGet({
		type:"post",
		data:bus_req_obj,
		url: "https://www.abhibus.com/app/GetBusList"
	});

	console.log("abhius get data");
	
	bus_site_links['abhibus'] = "https://www.abhibus.com/bus_search/"+from_city_match+"/"+from_city_code+"/"+to_city_match+"/"+to_city_code+"/"+date_in_abhibus_form(bus_deets['doj'],'site_form')+"/O/#"
	
	abhi_bus_req.done(function(response){
		if(response.status!="Success"){
			return;
		}
		var abhi_bus_list_data_formatted =[];
		var bus_data_list = response.serviceDetailsList;
		for(var i=0; i< bus_data_list.length;i++){
			var start_time, end_time, fare, bus_type, operator_name;

			start_time = new Date(bus_data_list[i].startTimeDateFormat).getTime();
			end_time = start_time+(parseInt((bus_data_list[i].travelTime.split(":")[0])) * 60 *60 *1000)+(parseInt((bus_data_list[i].travelTime.split(":")[1]))*60 *1000);
			fare = bus_data_list[i].offer_price;
			if(!fare){
				fare = (bus_data_list[i].fare).replace(",","");
			}
			bus_type = bus_data_list[i].busTypeName;
			operator_name = bus_data_list[i].travelerAgentName;
			abhi_bus_list_data_formatted.push({start_time :start_time,end_time:end_time,fare:fare,bus_type:bus_type,operator_name:operator_name})
		}
		console.log("abhibus data formated");
		console.log(abhi_bus_list_data_formatted);
		display_bus_data(abhi_bus_list_data_formatted,'AbhiBus');
	});

}


function goibibo_time_to_standard_format(tdate,ttime){
	return new Date( tdate.split('-')[0], parseInt(tdate.split('-')[1])-1, tdate.split('-')[2], ttime.split(":")[0],ttime.split(":")[1],0).getTime();
}

function date_in_goibibo_format(time_in_ms){
	var tdate = new Date(time_in_ms);
	// return  ""+tdate.getDate()+"-"+monthNames[parseInt(tdate.getMonth())]+"-"+tdate.getFullYear();
	return ''+tdate.getFullYear()+('0'+(parseInt(tdate.getMonth())+1)).slice(-2)+('0'+tdate.getDate()).slice(-2);
}


function get_goibibo_bus_data(){

	var from_city_code = "";
	var to_city_code = "";
	var doj = date_in_goibibo_format(bus_deets.doj);
	var from_city_n = "";
	var to_city_n = "";


	function get_from_city_code(){

		var req_obj = {
			"limit":10,
			"search_query":bus_deets.from_city
		}

		var from_city_req_url= "https://voyager.goibibo.com/api/v1/bus_node_search/find_node_by_name/?params="+JSON.stringify(req_obj);
		var from_city_req_obj = {
	    "type":"GET",
	    "url":from_city_req_url,
	    };

	    var from_city_req = backPostGet(from_city_req_obj);

	    from_city_req.done(function(from_city_code_req_response){
	    	if(from_city_code_req_response.data.r.length>0){
	    		//city code available
	    		from_city_code = from_city_code_req_response.data.r[0]._id
	    		from_city_n = from_city_code_req_response.data.r[0].n;
	    		//sending request for to city code
	    		console.log("success got from city code");
	    		console.log(from_city_code);
	    		console.log(from_city_n);
	    		get_to_city_code(); 

	    	}
	    
	    });

	}



	function get_to_city_code(){

		var req_obj = {
			"limit":10,
			"search_query":bus_deets.to_city
		}

		var to_city_req_url= "https://voyager.goibibo.com/api/v1/bus_node_search/find_node_by_name/?params="+JSON.stringify(req_obj);
		var to_city_req_obj = {
	    "type":"GET",
	    "url":to_city_req_url,
	    };

	    var to_city_req = backPostGet(to_city_req_obj);
	    to_city_req.done(function(to_city_code_req_response){
	    	if(to_city_code_req_response.data.r.length>0){
	    		//city code available
	    		to_city_code = to_city_code_req_response.data.r[0]._id;
	    		to_city_n = to_city_code_req_response.data.r[0].n
	    		//sending request for to city code
	    		console.log("success got to city code");
	    		console.log(to_city_code);
	    		console.log(to_city_n);

	    		console.log(doj);

	    		bus_site_links["goibibo"] = "https://www.goibibo.com/bus/#bus-"+from_city_n+'-'+to_city_n+'-'+doj+'---0-0-'+from_city_code+'-'+to_city_code;
	    		get_all_bus_data();
	    	}
	    
	    });
	}


   	function map_list_to_page_list(bus_list){

		for(var i =0; i< page_bus_deets.length; i++){
			var current_bus = page_bus_deets[i];
			for(var j=0; j<bus_list.length; j++){
				if((current_bus.start_time == bus_list[j].start_time) && (current_bus.end_time == bus_list[j].end_time) && check_for_busname_match(current_bus.operator_name,bus_list[j].operator_name)){
					page_bus_deets[i]['gb_bus_fare'] = bus_list[j].fare;
				}
			}
		}

		for(var i=0; i<page_bus_deets.length;i++){
			if(!page_bus_deets[i].hasOwnProperty('gb_bus_fare')){
				page_bus_deets[i]['gb_bus_fare'] = '';
			}
		}
	}



   	function get_all_bus_data(){
   		// 'https://www.goibibo.com/bus/getsearch/?application=bus&actionId=BusFareSearchRequest&transaction_required=123&cache=false&qtype=bus&query=bus-tiruchirappalli-bangalore-20170218--1-0-0--7549748421679676377-6771549831164675055'

		var all_bus_data_req = "https://www.goibibo.com/bus/getsearch/?versioncode=42&application=bus&actionId=BusFareSearchRequest&transaction_required=123&cache=false&qtype=bus&query=bus-"+from_city_n+'-'+to_city_n+'-'+doj+'--1-0-0--'+from_city_code+'-'+to_city_code+'&flavour=android';
		var all_bus_data_req_obj = {
	    "type":"GET",
	    "url":all_bus_data_req,
	    };

	    var all_bus_data_req = backPostGet(all_bus_data_req_obj);

	    all_bus_data_req.done(function(all_bus_data_req_response){

	    	//proccess data
	    	var all_bus_data = [];
	    	// console.log(all_bus_data_req_response);
	    	var bus_list = all_bus_data_req_response;

	    	for(var i=0; i<bus_list.length;i++){
	    		var start_time, end_time, fare, bus_type, operator_name;

	    		start_time = goibibo_time_to_standard_format(bus_list[i].fl[0].dd,bus_list[i].fl[0].dt);
	    		end_time = goibibo_time_to_standard_format(bus_list[i].fl[0].ad,bus_list[i].fl[0].at);
	    		fare = bus_list[i].fd.tf;
	    		bus_type = bus_list[i].fl[0].bt;
	    		operator_name = bus_list[i].fl[0].cr

	    		all_bus_data.push({start_time :start_time,end_time:end_time,fare:parseInt(fare),bus_type:bus_type,operator_name:operator_name});

	    	}

	    	// console.log(all_bus_data);

	    	// map_list_to_page_list(all_bus_data);

	    	// console.log('done mapping for gb');
	    	console.log('called display bus data for goibibo');
	    	display_bus_data(all_bus_data,'Goibibo');

	    });

   	}

   	get_from_city_code();
}



var ab_bus_list = [];
var rb_bus_list = [];

function insert_deets_to_abhibus(buses_deets){

	// var start_time_css = $(".mainsection div.travele:eq("+i+") div.col1 h2:eq(0) span[srttmfl]").attr("srttmfl");
	// var end_time_css = $(".mainsection div.travele:eq("+i+") div.col1 h2:eq(0) span[arvtmfl]").attr("arvtmfl")
	// var fare = $(".mainsection div.travele:eq("+i+") .TickRate").attr("tickrate");
	// var operator_name = $(".mainsection div.travele:eq(0) .TravelAgntNm").attr("title");
	// var bus_type = $(".mainsection div.travele:eq("+i+") .BsTyp").attr("title")

	// function abhibus_disp_time_to_standard(ab_time){
	// 	var monthNames = [ "january", "february", "march", "april", "may", "june","july", "august", "september", "october", "november", "december" ];

	// 	var jdate = $(".displaydate").text();
	// 	if((ab_time.split(" ")[1]=="PM") && parseInt(ab_time.split(" ")[0].split(":")[0]) !=12 ){
	// 		//add 12 to hours
	// 		return new Date(jdate.split(" ")[2],monthNames.indexOf(jdate.split(" ")[1].slice(0,-1).toLowerCase()),jdate.split(" ")[0],parseInt(ab_time.split(" ")[0].split(":")[0])+12,parseInt(ab_time.split(" ")[0].split(":")[1])).getTime();
	// 	}
	// 	else{
	// 		return new Date(jdate.split(" ")[2],monthNames.indexOf(jdate.split(" ")[1].slice(0,-1).toLowerCase()),jdate.split(" ")[0],parseInt(ab_time.split(" ")[0].split(":")[0]),parseInt(ab_time.split(" ")[0].split(":")[1])).getTime();
	// 	}
	// }

	function get_abhi_bus_times_in_standard_form(element){

		var monthNames = [ "january", "february", "march", "april", "may", "june","july", "august", "september", "october", "november", "december" ];
		var jdate = $(".displaydate").text();

		var ab_time = $(".mainsection div.travele:eq("+element+") div.col1 h2:eq(0) span[srttmfl]").text();

		var start_time;

		if((ab_time.split(" ")[1]=="PM") && parseInt(ab_time.split(" ")[0].split(":")[0]) !=12 ){
			//add 12 to hours
			start_time = new Date(jdate.split(" ")[2],monthNames.indexOf(jdate.split(" ")[1].slice(0,-1).toLowerCase()),jdate.split(" ")[0],parseInt(ab_time.split(" ")[0].split(":")[0])+12,parseInt(ab_time.split(" ")[0].split(":")[1]));
		}
		else{
			start_time = new Date(jdate.split(" ")[2],monthNames.indexOf(jdate.split(" ")[1].slice(0,-1).toLowerCase()),jdate.split(" ")[0],parseInt(ab_time.split(" ")[0].split(":")[0]),parseInt(ab_time.split(" ")[0].split(":")[1]));

		}

		var journey_time = $(".mainsection div.travele:eq("+element+") div.col1 p").text().split(" ")[0];
		console.log(start_time);
		var end_time = new Date(start_time.getTime());
		end_time.setHours(end_time.getHours()+parseInt(journey_time.split(":")[0]));
		end_time.setMinutes(end_time.getMinutes()+parseInt(journey_time.split(":")[1]));

		return {"start_time":start_time.getTime(),"end_time":end_time.getTime()};


	}


	for(var i =0; i<$(".mainsection div.travele").length;i++){

		// var start_time = abhibus_disp_time_to_standard($(".mainsection div.travele:eq("+i+") div.col1 h2:eq(0) span[srttmfl]").text());
		// var end_time = abhibus_disp_time_to_standard($(".mainsection div.travele:eq("+i+") div.col1 h2:eq(0) span[arvtmfl]").text());

		var temp_time_obj = get_abhi_bus_times_in_standard_form(i);

		var start_time = temp_time_obj.start_time;
		var end_time = temp_time_obj.end_time;

		var fare = $(".mainsection div.travele:eq("+i+") .TickRate").attr("tickrate");
		var operator_name = $(".mainsection div.travele:eq("+i+") .TravelAgntNm").attr("title");
		var bus_type = $(".mainsection div.travele:eq("+i+") .BsTyp").attr("title")
		var bus_matches = [{start_time :start_time,end_time:end_time,fare:fare,bus_type:bus_type,operator_name:operator_name}];
		ab_bus_list.push({start_time :start_time,end_time:end_time,fare:fare,bus_type:bus_type,operator_name:operator_name});
		bus_matches = find_matching_busess({start_time :start_time,end_time:end_time,fare:fare,bus_type:bus_type,operator_name:operator_name}, buses_deets);
		//insert details on the tag
		insert_bus_deets_to_abhi_bus(i,bus_matches);

	}
	rb_bus_list = buses_deets;

	function insert_bus_deets_to_abhi_bus(element,bus_matches){
		var div_body="";
		for(var i=0; i<bus_matches.length;i++){
			div_body += "<div> <span>"+ bus_matches[i].operator_name+"</span> <span>"+bus_matches[i].fare +"</span></div>";
		}
		var div_to_insert = "<div class=\"dropdown\">\
							  <span>▼</span>\
							  <div class=\"dropdown-content\">"+
							  div_body
							  +"</div>\
							</div>";
		$('div.travele:eq('+element+') div.col3').append(div_to_insert);

	}


}


function extract_bus_list_from_abhibus_page(){
	var ab_bus_list = [];
	function get_abhi_bus_times_in_standard_form(element){

		var monthNames = [ "january", "february", "march", "april", "may", "june","july", "august", "september", "october", "november", "december" ];
		var jdate = $(".displaydate").text();

		var ab_time = $(".mainsection div.travele:eq("+element+") div.col1 h2:eq(0) span[srttmfl]").text();

		var start_time;

		if((ab_time.split(" ")[1]=="PM") && parseInt(ab_time.split(" ")[0].split(":")[0]) !=12 ){
			//add 12 to hours
			start_time = new Date(jdate.split(" ")[2],monthNames.indexOf(jdate.split(" ")[1].slice(0,-1).toLowerCase()),jdate.split(" ")[0],parseInt(ab_time.split(" ")[0].split(":")[0])+12,parseInt(ab_time.split(" ")[0].split(":")[1]));
		}
		else{
			start_time = new Date(jdate.split(" ")[2],monthNames.indexOf(jdate.split(" ")[1].slice(0,-1).toLowerCase()),jdate.split(" ")[0],parseInt(ab_time.split(" ")[0].split(":")[0]),parseInt(ab_time.split(" ")[0].split(":")[1]));

		}

		var journey_time = $(".mainsection div.travele:eq("+element+") div.col1 p").text().split(" ")[0];
		console.log(start_time);
		var end_time = new Date(start_time.getTime());
		end_time.setHours(end_time.getHours()+parseInt(journey_time.split(":")[0]));
		end_time.setMinutes(end_time.getMinutes()+parseInt(journey_time.split(":")[1]));

		return {"start_time":start_time.getTime(),"end_time":end_time.getTime()};


	}


	for(var i =0; i<$(".mainsection div.travele").length;i++){

		// var start_time = abhibus_disp_time_to_standard($(".mainsection div.travele:eq("+i+") div.col1 h2:eq(0) span[srttmfl]").text());
		// var end_time = abhibus_disp_time_to_standard($(".mainsection div.travele:eq("+i+") div.col1 h2:eq(0) span[arvtmfl]").text());

		var temp_time_obj = get_abhi_bus_times_in_standard_form(i);

		var start_time = temp_time_obj.start_time;
		var end_time = temp_time_obj.end_time;

		var fare = $(".mainsection div.travele:eq("+i+") .TickRate").attr("tickrate");
		var operator_name = $(".mainsection div.travele:eq("+i+") .TravelAgntNm").attr("title");
		var bus_type = $(".mainsection div.travele:eq("+i+") .BsTyp").attr("title")
		// var bus_matches = [{start_time :start_time,end_time:end_time,fare:fare,bus_type:bus_type,operator_name:operator_name}];
		ab_bus_list.push({start_time :start_time,end_time:end_time,fare:fare,bus_type:bus_type,operator_name:operator_name});

	}

	page_bus_deets = JSON.parse(JSON.stringify(ab_bus_list));
}


function find_matching_busess(current_bus, bus_list){
	var bus_matches = [];
	for(var i = 0; i<bus_list.length; i++){
		if((current_bus.start_time == bus_list[i].start_time) && (current_bus.end_time == bus_list[i].end_time) && check_for_busname_match(current_bus.operator_name,bus_list[i].operator_name) ){
		// 	console.log(new Date(bus_list[i].start_time));
		// 	console.log(new Date(bus_list[i].end_time));
		// 	console.log("%c"+bus_list[i].operator_name+" "+"%c"+current_bus.operator_name,"color:green","color:blue");
			bus_matches.push(bus_list[i]);
		}
		else{
			 // console.log((new Date(bus_list[i].start_time)) + "does not match"+ (new Date(current_bus.start_time)));
			 // if((current_bus.start_time != bus_list[i].start_time)) {
			 // 	console.log(current_bus.operator_name+" does not match "+bus_list[i].operator_name+" because of start time");	
			 // }
			 
			 // if((current_bus.end_time != bus_list[i].end_time)){
			 // 	console.log(current_bus.operator_name+" does not match "+bus_list[i].operator_name+" because of end time");	
			 // }

			 // if(!check_for_busname_match(current_bus.operator_name,bus_list[i].operator_name)){
			 // 	console.log(current_bus.operator_name+" does not match "+bus_list[i].operator_name+" because of name");		
			 // }

		}

	}
	return bus_matches;
}



function check_for_busname_match(bus1, bus2){

	var bus1_str = process_string_comaprisison(bus1);
	var bus2_str = process_string_comaprisison(bus2);

	if(bus1_str == bus2_str){
		return true;
	}
	else{
		return false;
	}

	function remove_common_words(s){
		var words = ['travels', 'travel', 'transports', 'trasport','tours','tour','holidays','holiday','and'];
		var re = new RegExp('\\b(' + words.join('|') + ')\\b', 'g');
		return (s || '').replace(re, '').replace(/[ ]{2,}/, '');		
	}

	function process_string_comaprisison(str){
		var temp;
		temp = str.replace(/ *\([^)]*\) */g, "");
	    temp = temp.replace(/[^a-zA-Z ]/g, "");
	    temp = temp.replace(/\s\s+/g, ' ');
	    temp = temp.toLowerCase();
	    temp = remove_common_words(temp);
	    // console.log("after common words removal");
	    // console.log(temp);
	    return temp.replace(/^[ ]+|[ ]+$/g,'');
	}

}

var bus_data_displayed =[];

function display_bus_data(deets,site){

	if($("#mc_main_host").css("display")=="none"){
		$("#mc_main_host").css("display","block");

		if(!bus_analytics_flags.result_displayed){
			bus_analytics_flags.result_displayed = true;
			chrome.runtime.sendMessage({
				"method":"send_event",
				"eventCategory":"bus_result_displayed",
				"eventAction": prod_deets.prod_site,
				"eventLabel": "",
				"eventValue": ""
			});
		}

	}
	
	if(bus_data_displayed.length>0){
		console.log("calling with bus_diaplayed_data");
		bus_data_displayed = map_list_to_page_list(bus_data_displayed,deets,site);
	}else{
		console.log("calling with bus_deets");
		bus_data_displayed = map_list_to_page_list(page_bus_deets,deets,site);
	}
	var popup_table ='<div id="mc_bus_popup_container" style="display:block; width:100%; position:fixed; top:20%; box-sizing:content-box; z-index:99999; text-align:start; font-family:Lato;">\
					<div id="mc_bus_popup" style="margin:auto; box-sizing:content-box; border-width: 1px; border-bottom: 4px solid #9ed763; padding:20px; padding-left:5px; padding-right:5px; border-radius: 5px; width:900px; max-height:500px; box-shadow: 0px 0px 38px 2px; background: #fff url('+housefly+') no-repeat right 5px bottom 5px; background-size: 25px; box-sizing:content-box; overflow-x:scroll; overflow-y:scroll;">\
						<div class ="mc_bus_popup_close_box" style=" box-sizing:content-box; height: 16px; width: 16px;cursor: pointer;background:url('+closebox+');position:relative; top:-5px; left:880px;" title="Close"></div>\
					<div>\
					<div id="mc_bus_result_content" style="font-size:14px;">Sort by:<span class="mc_fare_sort norm_order" style="margin:10px;background-color:#e0e0e0;border-radius: 10%;padding: 5px;cursor: pointer;">Cheapest Fare</span> <span class="mc_start_time norm_order" style="margin:10px;background-color:#e0e0e0;border-radius: 10%;padding: 5px;cursor:pointer;">Start Time</span> <span class="mc_end_time norm_order" style="margin:10px; background-color:#e0e0e0;border-radius: 10%;padding: 5px;cursor: pointer;">End Time</span> </div>\
					<div style="margin-top:10px; font-size:14px;">Filter by:<span class="operattor_filter"></span> <span id="clear_all_fliters" style="background-color:#e0e0e0;border-radius: 10%; padding:3px; position:relative; top:3px; cursor:pointer;" > Clear all filters</span>  <div  id="search_box_holder" style="display:inline-block; position:relative; left:320px;"> </div>\
					<div style="margin-top:10px; font-size:14px;"> <span>Journey Starting Between</span> <input type="text" class="dt_picker" id="time_filter_jstart_1" style="max-width:100px;"/> <span>And</span> <input class="dt_picker" type="text" id="time_filter_jstart_2" style="max-width:100px;"/> <span>  &#160; Journey ending Between</span> <input class="dt_picker" type="text" id="time_filter_jend_1" style="max-width:100px;"/> <span>And</span> <input class="dt_picker" type="text" id="time_filter_jend_2" style="max-width:100px;"/> <span id="apply_time_fliters" style="background-color:#e0e0e0;border-radius: 10%; padding:3px; cursor:pointer;" >Apply </span> </div>\
					<br>\
					<div id="mc_popup_bus_table" style="font-size:14px;">\
					</div>\
	</div>'

	if($(result_view).find("#mc_bus_popup_container").length>0){
		$(result_view).find("#mc_bus_popup_container").remove();
		$(result_view).append(popup_table);
		add_filters();
	}else{
		// $("head").append(table_css);
		$(result_view).append(popup_table);
		add_filters();

		$(result_view).on("click","#mc_popup_bus_table a.more_fares",function(){
			console.log("more fare click");
			if(!bus_analytics_flags.more_fare_click){
				bus_analytics_flags.more_fare_click = true;
				chrome.runtime.sendMessage({
					"method":"send_event",
					"eventCategory":"more_fare_click",
					"eventAction": prod_deets.prod_site,
					"eventLabel": "",
					"eventValue": ""
				});
			}
			
			// $(this).parent().parent().parent().find(".other_fare_list").toggle();
			// console.log($(this).parent().parent().parent().find(".other_fare_list").css("display"));
			if($(this).parent().parent().parent().find(".other_fare_list").css("display")=="block"){
				$(this).parent().parent().parent().find(".other_fare_list").css("display","none");
			}else{
				$(this).parent().parent().parent().find(".other_fare_list").css("display","block");
			}

			if($(this).parent().parent().parent().find(".other_fare_list").css("display")=="none"){
				$(this).text("+ More Fares");
			}else{
				$(this).text("- More Fares");
			}
		})
	}

	$("body").find(".xdsoft_datetimepicker").remove();
	$(result_view).find(".dt_picker").datetimepicker({

		// allowDates :get_allowed_dates(),
		// allowDates:['17.6.2017','18.6.2017'],
		// formatDate:'Y/m/d',
		minDate:get_min_date(),
		maxDate:get_max_date(),
		defaultDate:get_min_date(),
		onShow:function(time,input){
			var el_id = $(input).attr("id");
			var pos = result_view.querySelector("input#"+el_id).getBoundingClientRect();
			console.log(el_id)
			console.log(pos);
			if(el_id == "time_filter_jstart_1"){
				$("body").find(".xdsoft_datetimepicker:eq(0)").css({
					top:pos.top,
					left:pos.left,
					position:"fixed"
				})
			}
			if(el_id == "time_filter_jstart_2"){
				console.log("setting css");
				console.log(pos.top,pos.left)
				$("body").find(".xdsoft_datetimepicker:eq(1)").css({
					top:pos.top,
					left:pos.left,
					position:"fixed"
				});
			}
			if(el_id == "time_filter_jend_1"){
				$("body").find(".xdsoft_datetimepicker:eq(2)").css({
					top:pos.top,
					left:pos.left,
					position:"fixed"
				})
			}
			if(el_id == "time_filter_jend_2"){
				$("body").find(".xdsoft_datetimepicker:eq(3)").css({
					top:pos.top,
					left:pos.left,
					position:"fixed"
				})
			}

		}
	});


	$(result_view).find(".mc_bus_popup_close_box").off('click');
	$(result_view).find('.mc_bus_popup_close_box').on('click',function(){
		//hide disp
		// $(result_view).find("#mc_bus_popup_container").css("display","none");
		bus_hide_results_display_preview_min();
	});

	$(result_view).off("click",".book_button")
	$(result_view).on("click",".book_button",function(){
		// console.log("clicked on book button");
		// console.log($(this).attr('data-site'),' clicked');
		if(!bus_analytics_flags.visit_site_click){
			bus_analytics_flags.visit_site_click = true;
			chrome.runtime.sendMessage({
				"method":"send_event",
				"eventCategory":"visit_site_click",
				"eventAction": prod_deets.prod_site,
				"eventLabel": "",
				"eventValue": ""
			});
		}
		open_bus_link($(this).attr('data-site'));
	});	
	
	$(result_view).find("#mc_popup_bus_table").bind('dynatable:init',function(e, dynatable){

		 dynatable.sorts.functions["fare_sort"] = fare_sort;
		 dynatable.sorts.functions["start_time_sort"] = start_time_sort;
		 dynatable.sorts.functions["end_time_sort"] = end_time_sort;
		 dynatable.queries.functions['operator_query'] = operator_filter;
		 dynatable.queries.functions['start_time_query'] = start_time_filter;
		 dynatable.queries.functions['end_time_query'] = end_time_filter;

		 dynatable.sorts.add('fare_sort', 1);



	 	$(result_view).find("#mc_bus_popup").click(function(){
			console.log("container click");
			bus_result_box_click="bus_result_box_click";
		});

		$(result_view).find("#mc_bus_popup #apply_time_fliters").click(function(){

			if(!bus_analytics_flags.time_filter_click){
				bus_analytics_flags.time_filter_click = true;
				chrome.runtime.sendMessage({
					"method":"send_event",
					"eventCategory":"time_filter_click",
					"eventAction": prod_deets.prod_site,
					"eventLabel": "",
					"eventValue": ""
				});
			}			

			console.log("clear time filter click");
			 var jst_1 = $(result_view).find(".dt_picker:eq(0)").val() ? $(result_view).find(".dt_picker:eq(0)").datetimepicker('getValue').getTime() : "";
			 var jst_2 = $(result_view).find(".dt_picker:eq(1)").val() ? $(result_view).find(".dt_picker:eq(1)").datetimepicker('getValue').getTime() : "";
			 var jet_1 = $(result_view).find(".dt_picker:eq(2)").val() ? $(result_view).find(".dt_picker:eq(2)").datetimepicker('getValue').getTime() : "";
			 var jet_2 = $(result_view).find(".dt_picker:eq(3)").val() ? $(result_view).find(".dt_picker:eq(3)").datetimepicker('getValue').getTime() : "";
			
			 console.log(jst_1,jst_2,jet_1,jet_2);

			 if(jst_1 || jst_2  ){
				 dynatable.queries.add("start_time_query",{t1:jst_1,t2:jst_2});
				 dynatable.process();
			 }

			 if(jet_1 || jet_2){
			 	dynatable.queries.add("end_time_query",{t1:jet_1,t2:jet_2});
			 	dynatable.process();
			 }

		});


		$(result_view).find("#mc_bus_popup #clear_all_fliters").click(function(){
			console.log("clear all filter click");
			if(!bus_analytics_flags.clear_filter_click){
				bus_analytics_flags.clear_filter_click = true;
				chrome.runtime.sendMessage({
					"method":"send_event",
					"eventCategory":"clear_filter_click",
					"eventAction": prod_deets.prod_site,
					"eventLabel": "",
					"eventValue": ""
				});
			}
			$(result_view).find("#mc_bus_popup .operator_filter").val("Operator Name");
			$(result_view).find(".dt_picker").val("");
			dynatable.queries.runSearch("");
			dynatable.queries.remove("operator_query");
			dynatable.queries.remove("start_time_query");
			dynatable.queries.remove("end_time_query");
			dynatable.process();
		});


		$(result_view).find("#mc_bus_popup .operator_filter").change(function(){
			var value = $(this).val();
			if(!bus_analytics_flags.orperator_filter_click){
				bus_analytics_flags.orperator_filter_click = true;
				chrome.runtime.sendMessage({
					"method":"send_event",
					"eventCategory":"orperator_filter_click",
					"eventAction": prod_deets.prod_site,
					"eventLabel": "",
					"eventValue": ""
				});
			}
			console.log("select value",value);
			if(value=="Operator Name"){
				 dynatable.queries.remove("operator_query");
			}else{
				 dynatable.queries.add("operator_query",value);
			}
			dynatable.process();
		});		

		$(result_view).find("#mc_bus_popup .mc_fare_sort").click(function(e){
			console.log('click detected');
			dynatable.sorts.clear();
			if(!bus_analytics_flags.fare_sort_click){
				bus_analytics_flags.fare_sort_click = true;
				chrome.runtime.sendMessage({
					"method":"send_event",
					"eventCategory":"fare_sort_clicked",
					"eventAction": prod_deets.prod_site,
					"eventLabel": "",
					"eventValue": ""
				});
			}
			// dynatable.sorts.add('fare_sort', 1); 
			if($(this).hasClass("norm_order") || $(this).hasClass("asc_order")){
				if($(this).hasClass("norm_order")){
					$(this).removeClass("norm_order");
				}else{
					$(this).removeClass("asc_order");
				}
					$(this).addClass("desc_order");

					if($(this).find(".sort_direction").length>0){
						$(result_view).find(".sort_direction").remove();
					}
					if($(result_view).find(".sort_direction").length>0){
						$(result_view).find(".sort_direction").parent().removeClass('asc_order');
						$(result_view).find(".sort_direction").parent().removeClass('desc_order');
						$(result_view).find(".sort_direction").parent().addClass('norm_order');
						$(result_view).find(".sort_direction").remove();
					}
					$(this).append("<span class='sort_direction'> &#9660; </span>")
					dynatable.sorts.add('fare_sort', -1); 
			}else{
				$(this).removeClass("desc_order");
				$(this).addClass("asc_order");
				if($(this).find(".sort_direction").length>0){
					$(result_view).find(".sort_direction").remove();
				}
				if($(result_view).find(".sort_direction").length>0){
					$(result_view).find(".sort_direction").parent().removeClass('asc_order');
					$(result_view).find(".sort_direction").parent().removeClass('desc_order');
					$(result_view).find(".sort_direction").parent().addClass('norm_order');
					$(result_view).find(".sort_direction").remove();
				}

				$(this).append("<span class='sort_direction'> &#9650; </span>")
				dynatable.sorts.add('fare_sort', 1); 
			}
			dynatable.process();
			e.preventDefault();
		});


		$(result_view).find("#mc_bus_popup .mc_start_time").click(function(e){
			console.log('click detected');
			dynatable.sorts.clear();
			if(!bus_analytics_flags.start_time_sort_click){
				bus_analytics_flags.start_time_sort_click = true;
				chrome.runtime.sendMessage({
					"method":"send_event",
					"eventCategory":"start_time_sort_click",
					"eventAction": prod_deets.prod_site,
					"eventLabel": "",
					"eventValue": ""
				});
			}			
			// dynatable.sorts.add('start_time', 1); 
			if($(this).hasClass("norm_order") || $(this).hasClass("asc_order")){
				if($(this).hasClass("norm_order")){
					$(this).removeClass("norm_order");
				}else{
					$(this).removeClass("asc_order");
				}
					$(this).addClass("desc_order");

					if($(this).find(".sort_direction").length>0){
						$(result_view).find(".sort_direction").remove();
					}
					if($(result_view).find(".sort_direction").length>0){
						$(result_view).find(".sort_direction").parent().removeClass('asc_order');
						$(result_view).find(".sort_direction").parent().removeClass('desc_order');
						$(result_view).find(".sort_direction").parent().addClass('norm_order');
						$(result_view).find(".sort_direction").remove();
					}
					$(this).append("<span class='sort_direction'> &#9660; </span>")
					dynatable.sorts.add('start_time', -1); 
			}else{
				$(this).removeClass("desc_order");
				$(this).addClass("asc_order");
				if($(this).find(".sort_direction").length>0){
					$(result_view).find(".sort_direction").remove();
				}
				if($(".sort_direction").length>0){
					$(result_view).find(".sort_direction").parent().removeClass('asc_order');
					$(result_view).find(".sort_direction").parent().removeClass('desc_order');
					$(result_view).find(".sort_direction").parent().addClass('norm_order');
					$(result_view).find(".sort_direction").remove();
				}

				$(this).append("<span class='sort_direction'> &#9650; </span>")
				dynatable.sorts.add('start_time', 1); 
			}			
			dynatable.process();
			e.preventDefault();
		});

		$(result_view).find("#mc_bus_popup .mc_end_time").click(function(e){
			console.log('click detected');
			dynatable.sorts.clear();
			if(!bus_analytics_flags.end_time_sort_click){
				bus_analytics_flags.end_time_sort_click = true;
				chrome.runtime.sendMessage({
					"method":"send_event",
					"eventCategory":"end_time_sort_click",
					"eventAction": prod_deets.prod_site,
					"eventLabel": "",
					"eventValue": ""
				});
			}			
			// dynatable.sorts.add('end_time', 1); 
			if($(this).hasClass("norm_order") || $(this).hasClass("asc_order")){
				if($(this).hasClass("norm_order")){
					$(this).removeClass("norm_order");
				}else{
					$(this).removeClass("asc_order");
				}
					$(this).addClass("desc_order");

					if($(this).find(".sort_direction").length>0){
						$(result_view).find(".sort_direction").remove();
					}
					if($(result_view).find(".sort_direction").length>0){
						$(result_view).find(".sort_direction").parent().removeClass('asc_order');
						$(result_view).find(".sort_direction").parent().removeClass('desc_order');
						$(result_view).find(".sort_direction").parent().addClass('norm_order');
						$(result_view).find(".sort_direction").remove();
					}
					$(this).append("<span class='sort_direction'> &#9660; </span>")
					dynatable.sorts.add('end_time', -1); 
			}else{
				$(this).removeClass("desc_order");
				$(this).addClass("asc_order");
				if($(this).find(".sort_direction").length>0){
					$(result_view).find(".sort_direction").remove();
				}
				if($(".sort_direction").length>0){
					$(result_view).find(".sort_direction").parent().removeClass('asc_order');
					$(result_view).find(".sort_direction").parent().removeClass('desc_order');
					$(result_view).find(".sort_direction").parent().addClass('norm_order');
					$(result_view).find(".sort_direction").remove();
				}

				$(this).append("<span class='sort_direction'> &#9650; </span>")
				dynatable.sorts.add('end_time', 1); 
			}				
			dynatable.process();
			e.preventDefault();
		});

		

	}).dynatable({
		dataset:{records:bus_data_displayed,
			sortTypes:{
				'fare_sort':'fare_sort',
				'start_time':'start_time_sort',
				'end_time':'end_time_sort',
			},
			'totalRecordCount':bus_data_displayed.length
		},
		features:{
			pushState:false,
			paginate:false,
			recordCount: false
		},
		writers:{_rowWriter:make_fare_view},
		table: {
		    bodyRowSelector: 'div.result_container'
		 },
		 inputs:{
		 	searchTarget:$(result_view).find("#search_box_holder")
		 }
	});

	$("#mc_bus_popup_container").css("display","block");

}

function make_fare_view(rowIndex, record, columns, cellWriter){

	var low_fare_deets = make_price_list(record)
	


	var div="";
	div += "<div class=\"result_container\" style=\"width:900px; margin-bottom:10px;\">";
	div += "	<div class=\"min_data\">";
	div += "		<div class=\"operator_and_type_container\" style=\"width:25%; display:inline-block;  box-sizing:border-box;\">";
	div += "			<div class =\"operator\" style=\"max-width:90%; font-weight:600; font-size:16px; white-space:nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing:border-box;\">";
	div += 						record.operator_name
	div += "			<\/div>";
	div += "			<div class =\"operator\" style=\"max-width:90%; font-weight:400; font-size:14px; white-space:nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing:border-box; color:#545454; padding-top:5px;\">";
	div +=  					record.bus_type
	div += "			<\/div>";
	div += "		<\/div>";
	div += "		<div class=\"j_time\" style=\"width:20%; display:inline-block; box-sizing:border-box;\">";
	div += "			<div class =\"start_time\" style=\"max-width:90%; font-weight:600; font-size:16px; white-space:nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing:border-box;\">";
	div += "				<span class=\"start_time\">"+get_date_string(record.start_time)+"<\/span> &rarr;<span class=\"end_time\">"+get_date_string(record.end_time)+"<\/span>";
	div += "			<\/div>";
	div += "			<div class =\"duration\" style=\"max-width:90%; font-weight:400; font-size:14px; white-space:nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing:border-box; color:#545454; padding-top:5px;\">";
	div += 					time_diff_in_hours(record.start_time,record.end_time)
	div += "			<\/div>";
	div += "		<\/div>	";
	// div += "		<div class=\"site_fare\" style=\"width:10%; display:inline-block; box-sizing:border-box;\">";
	// div += "			<div class =\"site_name\" style=\"max-width:90%; font-weight:600; font-size:16px; white-space:nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing:border-box;\">";
	// div += 				"Site Fare"	
	// div += "			<\/div>";
	// div += "			<div class =\"fare\" style=\"max-width:90%; font-weight:400; font-size:14px; white-space:nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing:border-box; color:#545454; padding-top:5px;\">";
	// div += 					record.fare;
	// div += "			<\/div>";
	// div += "		<\/div>	";
	div += "		<div class=\"site_fare\" style=\"display:inline-block; box-sizing:border-box; width:30%;\">";
	div += "			<div class =\"site_name\" style=\"max-width:100%; font-weight:600; font-size:16px; white-space:nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing:border-box;\">";
	div += "				Cheapest Fare";
	div += "			<\/div>";
	div += "			<div class =\"fare\" style=\"max-width:90%; font-weight:400; font-size:14px; white-space:nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing:border-box; color:#545454; padding-top:5px;\">";
	// div += 					low_fare_deets.lowest_other_site_fare.site+':'+ "<span style='color:"+price_color+"''>"+low_fare_deets.lowest_other_site_fare.fare+"</span> <span>(+"+low_fare_deets.lowest_other_site_fare.lowest_fares+" more)</span>" 
	div +=					low_fare_deets.lowest_other_site_fare.div
	div += "			<\/div>";
	div += "			<button class=\"book_button\" data-site=\""+low_fare_deets.lowest_other_site_fare.site.toLowerCase()+"\" style=\"color:black;background-color:white;cursor:pointer;padding:5px;border-radius:10%;border-width:2px;border-color:#8fc952;border-style:solid;box-shadow:3px 3px 1px rgba(0,0,0,0.3);\">Visit Site<\/button>"
	div += "		<\/div>	";
	div += "		<div style=\"text-align:right;\">";
	div += "			<a style=\"color:#545454; font-size:14px;\" class='more_fares' href=\"javascript:;\">+ More Fares<\/a>";
	div += "		<\/div>";
	div += "	<\/div>	";
	div += "	<div class=\"other_fare_list\" style=\"display:none;\">";
	div += 			low_fare_deets.div
	div += "	<\/div>	";
	div += "<hr>"
	div += "<\/div>";
	

	// console.log(div);

	return div;
}


function make_price_list(record){
	//making json array
	var fare_list = [];
	for(var key in record.fare_list){
		var temp ={};
		temp['site']= key;
		if(isNaN(parseInt(record.fare_list[key]))){
			temp['fare']= record.fare_list[key];	
		}else{
			temp['fare']= parseInt(record.fare_list[key]);	
		}
		
		fare_list.push(temp);
	}
	var temp ={};
	temp['fare'] = record.fare;
	temp['site'] = bus_site_list[prod_deets.prod_site];
	fare_list.push(temp);


	var sorted_fare_list = _.sortBy(fare_list,function(obj){
		if(obj.fare=="NA"){
			return Number.MAX_SAFE_INTEGER;
		}else{
			return obj.fare;
		}
	});


	var text_color

	var div = "";
	
	for(var i=0; i<sorted_fare_list.length;i++){
		if(sorted_fare_list[i].fare == 'NA'){
			 text_color = 'gray';
		}else{
			if(record.fare <= sorted_fare_list[i].fare){
				text_color = "#f73f52";
			}else{
				text_color = "#8fc952"	
			}
		}

		div += '<div class="mc_fare" style="display:block; margin-bottom:10px;">\
					<div class="mc_site_name" style="width:25%; display:inline-block; box-sizing:border-box;text-align: left;">\
						'+sorted_fare_list[i].site+'\
					</div>\
					<div class="mc_site_fare" style="width:25%; display:inline-block; box-sizing:border-box; text-align:left;font-weight:600; color:'+text_color+'">\
						'+sorted_fare_list[i].fare+'\
					</div>\
					<div class="mc_book_fare" style="width:10%; display:inline-block; box-sizing:border-box; text-align: left;">\
						<button data-site="'+sorted_fare_list[i].site.toLowerCase()+'" class="book_button" style="color:black;background-color:white;cursor:pointer;padding:5px;border-radius:10%;border-width:2px;border-color:#8fc952;border-style:solid;box-shadow:3px 3px 1px rgba(0,0,0,0.3);">Visit site</button>\
					</div>\
				</div>'
	}
	if($(mc_root).find("#preview_min_root #price").text()=="loading"){
		$(mc_root).find("#preview_min_root #price").text("₹"+sorted_fare_list[0].fare);
		 $(mc_root).find("#preview_min_root #price").css("color","#8fc952");
	}else{
		var current_lowest_price = parseInt($(mc_root).find("#preview_min_root #price").text().replace("₹",""));
		if(sorted_fare_list[0].fare<current_lowest_price){
			$(mc_root).find("#preview_min_root #price").text("₹"+sorted_fare_list[0].fare);
		}
	}
	
	var low_fare_deets = JSON.parse(JSON.stringify(sorted_fare_list[0]));
	var similar_lowest_fare_count =0;
	for(var i=1; i<sorted_fare_list.length;i++){
		if(sorted_fare_list[0].fare == sorted_fare_list[i].fare){
			similar_lowest_fare_count += 1;
		}else{
			break;
		}
	}
	low_fare_deets['lowest_fares'] = similar_lowest_fare_count;
	
	var low_fare_main_div ="";
	var price_color = "";
	if(sorted_fare_list[0].fare=="NA"){
		//color grey
		price_color = "gray";
	}else{
		if(record.fare<=sorted_fare_list[0].fare){
			//color red
			price_color = "#f73f52";
		}else{
			//color: green
			price_color = "#8fc952";
		}
	}

	if(similar_lowest_fare_count>0){
		low_fare_main_div= sorted_fare_list[0].site+':'+ "<span style='font-weight:600; color:"+price_color+"''>"+sorted_fare_list[0].fare+"</span> <span>(+"+similar_lowest_fare_count+" more)</span>" 
	}else{
		low_fare_main_div= sorted_fare_list[0].site+':'+ "<span style='font-weight:600; color:"+price_color+"''>"+sorted_fare_list[0].fare+"</span>" 
	}

	low_fare_deets['div']=low_fare_main_div;

	return {
		"lowest_other_site_fare":low_fare_deets ,
		"div":div
	}
} 

function fare_sort(a, b, attr, direction){

	// var comparison = parseInt(a.fare) - parseInt(b.fare);
	// return direction > 0 ? comparison : -comparison;

	var fare_list = [];
	var temp ={};
	var record = a;
	for(var key in record.fare_list){
		temp ={};
		temp['site']= key;
		if(isNaN(parseInt(record.fare_list[key]))){
			temp['fare']= record.fare_list[key];	
		}else{
			temp['fare']= parseInt(record.fare_list[key]);	
		}
		
		fare_list.push(temp);
	}
	temp ={};
	temp['fare'] = record.fare;
	temp['site'] = bus_site_list[prod_deets.prod_site];
	fare_list.push(temp);

	var sorted_fare_list_a = _.sortBy(fare_list,function(obj){
		if(obj.fare=="NA"){
			return Number.MAX_SAFE_INTEGER;
		}else{
			return obj.fare;
		}
	});

	fare_list = [];
	temp ={};
	record = b;
	for(var key in record.fare_list){
		temp ={};
		temp['site']= key;
		if(isNaN(parseInt(record.fare_list[key]))){
			temp['fare']= record.fare_list[key];	
		}else{
			temp['fare']= parseInt(record.fare_list[key]);	
		}
		
		fare_list.push(temp);
	}
	temp ={};
	temp['fare'] = record.fare;
	temp['site'] = bus_site_list[prod_deets.prod_site];
	fare_list.push(temp);
	var sorted_fare_list_b = _.sortBy(fare_list,function(obj){
		if(obj.fare=="NA"){
			return Number.MAX_SAFE_INTEGER;
		}else{
			return obj.fare;
		}
	});
	var comparison;

	if((sorted_fare_list_a[0].fare!="NA") && (sorted_fare_list_b[0].fare!="NA")){
		comparison = parseInt(sorted_fare_list_a[0].fare) - parseInt(sorted_fare_list_b[0].fare);

	}else{
		if(sorted_fare_list_a[0].fare!="NA"){
			comparison = -1;
		}else{
			comparison = 1;
		}
	}
	return direction > 0 ? comparison : -comparison;

}

function start_time_sort(a, b, attr, direction){
	var comparison = parseInt(a.start_time) - parseInt(b.start_time);
	return direction > 0 ? comparison : -comparison;
}

function end_time_sort(a, b, attr, direction){
	var comparison = parseInt(a.end_time) - parseInt(b.end_time);
	return direction > 0 ? comparison : -comparison;
}


function get_date_string(time_in_ms_format){
    var now= new Date(time_in_ms_format), 
    ampm= 'am', 
    h= now.getHours(), 
    m= now.getMinutes(), 
    s= now.getSeconds();
    // if(h>= 12){
    //     if(h>12) h -= 12;
    //     ampm= 'pm';
    // }

    if(m<10) m= '0'+m;
    if(s<10) s= '0'+s;
    // return now.toLocaleDateString()+ ' ' + h + ':' + m + ':' + s + ' ' + ampm;
     return h + ':' + m 
}


function time_diff_in_hours(start_time,end_time){
	var time_diff_ms  = end_time -start_time;
	var time_diff_in_mins = (time_diff_ms/(1000*60))

	var hours = parseInt(time_diff_in_mins/60)
	var mins = time_diff_in_mins%60

	return hours + 'H '+mins+'m'

}

function map_list_to_page_list(page_bus_deets,bus_list,site){
	var not_found_list = [];
	var matched_index = [];

	var page_bus_list = JSON.parse(JSON.stringify(page_bus_deets));

	for(var i =0; i< page_bus_list.length; i++){
		var current_bus = page_bus_list[i];
		for(var j=0; j<bus_list.length; j++){
			if((current_bus.start_time == bus_list[j].start_time) && (current_bus.end_time == bus_list[j].end_time) && check_for_busname_match(current_bus.operator_name,bus_list[j].operator_name)){
				// console.log(current_bus.operator_name + ' matches '+bus_list[j].operator_name);
				if(page_bus_list[i].hasOwnProperty('fare_list')){
					page_bus_list[i]['fare_list'][site] = bus_list[j].fare;
				}else{
					page_bus_list[i]['fare_list'] = {};
					page_bus_list[i]['fare_list'][site] = bus_list[j].fare;
				}	
			}

		}
	}

	for(var i=0; i<page_bus_list.length;i++){
		if(page_bus_list[i].hasOwnProperty('fare_list')){
			if(page_bus_list[i]['fare_list'].hasOwnProperty(site)){
				//do nothing data already there
			}else{
				page_bus_list[i]['fare_list'][site] = 'NA'
			}
		}else{
			page_bus_list[i]['fare_list'] = {};
			page_bus_list[i]['fare_list'][site] = 'NA';
		}
	}
	console.log("returning for site ",site);
	console.log(page_bus_list[0]);
	return page_bus_list;
}



function insert_bus_container(json_data){

	function load_bus_template(){
			var link = document.createElement('link');
			link.rel = 'import';
			link.href = chrome.extension.getURL('design_files/main_container.html');
			//link.setAttribute('async', ''); // make it async!
			link.onload = function(e) {
				var content = this.import
				console.log("main container import success")
				do_post_template_load_task(content);
				this.remove();
				console.log("removed main container import")
				// setevents();
				make_bus_preview_template(json_data);
				// insert_preview_box();
			}
			link.onerror = function(e) {

			};
			document.head.appendChild(link);
	}

	function do_post_template_load_task(main_temlpate_content){

		console.log("got content");
		console.log(main_temlpate_content);
		all_container_templates = main_temlpate_content.cloneNode(true);

		$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; top:30%; z-index:9999; display:none;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
		main_template = main_temlpate_content.querySelector('template#main_template_bus').content;

		var host =  document.getElementById('mc_host');

		main_template.querySelector("#fa_style").href = chrome.extension.getURL('design_files/css/font-awesome.min.css');
		main_template.querySelector("#main_css_style").href = chrome.extension.getURL('design_files/css/popup.css');
		main_template.querySelector("#lato_css").href = chrome.extension.getURL('design_files/fonts/lato/lato.css');

		main_template.querySelector(".main_css_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/popup.css')+"\"";
		main_template.querySelector(".fa_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/font-awesome.min.css')+"\"";
		main_template.querySelector(".lato_css").textContent = "@import \"" + chrome.extension.getURL('design_files/fonts/lato/lato.css')+"\"";


		var fa = document.createElement('style');
	    fa.type = 'text/css';
	    fa.textContent = '@font-face { font-family: FontAwesome; src: url("'
	        + chrome.extension.getURL('design_files/fonts/fontawesome-webfont.woff')
	        + '"); }';
	     $('head').append(fa);

 		var bp = document.createElement('style');
	    bp.type = 'text/css';
	    bp.textContent = '@font-face { font-family: baloo; src: url("'
	        + chrome.extension.getURL('design_files/fonts/BalooPaaji-Regular.ttf')
	        + '"); }';
	     $('head').append(bp);

  		    la_tag = "<style id='la_tag'>\
			@font-face {\
			  font-family: 'mc_lato';\
			  font-style: normal;\
			  font-weight: 400;\
			  src: local('Lato Regular'), local('Lato-Regular'), url("+chrome.extension.getURL('design_files/fonts/lato/UyBMtLsHKBKXelqf4x7VRQ.woff2')+") format('woff2');\
			  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\
			}\
			@font-face {\
			  font-family: 'mc_lato';\
			  font-style: normal;\
			  font-weight: 400;\
			  src: local('Lato Regular'), local('Lato-Regular'), url("+chrome.extension.getURL('design_files/fonts/lato/1YwB1sO8YE1Lyjf12WNiUA.woff2')+") format('woff2');\
			  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\
			}\
	     </style>";

	     $("head").append(la_tag);

		// var container_dom = host.createShadowRoot({"mode":"open"});

         if(shadow_dom_support == "v1"){
            //attachShadow
            var container_dom = host.attachShadow({"mode":"open"});
         }
         else if(shadow_dom_support =="v0"){
            // createShadowRoot
            var container_dom = host.createShadowRoot({"mode":"open"});
         }
		container_dom.appendChild(main_template.cloneNode(true));
		mc_root = container_dom.querySelector("#mc_root");
		result_view = container_dom.querySelector("#results_view_root");

	}

	load_bus_template();

}


function bus_update_main_container(){
	$("body").append("<div id=\"mc_main_host\" style=\"position:fixed; left:0px; top:30%; z-index:9999; display:none;\" > <div id=\"mc_host\" style=\"\" ></div> </div>");
	main_template = main_temlpate_content.querySelector('template#main_template_bus').content;

	var host =  document.getElementById('mc_host');

	main_template.querySelector("#fa_style").href = chrome.extension.getURL('design_files/css/font-awesome.min.css');
	main_template.querySelector("#main_css_style").href = chrome.extension.getURL('design_files/css/popup.css');
	main_template.querySelector("#lato_css").href = chrome.extension.getURL('design_files/fonts/lato/lato.css');
	main_template.querySelector("#dt_picker").href = chrome.extension.getURL('jquery.datetimepicker.css');

	main_template.querySelector(".main_css_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/popup.css')+"\"";
	main_template.querySelector(".fa_style").textContent = "@import \"" + chrome.extension.getURL('design_files/css/font-awesome.min.css')+"\"";
	main_template.querySelector(".lato_css").textContent = "@import \"" + chrome.extension.getURL('design_files/fonts/lato/lato.css')+"\"";
	main_template.querySelector(".dt_picker").textContent = "@import \"" + chrome.extension.getURL('jquery.datetimepicker.css')+"\"";


	var fa = document.createElement('style');
	fa.type = 'text/css';
	fa.textContent = '@font-face { font-family: FontAwesome; src: url("'
	    + chrome.extension.getURL('design_files/fonts/fontawesome-webfont.woff')
	    + '"); }';
	 $('head').append(fa);

		var bp = document.createElement('style');
	bp.type = 'text/css';
	bp.textContent = '@font-face { font-family: baloo; src: url("'
	    + chrome.extension.getURL('design_files/fonts/BalooPaaji-Regular.ttf')
	    + '"); }';
	 $('head').append(bp);

		    la_tag = "<style id='la_tag'>\
		@font-face {\
		  font-family: 'mc_lato';\
		  font-style: normal;\
		  font-weight: 400;\
		  src: local('Lato Regular'), local('Lato-Regular'), url("+chrome.extension.getURL('design_files/fonts/lato/UyBMtLsHKBKXelqf4x7VRQ.woff2')+") format('woff2');\
		  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\
		}\
		@font-face {\
		  font-family: 'mc_lato';\
		  font-style: normal;\
		  font-weight: 400;\
		  src: local('Lato Regular'), local('Lato-Regular'), url("+chrome.extension.getURL('design_files/fonts/lato/1YwB1sO8YE1Lyjf12WNiUA.woff2')+") format('woff2');\
		  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\
		}\
	 </style>";

	 $("head").append(la_tag);

	// var container_dom = host.createShadowRoot({"mode":"open"});

	 if(shadow_dom_support == "v1"){
	    //attachShadow
	    var container_dom = host.attachShadow({"mode":"open"});
	 }
	 else if(shadow_dom_support =="v0"){
	    // createShadowRoot
	    var container_dom = host.createShadowRoot({"mode":"open"});
	 }
	container_dom.appendChild(main_template.cloneNode(true));
	mc_root = container_dom.querySelector("#mc_root");
	result_view = container_dom.querySelector("#results_view_root");

	//updaaing preview template

	preview_box_template = main_temlpate_content.querySelector('template#preview_mini_box').content;
	var loading_template = preview_box_template.cloneNode(true);
	loading_template.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
	loading_template.querySelector("#pv_popup_close img").src = chrome.extension.getURL('design_files/resources/images/popup-close.png');
	loading_template.querySelector("#price").textContent = "loading";
	loading_template.querySelector("div").style.display = "block";
	//inserting into page
	var preview_root = $(loading_template).insertBefore(result_view);
}

function make_bus_preview_template(json_data){

	function load_preview_template(){

		var link = document.createElement('link');
		link.rel = 'import';
		link.href = chrome.extension.getURL('design_files/preview_box_templates.html');
		//link.setAttribute('async', ''); // make it async!
		link.onload = function(e) {
			var content = this.import
			console.log("main container import success")
			do_post_template_load_task(content);
			this.remove();
			console.log("removed main container import")
			make_preview_draggable();
			// flights_hide_results_display_preview();
			bus_hide_results_display_preview_min();
			// make_flight_results_template(json_data);
			bus_set_events();
			
			fetch_bus_data(json_data);
		}
		link.onerror = function(e) {

		};
		document.head.appendChild(link);


	}
	 function do_post_template_load_task(main_temlpate_content){
	 	console.log(main_temlpate_content);
		preview_box_template = main_temlpate_content.querySelector('template#preview_mini_box').content;

		var loading_template = preview_box_template.cloneNode(true);
		loading_template.querySelector("#pv_makkhi_logo img").src = chrome.extension.getURL('design_files/resources/images/logo.png');
		loading_template.querySelector("#pv_popup_close img").src = chrome.extension.getURL('design_files/resources/images/popup-close.png');
		loading_template.querySelector("#price").textContent = "loading";
		loading_template.querySelector("div").style.display = "block";
		//inserting into page
		var preview_root = $(loading_template).insertBefore(result_view);

	}

	load_preview_template();

}


function fetch_bus_data(){
	site_type = 'bus';
	if(prod_deets.prod_site!="gb"){
		get_goibibo_bus_data();
	}
	if(prod_deets.prod_site!="abb"){
		get_abhibus_data();	
	}
	if(prod_deets.prod_site!="rb"){
		get_redbus_data();	
	}
}

function bus_set_events(){
	do_click_handler();
	$(mc_root).off("click","#preview_min_root");
	$(mc_root).on("click","#preview_min_root",function(e){

		console.log("setting button click");
		ctabby_click='button_click';
	    // hide_preview_min_display_results();

	});


}

var bus_result_box_click = "";
function do_click_handler(){

	$(document).off("click");
	$(document).on("click",doc_bus_click_handler);
}

function doc_bus_click_handler(event){
    if(ctabby_click=='button_click'){
    	console.log("button click not closing things");
        ctabby_click='';
        if(site_type=="bus"){
        	// flights_hide_preview_display_results();
        	bus_hide_preview_min_display_results();
			if(!bus_analytics_flags.result_viewed){
				bus_analytics_flags.result_viewed = true;
				chrome.runtime.sendMessage({
					"method":"send_event",
					"eventCategory":"bus_result_view",
					"eventAction": prod_deets.prod_site,
					"eventLabel": "",
					"eventValue": ""
				});
			}

        }
        event.preventDefault();
        return;
    }
	console.log(event);
	console.log(event.target);

    if($(event.target).is("#mc_host")) {
 		
 		if(bus_result_box_click=="bus_result_box_click"){
 			bus_result_box_click='';
 			return;
 		}
    }

	if(result_view && (site_type=="bus")){
       chrome.runtime.sendMessage({method: "getNotificationPermission"}, function(response){console.log(response)});     
        if($(mc_root).find("#preview_root_min").css("display")!="none"){
        	bus_hide_results_display_preview_min();	
        }
        return;

   	}
}

function bus_hide_results_display_preview_min(){
	
	$(mc_root).find("#results_view_root").css("display","none");
	$("#mc_main_host").css({left:"0px", top:"0px","right":"auto","bottom":"auto","width":"0px"});
	$(mc_root).css({"width":"0px"});
	$("#mc_host").css({"width":"0px"});
	$(mc_root).find("#preview_min_root").css("display","block");
}

function bus_hide_preview_min_display_results(){
		$(mc_root).find("#preview_min_root").css("display","none");
		$(mc_root).css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_host").css({"width":$(mc_root).find("#results_view_root").css("width")});
		$("#mc_main_host").css({"left":"-500px","top":"100px","right":"auto","width":$(mc_root).find("#results_view_root").css("width")});
		$(mc_root).find("#results_view_root").css("display","block");
		$("#mc_main_host").animate({"left":0},"fast");

}


function add_filters(){
	console.log("in add filters");
	operator_list = [];
	for(var i=0; i<page_bus_deets.length;i++){
		if(!(operator_list.indexOf(page_bus_deets[i].operator_name)>-1)){
			operator_list.push(page_bus_deets[i].operator_name);
		}
	}
	operator_list = operator_list.sort();

	var opt ="<option>Operator Name</option>";
	for(var i=0;i<operator_list.length;i++){
		opt += "<option>"+operator_list[i]+"</option>";
	}

	var select = "<select class='operator_filter' style='outline:none; border:0px; border-bottom:1px solid #c5d0d0; font-family:baloo; color:#2e3437; font-size:12px;' title='Operator Name'>"+opt+"</select>"

	$(result_view).find(".operattor_filter").html("");
	$(result_view).find(".operattor_filter").append(select);
}

function operator_filter(record, queryValue){
	console.log("in operator filter");
	console.log(record.operator_name);
	console.log(queryValue);
	if(check_for_busname_match(record.operator_name,queryValue)){
		return true;
	}else{
		false;
	}
}

function start_time_filter(record, queryValue){
	if((queryValue.t1!="") && (queryValue.t2!="")){
		if((record.start_time>=queryValue.t1) && (record.start_time<=queryValue.t2)){
			return true;
		}else{
			return false;
		}
	}else if((queryValue.t1!="")){
		if((record.start_time>=queryValue.t1)){
			return true;
		}else{
			return false;
		}
	}else if((queryValue.t2!="")){
		if((record.start_time<=queryValue.t2)){
			return true;
		}else{
			return false;
		}
	}
}

function end_time_filter(record, queryValue){
	if((queryValue.t1!="") && (queryValue.t2!="")){
		if((record.end_time>=queryValue.t1) && (record.end_time<=queryValue.t2)){
			return true;
		}else{
			return false;
		}
	}else if((queryValue.t1!="")){
		if((record.end_time>=queryValue.t1)){
			return true;
		}else{
			return false;
		}
	}else if((queryValue.t2!="")){
		if((record.end_time<=queryValue.t2)){
			return true;
		}else{
			return false;
		}
	}
}


function open_bus_link(site){
	if(site ==bus_site_list[prod_deets.prod_site].toLowerCase()){
		// close
		bus_hide_results_display_preview_min();
	}else{
		chrome.runtime.sendMessage({"method":"open_url_in_tab","url":bus_site_links[site]});	
	}
	
}


function update_data_for_bus_spa(json_data){
	console.log("in update data for spa");

	bus_analytics_flags = {};

	if(preview_box_template != "" && result_template!="" && main_template!=""){
		//no need to import
		bus_results = [];
		bus_update_main_container();
		//update event listeners
		make_preview_draggable();
		bus_hide_results_display_preview_min();
		bus_set_events();
		fetch_bus_data(json_data);

	}
	else{
		console.log("need to import");
		insert_bus_container(json_data);
	}

}

function get_allowed_dates(){
	var jdate = new Date(bus_deets.doj);
	var jdate1 = new Date(bus_deets.doj+86400000);
	var allowed_arr = [];
	allowed_arr.push(jdate.getFullYear()+'/'+(parseInt(jdate.getMonth())+1)+'/'+jdate.getDate());
	allowed_arr.push(jdate1.getFullYear()+'.'+(parseInt(jdate1.getMonth())+1)+'.'+jdate1.getDate())
	// allowed_arr.push(jdate.getTime());
	// allowed_arr.push(jdate.getTime());
	return allowed_arr;
}

function get_min_date(){
	var jdate = new Date(bus_deets.doj);
	return jdate.getFullYear()+'/'+(parseInt(jdate.getMonth())+1)+'/'+jdate.getDate();
}


function get_max_date(){
	var jdate = new Date(bus_deets.doj+86400000);
	return jdate.getFullYear()+'/'+(parseInt(jdate.getMonth())+1)+'/'+jdate.getDate();
}