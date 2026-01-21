let btn = document.querySelector(".btn");
btn.addEventListener("click",function clicking(cc) {
    let t1 = parseInt(document.querySelector("#t1").value);
    console.log(t1)
    let t2 = parseInt(document.querySelector("#t2").value);
    let result = document.querySelector(".result")
    if (t1 ===0 || t1 < 0 ||isNaN(t1)) {
        result.innerHTML = `Please give a vaild number is ${t1}`
    }
    else if (t2 ===0 || t2 < 0 ||isNaN(t2)) {
        result.innerHTML = `Please give a vaild number is ${t2}`
    } else {
        let bmi = (t1 / ((t2 * t2) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }
})