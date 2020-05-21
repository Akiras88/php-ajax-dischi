<?php
include_once __DIR__ .'/partials/data/database.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="dist/css/main.css"> -->
</head>
<body>
    <header class="Header">
        <img src="dist/img/spotify-logo.png" alt="">
    </header>
    
    <main class='Main'>    
        <?php foreach( $database as $data ) { ?>
            <div class="cd">
                <img src="<?php echo $data['cover'];?>" alt="<?php echo $data['author'];?>">
                <h3><?php echo $data['album'];?></h3> 
                <span class="grey"><?php echo $data['author'];?></span>
                <span><?php echo $data['year'];?></span>
            </div>
        <?php } ?>
    </main>
</body>
</html>