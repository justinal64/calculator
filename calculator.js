// When the user performs one of the operations, output the result to another DOM element of your choice.
// Used to get the values from the input fields
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function mathAdd(a, b) {
  return a + b;
}




// In your JavaScript, put an event listener on each of the buttons.
var add = document.getElementById("add").addEventListener("click", function() {
  // console.log("Add value1 " + value1 + " value 2 " + value2);
  mathAdd(parseInt(value1.value), parseInt(value2.value));
});

var subtract = document.getElementById("subtract").addEventListener("click", function() {
  console.log("subtract is working correctly");
});

var multiply = document.getElementById("multiply").addEventListener("click", function() {
  console.log("multiply is working correctly");
});

var divide = document.getElementById("divide").addEventListener("click", function() {
  console.log("divide is working correctly");
});

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */