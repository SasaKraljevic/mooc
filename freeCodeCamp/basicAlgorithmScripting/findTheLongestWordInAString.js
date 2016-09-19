/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
String.prototype.split()
String.length
*/

function findLongestWord(str) {

    str = str.split(" ");
    var longest = 0;
    var word;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
