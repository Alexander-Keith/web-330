/*
===========================================
; Title:  keith-palindrome.js
; Author: Alexander Keith
; Date:   6/4/2023
; Description: keith-palindrome.js file for Assignment 2.2 – Palindrome App
;==========================================
*/

//Function to get today's date in MM/DD/YYY format
function getTodaysDate(){
    const date = new Date().toLocaleDateString('en-US');
    return date;
}

//Function to get length of string
function getLength(str){
    return str.length;
}

// Function to reverse a string
function reverse(str) {
    return str.split("").reverse().join("");
}

// Function to check string for palindrome
function isPalindrome(str) {
    return reverse(str) === str;
}

// Function to show results
function showResults() {

    // Assign values to variables
    var originalPhrase = document.getElementById("txtPhrase").value;
    var assignResults = document.getElementById("assign-results");
    var today = getTodaysDate();
    var len = getLength(originalPhrase);
    var reversedPhrase = reverse(originalPhrase);
    var header = `Today's Date: ${today}<br> Original Phrase: ${originalPhrase}<br>Reversed Phrase: ${reversedPhrase}<br>Phrase Length: ${len}<br>`;

// underlined is and is not palindrome results
    if (isPalindrome(originalPhrase.toLowerCase())) {
        assignResults.innerHTML = `${originalPhrase} <strong><u>is</u></strong> a palindrome`;
    } else {
        assignResults.innerHTML = `${originalPhrase} <strong><u>is</u></strong> not a palindrome`;
    }
        document.getElementById("assign-results-header").innerHTML = header;
}