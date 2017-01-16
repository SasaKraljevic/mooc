$(document).ready(function(){
  $('button').not('.onoff').prop('disabled', true);

  // turn it on and off
  $('.onoff').click(function ()  {
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('button').not('.onoff').prop('disabled', true);
      currValue = '';
      $("#display").text(currValue);
    } else {
        $('button').not('.onoff').prop('disabled', false);
        currValue = '0';
        $("#display").text(currValue);
      } 
    $(this).data("clicks", !clicks);
  }); // /.turn on and off
  
  // test number length
  var testNumLength = function(number) {
    if (number.length > 18) {
      number = "";
      $("#display").text("18 digits calculator");
    } 
  }; //.test number length
  
  // calculation
  function calculate(a, b, operator) {
    switch (operator) {
      case "+":
        return Number(a) + Number(b);
      case "-":
        return Number(a) - Number(b);
      case "*":
        return Number(a) * Number(b);
      case "/":
        return Number(a) / Number(b);
    }
  } //. calculation
  
  // display numbers
  var number = '';
  var newNumber = '';
  var operator = '';
  var total = '';
  //var temp = '';
  $(".numButton").not("#clear, #decimal").click(function(){
    total = '';
    //newNumber = total;
    number += $(this).text();
    number = number.replace(/^0+/, ''); // number can't start with zero
    number = number.replace(/^[\+\-\*\/]/, ''); // can't start with operators
    $("#display").text(number);
    testNumLength(number);
  });
  
  // decimal numbers
  $("#decimal").click(function(){
    if (!number.match(/[.]/)) {
      number += $(this).text();
      $("#display").text(number);
      testNumLength(number);
    } 
  });

  // display operators
  $(".operator").not("#equals, #decimal").click(function(){
  
    if( operator !== '' ) {
      operator = $(this).text();
      $("#display").text(operator);
      total = calculate(newNumber, number, operator);
      newNumber = total;
      number = '';
      operator = '';
      operator = $(this).text();
      $("#display").text(operator);
    } else {
        operator = $(this).text();
        $("#display").text(operator);
        if(total !== '') {
          newNumber = total;
          number = '';
          //operator = '';
        } else {
            newNumber = number; // number
            number = "";
            operator = $(this).text();
            $("#display").text(operator);
          }
      }
  });
  
  // C button
  $("#clear").click(function(){
    number = "";
    newNumber = '';
    total = '';
    operator = '';
    $("#display").text("0");
  });

  
  // calculate
  $("#equals").click(function(){
    
    total = calculate(newNumber, number, operator);
    
    if (total % 1 !== 0) {
      total = total.toFixed(4);
      $("#display").text(total);
      newNumber = total;
      number = '';
      operator = '';
    } else {
      $("#display").text(total);
      newNumber = total;
      number = '';
      operator = '';
      }
  });
  
  
}); //.main function