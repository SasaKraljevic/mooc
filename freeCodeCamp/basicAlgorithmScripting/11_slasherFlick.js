/*
Return the remaining elements of an array after chopping 
off n elements from the head.
The head means the beginning of the array, or the zeroth index.

Here are some helpful links:
Array.prototype.slice()
Array.prototype.splice()
*/
function slasher(arr, howMany) {
  if (arr.length < howMany) {
    arr = [];
    return arr;
  }
  else {
    arr = arr.slice(howMany, arr.length);
    return arr;    
}  
}
slasher([1, 2, 3], 2);
