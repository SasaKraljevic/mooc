$(document).ready(function() {

  //var sound = new Audio('');

$('#strict').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
});
/*
function playSound() {
          var sound = document.getElementById('audio').play();
      }
*/

})
