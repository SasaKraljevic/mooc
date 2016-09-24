/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to 
their corresponding HTML entities.

Here are some helpful links:
RegExp
HTML Entities
String.prototype.replace()
*/

function convertHTML(str) {
  // &colon;&rpar;
  return String(str) 
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Shindler's List");
convertHTML("<>");
convertHTML("abc");