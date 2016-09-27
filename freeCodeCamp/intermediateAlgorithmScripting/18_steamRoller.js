/*
Flatten a nested array. You must account for varying levels of nesting.

Here are some helpful links:
Array.isArray()
*/

//////////// version 01
/*
function steamrollArray(arr) {
  return arr.reduce(function (flat, toFlat) {
    return flat.concat(Array.isArray(toFlat) ? steamrollArray(toFlat) : toFlat);
}, []);
}
*/

 /////////// version 02
function steamrollArray(arr) {
  var newArr = [];
  // get index for every element
  //for(var i = 0; i < arr.length; i++) {
  for(var i in arr) {
    // if element itself is an array??
    if(Array.isArray(arr[i])) {
      newArr = newArr.concat(steamrollArray(arr[i]));
    } 
    else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
steamrollArray([1, [2], [3, [[4]]]]);
/*
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/