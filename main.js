
// - In JavaScript, have a function divides a number by 10

  function divide(num){
    return num / 10;
  }
     // console.log(divide(20));

  // - In JavaScript, have a function that multiplies a number by 5

  function multiply(num){
  	return num * 5;
  }
     // console.log(multiply(10));

  // - When the button is clicked, call a JavaScript function that checks 
  // function determineConverter (e) {

  var numEntered = document.getElementById("numEntered");

  // console.log(numEntered);

  //  If there is a value, and its numeric value is greater than 10000, 
  // call a function that passes in the user-entered value as an argument,
  // and the name of the function that divides by 10.

    if (numEntered > 10000) {
   	document.write("<p>" + "Your answer is " + divide(numEntered) + "</p>");
   }
   // If there is a value, and its numeric value is less than 10000, 
  // call a function that passes in the user-entered value as an argument, 
  // and the name of the function that multiplies by 5.
  //  Write the result of the calculation into the HTML document.


    if (numEntered > 0 && numEntered < 10000) {
    document.write("<p>" + "Your answer is " + multiply(numEntered) + "</p>");
   }

   // - If there is no value, put an appropriate message in an alert box 
  // telling the user to enter something

    else  {
   	 alert("Please enter a number");
   }

  

  
  // button.onclick = determineConverter;

