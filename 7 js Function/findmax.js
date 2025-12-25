function Findmax(){
    let max = -Infinity

for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
        max = arguments[i] 
    }
    
}
return max
}
document.getElementById("io").innerHTML = Findmax(8,9,65,954,90.7)