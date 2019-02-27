
var createFetchURL = function(server_prod_deets_var, fetchsite_val) {
	var fetch_url, prod_srch_enc, prod_srch_trim_enc, prod_ttl_hyph, prod_ttl_enc;



	if  ((server_prod_deets_var=='') || ($.trim(server_prod_deets_var.prod_title)=='') || (server_prod_deets_var.prod_avail==false)) {
		prod_srch_enc=encodeURIComponentFix($.trim(prod_deets.prod_srch));
		prod_srch_trim_enc= encodeURIComponentFix($.trim(trimForNT(prod_deets.prod_title)+' '+extractGB(prod_deets.prod_bracktitle)));
		prod_ttl_hyph = prod_deets.prod_title.split(" ").join("-").toLowerCase();
		prod_ttl_enc=encodeURIComponentFix($.trim(prod_deets.prod_title).replace(/paperback/gi,'').replace(/hardcover/gi,''));
		}

	else {

		prod_srch_enc=encodeURIComponentFix($.trim(server_prod_deets_var.prod_title));
		prod_srch_trim_enc =encodeURIComponentFix($.trim(server_prod_deets_var.prod_title));
		prod_ttl_hyph = server_prod_deets_var.prod_title.split(" ").join("-").toLowerCase();
		prod_ttl_enc=encodeURIComponentFix($.trim(prod_deets.prod_title));
	}
	

	if (fetchsite_val == 'fk') {
		if (isBook()){
			// fetch_url = 'http://www.flipkart.com/search-books?query='+prod_srch_enc;
			fetch_url = 'https://www.flipkart.com/all-categories/pr?sid=search.flipkart.com&q='+prod_srch_enc;
		}
		else {
			fetch_url = 'https://www.flipkart.com/all-categories/pr?sid=search.flipkart.com&q='+prod_srch_enc;
		}

	} // fk


	else if (fetchsite_val == 'ip') {
		if (isBook()){
			fetch_url = 'http://www.indiaplaza.com/searchproducts.aspx?sn=books&q='+prod_srch_enc;
		}
		else if (isMobile()) {
			fetch_url = 'http://www.indiaplaza.com/searchproducts.aspx?sn=mobiles&q='+prod_srch_enc;
		}
		else {
			fetch_url = 'http://www.indiaplaza.com/searchproducts.aspx?sn=all&q='+prod_srch_enc;
		}

	} // ip
	else if (fetchsite_val == 'hs') {


		if (isBook()){
			fetch_url = 'https://www.homeshop18.com/categoryid:10000/search:'+prod_srch_enc+'/';
		}

		else if (isMobile()) {
			fetch_url = 'https://www.homeshop18.com/categoryid:3024/search:'+prod_srch_enc+'/';
		}
		else {
			fetch_url = 'https://www.homeshop18.com/search:'+prod_srch_enc+'/';
		}
	

	} // hs
	else if (fetchsite_val == 'ib') {

		if (isBook()){
			fetch_url = 'https://www.infibeam.com/Books/search?q='+prod_srch_enc;
		}
		else if (isMobile()) {
			fetch_url = 'https://www.infibeam.com/Mobiles/search?q='+prod_srch_enc;
		}
		else {
			fetch_url = 'https://www.infibeam.com/search?q='+prod_srch_enc;
		}
	} // ib
	else if (fetchsite_val == 'nt') {


		if (isBook()){
			fetch_url = 'https://www.naaptol.com/search.html?type=srch_catlg&catid=2578&kw='+prod_srch_trim_enc;
		}
		else if (isMobile()) {
			fetch_url = 'https://www.naaptol.com/search.html?type=srch_catlg&catid=4&kw='+prod_srch_trim_enc;
		}
		else {
			fetch_url = 'https://www.naaptol.com/search.html?type=srch_catlg&kw='+prod_srch_trim_enc;
		}
	} //nt


	else if (fetchsite_val == 'it') {


		if (isBook()){
			fetch_url = 'https://shopping.indiatimes.com/control/pinpointsearch?filter=PRIMARY_CATALOG_ID:10011&SEARCH_STRING='+prod_srch_trim_enc;
		}
		else if (isMobile()){
			fetch_url = 'https://shopping.indiatimes.com/control/pinpointsearch?filter=PRIMARY_CATALOG_ID:10001&SEARCH_STRING='+prod_srch_trim_enc;
		}
		else {
			fetch_url = 'https://shopping.indiatimes.com/control/pinpointsearch?SEARCH_STRING='+prod_srch_trim_enc;
		}
	} //it


	else if (fetchsite_val == 'ms') {


		if (isBook()){
			fetch_url = 'https://www.mysmartprice.com/books/search.php?q='+prod_srch_enc;
		}
		else if (isMobile()){
			fetch_url = 'https://www.mysmartprice.com/msp/findprice.php?subcategory=mobile&title='+prod_srch_enc;
		}
		else {
			fetch_url = 'https://www.mysmartprice.com/msp/findprice.php?title='+prod_srch_enc;
		}
	} //sp
	else if (fetchsite_val == 'sd') {

		if (isBook()){
			//fetch_url = 'http://www.snapdeal.com/search?categoryId=364&catId=364&vertical=p&suggested=false&noOfResults=20&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&url=&utmContent=&catalogID=&dealDetail=&keyword='+prod_srch_trim_enc;
			fetch_url = 'https://www.snapdeal.com/search?categoryId=0&catId=&vertical=&suggested=false&noOfResults=20&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&url=&utmContent=&catalogID=&dealDetail=&keyword='+prod_srch_enc;
		}
		else {
			fetch_url = 'https://www.snapdeal.com/search?categoryId=0&catId=&vertical=&suggested=false&noOfResults=20&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&url=&utmContent=&catalogID=&dealDetail=&keyword='+prod_srch_enc;
		}

	} // sd

	else if (fetchsite_val == 'tr') {

		if (isBook()){

			fetch_url = 'https://www.tradus.com/search?query='+prod_srch_enc+'&cat=357';
		}
	
		if (isMobile()){ 
			fetch_url = 'https://www.tradus.com/search?query='+prod_srch_enc+'&cat=7756';
		}

		else {
			fetch_url = 'https://www.tradus.com/search?query='+prod_srch_enc;
		}
	} // tr


	else if (fetchsite_val == 'sa') {

		fetch_url = 'https://www.saholic.com/search?q='+prod_srch_enc;
		
	} // sa

	else if (fetchsite_val == 'az') {


			if (isBook()){
				fetch_url = 'https://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords='+prod_srch_enc;
			}
			else if (isMobile()){ 
				fetch_url = 'https://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords='+prod_srch_enc;
			}
			else {
				fetch_url = 'https://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords='+prod_srch_enc;
			}	
	} // az

else if (fetchsite_val == 'eb') {
			if (isBook()){
				fetch_url = 'https://www.ebay.in/sch/Books-Magazines-/267/i.html?_from=R40&_sop=15&LH_BIN=1&rt=nc&LH_ItemCondition=3&_nkw='+prod_srch_enc;
			}
			else {
				fetch_url = 'https://www.ebay.in/sch/i.html?_from=R40&_sacat=0&rt=nc&LH_BIN=1&LH_ItemCondition=3&_nkw='+prod_srch_enc;
			}	
	} // eb


else if (fetchsite_val == 'ye') {
				// fetch_url = 'http://www.yebhi.com/searchAll.aspx?q='+prod_srch_enc;
				fetch_url="https://www.yebhi.com/online-shopping/search.html?q="+prod_srch_enc;
	} // ye


else if (fetchsite_val == 'my') {
				fetch_url = 'https://www.myntra.com/'+ prod_ttl_hyph +'?userQuery=true';
				
	} // my

else if (fetchsite_val == 'ja') {
				fetch_url = 'https://www.jabong.com/find/'+ prod_ttl_hyph +'/?q='+prod_srch_enc;
				
	} // ja

else if (fetchsite_val == 'sc') {
				fetch_url = 'https://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&cid=0&q='+prod_srch_enc+'&dispatch=products.search';
				
	} // sc

else if (fetchsite_val == 'fc') {
				fetch_url = 'https://www.firstcry.com/search.aspx?q='+prod_srch_enc;
				
	} // fc

else if (fetchsite_val == 'bo') {
				fetch_url = 'https://www.babyoye.com/h?q='+prod_srch_enc;
				
	} // bo

else if (fetchsite_val == 'ba') {

	if (isBook()){
			fetch_url = 'https://www.bookadda.com/general-search?searchkey='+prod_srch_enc;
		}
		else{

				fetch_url = 'https://www.bookadda.com/general-search?searchkey='+prod_ttl_enc;
			}
				
	} // ba

else if (fetchsite_val == 'wk') {
				fetch_url = 'https://www.watchkart.com/catalogsearch/result/?cat=0&q='+prod_srch_enc;
				
	} // wk
else if(fetchsite_val=='tc'){
	// fetch_url="https://www.tatacliq.com/search/?searchCategory=all&text="+prod_srch_enc;
	fetch_url = "https://www.tataque.com/marketplacewebservices/v2/mpl/products/searchProducts/?searchText="+ encodeURI(prod_srch_enc) +"%3Arelevance%3AinStockFlag%3Atrue&isTextSearch=false&isFilter=false&page=0&isPwa=true&pageSize=40&typeID=all"
}
return fetch_url;
}	


