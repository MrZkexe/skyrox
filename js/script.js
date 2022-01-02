$(document).ready(function () {
	$.getJSON("json/links.json",
		function (data) {
			var rede = "";
			$.each(data, function (key, valor) {
				rede += "<li>";
				rede += "<a href='" + valor.link + "'><div id='btn'>" + valor.rede + "</div></a>";
				rede += "</li>";
			});
			$("#lista").append(rede);
		});
});