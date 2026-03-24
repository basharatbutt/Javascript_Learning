let randomnumber = (parseInt(Math.random() * 100 + 1));
let arrguess = [];
let attempt = 10

let btn = document.querySelector(".sub");
let pervious = document.querySelector(".pervious");
let reamining = document.querySelector(".remaining");
let result = document.querySelector(".result");
let inp = document.querySelector("#inp");

//condiotional statements, loops, functions


btn.addEventListener("click", function() {
    onetohundred()
    displayprevious(inp.value)
})

function onetohundred() {
    let inp = parseInt(document.querySelector("#inp").value);
    if (isNaN(inp)) {
        alert("Please enter a valid number")
    }
    else if (1 > inp) {
       alert("Please enter a bigger number than 0")
    }
    else if (100 < inp){
       alert("Please enter a smaller number than 100")
    }
    else{
        check(inp)
    }
}
function check(correct) {
    if (correct === randomnumber) {
    result.innerHTML = `<h3>Yes you guess it right</h3>`
    endGame();
    } else if(correct < randomnumber){
    result.innerHTML = `<h3>Your number is to low</h3>`
     displayremaining ();
    } else if(correct > randomnumber){
    result.innerHTML = `<h3>Youy number is to high</h3>`
     displayremaining ();
    }
}


function displayremaining () {
    attempt = attempt - 1
    reamining.innerText = `Remaining Gusses : ${attempt}`
    if (attempt === 0) {
        result.innerHTML = `<h3>You lose the Game Number is ${randomnumber}</h3>`
        endGame()
    }
    
     
}

function displayprevious(store) {
   arrguess.push(store);
   pervious.innerHTML = `Previous Guesses:${arrguess}`
}

function endGame(){
    document.querySelector("#inp").disabled = true;
    document.querySelector(".sub").disabled = true;
}

