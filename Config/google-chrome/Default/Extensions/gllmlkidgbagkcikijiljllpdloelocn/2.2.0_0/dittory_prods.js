
// release_type_a : display only if ditto results are available
// release_type_b : display every thing(like makkhichoose)
// finally decided to go with release_type_b
var back_price_sites = ["az","fk","sd","my","ja","hs","tc","aj","ci","jp","lr","mi","so","vo","fi","cy","sb","fl","cv","pt","ch","fy","nn","it","vm","rn"];

function populateDittoryProducts(response){
	var results = response['result'];
	initialise_carousel_for_dittory();
	is_dittory_prods = true;
	$("#mc_main_host").css("display","block");
	if(response.totalCount>4 && response.totalCount<100){
		show_all_text = "See more on Makkhichoose website";
		$(result_view).find(".show_more_button_container button").text("See more on Makkhichoose website");		
	}else if(response.totalCount>100){
		show_all_text = "See more on Makkhichoose website";
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

	if(release_type == 'B'){
		trackMakkhiboxDisplay(prod_deets.prod_site);
	}

	if(isApparel()){
		chrome.runtime.sendMessage({"method":"dittory_result_display","site":prod_deets.prod_site,"deets":JSON.stringify(prod_deets),"categ":"apparel"});
	}

	if(isFootWear()){
		chrome.runtime.sendMessage({"method":"dittory_result_display","site":prod_deets.prod_site,"deets":JSON.stringify(prod_deets),"categ":"footwear"});
	}

	if(isWatch()){
		chrome.runtime.sendMessage({"method":"dittory_result_display","site":prod_deets.prod_site,"deets":JSON.stringify(prod_deets),"categ":"watch"});
	}

	if(is_dittory_sub_categ()){
		chrome.runtime.sendMessage({"method":"dittory_categ_dittory_results_display","site":prod_deets.prod_site,"deets":JSON.stringify(prod_deets),"categ":"sub_categ"});
	}

	for(var i=0; i<results.length && i<4; i++){
		
		var result = results[i];
		var final_link = affyLinkifyDittory(result,result['link']);
		result.final_link = final_link;
		result.order = i;
		result.is_dittory = true;

		console.log("az bug");
		console.log(result["website"]);

		if(back_price_sites.indexOf(result.website)!=-1){
			if(parseFloat(result.sd)>delayUs[result.website]){
				//do back price
				console.log("doing backprice for",result.website);
				fetchPSimData(result,result.website);
			}
			else{
				console.log("inserting without backprice");
				insertDittoryProduct(result);	
			}
		}
		else{
			console.log("inserting without backprice");
			insertDittoryProduct(result);
		}

	}


}


function insertDittoryProduct(result){

	if($("#mc_main_host").css("display")=="none"){
		$("#mc_main_host").css("display","block");
	}

	if(!view_update){
		price_results.push(result);
	}

var price_color= "";

if(result.website=="pt"){
		var pt_push_temp_obj ={};
		pt_push_temp_obj["pid"] = result.pid+"pt";
		pt_push_temp_obj["title"] =result.title;
        pt_push_temp_obj["res_price"] = result["prod_price"];
        pt_push_temp_obj["page_price"] = parseInt(prod_deets.prod_price);
		displayed_results.push(pt_push_temp_obj);
}

if(result["prod_price"]!="oos" && parseInt(result["prod_price"])<parseInt(prod_deets["prod_price"])){
	price_color='#006700';
}
else if(result["prod_price"]!="oos"){
	price_color='#FF4B00';
}
else{
	price_color = "gray";
}

var price = result["prod_price"];
if(result["prod_price"]=="oos"){
	price = "oos";
}

// var website = cssLocs.couponDunia.portalMapReverse[result["website"]];

var website = dittory_site_codes[result["website"]];

if(!(website)){
	website = result["website"];
}

var insertStr="";
insertStr += "";
insertStr += "<div style=\"border-color:#eeeeee; border-width:1px; border-style:solid; display: inline-block; min-width:140px;max-width:140px; min-height:230x;max-height:230px; margin-left:5px; margin-right:5px; background-color:white; overflow:hidden; margin-top:5px;\" target=\"_blank\""+"data-pid=\""+result["pid"]+"\"" + "data-score=\""+result["score"]+"\"" + "data-cluster_string=\""+result["prodString"]+"\""+ "data-disp_order=\""+result["order"]+"\""+ "title=\""+result["title"]+"\"" +" >";
insertStr += "	<a href=\""+result["final_link"]+"\"target=\"_blank\">";

//dummy title
//title
insertStr += "	<div class=\"row-btm-title\" style=\"display:none\">";
insertStr += result["title"];
insertStr += "	<\/div>";

//title
insertStr += "	<div style=\"color:black; min-width:140px;max-width:140px; margin-top:3px; margin-bottom:3px;\">";
insertStr += website;
insertStr += "	<\/div>";

// //score
// insertStr += "	<div style=\"color:black; min-width:140px;max-width:140px; margin-top:3px; margin-bottom:3px;\">";
// insertStr += result["score"];
// insertStr += "	<\/div>";


insertStr += "	<div style=\"display:flex;justify-content:center;\">";
insertStr += "		<img style=\" min-height:135px;max-height:135px; overflow:hidden;\" src=\""+result["img_src"]+"\" alt=\"\">";
insertStr += "	<\/div>";
insertStr += "	<div class=\"ditto_price\"style=\"text-align: center; min-width:140px;max-width:140px; margin-top:5px; margin-bottom:4px; color:"+price_color+";\">";
insertStr +=   price;
insertStr += "	<\/div>";
insertStr +=  "<\/a>";
insertStr += "<\/div>";

var result_box =  dittory_template.cloneNode(true);
  
  console.log("ditto result_box");
  console.log(result_box);

if(!result["final_link"].startsWith("http")){
	result["final_link"] = "http://" + result["final_link"];
}

 result_box.querySelector("div").setAttribute("data-disp-order",result["order"]);
 result_box.querySelector("div").setAttribute("title",result["title"]);
 result_box.querySelector("a").setAttribute("href",result["final_link"]);
 // result_box.querySelector(".ditto_title").textContent=result["title"];
 result_box.querySelector(".ditto_website").textContent=website;
 result_box.querySelector(".ditto_img").src=result["img_src"];
 if(!isNaN(price)){
 	result_box.querySelector(".ditto_price").textContent= "₹" + parseInt(price);	
 }
 else{
 	result_box.querySelector(".ditto_price").textContent= "Sold";		
 }
 

 		if(price <= parseInt(prod_deets.prod_price)){

			result_box.querySelector(".ditto_price").classList.add("green-text");
		}
		else{
			result_box.querySelector(".ditto_price").classList.add("red-text");
		}

		if(result["prod_price"]=="oos"){
			result_box.querySelector(".ditto_price").style.color="gray";
		}


	insert_dittory_results_to_page(result_box.cloneNode(true),result);



}

function initialise_carousel_for_dittory(){

	if(owl !=""){
		owl.trigger("destroy.owl.carousel", [0]);	
	}
	else{
		owl = $(result_view).find('.products .owl-carousel');	
	}
	

    owl.owlCarousel({
        loop: false,
        stagePadding: 30,
        nav: true,
        navText: ["<a class='btn prev'><img src='"+ chrome.extension.getURL("design_files/resources/images/arrow-green.png")+ "'/></a>",
            "<a class='btn next'><img src='"+chrome.extension.getURL("design_files/resources/images/arrow-green.png") +"'/></a>"
        ],
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            650: {
                items: 2
            },
            992: {
                items: 5
            }
        }
    });
	owl.on('mousewheel', '.owl-stage', function (e) {
	    if (e.deltaY>0) {
	        owl.trigger('prev.owl.carousel');
	    } else {
	        
	        owl.trigger('next.owl.carousel');
	    }
	    e.preventDefault();
	});

	
}


function insert_dittory_results_to_page(result_box,result){
	if(!prod_disp_sent){
		register_user_action("products_displayed");
		prod_disp_sent = true;
	}

	var results_list = [];
	var current_order =  result["order"];
	var current_image = result["img_src"];
	var current_price = result["prod_price"];

	results_list = $(mc_root).find("#results_container #price_results a.result_link");
	if(results_list.length==0){
		//no result result box is empty
		$(result_view).find("#results_container #price_results").append(result_box);
		update_preview_box(make_preview_box(current_price,current_image));
		update_preview_min(current_price);
		console.log("1st insert");


	}
	else{
		//insert it in the correct place based on price order
		var result_inserted = false;
		for(var i=0; i<results_list.length;i++){
			//index starts from top result
			var result_list_el_order=$(results_list[i]).parent().attr("data-disp-order");

			console.log(results_list[i]);
			console.log(result_list_el_order);
			console.log(current_order);

			if(current_order<result_list_el_order){
				$(result_box).insertBefore($(results_list[i]).parent());
				console.log("before insert");
				//update welcome box
				if(i==0){
					//1st position

					update_preview_box(make_preview_box(current_price,current_image));
					update_preview_min(current_price);
				}
				
				var result_inserted = true;
				break;
			}
		}

		if(!result_inserted){
			console.log("Append insert");
			$(result_view).find("#results_container #price_results").append(result_box);
		}
	}

	if(dock_settings == "top"){
		insert_to_carousel();
	}

	if(dock_settings == "bottom"){
		insert_to_carousel();
	}

}