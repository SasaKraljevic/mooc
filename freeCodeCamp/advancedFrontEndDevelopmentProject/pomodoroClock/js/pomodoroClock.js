let countdown;
let countdownBreak;
let progress;
const timerDisplay = document.querySelector('.display__time-left');
const buttons = document.querySelectorAll('[data-time]');
let sessionTime;
let breakTime;

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);
  clearInterval(countdownBreak);
  clearInterval(progress);
 
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  //console.log("displayTimeLeft", displayTimeLeft(seconds));
  countdown = setInterval(() => {
    secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft === 0) {
      clearInterval(countdown);
      clearInterval(progress);
      breakTimer();
    }
    // display timer
    displayTimeLeft(secondsLeft);
  }, 1000);

  // progress bar for session timer
  var fullBarWidth = document.getElementById('progress').offsetWidth;
  //console.log("fullBarWidth :", fullBarWidth);
  var pxToFill = fullBarWidth / seconds;
  console.log("pxToFill :", pxToFill);
  var progression = pxToFill * 2;
  progress = setInterval(function() {
    $('#progressBar').css({'width': progression + 'px'});
    if(progression > fullBarWidth) {
      clearInterval(progress);
    } else {
      progression += pxToFill;
      console.log("progression", progression);
    }
  }, 1000);
  ////////.progress bar for session timer ///////////
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  timerDisplay.textContent = display;
  //console.log("seconds", seconds);
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

// predefined values: 15, 30, 45, 60
buttons.forEach(button => button.addEventListener('click', startTimer, false));

function decrementBreak() {
	var value = parseInt(document.getElementById('break').value);
	value = isNaN(value) ? 0 : value;
	value--;
	document.getElementById('break').value = value;
}

function incrementBreak() {
	var value = parseInt(document.getElementById('break').value);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('break').value = value;
}

function decrementSession() {
  var value = parseInt(document.getElementById('session').value);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById('session').value = value;
}

function incrementSession() {
  var value = parseInt(document.getElementById('session').value);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('session').value = value;
}

function stop() {
  clearInterval(countdown);
  clearInterval(progress);
  clearInterval(countdownBreak);
}

function reset() {
  timerDisplay.textContent = '25:00';
  clearInterval(countdown);
  clearInterval(progress);
  clearInterval(countdownBreak);

  document.getElementById('progressBar').style.width = '0px';
  document.getElementById('session').value = 25;
  document.getElementById('break').value = 5;
}

function start() {
  clearInterval(countdown);
  clearInterval(countdownBreak);
  clearInterval(progress);
  
  sessionTime = document.getElementById('session').value;
  sessionTime *= 60;
  timer(sessionTime);
}




// break timer and progress bar for break timer
function breakTimer() {
  clearInterval(countdown);
  clearInterval(progress);

  breakTime = document.getElementById('break').value;
  breakTime *= 60;
 
  const now = Date.now();
  const then = now + breakTime * 1000;
  displayTimeLeft(breakTime);
  //console.log("displayTimeLeft", displayTimeLeft(seconds));
  countdownBreak = setInterval(() => {
    secondsLeft = Math.round((then - Date.now()) / 1000);
    
    if(secondsLeft === 0) {
      clearInterval(countdownBreak);
      clearInterval(progress);
      timer(sessionTime);
    }
    // display timer
    displayTimeLeft(secondsLeft);
  }, 1000);

  // progress bar for break timer
  var fullBarWidth = document.getElementById('progress').offsetWidth;
  //console.log("fullBarWidth :", fullBarWidth);
  var pxToFill = fullBarWidth / breakTime;
  console.log("pxToFill :", pxToFill);
  var progression = fullBarWidth - pxToFill;
  progress = setInterval(function() {
    $('#progressBar').css({'width': progression + 'px'});
    if(progression < 0) {
      clearInterval(progress);
    } else {
      progression -= pxToFill;
      console.log("progression", progression);
    }
  }, 1000); 
}
