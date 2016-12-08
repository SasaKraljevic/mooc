var currValue = "";
var value = "";

$(document).ready(function(){
  var on = false;
  var off = true;
///////////////////////////////////////
  

$('button').on('click', function () {
  
  value = this.id;
  console.log("value :", value);
  if(this.id !== 'result' && this.id !== 'c') {
    currValue += value;
    console.log(currValue);
  }
  $("input").attr('value', currValue);
});

// C button function
$("#c").on("click", function() {
  value = 0;
  currValue = "";
  $("input").attr('value', value);
  console.log("TEST :", value);
  //$("input").attr('value', value);
});
  
// result button function
$("#result").on("click", function() {
  value = eval(currValue);
  currValue = eval(currValue);
  $("input").attr('value', value);
});

//$(".btn3d").on("click", function() {
 //   value = $(".btn3d").text(); //$(".btn3d").text($(this).val());
    
});


  