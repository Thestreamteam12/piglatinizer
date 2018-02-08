// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {



	$("#clickable").click(function() {
		var userInput = $(".type").val();
		console.log(userInput);
		$("p").html(userInput);

	});

})
// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word.


function wordToPigLatin(sentence){
	var words = sentence.split("");
	for(var i = 0; i < words.length; i++){
		words[i] = wordToPigLatin(words[i]);
	}
	return words.join("");
	
}





// Create the sentenceToPigLatin function that takes a sentence as a parameter

function consonantToPigLatin(word){
	var firstLetter = messageArray.slice(0,2);
	
	return word + firstLetter + "ay";
}

//Loops through all the words in the sentence and transforms each word

for (var count = 0; count < 4; count = count + 1){
	console.log(count);
}


//It should return a transfromed sentance

