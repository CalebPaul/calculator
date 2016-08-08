var add = function(number1, number2) {
  return number1 + number2;
},
subtract = function(number1, number2) {
  return number1 - number2;
},
multiply = function(number1, number2) {
  return number1 * number2;
},
divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);
alert(result);
