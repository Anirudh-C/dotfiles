
function createStringLinkSim(curr_prod_deets_var,link_type,afftridtype=' ') {

	var repl_strng,redir_link;
	
	if(afftridtype==='searchid'){
		redir_link=affyLinkifysearch(curr_prod_deets_var,'');
	}
	else{
	redir_link = affyLinkifySim(curr_prod_deets_var,'');
	}

	if ( curr_prod_deets_var.website=='fk'){
			site_name = 'Flipkart';
		} //fk
	else if ( curr_prod_deets_var.website=='az'){
			site_name = 'Amazon';
		} //az
	else if ( curr_prod_deets_var.website=='my'){
			site_name = 'Myntra';
		} //myntra
	else if ( curr_prod_deets_var.website=='ja'){
			site_name = 'Jabong';
		} //jabong
	else if (curr_prod_deets_var.website=='sd'){
			site_name = 'SnapDeal';
		} //snapdeal
	else if (curr_prod_deets_var.website=='sc'){
			site_name = 'ShopClues';
		} //shopclue
	else if (curr_prod_deets_var.website=='hs'){
			site_name = 'HomeShop18';
		} //shopclue
	else if (curr_prod_deets_var.website=='eb') {
		site_name = 'eBay';
	} else if (curr_prod_deets_var.website == 'pt') {
		site_name = 'Paytm';
	}
	else if (curr_prod_deets_var.website == 'tc') {
		site_name = 'Tata Cliq';
		if(!curr_prod_deets_var.img_src.startsWith('http')){
			curr_prod_deets_var.img_src='https://'+curr_prod_deets_var.img_src;
		}
		
	}

	if (link_type === 'oos') {

		var page_price = Number(prod_deets.prod_price);
		var difference_str = get_pricediff_result_row(-1, page_price);
		

		repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
		<div class="row-top">\
			<span class="'+portalname+'">' + site_name + '</span>\
			<span class="'+portalmsg+'"></span>\
		</div>\
		<div class="row-btm">\
			<img src="' + curr_prod_deets_var.img_src + '"/>\
			<div class="row-btm-title">' + curr_prod_deets_var.title + '</div>' + difference_str +
		'</div>\
	  </a>';
	  return repl_strng;
	}

	if (curr_prod_deets_var.prod_price != '-1' || link_type != 'notfound') {
		var curr_prod_price = Number(curr_prod_deets_var.prod_price);
		var page_prod_price = Number(prod_deets.prod_price);
		// console.log('curr_prod_price ' + curr_prod_price);
		// console.log('page_prod_price ' + page_prod_price);
		var difference_str = get_pricediff_result_row(curr_prod_price, page_prod_price);
	}

	if (curr_prod_deets_var.prod_price=='-1') {
		//possibly out of stock from server
		//repl_strng = site_name+': (Not Available) <a href="'+redir_link+'" target="_blank" style="display:inline !important">Search</a>';
		var difference_str = get_pricediff_result_row(curr_prod_price, page_prod_price);
		/*
		repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
						<div class="row-top">\
							<span class="'+portalname+'">' + site_name + '</span>\
							<span class="'+portalmsg+'"></span>\
						</div>\
						<div class="row-btm">\
							<img src="' + housefly + '" style="opacity: 0.4;"/>\
							<div class="row-btm-title">' + curr_prod_deets_var.title + '</div>\
							<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
						</div>\
					  </a>';
		*/
		repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
				<div class="row-top">\
					<span class="'+portalname+'">' + site_name + '</span>\
					<span class="'+portalmsg+'"></span>\
				</div>\
				<div class="row-btm">\
					<img src="' + curr_prod_deets_var.img_src + '"/>\
					<div class="row-btm-title">' + curr_prod_deets_var.title + '</div>' + difference_str +
				'</div>\
			  </a>';

	}
	else {
		//repl_strng = site_name+': Rs. <span class="'+pricespan+'" style="display:inline !important">'+curr_prod_deets_var.prod_price+'</span> <a href="'+redir_link+'"target="_blank" style="display:inline !important">Search</a>';
		//repl_strng = '<a href="' + redir_link + '"><span class="'+portalname+'">' + site_name + '</span><span class="'+rupees+'">&#8377; ' + curr_prod_deets_var.prod_price + '</span></a>'
			repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
							<div class="row-top">\
								<span class="'+portalname+'">' + site_name + '</span>\
								<span class="'+portalmsg+'"></span>\
							</div>\
							<div class="row-btm">\
								<img src="' + curr_prod_deets_var.img_src + '"/>\
								<div class="row-btm-title">' + curr_prod_deets_var.title + '</div>' + difference_str +
							'</div>\
						  </a>';
	}

	if (link_type=='notfound'){ 
		//repl_strng = site_name+': <a href="'+redir_link+'" target="_blank" style="display:inline !important">'+link_text+'</a>';
		//repl_strng = '<a href="' + redir_link + '"><span class="'+portalname+'">' + site_name + '</span><span class="'+portalmsg+'">Search</span></a>'
			repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
							<div class="row-top">\
								<span class="'+portalname+'">' + site_name + '</span>\
								<span class="'+portalmsg+'"></span>\
							</div>\
							<div class="row-btm">\
								<img src="' + housefly + '" style="opacity: 0.4;"/>\
								<div class="row-btm-title">' + curr_prod_deets_var.title + '</div>\
								<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
							</div>\
						  </a>';

	} else {

		//repl_strng = site_name+': Rs. <span class="'+pricespan+'" imgsrc="' + curr_prod_deets_var.img_src +'" style="display:inline !important">' +curr_prod_deets_var.prod_price+' <a href="'+redir_link+'" target="_blank" style="display:inline !important">'+link_text+'</a> ';
		//repl_strng = '<a href="' + redir_link + '"><span class="'+portalname+'" imgsrc="'+curr_prod_deets_var.img_src+'">' + site_name + '</span><span class="'+rupees+'">&#8377; ' + curr_prod_deets_var.prod_price + '</span></a>';		
			repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
							<div class="row-top">\
								<span class="'+portalname+'">' + site_name + '</span>\
								<span class="'+portalmsg+'"></span>\
							</div>\
							<div class="row-btm">\
								<img src="' + curr_prod_deets_var.img_src + '"/>\
								<div class="row-btm-title">' + curr_prod_deets_var.title + '</div>' + difference_str +
							'</div>\
						  </a>';

	}

	return repl_strng;

}






function affyLinkifySim(dyn_prod_deets_var,raw_link) {
	var prod_link;

	if (raw_link=='') {
		prod_link = dyn_prod_deets_var.link;
	} 
	else {
		prod_link = raw_link;
	}

	if (prod_link == null) {
		prod_link ='';
	}
	var raw_link = prod_link, redir_link, chop_link = false;


	if (((prod_link.length>0) && (prod_link[0]=='/')) || ((prod_link.slice(0,4).search('http')==-1) && (prod_link.slice(0,3).search('www')==-1))) {
		//this is not a full link
		chop_link=true;
		}

	if ( dyn_prod_deets_var.website=='sd'){
			if (chop_link) {
				raw_link='https://www.snapdeal.com'+prod_link;
			} 

	//redir_link = combineUrlBits(raw_link,'utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=2042');
	params = {'utm_source':'aff_prog','utm_campaign':'afts','offer_id':'17','aff_id':'2042'};
	params['aff_sub'] = id_deets.user_id;
	params['source']='smartmakkhi';
	redir_link=combineUrlBitsWithParams(raw_link,params);

	} //sd
	else if ( dyn_prod_deets_var.website=='fk'){
			if (chop_link) {
				raw_link='https://www.flipkart.com'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'affid=saikerneli');
		params = {'affid':'saikerneli'};
		params['affExtParam1']='smartmakkhi';
		params['affExtParam2'] =id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);

	} //fk
	else if ( dyn_prod_deets_var.website=='az'){
			if (chop_link) {
				raw_link='http://www.amazon.in'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'tag=makkhichoos0c-21');
		params = {'tag':'smartmakkhi-21'};
		params['ascsubtag'] = id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);
	} //az

	else if (dyn_prod_deets_var.website == 'pt') {
		redir_link = prod_link;
	}
	
	else if ( dyn_prod_deets_var.website=='my'){
			if (chop_link) {
				raw_link='https://www.myntra.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=12185&CID=4129769&MID=349836&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("my",raw_link);
		// }
		redir_link = get_admittad_url("my",raw_link);


	} //myntra
	else if ( dyn_prod_deets_var.website=='ja'){
			if (chop_link) {
				raw_link='https://www.jabong.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=9170&CID=3785701&MID=304697&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("ja",raw_link);
		// }
		redir_link = get_admittad_url("ja",raw_link);



	} //jabong
	else if(dyn_prod_deets_var.website=='lr'){
		
		redir_link = get_admittad_url("lr",raw_link);

	}else if(dyn_prod_deets_var.website=='vo'){
		
		redir_link = get_admittad_url("vo",raw_link);

	}else if(dyn_prod_deets_var.website=='nn'){
		
		redir_link = get_admittad_url("nn",raw_link);

	}else if(dyn_prod_deets_var.website=='sb'){
		
		redir_link = get_admittad_url("sb",raw_link);

	}else if(dyn_prod_deets_var.website=='aj'){
		
		redir_link = get_admittad_url("aj",raw_link);

	}else if(dyn_prod_deets_var.website=='ch'){
		
		redir_link = get_admittad_url("ch",raw_link);

	}else if(dyn_prod_deets_var.website=='bi'){
		
		redir_link = get_admittad_url("bi",raw_link);

	}

	else if ( dyn_prod_deets_var.website=='tc'){
			if (chop_link) {
				raw_link='https://www.tatacliq.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=17523&r='+encodeURIComponentFix(raw_link);
		// redir_link = raw_link+"?:cid=af:"+"smartmakkhi"+":makkhichoose:cps:"+id_deets.user_id;
		// redir_link = raw_link+"?cid=af:"+"products"+"_smartmakkhi"+":makkhichoose:cps:"+id_deets.user_id;
		var tc_aff_sub = "smartmakkhi";
		var tc_aff_sub2 = id_deets.user_id;
		redir_link = "https://tatacliqaffiliates.go2cloud.org/aff_c?offer_id=2&aff_id=1008&url="+ encodeURIComponent(raw_link)+"%3Fcid%3Daf%3Ahomepage%3A{affiliate_name}%3Ahasoffers%3A15032017&source="+ 'makkhidesktop' + "&aff_sub=" +tc_aff_sub+ "&aff_sub2=" + tc_aff_sub2
	



	} //tatacliq

	else if ( dyn_prod_deets_var.website=='hs'){
			if (chop_link) {
				raw_link='https://www.homeshop18.com'+prod_link;
			} 
		redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=9394&CID=3785995&MID=331902&r='+encodeURIComponentFix(raw_link);
		
	} //homeshop
	else if ( dyn_prod_deets_var.website=='sc'){
			if (chop_link) {
				raw_link='https://www.shopclues.com'+prod_link;
			} 
		//redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=10314&CID=3931686&MID=420562&r='+encodeURIComponentFix(raw_link);


		redir_link = 'https://affiliateshopclues.com/?a=2065&c=19&p=r&s1=shopclues&ckmrdr='+raw_link+'?utm_source=makkhichoose&utm_medium=CPS&s2=crext'
		
	} //shopclues	
	else{
		redir_link = raw_link;
	}


	return redir_link;

} //affyLinkify


function affyLinkifyDittory(dyn_prod_deets_var,raw_link) {
	var prod_link;

	if (raw_link=='') {
		prod_link = dyn_prod_deets_var.link;
	} 
	else {
		prod_link = raw_link;
	}

	if (prod_link == null) {
		prod_link ='';
	}
	var raw_link = prod_link, redir_link, chop_link = false;


	if (((prod_link.length>0) && (prod_link[0]=='/')) || ((prod_link.slice(0,4).search('http')==-1) && (prod_link.slice(0,3).search('www')==-1))) {
		//this is not a full link
		chop_link=true;
		}

	if ( dyn_prod_deets_var.website=='sd'){
			if (chop_link) {
				raw_link='https://www.snapdeal.com'+prod_link;
			} 

	//redir_link = combineUrlBits(raw_link,'utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=2042');
	params = {'utm_source':'aff_prog','utm_campaign':'afts','offer_id':'17','aff_id':'2042'};
	params['aff_sub'] = id_deets.user_id;
	params['source']='smartmakkhi';
	redir_link=combineUrlBitsWithParams(raw_link,params);

	} //sd
	else if ( dyn_prod_deets_var.website=='fk'){
			if (chop_link) {
				raw_link='https://www.flipkart.com'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'affid=saikerneli');
		params = {'affid':'saikerneli'};
		params['affExtParam1']='makkhiditto';
		params['affExtParam2'] =id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);

	} //fk
	else if ( dyn_prod_deets_var.website=='az'){
			if (chop_link) {
				raw_link='https://www.amazon.in'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'tag=makkhichoos0c-21');
		params = {'tag':'makkhiditto-21'};
		params['ascsubtag'] = id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);
	} //az

	else if (dyn_prod_deets_var.website == 'pt') {
		redir_link = prod_link;
	}
	
	else if ( dyn_prod_deets_var.website=='my'){
			if (chop_link) {
				raw_link='https://www.myntra.com'+prod_link;
			} 

		// redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=12185&CID=4129769&MID=349836&UID=vcab&r='+encodeURIComponentFix(raw_link);

		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("my",raw_link);
		// }
		redir_link = get_admittad_url("my",raw_link);
	} //myntra
	else if ( dyn_prod_deets_var.website=='ja'){
			if (chop_link) {
				raw_link='https://www.jabong.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=9170&CID=3785701&MID=304697&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("ja",raw_link);
		// }
		redir_link = get_admittad_url("ja",raw_link);



	} //jabong
		else if(dyn_prod_deets_var.website=='lr'){
		
		redir_link = get_admittad_url("lr",raw_link);

	}else if(dyn_prod_deets_var.website=='vo'){
		
		redir_link = get_admittad_url("vo",raw_link);

	}else if(dyn_prod_deets_var.website=='nn'){
		
		redir_link = get_admittad_url("nn",raw_link);

	}else if(dyn_prod_deets_var.website=='sb'){
		
		redir_link = get_admittad_url("sb",raw_link);

	}else if(dyn_prod_deets_var.website=='aj'){
		
		redir_link = get_admittad_url("aj",raw_link);

	}else if(dyn_prod_deets_var.website=='ch'){
		
		redir_link = get_admittad_url("ch",raw_link);

	}else if(dyn_prod_deets_var.website=='bi'){
		
		redir_link = get_admittad_url("bi",raw_link);

	}

	else if ( dyn_prod_deets_var.website=='tc'){
			if (chop_link) {
				raw_link='https://www.tatacliq.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=17523&r='+encodeURIComponentFix(raw_link);
		// redir_link = raw_link+"?:cid=af:"+"makkhiDitto"+":makkhichoose:cps:"+id_deets.user_id;
		// redir_link = raw_link+"?cid=af:"+"products"+"_makkhiDitto"+":makkhichoose:cps:"+id_deets.user_id;
		var tc_aff_sub = "makkhiditto";
		var tc_aff_sub2 = id_deets.user_id;
		redir_link = "https://tatacliqaffiliates.go2cloud.org/aff_c?offer_id=2&aff_id=1008&url="+ encodeURIComponent(raw_link)+"%3Fcid%3Daf%3Ahomepage%3A{affiliate_name}%3Ahasoffers%3A15032017&source="+ 'makkhidesktop' + "&aff_sub=" +tc_aff_sub+ "&aff_sub2=" + tc_aff_sub2






	} //tatacliq

	else if ( dyn_prod_deets_var.website=='hs'){
			if (chop_link) {
				raw_link='https://www.homeshop18.com'+prod_link;
			} 
		redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=9394&CID=3785995&MID=331902&r='+encodeURIComponentFix(raw_link);
		
	} //homeshop
	else if ( dyn_prod_deets_var.website=='sc'){
			if (chop_link) {
				raw_link='https://www.shopclues.com'+prod_link;
			} 
		//redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=10314&CID=3931686&MID=420562&r='+encodeURIComponentFix(raw_link);


		redir_link = 'https://affiliateshopclues.com/?a=2065&c=19&p=r&s1=shopclues&ckmrdr='+raw_link+'?utm_source=makkhichoose&utm_medium=CPS&s2=crext'
		
	} //shopclues	
	else{
		redir_link = raw_link;
	}


	return redir_link;

} //affyLinkify

function affyLinkifyback_price(dyn_prod_deets_var,raw_link) {

	console.log("creating backprice link")
	console.log(dyn_prod_deets_var.website);

	var prod_link;

	if (raw_link=='') {
		prod_link = dyn_prod_deets_var.link;
	} 
	else {
		prod_link = raw_link;
	}

	if (prod_link == null) {
		prod_link ='';
	}

   

	var raw_link = prod_link, redir_link, chop_link = false;




	if (((prod_link.length>0) && (prod_link[0]=='/')) || ((prod_link.slice(0,4).search('http')==-1) && (prod_link.slice(0,3).search('www')==-1))) {
		//this is not a full link
		chop_link=true;
		}

	if ( dyn_prod_deets_var.website=='sd'){
			if (chop_link) {
				raw_link='https://www.snapdeal.com'+prod_link;
			} 

	//redir_link = combineUrlBits(raw_link,'utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=2042');
	params = {'utm_source':'aff_prog','utm_campaign':'afts','offer_id':'17','aff_id':'2042'};
	params['aff_sub'] = id_deets.user_id;
	params['source']='makkhibackprice';
	redir_link=combineUrlBitsWithParams(raw_link,params);

	} //sd
	else if ( dyn_prod_deets_var.website=='fk'){
			if (chop_link) {
				raw_link='https://www.flipkart.com'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'affid=saikerneli');
		params = {'affid':'saikerneli'};
		params['affExtParam1']='makkhibackprice';
		params['affExtParam2'] =id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);

	} //fk
	else if ( dyn_prod_deets_var.website=='az'){
			if (chop_link) {
				raw_link='https://www.amazon.in'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'tag=makkhichoos0c-21');
		params = {'tag':'makkhibackprice-21'};
		params['ascsubtag'] = id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);
	} //az

	else if (dyn_prod_deets_var.website == 'pt') {
		redir_link = prod_link;
	}
	
	else if ( dyn_prod_deets_var.website=='my'){
			if (chop_link) {
				raw_link='https://www.myntra.com'+prod_link;
			} 

		// redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=12185&CID=4129769&MID=349836&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("my",raw_link);
		// }
		redir_link = get_admittad_url("my",raw_link);
	} //myntra
	else if ( dyn_prod_deets_var.website=='ja'){
			if (chop_link) {
				raw_link='https://www.jabong.com'+prod_link;
			} 

		// redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=9170&CID=3785701&MID=304697&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("ja",raw_link);
		// }
		redir_link = get_admittad_url("ja",raw_link);

	} //jabong

	else if(dyn_prod_deets_var.website=='lr'){
		
		redir_link = get_admittad_url("lr",raw_link);

	}else if(dyn_prod_deets_var.website=='vo'){
		
		redir_link = get_admittad_url("vo",raw_link);

	}else if(dyn_prod_deets_var.website=='nn'){
		
		redir_link = get_admittad_url("nn",raw_link);

	}else if(dyn_prod_deets_var.website=='sb'){
		
		redir_link = get_admittad_url("sb",raw_link);

	}else if(dyn_prod_deets_var.website=='aj'){
		
		redir_link = get_admittad_url("aj",raw_link);

	}else if(dyn_prod_deets_var.website=='ch'){
		
		redir_link = get_admittad_url("ch",raw_link);

	}else if(dyn_prod_deets_var.website=='bi'){
		
		redir_link = get_admittad_url("bi",raw_link);

	}


	else if ( dyn_prod_deets_var.website=='hs'){
			if (chop_link) {
				raw_link='https://www.homeshop18.com'+prod_link;
			} 
		redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=9394&CID=3785995&MID=331902&r='+encodeURIComponentFix(raw_link);
		
	} //homeshop
	else if ( dyn_prod_deets_var.website=='sc'){
			if (chop_link) {
				raw_link='https://www.shopclues.com'+prod_link;
			} 
		//redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=10314&CID=3931686&MID=420562&r='+encodeURIComponentFix(raw_link);


		redir_link = 'https://affiliateshopclues.com/?a=2065&c=19&p=r&s1=shopclues&ckmrdr='+raw_link+'?utm_source=makkhichoose&utm_medium=CPS&s2=crext'
		
	} //shopclues	
	else if ( dyn_prod_deets_var.website=='tc'){
			console.log("inside tc if");
			if (chop_link) {
				raw_link='https://www.tatacliq.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=17523&r='+encodeURIComponentFix(raw_link);
		// redir_link = raw_link+"?:cid=af:"+"makkhibackprice"+":makkhichoose:cps:"+id_deets.user_id;
		// redir_link = raw_link+"?cid=af:"+"products"+"_makkhibackprice"+":makkhichoose:cps:"+id_deets.user_id;
		var tc_aff_sub = "makkhibackprice";
		var tc_aff_sub2 = id_deets.user_id;
		redir_link = "https://tatacliqaffiliates.go2cloud.org/aff_c?offer_id=2&aff_id=1008&url="+ encodeURIComponent(raw_link)+"%3Fcid%3Daf%3Ahomepage%3A{affiliate_name}%3Ahasoffers%3A15032017&source="+ 'makkhidesktop' + "&aff_sub=" +tc_aff_sub+ "&aff_sub2=" + tc_aff_sub2




	}
	console.log("returning");
	console.log(redir_link);

	return redir_link;

} //affyLinkify



function affyLinkifysearch(dyn_prod_deets_var,raw_link) {
	var prod_link;

	if (raw_link=='') {
		prod_link = dyn_prod_deets_var.link;
	} 
	else {
		prod_link = raw_link;
	}

	if (prod_link == null) {
		prod_link ='';
	}
	var raw_link = prod_link, redir_link, chop_link = false;



	if (((prod_link.length>0) && (prod_link[0]=='/')) || ((prod_link.slice(0,4).search('http')==-1) && (prod_link.slice(0,3).search('www')==-1))) {
		//this is not a full link
		chop_link=true;
		}

	if ( dyn_prod_deets_var.website=='sd'){
			if (chop_link) {
				raw_link='https://www.snapdeal.com'+prod_link;
			} 

	//redir_link = combineUrlBits(raw_link,'utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=2042');
	params = {'utm_source':'aff_prog','utm_campaign':'afts','offer_id':'17','aff_id':'2042'};
	params['aff_sub'] = id_deets.user_id;
	params['source']='makkhichoos0c';
	redir_link=combineUrlBitsWithParams(raw_link,params);

	} //sd
	else if ( dyn_prod_deets_var.website=='fk'){
			if (chop_link) {
				raw_link='https://www.flipkart.com'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'affid=saikerneli');
		params = {'affid':'saikerneli'};
		params['affExtParam1']='makkhichoos0c';
		params['affExtParam2'] =id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);

	} //fk
	else if ( dyn_prod_deets_var.website=='az'){
			if (chop_link) {
				raw_link='https://www.amazon.in'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'tag=makkhichoos0c-21');
		params = {'tag':'makkhichoos0c-21'};
		params['ascsubtag'] = id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);
	} //az

	else if (dyn_prod_deets_var.website == 'pt') {
		redir_link = prod_link;
	}
	
	else if ( dyn_prod_deets_var.website=='my'){
			if (chop_link) {
				raw_link='https://www.myntra.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=12185&CID=4129769&MID=349836&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("my",raw_link);
		// }
		redir_link = get_admittad_url("my",raw_link);
	} //myntra
	else if ( dyn_prod_deets_var.website=='ja'){
			if (chop_link) {
				raw_link='https://www.jabong.com'+prod_link;
			} 

		// redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=9170&CID=3785701&MID=304697&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("ja",raw_link);
		// }
		redir_link = get_admittad_url("ja",raw_link);
	} //jabong
	else if(dyn_prod_deets_var.website=='lr'){
		
		redir_link = get_admittad_url("lr",raw_link);

	}else if(dyn_prod_deets_var.website=='vo'){
		
		redir_link = get_admittad_url("vo",raw_link);

	}else if(dyn_prod_deets_var.website=='nn'){
		
		redir_link = get_admittad_url("nn",raw_link);

	}else if(dyn_prod_deets_var.website=='sb'){
		
		redir_link = get_admittad_url("sb",raw_link);

	}else if(dyn_prod_deets_var.website=='aj'){
		
		redir_link = get_admittad_url("aj",raw_link);

	}else if(dyn_prod_deets_var.website=='ch'){
		
		redir_link = get_admittad_url("ch",raw_link);

	}else if(dyn_prod_deets_var.website=='bi'){
		
		redir_link = get_admittad_url("bi",raw_link);

	}


	else if ( dyn_prod_deets_var.website=='hs'){
			if (chop_link) {
				raw_link='https://www.homeshop18.com'+prod_link;
			} 
		redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=9394&CID=3785995&MID=331902&r='+encodeURIComponentFix(raw_link);
		
	} //homeshop
	else if ( dyn_prod_deets_var.website=='sc'){
			if (chop_link) {
				raw_link='https://www.shopclues.com'+prod_link;
			} 
		//redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=10314&CID=3931686&MID=420562&r='+encodeURIComponentFix(raw_link);


		redir_link = 'https://affiliateshopclues.com/?a=2065&c=19&p=r&s1=shopclues&ckmrdr='+raw_link+'?utm_source=makkhichoose&utm_medium=CPS&s2=crext'
		
	} //shopclues	


	return redir_link;

} //affyLinkify


function affyLinkifySimbacksearch(dyn_prod_deets_var,raw_link) {
	var prod_link;

	if (raw_link=='') {
		prod_link = dyn_prod_deets_var.link;
	} 
	else {
		prod_link = raw_link;
	}

	if (prod_link == null) {
		prod_link ='';
	}

  
	var raw_link = prod_link, redir_link, chop_link = false;


	if (((prod_link.length>0) && (prod_link[0]=='/')) || ((prod_link.slice(0,4).search('http')==-1) && (prod_link.slice(0,3).search('www')==-1))) {
		//this is not a full link
		chop_link=true;
		}

	if ( dyn_prod_deets_var.website=='sd'){
			if (chop_link) {
				raw_link='https://www.snapdeal.com'+prod_link;
			} 

	//redir_link = combineUrlBits(raw_link,'utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=2042');
	params = {'utm_source':'aff_prog','utm_campaign':'afts','offer_id':'17','aff_id':'2042'};
	params['aff_sub'] = id_deets.user_id;
	params['source']='makkhibacksearch';
	redir_link=combineUrlBitsWithParams(raw_link,params);

	} //sd
	else if ( dyn_prod_deets_var.website=='fk'){
			if (chop_link) {
				raw_link='https://www.flipkart.com'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'affid=saikerneli');
		params = {'affid':'saikerneli'};
		params['affExtParam1']='makkhibacksearch';
		params['affExtParam2'] =id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);

	} //fk
	else if ( dyn_prod_deets_var.website=='az'){
			if (chop_link) {
				raw_link='https://www.amazon.in'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'tag=makkhichoos0c-21');
		params = {'tag':'makkhibacksearch-21'};
		params['ascsubtag'] = id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);
	} //az

	else if (dyn_prod_deets_var.website == 'pt') {
		redir_link = prod_link;
	}
	
	else if ( dyn_prod_deets_var.website=='my'){
			if (chop_link) {
				raw_link='https://www.myntra.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=12185&CID=4129769&MID=349836&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("my",raw_link);
		// }
		redir_link = get_admittad_url("my",raw_link);
	} //myntra
	else if ( dyn_prod_deets_var.website=='ja'){
			if (chop_link) {
				raw_link='https://www.jabong.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=9170&CID=3785701&MID=304697&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("ja",raw_link);
		// }
		redir_link = get_admittad_url("ja",raw_link);


	} //jabong

	else if(dyn_prod_deets_var.website=='lr'){
		
		redir_link = get_admittad_url("lr",raw_link);

	}else if(dyn_prod_deets_var.website=='vo'){
		
		redir_link = get_admittad_url("vo",raw_link);

	}else if(dyn_prod_deets_var.website=='nn'){
		
		redir_link = get_admittad_url("nn",raw_link);

	}else if(dyn_prod_deets_var.website=='sb'){
		
		redir_link = get_admittad_url("sb",raw_link);

	}else if(dyn_prod_deets_var.website=='aj'){
		
		redir_link = get_admittad_url("aj",raw_link);

	}else if(dyn_prod_deets_var.website=='ch'){
		
		redir_link = get_admittad_url("ch",raw_link);

	}else if(dyn_prod_deets_var.website=='bi'){
		
		redir_link = get_admittad_url("bi",raw_link);

	}


	else if ( dyn_prod_deets_var.website=='tc'){
			if (chop_link) {
				raw_link='https://www.tatacliq.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=17523&r='+encodeURIComponentFix(raw_link);
		// redir_link = raw_link+"?:cid=af:"+"makkhibacksearch"+":makkhichoose:cps:"+id_deets.user_id;
		// redir_link = raw_link+"?cid=af:"+"products"+"_makkhibackprice"+":makkhichoose:cps:"+id_deets.user_id;
		var tc_aff_sub = "makkhibacksearch";
		var tc_aff_sub2 = id_deets.user_id;
		redir_link = "https://tatacliqaffiliates.go2cloud.org/aff_c?offer_id=2&aff_id=1008&url="+ encodeURIComponent(raw_link)+"%26cid%3Daf%3Ahomepage%3A{affiliate_name}%3Ahasoffers%3A15032017&source="+ 'makkhidesktop' + "&aff_sub=" +tc_aff_sub+ "&aff_sub2=" + tc_aff_sub2


	} //tatacick

	else if ( dyn_prod_deets_var.website=='hs'){
			if (chop_link) {
				raw_link='https://www.homeshop18.com'+prod_link;
			} 
		redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=9394&CID=3785995&MID=331902&r='+encodeURIComponentFix(raw_link);
		
	} //homeshop
	else if ( dyn_prod_deets_var.website=='sc'){
			if (chop_link) {
				raw_link='https://www.shopclues.com'+prod_link;
			} 
		//redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=10314&CID=3931686&MID=420562&r='+encodeURIComponentFix(raw_link);


		redir_link = 'https://affiliateshopclues.com/?a=2065&c=19&p=r&s1=shopclues&ckmrdr='+raw_link+'?utm_source=makkhichoose&utm_medium=CPS&s2=crext'
		
	} //shopclues
	else{
		return raw_link;
	}	


	return redir_link;

} //affyLinkify




function affyLinkifySimmanualsearch(dyn_prod_deets_var,raw_link){

	var prod_link,params={};

	if (raw_link=='') {
		prod_link = dyn_prod_deets_var.prod_link;
	} 
	else {
		prod_link = raw_link;
	}

	if (prod_link == null) {
		prod_link ='';
	}
	var raw_link = prod_link, redir_link, chop_link = false;


	if (((prod_link.length>0) && (prod_link[0]=='/')) || ((prod_link.slice(0,4).search('http')==-1) && (prod_link.slice(0,3).search('www')==-1))) {
		//this is not a full link
		chop_link=true;
		}

	if ( dyn_prod_deets_var.prod_site=='ib'){
			if (chop_link) {
				raw_link='https://www.infibeam.com'+prod_link;
			} 
		redir_link = combineUrlBits(raw_link,'trackId=saic');
	}
	else if ( dyn_prod_deets_var.prod_site=='ip'){
			if (chop_link) {
				raw_link='https://www.indiaplaza.com'+prod_link;
			} 

		redir_link = raw_link;

	} //ip
	else if ( dyn_prod_deets_var.prod_site=='it'){
			if (chop_link) {
				raw_link='https://shopping.indiatimes.com'+prod_link;
			} 


		redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=10091&CID=3931614&MID=387804&r='+encodeURIComponentFix(raw_link);

	} //indiatimes
	else if ( dyn_prod_deets_var.prod_site=='hs'){
			if (chop_link) {
				raw_link='https://www.homeshop18.com'+prod_link;
			} 
			redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=9394&CID=3785995&MID=331902&r='+encodeURIComponentFix(raw_link);

	} //hs
	else if ( dyn_prod_deets_var.prod_site=='ms'){
			if (chop_link) {
				raw_link='https://www.mysmartprice.com'+prod_link;
			} 
		redir_link = raw_link;
	} //ms
	else if ( dyn_prod_deets_var.prod_site=='nt'){
			if (chop_link) {
				raw_link='https://www.naaptol.com'+prod_link;
			} 

		redir_link = 'https://track.in.omgpm.com/?AID=435070&MID=329962&PID=9378&CID=3786070&WID=44470&r='+encodeURIComponentFix(combineUrlBits(raw_link,'ntpromoid=2095&utm_source=Omg&utm_medium=Banner&utm_campaign=Hot-Deal-Generic&utm_code=Affiliate'));

	} //nt
	else if ( dyn_prod_deets_var.prod_site=='sa'){
			if (chop_link) {
				raw_link='https://www.saholic.com'+prod_link;
			} 
		redir_link = raw_link;
	} //sa
	else if ( dyn_prod_deets_var.prod_site=='sd'){
			if (chop_link) {
				raw_link='https://www.snapdeal.com'+prod_link;
			} 

	//redir_link = combineUrlBits(raw_link,'utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=2042');
	params = {'utm_source':'aff_prog','utm_campaign':'afts','offer_id':'17','aff_id':'2042'};
	params['aff_sub'] = id_deets.user_id;
	params['source']='makkhimanual';
	redir_link=combineUrlBitsWithParams(raw_link,params);


	} //sd
	else if ( dyn_prod_deets_var.prod_site=='tr'){
			if (chop_link) {
				raw_link='https://www.tradus.com'+prod_link;
			} 
		redir_link = raw_link;
	}//tr
	else if ( dyn_prod_deets_var.prod_site=='fk'){
			if (chop_link) {
				raw_link='https://www.flipkart.com'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'affid=saikerneli');
		params = {'affid':'saikerneli'};
		params['affExtParam1']='makkhimanual';
		params['affExtParam2'] =id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);


	} //fk
	else if ( dyn_prod_deets_var.prod_site=='az'){
			if (chop_link) {
				raw_link='https://www.amazon.in'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'tag=makkhichoos0c-21');
		params = {'tag':'makkhimanual-21'};
		params['ascsubtag'] = id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);
	} //az
	else if ( dyn_prod_deets_var.prod_site=='eb'){
			if (chop_link) {
				raw_link='http://www.ebay.in'+prod_link;
			} 

		redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=13462&CID=4294340&MID=673024&r='+encodeURIComponentFix(raw_link);

	} //ebay
	else if ( dyn_prod_deets_var.prod_site=='ye'){
			if (chop_link) {
				raw_link='http://www.yebhi.com'+prod_link;
			} 

		redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=8782&CID=3931684&MID=248729&r='+encodeURIComponentFix(raw_link);

	} //yebhi
	else if ( dyn_prod_deets_var.prod_site=='my'){
			if (chop_link) {
				raw_link='http://www.myntra.com'+prod_link;
			} 

		// redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=12185&CID=4129769&MID=349836&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("my",raw_link);
		// }
		redir_link = get_admittad_url("my",raw_link);

	} //myntra
	else if ( dyn_prod_deets_var.prod_site=='ja'){
			if (chop_link) {
				raw_link='http://www.jabong.com'+prod_link;
			} 

		// redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=9170&CID=3785701&MID=304697&UID=vcab&r='+encodeURIComponentFix(raw_link);
		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("ja",raw_link);
		// }
	   redir_link = get_admittad_url("ja",raw_link);
	} //jabong

	else if(dyn_prod_deets_var.prod_site=='lr'){
		
		redir_link = get_admittad_url("lr",raw_link);

	}else if(dyn_prod_deets_var.prod_site=='vo'){
		
		redir_link = get_admittad_url("vo",raw_link);

	}else if(dyn_prod_deets_var.prod_site=='nn'){
		
		redir_link = get_admittad_url("nn",raw_link);

	}else if(dyn_prod_deets_var.prod_site=='sb'){
		
		redir_link = get_admittad_url("sb",raw_link);

	}else if(dyn_prod_deets_var.prod_site=='aj'){
		
		redir_link = get_admittad_url("aj",raw_link);

	}else if(dyn_prod_deets_var.prod_site=='ch'){
		
		redir_link = get_admittad_url("ch",raw_link);

	}else if(dyn_prod_deets_var.prod_site=='bi'){
		
		redir_link = get_admittad_url("bi",raw_link);

	}
	

	else if ( dyn_prod_deets_var.prod_site=='tc'){
			if (chop_link) {
				raw_link='https://www.tatacliq.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=17523&r='+encodeURIComponentFix(raw_link);
		// redir_link = raw_link+"?:cid=af:"+"makkhimannual"+":makkhichoose:cps:"+id_deets.user_id;
		// redir_link = raw_link+"?cid=af:"+"products"+"_makkhimannual"+":makkhichoose:cps:"+id_deets.user_id;
		var tc_aff_sub = "makkhimanual";
		var tc_aff_sub2 = id_deets.user_id;
		redir_link = "https://tatacliqaffiliates.go2cloud.org/aff_c?offer_id=2&aff_id=1008&url="+ encodeURIComponent(raw_link)+"%26cid%3Daf%3Ahomepage%3A{affiliate_name}%3Ahasoffers%3A15032017&source="+ 'makkhidesktop' + "&aff_sub=" +tc_aff_sub+ "&aff_sub2=" + tc_aff_sub2





	} //Tatacliq

	else if ( dyn_prod_deets_var.prod_site=='sc'){
			if (chop_link) {
				raw_link='https://www.shopclues.com'+prod_link;
			} 

		//redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=10314&CID=3931686&MID=420562&r='+encodeURIComponentFix(raw_link);
		redir_link = 'https://affiliateshopclues.com/?a=2065&c=19&p=r&s1=shopclues&ckmrdr='+raw_link+'?utm_source=makkhichoose&utm_medium=CPS&s2=crext'

	} //shopclues

	else if ( dyn_prod_deets_var.prod_site=='fc'){
			if (chop_link) {
				raw_link='https://www.firstcry.com'+prod_link;
			} 
		redir_link = raw_link;
	} //firstcry
	else if ( dyn_prod_deets_var.prod_site=='bo'){
			if (chop_link) {
				raw_link='https://www.babyoye.com'+prod_link;
			} 
		redir_link = 'https://track.in.omgpm.com/?AID=435070&PID=8137&CID=3785692&MID=192436&r='+encodeURIComponentFix(raw_link);

	} //babyoye


	else if ( dyn_prod_deets_var.prod_site=='ba'){
			if (chop_link) {
				raw_link='https://www.bookadda.com'+prod_link;
			} 

		redir_link = combineUrlBits(raw_link,'affiliateID=BA-0FA8ECDE');

	} //bookadda
	else if ( dyn_prod_deets_var.prod_site=='wk'){
			if (chop_link) {
				raw_link='https://www.watchkart.com'+prod_link;
			} 
		redir_link = 'https://track.in.omgpm.com/?AID=435070&MID=350174&PID=9644&CID=3786002&WID=44470&r='+encodeURIComponentFix(combineUrlBits(raw_link,'utm_source=omg'));

	} //watchkart
	else{
		redir_link = prod_link;
	}




	return redir_link;

} //affyLinkify
