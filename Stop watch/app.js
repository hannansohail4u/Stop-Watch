// console.log("Hello World")

var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")
var interval;

var min = 0
var sec = 0
var msec = 0



function start(){
    msec++
    msecHeading.innerHTML = msec
    if(msec == 100){
        sec++
        secHeading.innerHTML = sec
        msec = 0

    }else if(sec > 59){
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}

function startwatch(){
    interval = setInterval(start , 10)
}

function resetwatch(){
    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    msecHeading.innerHTML = "00"
    min = 0
    sec = 0
    msec = 0
}

function stopwatch(){
    clearInterval(interval)
}