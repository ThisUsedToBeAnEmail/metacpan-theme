window.addEventListener('DOMContentLoaded', function () {
	MetaTheme.load();
	MetaTheme.setFontFields();
	MetaTheme.setModeField();
	MetaTheme.setColorPickers();
});

document.querySelector('input[name="dark_mode"]').addEventListener('change', function () {
	var mode = this.checked ? 'dark' : 'light';
	MetaTheme.switchMode(mode);
});

document.querySelector('input#toggle_all').addEventListener('change', function (e) {
	document.querySelectorAll('fieldset.inner input[type="checkbox"]:first-child').forEach(function (inp) {
		inp.checked = e.target.checked;
	});
});

document.querySelector('.account-settings form').addEventListener('submit', function (evt) {	
	chrome.storage.sync.set({"theme": JSON.stringify(MetaTheme.custom)});
	window.localStorage.setItem('theme', JSON.stringify(MetaTheme.custom));
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		if (!tabs[0].url || tabs[0].url.match('metacpan'))
			chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
	});
});

