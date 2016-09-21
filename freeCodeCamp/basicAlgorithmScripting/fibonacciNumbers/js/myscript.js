$(document).ready(function(){

  function sumFibs(num) {
  // get fibonacci sequence array
  var fibonacciArray = [1];
  var num = $("#fibonacci").val();
  for (var i = 1; i<=num; i = (i + fibonacciArray[fibonacciArray.length-2]) ) {
    fibonacciArray.push(i);
  }
  
  // choose what sum you would like to return
  //return fibonacciArray;

  $("#roman").html(fibonacciArray + ',');

};


$("#fibArray").click(sumFibs);
$("#fibonacci").on('keyup', function(e){
  console.log(e.which);
  if(e.which=='13'){
    sumFibs();
  }
});
});
