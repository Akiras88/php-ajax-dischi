<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="dist/css/main.css">
</head>
<body>
    <header class="Header">
        <img src="dist/img/spotify-logo.png" alt="">
    </header>
    <main class='Main'></main>
    <!-- Handlebars template -->
    <script id="album-template" type="text/x-handlebars-template">
        <div class="cd">
            <img src="{{img}}" alt="">
            <h3>{{title}}</h3> 
            <span class="grey">{{author}}</span>
            <span>{{year}}</span>
        </div>
    </script>

    <!-- Jquery -->
    <script src="dist/js/jquery-3.5.1.min.js"></script>
    <!-- Handlebars -->
    <script src="dist/js/handlebars.min-v4.7.6.js"></script>
    <!-- js -->
    <script src="dist/js/main.js"></script>
</body>
</html>