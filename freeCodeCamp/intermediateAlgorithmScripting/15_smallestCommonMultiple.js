/*
Find the smallest common multiple of the provided parameters that can be evenly 
divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Here are some helpful links:
Smallest Common Multiple
*/

function smallestCommons(arr) {
    // get primes 
  function getPrimes(num) {
    primes = [];
    for (var i = 2; i <= num; i++) {
    // i=2,3,4,5....
      var notPrime = false;
      for (var current = 2; current <= (i - 1); current++) {
        if (i % current === 0) {
          notPrime = true;
        }
      }
      if (notPrime === false) 
        primes.push(i);
    }
  }
  
  // get range array 
  var rangeArray = [];
  var start = arr[0];
  var end = arr[1];
  if (start < end) {
    getPrimes(end);
    for (start; start <= end; start++) {
      rangeArray.push(start);
    }
  }
  else {
    for (end; end <= start; end++) {
      getPrimes(start);
      rangeArray.push(end);
    }
  }
  console.log("Range Array: ", rangeArray);
  console.log("Primes:", primes);

  // get array to multiplay elements
  var arrayToMultiply = [];
  var devideBy = 2;
  var finalResult;
  for (var j = 0; j < rangeArray.length; j++) {
    if (rangeArray[j] % devideBy === 0 && rangeArray[j] > 1) {
      arrayToMultiply.push(primes[j]);
      //console.log("RangeArray[i]:", rangeArray[i]);
    }
    
    
  }
  console.log("Array to multiply: ", arrayToMultiply);
 finalResult = arrayToMultiply.reduce(function(a,b){return a*b;});
  
  
}

smallestCommons([1,5]);
/*
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.

*/