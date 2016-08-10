//Business/back-end logic:
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

//UI/front-end logic:
$(document).ready(function() {

  $("form#add").submit(function(event) {
  event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
