(function (window) {
	var Popup = function () {
		return this;
	};

	Popup.prototype = {
		id: 0,
		name: "Default",
		themes: {},
		init: function () {
			var popup = this;
			var themes = window.localStorage.getItem("themes");
			this.themes = themes ? JSON.parse(themes) : {};
			this.renderThemes();
		},
		saveTheme: function (evt) {
			if (evt) evt.preventDefault();
			document.querySelectorAll('.delete_theme, .switch_theme').forEach(function (n) {
				n.classList.remove('hide');
			});
			if (!this.id) {
				this.id = this.generateId();
				this.renderThemeOption(this.name, this.id, this.name);
			} else {
				this.toggleThemeOptions(this.id);
			}
			this.themes[this.name] = this.id;
			this.saveThemes();
			var json = JSON.stringify(MetaTheme.custom);
			chrome.storage.sync.set({"theme": json});
			window.localStorage.setItem('active', this.name);
			window.localStorage.setItem(this.id, json);
			this.showNotification('success',   'The theme (' + this.name + ') has been saved.');
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				if (!tabs[0].url || tabs[0].url.match('metacpan'))
					chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
			});
		},
		saveThemes: function () {
			window.localStorage.setItem("themes", JSON.stringify(this.themes));
		},
		renderThemes: function () {
			var pu = this;
			var themes = pu.themes;
			var active = window.localStorage.getItem('active');
			if (active) {
				pu.setThemeName(active);
				pu.id = themes[active];
				MetaTheme.load(JSON.parse(window.localStorage.getItem(pu.id)));
			} else {
				MetaTheme.load();
			}
			MetaTheme.setFontFields();
			MetaTheme.setModeField();
			MetaTheme.setColorPickers();
			var wrapper = document.querySelector('form#custom_theme_form table');
			Object.keys(themes).forEach(function (key) {
				pu.renderThemeOption(key, themes[key], active, wrapper);
			});
		},
		renderThemeOption: function (name, id, active, wrapper) {
			var pu = this,
				templateRow = document.querySelector('#custom_theme_template').cloneNode(true);
			templateRow.id = id;
			var nameField = templateRow.querySelector('input[name="theme_name"]');
				deleteField = templateRow.querySelector('.delete_theme');
				switchField = templateRow.querySelector('.switch_theme');
			nameField.setAttribute('data-name', name);
			nameField.value = name;
			if (name === active) {
				deleteField.classList.add('hide');
				switchField.classList.add('hide');
			}
			templateRow.classList.remove('hide');
			if (!wrapper) wrapper = document.querySelector('form#custom_theme_form table');
			wrapper.insertBefore(templateRow, wrapper.firstChild);
			nameField.addEventListener('change', function (evt) {
				var old = this.getAttribute('data-name');
				if (pu.themes[this.value]) {
					this.value = old;
					return;
				}
				pu.themes[this.value] = pu.themes[old];
				delete pu.themes[old];
				this.setAttribute('data-name', this.value);
				if (old === active) {
					active = this.value;
					pu.setThemeName(active);
				}
				pu.saveThemes();
			});
			deleteField.addEventListener('click', function (evt) {
				evt.preventDefault();
				delete pu.themes[nameField.value];
				pu.saveThemes();
				var row = this.parentNode.parentNode;
				row.parentNode.removeChild(row);
			});
			switchField.addEventListener('click', function (evt) {
				var oid = pu.id;
				pu.toggleThemeOptions(oid, 1);
				var id = pu.themes[nameField.value];
				pu.toggleThemeOptions(id);
				var theme = JSON.parse(window.localStorage.getItem(id));
				active = nameField.value;
				pu.setThemeName(active);
				pu.id = id;
				MetaTheme.switchTheme(theme);
				pu.saveTheme(evt);
			});
		},
		setThemeName: function (name) {
			window.localStorage.setItem('active', name);
			document.querySelector('form#export_form input[name="theme_name"]').value = name;
			this.name = name;
		},
		generateId: function () {
			var d = new Date().getTime();
			if (window.performance && typeof window.performance.now === "function") {
				d += performance.now();
			}
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = (d + Math.random()*16)%16 | 0;
				d = Math.floor(d/16);
				return 'a' + (c=='x' ? r : (r&0x3|0x8)).toString(16);
			});
			return 'a' +  uuid;
		},
		toggleThemeOptions: function (id, action) {
			action = action ? 'remove' : 'add';
			document.querySelector('#' + id + ' .delete_theme').classList[action]('hide');
			document.querySelector('#' + id + ' .switch_theme').classList[action]('hide');
		},
		exportTheme: function (evt) {
			if (evt) evt.preventDefault();
			var file = new Blob([JSON.stringify(MetaTheme.custom, null, "\t")], {type: 'application/json'});
			var a = document.createElement("a"),
				url = URL.createObjectURL(file);
			a.href = url;
			a.download = document.querySelector('#export_form input[name="theme_name"]').value;
			document.body.appendChild(a);
			a.click();
			setTimeout(function() {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);
			}, 0);
		},
		importTheme: function (name, theme) {
			theme = JSON.parse(theme);
			this.id = this.themes[name] ? this.themes[name] : 0;
			this.setThemeName(name);
			MetaTheme.switchTheme(theme);
			pu.saveTheme();
		},
		showNotification: function (type, message) {
			var notification = document.createElement('div');
			notification.classList.add('notification');
			notification.classList.add(type);
			var p = document.createElement('p');
			p.innerText = message;
			notification.appendChild(p);
			document.body.insertBefore(notification, document.body.firstChild);
			setTimeout(function () {
				document.body.removeChild(notification);
			}, 1500);
		}
	};

	var pu = new Popup;

	window.addEventListener('DOMContentLoaded', function () {
		pu.init();
	});

	document.querySelector('input#toggle_all').addEventListener('change', function (e) {
		document.querySelectorAll('fieldset.inner input[type="checkbox"]:first-child').forEach(function (inp) {
			inp.checked = e.target.checked;
		});
	});

	document.querySelectorAll('form#fonts_form, form#colours_form').forEach(function (f) {
		f.addEventListener('submit', function (evt) { pu.saveTheme(evt) });
	});

	document.querySelector('input#save_theme').addEventListener('click', function (evt) { pu.saveTheme(evt) });

	document.querySelector('form#export_form input[name="theme_name"]').addEventListener('change', function (evt) {
		pu.name = this.value;
		pu.id =  pu.themes[this.value] ? pu.themes[this.value] : 0;
	});

	document.querySelector('input#export_theme').addEventListener('click', pu.exportTheme);

	document.querySelector('form#import_form input[name="theme_file"]').addEventListener('change', function (evt) {
		var name = evt.target.files[0].name.replace(new RegExp('.json$'), '');
		document.querySelector('form#import_form input[name="theme_name"]').value = name;
	});

	document.querySelector('form#import_form').addEventListener('submit', function (evt) {
		evt.preventDefault();
		var file = document.querySelector('form#import_form input[name="theme_file"]').files[0];
		var name = document.querySelector('form#import_form input[name="theme_name"]').value;
		var read = new FileReader();
		read.readAsBinaryString(file);
		read.onloadend = function () {
			pu.importTheme(name, read.result);

		}
	});

})(window);
