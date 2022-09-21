<?php
// Connecting to Database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "FIT";

    // Creating Connection to database
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Die if connection was not successful
    if (!$conn) {
        die("Sorry! We failed to connect to database.");
    }
    ?>