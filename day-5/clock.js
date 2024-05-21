const clock = document.getElementById('clock');

setInterval(function () {

    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);
// ................................................................


// // Get the current time
// const now = new Date()

// // Get the hours, minutes and seconds
// const hours = now.getHours()
// const minutes = now.getMinutes()
// const seconds = now.getSeconds()

// // Format the time as a 12-hour clock
// let clockTime = hours % 12 || 12

// // Add leading zero if necessary
// clockTime = clockTime < 10 ? `0${clockTime}` : clockTime

// // Format the time as a 24-hour clock
// let clockTime24 = hours < 10 ? `0${hours}` : hours

// // Add a colon between the hours and minutes
// clockTime = `${clockTime}:${minutes}`
// clockTime24 = `${clockTime24}:${seconds}`

// // Update the banner with the current time
// document.getElementById(
//     'clock'
// ).innerHTML = `Your local time is ${clockTime} or ${clockTime24}`
