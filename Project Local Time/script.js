let time = document.querySelector(".time")
setInterval( function() {
    let now = new Date;
   time.innerHTML =  now.toLocaleTimeString();
},1000 )