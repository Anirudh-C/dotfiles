var scr = document.createElement("script");

scr.src = 'chrome-extension://' + chrome.runtime.id + '/pages/client/livestartpage-message-add.js';

//document.documentElement.appendChild(scr); // Task #1364

try{
    document.head.appendChild(scr);
}catch(ex){}
