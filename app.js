const quiz = [
    {
        question: "What is renewable energy?",
        options: ["Coal", "Solar", "Oil", "Gas"],
        answer: "Solar"
    },
    {
        question: "Which energy source is non-renewable?",
        options: ["Wind", "Hydro", "Coal", "Solar"],
        answer: "Coal"
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    const q = quiz[current];
    document.getElementById("question").textContent = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quiz[current].answer) {
        score++;
    }
}

function nextQuestion() {
    current++;
    if (current < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("result").textContent =
            "Quiz Finished! Your Score: " + score + "/" + quiz.length;
    }
}

loadQuestion();
