/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Here are some helpful links:
RegExp
String.prototype.replace()
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var re = (/([a-z])([A-Z])/g);
  str = str.replace(re, "$1 $2");
  re = (/ |_/g); //match spaces and underscores
  str = str.replace(re,"-"); // replace space or uncerscore with -
  str = str.toLowerCase();
  //console.log(str);
  return str;
}

spinalCase('This Is Spinal Tap');
/*
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/