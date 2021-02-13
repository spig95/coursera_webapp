// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

(function(window) {
	
	// 3.a Create an object, called 'helloSpeaker'
	var helloSpeaker = new Object();

	// 3.b Add "speak" method
	helloSpeaker.speak = new function(){};

	// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
	var speakWord = "Hello";

	// STEP 4: Rewrite the 'speak' function such that it is attached to the
	// helloSpeaker object instead of being a standalone function.
	// See Lecture 52, part 2
	helloSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}

	// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
	// 'helloSpeaker' on the global scope as well.
	window.helloSpeaker = helloSpeaker;

})(window);


