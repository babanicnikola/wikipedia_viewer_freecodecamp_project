function searchWiki() {
	var txt = document.getElementById("e1").value;
	if (txt == ""){
		window.alert("Fill required field!")
	}
	$.ajax({
      url: '//en.wikipedia.org/w/api.php',
      data: {
        action: 'query',
        list: 'search',
        srsearch: txt,
        format: 'json'
      },
      dataType: 'jsonp',
      success: function(x) {
        clearResults();
        x.query.search.forEach(function(z) {
          display(z);
        });
      }
    });
  }

function display(article) {
  var current = $("#results").html();
  $("#results").html(current + "<div><a href='https://en.wikipedia.org/wiki/" + article.title + "' target='_blank'><p><strong>" + article.title + "</strong></p><p>" + article.snippet + "</p></a></div><hr width=50%>");
}

function clearResults() {
  $("#results").html("");
}

function random() {
	window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}
