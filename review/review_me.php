<?php

// header('Access-Control-Allow-Origin: *');

// if($_POST['sendMessageButton']) {
//     print "<h1>Your comment has been submitted!</h1>";


// }

if(isset($_POST["email"]) && isset($_POST["message"])) {
    $email = $_POST["email"];
    $message = $_POST["message"];
 
    //do whatever
 
 
    echo "kuhkjh";
 }

?>

<!-- 
//   php

// if($_POST['Submit']) {
//     print "<h1>Your comment has been submitted!</h1>";

//     $name = $_POST['name'];
//     $comment = $_POST['comment'];

//     #Get old comment

//     $old = fopen("comments.txt", "r+t");
//     $old_comments = fread($old, 1024);

//     #Delete everything, write down new and old comments
//     $write = fopen("comments.txt", "w+");
//     $string = "<b>".$Name."</b><br>".$comment."<br>\n".$old_comments;
//     fwrite($write, $string);
//     fclose($write);
//     fclose($old);

// } -->
