var app = {};

// The .when() method provides a way to execute callback functions based on one or more objects, usually deferred objects that represent asynchronous events.

app.init = function() {

	var thorId = 1009664;
	var guardiansId = 1011299;
	var antManId = 1010802;
	var captainId = 1009220;
	var drStrangeId = 1009282;

	// When the AJAX request has returned all five objects, then call the displayComics method for each
	$.when( app.getComic(thorId), app.getComic(guardiansId),
	app.getComic(antManId), app.getComic(captainId), app.getComic(drStrangeId) )
	.then(function(thor, guardians, ant, captain, doctor) {
		// We go inside the first item in the array of objects we get back, then we go inside the data object, and into the array of results
		app.displayComics(thor[0].data.results);
		app.displayComics(guardians[0].data.results);
		app.displayComics(ant[0].data.results);
		app.displayComics(captain[0].data.results);
		app.displayComics(doctor[0].data.results);
	})
	// When the AJAX request has returned all five objects, then call the displayStories method for each
	$.when( app.getStory(thorId), app.getStory(guardiansId),
	app.getStory(antManId), app.getStory(captainId), app.getStory(drStrangeId) )
	.then(function(thor, guardians, ant, captain, doctor) {
		// We go inside the first item in the array of objects we get back, then we go inside the data object, and into the array of results
		app.displayStories(thor[0].data.results);
		app.displayStories(guardians[0].data.results);
		app.displayStories(ant[0].data.results);
		app.displayStories(captain[0].data.results);
		app.displayStories(doctor[0].data.results);
	})
};

// If we blow through all 3000 of our requests, just generate a new key and plug it in here
var apikey = "3f46443479cb8f77ac54daa5c934d370";

app.getComic = function(charID) {
	// AJAX request for comics based on different character IDs
	return $.ajax({
		url: "http://gateway.marvel.com:80/v1/public/characters/" + charID + "/comics?limit=10&apikey=" + apikey,
		type: "GET",
		dataType: "json"
	});
};

app.getStory = function(charID) {
	// AJAX request for series based on different character IDs
	return $.ajax({
		url: "http://gateway.marvel.com:80/v1/public/characters/" + charID + "/series?limit=10&apikey=" + apikey,
		type: "GET",
		dataType: "json"
	});
};

app.displayComics = function(comicInfo) {
	
	// console.log(comicInfo);

	// $.each(comicInfo,function(index,item) {

	// 	var $comicContainer = $("<div>");
	// 	$comicContainer.addClass("comic");

	// 	var $comicPic = $("<img>");
	// 	$comicPic.attr("src",item.thumbnail.path + "." + item.thumbnail.extension);

	// 	var $comicDescrip = $("<p>");
	// 	$comicDescrip.text(item.description);

	// 	$comicContainer.append($comicPic, $comicDescrip);
	// 	$(".movie").append($comicContainer);
	// })
};

app.displayStories = function(storyInfo) {
	
	console.log(storyInfo);

	// $.each(storyInfo,function(index,item) {

	// 	var $storyContainer = $("<div>");
	// 	$storyContainer.addClass("story");

	// 	var $storyPic = $("<img>");
	// 	$storyPic.attr("src",item.thumbnail.path + "." + item.thumbnail.extension);

	// 	var $storyDescrip = $("<p>");
	// 	$storyDescrip.text(item.description);

	// 	$storyContainer.append($storyPic, $storyDescrip);
	// 	$(".movie").append($storyContainer);
	// })
};







































$(function() {
	app.init();
});