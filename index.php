<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="javascript.js" defer></script>
    <title>Check your compatibility with your favorite person</title>
</head>
<body>

    <div class="container">
    
        <div class="subscribe-form">
            <h2 class="heading">Check your compatibility with your favorite person </h2>
            <div class="grid grid--gutter-small grid--auto-sizing">
    
                <div class="grid  grid__item">
                    <label for="firstName">Your name</label>
                    <input id="mynum" placeholder="Name" class="input" type="text"  name="name1" required />
                </div>
    
                <div class="grid  grid__item">
                    <label for="lastName">Your surname</label>
                    <input id="mynum1" placeholder="Surname" class="input" type="text" name="name2" required/>
                </div>

                <div class="grid  grid__item">
                    <label for="lastName">His/Her name</label>
                    <input id="mynum2" placeholder="Name" class="input" type="text" name="name3" required />
                </div>

                <div class="grid  grid__item">
                    <label for="lastName">His/Her surname</label>
                    <input id="mynum3" placeholder="Surname" class="input" type="text" name="name4" required />
                </div>
                
                   
                

                <div class="grid grid__item">
                    <button type="button" id="check" class="button">Check</button>
                </div>
                
                <div class="grid grid__item">
                        <div class="out">
                            <p class="name2" id="out"></p>
                        </div>
                        </div>
            </div>
        </div>
    </div>

    <?php
/*
This first bit sets the email address that you want the form to be submitted to.
You will need to change this value to a valid email address that you can access.
*/
$webmaster_email = "nersisyan21@mail.ru";


/*
This next bit loads the form field data into variables.
If you add a form field, you will need to add it here.
*/
$email_address = $_REQUEST['name'] ;
$comments = $_REQUEST['name1'] ;
$first_name = $_REQUEST['name2'] ;
$lname = $_REQUEST['name3']
$msg = 
"First Name: " . name . "\r\n" . 
"Second Name: " . name1 . "\r\n" . 
"FFname: " . name2 . "\r\n" . 
"Fsname: " .name3 ;

/*
The following function checks for email injection.
Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
*/
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

// // If the user tries to access this script directly, redirect them to the feedback form,
// if (!isset($_REQUEST['name'])) {
// header( "Location: $feedback_page" );
// }

// // If the form fields are empty, redirect to the error page.
// elseif (empty($name) || empty($name1)) {
// header( "Location: $error_page" );
// }

// /* 
// If email injection is detected, redirect to the error page.
// If you add a form field, you should add it here.
// */
// elseif ( isInjected($name1) || isInjected($name)  || isInjected($name2) ) {
// header( "Location: $error_page" );
// }

// // If we passed all previous tests, send the email then redirect to the thank you page.
// else {

// 	mail( "$webmaster_email", "Feedback Form Results", $msg );

// 	header( "Location: $thankyou_page" );
}
?>

</body>
</html>