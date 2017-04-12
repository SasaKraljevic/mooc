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
  document.getElementById('rnd').innerHTML = "";
  computerSounds = [];
  userSounds = [];
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

var round = 0;

function startButton() {
  var x = document.getElementById('start');
  if(x.classList.contains("active")) {
    x.classList.remove("active");
    x.innerHTML = 'Start';
  } else {
    x.classList.add("active");
    x.innerHTML = 'Stop';

    randomSound();
    simonSays(computerSounds);
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
  console.log("######## randomSound();");
  var sound = colors[Math.floor(Math.random()*colors.length)];
  computerSounds.push(sound);
  console.log("COMPUTER SOUNDS from random();", computerSounds);
  //setInterval(simonSays(), 1000);
}


function simonSays(arr) {
  console.log("######## simonSays(arr);");
  //round += 1;
  userSounds = [];
  document.getElementById('rnd').innerHTML = arr.length;
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function(x) {
      return function() {
        var targetColor = document.getElementById(arr[x]).id;
        console.log("SIMON COLOR from simonSays();", targetColor);
        document.getElementById(targetColor).play();
      };
    }(i), 2000*i);
  }
} // end of simonSays();

function userSays(e) {
  console.log("######## userSays(e);");
  //console.log(e.innerHTML);
  //var targetColor = e.getElementsByTagName('div')[0].className;
    var audioId = e.getElementsByTagName('audio')[0].id;
    console.log("AUDIOiD from userSays();", audioId);
    document.getElementById(audioId).play();
    // add that id to userSounds array
    userSounds.push(audioId);
    console.log("USERSOUNDS from userSays();", userSounds);

    //simonSays(computerSounds);
    if (computerSounds.length == userSounds.length) {
      console.log("same length");
      setTimeout(function() {
        compareArrays(computerSounds, userSounds);
      }, 2000);

    }


//console.log("1",computerSounds);
//console.log("2", userSounds);

} // end of userSays();
function compareArrays(arr1, arr2) {
  if (JSON.stringify(arr1) == JSON. stringify(arr2)) {
    console.log("SAME");
    setTimeout(function(x) {
      randomSound();
      simonSays(computerSounds);
    }, 2000);
  }

}
/*
// compare computerSounds and userSounds arrays
function compareArrays(arr1, arr2) {
console.log("######## compareArrays(arr1, arr2);");
    for (var i = 0; i < arr1.length; i++) {
      console.log(i);
        console.log("ARR1[i] from compareArrays();", arr1[i]);
        console.log("ARR2[i] from compareArrays();", arr2[i]);

      if (arr1[i] == arr2[i]) {
        console.log("SAME");
        setTimeout(function(x) {
          randomSound();
          simonSays(computerSounds);
        }(i), 2000*i);
      }

    }
} // end of compareArrays();
*/

//simonSays(computerSounds);
