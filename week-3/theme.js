/*
===========================================
; Title:  theme.js
; Author: Alexander Keith
; Date:   6/4/2023
; Description: theme.js file for Assignment 2.2 – Palindrome App
;==========================================
*/

//Sets default theme
function setDefaultTheme() {

//Assigns variables
const theme = localStorage.getItem("mode") || "light-theme";
const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
const iconText = localStorage.getItem("iconText") || "Light Mode";

//Assigns output to HTML
document.body.classList.value = theme;
document.getElementById("icon-mode").classList.add(iconMode);
document.getElementById("icon-text").innerHTML = iconText;
}

//Function to set selected theme
function setSelectedTheme() {
document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}