/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.

Here are some helpful links:
Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
*/

function translatePigLatin(str) {
  var vowels = /[aeiou]/i;
  var consonantSuffix = "ay";
  var vowelSuffix = "way";
  var firstVowel = str.indexOf(str.match(vowels));
  
  if (firstVowel === 0) {
    str = str + vowelSuffix;
  }
  else {
    str = str.slice(firstVowel) + str.slice(0, firstVowel) + consonantSuffix;
  }
  return str;
}

translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");