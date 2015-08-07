var app = {};

// The .when() method provides a way to execute callback functions based on one or more objects, usually deferred objects that represent asynchronous events.

var thorId = 1009664;
var guardiansId = 1011299;
var antManId = 1010802;
var captainId = 1009220;
var drStrangeId = 1009282;

app.init = function() {
	//Here we make our getCharInfo calls based on the id of the character
	$.when( app.getCharacterInfo(thorId), app.getCharacterInfo(guardiansId),
	app.getCharacterInfo(antManId), app.getCharacterInfo(captainId), app.getCharacterInfo(drStrangeId) )
		//And what is returned is our new bit of data
		//it is associated with that characters 
		.then(function(thor,guardians,ant,captain, doctor) {
			// console.log(thor);
			app.displayCharacter(thor);
			// console.log(guardians);
			app.displayCharacter(guardians);
			// console.log(ant);
			app.displayCharacter(ant);
			// console.log(captain);
			app.displayCharacter(captain);
			// console.log(doctor);
			app.displayCharacter(doctor);

		});
};

// If we blow through all 3000 of our requests, just generate a new key and plug it in here
var apikey = "3f46443479cb8f77ac54daa5c934d370";

app.getComic = function(charID) {
	// AJAX request for comics based on different character IDs
	return $.ajax({
		url: "http://gateway.marvel.com:80/v1/public/characters/" + charID + "/comics?limit=1&apikey=" + apikey,
		type: "GET",
		dataType: "json"
	});
};

app.getStory = function(charID) {
	// AJAX request for series based on different character IDs
	return $.ajax({
		url: "http://gateway.marvel.com:80/v1/public/characters/" + charID + "/series?limit=1&apikey=" + apikey,
		type: "GET",
		dataType: "json"
	});
};
//Made a new method, that will return character info
//based on two calls. One to getComic, and one to getStory.
app.getCharacterInfo = function(charID) {
	//We use the Deferred object from jQuery to create a new promize
	//So we can determine what info we get back. 
	var defer = $.Deferred();
	//We then make our calls to getComic and getStory
	$.when(app.getComic(charID),app.getStory(charID))
	//When they return we want to change the data a bit
	.then(function(charComics,charStories) {
		//We then resolve our promize, with the info we want to send back.
		defer.resolve({ comic: charComics[0], story: charStories[0] });
	});
	//We return the Deferred object here, so when we use it in $.when
	//that method sees that it is a promize and it knows that it has to wait
	//until it is resolved.
	return defer;
};

app.displayCharacter = function(charInfo) {

	var comicItem = charInfo.comic.data.results[0];
	var storyItem = charInfo.story.data.results[0];
	
	// console.log(charInfo.comic.data.results[0]);
	// console.log(charInfo.story.data.results[0]);

		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");

		var $comicPic = $("<img>");
		$comicPic.attr("src",comicItem.thumbnail.path + "." + comicItem.thumbnail.extension);

		var $comicDescrip = $("<p>");
		$comicDescrip.text(comicItem.description);

		$comicContainer.append($comicPic, $comicDescrip);
		$(".one").append($comicContainer);
};


app.displayCharacter = function(charInfo) {

	var comicItem = charInfo.comic.data.results[0];
	var storyItem = charInfo.story.data.results[0];
	
	// console.log(charInfo.comic.data.results[0]);
	// console.log(charInfo.story.data.results[0]);

		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");

		var $comicPic = $("<img>");
		$comicPic.attr("src",comicItem.thumbnail.path + "." + comicItem.thumbnail.extension);

		var $comicDescrip = $("<p>");
		$comicDescrip.text(comicItem.description);

		$comicContainer.append($comicPic, $comicDescrip);
		$(".two").append($comicContainer);
};

// app.displayStories = function(storyInfo) {
	
// 	// console.log(storyInfo);

// 	$.each(storyInfo,function(index,item) {

// 		var $storyContainer = $("<div>");
// 		$storyContainer.addClass("story");

// 		var $storyPic = $("<img>");
// 		$storyPic.attr("src",item.thumbnail.path + "." + item.thumbnail.extension);

// 		var $storyDescrip = $("<p>");
// 		$storyDescrip.text(item.description);

// 		$storyContainer.append($storyPic, $storyDescrip);

// 		$(".one").append($storyContainer);
		
// 	})
// };







































$(function() {
	app.init();
});