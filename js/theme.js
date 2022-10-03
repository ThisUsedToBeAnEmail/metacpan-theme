(function (window) {
	var Theme = function () {
		return this;
	};

	Theme.prototype = {
		loaded: false,
		fonts: [
			{ name: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
			{ name: "Menlo, Monaco, 'DejaVu Sans Mono', Consolas, 'Bitstream Vera Sans Mono', Courier, 'Courier New', monospace" },
			{ name: "Montez", url: "https://fonts.googleapis.com/css?family=Montez" },
			{ name: "Lobster", url: "https://fonts.googleapis.com/css?family=Lobster" },
			{ name: "Josefin Sans", url: "https://fonts.googleapis.com/css?family=Josefin+Sans" },
			{ name: "Shadows Into Light", url: "https://fonts.googleapis.com/css?family=Shadows+Into+Light"},
			{ name: "Pacifico", url: "https://fonts.googleapis.com/css?family=Pacifico" },
			{ name: "Amatic SC", url: "https://fonts.googleapis.com/css?family=Amatic+SC" },
			{ name: "Orbitron",  url: "https://fonts.googleapis.com/css?family=Orbitron" },
			{ name: "Roboto", url: "https://fonts.googleapis.com/css?family=Roboto" },
			{ name: "Rokkitt", url: "https://fonts.googleapis.com/css?family=Rokkitt" },
			{ name: "Righteous", url: "https://fonts.googleapis.com/css?family=Righteous" },
			{ name: "Dancing Script", url: "https://fonts.googleapis.com/css?family=Dancing+Script" },
			{ name: "Bangers", url: "https://fonts.googleapis.com/css?family=Bangers" },
			{ name: "Chewy", url: "https://fonts.googleapis.com/css?family=Chewy" },
			{ name: "Sigmar One", url: "https://fonts.googleapis.com/css?family=Signer+One" },
			{ name: "Architects Daughter", url: "https://fonts.googleapis.com/css?family=Architects+Daughter" },
			{ name: "Abril Fatface", url: "https://fonts.googleapis.com/css?family=Abril+Fatface" },
			{ name: "Covered By Your Grace", url: "https://fonts.googleapis.com/css?family=Covered+By+Your+Grace" },
			{ name: "Kaushan Script", url: "https://fonts.googleapis.com/css?family=Kaushan+Script" },
			{ name: "Gloria Hallelujah", url: "https://fonts.googleapis.com/css?family=Gloria+Hallelujah" },
			{ name: "Satisfy", url: "https://fonts.googleapis.com/css?family=Satisfy" },
			{ name: "Lobster Two", url: "https://fonts.googleapis.com/css?family=Lobster+Two" },
			{ name: "Comfortaa", url: "https://fonts.googleapis.com/css?family=Comfortaa" },
			{ name: "Cinzel", url: "https://fonts.googleapis.com/css?family=Cinzel" },
			{ name: "Courgette", url: "https://fonts.googleapis.com/css?family=Courgette" },
			{ name: "Oswald", url: "https://fonts.googleapis.com/css?family=Oswald" },
		],
		fontFamilySelectors: [
			'body_font_family',
			'syntax_font_family',
		],
		fontSizeSelectors: [
			'body_font_size',
			'input_font_size',
			'h1_font_size',
			'h2_font_size',
			'h3_font_size',
			'h4_font_size',
			'h5_font_size',
			'h6_font_size'
		],
		fontDefaults: {
			'body_font_family': { name: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
			'syntax_font_family': { name: "Menlo, Monaco, 'DejaVu Sans Mono', Consolas, 'Bitstream Vera Sans Mono', Courier, 'Courier New', monospace" },
			'body_font_size': '15',
			'input_font_size': '14',
			'h1_font_size': '39',
			'h2_font_size': '32',
			'h3_font_size': '26',
			'h4_font_size': '19',
			'h5_font_size': '15',
			'h6_font_size': '13'
		},
		colorSelectors: [
			'main_background_color',
			'main_font_color',
			'main_second_font_color',
			'main_border_color',
			'main_box_shadow_color',
			'main_text_shadow_color',
			'main_hover_background_color',
			'main_login_color',
			'secondary_background_color',
			'secondary_font_color',
			'secondary_border_color',
			'footer_background_color',
			'footer_font_color',
			'nav_background_color',
			'nav_border_color',
			'nav_header_font_color',
			'nav_font_color',
			'nav_selected_color',
			'nav_selected_font_color',
			'nav_selected_border_color',
			'nav_selected_box_shadow_color',
			'nav_hover_background_color',
			'nav_hover_font_color',
			'nav_hover_border_color',
			'nav_side_background_color',
			'nav_side_font_color',
			'nav_side_link_color',
			'nav_side_selected_color',
			'nav_side_selected_font_color',
			'nav_side_hover_background_color',
			'nav_side_hover_font_color',
			'input_background_color',
			'input_font_color',
			'input_border_color',
			'input_focus_border_color',
			'input_focus_box_shadow_color',
			'btn_background_color',
			'btn_secondary_background_color',
			'btn_third_background_color',
			'btn_font_color',
			'btn_border_color',
			'btn_hover_background_color',
			'link_font_color',
			'link_hover_font_color',
			'pagination_background_color',
			'pagination_font_color',
			'pagination_border_color',
			'pagination_selected_background_color',
			'pagination_selected_font_color',
			'pagination_selected_border_color',
			'pagination_disabled_background_color',
			'pagination_disabled_font_color',
			'pagination_disabled_border_color',
			'syntax_keyword_color',
			'syntax_plain_color',
			'syntax_functions_color',
			'syntax_string_color',
			'syntax_comments_color',
			'syntax_variable_color',
			'syntax_border_color',
			'syntax_line_number_color',
			'syntax_hover_line_number_color',
			'syntax_selected_line_background_color',
			'activity_background_color',
			'primary_background_color',
			'primary_font_color',
			'primary_border_color',
			'primary_hover_background_color',
			'primary_hover_font_color',
			'primary_hover_border_color',
			'warning_background_color',
			'warning_font_color',
			'warning_border_color',
			'warning_hover_background_color',
			'warning_hover_font_color',
			'warning_hover_border_color',
			'success_background_color',
			'success_font_color',
			'success_border_color',
			'success_hover_background_color',
			'success_hover_font_color',
			'success_hover_border_color',
			'danger_background_color',
			'danger_font_color',
			'danger_border_color',
			'danger_hover_background_color',
			'danger_hover_font_color',
			'danger_hover_border_color',
			'info_background_color',
			'info_font_color',
			'info_border_color',
			'info_hover_background_color',
			'info_hover_font_color',
			'info_hover_border_color',
			'alert_success_background_color',
			'alert_success_font_color',
			'alert_success_border_color',
			'alert_success_link_color',
			'alert_warning_background_color',
			'alert_warning_border_color',
			'alert_warning_font_color',
			'alert_warning_link_color',
			'alert_info_background_color',
			'alert_info_border_color',
			'alert_info_font_color',
			'alert_info_link_color',
			'alert_danger_background_color',
			'alert_danger_border_color',
			'alert_danger_font_color',
			'alert_danger_link_color'
		],
		schemes: [
			{
				name: 'Default',
				value: 'default'
			},
			{
				name: 'Light',
				value: 'light'
			},
			{
				name: 'Dark',
				value: 'dark'
			},
			{
				name: 'Solarized Light',
				value: 'solarized_light'
			},
			{
				name: 'Solarized Dark',
				value: 'solarized_dark'
			}
		],
		default: {
			header_logo: 'url(' + chrome.runtime.getURL('images/metacpan-white-logo.png') + ')',
			logo: 'url(' + chrome.runtime.getURL('images/metacpan-logo.png') + ')',
			main_background_color: '#ffffff',
			main_font_color: '#333333',
			main_second_font_color: '#545454',
			main_border_color: '#ffffff',
			main_box_shadow_color: '#cccccc',
			main_text_shadow_color: 'rgba(255, 255, 255, 0.75)',
			main_hover_background_color: '#ddeeff',
			main_login_color: '#da2037',
			secondary_background_color: '#f5f5f5',
			secondary_font_color: '#333333',
			secondary_border_color: '#cccccc',
			footer_background_color: '#e9e9e9',
			footer_font_color: '#333333',	
			nav_background_color: '#222222',
			nav_border_color: '#222222',
			nav_header_font_color: '#999',
			nav_font_color: '#ffffff',
			nav_selected_color: '#ffffff',
			nav_side_background_color: '#e9e9e9',
			nav_side_font_color: '#333333',
			nav_side_link_color: '#000000',
			nav_side_hover_font_color: '#000000',
			nav_side_selected_color: '#ddd',
			nav_side_selected_font_color: '#000000',
			nav_side_hover_background_color: '#eeeeee',
			nav_selected_font_color: '#ffffff',
			nav_selected_border_color: '#da2037',
			nav_selected_box_shadow_color: '#e9e9e9',
			nav_hover_font_color: '#ffffff',
			nav_hover_border_color: '#3366cc',
			nav_hover_background_color: '#ffffff',
			input_background_color: '#ffffff',
			input_font_color: '#555555',
			input_border_color: '#cccccc',
			input_focus_border_color: '#66afe9',
			input_focus_box_shadow_color: '#66afe999',
			btn_background_color: '#ffffff',
			btn_secondary_background_color: '#ffffff',
			btn_third_background_color: '#e6e6e6',
			btn_font_color: '#555555',
			btn_border_color: '#dddddd',
			btn_hover_background_color: '#e6e6e6',
			link_font_color: '#337ab7',
			link_hover_font_color: '#23527c',
			pagination_background_color: '#ffffff',
			pagination_font_color: '#337ab7',
			pagination_border_color: '#dddddd',
			pagination_selected_background_color: '#337ab7',
			pagination_selected_font_color: '#ffffff',
			pagination_selected_border_color: '#337ab7',
			pagination_disabled_background_color: '#ffffff',
			pagination_disabled_font_color: '#777777',
			pagination_disabled_border_color: '#dddddd',
			syntax_keyword_color: '#006699',
			syntax_plain_color: '#000',
			syntax_functions_color: '#ff1493',
			syntax_string_color: '#0000ff',
			syntax_comments_color: '#008200',
			syntax_variable_color: '#aa7700',
			syntax_border_color: '#6ce26c',
			syntax_line_number_color: '#337ab7',
			syntax_hover_line_number_color: '#23527c',
			syntax_selected_line_background_color: '#e0e0e0',
			activity_background_color: '#36C',
			warning_background_color: '#f0ad4e',
			warning_font_color: '#ffffff',
			warning_border_color: '#eea236',
			warning_hover_background_color: '#ec971f',
			warning_hover_font_color: '#ffffff',
			warning_hover_border_color: '#d58512',
			primary_background_color: '#337ab7',
			primary_font_color: '#ffffff',
			primary_border_color: '#2e6da4',
			primary_hover_background_color: '#286090',
			primary_hover_font_color: '#ffffff',
			primary_hover_border_color: '#204d74',
			success_background_color: '#5cb85c',
			success_font_color: '#ffffff',
			success_border_color: '#4cae4c',
			success_hover_background_color: '#449d44',
			success_hover_font_color: '#ffffff',
			success_hover_border_color: '#398439',
			danger_background_color: '#d9534f',
			danger_font_color: '#ffffff',
			danger_border_color: '#d43f3a',
			danger_hover_background_color: '#c9302c',
			danger_hover_font_color: '#ffffff',
			danger_hover_border_color: '#ac2925',
			info_background_color: '#5bc0de',
			info_font_color: '#ffffff',
			info_border_color: '#46b8da',
			info_hover_background_color: '#31b0d5',
			info_hover_font_color: '#ffffff',
			info_hover_border_color: '#269abc',
			alert_success_background_color: '#d7f5dd',
			alert_success_font_color: '#333333',
			alert_success_border_color: '#d6e9c6',
			alert_success_link_color: '#337ab7',
			alert_warning_background_color: '#fcf8e3',
			alert_warning_font_color: '#8a6d3b',
			alert_warning_border_color: '#faebcc',
			alert_warning_link_color: '#337ab7',
			alert_info_background_color: '#d7e1f5',
			alert_info_font_color: '#333333',
			alert_info_border_color: '#4083a3',
			alert_info_link_color: '#337ab7',
			alert_danger_background_color: '#f2dede',
			alert_danger_font_color: '#333333',
			alert_danger_border_color: '#ebccd1',
			alert_danger_link_color: '#337ab7'
		},
		dark: {
			header_logo: 'url(' + chrome.runtime.getURL('images/metacpan-logo-light.png') + ')',
			logo: 'url(' + chrome.runtime.getURL('images/metacpan-logo-light.png') + ')',
			main_background_color: '#333639',
			main_font_color: '#dadada',
			main_second_font_color: '#cacaca',
			main_border_color: '#1f2225',
			main_box_shadow_color: '#5b5e61',
			main_text_shadow_color: 'rgba(91, 94, 97, 0.75)',
			main_hover_background_color: '#1f2325',
			main_login_color: '#da2037',
			secondary_background_color: '#3d4043',
			secondary_font_color: '#dadada',
			secondary_border_color: '#3d4043',
			footer_background_color: '#3d4043',
			footer_font_color: '#dadada',
			nav_background_color: '#1f2225',
			nav_border_color: '#292c2f',
			nav_header_font_color: '#999',
			nav_font_color: '#dadada',
			nav_selected_color: '#333639',
			nav_side_background_color: '#1f2225',
			nav_side_font_color: '#dadada',
			nav_side_link_color: '#dadada',
			nav_side_hover_font_color: '#ffffff',
			nav_side_selected_color: '#1f2226',
			nav_side_selected_font_color: '#ffffff',
			nav_side_hover_background_color: '#1f2225',
			nav_selected_font_color: '#ffffff',
			nav_selected_border_color: '#3d4043',
			nav_selected_box_shadow_color: '#3d4043',
			nav_hover_font_color: '#ffffff',
			nav_hover_border_color: '#ffffff',
			nav_hover_background_color: '#1f2225',
			input_background_color: '#1f2225',
			input_font_color: '#dadada',
			input_border_color: '#282c2f',
			input_focus_border_color: '#3d4043',
			input_focus_box_shadow_color: '#717171',
			btn_background_color: '#292c2f',
			btn_secondary_background_color: 'rgba(41, 44, 47, 0.5)',
			btn_third_background_color: 'rgba(31, 34, 37, 0.8)',
			btn_font_color: '#dadada',
			btn_border_color: '#14181b',
			btn_hover_background_color: '#14181b',
			link_font_color: '#ffffff',
			link_hover_font_color: '#fcfcfc',
			pagination_background_color: '#1f2225',
			pagination_font_color: '#dadada',
			pagination_border_color: '#292c2f',
			pagination_selected_background_color: '#dadada',
			pagination_selected_font_color: '#1f2225',
			pagination_selected_border_color: '#292c2f',
			pagination_disabled_background_color: '#14181b',
			pagination_disabled_font_color: '#dadada',
			pagination_disabled_border_color: '#292c2f',
			syntax_keyword_color: '#8fc9e6',
			syntax_plain_color: '#dadada',
			syntax_functions_color: '#8fc9e6',
			syntax_string_color: '#9393ff',
			syntax_comments_color: '#6efb6e',
			syntax_variable_color: '#f3c968',
			syntax_border_color: '#292c2f',
			syntax_line_number_color: '#ff5050',
			syntax_hover_line_number_color: '#ff7f7f',
			syntax_selected_line_background_color: '#1e2224',
			activity_background_color: '#dadada',
			warning_background_color: '#f0ad4e',
			warning_font_color: '#ffffff',
			warning_border_color: '#eea236',
			warning_hover_background_color: '#ec971f',
			warning_hover_font_color: '#ffffff',
			warning_hover_border_color: '#d58512',
			primary_background_color: '#337ab7',
			primary_font_color: '#ffffff',
			primary_border_color: '#2e6da4',
			primary_hover_background_color: '#286090',
			primary_hover_font_color: '#ffffff',
			primary_hover_border_color: '#204d74',
			success_background_color: '#5cb85c',
			success_font_color: '#ffffff',
			success_border_color: '#4cae4c',
			success_hover_background_color: '#449d44',
			success_hover_font_color: '#ffffff',
			success_hover_border_color: '#398439',
			danger_background_color: '#d9534f',
			danger_font_color: '#ffffff',
			danger_border_color: '#d43f3a',
			danger_hover_background_color: '#c9302c',
			danger_hover_font_color: '#ffffff',
			danger_hover_border_color: '#ac2925',
			info_background_color: '#5bc0de',
			info_font_color: '#ffffff',
			info_border_color: '#46b8da',
			info_hover_background_color: '#31b0d5',
			info_hover_font_color: '#ffffff',
			info_hover_border_color: '#269abc',
			alert_success_background_color: '#d7f5dd',
			alert_success_font_color: '#333333',
			alert_success_border_color: '#d6e9c6',
			alert_success_link_color: '#337ab7',
			alert_warning_background_color: '#f5efd7',
			alert_warning_font_color: '#333333',
			alert_warning_border_color: '#faebcc',
			alert_warning_link_color: '#337ab7',
			alert_info_background_color: '#d7e1f5',
			alert_info_font_color: '#333333',
			alert_info_border_color: '#4083a3',
			alert_info_link_color: '#337ab7',
			alert_danger_background_color: '#f2dede',
			alert_danger_font_color: '#333333',
			alert_danger_border_color: '#ebccd1',
			alert_danger_link_color: '#337ab7'
		},
		light: {
			header_logo: 'url(' + chrome.runtime.getURL('images/metacpan-logo.png') + ')',
			logo: 'url(' + chrome.runtime.getURL('images/metacpan-logo.png') + ')',
			main_background_color: '#ffffff',
			main_font_color: '#333333',
			main_second_font_color: '#545454',
			main_border_color: '#e5e5e5',
			main_box_shadow_color: '#cccccc',
			main_text_shadow_color: 'rgba(255, 255, 255, 0.75)',
			main_hover_background_color: '#ddeeff',
			main_login_color: '#da2037',
			secondary_background_color: '#f9f9f9',
			secondary_font_color: '#333333',
			secondary_border_color: '#cccccc',
			footer_background_color: '#f9f9f9',
			footer_font_color: '#333333',
			nav_background_color: '#f8f8f8',
			nav_border_color: '#e7e7e7',
			nav_header_font_color: '#999',
			nav_font_color: '#3366cc',
			nav_selected_color: '#ffffff',
			nav_side_background_color: '#f8f8f8',
			nav_side_font_color: '#3366cc',
			nav_side_link_color: '#3366cc',
			nav_side_hover_font_color: '#3366cc',
			nav_side_selected_color: '#337ab7',
			nav_side_selected_font_color: '#ffffff',
			nav_side_hover_background_color: '#eeeeee',
			nav_selected_font_color: '#000000',
			nav_selected_border_color: '#3366cc',
			nav_selected_box_shadow_color: '#e9e9e9',
			nav_hover_font_color: '#3366cc',
			nav_hover_border_color: '#3366cc',
			nav_hover_background_color: '#ffffff',
			input_background_color: '#ffffff',
			input_font_color: '#555555',
			input_border_color: '#cccccc',
			input_focus_border_color: '#66afe9',
			input_focus_box_shadow_color: '#66afe999',
			btn_background_color: '#f5f5f5',
			btn_secondary_background_color: '#ffffff',
			btn_third_background_color: '#e6e6e6',
			btn_font_color: '#333333',
			btn_border_color: '#cccccc #cccccc #b3b3b3',
			btn_hover_background_color: '#e6e6e6',
			link_font_color: '#337ab7',
			link_hover_font_color: '#23527c',
			pagination_background_color: '#ffffff',
			pagination_font_color: '#337ab7',
			pagination_border_color: '#dddddd',
			pagination_selected_background_color: '#337ab7',
			pagination_selected_font_color: '#ffffff',
			pagination_selected_border_color: '#337ab7',
			pagination_disabled_background_color: '#ffffff',
			pagination_disabled_font_color: '#777777',
			pagination_disabled_border_color: '#dddddd',
			syntax_keyword_color: '#006699',
			syntax_plain_color: '#000',
			syntax_functions_color: '#ff1493',
			syntax_string_color: '#0000ff',
			syntax_comments_color: '#008200',
			syntax_variable_color: '#aa7700',
			syntax_border_color: '#6ce26c',
			syntax_line_number_color: '#337ab7',
			syntax_hover_line_number_color: '#23527c',
			syntax_selected_line_background_color: '#e0e0e0',
			activity_background_color: '#36C',
			warning_background_color: '#f0ad4e',
			warning_font_color: '#ffffff',
			warning_border_color: '#eea236',
			warning_hover_background_color: '#ec971f',
			warning_hover_font_color: '#ffffff',
			warning_hover_border_color: '#d58512',
			primary_background_color: '#337ab7',
			primary_font_color: '#ffffff',
			primary_border_color: '#2e6da4',
			primary_hover_background_color: '#286090',
			primary_hover_font_color: '#ffffff',
			primary_hover_border_color: '#204d74',
			success_background_color: '#5cb85c',
			success_font_color: '#ffffff',
			success_border_color: '#4cae4c',
			success_hover_background_color: '#449d44',
			success_hover_font_color: '#ffffff',
			success_hover_border_color: '#398439',
			danger_background_color: '#d9534f',
			danger_font_color: '#d43f3a',
			danger_border_color: '#ffffff',
			danger_hover_background_color: '#c9302c',
			danger_hover_font_color: '#ffffff',
			danger_hover_border_color: '#ac2925',
			info_background_color: '#5bc0de',
			info_font_color: '#ffffff',
			info_border_color: '#46b8da',
			info_hover_background_color: '#31b0d5',
			info_hover_font_color: '#ffffff',
			info_hover_border_color: '#269abc',
			alert_success_background_color: '#d7f5dd',
			alert_success_font_color: '#333333',
			alert_success_border_color: '#d6e9c6',
			alert_success_link_color: '#337ab7',
			alert_warning_background_color: '#f5efd7',
			alert_warning_font_color: '#333333',
			alert_warning_border_color: '#faebcc',
			alert_warning_link_color: '#337ab7',
			alert_info_background_color: '#d7e1f5',
			alert_info_font_color: '#333333',
			alert_info_border_color: '#4083a3',
			alert_info_link_color: '#337ab7',
			alert_danger_background_color: '#f2dede',
			alert_danger_font_color: '#333333',
			alert_danger_border_color: '#ebccd1',
			alert_danger_link_color: '#337ab7'
		},
		solarized_light: {
			header_logo: 'url(' + chrome.runtime.getURL('images/metacpan-logo-solarize-dark.png') + ')',
			logo: 'url(' + chrome.runtime.getURL('images/metacpan-logo-solarize-dark.png') + ')',
			main_background_color: '#fdf6e3',
			main_font_color: '#073642',
			main_second_font_color: '#002b36',
			main_border_color: '#eee8d5',
			main_box_shadow_color: '#fdf6e3',
			main_text_shadow_color: 'rgba(91, 94, 97, 0.75)',
			main_hover_background_color: '#657b83',
			main_login_color: '#da2037',
			secondary_background_color: '#eee8d5',
			secondary_font_color: '#073642',
			secondary_border_color: '#073642',
			footer_background_color: '#eee8d5',
			footer_font_color: '#073642',
			nav_background_color: '#eee8d5',
			nav_border_color: '#fdf6e3',
			nav_header_font_color: '#073642',
			nav_font_color: '#073642',
			nav_selected_color: '#fdf6e3',
			nav_side_background_color: '#eee8d5',
			nav_side_font_color: '#073642',
			nav_side_link_color: '#073642',
			nav_side_selected_color: '#eee8d5',
			nav_side_selected_font_color: '#002b36',
			nav_side_hover_background_color: '#eee8d5',
			nav_side_hover_font_color: '#002b36',
			nav_selected_font_color: '#002b36',
			nav_selected_border_color: '#eee8d5',
			nav_selected_box_shadow_color: '#eee8d5',
			nav_hover_font_color: '#002b36',
			nav_hover_border_color: '#002b36',
			nav_hover_background_color: '#eee8d5',
			input_background_color: '#eee8d5',
			input_font_color: '#073642',
			input_border_color: '#fdf6e3',
			input_focus_border_color: '#eee8d5',
			input_focus_box_shadow_color: '#93a1a1',
			btn_background_color: '#fdf6e3',
			btn_secondary_background_color: 'rgba(253, 246, 227, 0.5)',
			btn_third_background_color: 'rgba(238, 232, 213, 0.8)',
			btn_font_color: '#073642',
			btn_border_color: '#eee8d5',
			btn_hover_background_color: '#eee8d5',
			link_font_color: '#002b36',
			link_hover_font_color: '#073642',
			pagination_background_color: '#eee8d5',
			pagination_font_color: '#073642',
			pagination_border_color: '#fdf6e3',
			pagination_selected_background_color: '#073642',
			pagination_selected_font_color: '#eee8d5',
			pagination_selected_border_color: '#fdf6e3',
			pagination_disabled_background_color: '#eee8d5',
			pagination_disabled_font_color: '#073642',
			pagination_disabled_border_color: '#fdf6e3',
			syntax_keyword_color: '#859900',
			syntax_plain_color: '#268bd2',
			syntax_functions_color: '#2aa198',
			syntax_string_color: '#2aa198',
			syntax_comments_color: '#839496',
			syntax_variable_color: '#b58900',
			syntax_border_color: '#93a1a1',
			syntax_line_number_color: '#93a1a1',
			syntax_hover_line_number_color: '#dc322f',
			syntax_selected_line_background_color: '#073642',
			activity_background_color: '#073642',
			warning_background_color: '#cb4b16',
			warning_font_color: '#eee8d5',
			warning_border_color: '#a33a0f',
			warning_hover_background_color: '#85300d',
			warning_hover_font_color: '#eee8d5',
			warning_hover_border_color: '#692408',
			primary_background_color: '#268bd2',
			primary_font_color: '#eee8d5',
			primary_border_color: '#2079B7',
			primary_hover_background_color: '#175F91',
			primary_hover_font_color: '#eee8d5',
			primary_hover_border_color: '#204d74',
			success_background_color: '#859900',
			success_font_color: '#eee8d5',
			success_border_color: '#687702',
			success_hover_background_color: '#505b02',
			success_hover_font_color: '#eee8d5',
			success_hover_border_color: '#3d4501',
			danger_background_color: '#dc322f',
			danger_font_color: '#eee8d5',
			danger_border_color: '#d43f3a',
			danger_hover_background_color: '#c9302c',
			danger_hover_font_color: '#eee8d5',
			danger_hover_border_color: '#ac2925',
			info_background_color: '#2aa198',
			info_font_color: '#eee8d5',
			info_border_color: '#207f78',
			info_hover_background_color: '#17615c',
			info_hover_font_color: '#eee8d5',
			info_hover_border_color: '#114b47',
			alert_success_background_color: '#859900',
			alert_success_font_color: '#eee8d5',
			alert_success_border_color: '#859900',
			alert_success_link_color: '#268bd2',
			alert_warning_background_color: '#cb4b16',
			alert_warning_font_color: '#eee8d5',
			alert_warning_border_color: '#cb4b16',
			alert_warning_link_color: '#268bd2',
			alert_info_background_color: '#2aa198',
			alert_info_font_color: '#eee8d5',
			alert_info_border_color: '#2aa198',
			alert_info_link_color: '#268bd2',
			alert_danger_background_color: '#dc322f',
			alert_danger_font_color: '#eee8d5',
			alert_danger_border_color: '#dc322f',
			alert_danger_link_color: '#268bd2'
		},
		solarized_dark: {
			header_logo: 'url(' + chrome.runtime.getURL('images/metacpan-logo-solarize-light.png') + ')',
			logo: 'url(' + chrome.runtime.getURL('images/metacpan-logo-solarize-light.png') + ')',
			main_background_color: '#073642',
			main_font_color: '#fdf6e3',
			main_second_font_color: '#eee8d5',
			main_border_color: '#002b36',
			main_box_shadow_color: '#073642',
			main_text_shadow_color: 'rgba(91, 94, 97, 0.75)',
			main_hover_background_color: '#657b83',
			main_login_color: '#da2037',
			secondary_background_color: '#002b36',
			secondary_font_color: '#fdf6e3',
			secondary_border_color: '#fdf6e3',
			footer_background_color: '#002b36',
			footer_font_color: '#fdf6e3',
			nav_background_color: '#002b36',
			nav_border_color: '#073642',
			nav_header_font_color: '#fdf6e3',
			nav_font_color: '#fdf6e3',
			nav_selected_color: '#073642',
			nav_side_background_color: '#002b36',
			nav_side_font_color: '#fdf6e3',
			nav_side_link_color: '#fdf6e3',
			nav_side_selected_color: '#002b36',
			nav_side_selected_font_color: '#eee8d5',
			nav_side_hover_background_color: '#002b36',
			nav_side_hover_font_color: '#eee8d5',
			nav_selected_font_color: '#eee8d5',
			nav_selected_border_color: '#002b36',
			nav_selected_box_shadow_color: '#002b36',
			nav_hover_font_color: '#eee8d5',
			nav_hover_border_color: '#eee8d5',
			nav_hover_background_color: '#002b36',
			input_background_color: '#002b36',
			input_font_color: '#fdf6e3',
			input_border_color: '#073642',
			input_focus_border_color: '#002b36',
			input_focus_box_shadow_color: '#93a1a1',
			btn_background_color: '#073642',
			btn_secondary_background_color: 'rgba(0, 43, 54, 0.5)',
			btn_third_background_color: 'rgba(7, 54, 66, 0.8)',
			btn_font_color: '#fdf6e3',
			btn_border_color: '#002b36',
			btn_hover_background_color: '#002b36',
			link_font_color: '#eee8d5',
			link_hover_font_color: '#fdf6e3',
			pagination_background_color: '#002b36',
			pagination_font_color: '#fdf6e3',
			pagination_border_color: '#073642',
			pagination_selected_background_color: '#fdf6e3',
			pagination_selected_font_color: '#002b36',
			pagination_selected_border_color: '#073642',
			pagination_disabled_background_color: '#002b36',
			pagination_disabled_font_color: '#fdf6e3',
			pagination_disabled_border_color: '#073642',
			syntax_keyword_color: '#859900',
			syntax_plain_color: '#268bd2',
			syntax_functions_color: '#2aa198',
			syntax_string_color: '#2aa198',
			syntax_comments_color: '#839496',
			syntax_variable_color: '#b58900',
			syntax_border_color: '#93a1a1',
			syntax_line_number_color: '#93a1a1',
			syntax_hover_line_number_color: '#dc322f',
			syntax_selected_line_background_color: '#fdf6e3',
			activity_background_color: '#fdf6e3',
			warning_background_color: '#cb4b16',
			warning_font_color: '#eee8d5',
			warning_border_color: '#a33a0f',
			warning_hover_background_color: '#85300d',
			warning_hover_font_color: '#eee8d5',
			warning_hover_border_color: '#692408',
			primary_background_color: '#268bd2',
			primary_font_color: '#eee8d5',
			primary_border_color: '#2079B7',
			primary_hover_background_color: '#175F91',
			primary_hover_font_color: '#eee8d5',
			primary_hover_border_color: '#204d74',
			success_background_color: '#859900',
			success_font_color: '#eee8d5',
			success_border_color: '#687702',
			success_hover_background_color: '#505b02',
			success_hover_font_color: '#eee8d5',
			success_hover_border_color: '#3d4501',
			danger_background_color: '#dc322f',
			danger_font_color: '#eee8d5',
			danger_border_color: '#d43f3a',
			danger_hover_background_color: '#c9302c',
			danger_hover_font_color: '#eee8d5',
			danger_hover_border_color: '#ac2925',
			info_background_color: '#2aa198',
			info_font_color: '#eee8d5',
			info_border_color: '#207f78',
			info_hover_background_color: '#17615c',
			info_hover_font_color: '#eee8d5',
			info_hover_border_color: '#114b47',
			alert_success_background_color: '#859900',
			alert_success_font_color: '#eee8d5',
			alert_success_border_color: '#859900',
			alert_success_link_color: '#268bd2',
			alert_warning_background_color: '#cb4b16',
			alert_warning_font_color: '#eee8d5',
			alert_warning_border_color: '#cb4b16',
			alert_warning_link_color: '#268bd2',
			alert_info_background_color: '#2aa198',
			alert_info_font_color: '#eee8d5',
			alert_info_border_color: '#2aa198',
			alert_info_link_color: '#268bd2',
			alert_danger_background_color: '#dc322f',
			alert_danger_font_color: '#eee8d5',
			alert_danger_border_color: '#dc322f',
			alert_danger_link_color: '#268bd2'
		},
		custom: {},
		styles: {
			":root": {

			},
			"body": {
				"background-color": "var(--main_background_color)",
				"color": "var(--main_font_color)",
				"font-family": "var(--body_font_family)",
				"font-size": "var(--body_font_size)"
			},
			"h1, .h1": {
				"font-size": "var(--h1_font_size)"
			},
			"h2, .h2": {
				"font-size": "var(--h2_font_size)"
			},
			"h3, .h3": {
				"font-size": "var(--h3_font_size)"
			},
			"h4, .h4": {
				"font-size": "var(--h4_font_size)"
			},
			"h5, .h5": {
				"font-size": "var(--h5_font_size)"
			},
			"h6, .h6": {
				"font-size": "var(--h6_font_size)"
			},
			'.header-logo-large img': {
				"background-image": "var(--header_logo)",
				"object-position": "-9999999999px -99999999px",
				"background-size": "100%"
			},
			".home .hero-logo img, .footer-logo img":  {
				"background-image": "var(--logo)",
				"object-position": "-9999999999px -99999999px",
				"background-size": "100%"
			},
			"nav.navbar.navbar-default": {
				"background-color": "var(--nav_background_color)",
				"color": "var(--nav_font_color)",
				"border-color": "var(--nav_border_color)"
			},
			"footer.footer": {
				"background-color": "var(--footer_background_color)",
				"color": "var(--footer_font_color)"
			},
			".footer-social .footer-social-link": {
				"color": "var(--secondary_font_color)"
			},
			".footer-link a": {
				"color": "var(--secondary_font_color)"
			},
			".navbar-right button .fa": {
				"color": "var(--btn_font_color)",
				"background": "var(--btn_background_color)",
				"border": "var(--btn_border_color)"
			},
			".navbar-right button .fa:hover": {
				"background": "var(--btn_hover_background_color)"
			},
			".form-control": {
				"background-color": "var(--input_background_color)",
				"color": "var(--input_font_color)",
				"border-color": "var(--input_border_color)",
				"font-size": "var(--input_font_size)"
			},
			".form-control:focus": {
				"border-color": "var(--input_focus_border_color)",
				"box-shadow": "(var(--input_focus_box_shadow_color) / 10%) 0px 0px 16px !important"
			},
			"a": {"color": "var(--link_font_color)"},
			"a:hover": {
				"color": "var(--link_hover_font_color)"
			},
			".home span.helper-blurb": {
				"background-color": "var(--secondary_background_color)",
				"color": "var(--secondary_font_color)"
			},
			".nav-list-container.slidepanel": {
				"background": "var(--nav_side_background_color)",
				"color": "var(--nav_side_font_color)",
				"border-color": "var(--nav_border_color)"
			},
			".navbar-default .menu-items li a": {
				"color": "var(--nav_font_color) !important"
			},
			".navbar-default .menu-items li a:hover": {
				"color": "var(--nav_hover_font_color) !important"
			},
			".nav-header": {
				"color": "var(--nav_header_font_color)",
				"text-shadow": "0 1px 0 (var(--nav_header_font_color) / 50%)"
			},
			".nav-list a": {
				"color": "var(--nav_side_link_color)",
				"font-size": "var(--body_font_size)"
			},
			".nav-list a:hover": {
				"color": "var(--nav_side_hover_font_color)"
			},
			".search-results p.description": {
				"color": "var(--main_second_font_color)"
			},
			".pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus, .pagination > li > a, .pagination > li > span": {
				"background-color": "var(--pagination_background_color)",
				"color": "var(--pagination_font_color)",
				"border-color": "var(--pagination_border_color)"
			},
			".pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus": {
				"background-color": "var(--pagination_selected_background_color)",
				"border": "var(--pagination_selected_border_color)",
				"color": "var(--pagination_selected_font_color)"
			},
			".pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus": {
				"background-color": "rgb(10, 14, 17)",
				"border": "rgb(10, 14, 17)",
				"color": "rgb(240, 244, 247)"
			},
			".search-group .fa-search": {
				"color": "var(--input_font_color)"
			},
			".navbar .nav .active > a, .navbar .nav .active > a:hover": {
				"border-color": "var(--nav_selected_border_color)",
				"color": "var(--nav_selected_font_color) !important"
			},
			".nav-list strong": {
				"color": "var(--nav_side_selected_font_color)"
			},
			".table-striped > tbody > tr:nth-of-type(odd)": {
				"background-color": "var(--secondary_background_color)",
					"color": "var(--secondary_font_color)"
			},
			"div#metacpan_feed_subscription": {
				"border-color": "var(--main_border_color)"
			},
			".author-results li": {
					"border-color": "var(--main_border_color)"
			},
			".pod pre, pre": {
				"background-color": "var(--secondary_background_color)",
				"border-color": "var(--secondary_border_color)",
				"font-family": "var(--syntax_font_family)",
			},
			"body .syntaxhighlighter .gutter .pod-line, body .syntaxhighlighter .pod-line:last-child": {
				"background-color": "var(--main_background_color) !important",
				"border-color": "var(--main_border_color) !important",
				"border-right": "3px solid var(--syntax_border_color) !important"
			},
			"body .syntaxhighlighter .container .pod-line": {
				"background-color": "var(--main_background_color) !important",
				"border-color": "var(--main_border_color) !important",
			},
			".pod-placeholder .btn-link": {
				"color": "var(--link_font_color) !important"
			},
			".pod-placeholder .btn-link:hover": {
				"color": "var(--link_hover_font_color) !important"
			},
			".syntaxhighlighter .line .keyword": {
				"color": "var(--syntax_keyword_color) !important"
			},
			".syntaxhighlighter .line .plain,.syntaxhighlighter .line .plain a": {
				"color": "var(--syntax_plain_color) !important"
			},
			".syntaxhighlighter .line .functions": {
				"color": "var(--syntax_functions_color) !important"
			},
			".syntaxhighlighter .line .string, .syntaxhighlighter .line .string a": {
				"color": "var(--syntax_string_color) !important"
			},
			".syntaxhighlighter .comments, .syntaxhighlighter .comments a": {
				"color": "var(--syntax_comments_color) !important"
			},
			".syntaxhighlighter .variable": {
				"color": "var(--syntax_variable_color) !important"
			},
			"body .line a": {
				"color": "var(--syntax_line_number_color) !important"
			},
			"body .line a:hover": {
				"color": "var(--syntax_hover_line_number_color) !important"
			},
			".syntaxhighlighter .line.highlighted.alt1, .syntaxhighlighter .container .line.highlighted.alt2": {
				"background-color": "var(--syntax_selected_line_background_color) !important"
			},
			".syntaxhighlighter table .gutter .line.highlighted": {
				"background-color": "var(--main_background_color) !important"
			},
			".syntaxhighlighter table .gutter .line": {
				"border-color": "var(--syntax_border_color) !important"
			},
			"body .syntaxhighlighter .pod-placeholder": {
				"background-color": "var(--main_background_color) !important"
			},
			".irc-chat:after": {
				"border-right": "12.39230485px solid var(--main_background_color)"
			},
			"#index-container .index-border": {
				"border-color": "var(--secondary_border_color)"
			},
			"code": {
				"background-color": "var(--secondary_background_color)",
				"color": "var(--secondary_font_color)"
			},
			".btn-link": {
					"color": "var(--link_font_color)"
			},
			".btn-link:hover, .btn-link:focus": {
					"color": "var(--link_hover_font_color)"
			},
			".about h1": {
				"border-color": "var(--main_border_color)"
			},
			".nav-list > .active > a, .nav-list > .active > a:hover, .nav-list > .active > a:focus": {
				"background-color": "var(--nav_side_selected_color) !important",
				"color": "var(--nav_side_selected_font_color) !important"
			},
			".nav > li > a:hover, .nav > li > a:focus": {
				"background-color": "var(--nav_side_hover_background_color)"
			},
			".panel-default > .panel-heading": {
				"background-color": "var(--secondary_background_color)",
				"color": "var(--secondary_font_color)",
				"border-color": "var(--main_border_color)"
			},
			".panel.panel-default": {
				"border-color": "var(--secondary_border_color)",
				"background-color": "var(--main_background_color)"
			},
			".panel-default > .panel-heading + .panel-collapse > .panel-body": {
				"border-top-color": "var(--main_border_color) !important"
			},
			"#metacpan-pod-renderer-pod": {
				"color": "var(--input_font_color)"
			},
			".btn.btn-primary": {
				"background-color": "var(--primary_background_color)",
				"color": "var(--primary_font_color)",
				"border-color": "var(--primary_border_color)"
			},
			".btn.btn-primary:hover": {
				"background-color": "var(--primary_hover_background_color)",
				"color": "var(--primary_hover_font_color)",
				"border-color": "var(--primary_hover_border_color)"
			},
			".btn-default": {
				"color": "var(--btn_font_color)",
				"background": "var(--btn_background_color)",
				"border": "var(--btn_border_color)"
			},
			".btn-default:hover": {
				"color": "var(--btn_hover_font_color)",
				"background": "var(--btn_hover_background_color)",
				"border": "var(--btn_hover_border_color)"
			},
			'span[style="color:#FF0000"]': {
				"color": "var(--danger_background_color) !important"
			},
			".alert-success": {
				"color": "var(--alert_success_font_color)",
				"background-color": "var(--alert_success_background_color)",
				"border-color": "var(--alert_success_border_color)",
			},
			".alert-success a": {
				"color": "var(--alert_success_link_color)"
			},
			".alert-warning": {
				"color": "var(--alert_warning_font_color)",
				"background-color": "var(--alert_warning_background_color)",
				"border-color": "var(--alert_warning_border_color)",
			},
			".alert-warning a": {
				"color": "var(--alert_warning_link_color)"
			},
			".alert-info": {
				"color": "var(--alert_info_font_color)",
				"background-color": "var(--alert_info_background_color)",
				"border-color": "var(--alert_info_border_color)",
			},
			".alert-info a": {
				"color": "var(--alert_info_link_color)"
			},
			".alert-danger": {
				"color": "var(--alert_danger_font_color)",
				"background-color": "var(--alert_danger_background_color)",
				"border-color": "var(--alert_danger_border_color)",
			},
			".alert-danger a": {
				"color": "var(--alert_danger_link_color)"
			},
			".btn-danger": {
				"color": "var(--danger_font_color)",
				"background-color": "var(--danger_background_color)",
				"border-color": "var(--danger_border_color)",
			},
			".btn-danger:hover": {
				"color": "var(--danger_hover_font_color)",
				"background-color": "var(--danger_hover_background_color)",
				"border-color": "var(--danger_hover_border_color)"
			},
			".btn-warning": {
				"color": "var(--warning_font_color)",
				"background-color": "var(--warning_background_color)",
				"border-color": "var(--warning_border_color)",
			},
			".btn-warning:hover": {
				"color": "var(--warning_hover_font_color)",
				"background-color": "var(--warning_hover_background_color)",
				"border-color": "var(--warning_hover_border_color)"
			},
			".btn-info": {
				"color": "var(--info_font_color)",
				"background-color": "var(--info_background_color)",
				"border-color": "var(--info_border_color)",
			},
			".btn-info:hover": {
				"color": "var(--info_hover_font_color)",
				"background-color": "var(--info_hover_background_color)",
				"border-color": "var(--info_hover_border_color)"
			},
			".btn-success": {
				"color": "var(--success_font_color)",
				"background-color": "var(--success_background_color)",
				"border-color": "var(--success_border_color)",
			},
			".btn-success:hover": {
				"color": "var(--success_hover_font_color)",
				"background-color": "var(--success_hover_background_color)",
				"border-color": "var(--success_hover_border_color)"
			},
			"legend": {
				"color": "var(--main_font_color)",
				"border-color": "var(--main_border_color)"
			},
			".form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control": {
				"background-color": "var(--input_background_color)"
			},
			'legend[style="color: #600"]': {
				"color": "var(--danger_background_color) !important"
			},
			".navbar-right .logged_in .fa-user": {
				"color": "var(--main_login_color)"
			},
			".autocomplete-suggestions": {
				"background-color": "var(--main_background_color)",
				"border-color": "var(--main_border_color)"
			},
			"div.autocomplete-suggestions div:nth-child(2n+2)": {
				"background": "var(--secondary_background_color)"
			},
			".autocomplete-suggestions strong": {
				"color": "var(--main_font_color)"
			},
			".autocomplete-suggestion:hover": {
				"background": "var(--main_hover_background_color) !important"
			},
			"ul.dropdown-menu": {
				"background-color": "var(--main_background_color)",
				"border-color": "var(--main_border_color) !important"
			},
			".dropdown-menu > li > a": {
				"color": "var(--main_font_color)"
			},
			".dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus": {
				"background-color": "var(--main_hover_background_color)",
				"color": "var(--main_font_color)"
			},
			".modal-content": {
				"background": "var(--main_background_color)"
			},
			".modal-header": {
				"border-color": "var(--main_border_color)"
			},
			".modal-footer": {
				"border-color": "var(--main_border_color)"
			},
			"button.close": {
				"color": "var(--link_font_color)"
			},
			".close:hover, .close:focus": {
				"color": "var(--link_hover_font_color)"
			},
			".pod-errors": {
				"background-color": "var(--alert_warning_background_color)",
				"color": "var(--alert_warning_font_color)",
				"border-color": "var(--alert_warning_border_color)"
			},
			".pod-errors > p:first-child": {
				"color": "var(--danger_background_color)"
			},
			".well": {
				"background-color": "var(--secondary_background_color)",
				"border-color": "var(--secondary_border_color)",
				"color": "var(--secondary_font_color)"
			},
			".content .release-documentation div.release-row:nth-of-type(even), .content .release-modules div.release-row:nth-of-type(even), .content .release-provides div.release-row:nth-of-type(even)": {
			    "background-color": "var(--secondary_background_color)",
			    "color": "var(--secondary_font_color)"
			},
			".author-pic img": {
			    "box-shadow": "1px px 5px var(--main_box_shadow_color)",
			    "-webkit-box-shadow": "2px 2px 5px var(--main_box_shadow_color)"
			}
		},
		load: function (theme) {
			var cb = function (theme) {
				if (theme) {
					let key;
					if (!theme.new_version) {
						for (key in MetaTheme.fontDefaults) {
							if (!(MetaTheme.fontDefaults[key] instanceof Object)) {
								theme[key] = MetaTheme.fontDefaults[key];
							}
						}
						for (key in MetaTheme[theme.mode]) {
							if (!theme[key]) theme[key] = MetaTheme[theme.mode][key];
						}
						theme.new_version = true;
					}
					for (key in theme) {
						MetaTheme.customStyle(key, theme[key]);
					}
				} else {
					var key;
					MetaTheme.customStyle('mode', 'default');
					for (key in MetaTheme.default) {
						MetaTheme.customStyle(key, MetaTheme.default[key]);
					}
					for (key in MetaTheme.fontDefaults) {
						MetaTheme.customStyle(key, MetaTheme.fontDefaults[key]);
					}
				}
				MetaTheme.loaded = true;
			};

			if (theme) return cb(theme);
			theme = window.localStorage.getItem('theme');
			if (theme) {
				theme = JSON.parse(theme);
			}
			return cb(theme);
		},
		afterLoad: function (cb, params) {
			var interval;
			interval = setInterval(function () {
				if (MetaTheme.loaded) {
					if (typeof cb === 'string') MetaTheme[cb](params);
					else cb(params);
					clearInterval(interval);
				}
			}, 200);
		},
		switchTheme: function (theme) {
			var key;
			for (key in theme) {
				this.customStyle(key, theme[key]);
				MetaTheme.sendMessage({
					type: "customStyle",
					name: key,
					value: theme[key]
				});
			}
			this.setThemeOptions();
			this.setFontFields();
			this.setModeField();
			this.setColorPickers();
		},
		switchMode: function (mode) {
			var key;
			for (key in this[mode]) {
				this.customStyle(key, this[mode][key]);
				MetaTheme.sendMessage({
					type: "customStyle",
					name: key,
					value: this[mode][key]
				});
			}
			this.customStyle('mode', mode);
			this.setColorPickers();
		},
		setFontFields: function () {
			var custom = this.custom;
			this.fontSizeSelectors.forEach(function (n) {
				var sel = 'input[name="' + n + '"]';
				var ele = document.querySelector(sel);
				ele.value = custom[n];
				ele.addEventListener('change', function (e) {
					MetaTheme.customStyle(this.name, this.value);
					MetaTheme.sendMessage({
						type: "customStyle",
						name: this.name,
						value: this.value
					});
				});
			});
			this.fontFamilySelectors.forEach(function (n) {
				var sel = document.querySelector('select[name="' + n + '"]');
				sel.innerHTML = '';
				MetaTheme.fonts.forEach(function (f) {
					var selected = f.name === custom[n].name ? true : false;
					var opt = new Option(
						f.name,
						f.name,
						selected,
						selected
					);
					sel.appendChild(opt);
				});
				sel.addEventListener('change', function (e) {
					var font = MetaTheme.fonts[this.selectedIndex];
					MetaTheme.customStyle(this.name, font);
					MetaTheme.sendMessage({
						type: "customStyle",
						name: this.name,
						value: font
					});
				});
			});
		},
		setThemeOptions: function () {
			let width = document.querySelector('input[name="full_width_mode"]');
			width.checked = this.custom.full_width_mode ? true : false;
			width.addEventListener('change', function () {
				let c = this.checked ? true : false;
				MetaTheme.customStyle(this.name, c);
				MetaTheme.sendMessage({
					type: 'customStyle',
					name: this.name,
					value: c
				});
			});
		},
		setModeField: function () {
			var sel = document.querySelector('select[name="base_scheme"]');
			sel.innerHTML = '';
			var custom = MetaTheme.custom;
			MetaTheme.schemes.forEach(function (f) {
				var selected = f.value === custom.mode ? true : false;
				var opt = new Option(
					f.name,
					f.value,
					selected,
					selected
				);
				sel.appendChild(opt);
			});
			sel.addEventListener('change', function () {
				var mode = this.value;
				MetaTheme.switchMode(mode);
			});
		},
		setColorPickers: function (mode) {
			var custom = this.custom;
			this.colorSelectors.forEach(function (n) {
				var sel = 'input[name="' + n + '"]';
				var ele = document.querySelector(sel);
				ele.value = custom[n];
				var picker;
				picker = jsColorPicker(
					sel,
					{
						customBG: '#222',
						init: function (elm, colors) {
							elm.style.backgroundColor = elm.value;
							elm.style.color = colors.rgbaMixCustom.luminance > 0.22 ? '#222' : '#ddd'
						},
						actionCallback: function (val, e, o) {
							MetaTheme.customStyle(this.input.name, this.input.value);
							MetaTheme.sendMessage({
								type: "customStyle",
								name: this.input.name,
								value: this.input.value
							});
						}
					}
				);
			});
		},
		customStyle: function (key, value) {
			this.custom[key] = value;
		},
		setFontSheet: function (id) {
			var font = this.custom[id];
			var fscript = document.querySelector('head #' + id);
			if (fscript && (!font.url || font.url !== fscript.href))
				fscript.parentNode.removeChild(fscript);
			if (font.url) {
				fscript = document.createElement('link');
				fscript.id = id;
				fscript.setAttribute("rel", "stylesheet");
				fscript.setAttribute("type", "text/css");
				fscript.setAttribute("href", font.url);
				document.querySelector('head').appendChild(fscript);
			}
		},
		buildCSS: function () {
			this.setFontSheet('body_font_family');
			if ( this.custom.body_font_family.name !== this.custom.syntax_font_family.name )
				this.setFontSheet('syntax_font_family');
			
			if (this.custom.full_width_mode == true) {
				this.styles['.content, .breadcrumbs'] = { "max-width": "100%" };
			} else {
				delete this.styles['.content, .breadcrumbs'];
			}

			for (let key in this.custom) {
				if ( key == 'body_font_family' || key == 'syntax_font_family' ) {
					this.styles[':root']['--' + key] = this.custom[key].name;
				} else this.styles[':root']['--' + key ] = key.match(/font_size$/) ? (this.custom[key] + 'px') : this.custom[key];
			}
			this.removeAttachedCSS();
			return this.attachCSS();
		},
		removeAttachedCSS: function () {
			var s = document.querySelector('head #customStyles');
			if (s) s.parentNode.removeChild(s);
		},
		attachCSS: function (styles, returnString) {
			if (!styles) styles = this.styles;
			var css = "", key;
			for (key in styles) {
				css += key + " {";
				var props = styles[key], prop;
				for (prop in props) {
					if ( props[prop] instanceof Object ) {
						var h = {};
						h[prop] = props[prop];
						css += this.attachCSS(h, true);
					}
					else css += prop + ": " + props[prop] + ";";
				}
				css += "}";
			}
			if (returnString) return css;
			if (css) {
				var style = document.createElement('style');
				style.setAttribute('type', 'text/css');
				style.setAttribute('id', 'customStyles');
				style.innerText = css;
				document.querySelector('head').appendChild(style);
				window.localStorage.setItem('theme', css);
			}
		},
		sendMessage: function (message) {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				if (!tabs[0].url || tabs[0].url.match('metacpan'))
					chrome.tabs.sendMessage(tabs[0].id, message);
			});
		}
	};

	window.MetaTheme = new Theme();
})(window);
