// Get the current date
var today = new Date();

// Create a Date object for Christmas of the current year
var cmas = new Date(today.getFullYear(), 11, 25);

// Check if the current date is after December 25th
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}

// Calculate the difference in days between today and Christmas
var one_day = 1000 * 60 * 60 * 24;
var daysLeft = Math.ceil((cmas.getTime() - today.getTime()) / one_day);

// Display on the web page
document.getElementById("countdown").textContent =
    daysLeft + " dagar kvar till julafton!";