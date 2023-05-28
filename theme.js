/*
=================================================
;  Title: theme.js
;  Author: Alexander Keith
;  Date: 5/28/2023
;  Description: theme.js file for assignment Assignment 1.3 – Environment Setup
;================================================
*/

// Make sure the reference is placed at the <head> of the HTML document. See Exhibit Q from Web 330 HTML, CSS, and JavaScript Requirements. To use this function, simply call setSelectedTheme(). Be sure to place this above all other JavaScript code. See Exhibit R.

//Function for setDefaultTheme
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

//Function for setSelectedTheme
function setSelectedTheme() {
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}