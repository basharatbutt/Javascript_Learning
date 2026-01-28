const randomcolor = function() {
    let hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let start = document.querySelector("#srt")
let stop = document.querySelector("#stp")
let intervalId = null;

start.addEventListener("click", function () {
     if (!intervalId) {
        intervalId = setInterval(function () {
            let changecolor = randomcolor(); 
            document.body.style.backgroundColor = changecolor;
        }, 1000);
    }
});

stop.addEventListener('click',function stopp() {
     clearInterval(intervalId);
     intervalId = null;
})


