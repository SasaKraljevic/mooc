/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than 
or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in 
the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci 
sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 
are 1, 1, 3, and 5.

Here are some helpful links:
Remainder
*/

function sumFibs(num) {
  // get fibonacci sequence array
  var fibonacciArray = [1];
  for (var i = 1; i<=num; i = (i + fibonacciArray[fibonacciArray.length-2]) ) {
    fibonacciArray.push(i);
  }
  // devide odds and evens in two arrays
  var oddArray = [];
  var evenArray = [];
  var sumEven = 0;
  var sumOdds = 0;
  fibonacciArray.forEach(function(elem) {
          // if element is even number, push it to evenArray
          if (elem % 2 === 0) {
            evenArray.push(elem);
            // sum all numbers in evenArray
            sumEven = evenArray.reduce(function(pv, cv) { 
              return pv + cv;
            }, 0);  
          }
          // if element is odd number, push it to oddArray
          else {
            oddArray.push(elem);
            // sum all numbers in oddArray
            sumOdds = oddArray.reduce(function(pv, cv) {
              return pv + cv;
            }, 0);
          }
       });
  
  
  //return fibonacciArray;
  // choose what sum you would like to return
  return sumOdds;
  //return sumEven;
}

sumFibs(10);
/*
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/