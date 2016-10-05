/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a 
shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 
13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.

Here are some helpful links:
String.prototype.charCodeAt()
String.fromCharCode()
*/
///////////////////// solution 01  /////////////////////
function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // string to Array
  var decodedArr = [];
  var chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "!", "?", "."];
  var chars2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", " ", "!", "?", "."];
  
  for (var i = 0; i<codeArr.length; i++){
     var pos = chars.indexOf(codeArr[i]);
     decodedArr.push(chars2[pos]);
    // decodedArr.push(" ");
    // decodedArr.push(codeArr[i]);
  }

  return decodedArr.join(""); // array to String
}

// change the inputs below to test
rot13("SERR PBQR PNZC");
/*
rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/


