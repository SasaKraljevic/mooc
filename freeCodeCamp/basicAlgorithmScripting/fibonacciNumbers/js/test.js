function convertToRoman(num) {
  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var decimals = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundreds =["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thousend = "M";
  var numString = num.toString();
  
  switch (numString.length) {
    case 1:
    num = ones[num];
    break;
  
    case 2:
    numString = numString.split('');
    num = decimals[parseInt(numString[0])] + 
          ones[parseInt(numString[1])];
    break;
  
    case 3:
    numString = numString.split('');
    num = hundreds[parseInt(numString[0])] + 
          decimals[parseInt(numString[1])] + 
          ones[parseInt(numString[2])];
    break;
  
    case 4:
    numString = numString.split('');
    num = thousend.repeat(parseInt(numString[0])) + 
          hundreds[parseInt(numString[1])] + 
          decimals[parseInt(numString[2])] + 
          ones[parseInt(numString[3])];
    break;
  }
 
    return num;
}

convertToRoman(1004);