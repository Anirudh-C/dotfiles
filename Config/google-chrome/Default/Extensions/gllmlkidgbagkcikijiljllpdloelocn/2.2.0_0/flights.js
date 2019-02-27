var months_arr=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
// var mmt_domestic_page__previous_url='';
// function mmt_domestic_page_url_watcher(){
//     var current_url =  window.location.href;
//     console.log('mmt domestic url watcher');
//     if(current_url!=mmt_domestic_page__previous_url && mmt_domestic_page__previous_url!='' ){
//         // $.toast('url change detected');
//         if(current_url.match('flights.makemytrip.com/makemytrip/search/')){
//             // $.toast('calling page parser')
//             console.log('calling mmt domestic load checker');
//             mmt_domestic_page_load_checker();
//         }
//     }

//     mmt_domestic_page__previous_url=current_url;

//     setTimeout(mmt_domestic_page_url_watcher,1000);


// }

function mmt_domestic_page_load_checker() {
    if (($('.check-dates:eq(0) .month_day:eq(1)').text() && $('.stk_btm_price:eq(-1)').text() != "") || ($('.check-dates:eq(0) .month_day:eq(1)').text() && $('.text-right.price_sectn :eq(0) p:eq(0)').text()!='' ) ){
        
        console.log('oneway text');
        console.log($('.stk_btm_price:eq(-1)').text());

        console.log('rtt text');
        console.log($('.text-right.price_sectn :eq(0) p:eq(0)').text());

        mmt_domestic_page_parse();
        return;
    }
    else{
        setTimeout(mmt_domestic_page_load_checker,1000);
    }
}

function mmt_domestic_page_parse(){

    console.log('make my trip');


    // while(true){
    //     //checking for modal box visibility
    //     console.log('in page load check loop');
    //     if($('.check-dates:eq(0) .month_day:eq(1)').text()){
    //         $.toast('page finished loading');
    //         console.log('breaking loop...');
    //         console.log($('.check-dates:eq(0) .month_day:eq(1)'));
    //         break;
    //     }
    // }


    var travel_deets={};

    var fromCityName=$('.modify_city_name').text().split(' to ')[0];

    // var fromCityCode=iata_codes['from_city_name'];
    var fromCityCode=$('.city_shorttxt:eq(0)').text();

    var toCityName=$('.modify_city_name').text().split(' to ')[1];

    // var toCityCode=iata_codes['to_city_name'];

    var toCityCode=$('.city_shorttxt:eq(1)').text();

    var isReturn;

    if($('.rund_trip_txt').text()=='ROUND-TRIP'){
        isReturn=true;
        var t=$.trim($('.stk_btm_price:eq(-1)').text()).split(' ')[1].split(',');
        travel_deets.price=t[0]+t[1];        
    }
    else{
        isReturn=false;    
        var t=$.trim($('.text-right.price_sectn :eq(0) p:eq(0)').text()).split(' ')[1].split(',');
        travel_deets.price=t[0]+t[1];

    }

    var departure_date=$.trim($('.check-dates:eq(0) .date').text().trim());

    var departure_month=$.trim($('.check-dates:eq(0) .month_day:eq(1)').text().split(' ')[0].trim());

    var departure_year=$.trim($('.check-dates:eq(0) .month_day:eq(1)').text().split(' ')[1].trim());

    var arrival_date=$.trim($('.check-dates:eq(1) .date').text().trim());

    var arrival_month=$.trim($('.check-dates:eq(1) .month_day:eq(1)').text().split(' ')[0].trim());

    var arrival_year=$.trim($('.check-dates:eq(1) .month_day:eq(1)').text().split(' ')[1].trim());

    console.log(departure_date);

    console.log(departure_month);

    console.log(departure_year);


    var depatureDate =departure_month + ' ' + departure_date +' '+'20'+departure_year;

    var returnDate= arrival_month + ' '+ arrival_date +' '+'20'+arrival_year;

    var nAdults=parseInt($('.check-dates:eq(2) .date').text())?parseInt($('.check-dates:eq(2) .date').text()):0;

    var nChilds=parseInt($('.check-dates:eq(3) .date').text())?parseInt($('.check-dates:eq(3) .date').text()):0;

    var nInfants=parseInt($('.check-dates:eq(4) .date').text())?parseInt($('.check-dates:eq(4) .date').text()):0;

    travel_deets.fromCityCode=fromCityCode;
    travel_deets.fromCityName=fromCityName;
    travel_deets.toCityCode=toCityCode;
    travel_deets.toCityName=toCityName;
    travel_deets.isReturn=isReturn;
    travel_deets.depatureDate=depatureDate;
    travel_deets.returnDate=returnDate;
    travel_deets.nAdults=nAdults;
    travel_deets.nChilds=nChilds;
    travel_deets.nInfants=nInfants;
    travel_deets.isInternational=false;

    console.log('travel deets');

    console.log(travel_deets);

    journey_deets=travel_deets;

    get_flights_data(travel_deets);


}


//mmt domestic data processing




function date_in_mmt_format(date_in_page_format){
    var month_map={'jan':'01','feb':'02','mar':'03','apr':'04','may':'05','jun':'06','jul':'07','aug':'08','sep':'09','oct':'10','nov':'11','dec':'12'}

    date_to_convert=date_in_page_format.split(' ');

    console.log(date_to_convert);

    console.log('date_in_page_format');

    console.log(date_in_page_format);

    // return date_to_convert[2]+'/'+month_map[date_to_convert[0].toLowerCase()]+'/'+date_to_convert[3];

    return date_to_convert[1]+'/'+month_map[date_to_convert[0].toLowerCase()]+'/'+date_to_convert[2];
}


function getMakeMyTripDomesticData(json_data){
    // dDate_object = datetime.strptime(json_data['depatureDate'], '%b %d %Y %I:%M %p')
    // departureDate = dDate_object.strftime('%d/%m/%Y')
    var departureDate=date_in_mmt_format(json_data['depatureDate']);
    
    var tripType = 'O';
    if(json_data['isReturn']){
        tripType = 'R';
    }

    // headers = {
    //     "Accept": "application/json",
    //     "Accept-Encoding": "gzip",
    //     "User-Agent": "okhttp/2.4.0",
    //     "Content-Type": "application/json; charset=utf-8",
    //     "useragent": "mobile",
    //     "ver": "5.2.6",
    //     "Host": "flights.makemytrip.com",
    //     "Connection": "Keep-Alive"
    // }

    var payload = {
        "classType": "E",
        "deptDate": departureDate,
        "fromCity": json_data["fromCityCode"],
        "fromCityName": json_data["fromCityName"],
        "lob": "Mobile",
        "noOfAdlts": json_data["nAdults"],
        "noOfChd": json_data["nChilds"],
        "noOfInfnt": json_data["nInfants"],
        "toCity": json_data["toCityCode"],
        "toCityName": json_data["toCityName"],
        "tripType": tripType,
        "tripTypeDup": tripType
    };

    console.log('payload');

    console.log(payload);

    if (json_data["isReturn"]){
        // rDate_object = datetime.strptime(json_data['returnDate'], '%b %d %Y %I:%M %p')
        // returnDate = rDate_object.strftime('%d/%m/%Y')
        var returnDate=date_in_mmt_format(json_data['returnDate']);
        payload["returnDate"] = returnDate;
    }
    

    // with open(r'mmt_payload.txt', 'w') as fh:
    //     fh.write(json.dumps(payload))
    

    url="https://flights.makemytrip.com/makemytrip/flights-search"
    // r = requests.post(url, data=json.dumps(payload), headers=headers, timeout=130)    

    var req_send = backPostGet({
                        type: "POST",
                        url: url,
                        data: JSON.stringify(payload),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        timeout: 60000,
                    });
   

    req_send.done(function(response){

        $("#mc_mmt_load").remove();

        var mmt_json_out=response;
            // mmt_json_out = json.loads(r.content)
    

        // with open(r'mmt_download.txt', 'w') as fh:
        //     fh.write(r.content)
        

        var lstDepFlightsData = [];
        var lstArrFlightsData = [];
        if(json_data["isReturn"]==false){
            if(mmt_json_out.hasOwnProperty('oneWayFlights') && mmt_json_out['oneWayFlights']){
                lstDepFlightsData = mmt_json_out['oneWayFlights']['webFlights'];
            }
        }
        else{
            if(mmt_json_out.hasOwnProperty('returnFlights') && mmt_json_out['returnFlights']){
                lstDepFlightsData = mmt_json_out['returnFlights']['combinedFlights']['departureFlights'];
                lstArrFlightsData = mmt_json_out['returnFlights']['combinedFlights']['returnFlights'];
            }
        }

        // (depPrice, depLowestData) = getLowestDomesticMMTPrice(lstDepFlightsData, json_data["nAdults"], json_data["nChilds"], json_data["nInfants"])
        // (retPrice, retLowestData) = getLowestDomesticMMTPrice(lstArrFlightsData, json_data["nAdults"], json_data["nChilds"], json_data["nInfants"])
        var dep_deets_obj=getLowestDomesticMMTPrice(lstDepFlightsData, json_data["nAdults"], json_data["nChilds"], json_data["nInfants"]);
        var ret_deets_obj=getLowestDomesticMMTPrice(lstArrFlightsData, json_data["nAdults"], json_data["nChilds"], json_data["nInfants"]);
        
        var lowestTotalPrice = dep_deets_obj.price +ret_deets_obj.price;
        // return ('mt', lowestTotalPrice, depLowestData, retLowestData)

        console.log('dep_deets_obj');
        console.log(dep_deets_obj);

        console.log('ret_deets_obj');
        console.log(ret_deets_obj);

        console.log('lowestTotalPrice');
        console.log(lowestTotalPrice);

        if(lowestTotalPrice!=0){
            var card_str=make_flights_card({'site':'mmt', 'low_price':lowestTotalPrice, 'dept_data':dep_deets_obj.details, 'arr_data':ret_deets_obj.details});
            insert_flights_card(card_str);
        }


    });

    req_send.fail(function(response){
        $("#mc_mmt_load").remove();
        console.log('request failed');
    });
    


}


function getLowestDomesticMMTPrice(lstFlightData, nAdultCount, nChildCount, nInfantCount){
    var lowestPrice = 0;
    var lowestdata = {};
    var i=0;
    for(i=0;i<lstFlightData.length;i++ ){
        var eachFlight=lstFlightData[i];
        var normal_fare = eachFlight['af']
        var infant_fare = eachFlight['if'] + eachFlight['it']
        var fare = (parseInt(normal_fare) * (parseInt(nAdultCount)+parseInt(nChildCount))) + (parseInt(infant_fare)*parseInt(nInfantCount));
        
        console.log('counts');
        console.log(normal_fare+' '+' '+infant_fare+' '+fare);
        console.log( nAdultCount + ' '+ nChildCount + ' ' + nInfantCount);
        
        if (lowestPrice > 0){
            if(fare < lowestPrice){
                lowestPrice = fare
                lowestdata = eachFlight
            }
        }
        else{
            lowestPrice = fare;
            lowestdata = eachFlight;
        }
    }

    return getDomesticMMTFlightDetails(lowestPrice, lowestdata);
}




function getDomesticMMTFlightDetails(price, flightData){
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var details = {};
    var isFound = false;
    if (flightData.hasOwnProperty('le') && flightData['le']){
        var flightsCount = flightData['le'].length;
        var airlineNames = {};
        
        for(var i=0; i<flightData['le'].length; i++){
            var eachFlight=flightData['le'][i];
            
            airlineNames[eachFlight['an']] = 1;
        }
        
        if (airlineNames.length > 1){
            details['airlineName'] = 'Multiple Airlines';
        }
        else{
            details['airlineName'] = flightData['le'][0]['an'];
        }


        details['deptDate']=''+(new Date(flightData['le'][0]['dt']).getDate()) +' '+monthNames[(new Date(flightData['le'][0]['dt']).getMonth())];
        details['deptTime']=''+(new Date(flightData['le'][0]['dt']).getHours()) +':'+ (new Date(flightData['le'][0]['dt']).getMinutes());        
        
        
        details['arrDate']=''+(new Date(flightData['le'][flightsCount-1]['at']).getDate()) +' ' +monthNames[(new Date(flightData['le'][flightsCount-1]['at']).getMonth())];
        details['arrTime']=''+(new Date(flightData['le'][flightsCount-1]['at']).getHours()) +':'+ (new Date(flightData['le'][flightsCount-1]['at']).getMinutes());        


        
        var duration =flightData['td'];
        duration= (duration.split(' ')[0].slice(0,-1))<1?1:(duration.split(' ')[0].slice(0,-1));
        details['duration']=duration;
        // details['duration'] = flightData['td'];

        details['stops'] = (flightData['le']).length - 1;
        
        isFound = true;
    }
    details['isFound'] = isFound;
    
    return {"price":price,"details": details};
}


//mmt international page parsing

// var mmt_int_page_previous_url='';
// function mmt_int_page_url_watcher(){
//     var current_url =  window.location.href;

//     if(current_url!=mmt_int_page_previous_url && mmt_int_page_previous_url!='' ){
//         // $.toast('url change detected');
//         if(current_url.match('makemytrip.com/air/search')){
//             // $.toast('calling page parser')
//             mmt_int_page_load_checker();
//         }
//     }

//     mmt_int_page_previous_url=current_url;

//     setTimeout(mmt_int_page_url_watcher,1000);


// }

function mmt_int_page_load_checker(){

    // if($('.check-dates:eq(0) .month_day:eq(0)').text()){
    //     mmt_int_page_parser();
    //     return;
    // }
    // else{
    //     setTimeout(mmt_int_page_load_checker,1000);
    // }


    if($('#superLoader div').css('display')!="block"){
        mmt_int_page_parser();
        return;
    }
    else{
        setTimeout(mmt_int_page_load_checker,1000);
    }





}


function mmt_int_page_parser(){
        console.log('make my trip');

    var travel_deets={};

    // var fromCityName=$('.modify_city_name span:eq(0)').text();

    // // var fromCityCode=iata_codes['from_city_name'];
    // var fromCityCode=$('.flight_details_strip span:eq(2)').text().split(' ')[0];

    // var toCityName=$('.modify_city_name span:eq(2)').text();

    // // var toCityCode=iata_codes['to_city_name'];

    // var toCityCode=$('.flight_details_strip span:eq(2)').text().split(' ')[2];

    // var isReturn;

    // if($('.rund_trip_txt').text()=='ROUND TRIP'){
    //     isReturn=true;
    // }
    // else{
    //     isReturn=false;    
    // }

    // var departure_date=$.trim($('.check-dates:eq(0) .date').text().trim());

    // var departure_month=$.trim($('.check-dates:eq(0) .month_day:eq(0)').text().split(' ')[0].trim()).slice(0,-1);

    // var departure_year=$.trim($('.check-dates:eq(0) .month_day:eq(0)').text().split(' ')[1].trim());

    // if(isReturn){
    //     var arrival_date=$.trim($('.check-dates:eq(1) .date').text().trim());

    //     var arrival_month=$.trim($('.check-dates:eq(1) .month_day:eq(0)').text().split(' ')[0].trim()).slice(0,-1);

    //     var arrival_year=$.trim($('.check-dates:eq(1) .month_day:eq(0)').text().split(' ')[1].trim());

    //     var returnDate= arrival_month + ' ' + ' '+ arrival_date +' '+'20'+arrival_year;

    // }
    // console.log(departure_date);

    // console.log(departure_month);

    // console.log(departure_year);


    // var depatureDate =departure_month + ' ' + ' '+ departure_date +' '+'20'+departure_year;

    // if(isReturn){

    //     var nAdults=parseInt($('.check-dates:eq(2) .date').text())?parseInt($('.check-dates:eq(2) .date').text()):0;

    //     var nChilds=parseInt($('.check-dates:eq(3) .date').text())?parseInt($('.check-dates:eq(3) .date').text()):0;

    //     var nInfants=parseInt($('.check-dates:eq(4) .date').text())?parseInt($('.check-dates:eq(4) .date').text()):0;

    // }
    // else{

    //     var nAdults=parseInt($('.check-dates:eq(1) .date').text())?parseInt($('.check-dates:eq(1) .date').text()):0;

    //     var nChilds=parseInt($('.check-dates:eq(2) .date').text())?parseInt($('.check-dates:eq(2) .date').text()):0;

    //     var nInfants=parseInt($('.check-dates:eq(3) .date').text())?parseInt($('.check-dates:eq(3) .date').text()):0;

    // }
    var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
    
    var fromCityCode=url_params['itinerary'].split('-')[0];
    var fromCityName=fromCityCode;
    var toCityCode=url_params['itinerary'].split('-')[1];
    var toCityName=toCityCode;

    if(url_params['tripType']=='R'){
        var isReturn =true;
        t=$('.actual-price:eq(1) span:eq(1)').text().split(',')
        travel_deets.price=t[0]+t[1];
    }
    else{
        var isReturn=false;
        t=$('.actual-price:eq(1) span:eq(1)').text().split(',')
        travel_deets.price=t[0]+t[1];

    }

    var t_date=url_params['itinerary'].split('-')[3];
    var depatureDate= t_date.slice(2,5) +' '+ t_date.slice(0,2)+' ' + t_date.slice(5,9); 

    if(isReturn){
        t_date=url_params['itinerary'].split('_')[1].split('-')[3];
        var returnDate =t_date.slice(2,5) +' '+t_date.slice(0,2)+' ' + t_date.slice(5,9); 
    }

    t_date=url_params['paxType'].split('-');

    var nAdults=0;
    if(t_date.indexOf('A')!=-1){
        nAdults=t_date[t_date.indexOf('A')+1];
    }

    var nChilds =0;
    if(t_date.indexOf('C')!=-1){
        nChilds=t_date[t_date.indexOf('C')+1];
    }

    var nInfants=0;
    if(t_date.indexOf('I')!=-1){
        nInfants=t_date[t_date.indexOf('I')+1];
    }


    
    travel_deets.fromCityCode=fromCityCode;
    travel_deets.fromCityName=fromCityName;
    travel_deets.toCityCode=toCityCode;
    travel_deets.toCityName=toCityName;
    travel_deets.isReturn=isReturn;
    travel_deets.depatureDate=depatureDate;
    travel_deets.returnDate=returnDate;
    travel_deets.nAdults=nAdults;
    travel_deets.nChilds=nChilds;
    travel_deets.nInfants=nInfants;
    travel_deets.isInternational=true;

    console.log('travel deets');

    console.log(travel_deets);

    journey_deets=travel_deets;

    get_flights_data(travel_deets);

}




function mmt_int_page1_load_checker(){

    // if($('.check-dates:eq(0) .month_day:eq(0)').text()){
    //     mmt_int_page_parser();
    //     return;
    // }
    // else{
    //     setTimeout(mmt_int_page_load_checker,1000);
    // }


    if($('.price_info:eq(1)').text()!='' && $('.check-dates:eq(0) .month_day:eq(0)').text()!=''){
        mmt_int_page1_parser();
        return;
    }
    else{
        setTimeout(mmt_int_page1_load_checker,1000);
    }





}


function mmt_int_page1_parser(){
        console.log('make my trip');

    var travel_deets={};

    var fromCityName=$('.modify_city_name span:eq(0)').text();

    // var fromCityCode=iata_codes['from_city_name'];
    var fromCityCode=$('.flight_details_strip span:eq(2)').text().split(' ')[0];

    var toCityName=$('.modify_city_name span:eq(2)').text();

    // var toCityCode=iata_codes['to_city_name'];

    var toCityCode=$('.flight_details_strip span:eq(2)').text().split(' ')[2];

    var isReturn;

    if($('.rund_trip_txt').text()=='ROUND TRIP'){
        isReturn=true;
    }
    else{
        isReturn=false;    
    }

    var departure_date=$.trim($('.check-dates:eq(0) .date').text().trim());

    var departure_month=$.trim($('.check-dates:eq(0) .month_day:eq(0)').text().split(' ')[0].trim()).slice(0,-1);

    var departure_year=$.trim($('.check-dates:eq(0) .month_day:eq(0)').text().split(' ')[1].trim());

    if(isReturn){
        var arrival_date=$.trim($('.check-dates:eq(1) .date').text().trim());

        var arrival_month=$.trim($('.check-dates:eq(1) .month_day:eq(0)').text().split(' ')[0].trim()).slice(0,-1);

        var arrival_year=$.trim($('.check-dates:eq(1) .month_day:eq(0)').text().split(' ')[1].trim());

        var returnDate= arrival_month + ' ' + arrival_date +' '+'20'+arrival_year;

    }
    console.log(departure_date);

    console.log(departure_month);

    console.log(departure_year);


    var depatureDate =departure_month + ' '+ departure_date +' '+'20'+departure_year;

    if(isReturn){

        var nAdults=parseInt($('.check-dates:eq(2) .date').text())?parseInt($('.check-dates:eq(2) .date').text()):0;

        var nChilds=parseInt($('.check-dates:eq(3) .date').text())?parseInt($('.check-dates:eq(3) .date').text()):0;

        var nInfants=parseInt($('.check-dates:eq(4) .date').text())?parseInt($('.check-dates:eq(4) .date').text()):0;

        var t=$.trim($('.price_info:eq(1)').text()).split(' ')[1].split(',')
        travel_deets.price=t[0]+t[1];


    }
    else{

        var nAdults=parseInt($('.check-dates:eq(1) .date').text())?parseInt($('.check-dates:eq(1) .date').text()):0;

        var nChilds=parseInt($('.check-dates:eq(2) .date').text())?parseInt($('.check-dates:eq(2) .date').text()):0;

        var nInfants=parseInt($('.check-dates:eq(3) .date').text())?parseInt($('.check-dates:eq(3) .date').text()):0;
        
        var t=$.trim($('.price_info:eq(1)').text()).split(' ')[1].split(',')
        travel_deets.price=t[0]+t[1];

    }
    
    
    travel_deets.fromCityCode=fromCityCode;
    travel_deets.fromCityName=fromCityName;
    travel_deets.toCityCode=toCityCode;
    travel_deets.toCityName=toCityName;
    travel_deets.isReturn=isReturn;
    travel_deets.depatureDate=depatureDate;
    travel_deets.returnDate=returnDate;
    travel_deets.nAdults=nAdults;
    travel_deets.nChilds=nChilds;
    travel_deets.nInfants=nInfants;
    travel_deets.isInternational=true;

    console.log('travel deets');

    console.log(travel_deets);

    journey_deets=travel_deets;

    get_flights_data(travel_deets);

}



// mmt international data processing

function date_in_mmt_int_format(date_in_page_format){
    var month_map={'jan':'01','feb':'02','mar':'03','apr':'04','may':'05','jun':'06','jul':'07','aug':'08','sep':'09','oct':'10','nov':'11','dec':'12'}

    date_to_convert=date_in_page_format.split(' ');

    console.log(date_to_convert);

    console.log('date_in_page_format');

    console.log(date_in_page_format);

    // return date_to_convert[2]+'/'+month_map[date_to_convert[0].toLowerCase()]+'/'+date_to_convert[3];

    return date_to_convert[2]+'-'+month_map[date_to_convert[0].toLowerCase()]+'-'+date_to_convert[1];
}



function getMakeMyTripInternationalData(json_data){
    // dDate_object = datetime.strptime(json_data['depatureDate'], '%b %d %Y %I:%M %p')
    // departureDate = dDate_object.strftime('%Y-%m-%d')
    var departureDate=date_in_mmt_int_format(json_data['depatureDate']);

    var tripType = 'O'
    if(json_data['isReturn']){
        tripType = 'R'
    }

    var sectors = [];
    var deptData = {
            "date": departureDate,
            "fromCity": json_data["fromCityCode"],
            "toCity": json_data["toCityCode"]
        };
    
    // sectors.append(deptData)
    sectors.push(deptData);

    if(json_data["isReturn"]){
        
        // rDate_object = datetime.strptime(json_data['returnDate'], '%b %d %Y %I:%M %p')
        // returnDate = rDate_object.strftime('%Y-%m-%d')
        var returnDate=date_in_mmt_int_format(json_data['returnDate']);        
        var arrData = {
                "date": returnDate,
                "fromCity": json_data["toCityCode"],
                "toCity": json_data["fromCityCode"]
            };
        sectors.push(arrData);
    }
    payload = {
        "tripType": tripType,
        "cabinClass": "E",
        "lob": "mobile",
        "country": "IN",
        "sectors": sectors,
        "adult": json_data["nAdults"],
        "child": json_data["nChilds"],
        "infant": json_data["nInfants"]
    };

    console.log(payload);
    
    url="https://cheapfaresindia.makemytrip.com/international/search"
    
    // r = requests.post(url, data=json.dumps(payload), headers=headers, timeout=130)
    // mmt_json_out = json.loads(r.content)

    var req_send = backPostGet({
                    type: "POST",
                    url: url,
                    data: JSON.stringify(payload),
                    contentType: "application/json;",
                    dataType: "json",
                    timeout: 60000
                });
    
    req_send.done(function(response){
        $("#mc_mmt_load").remove();
        var mmt_json_out=response;

        // (nAdultCount, nChildCount, nInfantCount) = (json_data["nAdults"], json_data["nChilds"], json_data["nInfants"])

        var nAdultCount=json_data["nAdults"];

        var nChildCount=json_data["nChilds"];

        var nInfantCount=json_data["nInfants"];
        


        // (lowestTotalPrice, deptData, arrData) = getLowestInternationalMMTPrice(mmt_json_out, nAdultCount, nChildCount, nInfantCount)

        var deets_obj=getLowestInternationalMMTPrice(mmt_json_out, nAdultCount, nChildCount, nInfantCount);


        console.log(deets_obj);

        console.log('end');

        deets_obj['site']='mmt';

        if(deets_obj.low_price!=0){
            var card=make_flights_card(deets_obj);
            insert_flights_card(card);
            
        }


        // return ('mt', lowestTotalPrice, deptData, arrData)        
    });


    req_send.fail(function(){
        $("#mc_mmt_load").remove();
        console.log('request send failure');
    });


}



function getLowestInternationalMMTPrice(mmt_json_out, nAdultCount, nChildCount, nInfantCount){

    var lowestPrice = 0
    var lowestData = {}
    var flightCodeMap = {}
    
    if(mmt_json_out.hasOwnProperty('recommendations')){

        if(mmt_json_out['recommendations'].hasOwnProperty('results') && mmt_json_out['recommendations']['results']){
            
            for (var i=0; i<mmt_json_out['recommendations']['results'].length;i++){
                var eachResult=mmt_json_out['recommendations']['results'][i];
                var price = 0;
                if ( eachResult.hasOwnProperty('paxFares')){
                    
                    for(var j=0; j<eachResult['paxFares'].length; j++){
                        
                        var eachPaxFare=eachResult['paxFares'][j];

                        var multiplyCount = 0;
                        if(eachPaxFare['paxType'] == 'ADT'){
                            multiplyCount = nAdultCount;
                        }
                        else if (eachPaxFare['paxType'] == 'CHD'){
                            multiplyCount = nChildCount;
                        }
                        else if (eachPaxFare['paxType'] == 'INF'){
                            multiplyCount = nInfantCount;
                        }
                        var thisPrice = 0;
                        for (var k=0;k<eachPaxFare['fares'].length;k++){
                            var eachFare=eachPaxFare['fares'][k];
                            if(eachFare.hasOwnProperty('fareType') &&  eachFare.hasOwnProperty('fare') && (eachFare['fareType'].startsWith("MU") || eachFare['fareType']=='TOT')){
                                thisPrice += eachFare['fare'];
                            }
                        }
                        price += (thisPrice * multiplyCount);
                    }
                }
                if(price > 0){
                    if (lowestPrice > 0){
                        if(price < lowestPrice){
                            lowestPrice = price;
                            lowestData = eachResult;
                        }
                    }
                    else{
                        lowestPrice = price;
                        lowestData = eachResult;
                    }
                }
            }
        }
        
        if (mmt_json_out['recommendations'].hasOwnProperty('codemap') && mmt_json_out['recommendations']['codemap'].hasOwnProperty('airlineinfos')){
            // for(eachFlightCode, eachFlightName in mmt_json_out['recommendations']['codemap']['airlineinfos'].iteritems()){
            for(eachFlightCode in mmt_json_out['recommendations']['codemap']['airlineinfos']){    
                var eachFlightName=mmt_json_out['recommendations']['codemap']['airlineinfos'][eachFlightCode];
                flightCodeMap[eachFlightCode] = eachFlightName['name']
            }
        }
    }
    // (deptData, arrData) = getMMTLowestInternationalFlightDetails(lowestData, flightCodeMap)
    var deets_obj=getMMTLowestInternationalFlightDetails(lowestData, flightCodeMap);
    deets_obj['low_price']=lowestPrice;
    // return (lowestPrice, deptData, arrData)
    return deets_obj;
}



function getMMTLowestInternationalFlightDetails(flightData, flightCodeMap){
    var deptData = {'isFound': false};
    var arrData = {'isFound': false};
    var displayAirlinesName = 'Multiple Airlines';
    if(flightData.hasOwnProperty('ValidatingCarrier')){
        flightCarrierCode = flightData['ValidatingCarrier'];

        if(flightCodeMap.hasOwnProperty(flightCarrierCode)){
            displayAirlinesName = flightCodeMap[flightCarrierCode];
        }
    }
    
    if (flightData.hasOwnProperty('segments') && flightData['segments']){
        if((flightData['segments']).length > 0){
            deptData = getMMTInternationalSegmentData(flightData['segments'][0], displayAirlinesName)
            deptData.duration=parseInt(deptData.duration.split(' ')[0].slice(0,-1))<1?1:parseInt(deptData.duration.split(' ')[0].slice(0,-1));


        }
        if((flightData['segments']).length > 1){
            arrData = getMMTInternationalSegmentData(flightData['segments'][1], displayAirlinesName)
            arrData.duration=parseInt(arrData.duration.split(' ')[0].slice(0,-1))<1?1:parseInt(arrData.duration.split(' ')[0].slice(0,-1));
        }
    }

    return {'dept_data':deptData, 'arr_data':arrData};

}




function getMMTInternationalSegmentData(segmentData, displayAirlineName){
    var details = {};
    var isFound = false;
    if(segmentData &&  segmentData.hasOwnProperty('groupOfFlights') && segmentData['groupOfFlights']){
        
        details['airlineName'] = displayAirlineName;
        var firstFlight = segmentData['groupOfFlights'][0]['departureInfo'];
        var lastFlight = segmentData['groupOfFlights'][(segmentData['groupOfFlights']).length-1]['arrivalInfo'];

        var deptDateTime = firstFlight['absDateTime'];
        var arrDateTime = lastFlight['absDateTime'];

        details['deptDate'] = $.trim(deptDateTime.split(',')[0]);
        details['deptTime'] = $.trim(deptDateTime.split(',')[1]);
        details['arrDate'] = $.trim(arrDateTime.split(',')[0]);
        details['arrTime'] = $.trim(arrDateTime.split(',')[1]);

        var totalMinsDuration = segmentData['duration'];
        var displayDuration = '';
        if(totalMinsDuration >= 60){
            displayDuration += (totalMinsDuration/60) + 'h';
        }
        if( (totalMinsDuration % 60) > 0){
            // displayDuration += ' ' + str(totalMinsDuration % 60) + 'm';
            displayDuration += ' ' + (totalMinsDuration % 60) + 'm';
        }
        details['duration'] = displayDuration;
        console.log('duration');

        console.log(details['duration']);

        details['stops'] = (segmentData['groupOfFlights']).length - 1;
        isFound = true;
    }
    

    details['isFound'] = isFound;
    return details;

}


//cleartrip parsing



var ct_domestic_page_load_checker_timer;

function ct_domestic_page_load_checker(){
    console.log('executing load_checker');
    var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
    // if( (url_params['page']=='loaded' && window.location.href.match('cleartrip.com/flights/results?') && ($('.loaderContainer:eq(-1)').css('display')=="none"))  ){
     if( (window.location.href.match('cleartrip.com/flights/results?') && ($('.loaderContainer:eq(-1)').css('display')=="none"))  ){
        console.log(window.location.href);
        console.log('calling cleartrip domestic parser');

        if(ct_domestic_page_load_checker_timer){
            clearTimeout(ct_domestic_page_load_checker_timer);    
        }

        ct_domestic_page__previous_url=window.location.href;
        ct_domestic_page_url_watcher_timer=setTimeout(ct_domestic_page_url_watcher,1000);
        cleartrip_domestic_page_parser();
        return;
    }
    else{
        ct_domestic_page_load_checker_timer=setTimeout(ct_domestic_page_load_checker,1000);
    }


}

var ct_international_page_load_checker_timer;
function ct_international_page_load_checker(){
    var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
    if( (url_params['page']=='loaded' )&& ($('.loaderContainer:eq(-1)').css('display')=="none") ){


        if(ct_international_page_load_checker_timer){
            clearTimeout(ct_international_page_load_checker_timer);
        }
        ct_domestic_page__previous_url=window.location.href;
        ct_domestic_page_url_watcher_timer=setTimeout(ct_domestic_page_url_watcher,1000);
        cleartrip_international_page_parser();
        return;
    }
    else{
        ct_international_page_load_checker_timer=setTimeout(ct_international_page_load_checker,1000);
    }


}


function cleartrip_domestic_page_parser(){

    // $.toast('found clear trip domestic page');

    console.log('clear trip found');

    var months_arr=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

    //clear trip domestic page
    var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
    
    var travel_deets={};

    travel_deets.fromCityCode=url_params['from'];
    travel_deets.fromCityName='';
    travel_deets.toCityCode=url_params['to'];
    
    var depart_date=url_params['depart_date'];
    console.log('depart_date');
    console.log(depart_date);

    console.log(url_params['depart_date'].split('/')[2]);

    console.log(url_params['depart_date'].split('/')[1]);

    console.log(url_params['depart_date'].split('/')[0]);

    // var ddate_obj=new Date(url_params['depart_date'].split('/')[2],url_params['depart_date'].split('/')[1],url_params['depart_date'].split('/')[0],0,0,0,0);
    var ddate_obj=new Date(url_params['depart_date'].split('/')[2],url_params['depart_date'].split('/')[1]-1,url_params['depart_date'].split('/')[0]);

    // ddate_obj.setYear(url_params['depart_date'].split('/')[2]);

    // ddate_obj.setMonth(url_params['depart_date'].split('/')[1]-1);

    // ddate_obj.setDate(url_params['depart_date'].split('/')[0]);

    console.log('ddate_obj');
    console.log(ddate_obj);
    travel_deets.depatureDate=months_arr[ddate_obj.getMonth()]+' '+ddate_obj.getDate()+' '+ddate_obj.getFullYear();
    

    if(url_params['return_date']){

        var return_date=url_params['return_date'];
        // var rdate_obj=new new Date(url_params['return_date'].split('/')[2],url_params['return_date'].split('/')[1],url_params['return_date'].split('/')[0],0,0,0,0);
            var rdate_obj=new Date(url_params['return_date'].split('/')[2],url_params['return_date'].split('/')[1]-1,url_params['return_date'].split('/')[0]);
            // rdate_obj.setYear(url_params['return_date'].split('/')[2]);
            // rdate_obj.setMonth(url_params['return_date'].split('/')[1]-1);
            // rdate_obj.setDate(url_params['return_date'].split('/')[0]);

        travel_deets.returnDate=months_arr[rdate_obj.getMonth()]+' '+rdate_obj.getDate()+' '+rdate_obj.getFullYear();

    }



    travel_deets.nAdults=url_params['adults'];
    travel_deets.nChilds=url_params['childs'];
    travel_deets.nInfants=url_params['infants'];


    if(url_params['intl']=='y'){
        travel_deets.isInternational=true;
    }
    else{
        travel_deets.isInternational=false;    
    }

    if(url_params['return_date']){
        travel_deets.isReturn=true;
        travel_deets.price=$('.roundTripHead:eq(-1) .roundTripHeader h2 span').attr('data-pr');
    }
    else{
        travel_deets.isReturn=false;
        travel_deets.price=$('ul.listView.flights:eq(-1) li table:eq(0) tbody:eq(1) tr:eq(0) th.price span').attr('data-pr');
    }


    console.log('travel_deets');
    console.log(travel_deets);
    // getMakeMyTripDomesticData(travel_deets);
    journey_deets=travel_deets;
    get_flights_data(travel_deets);

}



function cleartrip_international_page_parser(){
    // $.toast('found clear trip international page');

    console.log('clear trip found');

    var months_arr=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

    //clear trip domestic page
    var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
    
    var travel_deets={};

    travel_deets.fromCityCode=url_params['from'];
    travel_deets.fromCityName='';
    travel_deets.toCityCode=url_params['to'];
    
    var depart_date=url_params['depart_date'];
    
    var ddate_obj=new Date(url_params['depart_date'].split('/')[2],url_params['depart_date'].split('/')[1]-1,url_params['depart_date'].split('/')[0]);
    // ddate_obj.setYear(url_params['depart_date'].split('/')[2]);
    // ddate_obj.setMonth(url_params['depart_date'].split('/')[1]-1);
    // ddate_obj.setDate(url_params['depart_date'].split('/')[0]);
    console.log('ddate_obj');
    console.log(ddate_obj);
    travel_deets.depatureDate=months_arr[ddate_obj.getMonth()]+' '+ddate_obj.getDate()+' '+ddate_obj.getFullYear();
    

    if(url_params['return_date']){

        var return_date=url_params['return_date'];
        var rdate_obj=new Date(url_params['return_date'].split('/')[2],url_params['return_date'].split('/')[1]-1,url_params['return_date'].split('/')[0]);
        // var rdate_obj=new new Date(url_params['return_date'].split('/')[2],url_params['return_date'].split('/')[1],url_params['return_date'].split('/')[0],0,0,0,0);
            // var rdate_obj=new Date();
            // rdate_obj.setYear(url_params['return_date'].split('/')[2]);
            // rdate_obj.setMonth(url_params['return_date'].split('/')[1]-1);
            // rdate_obj.setDate(url_params['return_date'].split('/')[0]);

        travel_deets.returnDate=months_arr[rdate_obj.getMonth()]+' '+rdate_obj.getDate()+' '+rdate_obj.getFullYear();

    }


    travel_deets.nAdults=url_params['adults'];
    travel_deets.nChilds=url_params['childs'];
    travel_deets.nInfants=url_params['infants'];


    if(url_params['intl']=='y'){
        travel_deets.isInternational=true;
    }
    else{
        travel_deets.isInternational=false;    
    }

    if(url_params['return_date']){
        travel_deets.isReturn=true;
        travel_deets.price=$('ul.listView.flights:eq(-1) li table:eq(0) tbody:eq(1) tr:eq(0) th.price span').attr('data-pr');
    }
    else{
        travel_deets.isReturn=false;
        travel_deets.price=$('ul.listView.flights:eq(-1) li table:eq(0) tbody:eq(1) tr:eq(0) th.price span').attr('data-pr');
    }


    console.log('travel_deets');
    console.log(travel_deets);
    journey_deets=travel_deets;
    get_flights_data(travel_deets);
}

// clear trip data processing
function date_in_ct_format(date_in_page_format){
    var month_map={'jan':'01','feb':'02','mar':'03','apr':'04','may':'05','jun':'06','jul':'07','aug':'08','sep':'09','oct':'10','nov':'11','dec':'12'}

    date_to_convert=date_in_page_format.split(' ');

    console.log(date_to_convert);

    return date_to_convert[1]+'/'+month_map[date_to_convert[0].toLowerCase()]+'/'+date_to_convert[2];
}

function get_clear_trip_data(json_data){
    
    var url_params={};
    url_params.origin=json_data['fromCityName'];
    url_params.from=json_data['fromCityCode'];
    url_params.destination=json_data['toCityName'];
    url_params.to=json_data['toCityCode']
    url_params.depart_date=date_in_ct_format(json_data['depatureDate']);
    url_params.adults=json_data['nAdults'];
    url_params.childs=json_data['nChilds'];
    url_params.infants=json_data['nInfants'];
    url_params.class='Economy';
    url_params.airline='';
    url_params.carrier='';
    url_params.ver='V2';
    url_params.type='json';
    url_params.page='';
    url_params.search_ver='V2';
    url_params.cc=1;
    url_params.rhc=1;

    //time
    url_params.sd= new Date().getTime();

    //check for international or domestic and set
    if(!json_data.isInternational){
        url_params.intl='n';    
    }
    else{
        // url_params.dls='y';    
        url_params.intl='y';
    }
    

    //check for trip type and set
    url_params.trip_type='OneWay';

    if(json_data['isReturn']){
        //return trip
        url_params.trip_type='RoundTrip';
        url_params.return_date=date_in_ct_format(json_data['returnDate']);
    }


    var url = "https://www.cleartrip.com/flights/results/airjson?"
    if(json_data.isInternational){
        // url="https://www.cleartrip.com/flights/results/intlairjson?";
    }

    var url_string_params =encode_json_to_url(url_params);

    url=url+url_string_params;

    var ct_req= {
        "type":"GET",
        "url":url,

    };

    var dyn_req = backPostGet(ct_req);

    dyn_req.done(function(res){
        $("#mc_ct_load").remove();
        console.log('success got clear trip data');
        // $.toast('success got clear trip data');
        console.log('calling ct procees data')

        console.log('response');

        res=JSON.parse(res);
        console.log(processClearTripData(res,json_data.isReturn,json_data.isInternational));

        console.log('end of call back');
    });

    dyn_req.fail(function(res){
        $("#mc_ct_load").remove();
        console.log('failed to get clear trip data');
        // $.toast('failed to get clear trip data');
    });

}

function  processClearTripData(ct_json_out,is_return,is_international){
    var faresMap = {};
    if (ct_json_out.hasOwnProperty('fare')){
        console.log('fare is available');
        // for eachFare, rateData in ct_json_out['fare'].iteritems():
        //     if 'dfd' in rateData:
        //         mapDigit = rateData['dfd']
        //         price = rateData[mapDigit]['pr']
        //         faresMap[eachFare] = price

        for(var eachFare in ct_json_out['fare']){
            var rateData=ct_json_out['fare'][eachFare];

            if(rateData.hasOwnProperty('dfd')){
                var mapDigit = rateData['dfd']
                var price = rateData[mapDigit]['pr']
                faresMap[eachFare] = price

            }
        }
    
    }
    console.log('fares map')

    console.log(faresMap);

    var contentMap = {}
    
    /*if 'content' in ct_json_out:
        contentMap = ct_json_out['content']
    */

    if (ct_json_out.hasOwnProperty('content')){
        contentMap = ct_json_out['content']
    }
    
    console.log('content Map');

    console.log(contentMap);

    var airlineMap = {}
    
    // if 'jsons' in ct_json_out and 'airline_names' in ct_json_out['jsons']:
    //     airlineMap = ct_json_out['jsons']['airline_names']
    
    if( ct_json_out.hasOwnProperty('jsons') && ct_json_out['jsons'].hasOwnProperty('airline_names')){
        airlineMap = ct_json_out['jsons']['airline_names']
    }
    
    console.log('airlinemap');
    console.log(airlineMap);

    var lowestDeptPrice = 0
    var lowestArrPrice = 0
    var lowestDeptFlights = [];
    var lowestArrFlights = [];
    var isMulti = false;
    if(ct_json_out.hasOwnProperty('mapping')){

        if(ct_json_out['mapping'].hasOwnProperty('onward')){


            for(var eachOnwardDatakey in ct_json_out['mapping']['onward']){
                
                var eachOnwardData=ct_json_out['mapping']['onward'][eachOnwardDatakey];

                var cData = eachOnwardData['c']
                if(cData){
                    if(cData[0].constructor === Array){
                        cData=cData[0];
                    }
                }

                var fareNum = eachOnwardData['f']
                

                if(cData && faresMap.hasOwnProperty(parseInt(fareNum)) ){
                    var onwardPrice = faresMap[fareNum]
                    if (typeof(cData[0])=='string'){
                        if (lowestDeptPrice > 0){
                            if(onwardPrice < lowestDeptPrice){
                                lowestDeptPrice = onwardPrice
                                lowestDeptFlights = cData
                            }
                        }

                        else{
                            lowestDeptPrice = onwardPrice
                            lowestDeptFlights = cData
                        }
                    }

                    else{
                        isMulti = true
                        if(lowestDeptPrice > 0){
                            if(onwardPrice < lowestDeptPrice){
                                lowestDeptPrice = onwardPrice
                                lowestArrPrice = onwardPrice
                                lowestDeptFlights = cData[0]
                                lowestArrFlights = cData[1]
                            }
                        }
                        else{
                            lowestDeptPrice = onwardPrice
                            lowestArrPrice = onwardPrice
                            lowestDeptFlights = cData[0]
                            lowestArrFlights = cData[1]
                        }
                    }
                }            
            }
        }

        console.log('lowest dept price');
        console.log(lowestDeptPrice);

        console.log('lowest dept flights');
        console.log(lowestDeptFlights);


        if(ct_json_out['mapping'].hasOwnProperty('return')){
            console.log('mapping has property return')

            for(var eachOnwardDatakey in ct_json_out['mapping']['return']){
                var eachOnwardData=ct_json_out['mapping']['return'][eachOnwardDatakey];
                var cData = eachOnwardData['c'];
                if(cData){
                    if(cData[0].constructor === Array){
                        cData=cData[0];
                    }
                }
                var fareNum = eachOnwardData['f'];

                console.log('return loop');

                console.log('cData');
                console.log(cData);

                console.log('fareNum');
                console.log(fareNum);


                if(cData && faresMap.hasOwnProperty(parseInt(fareNum))){
                    console.log('cdata and farenum found');
                    var returnPrice = faresMap[fareNum]
                    if (typeof(cData[0])=='string'){
                        if (lowestArrPrice > 0){
                            if( returnPrice < lowestArrPrice){
                                lowestArrPrice = returnPrice
                                lowestArrFlights = cData
                            }
                        }
                        else{
                            lowestArrPrice = returnPrice
                            lowestArrFlights = cData
                        }
                    }
                    else{
                        isMulti = true
                        if (lowestArrPrice > 0){
                            if (returnPrice < lowestArrPrice){
                                lowestDeptPrice = returnPrice
                                lowestArrPrice = returnPrice
                                lowestDeptFlights = cData[0]
                                lowestArrFlights = cData[1]
                            }
                        }
                        else{
                            lowestDeptPrice = returnPrice
                            lowestArrPrice = returnPrice
                            lowestDeptFlights = cData[0]
                            lowestArrFlights = cData[1]
                        }
                    }
                }
            }
        }

        console.log('is_international');
        console.log(is_international);

        console.log('is_return');
        console.log(is_return);

        if(is_international && is_return){
            console.log('international return trip')

            for(var eachOnwardDatakey in ct_json_out['mapping']['onward']){
                var eachOnwardData=ct_json_out['mapping']['onward'][eachOnwardDatakey];
                var cData = eachOnwardData['c'];
                if(cData){
                    if(cData[0].constructor === Array){
                        cData=cData[1];
                    }
                }
                var fareNum = eachOnwardData['f'];

                console.log('return loop');

                console.log('cData');
                console.log(cData);

                console.log('fareNum');
                console.log(fareNum);


                if(cData && faresMap.hasOwnProperty(parseInt(fareNum))){
                    console.log('cdata and farenum found');
                    var returnPrice = faresMap[fareNum]
                    if (typeof(cData[0])=='string'){
                        if (lowestArrPrice > 0){
                            if( returnPrice < lowestArrPrice){
                                lowestArrPrice = returnPrice
                                lowestArrFlights = cData
                            }
                        }
                        else{
                            lowestArrPrice = returnPrice
                            lowestArrFlights = cData
                        }
                    }
                    else{
                        isMulti = true
                        if (lowestArrPrice > 0){
                            if (returnPrice < lowestArrPrice){
                                lowestDeptPrice = returnPrice
                                lowestArrPrice = returnPrice
                                lowestDeptFlights = cData[0]
                                lowestArrFlights = cData[1]
                            }
                        }
                        else{
                            lowestDeptPrice = returnPrice
                            lowestArrPrice = returnPrice
                            lowestDeptFlights = cData[0]
                            lowestArrFlights = cData[1]
                        }
                    }
                }
            }
        }



    }

    console.log('contentMap');
    console.log(contentMap);

    console.log('lowestDeptFlights');
    console.log(lowestDeptFlights);

    console.log('airlineMap');
    console.log(airlineMap);

    console.log('lowestArrPrice');
    console.log(lowestArrPrice);


    var deptData = {'isFound': false}
    var arrData = {'isFound': false}
    if (lowestDeptPrice > 0 && lowestDeptFlights){
        deptData = getCTFlightContent(contentMap, lowestDeptFlights, airlineMap);

    }

    if(lowestArrPrice > 0 && lowestArrFlights){
        console.log('getting arrval data');
        arrData = getCTFlightContent(contentMap, lowestArrFlights, airlineMap)
    }

    if (isMulti){
        lowestPrice = lowestDeptPrice
    }
    else{
        // lowestPrice = lowestDeptPrice + lowestArrPrice
        lowestPrice = lowestDeptPrice;
        if(!is_international){
            lowestPrice = lowestDeptPrice + lowestArrPrice;
        }    
    }

    // insert card here

    if(lowestPrice!=''){
        var card_str=make_flights_card({'site':'ct', 'low_price':lowestPrice, 'dept_data':deptData, 'arr_data':arrData});

        insert_flights_card(card_str);

    }
    
    return {'site':'ct', 'low_price':lowestPrice, 'dept_data':deptData, 'arr_data':arrData};


}



function getCTFlightContent(contentMap, contentList, airlineMap){

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var i=0;

    console.log('contentList');

    console.log(contentList);

    var curContent,arrivalDate,duration,arrivalTime
    try{
        var isFound = false;
        var details = {};
        var isFirst = true;
        var sdate,edate;

        // for (var eachContent in contentList){
        for(i=0;i<contentList.length;i++){
            var eachContent=contentList[i];
            console.log('eachcontent');
            console.log(eachContent);

            if (contentMap.hasOwnProperty(parseInt(eachContent))){
                console.log('content map has the property');
                curContent = contentMap[eachContent];

                isFound = true;
                arrivalDate = curContent['ad'];
                duration = curContent['dr'];
                arrivalTime = curContent['a'];

                // (startDateTime, endDateTime) = getCTFlightDateTime(arrivalDate, duration, arrivalTime)
                var times_obj=getCTFlightDateTime(arrivalDate, duration, arrivalTime);
                var startDateTime=new Date(times_obj.startDateTime);
                var endDateTime=new Date(times_obj.endDateTime);

                // details['duration']=Math.ceil(duration/3600);
                // details['duration']    =Math.round((duration/3600) * 10) / 10;
                
                if (isFirst){
                    isFirst = false;
                    // details['deptDate'] = startDateTime.strftime('%d %b')
                    sdate=startDateTime.getTime();
                    details['deptDate']=startDateTime.getDate() + ' '+monthNames[startDateTime.getMonth()];

                    // details['deptTime'] = startDateTime.strftime('%H:%M')
                    details['deptTime']=startDateTime.getHours() + ':'+startDateTime.getMinutes();
                    

                    var flightCode = curContent['fk'];
                    var alCode = flightCode.split('_')[1].split('-')[0];
                    if(alCode=='INTERNATIONAL'){
                        alCode = flightCode.split('_')[2].split('-')[0];
                    }
                    console.log('alcode');
                    console.log(alCode);
                    var airlineName = '';
                    if(airlineMap.hasOwnProperty(alCode)){
                        
                        airlineName = airlineMap[alCode];
                    }
                    details['airlineName'] = airlineName;
                }
                // details['arrDate'] = endDateTime.strftime('%d %b')
                // details['arrTime'] = endDateTime.strftime('%H:%M')

                details['arrDate']=endDateTime.getDate() + ' '+monthNames[endDateTime.getMonth()];    

                details['arrTime']=endDateTime.getHours() + ':'+endDateTime.getMinutes();
                edate=endDateTime.getTime();
            }
        }
        details['duration']    =parseInt(Math.abs(edate - sdate) / 36e5);
        details['stops'] = contentList.length - 1
        details['isFound'] = isFound
        return details
    }
    catch(e){
        console.log(e);
    }
}







function getCTFlightDateTime(arrivalDate, duration, arrivalTime){
    try{
        var arrivalDate_arr=arrivalDate.split('/');

        console.log('arrival date arr');

        console.log(arrivalDate_arr);

        // endDate = datetime.strptime(arrivalDate, "%d/%m/%Y")

        var endDate=new Date(arrivalDate_arr[2],arrivalDate_arr[1]-1,arrivalDate_arr[0])

        console.log(endDate);

        var timeSplit = arrivalTime.split(':');

        // endDateTime = endDate.replace(hour=int(timeSplit[0]), minute=int(timeSplit[1]))
        endDate.setHours(timeSplit[0]);
        endDate.setMinutes(timeSplit[1]);


        // startDateTime = endDateTime - timedelta(seconds=duration)

        //copying end date
        var startDateTime=new Date(endDate.getTime());
        startDateTime.setSeconds(startDateTime.getSeconds()-duration);



        return {'startDateTime':startDateTime, 'endDateTime':endDate};
    }
    catch(e){
        console.log(e);
    }
}


//emt

function get_emt_data(req_data){

    var month_map={'jan':'01','feb':'02','mar':'03','apr':'04','may':'05','jun':'06','jul':'07','aug':'08','sep':'09','oct':'10','nov':'11','dec':'12'}
    var date_to_convert,o_date,r_date;


    var xml_req="";

    if(req_data.isReturn){

        date_to_convert=req_data.depatureDate.split(' ');
        o_date=date_to_convert[2]+'-'+month_map[date_to_convert[0].toLowerCase()]+'-'+('0'+date_to_convert[1]).slice(-2);

        date_to_convert=req_data.returnDate.split(' ');
        r_date=date_to_convert[2]+'-'+month_map[date_to_convert[0].toLowerCase()]+'-'+('0'+date_to_convert[1]).slice(-2);

        xml_req += "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
        xml_req += "<soap12:Envelope";
        xml_req += "    xmlns:soap12=\"http:\/\/www.w3.org\/2003\/05\/soap-envelope\"";
        xml_req += "    xmlns:xsd=\"http:\/\/www.w3.org\/2001\/XMLSchema\"";
        xml_req += "    xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\">";
        xml_req += "    <soap12:Body>";
        xml_req += "        <SearchFlightAvailability";
        xml_req += "            xmlns=\"http:\/\/tempuri.org\/\">";
        xml_req += "            <flightSearchRequest_>";
        xml_req += "                <Origin>"+req_data.fromCityCode+"<\/Origin>";
        xml_req += "                <Destination>"+req_data.toCityCode+"<\/Destination>";
        xml_req += "                <ReturnOrigin>"+req_data.toCityCode+"<\/ReturnOrigin>";
        xml_req += "                <ReturnDestination>"+req_data.fromCityCode+"<\/ReturnDestination>";
        xml_req += "                <DepartureDate>"+o_date+"<\/DepartureDate>";
        xml_req += "                <ReturnDate>"+r_date+"<\/ReturnDate>";
        xml_req += "                <!-- <DepartureTime>#DEPARTURE_TIME#<\/DepartureTime> -->";
        xml_req += "                <!--  <ReturnTime>#ARRIVAL_TIME#<\/ReturnTime> -->";
        xml_req += "                <NumberOfAdults>"+req_data.nAdults+"<\/NumberOfAdults>";
        xml_req += "                <NumberOfChildren>"+req_data.nChilds+"<\/NumberOfChildren>";
        xml_req += "                <NumberOfInfants>"+req_data.nInfants+"<\/NumberOfInfants>";
        xml_req += "                <AirlinePreference>ECONOMY<\/AirlinePreference>";
        xml_req += "                <TypeOfTrip>ROUNDTRIP<\/TypeOfTrip>";
        xml_req += "                <EMTAuthentication>";
        xml_req += "                    <UserName>android_test<\/UserName>";
        xml_req += "                    <Password>android_test<\/Password>";
        xml_req += "                    <UserType>EmtApi<\/UserType>";
        xml_req += "                <\/EMTAuthentication>";
        xml_req += "            <\/flightSearchRequest_>";
        xml_req += "        <\/SearchFlightAvailability>";
        xml_req += "    <\/soap12:Body>";
        xml_req += "<\/soap12:Envelope>";    
    }
    else{
        
        date_to_convert=req_data.depatureDate.split(' ');
        o_date=date_to_convert[2]+'-'+month_map[date_to_convert[0].toLowerCase()]+'-'+('0'+date_to_convert[1]).slice(-2);

        xml_req += "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
        xml_req += "<soap12:Envelope";
        xml_req += "    xmlns:soap12=\"http:\/\/www.w3.org\/2003\/05\/soap-envelope\"";
        xml_req += "    xmlns:xsd=\"http:\/\/www.w3.org\/2001\/XMLSchema\"";
        xml_req += "    xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\">";
        xml_req += "    <soap12:Body>";
        xml_req += "        <SearchFlightAvailability";
        xml_req += "            xmlns=\"http:\/\/tempuri.org\/\">";
        xml_req += "            <flightSearchRequest_>";
        xml_req += "                <Origin>"+req_data.fromCityCode+"<\/Origin>";
        xml_req += "                <Destination>"+req_data.toCityCode+"<\/Destination>";
        xml_req += "                <DepartureDate>"+o_date+"<\/DepartureDate>";
        xml_req += "                <NumberOfAdults>"+req_data.nAdults+"<\/NumberOfAdults>";
        xml_req += "                <NumberOfChildren>"+req_data.nChilds+"<\/NumberOfChildren>";
        xml_req += "                <NumberOfInfants>"+req_data.nInfants+"<\/NumberOfInfants>";
        xml_req += "                <AirlinePreference>#AIRLINEPREFERNCE#<\/AirlinePreference>";
        xml_req += "                <TypeOfTrip>ONEWAY<\/TypeOfTrip>";
        xml_req += "                <EMTAuthentication>";
        xml_req += "                    <UserName>android_test<\/UserName>";
        xml_req += "                    <Password>android_test<\/Password>";
        xml_req += "                    <UserType>EmtApi<\/UserType>";
        xml_req += "                <\/EMTAuthentication>";
        xml_req += "            <\/flightSearchRequest_>";
        xml_req += "        <\/SearchFlightAvailability>";
        xml_req += "    <\/soap12:Body>";
        xml_req += "<\/soap12:Envelope>";


    }

    if(!req_data.isInternational){

         var req_send = backPostGet_get_easemt_trip_data({
               type: "post",
               url: "https://emtxml.bookeasytrip.com/emtxml.asmx",
               processData: false,
               data: xml_req,
               contentType: "application/soap+xml",
               timeout: 70000,
           });


    }
    else{
          var req_send = backPostGet_get_easemt_trip_int_data({
               type: "post",
               url: "https://emtxml.bookeasytrip.com/emtxml.asmx",
               processData: false,
               data: xml_req,
               contentType: "application/soap+xml",
               timeout: 70000,
            });

    }


 


   req_send.done(function(response){
            
        $("#mc_emt_load").remove();
        var months_arr=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
       console.log(response);
       console.log('success got data');

       var arr_data={};
       var dept_data={};

       if(response.onward_trip.length<=0 ||  !response.onward_trip[0].price){
           return;
       }

       var onward_flights = response.onward_trip.sort(function(a,b){return a.price - b.price});
       var lowest_price = onward_flights[0].price;

       if(lowest_price){
           console.log('emt lowest');
           console.log(onward_flights);

           dept_data.isFound=true;
           dept_data.airlineName=onward_flights[0].cn;
           dept_data.arrDate= onward_flights[0].ed.split(' ')[1] + ' '+ months_arr[onward_flights[0].ed.split(' ')[0]];
           dept_data.arrTime= onward_flights[0].et;
           dept_data.deptDate=onward_flights[0].sd.split(' ')[1] + ' '+ months_arr[onward_flights[0].sd.split(' ')[0]];
           dept_data.deptTime=onward_flights[0].st;
           dept_data.duration=(onward_flights[0].dur/60)<1 ? 1 : parseInt(onward_flights[0].dur/60);
           dept_data.stops=onward_flights[0].stops-1;


       }
       else{
           dept_data.isFound=false;    
       }

       console.log(response.return_trip);
       if(response.return_trip.length>0){


           return_flights = response.return_trip.sort(function(a,b){return a.price - b.price});

           console.log(return_flights);

           lowest_price += return_flights[0].price;

          arr_data.isFound=true;
           arr_data.airlineName=return_flights[0].cn;
           arr_data.arrDate= return_flights[0].ed.split(' ')[1] + ' '+ months_arr[return_flights[0].ed.split(' ')[0]];
           arr_data.arrTime= return_flights[0].et;
           arr_data.deptDate=return_flights[0].sd.split(' ')[1] + ' '+ months_arr[return_flights[0].sd.split(' ')[0]];
           arr_data.deptTime=return_flights[0].st;
           arr_data.duration=(return_flights[0].dur/60)<1 ? 1 : parseInt(return_flights[0].dur/60);
           arr_data.stops=return_flights[0].stops-1;

       }
       else{
           arr_data.isFound=false;
       }

       if(req_data.isInternational && req_data.isReturn){
           lowest_price=lowest_price/2;
       }

      console.log('emt');
       console.log({'site':'emt', 'low_price':lowest_price, 'dept_data':dept_data, 'arr_data':arr_data});

       var card_str=make_flights_card({'site':'emt', 'low_price':lowest_price, 'dept_data':dept_data, 'arr_data':arr_data});



       insert_flights_card(card_str);
   });


   req_send.fail(function(){
       $("#mc_emt_load").remove();
       console.log('fail');
   });
   
}

var gb_test;
var fin_gb_data=[];

function get_goibibo_data(json_data){
    var link= "https://thor.goibibo.com/v1/thor/rest/new/flight/search?application=fbs&flavour=v2&mime=html&script=y&actionData=[{%22query%22:%22air-MAA-BLR-20170109--1-0-0-E-100--%22}]"

    var nAdults,nChilds,nInfants;

    var action_data;

    if(json_data.nAdults){
        nAdults=json_data.nAdults;
    }
    else{
        nAdults=0;
    }

    if(json_data.nChilds){
        nChilds=json_data.nChilds;
    }
    else{
        nChilds=0;
    }

    if(json_data.nInfants){
        nInfants=json_data.nInfants;
    }
    else{
        nInfants=0;
    }

    if(json_data.isReturn){
        action_data='[{"query":"air-'+json_data.fromCityCode+'-'+json_data.toCityCode+'-'+json_data.depatureDate.split(' ')[2]+month_name_to_num_map[json_data.depatureDate.split(' ')[0].toLowerCase()]+('0'+json_data.depatureDate.split(' ')[1]).slice(-2)+'-'+json_data.returnDate.split(' ')[2]+month_name_to_num_map[json_data.returnDate.split(' ')[0].toLowerCase()]+('0'+json_data.returnDate.split(' ')[1]).slice(-2)+'-'+nAdults+'-'+nChilds+'-'+nInfants+'-'+'E-100--"}]';
        if(json_data.isInternational){
            action_data='[{"query":"air-'+json_data.fromCityCode+'-'+json_data.toCityCode+'-'+json_data.depatureDate.split(' ')[2]+month_name_to_num_map[json_data.depatureDate.split(' ')[0].toLowerCase()]+('0'+json_data.depatureDate.split(' ')[1]).slice(-2)+'-'+json_data.returnDate.split(' ')[2]+month_name_to_num_map[json_data.returnDate.split(' ')[0].toLowerCase()]+('0'+json_data.returnDate.split(' ')[1]).slice(-2)+'-'+nAdults+'-'+nChilds+'-'+nInfants+'-'+'E-0--"}]';
        }
    }
    else{
        action_data='[{"query":"air-'+json_data.fromCityCode+'-'+json_data.toCityCode+'-'+json_data.depatureDate.split(' ')[2]+month_name_to_num_map[json_data.depatureDate.split(' ')[0].toLowerCase()]+('0'+json_data.depatureDate.split(' ')[1]).slice(-2)+'-'+'-'+nAdults+'-'+nChilds+'-'+nInfants+'-'+'E-100--"}]';
        if(json_data.isInternational){
            action_data='[{"query":"air-'+json_data.fromCityCode+'-'+json_data.toCityCode+'-'+json_data.depatureDate.split(' ')[2]+month_name_to_num_map[json_data.depatureDate.split(' ')[0].toLowerCase()]+('0'+json_data.depatureDate.split(' ')[1]).slice(-2)+'-'+'-'+nAdults+'-'+nChilds+'-'+nInfants+'-'+'E-0--"}]';
        }    
    }

    // link= "https://thor.goibibo.com/v1/thor/rest/new/flight/search?application=fbs&flavour=v2&mime=html&script=y&actionData="+encodeURI(action_data);

    if(!json_data.isInternational){
        link= "https://thor.goibibo.com/v1/thor/rest/mobile/flight/search?userid=asd&application=fbs&flavour=android&mime=json&actionData="+encodeURI(action_data);    
    }
    else{
        link= "https://thor.goibibo.com/v1/thor/rest/internationalflight/search/?application=fbs&flavour=android&mime=json&actionData="+action_data;

        // link="https://thor.goibibo.com/v1/thor/rest/internationalflight/search/?userid=asd&application=fbs&mime=json&actionData="+action_data+"&versioncode=370&flavour=android"
    }
    console.log(link);

    var req = backPostGet({
        type: "GET",
        url:link
    });

    req.done(function(response){

        $("#mc_gb_load").remove();
        gb_test=response;
        // var data = $.parseHTML(response,true);

        var all_data = [];

        var onward_flights=[];
        var return_flights=[];

        var flight_pairs=[];

        // for(var i=0; i<data.length;i++){
        //     if($(data[i]).prop('tagName')=="SCRIPT"){
        //         var data_str= $(data[i]).text();

        //         var s_index= data_str.indexOf('({') + 1;
        //         var e_index = data_str.indexOf(", '*')");

        //         var data_json= JSON.parse(data_str.slice(s_index,e_index));

        //         fin_gb_data.push(data_json);    

        //     }
        // }

        var data = response.split("\n");
        console.log(data);

        for(var i=0; i<data.length;i++){
            console.log(i);
            if(data[i]!==""){
                var data_json = JSON.parse(data[i]); 
                fin_gb_data.push(data_json.data);
            }
        }

        if((json_data.isInternational && ! json_data.isReturn) || (!json_data.isInternational)){

            for(var i=0; i<fin_gb_data.length; i++){
                var t_data = fin_gb_data[i];
                if(t_data.hasOwnProperty('onwardflights')){
                    var ow_flights = t_data['onwardflights'];
                    for(var j=0;j<ow_flights.length;j++){

                        var pr, ns, du, sd, st, ed, et,stms,etms,type,cn,fr,to;

                        fr = ow_flights[j]['fl'][0]['fr'];
            
                        pr= ow_flights[j]['fd']['tf'];
                        ns= ow_flights[j]['ns'];
                        du=ow_flights[j]['du'].split('h')[0];

                        sd=ow_flights[j]['fl'][0]['dd'].split('-')[2]+' '+monthNames[parseInt(ow_flights[j]['fl'][0]['dd'].split('-')[1])-1];
                        st=ow_flights[j]['fl'][0]['dt'];

                        var li =ow_flights[j]['fl'].length-1; 
                        to = ow_flights[j]['fl'][li]['to'];

                        ed=ow_flights[j]['fl'][li]['ad'].split('-')[2]+' '+monthNames[parseInt(ow_flights[j]['fl'][li]['ad'].split('-')[1])-1];
                        et=ow_flights[j]['fl'][li]['at'];

                        stms = new Date(ow_flights[j]['fl'][0]['dd'].split('-')[0],ow_flights[j]['fl'][0]['dd'].split('-')[1]-1,ow_flights[j]['fl'][0]['dd'].split('-')[2],ow_flights[j]['fl'][0]['dt'].split(':')[0],ow_flights[j]['fl'][0]['dt'].split(':')[1]).getTime();
                        
                        etms = new Date(ow_flights[j]['fl'][li]['ad'].split('-')[0],ow_flights[j]['fl'][li]['ad'].split('-')[1]-1,ow_flights[j]['fl'][li]['ad'].split('-')[2],ow_flights[j]['fl'][li]['at'].split(':')[0],ow_flights[j]['fl'][li]['at'].split(':')[1]).getTime();

                        cn = ow_flights[j]['fl'][0]['an']

                        for(var k=1; k<ow_flights[j]['fl'].length;k++){

                            if(cn != ow_flights[j]['fl'][k]['an']){
                                cn = 'Multiple Carrier';
                                break;
                            }
                        }

                        if( journey_deets.fromCityCode == fr && journey_deets.toCityCode == to){
                            onward_flights.push({'pr':parseInt(pr),'ns':ns,'du':du,'sd':sd,'st':st,'ed':ed,'et':et,'stms':stms,'etms':etms,'cn':cn});    
                        }
                      
                    }
                

                }
            }

        }


        if(json_data.isReturn && !json_data.isInternational){

            for(var i=0; i<fin_gb_data.length; i++){
                var t_data = fin_gb_data[i];
                if(t_data.hasOwnProperty('returnflights')){

                    var ow_flights = t_data['returnflights'];
                    
                    for(var j=0;j<ow_flights.length;j++){
                        //price, number_of_stops, duration, start_date, start_time, end_date, end_time, start_time_milli_seconds, end_time_milli_seconds, carrier name, trip_type, from, to
                        var pr, ns, du, sd, st, ed, et,stms,etms,type,cn,fr,to;
                        
                        fr = ow_flights[j]['fl'][0]['fr'];


                        pr= ow_flights[j]['fd']['tf'];
                        ns= ow_flights[j]['ns'];
                        du=ow_flights[j]['du'].split('h')[0];

                        sd=ow_flights[j]['fl'][0]['dd'].split('-')[2]+' '+monthNames[parseInt(ow_flights[j]['fl'][0]['dd'].split('-')[1])-1];
                        st=ow_flights[j]['fl'][0]['dt'];

                        var li =ow_flights[j]['fl'].length-1; 

                        to = ow_flights[j]['fl'][li]['to'];

                        ed=ow_flights[j]['fl'][li]['ad'].split('-')[2]+' '+monthNames[parseInt(ow_flights[j]['fl'][li]['ad'].split('-')[1])-1];
                        et=ow_flights[j]['fl'][li]['at'];

                        stms = new Date(ow_flights[j]['fl'][0]['dd'].split('-')[0],ow_flights[j]['fl'][0]['dd'].split('-')[1]-1,ow_flights[j]['fl'][0]['dd'].split('-')[2],ow_flights[j]['fl'][0]['dt'].split(':')[0],ow_flights[j]['fl'][0]['dt'].split(':')[1]).getTime();
                        
                        etms = new Date(ow_flights[j]['fl'][li]['ad'].split('-')[0],ow_flights[j]['fl'][li]['ad'].split('-')[1]-1,ow_flights[j]['fl'][li]['ad'].split('-')[2],ow_flights[j]['fl'][li]['at'].split(':')[0],ow_flights[j]['fl'][li]['at'].split(':')[1]).getTime();

                        cn = ow_flights[j]['fl'][0]['an']

                        for(var k=1; k<ow_flights[j]['fl'].length;k++){

                            if(cn != ow_flights[j]['fl'][k]['an']){
                                cn = 'Multiple Carrier';
                                break;
                            }
                        }
                        if( journey_deets.fromCityCode == to && journey_deets.toCityCode == fr){
                            return_flights.push({'pr':parseInt(pr),'ns':ns,'du':du,'sd':sd,'st':st,'ed':ed,'et':et,'stms':stms,'etms':etms,'cn':cn});    
                        }
                    
                    }    

                }

            }
        }


        if((json_data.isInternational && json_data.isReturn)){

            for(var i=0; i<fin_gb_data.length; i++){
                var t_data = fin_gb_data[i];
                if(t_data.hasOwnProperty('onwardflights')){
                    var ow_flights = t_data['onwardflights'];
                    for(var j=0;j<ow_flights.length;j++){

                        var pr, ns, du, sd, st, ed, et,stms,etms,type,cn,fr,to;

                        fr = ow_flights[j]['fl'][0]['fr'];
            
                        pr= ow_flights[j]['fd']['tf'];
                        ns= ow_flights[j]['ns'];
                        du=ow_flights[j]['du'].split('h')[0];

                        sd=ow_flights[j]['fl'][0]['dd'].split('-')[2]+' '+monthNames[parseInt(ow_flights[j]['fl'][0]['dd'].split('-')[1])-1];
                        st=ow_flights[j]['fl'][0]['dt'];

                        var li =ow_flights[j]['fl'].length-1; 
                        to = ow_flights[j]['fl'][li]['to'];

                        ed=ow_flights[j]['fl'][li]['ad'].split('-')[2]+' '+monthNames[parseInt(ow_flights[j]['fl'][li]['ad'].split('-')[1])-1];
                        et=ow_flights[j]['fl'][li]['at'];

                        stms = new Date(ow_flights[j]['fl'][0]['dd'].split('-')[0],ow_flights[j]['fl'][0]['dd'].split('-')[1]-1,ow_flights[j]['fl'][0]['dd'].split('-')[2],ow_flights[j]['fl'][0]['dt'].split(':')[0],ow_flights[j]['fl'][0]['dt'].split(':')[1]).getTime();
                        
                        etms = new Date(ow_flights[j]['fl'][li]['ad'].split('-')[0],ow_flights[j]['fl'][li]['ad'].split('-')[1]-1,ow_flights[j]['fl'][li]['ad'].split('-')[2],ow_flights[j]['fl'][li]['at'].split(':')[0],ow_flights[j]['fl'][li]['at'].split(':')[1]).getTime();

                        cn = ow_flights[j]['fl'][0]['an']

                        for(var k=1; k<ow_flights[j]['fl'].length;k++){

                            if(cn != ow_flights[j]['fl'][k]['an']){
                                cn = 'Multiple Carrier';
                                break;
                            }
                        }
                        var oflight='';
                        if( journey_deets.fromCityCode == fr && journey_deets.toCityCode == to){
                            // onward_flights.push({'pr':parseInt(pr),'ns':ns,'du':du,'sd':sd,'st':st,'ed':ed,'et':et,'stms':stms,'etms':etms,'cn':cn});    
                            oflight = {'pr':parseInt(pr),'ns':ns,'du':du,'sd':sd,'st':st,'ed':ed,'et':et,'stms':stms,'etms':etms,'cn':cn};
                        }


                        if(ow_flights[j].hasOwnProperty('rfls')){
                            var rtfl = ow_flights[j]['rfls'];

                            fr = rtfl['fl'][0]['fr'];
                
                            // pr= rtfl['fd']['tf'];
                            ns= rtfl['ns'];
                            du=rtfl['du'].split('h')[0];

                            sd=rtfl['fl'][0]['dd'].split('-')[2]+' '+monthNames[parseInt(rtfl['fl'][0]['dd'].split('-')[1])-1];
                            st=rtfl['fl'][0]['dt'];

                            var li =rtfl['fl'].length-1; 
                            to = rtfl['fl'][li]['to'];

                            ed=rtfl['fl'][li]['ad'].split('-')[2]+' '+monthNames[parseInt(rtfl['fl'][li]['ad'].split('-')[1])-1];
                            et=rtfl['fl'][li]['at'];

                            stms = new Date(rtfl['fl'][0]['dd'].split('-')[0],rtfl['fl'][0]['dd'].split('-')[1]-1,rtfl['fl'][0]['dd'].split('-')[2],rtfl['fl'][0]['dt'].split(':')[0],rtfl['fl'][0]['dt'].split(':')[1]).getTime();
                            
                            etms = new Date(rtfl['fl'][li]['ad'].split('-')[0],rtfl['fl'][li]['ad'].split('-')[1]-1,rtfl['fl'][li]['ad'].split('-')[2],rtfl['fl'][li]['at'].split(':')[0],rtfl['fl'][li]['at'].split(':')[1]).getTime();

                            cn = rtfl['fl'][0]['an']

                            for(var k=1; k<rtfl['fl'].length;k++){

                                if(cn != rtfl['fl'][k]['an']){
                                    cn = 'Multiple Carrier';
                                    break;
                                }
                            }
                            var rflight='';
                            if( journey_deets.fromCityCode == to && journey_deets.toCityCode == fr){
                                // return_flights.push({'pr':parseInt(pr),'ns':ns,'du':du,'sd':sd,'st':st,'ed':ed,'et':et,'stms':stms,'etms':etms,'cn':cn});
                                rflight={'pr':parseInt(pr),'ns':ns,'du':du,'sd':sd,'st':st,'ed':ed,'et':et,'stms':stms,'etms':etms,'cn':cn};    
                            }

                            if(oflight !='' && rflight!=''){
                                oflight.rf=rflight;
                                flight_pairs.push(oflight);
                            }
                            

                        }
                      
                    }
                

                }
            }

        }


    if(json_data.isInternational && json_data.isReturn){
        flights_pair_sorted = flight_pairs.sort(function(a,b){return a.pr - b.pr});

        console.log('flight_pairs_sorted');
        console.log(flights_pair_sorted);

        return_flights.push(flights_pair_sorted[0].rf);
        onward_flights.push(flights_pair_sorted[0]);
    }


    var ow_flights_sorted= onward_flights.sort(function(a,b){return a.pr - b.pr});

    var lowest_price = onward_flights[0].pr;
    var dept_data={};
    var arr_data={};

    if(lowest_price){
           console.log('gb lowest onward flights');
           console.log(ow_flights_sorted);

           dept_data.isFound=true;
           dept_data.airlineName=ow_flights_sorted[0].cn;
           dept_data.arrDate= ow_flights_sorted[0].ed;
           dept_data.arrTime= ow_flights_sorted[0].et;
           dept_data.deptDate=ow_flights_sorted[0].sd;
           dept_data.deptTime=ow_flights_sorted[0].st;
           dept_data.duration=ow_flights_sorted[0].du;
           dept_data.stops=ow_flights_sorted[0].ns


    }
    else{
           dept_data.isFound=false;    
    }

    if(return_flights.length>0){
        var r_flights_sorted= return_flights.sort(function(a,b){return a.pr - b.pr});

           console.log('gb lowest return flights');
           console.log(r_flights_sorted);


           lowest_price += return_flights[0].pr;
          arr_data.isFound=true;
           arr_data.airlineName=r_flights_sorted[0].cn;
           arr_data.arrDate= r_flights_sorted[0].ed;
           arr_data.arrTime= r_flights_sorted[0].et;
           arr_data.deptDate=r_flights_sorted[0].sd;
           arr_data.deptTime=r_flights_sorted[0].st;
           arr_data.duration=r_flights_sorted[0].du;
           arr_data.stops=r_flights_sorted[0].ns

    }
    else{
        arr_data.isFound=false;
    }

    if(json_data.isInternational && json_data.isReturn){
        lowest_price=lowest_price/2;
    }

    // console.log({'site':'gb', 'low_price':lowest_price, 'dept_data':dept_data, 'arr_data':arr_data});

    if (lowest_price) {
       var card_str = make_flights_card({'site':'gb', 'low_price':lowest_price, 'dept_data':dept_data, 'arr_data':arr_data});
        insert_flights_card(card_str);

    }

        // fin_gb_data= all_data.splice();
        console.log("%cSuccess","color:green; font-size:20px;");
    });
    
    req.fail(function(){
        $("#mc_gb_load").remove();
    });

}    


function get_musafir_data(){

    var ed,sd,ad,ch,inf,o,d,f;

    if(journey_deets["isReturn"]){
        ed = journey_deets["returnDate"].split(' ')[1] + '/'+(month_name_to_num_map[(journey_deets["returnDate"].split(' ')[0]).toLowerCase()]) + '/' + journey_deets["returnDate"].split(' ')[2];
    }
    sd = journey_deets["depatureDate"].split(' ')[1] + '/'+(month_name_to_num_map[(journey_deets["depatureDate"].split(' ')[0]).toLowerCase()]) + '/' + journey_deets["depatureDate"].split(' ')[2];
    
    if(parseInt(journey_deets["nAdults"])){
        ad = parseInt(journey_deets["nAdults"]);    
    }
    
    if(parseInt(journey_deets["nChilds"])>0){
        ch = parseInt(journey_deets["nChilds"]);
    }

    if(parseInt(journey_deets["nInfants"])>0){
        inf = parseInt(journey_deets["nInfants"]);
    }

    o = journey_deets["fromCityCode"].toUpperCase();
    d = journey_deets["toCityCode"].toUpperCase();

    if(journey_deets["isReturn"]){
        f = 1;
    }
    else{
        f = 0;   
    }

    var c_obj = {"sp":{"p":"1","f":f,"ed":ed,"o":o,"d":d,"sd":sd,"ad":ad,"ch":ch,"in":inf}}

    var req=backPostGet({
                    type: "POST",
                    url: "https://in.musafir.com/Resource/HttpHandler/AjaxRouter.ashx?cmd=search",
                    data: JSON.stringify(c_obj),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 35000,
                });
    req.done(function(response){
        $("#mc_mf_load").remove();
        process_musafir_data(response);
    });

    req.fail(function(){
        $("#mc_mf_load").remove();

    });
}

function process_musafir_data(json_data){
    if(json_data.hasOwnProperty("od")){
        
        var od = json_data["od"];
        var fs = json_data["fs"];
        var ai = json_data["ai"];
        var ds = json_data["ds"];

        var onward_flights = [];
        var return_flights = [];
        var rejected_flights = [];
        
        var rej_ow_flights =[];
        var rej_ret_flights = [];
        if(!(journey_deets.isInternational && journey_deets.isReturn)){
            for(var key in od){
                
                // var od=json_data["od"][key];
                var time_duration_in_minutes = parseInt(od[key]["td"]);

                var fs_arr = od[key]["fs"].slice();

                var fs_last = fs_arr.length -1;

                // getting flight details
                var start_point = fs[fs_arr[0]]["da"];
                var end_point = fs[fs_arr[fs_last]]["aa"];

                var start_time,end_time,start_date,end_date,number_of_stops,price,carrier_name; 
                var temp,temp1;

                start_time = fs[fs_arr[0]]['ddt'].slice(4,6)+ ':'+fs[fs_arr[0]]['ddt'].slice(6,8);
                
                end_time = fs[fs_arr[fs_last]]['adt'].slice(4,6)+ ':'+fs[fs_arr[fs_last]]['adt'].slice(6,8);

                start_date = fs[fs_arr[0]]['ddt'].slice(0,2) + " "+ fs[fs_arr[0]]['ddt'].slice(2,4);

                end_date = fs[fs_arr[fs_last]]['adt'].slice(0,2) + " "+ fs[fs_arr[fs_last]]['adt'].slice(2,4);

                number_of_stops = fs_arr.length -1;

                temp = fs[fs_arr[0]]["ma"];

                if(fs[fs_arr[fs_last]]["ma"] == temp){
                    //same airline
                    carrier_name = ds["al"][temp]['n'];
                }
                else{
                    carrier_name = "Multiple carrier"   
                }

                price = ai[parseInt(key)+1]["pi"]["tp"];

                if((start_point == journey_deets.fromCityCode) && (end_point == journey_deets.toCityCode)){
                    //check for omward journey
                    onward_flights.push({start_time:start_time,end_time:end_time,start_date:start_date,end_date:end_date,number_of_stops:number_of_stops,carrier_name:carrier_name,price:price,"du":time_duration_in_minutes});
                }
                else if((end_point == journey_deets.fromCityCode) && (start_point == journey_deets.toCityCode)){
                    //check for return journey
                    return_flights.push({start_time:start_time,end_time:end_time,start_date:start_date,end_date:end_date,number_of_stops:number_of_stops,carrier_name:carrier_name,price:price,"du":time_duration_in_minutes});
                }
                else{
                    rejected_flights.push({start_time:start_time,end_time:end_time,start_date:start_date,end_date:end_date,number_of_stops:number_of_stops,carrier_name:carrier_name,price:price,start_point:start_point,end_point:end_point}); 
                }

            }

        }
        else{
            console.log("international return flights");
            // international return trip
            od=[];

            for(k in json_data["od"]){
                od.push(json_data["od"][k]);
            }


            for(var key=0 ; key<od.length;key++){
                
                console.log(key);
                // var od=json_data["od"][key];
                var time_duration_in_minutes = parseInt(od[key]["td"]);

                var fs_arr = od[key]["fs"].slice();

                var fs_last = fs_arr.length -1;

                // getting flight details
                var start_point = fs[fs_arr[0]]["da"];
                var end_point = fs[fs_arr[fs_last]]["aa"];

                var start_time,end_time,start_date,end_date,number_of_stops,price,carrier_name; 
                var temp,temp1;

                start_time = fs[fs_arr[0]]['ddt'].slice(4,6)+ ':'+fs[fs_arr[0]]['ddt'].slice(6,8);
                
                end_time = fs[fs_arr[fs_last]]['adt'].slice(4,6)+ ':'+fs[fs_arr[fs_last]]['adt'].slice(6,8);

                start_date = fs[fs_arr[0]]['ddt'].slice(0,2) + " "+ fs[fs_arr[0]]['ddt'].slice(2,4);

                end_date = fs[fs_arr[fs_last]]['adt'].slice(0,2) + " "+ fs[fs_arr[fs_last]]['adt'].slice(2,4);

                number_of_stops = fs_arr.length -1;

                temp = fs[fs_arr[0]]["ma"];

                if(fs[fs_arr[fs_last]]["ma"] == temp){
                    //same airline
                    carrier_name = ds["al"][temp]['n'];
                }
                else{
                    carrier_name = "Multiple carrier"   
                }

                price = ai[parseInt(key/2)+1]["pi"]["tp"];

                if((start_point == journey_deets.fromCityCode) && (end_point == journey_deets.toCityCode)){
                    //check for omward journey
                    onward_flights.push({start_time:start_time,end_time:end_time,start_date:start_date,end_date:end_date,number_of_stops:number_of_stops,carrier_name:carrier_name,price:price,"du":time_duration_in_minutes});
                }
                else{
                    rej_ow_flights.push({start_time:start_time,end_time:end_time,start_date:start_date,end_date:end_date,number_of_stops:number_of_stops,carrier_name:carrier_name,price:price});
                }

                key=key+1;  
                time_duration_in_minutes = parseInt(od[key]["td"]);

                fs_arr = od[key]["fs"].slice();

                fs_last = fs_arr.length -1;

                // getting flight details
                start_point = fs[fs_arr[0]]["da"];
                end_point = fs[fs_arr[fs_last]]["aa"];

                
                start_time = fs[fs_arr[0]]['ddt'].slice(4,6)+ ':'+fs[fs_arr[0]]['ddt'].slice(6,8);
                
                end_time = fs[fs_arr[fs_last]]['adt'].slice(4,6)+ ':'+fs[fs_arr[fs_last]]['adt'].slice(6,8);

                start_date = fs[fs_arr[0]]['ddt'].slice(0,2) + " "+ fs[fs_arr[0]]['ddt'].slice(2,4);

                end_date = fs[fs_arr[fs_last]]['adt'].slice(0,2) + " "+ fs[fs_arr[fs_last]]['adt'].slice(2,4);

                number_of_stops = fs_arr.length -1;

                temp = fs[fs_arr[0]]["ma"];

                if(fs[fs_arr[fs_last]]["ma"] == temp){
                    //same airline
                    carrier_name = ds["al"][temp]['n'];
                }
                else{
                    carrier_name = "Multiple carrier"   
                }

                // price = ai[parseInt(key)+1]["pi"]["tp"];

                if((end_point == journey_deets.fromCityCode) && (start_point == journey_deets.toCityCode)){
                    //check for return journey
                    return_flights.push({start_time:start_time,end_time:end_time,start_date:start_date,end_date:end_date,number_of_stops:number_of_stops,carrier_name:carrier_name,price:price,"du":time_duration_in_minutes});
                }
                else{
                    rej_ret_flights.push({start_time:start_time,end_time:end_time,start_date:start_date,end_date:end_date,number_of_stops:number_of_stops,carrier_name:carrier_name,price:price});  
                }

            }
        }
        var rj_flights_sorted= rejected_flights.sort(function(a,b){return a.price - b.price});

        var dept_data={};
        var arr_data={};

        ow_flights_sorted= onward_flights.sort(function(a,b){return a.price - b.price});

        if(onward_flights.length>0){

            dept_data.isFound=true;
            dept_data.airlineName=ow_flights_sorted[0].carrier_name;
            
            // dept_data.arrDate= ow_flights_sorted[0].end_date;
            dept_data.arrDate= ow_flights_sorted[0].end_date.split(" ")[0] + " "+months_arr[parseInt(ow_flights_sorted[0].end_date.split(" ")[1])-1];

            dept_data.arrTime= ow_flights_sorted[0].end_time;
            
            // dept_data.deptDate=ow_flights_sorted[0].start_date;
            dept_data.deptDate = ow_flights_sorted[0].start_date.split(" ")[0] + " "+months_arr[parseInt(ow_flights_sorted[0].start_date.split(" ")[1])-1];

            dept_data.deptTime=ow_flights_sorted[0].start_time;
            console.log("musafir duration");
            console.log(ow_flights_sorted[0].du)
            dept_data.duration= parseInt(ow_flights_sorted[0].du/60) <= 0 ? 1: parseInt(ow_flights_sorted[0].du/60);
            dept_data.stops=ow_flights_sorted[0].number_of_stops
        }


       var rt_flights_sorted;
        if(return_flights.length>0){
            rt_flights_sorted= return_flights.sort(function(a,b){return a.price - b.price});
            arr_data.isFound=true;
            arr_data.airlineName=rt_flights_sorted[0].carrier_name;
            
            // arr_data.arrDate= rt_flights_sorted[0].end_date;
            arr_data.arrDate = rt_flights_sorted[0].end_date.split(" ")[0] + " "+months_arr[parseInt(rt_flights_sorted[0].end_date.split(" ")[1])-1];
            
            arr_data.arrTime= rt_flights_sorted[0].end_time;
            
            // arr_data.deptDate=rt_flights_sorted[0].start_date;
            arr_data.deptDate = rt_flights_sorted[0].start_date.split(" ")[0] + " "+months_arr[parseInt(rt_flights_sorted[0].start_date.split(" ")[1]-1)];
            
            arr_data.deptTime=rt_flights_sorted[0].start_time;
            arr_data.duration=parseInt(rt_flights_sorted[0].du/60) == 0 ? 1: parseInt(ow_flights_sorted[0].du/60);
            arr_data.stops=rt_flights_sorted[0].number_of_stops
        }
        else{
            arr_data.isFound=false;
        }

        var lowest_price = ow_flights_sorted[0].price;

        if((!journey_deets["isInternational"]) && (journey_deets["isReturn"])){
            lowest_price += rt_flights_sorted[0].price;
        }

        if (lowest_price) {
           var card_str = make_flights_card({'site':'mf', 'low_price':lowest_price, 'dept_data':dept_data, 'arr_data':arr_data});
            insert_flights_card(card_str);

        }

        // fin_gb_data= all_data.splice();
        console.log("%cSuccess","color:green; font-size:20px;");


    }
}
