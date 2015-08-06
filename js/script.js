//1. on click of lightning bolt show div with movie names
// 2. when user clicks on movie name, accordian menu expands to show
// comic and storyline info

var app = {};

app.init = function() {
	$.when( app.getComic(1009664), app.getComic(1011299),
	app.getComic(1010802), app.getComic(1009220), app.getComic(1009282) )
	.then(function(res1, res2, res3, res4, res5) {
		console.log(res1);
		console.log(res2);
		console.log(res3);
		console.log(res4);
		console.log(res5);
	})
};
app.init = function() {
	$.when( app.getStory(1009664), app.getStory(1011299),
	app.getStory(1010802), app.getStory(1009220), app.getStory(1009282) )
	.then(function(res1, res2, res3, res4, res5) {
		console.log(res1);
		console.log(res2);
		console.log(res3);
		console.log(res4);
		console.log(res5);
	})
};

app.getComic = function(charID) {
	return $.ajax({
		url: "http://gateway.marvel.com:80/v1/public/comics",
		type: "GET",
		dataType: "json",
		data: {
			apikey: "3f46443479cb8f77ac54daa5c934d370",
			format: "comic",
			formatType: "comic",
			dateRange: "2010-01-01,2015-05-08",
			characters: charID,
			limit: 20
		}
	});
};
app.getStory = function(charID) {
	return $.ajax({
		url: "http://gateway.marvel.com:80/v1/public/stories",
		type: "GET",
		dataType: "json",
		data: {
			apikey: "3f46443479cb8f77ac54daa5c934d370",
			characters: charID,
			limit: 20
		}
	});
};














$(function() {
	app.init();
});