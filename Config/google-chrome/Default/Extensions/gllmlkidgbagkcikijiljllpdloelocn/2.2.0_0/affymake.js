
function combineUrlBits(url_a,url_b) {
	if (url_a.indexOf('?')==-1) {
		return url_a+'?'+url_b;
		}
	else {
		return url_a+'&'+url_b;
	}
}
var installed_month = "";

chrome.storage.local.get({"installedTime":"" },function(response){
	if(response.installedTime !=""){
		var idate = new Date(response.installedTime);
		if(idate.getFullYear() == "2017"){
			var month = idate.getMonth() + 1;

			if(month == "4"){
				installed_month = "apr";
			}

			if(month == "5"){
				installed_month = "may";
			}

			if(month == "6"){
				installed_month = "jun";
			}

		}
		else{

		}
	}
});

function update_affy_params(params){
	if(installed_month !=""){
		if(params.hasOwnProperty("tag")){
			var tag_arr = params["tag"].split("-");
			var tag = tag_arr[0] + "_" +installed_month + "-21";
			params["tag"] = tag;
			return params;
		}
		if(params.hasOwnProperty("source")){
			var source = params["source"];
			params["source"] = source+"_"+installed_month;
			return params;
		}
		if(params.hasOwnProperty("affExtParam1")){
			var source = params["affExtParam1"];
			params["affExtParam1"] = source+"_"+installed_month;
			return params;
		}
		else{
			return params;
		}		
	}
	else{
		console.log("no installed_month");
		return params;
	}
}

function combineUrlBitsWithParams(url_a,params) {
	var url_b="";
	params["mct_param"] = "mc_result_click"
	params = update_affy_params(params);
	var param_iter_1=true;
	$.each(params,function(key,value){
		url_b=url_b+'&'+key+'='+value;
	});
	url_b=url_b.slice(1);
	if (url_a.indexOf('?')==-1) {
		return url_a+'?'+url_b;
		}
	else {
		return url_a+'&'+url_b;
	}
}

function affyLinkify(dyn_prod_deets_var,raw_link) {

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
				raw_link='http://www.infibeam.com'+prod_link;
			} 
		redir_link = combineUrlBits(raw_link,'trackId=saic');
	}
	else if ( dyn_prod_deets_var.prod_site=='ip'){
			if (chop_link) {
				raw_link='http://www.indiaplaza.com'+prod_link;
			} 

		redir_link = raw_link;

	} //ip
	else if ( dyn_prod_deets_var.prod_site=='it'){
			if (chop_link) {
				raw_link='http://shopping.indiatimes.com'+prod_link;
			} 


		redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=10091&CID=3931614&MID=387804&r='+encodeURIComponentFix(raw_link);

	} //indiatimes
	else if ( dyn_prod_deets_var.prod_site=='hs'){
			if (chop_link) {
				raw_link='http://www.homeshop18.com'+prod_link;
			} 
			redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=9394&CID=3785995&MID=331902&r='+encodeURIComponentFix(raw_link);

	} //hs
	else if ( dyn_prod_deets_var.prod_site=='ms'){
			if (chop_link) {
				raw_link='http://www.mysmartprice.com'+prod_link;
			} 
		redir_link = raw_link;
	} //ms
	else if ( dyn_prod_deets_var.prod_site=='nt'){
			if (chop_link) {
				raw_link='http://www.naaptol.com'+prod_link;
			} 

		redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=329962&PID=9378&CID=3786070&WID=44470&r='+encodeURIComponentFix(combineUrlBits(raw_link,'ntpromoid=2095&utm_source=Omg&utm_medium=Banner&utm_campaign=Hot-Deal-Generic&utm_code=Affiliate'));

	} //nt
	else if ( dyn_prod_deets_var.prod_site=='sa'){
			if (chop_link) {
				raw_link='http://www.saholic.com'+prod_link;
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
	params['source']='makkhichoos0c';
	redir_link=combineUrlBitsWithParams(raw_link,params);


	} //sd
	else if ( dyn_prod_deets_var.prod_site=='tr'){
			if (chop_link) {
				raw_link='http://www.tradus.com'+prod_link;
			} 
		redir_link = raw_link;
	}//tr
	else if ( dyn_prod_deets_var.prod_site=='fk'){
			if (chop_link) {
				raw_link='https://www.flipkart.com'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'affid=saikerneli');
		params = {'affid':'saikerneli'};
		params['affExtParam1']='makkhichoos0c';
		params['affExtParam2'] =id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);


	} //fk
	else if ( dyn_prod_deets_var.prod_site=='az'){
			if (chop_link) {
				raw_link='https://www.amazon.in'+prod_link;
			} 
		//redir_link = combineUrlBits(raw_link,'tag=makkhichoos0c-21');
		params = {'tag':'makkhichoos0c-21'};
		params['ascsubtag'] = id_deets.user_id;
		redir_link=combineUrlBitsWithParams(raw_link,params);
	} //az
	else if ( dyn_prod_deets_var.prod_site=='eb'){
			if (chop_link) {
				raw_link='https://www.ebay.in'+prod_link;
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
				raw_link='https://www.myntra.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=12185&CID=4129769&MID=349836&UID=vcab&r='+encodeURIComponentFix(raw_link);

		// if(Math.random()>0.5){
		// 	redir_link = get_vcommission_url("my",raw_link);
		// }
		redir_link = get_admittad_url("my",raw_link);
	} //myntra
	else if ( dyn_prod_deets_var.prod_site=='ja'){
			if (chop_link) {
				raw_link='https://www.jabong.com'+prod_link;
			} 

		// redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=9170&CID=3785701&MID=304697&UID=vcab&r='+encodeURIComponentFix(raw_link);

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
		var tc_aff_sub = "makkhichoos0c";
		var tc_aff_sub2 = id_deets.user_id;
		redir_link = "https://tatacliqaffiliates.go2cloud.org/aff_c?offer_id=2&aff_id=1008&url="+ encodeURIComponent(raw_link)+"%3Fcid%3Daf%3Ahomepage%3A{affiliate_name}%3Ahasoffers%3A15032017&source="+ 'makkhidesktop' + "&aff_sub=" +tc_aff_sub+ "&aff_sub2=" + tc_aff_sub2



	} //jabong


	else if ( dyn_prod_deets_var.prod_site=='sc'){
			if (chop_link) {
				raw_link='http://www.shopclues.com'+prod_link;
			} 

		redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=10314&CID=3931686&MID=420562&r='+encodeURIComponentFix(raw_link);
		redir_link = 'http://affiliateshopclues.com/?a=2065&c=19&p=r&s1=shopclues&ckmrdr='+raw_link+'?utm_source=makkhichoose&utm_medium=CPS&s2=crext'
		// var tc_aff_sub = "makkhichoos0c";
		// var tc_aff_sub2 = id_deets.user_id;
		// redir_link = "http://tatacliqaffiliates.go2cloud.org/aff_c?offer_id=2&aff_id=1008&url="+ encodeURIComponent(raw_link)+"%3Fcid%3Daf%3Ahomepage%3A{affiliate_name}%3Ahasoffers%3A15032017&source="+ 'makkhidesktop' + "&aff_sub=" +tc_aff_sub+ "&aff_sub2=" + tc_aff_sub2


	} //shopclues

	else if ( dyn_prod_deets_var.prod_site=='fc'){
			if (chop_link) {
				raw_link='http://www.firstcry.com'+prod_link;
			} 
		redir_link = raw_link;
	} //firstcry
	else if ( dyn_prod_deets_var.prod_site=='bo'){
			if (chop_link) {
				raw_link='http://www.babyoye.com'+prod_link;
			} 
		redir_link = 'http://track.in.omgpm.com/?AID=435070&PID=8137&CID=3785692&MID=192436&r='+encodeURIComponentFix(raw_link);

	} //babyoye


	else if ( dyn_prod_deets_var.prod_site=='ba'){
			if (chop_link) {
				raw_link='http://www.bookadda.com'+prod_link;
			} 

		redir_link = combineUrlBits(raw_link,'affiliateID=BA-0FA8ECDE');

	} //bookadda


	else if ( dyn_prod_deets_var.prod_site=='wk'){
			if (chop_link) {
				raw_link='http://www.watchkart.com'+prod_link;
			} 
		redir_link = 'https://track.in.omgpm.com/?AID=435070&MID=350174&PID=9644&CID=3786002&WID=44470&r='+encodeURIComponentFix(combineUrlBits(raw_link,'utm_source=omg'));

	} //watchkart

	else if(dyn_prod_deets_var.prod_site=='pt'){

		redir_link=raw_link;
	}


	return redir_link;

} //affyLinkify


function createStringLink(dyn_prod_deets_var, raw_search_url, link_type) {
	var repl_strng;
	var redir_link = affyLinkify(dyn_prod_deets_var,'');
	if ( dyn_prod_deets_var.prod_site=='ib'){
				site_name = 'InfiBeam';
			}
		else if ( dyn_prod_deets_var.prod_site=='ip'){
				site_name = 'IndiaPlaza';
			} //ip
		else if ( dyn_prod_deets_var.prod_site=='it'){
				site_name = 'IndiaTimes';
			} //indiatimes
		else if ( dyn_prod_deets_var.prod_site=='hs'){
				site_name = 'HomeShop18';
			} //hs
		else if ( dyn_prod_deets_var.prod_site=='ms'){
				site_name = 'MySmartPrice';
			} //ms
		else if ( dyn_prod_deets_var.prod_site=='nt'){
				site_name = 'NaapTol';
			} //nt
		else if ( dyn_prod_deets_var.prod_site=='sa'){
				site_name = 'Saholic';
			} //sa
		else if ( dyn_prod_deets_var.prod_site=='sd'){
				site_name = 'SnapDeal';
			} //sd
		else if ( dyn_prod_deets_var.prod_site=='tr'){
				site_name = 'Tradus';
			}//tr
		else if ( dyn_prod_deets_var.prod_site=='fk'){
				site_name = 'Flipkart';
			} //fk
		else if ( dyn_prod_deets_var.prod_site=='az'){
				site_name = 'Amazon';
			} //az
		else if ( dyn_prod_deets_var.prod_site=='eb'){
				site_name = 'Ebay.in';
			} //ebay
		else if ( dyn_prod_deets_var.prod_site=='ye'){
				site_name = 'Yebhi';
			} //yebhi
		else if ( dyn_prod_deets_var.prod_site=='my'){
				site_name = 'Myntra';
			} //myntra
		else if ( dyn_prod_deets_var.prod_site=='ja'){
				site_name = 'Jabong';
			} //jabong
		else if ( dyn_prod_deets_var.prod_site=='sc'){
				site_name = 'Shopclues';
			} //shopclues
		else if ( dyn_prod_deets_var.prod_site=='fc'){
				site_name = 'FirstCry';
			} //firstcry
		else if ( dyn_prod_deets_var.prod_site=='bo'){
				site_name = 'BabyOye';
			} //babyoye
		else if ( dyn_prod_deets_var.prod_site=='ba'){
				site_name = 'BookAdda';
			} //bookadda
		else if ( dyn_prod_deets_var.prod_site=='wk'){
				site_name = 'WatchKart';
			} //watchkart
		else if ( dyn_prod_deets_var.prod_site=='tc'){
				site_name = 'Tata CLIQ';
			} //tatacliq
	

		if (dyn_prod_deets_var.prod_price != '-1' || link_type != 'notfound') {
			var curr_prod_price = Number(dyn_prod_deets_var.prod_price);
			var page_prod_price = Number(prod_deets.prod_price);
			// console.log('curr_prod_price ' + curr_prod_price);
			// console.log('page_prod_price ' + page_prod_price);
			var difference_str = get_pricediff_result_row(curr_prod_price, page_prod_price);

		}

		if (!dyn_prod_deets_var.prod_img) {
			dyn_prod_deets_var.prod_img = housefly;
			var img_elem = '<img src="' + dyn_prod_deets_var.prod_img + '" style="opacity: 0.4;"/>';
		} else {
			var img_elem = '<img src="' + dyn_prod_deets_var.prod_img + '" />';
		}

		if (dyn_prod_deets_var.prod_price=='-1') {

			//repl_strng = site_name+': (Not Available) <a href="'+redir_link+'" target="_blank" style="display:inline !important">Search</a>';
			//repl_strng = '<a href="'+redir_link+'"><span class="'+portalname+'">' + site_name + '</span><span class="'+portalmsg+'">Search</span></a>'		
			repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
							<div class="row-top">\
								<span class="'+site_name+'">' + site_name + '</span>\
							</div>\
							<div class="row-btm">\
								<img src="' + housefly + '" style="opacity: 0.4;"/>\
								<div class="row-btm-title">' + prod_deets.prod_title + '</div>\
								<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
							</div>\
						  </a>';
		}
		else {
			//repl_strng = site_name+': Rs. <span class="'+pricespan+'" style="display:inline !important">'+dyn_prod_deets_var.prod_price+'</span> <a href="'+redir_link+'" target="_blank" style="display:inline !important">Search</a>';
			//repl_strng = '<a href="'+redir_link+'"><span class="'+portalname+'">' + site_name + '</span><span class="'+rupees+'">&#8377; ' + dyn_prod_deets_var.prod_price + '</span></a>';
			repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
							<div class="row-top">\
								<span class="'+portalname+'">' + site_name + '</span>\
								<span class="'+portalmsg+'"></span>\
							</div>\
							<div class="row-btm">\
								' + img_elem + '\
								<div class="row-btm-title">' + dyn_prod_deets_var.prod_title + '</div>' + difference_str +
							'</div>\
						  </a>';
		}


		if (link_type=='notfound'){

			//repl_strng = site_name+': <a href="'+redir_link+'" target="_blank" style="display:inline !important">'+link_text+'</a>';
			//repl_strng = '<a href="' + redir_link + '"><span class="'+portalname+'">' + site_name + '</span><span class="'+portalmsg+'">Search</span></a>';		
			repl_strng = createNotFoundStringLink(dyn_prod_deets_var, raw_search_url);

		} else {

			//repl_strng = site_name+': Rs. <span class="'+pricespan+'" imgsrc="' + dyn_prod_deets_var.img_src +'" style="display:inline !important">' +dyn_prod_deets_var.prod_price+' <a href="'+redir_link+'" target="_blank" style="display:inline !important">'+link_text+'</a> ';
			//repl_strng = '<a href="' + redir_link + '"><span class="'+portalname+'" imgsrc="'+ dyn_prod_deets_var.img_src +'">' + site_name + '</span><span class="'+rupees+'">&#8377; ' + dyn_prod_deets_var.prod_price + '</span></a>';
			repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
							<div class="row-top">\
								<span class="'+portalname+'">' + site_name + '</span>\
								<span class="'+portalmsg+'"></span>\
							</div>\
							<div class="row-btm">\
								' + img_elem + '\
								<div class="row-btm-title">' + dyn_prod_deets_var.prod_title + '</div>' + difference_str +
							'</div>\
						  </a>';
		}


	//console.log(repl_strng);
	return repl_strng;

}





function createNotFoundStringLink(dyn_prod_deets_var, raw_search_url) {
	var repl_strng;
	var redir_link = affyLinkify(dyn_prod_deets_var,raw_search_url);

	if ( dyn_prod_deets_var.prod_site=='ib'){
				site_name = 'InfiBeam';
			}
		else if ( dyn_prod_deets_var.prod_site=='ip'){
				site_name = 'IndiaPlaza';
			} //ip
		else if ( dyn_prod_deets_var.prod_site=='it'){
				site_name = 'IndiaTimes';
			} //indiatimes
		else if ( dyn_prod_deets_var.prod_site=='hs'){
				site_name = 'HomeShop18';
			} //hs
		else if ( dyn_prod_deets_var.prod_site=='ms'){
				site_name = 'MySmartPrice';
			} //ms
		else if ( dyn_prod_deets_var.prod_site=='nt'){
				site_name = 'NaapTol';
			} //nt
		else if ( dyn_prod_deets_var.prod_site=='sa'){
				site_name = 'Saholic';
			} //sa
		else if ( dyn_prod_deets_var.prod_site=='sd'){
				site_name = 'SnapDeal';
			} //sd
		else if ( dyn_prod_deets_var.prod_site=='tr'){
				site_name = 'Tradus';
			}//tr
		else if ( dyn_prod_deets_var.prod_site=='fk'){
				site_name = 'Flipkart';
			} //fk
		else if ( dyn_prod_deets_var.prod_site=='az'){
				site_name = 'Amazon';
			} //az
		else if ( dyn_prod_deets_var.prod_site=='eb'){
				site_name = 'Ebay.in';
			} //ebay
		else if ( dyn_prod_deets_var.prod_site=='ye'){
				site_name = 'Yebhi';
			} //yebhi
		else if ( dyn_prod_deets_var.prod_site=='my'){
				site_name = 'Myntra';
			} //myntra
		else if ( dyn_prod_deets_var.prod_site=='ja'){
				site_name = 'Jabong';
			} //jabong

		else if ( dyn_prod_deets_var.prod_site=='sc'){
				site_name = 'ShopClues';
			} //shopclues
		else if ( dyn_prod_deets_var.prod_site=='fc'){
				site_name = 'FirstCry';
			} //firstcry
		else if ( dyn_prod_deets_var.prod_site=='bo'){
				site_name = 'BabyOye';
			} //babyoye
		else if ( dyn_prod_deets_var.prod_site=='ba'){
				site_name = 'BookAdda';
			} //bookadda
		else if ( dyn_prod_deets_var.prod_site=='tc'){
				site_name = 'TataCliq';
			} //tatacliq
	

		else if ( dyn_prod_deets_var.prod_site=='wk'){
				site_name = 'WatchKart';
			} //watchkart

				//repl_strng = site_name+': <a href="'+redir_link+'" target="_blank" style="display:inline !important">Search</a>';
				//repl_strng = '<a href="' + redir_link + '"><span class="'+portalname+'">' + site_name + '</span><span class="'+portalmsg+'">Search</span></a>';
				repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
								<div class="row-top">\
									<span class="'+portalname+'">' + site_name + '</span>\
								</div>\
								<div class="row-btm">\
									<img src="' + prod_deets.prod_img + '" style="opacity: 0.4;"/>\
									<div class="row-btm-title">' + prod_deets.prod_title + '</div>\
									<div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
								</div>\
							  </a>';

	return repl_strng;

}


function createClosestFoundStringLink(dyn_prod_deets_var, raw_search_url, price_val) {
	var site_name, repl_strng;
	var redir_link = affyLinkify(dyn_prod_deets_var,raw_search_url);

	if ( dyn_prod_deets_var.prod_site=='ib'){
				site_name = 'InfiBeam';
			}
		else if ( dyn_prod_deets_var.prod_site=='ip'){
				site_name = 'IndiaPlaza';
			} //ip
		else if ( dyn_prod_deets_var.prod_site=='it'){
				site_name = 'IndiaTimes';
			} //indiatimes
		else if ( dyn_prod_deets_var.prod_site=='hs'){
				site_name = 'HomeShop18';
			} //hs
		else if ( dyn_prod_deets_var.prod_site=='ms'){
				site_name = 'MySmartPrice';
			} //ms
		else if ( dyn_prod_deets_var.prod_site=='nt'){
				site_name = 'NaapTol';
			} //nt
		else if ( dyn_prod_deets_var.prod_site=='sa'){
				site_name = 'Saholic';
			} //sa
		else if ( dyn_prod_deets_var.prod_site=='sd'){
				site_name = 'SnapDeal';
			} //sd
		else if ( dyn_prod_deets_var.prod_site=='tr'){
				site_name = 'Tradus';
			}//tr
		else if ( dyn_prod_deets_var.prod_site=='fk'){
				site_name = 'Flipkart';
			} //fk
		else if ( dyn_prod_deets_var.prod_site=='az'){
				site_name = 'Amazon';
			} //az
		else if ( dyn_prod_deets_var.prod_site=='eb'){
				site_name = 'Ebay.in';
			} //ebay
		else if ( dyn_prod_deets_var.prod_site=='ye'){
				site_name = 'Yebhi';
			} //yebhi
		else if ( dyn_prod_deets_var.prod_site=='my'){
				site_name = 'Myntra';
			} //myntra
		else if ( dyn_prod_deets_var.prod_site=='ja'){
				site_name = 'Jabong';
			} //jabong

		else if ( dyn_prod_deets_var.prod_site=='sc'){
				site_name = 'ShopClues';
			} //shopclues

		else if ( dyn_prod_deets_var.prod_site=='fc'){
				site_name = 'FirstCry';
			} //firstcry

		else if ( dyn_prod_deets_var.prod_site=='bo'){
				site_name = 'BabyOye';
			} //babyoye
		else if ( dyn_prod_deets_var.prod_site=='ba'){
				site_name = 'BookAdda';
			} //bookadda
		else if ( dyn_prod_deets_var.prod_site=='wk'){
				site_name = 'WatchKart';
			} //watchkart

				//repl_strng = site_name+': Rs. <span class="'+simpricespan+'" style="display:inline !important">'+price_val+' <a href="'+redir_link+'" target="_blank" style="display:inline !important">Search</a> *';
				//repl_strng = '<a href="' + redir_link + '"><span class="'+portalname+'">' + site_name + '</span><span class="'+rupees+'">&#8377; ' + price_val + '</span></a>';		

				var difference_str = get_pricediff_result_row(Number(price_val), Number(prod_deets.prod_price));
				var dyn_prod_img = dyn_prod_deets_var.prod_img || prod_deets.prod_img;
				repl_strng = '<a href="' + redir_link + '" style="display: block !important;" target="_blank">\
								<div class="row-top">\
									<span class="'+portalname+'">' + site_name + '</span>\
									<span class="'+portalmsg+'"></span>\
								</div>\
								<div class="row-btm">\
									<img src="' + dyn_prod_img + '"/>\
									<div class="row-btm-title">' + dyn_prod_deets_var.prod_title + '</div>' + difference_str +
								'</div>\
							  </a>';
	return repl_strng;

}


function get_vcommission_url(site_code,url){
	var offer_id ={
	"my":22,
	"ja":126
	}
	var site_url_part = combineUrlBitsWithParams(url,{utm_source:"vcommission",utm_medium:"affiliate"});
	var vc_affy_url = "http://tracking.vcommission.com/aff_c?offer_id="+offer_id[site_code]+"&aff_id=65696&source=normal_makkhi&url="+encodeURIComponent(site_url_part);
	return vc_affy_url;
}


function get_admittad_url(site_code,url){
	var url_path = {
		//nnow
		"nn": "jcpfu3tgjsaa8e274a9f87fbb29914",
		//happily unmarried
		"hu":"k5zrtrri4qaa8e274a9f47e39e9055",
		//adidas
		"ad":"0so8ojq5a1aa8e274a9f178f0292d0",
		// alexpress
		"al":"5mdimmknwtaa8e274a9fcd43c39a51",
		//ajio
		"aj":"zzm0dhchbraa8e274a9f8fd7bb8607",
		//chumbak
		"ch":"8522h1jqqoaa8e274a9f51514c771c",
		//biba
		"bi":"4gxko08abwaa8e274a9ff2e59b1932",
		//jabong
		"ja":"th1bw6vg5qaa8e274a9f8316cf038a",
		//limeroad
		"lr":"6muhc4mlrfaa8e274a9f76041b2588",
		//maxfashion
		"mf":"wrf9mrvzj4aa8e274a9f1d513129a2",
		//ebay.in
		"eb":"8eztvjzhmtaa8e274a9fd011322b02",
		//myntra
		"my":"s56leml8ckaa8e274a9f23d5247706",
		//stalkbuylove
		"sb":"h9eteooieiaa8e274a9fa412176801",
		//shopperstop
		"sr":"4ez4f2n9r7aa8e274a9f8ff14b2938",
		//voonik
		"vo":"2c8vtfsq72aa8e274a9faa3dedee09",
		//shein
		"sn":"1kjlqr06u0aa8e274a9ff0af71e07a"

	}
	if(site_code =='ae'){
		var ad_affy_url = "https://alitems.com/g/"+url_path[site_code]+"/?ulp="+encodeURIComponent(url)+"&subid=makkhi_ext";
		return ad_affy_url;
	}
	var ad_affy_url = "https://ad.admitad.com/g/"+url_path[site_code]+"/?ulp="+encodeURIComponent(url)+"&subid=makkhi_ext";
	return ad_affy_url;
}
