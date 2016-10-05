/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:
Boolean Objects
Array.prototype.filter()
*/

function bouncer(arr) {
/*
  // solution 01
    return arr.filter(function(falsy){
    return falsy;
  });
}

bouncer([7, "ate", "", false, 9]);
*/

// solution 02
function bouncer(arr) {
  function isTrue(val) {
    return Boolean(val);
  }

  var filteredArray = arr.filter(isTrue);
  return filteredArray;
}

bouncer([7, "ate", "", false, 9]);
/*
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/
