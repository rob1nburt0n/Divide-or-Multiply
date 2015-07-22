
// - In JavaScript, have a function divides a number by 10

  function divideByTen(num){
    return num / 10;
  }
     // console.log(divideByTen(20));

  // - In JavaScript, have a function that multiplies a number by 5

  function multiplyByFive(num){
  	return num * 5;
  }
     // console.log(multiplyByFive(10));
  
  function buttonClickHandler() {
  	// alert("In buttonClickHandler");

  	// getting the number that is in the input box "right now"
  	// when the button is clicked	
  	var numberString = document.getElementById("numEntered").value;
  	// e.g. "200"
  	if (numberString.length > 0) {
  		var numberInteger = parseInt(numberString);
  		// e.g. "200" --> 200 (string to number conversion);
  	} else  {
   	 alert("Please enter a number");
   	}
  }
  // - When the button is clicked, call a JavaScript function that checks 
  // function determineConverter (e) {

  var button = document.getElementById("enter");
  
  button.onclick = buttonClickHandler; // correct

  //  If there is a value, and its numeric value is greater than 10000, 
  // call a function that passes in the user-entered value as an argument,
  // and the name of the function that divides by 10.
    
    if (numberString > 10000) {
   	document.write("<p>" + "Your answer is " + divideByTen(numEntered) + "</p>");
   }
    else if (numberString > 0 && numberString < 10000) {
    document.write("<p>" + "Your answer is " + multiplyByFive(numEntered) + "</p>");
   }

   // If there is a value, and its numeric value is less than 10000, 
  // call a function that passes in the user-entered value as an argument, 
  // and the name of the function that multiplies by 5.
  //  Write the result of the calculation into the HTML document.

   // - If there is no value, put an appropriate message in an alert box 
  // telling the user to enter something

    

  

  
  // button.onclick = determineConverter;

