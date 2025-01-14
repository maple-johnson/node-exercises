/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) 
{
     let reverseString = "";
    
     for(let i = textInput.length; i > 0; i--)
    {
          reverseString += textInput.charAt(i -1);
    }

    if(reverseString === textInput)
    {
          return true;
    }
    else
    {
          return false;
    }

}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false

// TODO: display the result of the test strings in the console
console.log(checkPalindrome(testString));
console.log(checkPalindrome(testString2));