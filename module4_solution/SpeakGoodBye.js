// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

(function(window) {
	// STEP 7a: Create an object, called 'byeSpeaker' 
	var byeSpeaker = new Object()

	// STEP 7b: attach the "speak" method 
	byeSpeaker.speak = new Function();


	// STEP 7c: expose it to the global context
	window.speak = byeSpeaker.speak

	// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
	var speakWord = "Good Bye";

	// STEP 8
	byeSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}

	// STEP 9: Expose the 'byeSpeaker' object to the global scope.
	window.byeSpeaker = byeSpeaker;

})(window);


