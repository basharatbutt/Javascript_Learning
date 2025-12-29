let furites = [
    {name:"apples", quantity:300},
    {name:"Orange", quantity:200},
    {name:"mango", quantity:400},
    {name:"kiwi", quantity:100},
];
function myCallBack({quantity}) {
    return quantity > 200 ? "ok" : "low"
}
let result = Map.groupBy(furites, myCallBack);
let text = "These furites are ok: <br>";
for (const x of result.get("ok")) {
    text+= x.name + " " + x.quantity + "<br>";
}
text+= "<br>These furit are low: <br>";
for (const x of result.get("low")) {
    text+= x.name + " " + x.quantity + "<br>" 
}
document.getElementById("dora").innerHTML = text;