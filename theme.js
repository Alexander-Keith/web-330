/*
=================================================
;  Title: theme.js
;  Author: Alexander Keith
;  Date: 5/28/2023
;  Description: theme.js file for assignment Assignment 1.3 – Environment Setup
;================================================
*/

// Make sure the reference is placed at the <head> of the HTML document. See Exhibit Q from Web 330 HTML, CSS, and JavaScript Requirements. To use this function, simply call setSelectedTheme(). Be sure to place this above all other JavaScript code. See Exhibit R.

/**
 * Set the default theme to light if one has not been set in the browsers localStorage
 */
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

/**
 * Set the HTML body to the user's selected theme. If one has not been selected, set the theme to light-theme
 */
function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}