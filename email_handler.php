<?php  


if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $name1=$_POST['name1'];
    $name2=$_POST['name2'];
    $name3=$_POST['name3'];


    $to='taron.nersisyan.16@gmail.com';
    $subject='Sovmestimost';
    $message="Name: ".$name"\n"."Surname: ".$name1"\n"."His/her name: ".$name2"\n"."His/her second name: ". $name3;
    $headers="From: ".$name;


    
}



?>