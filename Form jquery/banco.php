<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dataserver = "DB_2PI";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dataserver);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }else{
        //echo "Connected successfully";
    }
?> 