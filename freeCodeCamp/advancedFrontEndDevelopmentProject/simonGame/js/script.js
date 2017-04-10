
$(document).ready(function() {

  $('#strict').click(function(){
      if($(this).hasClass('active')){
          $(this).removeClass('active')
      } else {
          $(this).addClass('active')
      }
  });

  $('#start').click(function(){
      if($(this).hasClass('active')){
          $(this).removeClass('active')
      } else {
          $(this).addClass('active')
      }
  });

  //var soundsArray = [];
  var sounds = [
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
  ];
  //console.log(sounds);

  var colors = ['green', 'red', 'yellow', 'blue'];
  //console.log(colors);



  function randomSound(array) {
    computerSounds = [];
    for(var i = 0; i < 20; i++) {
      computerSounds.push(colors[Math.floor(Math.random()*colors.length)]);
    }
    console.log(computerSounds);
  }
randomSound();


  function computerPlay() {
    randomSound();
    setTimeout(function() {
    computerSounds.forEach(function(e) {

      if(e === 'green') {
        document.getElementsByClassName(e)[0].classList.add('gr');
        document.getElementById(e).play();
        setTimeout(function() {
          document.getElementsByClassName(e)[0].classList.remove('gr');
        }, 1000);
      }
    }, 2000);
    }


computerPlay();
computerPlay();
computerPlay();


  // napravi array od 20 random zvukova
  function soundsArray(array) {
    temp = [];
    for(var i = 0; i < 20; i++) {
      temp.push(sounds[Math.floor(Math.random()*sounds.length)]);
    }
    console.log(temp);
    return temp;
  }




})
