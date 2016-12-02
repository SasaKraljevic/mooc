$(document).ready(function(){
  var on = false;
  var off = true;
///////////////////////////////////////
  
var currValue = "";
$('button').on('click', function () {
  
  var value = this.id;
  console.log(value);
  currValue += value;
  console.log(currValue);
  $("input").attr('value', currValue);
});

// C button function
$("#c").on("click", function() {
  value = 0;
  $("input").attr('value', value);
});

//$(".btn3d").on("click", function() {
 //   value = $(".btn3d").text(); //$(".btn3d").text($(this).val());
    
});


  