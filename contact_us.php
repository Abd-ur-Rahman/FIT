<?php 
include 'config.php';
if (isset($_POST) && !empty($_POST)) {
    //echo "<pre>"; print_r($_POST);
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $sql = "INSERT INTO `tbl_contact` (`name`, `email`, `phone`, `subject`, `message`) VALUES ('$name', '$email', '$phone', '$subject', '$message')";
        $result = mysqli_query($conn, $sql);
        // Check if data inserted into table
        if ($result) {
            echo 'success';
        }
} ?>