/***Developed by Ajinkya***/
var min = 0;
var max = 1;
var current = min;
var id = 100;

updateIcon();
chrome.browserAction.onClicked.addListener(function(tab) {
	
	if(current)
		chrome.tabs.sendMessage(tab.id, { type: "distance"});
	else
		chrome.tabs.sendMessage(tab.id, { type: "clear"});
	updateIcon();
});
function updateIcon() {
  chrome.browserAction.setIcon({path:"icon" + current + ".png"});
  current++;

  if (current > max)
    current = min;
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.name == 'screenshot') {
        chrome.tabs.captureVisibleTab(null,
        {},
		function(screenshotUrl) {
		sendResponse({url:screenshotUrl})
	  });
	  return true;
    }
});