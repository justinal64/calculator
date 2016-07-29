// When the user performs one of the operations, output the result to another DOM element of your choice.
// Used to get the values from the input fields
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var answerField = document.getElementById("answer");
var numbers;
var answer;

// This functions checks both input fields to make sure the input is valid
function valInput(a, b) {
  // I Still need to work on validating the numbers
  var a = parseInt(a.value);
  var b = parseInt(b.value);
  return [a, b];
}

function math(value1, value2, mathType) {
  if(mathType === "add") {
    answer = value1 + value2;
  } else if(mathType === "subtract") {
    answer =  value1 - value2;
  } else if(mathType === "multiply") {
    answer = value1 * value2;
  } else {
    answer =  value1 / value2;
  }

  answerField.value = answer;
}



// In your JavaScript, put an event listener on each of the buttons.
var add = document.getElementById("add").addEventListener("click", function() {
  // console.log("Add value1 " + value1 + " value 2 " + value2);
  math(parseInt(value1.value), parseInt(value2.value), "add");
});

var subtract = document.getElementById("subtract").addEventListener("click", function() {
  math(parseInt(value1.value), parseInt(value2.value), "subtract");
});

var multiply = document.getElementById("multiply").addEventListener("click", function() {
  math(parseInt(value1.value), parseInt(value2.value), "multiply");
});

var divide = document.getElementById("divide").addEventListener("click", function() {
  math(parseInt(value1.value), parseInt(value2.value), "divide");
});

