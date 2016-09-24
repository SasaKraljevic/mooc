/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, 
one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.

Here are some helpful links:
For Loops
Array.prototype.push() helpful links:
Remainder
*/

function sumPrimes(num) {
  var primes = [];
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
  var sum = primes.reduce(function(pv, cv) { 
              return pv + cv;
            });
  return sum;
}

sumPrimes(10);
/*
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/