// Here I'm creating the OBJ app that will hold all my scripts
var app = {};
app.key = '6613282db62370ba5920e9b0ca4daf217dfbb9a0';
var now = moment().format('HH');

// console.log(now);
// User logs in to site.
// Site greets user based on system time.
// This app holds time, to then convert into time of DAY
// Use moment.JS
app.time = function(){
	if(now > 05 && now <= 09){
		$('span.time').text("How'd you sleep?");
	} else if(now > 09 && now <= 12){
		$('span.time').text("How's your morning so far? Lunch soon!");
	} else if(now > 12 && now <= 18) {
		$('span.time').text("How's your day going? Killin' it, I'm sure.");
	} else if(now > 18 &&  now <= 23){
		$('span.time').text("Bedtime soon! Ready to wind down?");
	} else {
		$('span.time').text("Nightowl! I like the cut of your jib.");
	}

}

// Couldn't get this to work.
app.start = function(){
	$('.leggo').on('click touch', function(){
		$('.getStarted').addClass('hidden');
		$('.hidden').removeClass('hidden').addClass('block');											
	});
}

// This function calls the api and passes in the text of the user,
// Stored in key "text"
// Returns "showSourceText and I can store "1" to show (return the text)
// or "0" to turn off/hide
app.positive = function(thoughtInput){
	$.ajax({
		url: 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment',
		type: 'GET',
		data: {
			apikey: app.key,
			format: 'jsonp',
			outputMode: 'json',
			showSourceText: 1,
			text: thoughtInput
		},
		success: function(rez){
			app.analyze(rez.docSentiment.type);
			console.log(rez);
		}
	});

}

// This function accepts the text of the user from the prompt/text box
// Stores the text to then use as input to the sentiment api
app.thought = function(){
	$('form').on('submit', function(evnt){
		evnt.preventDefault();
		app.submittedThought = $('input#sentiment').val();
		if(app.submittedThought !== ''){
			app.positive(app.submittedThought);
		} 
	});

}

// Couldn't get this to work either past just toggling the class of wobble
app.analyze = function(feelings) {
	if(feelings === 'positive') {
		$('ul.list').append('<li>' + app.submittedThought + '</li>');
		$('input[type=text]').val('');
		$('.gallery').flickity('next');
	} else {
		$('input[type=text]').toggleClass('wobble');

		// $('input[type=text]').addClass('wobble');
		// $('input[type=text]').one('submit', function(e){
		// 	e.preventDefault;
		// 	('input[type=text]').removeClass('wobble');
		// });


		// $('input[type=text]').submit(funtion(e){
		// 	e.preventDefault;
		// 	$('input[type=text]').addClass('wobble');
		// 	// This listens for the end of the animation to remove the class
		// 	// So that it may be reused over and over
		// 	$('input[type=text]').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
  //       		function (e){
  //       			$('input[type=text]').removeClass('wobble');
  //       		});
		// });
	}
}

// This function writes the positive ones
// app.collect = function(){

// }

// Store prompts here... This one's gonna be a challenge.
// app.prompts = function(){

// }


// Here I'm passing the entirety of my methods through the document ready to make sure 
$(function(){
	app.thought();

	$('a').smoothScroll();
	
	// app.start();

	// This loads the greeting to the page yaaaay!
	app.time();
	// console.log(positive('I think I am pretty fucking great.'));
});