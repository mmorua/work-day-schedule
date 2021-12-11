// get <p> element by id 
var timeStamp = document.getElementById("currentDay")
// get current date/time with moment.js
var time = moment().format('LLLL')

// display current date/time onto webpage
timeStamp.textContent = time;



