
/* Send a customized message based on time
*/
//console.log("I am in the hello.js");

// get the date and time 
var today = new Date();


// display the greeting message 
var greeting = "Good morning!";
var hours = today.getHours();
// modify the code so that your code display "Good afternoon" whereas time is from 12:00pm to 6:00pm
if (hours<=12){
    greeting = "Good morning!";
}else{
    greeting = "Good afternoon!";
}


// write to the document 
document.write(greeting);