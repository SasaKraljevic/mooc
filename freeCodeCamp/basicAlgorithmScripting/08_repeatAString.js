/*
Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Global String Object
*/
function repeat(str, num) {
  if (num > 0) {
    str = str.repeat(num);
  }
  else {
    str = "";
  }
    
  
  return str;
}

repeat("abc", 3);
