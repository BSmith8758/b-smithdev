var seconds = 0;
var minutes =  0;
var hours = 0;
var days = 0;
var increase = 1;
var stopper = false;
var running = false;

/* function loadClock() {
    document.getElementById("clockDisplay").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " seconds";
} */

    // Stops clock by changing stopper to 1

function stopClock() {
    /* stopper = true; */
    console.log(stopper);
    clearInterval(myInterval);
    running = false;
    }

    // Begin counter

function timerTest() {
    if (running == true) {

    }   else {
        myInterval = setInterval(newTimer, 1000);
        running = true;
    }
}

    // Initate clock

function newTimer() {

    // Set stopper to allow counting

    if (stopper == false) {

    if (seconds == 59 && minutes != 59 && hours != 23) {
        minutes++;
        seconds = 0;
        console.log(hours + " Hours " + minutes + " Minutes " + seconds + " seconds");
        document.getElementById("clockDisplay").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " seconds";
    } else if (minutes == 59 && seconds == 59 && hours != 23) {
        hours++;
        seconds = 0;
        minutes = 0;
        console.log(hours + " Hours " + minutes + " Minutes " + seconds + " seconds");
        document.getElementById("clockDisplay").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " seconds";
    } else if (hours == 23 && minutes == 59 == seconds == 59) {
        days++;
        seconds = 0;
        minutes = 0;
        hours = 0;
    } else {
        seconds++;
        console.log(hours + " Hours " + minutes + " Minutes " + seconds + " seconds");
        document.getElementById("clockDisplay").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " seconds";
    }
    
    } else {
        clearInterval(myInterval);
        return;

    }
}

function resetClock() {
    if (running == true) {    
        seconds = 0;
        minutes = 0;
        hours = 0;
        days = 0;
        document.getElementById("clockDisplay").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " seconds";
        
    } else {
        seconds = 0;
        minutes = 0;
        hours = 0;
        days = 0;
        document.getElementById("clockDisplay").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " seconds";
    }  
}

/*
document.getElementById("clockDisplay").innerHTML = hours + " Hours " + minutes + " Minutes " + seconds + " seconds"
*/