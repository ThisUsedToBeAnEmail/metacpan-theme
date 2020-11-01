chrome.storage.sync.get("theme",function(res) {
	if (!window.location.host.match('^grep')) {
		var theme = JSON.parse(res.theme);
		MetaTheme.load(theme);
		MetaTheme.buildCSS();
	}
});
