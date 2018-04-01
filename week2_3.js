/**
 Write a program with a user-defined function to accept a character from user to check whether it is vowel or consonant?
	(Note: Function must return a Boolean value true for vowel or false for consonant).
 */

function isVowel(x) {

    var result;

    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
    return result;
}

var character = prompt("Please enter a character");

if(isVowel(character))
	console.log("It is a vowel");
else
	console.log("It is a consonant");