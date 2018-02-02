update(); //inital update when page loads
setInterval(update, 1000);

function update() {
	let hour = document.querySelector('.clock__hour');
	let minute = document.querySelector('.clock__minute');
	let second = document.querySelector('.clock__second');
	let clock = document.querySelector('.clock');
	let overlay = document.querySelector('.img__overlay');
	let d = new Date();
	// let color = "rgba(" + d.getHours() + "," + d.getMinutes() + "," d.getSeconds() + ",0.5)";
	let color = 'rgba(' + d.getHours() + ',' + d.getMinutes() + ',' + d.getSeconds() + ',' + '0.7)';
	
	if(d.getHours() > 12) {
		hour.innerHTML = d.getHours() - 12;
	}else {
		hour.innerHTML = d.getHours();
	}

	if(d.getMinutes() <= 9) {
		minute.innerHTML = "0" + d.getMinutes();
	}else {
		minute.innerHTML = d.getMinutes();
	}

	if(d.getSeconds() <= 9) {
		second.innerHTML = "0" + d.getSeconds();
	}else {
		second.innerHTML = d.getSeconds();
	}

	overlay.style.backgroundColor = color;

}

// Option 1:

// The hex clock is a hex code that reflects the time of day in #hhmmss format instead of hh:mm:ss format.
//  The background color of the screen is then changed based on the hex code which is created by the current time.

// Option 1:

// JS clock is fully functional and throws zero errors
// The time is in digital format to resemble a hex code
// The time is displayed centered in the middle of the screen
// The screen background color changes based on the current time


