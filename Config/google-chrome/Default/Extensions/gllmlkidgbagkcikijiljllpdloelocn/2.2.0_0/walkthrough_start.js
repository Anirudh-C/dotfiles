// alert('wait for Walkthrough to load');
var housefly = chrome.extension.getURL('logo_housefly_new.png');
var start_prompt;
console.log('Walkthrough started');
setTimeout(disp_start_prompt,100)

function disp_start_prompt(){
	var html_prompt="<div style='font-size:large;'>  <p style='text-align:center;font-weight: bold;'><img src='"+housefly+"' style='vertical-align:middle;'>Thanks for Installing <em><span style='color:#d4534e;'>Makkhi</span><span style='color:#6d6d6d'>Choose</span> </p><p> Please wait for the Walkthrough to load </p></div>"
start_prompt=$.prompt(html_prompt,{

		position:{
			container:$('body'),
			width:525, 
			x:parseInt($('body').width()/4),

			// y:parseInt($(window).height()/2)
		},
			
		timeout:5000,
});
}
