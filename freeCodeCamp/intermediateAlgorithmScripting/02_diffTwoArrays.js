/*
Compare two arrays and return a new array with any items only found in one of the 
two given arrays, but not both. In other words, return the symmetric difference 
of the two arrays.

Here are some helpful links:
Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
*/

function diffArray(arr1, arr2) {
  // merge arrays to new one with .concat()
  var newArr = arr1.concat(arr2);

  function checkItems(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }
  return newArr.filter(checkItems);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);