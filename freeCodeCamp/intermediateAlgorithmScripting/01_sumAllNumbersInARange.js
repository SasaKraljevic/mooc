/*
The lowest number will not always come first.

Here are some helpful links:
Math.max()
Math.min()
Array.prototype.reduce()
*/

//////////////////////////////// option 1
/*
function sumAll(arr) {
  var low = Math.min(arr[0], arr[1]);
  var high = Math.max(arr[0], arr[1]);
  var total = 0;
  for (var i = low; i <= high; i++) {
    total += i;
  }
  return total;
 }
*/

/////////////////////////////// option 2
function sumAll(arr) {
  var low = Math.min(arr[0], arr[1]);
  var high = Math.max(arr[0], arr[1]);
  var list = [];
  
  for (var i = low; i <= high; i++) {
    list.push(i);
  }
  var total = list.reduce(function(a, b) {
    return a + b;
  });
  return total;
}

sumAll([1, 4]);