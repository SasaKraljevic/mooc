let countdown;
let progress;
const timerDisplay = document.querySelector('.display__time-left');
const buttons = document.querySelectorAll('[data-time]');
let sessionTime;
let breakTime;


function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);
  clearInterval(progress);
 
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  //console.log("displayTimeLeft", displayTimeLeft(seconds));

  countdown = setInterval(() => {
    secondsLeft = Math.round((then - Date.now()) / 1000);
    
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);   
  }, 1000);

  // progress bar for session
  var fullBarWidth = document.getElementById('progress').offsetWidth;
  //console.log("fullBarWidth :", fullBarWidth);
  var pxToFill = fullBarWidth / seconds;
  console.log("pxToFill :", pxToFill);
  var progression = pxToFill;
  progress = setInterval(function() {
    $('#progressBar').css({'width': progression + 'px'});
    if(progression > fullBarWidth) {
      clearInterval(progress);
    } else {
      progression += pxToFill;
      console.log("progression", progression);
    }
  }, 1000);
    ////////.progress bar for session/////////////
    
  if(secondsLeft === 0) {
    breakSession();
  }


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

//trouble making
function stop() {
  clearInterval(countdown);
  clearInterval(progress);
}

function reset() {
  //document.getElementsByClassName('display__time-left').innerHTML = '25:00';
  timerDisplay.textContent = '25:00';
  clearInterval(countdown);
  clearInterval(progress);
  //$('#progressBar').css({'width': '0px'});
  document.getElementById('progressBar').style.width = '0px';
  document.getElementById('session').value = 25;
  document.getElementById('break').value = 5;
}

function start() {
  sessionTime = document.getElementById('session').value;
  sessionTime *= 60;
  //document.getElementById('session').dataset.time = sessionTime;
  timer(sessionTime);
  //console.log("sessionTime :", sessionTime);
}

function breakSession() {
  breakTime = document.getElementById('break').value;
  breakTime *= 60;
  timer(breakTime);

}

