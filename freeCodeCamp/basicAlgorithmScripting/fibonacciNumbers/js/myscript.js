$(document).ready(function(){

  function createFibonacci(num) {
  // get fibonacci sequence array
    var fibonacciArray = [1];
    var num = $("#fibonacci").val();
    for (var i = 1; i<=num; i = (i + fibonacciArray[fibonacciArray.length-2]) ) {
      fibonacciArray.push(i);
    }
  $("#results").html(fibonacciArray + ',');
  };
  $("#fibArray").click(createFibonacci);
//////////////////////////////////////////////

  function createEvens() {
  // push evens to other array
    var evenArray = [];
    var fibonacciArray = [1];
    var num = $("#fibonacci").val();
    for (var i = 1; i<=num; i = (i + fibonacciArray[fibonacciArray.length-2]) ) {
    fibonacciArray.push(i);
    }
    fibonacciArray.forEach(function(elem) {
      // if element is even number, push it to evenArray
      if (elem % 2 === 0) {
        evenArray.push(elem);
      }
    })
  $("#results").html(evenArray + ',');
  };
  $("#evenArray").click(createEvens);
//////////////////////////////////////////////

  function createOdds() {
  // push odds to other array
    var oddArray = [];
    var fibonacciArray = [1];
    var num = $("#fibonacci").val();
    for (var i = 1; i<=num; i = (i + fibonacciArray[fibonacciArray.length-2]) ) {
    fibonacciArray.push(i);
    }
    fibonacciArray.forEach(function(elem2) {
      // if element is odd number, push it to evenArray
      if (elem2 % 2 !== 0) {
        oddArray.push(elem2);
      }
    })
  $("#results").html(oddArray + ',');
  };
  $("#oddArray").click(createOdds);

});