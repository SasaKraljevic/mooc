/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
String.prototype.split()
*/

function titleCase(str) {
  var splitted = str.toLowerCase().split(' ');
  
  for (var i = 0; i < splitted.length; i++) {
    var holder = splitted[i];    
    var bigLetter = holder.charAt(0).toUpperCase();
    holder = holder.slice(1, holder.length);
    splitted[i] = bigLetter.concat(holder);
  }
  
  str = splitted.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
