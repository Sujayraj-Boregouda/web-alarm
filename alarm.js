console.log("Welcome to Sujay Alarm Exercise");

// Alarm Submit Button
let setAlarm = document.getElementById("setAlarm");
setAlarm.addEventListener("click", setAlarmFunction);


// Audio Variable
var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');

// Function to Play Alarm Sound
function ringAlarm(){
    audio.play();
}


//Alarm Submit Function
function setAlarmFunction(e) {
    e.preventDefault();
    console.log("setting alarm");

    // Grab Alarm Inputs
    let alarm = document.getElementById("alarm");
    let alarmDate = new Date(alarm.value);

    console.log(`setting alarm for ${alarmDate}...`);

    // LiveDate
    let currentDate = new Date();

    // Time to Tring Tran tran
    let timeToAlarm = alarmDate - currentDate;

    console.log(timeToAlarm);

    if(timeToAlarm > 0){
        setTimeout(() => {
            console.log("Ringing Alarm");
            ringAlarm();
        }, timeToAlarm);
    }
}





