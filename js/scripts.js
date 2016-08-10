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
},
buttonName = "";

//UI/front-end logic:
$( document ).ready(function() {

  $("button").click(function() {
    buttonName=this.id;
  });

  $("#calc_form").submit(function(event) {
    event.preventDefault();
      var number1 = parseInt($("#input1").val());
      var number2 = parseInt($("#input2").val());
      var result = "";
      if (buttonName==="add") {
        result = add(number1, number2)
      } else if (buttonName==="subtract") {
        result = subtract(number1, number2)
      } else if (buttonName==="multiply") {
        result = multiply(number1, number2)
      } else {
        result = divide(number1, number2)
      }
      $(".well").show();
      $(".output").text(result);
  });
});
