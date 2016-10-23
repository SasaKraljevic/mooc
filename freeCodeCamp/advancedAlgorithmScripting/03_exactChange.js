/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as 
the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) 
as the third argument.

cid is a 2D array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order.

Here are some helpful links:
Global Object
*/

function checkCashRegister(cijena, gotovina, novacUBlagajni) {

  var kusur = gotovina - cijena;
  kusur = parseFloat( kusur.toFixed(2) );
  //console.log("KUSUR: ", kusur);
  
  var total = 0;
  
  // step 01: create denominations
  var novcanice = [
    ["ONE HUNDRED", 100.00],
    ["TWENTY", 20.00],
    ["TEN", 10.00],
    ["FIVE", 5.00],
    ["ONE", 1.00],
    ["QUARTER", 0.25],
    ["DIME", 0.10],
    ["NICKEL", 0.05],
    ["PENNY", 0.01] 
  ];
  
  // step 02: koliko je ukupno novca u blagajni??
  var cashInRegister = function(arr) { 
      for ( var i in arr ) {
        total += arr[i][1];
      }
    if ( total === kusur ) {
      return "Closed";
    }
    if ( total < kusur ) {
      return "Insufficient Funds";
    }
   // return total.toFixed(2);
  };
  cashInRegister(novacUBlagajni);

  // zajebani dio!!!
  var rezultat = [];
  
  for ( var i in novacUBlagajni.reverse() ) {
    var potroseno = 0;
    while ( novacUBlagajni[i][1] > 0 && kusur >= novcanice[i][1] ) {
      kusur -= novcanice[i][1];
      kusur = parseFloat( kusur.toFixed(2) );
      console.log("KUSUR: ", kusur);
      novacUBlagajni[i][1] -= novcanice[i][1];
      console.log("NOVAC U BLAGAJNI: ", novacUBlagajni[i][1]);
      potroseno += novcanice[i][1];
      potroseno = parseFloat(potroseno.toFixed(2));
      console.log("POTROSENO: ", parseFloat(potroseno.toFixed(2)));  
    }  // end of while loop
    
    if ( potroseno > 0 ) {
      rezultat.push([novcanice[i][0], parseFloat(potroseno.toFixed(2))]);
    }
    if ( potroseno === total && kusur < potroseno) {
      return "Closed";
    }
}  // end of for loop
  
  if (rezultat.length < 1 || kusur > 0 ) {
    return "Insufficient Funds";
  }

  console.log(rezultat);
  return rezultat;
}
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]

/*
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
should return an array.

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
should return [["QUARTER", 0.50]].

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
should return "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
should return "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
should return "Closed".
*/