let quiz = [
    {q:"What is the capital of pakistan", option:["Rawalpindi","Islamabad","Lahore"], a:"Islamabad"},
    {q:"Where is France", option:["Eroupe","Amrica","Aisa"], a:"Eroupe"},
    {q:"What is the capital of Usa", option:["Rawalpindi","Wasinton","London"], a:"Wasinton"}
]
let current = 0;
let score = 0;

function ShowQuestion() {
    if (current < quiz.length) {
        document.getElementById("question").innerHTML = quiz[current].q;
        document.getElementById("opt1").innerHTML = quiz[current].option[0];
        document.getElementById("opt2").innerHTML = quiz[current].option[1];
        document.getElementById("opt3").innerHTML = quiz[current].option[2];
    }
    else {
        document.getElementById("question").innerHTML = "Quiz Finished";
        // Fixed: Targeting the correct IDs to hide buttons
        document.getElementById("opt1").style.display = "none";
        document.getElementById("opt2").style.display = "none";
        document.getElementById("opt3").style.display = "none";
        document.getElementById("score").innerHTML = "Your score: " + score + "/" + quiz.length; 
    }
}

function checkAnswer(btn) {
    if (btn.innerHTML === quiz[current].a) {
        alert("Correct");
        score++;
    } else {
        // Added the correct answer to the alert for better UX
        alert("Wrong! Answer is: " + quiz[current].a);
    }
    current++;
    ShowQuestion(); // 'return' is not needed here
}

ShowQuestion();