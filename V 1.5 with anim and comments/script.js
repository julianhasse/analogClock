// Declare constants for the 3 hands
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// create an object with the current Date/Time
var date = new Date();

	// Pull the hrs/mins/secs from the date object using proper methods
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	// Math to divide circle in right amount of segments
	// 360 degrees / 12 hours + one 60th of a minute (to avoid skipping)
	let hrPosition = (hr*360/12)+(min*(360/60)/12);
	//360 degrees / 60 minutes + one 60th of a second (to avoid skipping)
	let minPosition = (min*360/60)+(sec*(360/60)/60); 
	//360 degress / 60 seconds
	let secPosition = sec*360/60; 


function runTheClock() {
	
	// Added code to solve the "zero reset" problem --------
	hrPosition = hrPosition+(3/360)
	minPosition = minPosition+(6/60) // minPosition+(1/60)/6 
	secPosition = secPosition+6;
	// ------------------------------ 


	// Where the HANDS are located in degrees
	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

	// Run the function(runTheClock) every 1 second
var interval = setInterval(runTheClock, 1000);