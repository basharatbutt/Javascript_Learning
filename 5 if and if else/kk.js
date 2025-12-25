document.getElementById("btn").addEventListener("click", function () {
let age = document.getElementById("age").value
let drive;
if (age >= 18) {
    drive = "you can drive "
}
else if (age >= 16) {
    drive = "you can drive but carefully"
}
 else {
    drive = "you can not drive"
}
document.getElementById("dee").innerHTML = drive
});