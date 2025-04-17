const quizData = [
    {
        question: "Яка тварина є символом Карпат?",
        answers: ["Лисиця", "Рись", "Бурий ведмідь", "Сірий вовк"],
        correct: 2
    },
    {
        question: "Який птах занесений до Червоної книги України?",
        answers: ["Синиця", "Соловейко", "Журавель степовий", "Горобець"],
        correct: 2
    },
    {
        question: "Де живе дельфін-афаліна в Україні?",
        answers: ["Озеро Світязь", "Дніпро", "Азовське і Чорне моря", "Карпати"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => {
            if (index === q.correct) {
                score++;
            }
            nextBtn.style.display = "inline-block";
        };
        answersEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
    resultEl.textContent = "";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Вікторина завершена!";
        answersEl.innerHTML = "";
        resultEl.textContent = `Ваш результат: ${score} з ${quizData.length}`;
        nextBtn.style.display = "none";
    }
});

loadQuestion();
