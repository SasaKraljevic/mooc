/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

Here are some helpful links:
String.prototype.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str) {
  var lista = [];
  var targetCode;
  var targetValue;
  //make a list of all character codes
  for (var i = 0; i<str.length; i++) {
    lista.push(str.charCodeAt(i));
  }
  
  for (var j = 0; j<lista.length; j++) {
    if (lista[j+1]-lista[j] == 2) {
      targetCode = lista[j] + 1;    
      targetValue = String.fromCharCode(targetCode);
      return targetValue;
    }  
  }  
}

fearNotLetter("ABCE");
fearNotLetter("abcdefghjklmno");
fearNotLetter("bcd");
fearNotLetter("yz");
