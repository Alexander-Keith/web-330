// I've never even seen the || button used before, is the key: right? Make sure the reference is placed at the <head> of the HTML document. See Exhibit Q from Web 330 HTML, CSS, and JavaScript Requirements. To use this function, simply call setSelectedTheme(). Be sure to place this above all other JavaScript code. See Exhibit R.

function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "Light-theme"
}