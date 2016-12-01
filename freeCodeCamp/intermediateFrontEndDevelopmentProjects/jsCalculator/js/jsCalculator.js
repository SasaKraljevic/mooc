$(document).ready(function(){
  var on = false;
  var off = true;
///////////////////////////////////////
  
var value = $("input").attr('value');
  console.log("VALUE :", value);
$(".btn3d").on("click", function() {
  var value = $("input").attr('value');
  value = $("#seven").text();
  $("input").attr('value', value);
});

//$(".btn3d").on("click", function() {
 //   value = $(".btn3d").text(); //$(".btn3d").text($(this).val());
    
});


  