let getHours   = document.querySelector(".hours");
let getMinutes = document.querySelector(".minutes");
let getSeconds = document.querySelector(".seconds");
let getMiliSeconds = document.querySelector(".miliseconds");

let start   = document.querySelector(".start");
let pause   = document.querySelector(".pause");
let reset   = document.querySelector(".reset");
let resume  = document.querySelector(".resume");
let isRunning = false;


//  Reduce Code:
function Formation (time, getTime) {
    if(time < 10) {
        getTime.textContent = '0' + time
    } else {
        getTime.textContent = time;
    }
}


//  Stopwatch Function:
function stopWatch (hour, minute, second, milisecond) {
    let interval = setInterval(() => {
        milisecond += 10;
        milisecond < 100 ? getMiliSeconds.textContent = '0' + milisecond.toString().slice(-2) : 
        getMiliSeconds.textContent = milisecond.toString().slice(-3);

        if (milisecond === 1000) {
            milisecond  = 000;
            second += 1;
            Formation(second, getSeconds)
            
            if (second === 60) {
                second = 00;
                minute += 1;
                Formation(minute, getMinutes)
                
                if (minute === 60) {
                    minute = 00;
                    hour++;
                    Formation(hour, getHours)
                }
            }
        }
    },10)


    //  Pause Implementation:
    pause.addEventListener('click', () => {
        clearInterval(interval);
    })


    //  Reset Implementaion:
    reset.addEventListener('click', () => {
        clearInterval(interval);
        getHours.textContent = "00";
        getMinutes.textContent = "00";
        getSeconds.textContent = "00";
        getMiliSeconds.textContent = "000";
        isRunning = false;
        isRunningFunc(isRunning, ".start")
    })
}


//  Resume  Implementaion
resume.addEventListener('click', () => {
    const getHoursValue = parseInt(getHours.textContent);
    const getMinutesValue = parseInt(getMinutes.textContent);
    const getSecondsValue = parseInt(getSeconds.textContent);
    const getMiliSecondsValue = parseInt(getMiliSeconds.textContent);

    stopWatch(getHoursValue, getMinutesValue, getSecondsValue, getMiliSecondsValue)
})


//  Start Implementaion:
start.addEventListener('click', () => {
    let milisecond  = 000;
    let second = 00;
    let minute = 00;
    let hour   = 00;
    isRunning = true;
    isRunningFunc(isRunning, ".start")
    stopWatch(hour, minute, second, milisecond)
});


//  Button Is Already Clicked or Not? :
function isRunningFunc (BooLeanValue, button) {
    if (BooLeanValue) {
        document.querySelector(button).disabled = true;
        document.querySelector(button).style.cursor = "pointer";
    } else {
        document.querySelector(button).disabled = false;
    }
}