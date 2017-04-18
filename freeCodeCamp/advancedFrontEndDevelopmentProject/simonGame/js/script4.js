document.getElementById('start').disabled = true;
document.getElementById('strict').disabled = true;
document.getElementById('off').disabled = true;
document.getElementById('on').disabled = false;


function turnOn() {
  document.getElementById('rnd').innerHTML = "";
  computerSounds = [];
  userSounds = [];
  round = 1;
  var on = document.getElementById('on');
  on.disabled = true;
  var off = document.getElementById('off');
  off.disabled = false;
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
  document.getElementById('start').disabled = false;
  document.getElementById('strict').disabled = false;
}

function turnOff() {
  document.getElementById('rnd').innerHTML = "";
  //computerSounds = [];
  //userSounds = [];
  round;
  var on = document.getElementById('on');
  on.disabled = false;
  var off = document.getElementById('off');
  off.disabled = true;
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
  document.getElementById('start').disabled = true;
  document.getElementById('start').innerHTML = 'Start';
  document.getElementById('start').classList.remove("active");
  document.getElementById('strict').disabled = true;
}

var round = 1;

function startButton() {
  var x = document.getElementById('start');
  if(x.classList.contains("active")) {
    x.classList.remove("active");
    x.innerHTML = 'Start';
    turnOff();
    turnOn();
  } else {
    x.classList.add("active");
    x.innerHTML = 'Stop';

    randomSound();
    simonSays(computerSounds);
  }
}

var strict = false;
function strictButton() {
  var x = document.getElementById('strict');
  if(x.classList.contains("active")) {
    x.classList.remove("active");
    strict = false;
  } else {
    x.classList.add("active");
    strict = true;
  }
}

var colors = ['green', 'red', 'yellow', 'blue']

var computerSounds = [];
var userSounds = [];

function randomSound() {
  console.log("######## randomSound();");
  var sound = colors[Math.floor(Math.random()*colors.length)];
  computerSounds.push(sound);
  console.log("COMPUTER SOUNDS from random();", computerSounds);
}

function simonSays(arr) {

  console.log("######## simonSays(arr);");
  var elem;
  userSounds = [];
  document.getElementById('rnd').innerHTML = round;

  for (var i = 0; i < arr.length; i++) {

    setTimeout(function(x) {
      return function() {
        var targetColor = document.getElementById(arr[x]).id;
        console.log("SIMON COLOR from simonSays();", targetColor);
        elem = document.getElementsByClassName(targetColor);
        console.log("ELEM :", elem[0]);

        blink(targetColor);
/*
        document.getElementById(targetColor).play();
        elem[0].classList.add("gr");

        setTimeout(function(x) {
          elem[0].classList.remove("gr");
        }, 500);*/
      };
    }(i), 2000*i);
}
} // end of simonSays();

function blink(color) {
  document.getElementById(color).play();
  if (color == 'green') {
    document.getElementsByClassName(color)[0].classList.add('gr');
    setTimeout(function(x) {
      document.getElementsByClassName(color)[0].classList.remove('gr');
    }, 500);
  }
  if (color == 'red') {
    document.getElementsByClassName(color)[0].classList.add('re');
    setTimeout(function(x) {
      document.getElementsByClassName(color)[0].classList.remove('re');
    }, 500);
  }
  if (color == 'yellow') {
    document.getElementsByClassName(color)[0].classList.add('ye');
    setTimeout(function(x) {
      document.getElementsByClassName(color)[0].classList.remove('ye');
    }, 500);
  }
  if (color == 'blue') {
    document.getElementsByClassName(color)[0].classList.add('bl');
    setTimeout(function(x) {
      document.getElementsByClassName(color)[0].classList.remove('bl');
    }, 500);
  }
} // end of blink();

function userSays(e) {
  console.log("######## userSays(e);");
  //console.log(e.innerHTML);
    var audioId = e.getElementsByTagName('audio')[0].id;
    console.log("AUDIOiD from userSays();", audioId);
    blink(audioId);
    //document.getElementById(audioId).play();
    // add that id to userSounds array
    userSounds.push(audioId);
    console.log("USERSOUNDS from userSays();", userSounds);

    if (computerSounds.length == userSounds.length) {
      console.log("same length");
      setTimeout(function() {
        compareArrays(computerSounds, userSounds);
      }, 1000);
    }
} // end of userSays();

function compareArrays(arr1, arr2) {
  if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
    console.log("SAME");
    setTimeout(function(x) {
      round++;
      if (round == 21) {
        document.getElementById('rnd').innerHTML = "You are the WINNER";
        return;
      } else {
        document.getElementById('rnd').innerHTML = round;
        randomSound();
        simonSays(computerSounds);
      }
    }, 1500);
  } else {
    if (strict == true) {
      turnOff();
      turnOn();
      setTimeout(function() {
        //userSounds = [];
        startButton();
      }, 2000);

    }
      console.log("NOT SAME");
      document.getElementById('rnd').innerHTML = "Try again :)";
      setTimeout(function() {
        //userSounds = [];
        simonSays(computerSounds);
      }, 2000);

  }
}
