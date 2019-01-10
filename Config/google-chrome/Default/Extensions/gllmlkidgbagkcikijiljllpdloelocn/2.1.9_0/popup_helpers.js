var site_list = {
  "amazon": "az",
  "flipkart": "fk",
  "abof": "ab",
  "bewakoof": "bw",
  "chumbak": "ch",
  "cilory": "ci",
  "craftsvilla": "cv",
  "chemistryindia": "cy",
  "jabong": "ja",
  "koovs": "kv",
  "limeroad": "lr",
  "myntra": "my",
  "paytm": "pt",
  "snapdeal": "sd",
  "shopclues": "sc",
  "tata cliq": "tc",
  "raymond next": "rn",
  "fabindia": "fi",
  "voonik": "vo",
  "biba": "bi",
  "faballey": "fl",
  "soch": "so",
  "veromoda": "vm",
  "ajio": "aj",
  "bata": "ba",
  "babyoye": "bo",
  "bombay shirt": "bs",
  "coolmango": "cm",
  "daily objects": "do",
  "ebay": "eb",
  "fashion and you": "fy",
  "fashionara": "fa",
  "firstcry": "fc",
  "homeshop": "hs",
  "hopscotch": "ho",
  "infibeam": "ib",
  "itokri": "it",
  "jaypore": "jp",
  "kilol": "ki",
  "mirraw": "mi",
  "nnnow": "nn",
  "shimply": "sh",
  "shopcj": "sj",
  "stalkbuylove": "sb",
  "styletag": "st",
  "zovi": "zv"
}

var popup_frame =  document.querySelectorAll("#mc_pop_up div")[1] && document.querySelectorAll("#mc_pop_up div")[1].shadowRoot && document.querySelectorAll("#mc_pop_up div")[1].shadowRoot.querySelector("iframe")

window.addEventListener("message",function(message){

	if(message.origin == 'chrome-extension://'+chrome.runtime.id && message.data.origin=='popup'){
		// got from popup
		console.log('message from popup');
		var popup_frame =  document.querySelector("iframe#mc_pop_up")
		if(popup_frame){
			// get_the_images
			// send it
			// popup_frame.contentWindow.postMessage({'origin':'ext','text':'hello'},'chrome-extension://'+chrome.runtime.id)
			var image_list = get_images_for_results();
			popup_frame.contentWindow.postMessage({'origin':'ext','data-type':'all_images','data':image_list,'site_code':get_site_code()},'chrome-extension://'+chrome.runtime.id);
		}
	}
});

var image_results = {};
function get_images_for_results(){
	var image_list = document.body.querySelectorAll('img[src]');
	image_list =  filter_by_visibility(image_list);
	image_list = filter_not_loaded(image_list);
	image_list = filter_by_src_type(image_list);
	image_list = filter_by_size(image_list);

	var src_list = filter_undefined(image_list);


  console.log(src_list.length);
  src_list = filter_repeating_src(src_list);
	console.log("final",src_list.length);
	return src_list;
}

 function filter_by_visibility(_imgNodeList) {
    var _filtered = [],
        i, end = _imgNodeList.length;

    for (i=0;i<end;i++) {
      var _img = _imgNodeList[i],
          _style = window.getComputedStyle(_img);

      if (_style.getPropertyValue('display') != 'none' ) {
        _filtered.push(_img);
      }
    }
    console.log("visi filter",_imgNodeList.length,_filtered.length);
    return _filtered;
  }


 function filter_by_size(_imgNodeList) {
    var minScreenWidth = 224 ,
        sizeRatioH = 3,
        sizeRatioV = 0.3,
        _filtered = [],
        i, end = _imgNodeList.length;

    for (i = 0; i<end; i++) {
      var _img = _imgNodeList[i],
          _width = _img.naturalWidth,
          _height = _img.naturalHeight,
          _ratio = _width / _height;

      if (_width >= minScreenWidth && _ratio <= sizeRatioH && _ratio >= sizeRatioV) {
        _filtered.push(_img);
      }
    }


    var _filtered_1 = [];
    for(var i=0; i<_imgNodeList.length;i++){
    	var img = _imgNodeList[i];
    	if(img.naturalHeight >= 1.2*img.naturalWidth && img.naturalWidth>100 && img.naturalHeight>100){
    		_filtered.push(img);
    	}
    }
    console.log("size filter",_imgNodeList.length,_filtered.length);
    // return _filtered;

    if(_filtered.length>_filtered_1.length){
      return _filtered;
    }else{
      return _filtered_1;
    }

    // return _imgNodeList;
  }

  function filter_not_loaded(_imgNodeList){
  	var _filtered = [];
  	for(var i =0; i<_imgNodeList.length; i++){
  		if(_imgNodeList[i].complete){
  			_filtered.push(_imgNodeList[i]);
  		}
  	}
  	console.log("load filter",_imgNodeList.length,_filtered.length);
  	return _filtered;
  }

  function filter_by_src_type(_imgNodeList){
  	var _filtered = [];
  	for(var i=0; i<_imgNodeList.length;i++){
  		var src = _imgNodeList[i].src
  		if(!src.match("data:image/svg")){
  			_filtered.push(_imgNodeList[i]);
  		}
  	}
 	console.log("src lilter",_imgNodeList.length,_filtered.length);
  	return _filtered;
  }

 function filter_undefined(image_list){
    var src_list = [];
    for(var i=0; i<image_list.length;i++){
        var src = $(image_list[i]).attr('src');
        if(src ){
          if(src.startsWith("http")){
            src_list.push(src);  
          }
        }else{
          console.log(image_list[i]);
        }
    }
    console.log("undefined filter",image_list.length,src_list.length);
    return src_list;
 }

  function filter_repeating_src(src_list){
    console.log(src_list.length); 
    var _filtered = $.unique(src_list);
    console.log("rep filter",src_list.length,_filtered.length);
    return _filtered;
  }


 function filter_relative_src(_imgNodeList){
    var _filtered = [];
    for(var i =0; i<_imgNodeList.length; i++){
      var src = $(image_list[i]).attr('src');
        if(src && src.startsWith("http")){
          src_list.push(src);
        }else{
          console.log(image_list[i]);
        }
    }
    console.log("load filter",_imgNodeList.length,_filtered.length);
    return _filtered;
  }

function get_site_code(){
  var url = window.location.href
  var arr = url.split("/");
  var domain = arr[2];
  var site_name = "";
  if(domain.startsWith("www.")){
    site_name = domain.split(".")[1]
  }else{
    site_name = domain.split(".")[0]
  }
  var site_code = site_list[site_name]
  if(site_code){
    return site_code
  }else{
    return "not_available"
  }
}

