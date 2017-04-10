
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

  var colors = ['green', 'red', 'yellow', 'blue']
  //console.log(colors);

  var computerSounds = [];
  var sound;
  var userSounds = [];

  function randomSound() {
    sound = colors[Math.floor(Math.random()*colors.length)];
    computerSounds.push(sound);
    console.log(computerSounds);
    //setInterval(playSound(), 1000);
  }

function makeSound(arr) {
    for(var i = 0; i < arr.length; i++) {
      document.getElementById(arr[i]).play();
    }
  }
  function playSound() {
    randomSound();
    //computerSounds
    setInterval(makeSound(computerSounds), 5000);
  }
  //document.getElementById(e).play();

randomSound();
randomSound();


//makeSound(computerSounds);


  // napravi array od 20 random zvukova
  function soundsArray(array) {
    temp = [];
    for(var i = 0; i < 20; i++) {
      temp.push(sounds[Math.floor(Math.random()*sounds.length)]);
    }
    //console.log(temp);
    return temp;
  }




})
