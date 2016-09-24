/*
Perform a search and replace on the sentence using the arguments provided and return the new 
sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be 
replaced as "Dog"

Here are some helpful links:
Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()
*/

function myReplace(str, before, after) {
  var splitted = str.split(" ");

  for (var i=0; i<splitted.length; i++) {
    if (splitted[i] == before) {
      var indX = splitted.indexOf(before);
      //console.log("indX: ", indX);
      if (splitted[indX][0] == splitted[indX][0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);
        //console.log("After: ", after);
      }
      splitted[indX] = after;
      //console.log("After 2: ", after);
    }   
  }
  str = splitted.join(" ");
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");