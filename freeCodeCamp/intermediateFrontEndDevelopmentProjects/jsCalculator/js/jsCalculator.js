var currValue = "";
var value = "";

$(document).ready(function(){
  $('button').not('.onoff').prop('disabled', true);
  var on = false;
  var off = true;
///////////////////////////////////////
//$('input').click(function ()  {
$('.onoff').click(function ()  {
  var clicks = $(this).data('clicks');
  
  if (clicks) {
    $('button').not('.onoff').prop('disabled', true);
    //$('input').prop('value', '');
    currValue = '';
    $("input").attr('value', currValue);
    
    } else {
    $('button').not('.onoff').prop('disabled', false);
    currValue = '0';
    $("input").attr('value', currValue);
    } 
    
  $(this).data("clicks", !clicks);
  });

   
$('button').on('click', function () {
  
  value = this.id;
  console.log("value :", value);
  if(this.id !== 'result' && this.id !== 'c') {
    //currValue += value;
    
    ///////////////////
    // allow only one decimal point
    if(this.id === '.') {
      if (currValue.indexOf('.') === -1) {
        currValue += value;
      }
    }
    else {
      currValue += value;
    }
    ///////////////////

    console.log("!!!!! :", currValue.length);
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


    
});
