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
			app.displayThor(thor);
			console.log(thor);
			app.displayGuard(guardians);
			app.displayAnt(ant);
			app.displayCap(captain);
			app.displayDoc(doctor);
		});
};

// If we blow through all 3000 of our requests, just generate a new key and plug it in here
var apikey = "3f46443479cb8f77ac54daa5c934d370";

app.getComic = function(charID) {
	// AJAX request for comics based on different character IDs
	return $.ajax({
		url: "http://gateway.marvel.com:80/v1/public/characters/" + charID + "/comics?limit=5&apikey=" + apikey,
		type: "GET",
		dataType: "json"
	});
};

app.getStory = function(charID) {
	// AJAX request for series based on different character IDs
	return $.ajax({
		url: "http://gateway.marvel.com:80/v1/public/characters/" + charID + "/series?limit=5&apikey=" + apikey,
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

app.displayThor = function(thor) {

	var thorComic = thor.comic.data.results;
	var thorStory = thor.story.data.results;

	for (i = 0; i < thorComic.length; i++){
		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");
		var $comicPic = $("<img>");
		$comicPic.attr("src", thorComic[i].thumbnail.path + "/portrait_fantastic" + "." + thorComic[i].thumbnail.extension);
		var $comicDescrip = $("<p>");
		$comicDescrip.text(thorComic[i].description);
		$comicContainer.append($comicPic, $comicDescrip);
		$(".one").append($comicContainer);
	};

	for (i = 0; i < thorStory.length; i++){
		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");
		var $comicPic = $("<img>");
		$comicPic.attr("src", thorStory[i].thumbnail.path + "/portrait_fantastic" + "." + thorStory[i].thumbnail.extension);
		var $comicDescrip = $("<p>");
		$comicDescrip.text(thorStory[i].description);
		$comicContainer.append($comicPic, $comicDescrip);
		$(".one").append($comicContainer);
	};
		
};

app.displayGuard = function(guard) {

	var guardComic = guard.comic.data.results;
	var guardStory = guard.story.data.results;

	for (i = 0; i < guardComic.length; i++) {
		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");
		var $comicPic = $("<img>");
		$comicPic.attr("src", guardComic[i].thumbnail.path + "/portrait_fantastic" + "." + guardComic[i].thumbnail.extension);
		var $comicDescrip = $("<p>");
		$comicDescrip.text(guardComic[i].description);
		$comicContainer.append($comicPic, $comicDescrip);
		$(".two").append($comicContainer);
	};	

	for (i = 0; i < guardStory.length; i++) {
		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");
		var $comicPic = $("<img>");
		$comicPic.attr("src", guardStory[i].thumbnail.path + "/portrait_fantastic" + "." + guardStory[i].thumbnail.extension);
		var $comicDescrip = $("<p>");
		$comicDescrip.text(guardStory[i].description);
		$comicContainer.append($comicPic, $comicDescrip);
		$(".two").append($comicContainer);
	};	
		
};

app.displayAnt = function(ant) {

	var antComic = ant.comic.data.results;
	var antStory = ant.story.data.results;
	
	for (i = 0; i < antComic.length; i++){
		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");
		var $comicPic = $("<img>");
		$comicPic.attr("src", antComic[i].thumbnail.path + "/portrait_fantastic" + "." + antComic[i].thumbnail.extension);
		var $comicDescrip = $("<p>");
		$comicDescrip.text(antComic[i].description);
		$comicContainer.append($comicPic, $comicDescrip);
		$(".three").append($comicContainer);
	};

	for (i = 0; i < antStory.length; i++){
		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");
		var $comicPic = $("<img>");
		$comicPic.attr("src", antStory[i].thumbnail.path + "/portrait_fantastic" + "." + antStory[i].thumbnail.extension);
		var $comicDescrip = $("<p>");
		$comicDescrip.text(antStory[i].description);
		$comicContainer.append($comicPic, $comicDescrip);
		$(".three").append($comicContainer);
	};	

};

app.displayCap = function(cap) {

	var capComic = cap.comic.data.results;
	var capStory = cap.story.data.results;

	for (i = 0; i < capComic.length; i++){
		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");
		var $comicPic = $("<img>");
		$comicPic.attr("src",capComic[i].thumbnail.path + "/portrait_fantastic" + "." + capComic[i].thumbnail.extension);
		var $comicDescrip = $("<p>");
		$comicDescrip.text(capComic[i].description);
		$comicContainer.append($comicPic, $comicDescrip);
		$(".four").append($comicContainer);
	};	

	for (i = 0; i < capStory.length; i++){
		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");
		var $comicPic = $("<img>");
		$comicPic.attr("src", capStory[i].thumbnail.path + "/portrait_fantastic" + "." + capStory[i].thumbnail.extension);
		var $comicDescrip = $("<p>");
		$comicDescrip.text(capStory[i].description);
		$comicContainer.append($comicPic, $comicDescrip);
		$(".four").append($comicContainer);
	};

};

app.displayDoc = function(doc) {

	var docComic = doc.comic.data.results;
	var docStory = doc.story.data.results;

	for (i = 0; i < docComic.length; i++){
		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");
		var $comicPic = $("<img>");
		$comicPic.attr("src",docComic[i].thumbnail.path + "/portrait_fantastic" + "." + docComic[i].thumbnail.extension);
		var $comicDescrip = $("<p>");
		$comicDescrip.text(docComic[i].description);
		$comicContainer.append($comicPic, $comicDescrip);
		$(".five").append($comicContainer);
	};	

	for (i = 0; i < docStory.length; i++){
		var $comicContainer = $("<div>");
		$comicContainer.addClass("comic");
		var $comicPic = $("<img>");
		$comicPic.attr("src", docStory[i].thumbnail.path + "/portrait_fantastic" + "." + docStory[i].thumbnail.extension);
		var $comicDescrip = $("<p>");
		$comicDescrip.text(docStory[i].description);
		$comicContainer.append($comicPic, $comicDescrip);
		$(".five").append($comicContainer);
	};
		
};



































$(function() {
	app.init();
});