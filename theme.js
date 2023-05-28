<!--
=================================================
;  Title: index.html
;  Author: Alexander Keith
;  Date: 4/28/2023
;  Description: index.html file for assignment 1.3 – Environment Setup
;================================================
-->

<!-- index.html-->

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>WEB 330 - Enterprise JavaScript II</title>
        <link href="site.css" type="text/css" rel="stylesheet">
        <link href="theme.css" type="text/css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet">
        <script src="theme.js"></script>
    </head> 
    <body class="light-theme">
        <div id="container">
            <!-- Toggle button for light and dark mode -->
            <i onclick="toggleMode(this)" id="icon-mode" class="fa fa-toggle-off pull-right" style="font-size: 28px;"><span id="icon-text"></span></i>
            
            <br>
            <h1 class="app-header">Alexander Keith's Landing Page</h1>
                <h2>WEB 330 Enterprise JavaScript II</h2>
                <hr>
                <div class="assign-content">
                    <div class="card">
                        <div class="card title">
                            <h3>Weekly Assignments</h3>
                                    <!-- weekly assignments list -->
                            <div class="card-content"> 
                                <ul>
                                    <li><a href="">Assignment 2.2</a></li>
                                    <li><a href="">Assignment 3.2</a></li>
                                    <li><a href="">Assignment 4.2</a></li>
                                    <li><a href="">Assignment 5.2</a></li>
                                    <li><a href="">Assignment 6.2</a></li>
                                    <li><a href="">Assignment 7.2</a></li>
                                    <li><a href="">Assignment 8.2</a></li>
                                    <li><a href="">Assignment 9.2</a></li>
                                </ul>
                                <h3>Projects</h3>
                                        <!-- projects list -->
                                    <ul>
                                        <li><a href="">Personal Portfolio</a></li>
                                        <li><a href="https://alexander-keith.github.io/web-231/">WEB 231's Landing Page</a></li>
                                    </ul>
                                <h4>Important Links</h4>
                                        <!-- important links -->
                                    <ul>
                                        <li><a href="https://github.com/buwebdev/web-330">WEB 330’s GitHub Repository:</a></li>
                                        <li><a href="https://bruinconnect.bellevue.edu/">BRUIN Connect:</a></li>
                                        <li><a href="https://validator.w3.org/">W3C HTML Validator:</a></li>
                                        <li><a href="http://jigsaw.w3.org/css-validator/">W3C CSS Validator:</a></li>
                                        <li><a href="https://www.w3schools.com/html/">HTML Tutorial:</a></li>
                                        <li><a href="https://www.w3schools.com/js/js_best_practices.asp">JavaScript Best Practices:
                                        </a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <script>
            //Set default theme to light
            setDefaultTheme();

            //Set function layout
            function toggleMode(x) {

                //Assigns variables
                let colorTheme = document.body.classList;
                let iconMode = x.classList;

                //Assigns string actions
                if (colorTheme.value === "light-theme") {
                    localStorage.clear();
                    localStorage.setItem("mode", "dark-theme");
                    localStorage.setItem("iconMode", "fa-toggle-on");
                    localStorage.setItem("iconText", "Dark Mode");
                } else {
                    localStorage.clear();
                    localStorage.setItem("mode", "light-theme");
                    localStorage.setItem("iconMode", "fa-toggle-off");
                    localStorage.setItem("iconText", "Light Mode");
                }

                //Assigns output to HTML
                colorTheme.value = localStorage.getItem("mode");
                iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
                document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
            }
            
            

            function clearLocalStorage() {
                localStorage.clear();
                document.body.classList.value = "light-theme";
                document.getElementById("icon-text").innerHTML = "Light Mode";
                document.getElementById("icon-mode").classList.value = "fa fa-toggle-off pull-right";
            }
        </script>
    </body>
</html>