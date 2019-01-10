console.log("from bg_manage.js")
chrome.management.getAll(function(info_objs){

	for(var i=0; i<info_objs.length; i++){

		if(info_objs[i]['name'] == "MakkhiChoose"){
			if(info_objs[i]['enabled']){
				var id = info_objs[i]['id'];

	            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
	                chrome.tabs.sendMessage(tabs[0].id, {method: "show_mc_remove_notif", "id": id}, function (response) {
	                    console.log("makkhi disable message sent to content script");
	                });
	            });
			}
		}


	}
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){

	if(message.method == "disable_ext"){
		chrome.management.setEnabled(message.id,false,function(response){
			console.log("disable ext message recieved");
		}); 
	}

	return true;
});