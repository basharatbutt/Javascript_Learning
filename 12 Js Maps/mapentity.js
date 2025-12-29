let furites = new Map([
    ["apples", 409],
    ["oranges", 324],
    ["mangoes", 429],
]);
let text = "";
for (const r of furites.entries()) {
    text+= r + "<br>"
}
document.getElementById("dora").innerHTML = text