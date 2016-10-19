
function checkCashRegister(price, cash, cid) {
  var change;
  var toReturn = cash - price;
  console.log("To return: ", toReturn);
  
  // step 01: create denominations
  var denominations = [
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
  
  // step 02: how much money is in cash register??
  var cashInRegister = function(arr) {
    money = 0;
    for ( var c in arr ) {
      money += arr[c][1];
    }
    console.log("Money: ", money.toFixed(2));
    // is that enough for transaction??
    if ( money < toReturn ) {
      return "Insufficient Funds";
    }
    else if ( money == toReturn ) {
      return "Closed";
    }
  };
  cashInRegister(cid);
  
  
  
  
  // step 03: what is a number of every bill?? 
  for ( var i in cid.reverse() ) {

      console.log(cid[i]);
    if ( cid[i][1] < toReturn ) {
      while ( cid[i][1] >= denominations[i][1] ) {
        console.log("VRIJEDNOST NOVCANICA: ", cid[i][1]);
        toReturn -= denominations[i][1];
        console.log("VRIJEDNOST PO NOVCANICI: ", denominations[i][1]);
        console.log("JOS ZA VRATITI: ", toReturn);
        cid[i][1] -= denominations[i][1];
        // iznad trebam novu varijablu umjesto cid[i][1]
        console.log("NOVA VRIJEDNOST NOVCANICA: ", cid[i][1]);
      }
      
    }
    
    //console.log("NOVI cid[i][1]: ", cid[i][1]);
        //console.log("SLJEDECA NOVCANICA: ", denominations[i][1]);
    /*
  console.log("cid[i]: ", cid[i]);  // this gives key and value
  console.log("cid[i][0]: ", cid[i][0]); // this gives key
  console.log("cid[i][1]: ", cid[i][1]); // this gives value
    */
  console.log(".....................");
  //console.log(toReturn);
//    var numberOfBills = cid[i][1] / denominations[i][1];
//    if ( )
  }
  
  console.log("#####################################");
  // step ?: conclusion
/*  this code would need later, for conclusion!!!!!!
   if ( money < toReturn ) {
      console.log("Insufficient Funds");
      //return "Insufficient Funds";
     console.log(".....................");
    }
  else if ( money == toReturn ) {
    console.log("Closed");
  }
 */
  
/*  var cashInRegister = 0;
  for (var i in cid ) {
    cashInRegister += cid[i][1];  
  }
  console.log("cashInRegister: ", cashInRegister);
  
  if ( cashInRegister < toReturn ) {
    console.log("Insufficient Funds");
    return "Insufficient Funds";
  }
 */ 
  

//    /*
//    console.log("cid[i]: ", cid[i]);  // this gives key and value
//    console.log("cid[i][0]: ", cid[i][0]); // this gives key
//    console.log("cid[i][1]: ", cid[i][1]); // this gives value
//    */

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
//  ["NICKEL", 2.05],
//  ["DIME", 3.10],
//  ["QUARTER", 4.25],
//  ["ONE", 90.00],
//  ["FIVE", 55.00],
//  ["TEN", 20.00],
//  ["TWENTY", 60.00],
//  ["ONE HUNDRED", 100.00]
// ]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]
