document.getElementById('start').disabled = true;
document.getElementById('strict').disabled = true;
document.getElementById('off').disabled = true;
document.getElementById('on').disabled = false;


function turnOn() {

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

function startButton() {
  var x = document.getElementById('start');
  if(x.classList.contains("active")) {
    x.classList.remove("active");
    x.innerHTML = 'Start';
  } else {
    x.classList.add("active");
    x.innerHTML = 'Stop';
    //randomSound();
    //simonSays();
  }
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

var computerSounds = [];
//var sound;
var userSounds = [];

function randomSound() {
  var sound = colors[Math.floor(Math.random()*colors.length)];
  computerSounds.push(sound);
  console.log(computerSounds);
  //setInterval(simonSays(), 1000);
}


function simonSays(arr) {
  randomSound();
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function(x) {
      return function() {
        var targetColor = document.getElementById(arr[x]).id;
        console.log("USER COLOR :", targetColor);
        document.getElementById(targetColor).play();
      };
    }(i), 2000*i);
  }
} // end of simonSays();

function userSays(e) {
  //console.log(e.innerHTML);
  //var targetColor = e.getElementsByTagName('div')[0].className;
  var audioId = e.getElementsByTagName('audio')[0].id;
  console.log(audioId);
  document.getElementById(audioId).play();
  // add that id to userSounds array
  userSounds.push(audioId);

  compareArrays(computerSounds, userSounds);

} // end of userSays();

// compare computerSounds and userSounds arrays
function compareArrays(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] == arr2[i]) {
        console.log("SAME");
      }
      else {
        console.log("NOT SAME");
      }
    }
}


simonSays(computerSounds);
