const users = [
    { username: "sid", password: "765432" },
    { username: "arnav", password: "765432" },
];

const examForm = document.getElementById('exam-form');
const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');
const examContainer = document.getElementById('exam-container');
const resultContainer = document.getElementById('result-container');
const retryContainer = document.getElementById('retry-container');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const lockdownCounterDisplay = document.getElementById('lockdown-counter');
let score = 0;
let incorrectQuestions = [];
let timeRemaining = 90 * 60; // 30 minutes in seconds
let lockdownCounter = 0;
let timerInterval;

// // Sample algebraic questions for the practice exam
// const questions = [
//     {
//         question: "Simplify: 2x + 3x",
//         answers: ["5x", "6x", "2x", "3x"],
//         correctAnswer: "5x"
//     },
//     {
//         question: "Simplify: 7 - 2y + 4y",
//         answers: ["7 + 2y", "5y", "3y", "2y + 7"],
//         correctAnswer: "7 + 2y"
//     }
// ];



const questions  = [
    // Transformation Questions
   
    {
        question: "Perform a 90-degree clockwise rotation of point A(3, 4) on the coordinate plane. What are the new coordinates?",
        answers: ["(-4, 3)", "(-3, 4)", "(4, -3)", "(4, 3)"],
        correctAnswer: "(-4, 3)",
        difficulty: "intermediate"
    },
    {
        question: "Reflect point B(5, -2) across the y-axis. What are the new coordinates?",
        answers: ["(5, 2)", "(-5, -2)", "(-5, 2)", "(2, -5)"],
        correctAnswer: "(-5, -2)",
        difficulty: "very hard"
    },
    {
        question: "Dilate point C(2, 3) with a scale factor of 2. What are the new coordinates?",
        answers: ["(4, 6)", "(1, 1.5)", "(2, 3)", "(3, 4.5)"],
        correctAnswer: "(4, 6)",
        difficulty: "intermediate"
    },
    {
        question: "Identify the type of transformation applied to point K(2, -3) resulting in K'(-2, -3).",
        answers: ["Translation", "Rotation", "Reflection", "Dilation"],
        correctAnswer: "Reflection",
        difficulty: "easy"
    },
    {
        question: "Perform a 270-degree counterclockwise rotation of point L(4, -1) on the coordinate plane. What are the new coordinates?",
        answers: ["(1, 4)", "(1, -4)", "(-4, -1)", "(-1, 4)"],
        correctAnswer: "(-1, 4)",
        difficulty: "intermediate"
    },
    {
        question: "Reflect point M(-3, 7) across the x-axis. What are the new coordinates?",
        answers: ["(-3, -7)", "(3, -7)", "(-3, 7)", "(7, -3)"],
        correctAnswer: "(-3, -7)",
        difficulty: "very hard"
    },
    {
        question: "Dilate point N(5, 2) with a scale factor of 0.5. What are the new coordinates?",
        answers: ["(2.5, 1)", "(10, 4)", "(5, 1)", "(2.5, 2)"],
        correctAnswer: "(2.5, 1)",
        difficulty: "intermediate"
    },
    {
        question: "Perform a 270-degree rotation about the origin for point R(2, -5). What are the new coordinates?",
        answers: ["(-5, -2)", "(5, 2)", "(2, 5)", "(-2, 5)"],
        correctAnswer: "(-5, 2)",
        difficulty: "intermediate"
    },
    // Coordinate-based Questions
    {
        question: "Point D is translated 5 units left and 3 units down. If its original coordinates are (7, 9), what are its new coordinates?",
        answers: ["(2, 6)", "(12, 6)", "(2, 12)", "(4, 6)"],
        correctAnswer: "(2, 6)",
        difficulty: "easy"
    },
    {
        question: "Find the coordinates of point E after a reflection across the x-axis if its original coordinates are (4, -7).",
        answers: ["(-4, 7)", "(4, 7)", "(-4, -7)", "(7, -4)"],
        correctAnswer: "(4, 7)",
        difficulty: "intermediate"
    },
    {
        question: "Perform a dilation on point F(3, -2) with a scale factor of 0.5. What are the new coordinates?",
        answers: ["(1.5, -1)", "(6, -4)", "(3, -1)", "(1.5, -2)"],
        correctAnswer: "(1.5, -1)",
        difficulty: "very hard"
    },
    {
        question: "Point G undergoes a 180-degree rotation about the origin. If its original coordinates are (-4, 6), what are its new coordinates?",
        answers: ["(6, -4)", "(-6, 4)", "(4, -6)", "(-4, -6)"],
        correctAnswer: "(4, -6)",
        difficulty: "intermediate"
    },
    {
        question: "Point O is translated 6 units left and 2 units up. If its original coordinates are (9, -3), what are its new coordinates?",
        answers: ["(3, -1)", "(15, -1)", "(3, -5)", "(9, -5)"],
        correctAnswer: "(3, -1)",
        difficulty: "easy"
    },
    {
        question: "Find the coordinates of point P after a reflection across the y-axis if its original coordinates are (-6, 2).",
        answers: ["(6, -2)", "(-2, -6)", "(-6, -2)", "(2, 6)"],
        correctAnswer: "(6, -2)",
        difficulty: "intermediate"
    },
    {
        question: "Perform a dilation on point Q(-4, 1) with a scale factor of 1.5. What are the new coordinates?",
        answers: ["(-6, 1.5)", "(6, -1.5)", "(4, 1.5)", "(-6, -1.5)"],
        correctAnswer: "(-6, 1.5)",
        difficulty: "very hard"
    },
    {
        question: "Point R undergoes a 270-degree rotation about the origin. If its original coordinates are (2, -5), what are its new coordinates?",
        answers: ["(5, 2)", "(-5, 2)", "(2, 5)", "(-2, 5)"],
        correctAnswer: "(-5, 2)",
        difficulty: "intermediate"
    },
    // Algebraic Questions
    {
        question: "Simplify: 3x + 2x",
        answers: ["5x", "6x", "2x", "3x"],
        correctAnswer: "5x",
        difficulty: "easy"
    },
    {
        question: "Solve for x: 4x - 9 = 3x + 2",
        answers: ["11", "-11", "7", "-7"],
        correctAnswer: "11",
        difficulty: "intermediate"
    },
    {
        question: "If 2x + 5y = 10 and x - 3y = 4, find the value of x.",
        answers: ["6", "2", "-2", "-6"],
        correctAnswer: "6",
        difficulty: "very hard"
    },
    {
        question: "Simplify: 2(x + 3) - 4",
        answers: ["2x + 2", "2x + 10", "2x - 2", "2x + 6"],
        correctAnswer: "2x + 2",
        difficulty: "intermediate"
    },
    {
        question: "Solve for x: 2x + 5 = 15",
        answers: ["5", "10", "7", "-5"],
        correctAnswer: "5",
        difficulty: "easy"
    },
    {
        question: "If 3x + 2y = 14 and x + y = 6, find the value of y.",
        answers: ["2", "3", "4", "5"],
        correctAnswer: "4",
        difficulty: "intermediate"
    },
    {
        question: "Simplify: 4(x - 2) + 3(x + 1)",
        answers: ["7x - 5", "7x - 1", "x + 5", "x - 5"],
        correctAnswer: "7x - 5",
        difficulty: "very hard"
    },
    {
        question: "Find the value of y if 2y - 7 = 5y + 3.",
        answers: ["-2", "-4", "2", "4"],
        correctAnswer: "-2",
        difficulty: "intermediate"
    },
    // Additional Questions
    {
        question: "Point S is reflected across the y-axis. If its original coordinates are (-5, 8), what are its new coordinates?",
        answers: ["(5, -8)", "(-8, 5)", "(8, -5)", "(-5, -8)"],
        correctAnswer: "(5, -8)",
        difficulty: "easy"
    },
    {
        question: "Point T is translated 3 units right and 4 units up. If its original coordinates are (-3, -6), what are its new coordinates?",
        answers: ["(0, -2)", "(6, -2)", "(-6, 0)", "(0, -10)"],
        correctAnswer: "(0, -2)",
        difficulty: "intermediate"
    },
    {
        question: "Perform a dilation on point U(1, 2) with a scale factor of 4. What are the new coordinates?",
        answers: ["(4, 8)", "(-4, -8)", "(1, 8)", "(4, 1)"],
        correctAnswer: "(4, 8)",
        difficulty: "very hard"
    },
    {
        question: "Point V undergoes a 180-degree rotation about the origin. If its original coordinates are (-7, 3), what are its new coordinates?",
        answers: ["(7, -3)", "(-3, 7)", "(3, -7)", "(-7, -3)"],
        correctAnswer: "(7, -3)",
        difficulty: "intermediate"
    },
    {
        question: "Point W is translated 2 units left and 5 units down. If its original coordinates are (4, 9), what are its new coordinates?",
        answers: ["(2, 14)", "(6, 4)", "(2, 4)", "(9, 2)"],
        correctAnswer: "(2, 4)",
        difficulty: "easy"
    },
    {
        question: "Find the coordinates of point X after a reflection across the x-axis if its original coordinates are (3, -5).",
        answers: ["(3, 5)", "(5, 3)", "(3, -5)", "(-3, -5)"],
        correctAnswer: "(3, 5)",
        difficulty: "intermediate"
    },
    {
        question: "Simplify: 5x - 2x + 7",
        answers: ["3x + 7", "7x", "3x - 7", "7"],
        correctAnswer: "3x + 7",
        difficulty: "very hard"
    },
    {
        question: "If 3x - y = 12 and 2x + y = 8, find the value of x.",
        answers: ["4", "2", "-2", "-4"],
        correctAnswer: "4",
        difficulty: "intermediate"
    },
];


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        loginContainer.classList.add('hidden');
        examContainer.classList.remove('hidden');
        generateQuestions(questions);
        startTimer();
        requestFullScreen();
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

examForm.addEventListener('submit', function(event) {
    event.preventDefault();
    clearInterval(timerInterval);
    calculateScore();
    showResults();
});

document.getElementById('restart-btn').addEventListener('click', function() {
    resultContainer.classList.add('hidden');
    examContainer.classList.remove('hidden');
    score = 0;
    timeRemaining = 30 * 60;
    startTimer();
    generateQuestions(questions);
});

document.getElementById('retry-btn').addEventListener('click', function() {
    retryContainer.classList.add('hidden');
    examContainer.classList.remove('hidden');
    generateQuestions(incorrectQuestions);
});

window.addEventListener('blur', function() {
    lockdownCounter++;
    lockdownCounterDisplay.textContent = `Window exits: ${lockdownCounter}`;
    requestFullScreen();
});

document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
        lockdownCounter++;
        lockdownCounterDisplay.textContent = `Window exits: ${lockdownCounter}`;
        requestFullScreen();
    }
});

function requestFullScreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}

function startTimer() {
    timerInterval = setInterval(function() {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            examForm.submit(); // Automatically submit the exam when time runs out
        } else {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timerDisplay.textContent = `Time remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;

            // Change timer color to red when less than 1 minute remaining
            if (timeRemaining < 60) {
                timerDisplay.style.color = 'red';
            } else {
                timerDisplay.style.color = ''; // Reset to default
            }
        }
    }, 1000);
}

function generateQuestions(questionsToGenerate) {
    examForm.innerHTML = '';
    questionsToGenerate.forEach((question, index) => {
        const questionElement = createQuestionElement(question, index);
        examForm.appendChild(questionElement);
    });
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit Exam';
    examForm.appendChild(submitButton);
    renderMathJax();
}

function createQuestionElement(question, index) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.dataset.questionIndex = index;

    let questionText;
    if (question.question.includes('\\(')) {
        questionText = question.question.replace(/\\\(/g, '\\(').replace(/\\\)/g, '\\)');
    } else {
        questionText = `<p>Question ${index + 1}: ${question.question}</p>`;
    }

    questionElement.innerHTML = `
        ${questionText}
        <ul>
            ${question.answers.map(answer => `
                <li><label><input type="radio" name="question${index}" value="${answer}"> ${answer}</label></li>
            `).join('')}
        </ul>
    `;
    return questionElement;
}

function calculateScore() {
    score = 0;
    incorrectQuestions = [];
    questions.forEach((question, index) => {
        const selectedAnswer = examForm.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
            score++;
        } else {
            incorrectQuestions.push(question);
        }
    });
}

function showResults() {
    scoreDisplay.textContent = `Your score: ${score} out of ${questions.length}`;
    examContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    if (incorrectQuestions.length > 0) {
        retryContainer.classList.remove('hidden');
    }
}

function renderMathJax() {
    if (window.MathJax) {
        MathJax.typeset();
    }
}
