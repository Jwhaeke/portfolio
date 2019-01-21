<?php

session_start();

$visibility = "hidden";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">


    <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet"> 
    <script type="text/javascript" src="javascript/main.js"></script>

    
    <title>Portfolio</title>
</head>
<body>
    
    <div id="hide2" class="screen">
        <div class="video">
            <video id="loadScreen" src="./vid/load.mp4" muted onended="projects()"></video>
        </div>    
    </div>
    
    <div id="hide1" class="txt">
    <ul>
        <li id="about">About me</li><br>
        <li id="projects">Projects</li><br>
        <li id="off">Turn Off</li><br>
    </ul>
    </div>


    <?php
    if (!isset($_SESSION['Visit'])) {
    echo "<div class='start'>";
    echo "<video autoplay muted id='bgvideo' onended='display()'>";
    echo "<source src='./vid/bg.mp4' type='video/mp4'>";
    echo "</video>";
    echo "</div>";
    $_SESSION['Visit'] = true;
    } else {
        $visibility = "block";
        echo "<script type='text/javascript'>visited();</script>";
    }
    ?>

    <div id="walkAway" style=<?php echo "visibility:"."$visibility";?>>
        <video muted id="walkVid" onended="showstuff()">
            <source src="./vid/leave.mp4" type="video/mp4">
        </video>
    </div>

    <div id="ender">
        <video muted id="gone" onended="reboot()">
            <source src="./vid/off.mp4" type="video/mp4">
        </video>
    </div>

    <div id="reboot">
    <a href="index.php"><img src="./img/icons8-refresh.svg"></a>
    </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
   </body>
</html>
