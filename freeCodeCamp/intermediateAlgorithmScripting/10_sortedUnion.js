/*
Write a function that takes two or more arrays and returns a new array of unique values 
in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, 
but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should 
not be sorted in numerical order.

Check the assertion tests for examples.

Here are some helpful links:
Arguments object
Array.prototype.reduce()
*/

function uniteUnique(arr) {
// version 1
/*  
  var endResult = [];

  for (var i = 0; i < arguments.length; i++) {
    var objectItems = arguments[i];
    //it gives every single array

    for (var j = 0; j < objectItems.length; j++) {
      var arrayItem = objectItems[j];
      //it gives every single array item

      // if the value is not on the endResult array
      // push it in endResult array
      if (endResult.indexOf(arrayItem) < 0) {
        endResult.push(arrayItem);
      }
    }
  }
  return endResult;
*/
  
// version 2
  var endResult = [];
  var objectItems = Array.prototype.slice.call(arguments);
  
  var arrayItem = objectItems.reduce(function(a, b) {
    return a.concat(b);
  });

  for (var j = 0; j < arrayItem.length; j++) {
    if (endResult.indexOf(arrayItem[j]) < 0) {
        endResult.push(arrayItem[j]);
      }
  }
  return endResult;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);