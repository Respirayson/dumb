const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 300);
};

//  for stopping the confetti 

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000);
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

var sizeWidth = 80;
var sizeHeight = 30;
var fontSize = 1.5;
var left = 30;

function button() {
    let yes = document.querySelector('#yes');
    let no = document.querySelector('#no');
    let clicked = document.querySelector(".clicked");

    no.addEventListener("click", function() {
        no.style.top = getRandomInt(100) + "%";
        no.style.left = getRandomInt(100) + "%";
        
        sizeWidth += 26
        sizeHeight += 10
        fontSize += 0.2
        left -= 2

        yes.style.width = sizeWidth + "px";
        yes.style.height = sizeHeight + "px";
        yes.style.fontSize = fontSize + "em";
        yes.style.left = left + "%";
    });

    yes.addEventListener("click", function() {
        clicked.style.visibility = "visible";

        document.querySelector(".end").style.visibility = "hidden"

        start()
        stop()
    })
}

document.addEventListener("DOMContentLoaded", button);
