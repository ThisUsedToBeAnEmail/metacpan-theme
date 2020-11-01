chrome.storage.sync.get("theme",function(res) {
	if (!window.location.host.match('^grep')) {
		var theme = JSON.parse(res.theme);
		MetaTheme.load(theme);
		MetaTheme.buildCSS();
	}
});

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse) {
	console.log(request);
	if (request.type === 'customStyle') {
		MetaTheme.customStyle(request.name, request.value);
		MetaTheme.buildCSS();
	}
});
