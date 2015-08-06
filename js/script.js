//1. on click of lightning bolt show div with movie names
// 2. when user clicks on movie name, accordian menu expands to show
// comic and storyline info

var app = {};

app.init = function() {
	$.when( app.getComic(1009664), app.getComic(1011299),
	app.getComic(1010802), app.getComic(1009220), app.getComic(1009282) )
	.then(function(thor, guardians, ant, captain, doctor) {
		console.log(thor);
		console.log(guardians);
		console.log(ant);
		console.log(captain);
		console.log(doctor);
	})
	$.when( app.getStory(1009664), app.getStory(1011299),
	app.getStory(1010802), app.getStory(1009220), app.getStory(1009282) )
	.then(function(thor, guardians, ant, captain, doctor) {
		console.log(thor);
		console.log(guardians);
		console.log(ant);
		console.log(captain);
		console.log(doctor);
	})
};

app.getComic = function(charID) {
	return $.ajax({
		url: "http://gateway.marvel.com:80/v1/public/characters/" + charID + "/comics?limit=20&apikey=3f46443479cb8f77ac54daa5c934d370",
		type: "GET",
		dataType: "json"
	});
};
app.getStory = function(charID) {
	return $.ajax({
		url: "http://gateway.marvel.com:80/v1/public/characters/" + charID + "/series?limit=20&apikey=3f46443479cb8f77ac54daa5c934d370",
		type: "GET",
		dataType: "json"
	});
};

// app.displayComics = function(comicInfo) {
// 	var comic1 = 
// }







































$(function() {
	app.init();
});