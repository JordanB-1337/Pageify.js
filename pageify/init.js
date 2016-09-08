function initiate() {
	function loadScript(url) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var body = document.body.innerHTML;
				document.body.innerHTML = body + "<script>" + this.responseText + "</script>";
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}
	loadScript('./pageify/functions.js');
	loadScript('./pageify/config.js');
	loadScript('./pageify/interpreter.js');
	loadScript('./pageify/routes.js');
	retrievePage("default_load", "content");
	interpret()
}
