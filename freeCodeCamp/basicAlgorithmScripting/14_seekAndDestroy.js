/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are 
of the same value as these arguments.

Here are some helpful links:
Arguments object
Array.prototype.filter()
*/
// solution 01
function destroyer(arr) {
  var deleted = [];
  for (var i = 0; i < arguments.length; i++) {
    deleted.push(arguments[i]);    
  }
  
  return arr.filter(function(x) { // return true to keep the element, false otherwise
    if (deleted.indexOf(x) >= 0) {
      return false;
    } else {
      return true;
    }
  });
}

//solution 02
/*
function destroyer(arr) {
  var deleted = [];
  for (var i = 0; i < arguments.length; i++) {
    deleted.push(arguments[i]);    
  }
  
  return arr.filter(function(x) { // return true to keep the element, false otherwise
      return deleted.indexOf(x) <= 0;
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
*/

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
/*
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/
