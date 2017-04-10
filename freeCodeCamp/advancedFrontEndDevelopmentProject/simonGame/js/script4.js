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
  //setInterval(playSound(), 1000);
}
randomSound();
randomSound();
randomSound();
randomSound();

function playSound(arr) {
    for (var i = 0; i < arr.length; i++) {
      setTimeout(function(x) {
        return function() {
          document.getElementById(arr[x]).play();
          console.log(arr[x]);
        };
      }(i), 2000*i);
    }
} // end of playSound();


playSound(computerSounds);


  /*if (arr instanceof Array) {
    arr.shift();
    console.log("AUDIO.SRC :", audio.src);
    console.log("ARR :", arr);*/
    //audio.play();

    /*if (arr.length) {
      console.log("ARRAY LENGTH: ", arr.length);
      audio.addEventListener('ended', function() {
        playSound(arr);
      });
    }
  }*/


/*
function computerPlay() {
  randomSound();
  randomSound();
  randomSound();

    computerSounds.forEach(function(e) {
      //setInterval(function() {
        document.getElementById(e).play();
    }, 2000);
  });
}
*/
//computerPlay();

//playIt();
