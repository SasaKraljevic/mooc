let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const endTime2 = document.querySelector('.display__end-time2');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
	// clear any existing timers
	clearInterval(countdown);

	const now = Date.now();
	const then = now + seconds * 1000;
	console.log("now :", now);
	console.log("then :", then);
    displayTimeLeft(seconds);
    displayEndTime(then);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		console.log("secondsLeft :", secondsLeft);
		// don't need negative numbers
		if(secondsLeft < 0) {
		   	clearInterval(countdown);
			return;
		}

		// display it
		displayTimeLeft(secondsLeft);
		//console.log({now, then});
		//console.log(secondsLeft);
	}, 1000);	
}

function displayTimeLeft(seconds) {
	//console.log("SECONDS :", seconds);
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`; 
	timerDisplay.textContent = display; // display in html file
	//console.log("MINUTES :", minutes);
	document.title = "Countdown Timer :" + display;
	//document.title = display;
	console.log("minutes :", {minutes});
	console.log("remainderSeconds :", {remainderSeconds});

}

function displayEndTime(timestamps) {
	const end = new Date(timestamps);
	console.log("end :", end);
	const hour = end.getHours();
	console.log("hour :", hour);
	const minutes = end.getMinutes();
	console.log("minutes :", minutes);
	endTime.textContent = `Be back at: ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    // usa time
    endTime2.textContent = `Be back at: ${hour > 12 ? hour-12 : hour}:${minutes < 10 ? '0' : ''}${minutes} PM`;
}

function startTimer() {
	console.log("startTimer :", this.textContent);
	console.log("startTimer :", this.dataset.time);
	const seconds = parseInt(this.dataset.time);
	console.log("seconds :", seconds);
    
    // on click button, call function timer with parameter seconds
	timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log("customForm :", mins);
    timer(mins * 60);
    this.reset();
})

//timer(7000);