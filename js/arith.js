// get the element 

// element --- property
// var num1 = parseInt(document.getElementById('n1').textContent); 
var nE1 = document.getElementById('num1');
var nE2 = document.getElementById('num2');
var num1 = parseInt(nE1.textContent);
var num2 = parseInt(nE2.textContent);
//process
var c = num1 + num2;

//display
document.write(c);