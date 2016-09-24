/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

Here are some helpful links:
Boolean Objects
*/

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false) {
    bool = true;
  }
  else {
    bool = false;
  }
  return bool;
}

booWho(null);
booWho(false);
booWho([1, 2, 3]);
booWho([].slice);
booWho({ "a": 1 });
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");