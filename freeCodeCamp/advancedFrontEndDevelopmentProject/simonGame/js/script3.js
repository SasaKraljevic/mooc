var playingGame = false;
var round = 1;
//var simon = document.getElementsByTagName('audio');
//simon.disabled = true;
var powerOn = document.getElementById('start');
powerOn.disabled = true;
var powerOff = document.getElementById('strict');
powerOff.disabled = true;

function enableAll() {
  //simon.disabled = false;
  powerOn.disabled = false;
  powerOff.disabled = false;
}

function disableAll() {
  //simon.disabled = true;
  
  powerOn.disabled = true;
  powerOff.disabled = true;
}

function turnOn() {
  playingGame = true;
  enableAll();
  var on = document.getElementById('on');
  var off = document.getElementById('off');
  if(on.classList.contains("btn-default")) {
    on.classList.remove("btn-default");
    on.classList.add("btn-primary");
    off.classList.remove("btn-primary");
    off.classList.add("btn-default");
  } else {
    on.classList.remove("btn-primary");
    on.classList.add("btn-default");
    off.classList.remove("btn-default");
    off.classList.add("btn-primary");
  }
}

function turnOff() {
  playingGame = false;
  disableAll();
  var on = document.getElementById('on');
  var off = document.getElementById('off');
  if(on.classList.contains("btn-default")) {
    on.classList.remove("btn-default");
    on.classList.add("btn-primary");
    off.classList.remove("btn-primary");
    off.classList.add("btn-default");
  } else {
    on.classList.remove("btn-primary");
    on.classList.add("btn-default");
    off.classList.remove("btn-default");
    off.classList.add("btn-primary");
  }
}

//var soundsArray = [];
var sounds = [
  "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
  "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
  "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
  "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
];

var computerSounds = [];
var sound;
var userSounds = [];

function startButton() {
  /*if (!playingGame) {
    return;
  }*/
  var x = document.getElementById('start');
  if(x.classList.contains("active")) {
    x.classList.remove("active");
    x.innerHTML = 'Start';
  } else {
    x.classList.add("active");
    x.innerHTML = 'Stop';
    randomSound();
    simonSays();
  }
  //simonSays();
}
function strictButton() {
  var x = document.getElementById('strict');
  if(x.classList.contains("active")) {
    x.classList.remove("active");
  } else {
    x.classList.add("active");
  }
}

var colors = ['green', 'red', 'yellow', 'blue']
//console.log(colors);

function randomSound() {
  for (var i = 0; i < 20; i++) {
    sound = colors[Math.floor(Math.random()*colors.length)];
    computerSounds.push(sound);
    console.log(computerSounds[i]);
  }
  //setInterval(playSound(), 1000);
}

function simonSays() {
  //for (var i = round; i < computerSounds.length; round++) {
    console.log("###: ", computerSounds.slice(0,round));
    var tempSounds = computerSounds.slice(0, round);
    for (var i = 0; i < tempSounds.length; i++) {
      document.getElementById(tempSounds[i]).play();
    }
    //computerSounds.slice(0,round).play();
  //}
}
/*
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
*/
