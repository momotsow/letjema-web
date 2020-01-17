<?php

header('Access-Control-Allow-Origin: *');

// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])    ||
   empty($_POST['services'])  ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$services = strip_tags(htmlspecialchars($_POST['services']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'info@letjema.co.za'; 
$email_subject = "Website Quote Form:  $name";
$email_body = "You have received a new message from your website Quote form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\n\n\nServices: $servicesPhone: $phone\n\nMessage:\n$message";
$headers = "From: info@letjema.co.za\n";
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>