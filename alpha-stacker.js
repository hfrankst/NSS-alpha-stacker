// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var empty = "";//this allows the objects in the array to be captured then stacked with the next array index on subsequent iterations


// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    console.log(alphabet);//showing that the array is working correctly
    for (i = 0; i < alphabet.length; i++) {
    	empty += alphabet[i];//stacks the letters
    	console.log(empty);//shows the stack
    	if (i % 3 === 2) {
    		empty += " ";
    	}
    }   
}

// Invoke the function and pass in the array
stackLetters(alphabet)