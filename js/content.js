chrome.storage.sync.get("theme",function(res) {
	var theme = JSON.parse(res.theme);
	MetaTheme.load(theme);
	MetaTheme.buildCSS();
});
