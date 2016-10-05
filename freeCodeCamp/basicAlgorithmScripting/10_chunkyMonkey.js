/*
Write a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array.

Here are some helpful links:
Array.prototype.push()
Array.prototype.slice()

*/
///////////////////// solution 01  /////////////////////
function chunkArrayInGroups(arr, size) {
  // break it up.
  var newArray = [];
  var index = 0;
  
  while (index < arr.length) {
    newArray.push(arr.slice(index, index + size));
    index = index + size;
  }
  
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
/*
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/


