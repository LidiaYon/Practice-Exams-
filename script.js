// Simulated user credentials (replace with actual authentication logic)
const users = [
    { username: "sid", password: "765432" },
    { username: "arnav", password: "765432" }
];

const examForm = document.getElementById('exam-form');
const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');
const examContainer = document.getElementById('exam-container');
const resultContainer = document.getElementById('result-container');
const retryContainer = document.getElementById('retry-container');
const scoreDisplay = document.getElementById('score');
let score = 0;
let incorrectQuestions = [];

// Sample algebraic questions for the practice exam
const questions = [
    // Easy questions
    {
        question: "Simplify: 2x + 3x",
        answers: ["5x", "6x", "2x", "3x"],
        correctAnswer: "5x"
    },
    {
        question: "Simplify: 7 - 2y + 4y",
        answers: ["7 + 2y", "5y", "3y", "2y + 7"],
        correctAnswer: "7 + 2y"
    },
    {
        question: "Find the value of x in the equation: x + 5 = 9",
        answers: ["4", "5", "14", "9"],
        correctAnswer: "4"
    },
    // Intermediate questions
    {
        question: "Solve for y in the equation: 3y - 4 = 2",
        answers: ["2", "3", "1", "6"],
        correctAnswer: "2"
    },
    {
        question: "Simplify: 5x - 2x + 4",
        answers: ["3x + 4", "7x + 4", "2x - 4", "3x - 4"],
        correctAnswer: "3x + 4"
    },
    {
        question: "Solve for x in the equation: 4x + 1 = 17",
        answers: ["4", "5", "3", "2"],
        correctAnswer: "4"
    },
   
    {
        question: "Solve for y in the equation: 3y + 2 = 2(y - 3)",
        answers: ["-8", "8", "-4", "4"],
        correctAnswer: "-8"
    },
    {
        question: "Simplify: 2(x - 3) + 4(x + 1)",
        answers: ["6x - 2", "6x - 6", "2x - 6", "4x + 1"],
        correctAnswer: "6x - 2"
    },
    {
        question: "Solve for x in the equation: \\( \\frac{x}{2} + 5 = \\frac{3x}{4} \\)",
        answers: ["20", "40", "10", "15"],
        correctAnswer: "20"
    },
    {
        question: "Simplify: 4x^2 - 2x(2 - x)",
        answers: ["2x^2 + 4x", "6x^2 - 4x", "2x^2 + 2x", "2x^2 - 4x"],
        correctAnswer: "6x^2 - 4x"
    },
    {
        question: "Solve for y in the equation: 4(y - 3) + 2y = 6y - 2",
        answers: ["-10", "10", "8", "Incorrect Equation"],
        correctAnswer: "Incorrect Equation"
    },
    {
        question: "Simplify: \\( \\frac{3x^2 + 6x}{3x} \\)",
        answers: ["x + 2", "x + 4", "x", "3x + 2"],
        correctAnswer: "x + 2"
    },
    {
        question: "Solve for x in the equation: \\( \\frac{2x}{3} + 4 = \\frac{4x}{5} \\)",
        answers: ["30", "60", "15", "20"],
        correctAnswer: "30"
    },
    {
        question: "Simplify: 5x - 3(x + 2)",
        answers: ["2x - 6", "2x + 6", "8x - 6", "2x - 12"],
        correctAnswer: "2x - 6"
    },
    {
        question: "Solve for y in the equation: \\( \\frac{3y}{2} - 1 = \\frac{y + 4}{3} \\)",
        answers: ["14", "-14", "2", "-2"],
        correctAnswer: "2"
    },
    {
        question: "Simplify: 7(x - 2) - 3(2x - 4)",
        answers: ["x - 10", "x + 10", "7x - 2", "x - 2"],
        correctAnswer: "x - 2"
    },
    {
        question: "Solve for x in the equation: \\( \\frac{4x - 5}{2} = \\frac{3x + 1}{4} \\)",
        answers: ["2.2", "22/10", "11/5", "all"],
        correctAnswer: "all"
    },
    {
        question: "Simplify: 6x^2 - 3x(x - 2)",
        answers: ["3x^2 + 6x", "3x^2 - 6x", "3x^2 + 3x", "6x^2 - 6x"],
        correctAnswer: "3x^2 + 6x"
    },
    {
        question: "Solve for y in the equation: \\( \\frac{5y + 2}{3} = \\frac{2y - 1}{2} \\)",
        answers: ["-7/4", "7/4", "2", "-2"],
        correctAnswer: "-7/4"
    }
];


// Function to generate questions dynamically
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

    renderMathJax();  // Render MathJax content after generating questions
}


// Function to create a question element
function createQuestionElement(question, index) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.dataset.questionIndex = index;

    let questionText;
    if (question.question.includes('\\(')) {
        // Replace '\\(' and '\\)' with MathJax inline math delimiters
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







// Function to render MathJax content
function renderMathJax() {
    if (window.MathJax) {
        MathJax.typeset();
    }
}

// Example of how to render a question (existing code with MathJax call)
function displayQuestion(questionIndex) {
    const question = questions[questionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        ${question.answers.map((answer, index) => `
            <div class="answer">
                <input type="radio" name="answer" id="answer${index}" value="${answer}">
                <label for="answer${index}">${answer}</label>
            </div>
        `).join('')}
    `;
    renderMathJax();  // Render MathJax content after displaying the question
}


// Event listener for login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        loginContainer.classList.add('hidden');
        examContainer.classList.remove('hidden');
        generateQuestions(questions);
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Event listener for exam form submission
examForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateScore();
    highlightAnswers();
    showResults();
});

// Function to calculate and display the score
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

// Function to highlight answers
function highlightAnswers() {
    questions.forEach((question, index) => {
        const questionElement = examForm.querySelector(`.question[data-question-index="${index}"]`);
        const selectedAnswer = examForm.querySelector(`input[name="question${index}"]:checked`);

        if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
            questionElement.classList.add('correct');
        } else {
            questionElement.classList.add('incorrect');
            const radioButtons = questionElement.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radioButton => {
                if (radioButton.value !== question.correctAnswer) {
                    radioButton.parentElement.style.display = 'none';
                } else {
                    radioButton.parentElement.style.display = 'block';
                }
            });
        }
    });
}

// Function to show results
function showResults() {
    scoreDisplay.textContent = `Your score: ${score} out of ${questions.length}`;
    examContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    if (incorrectQuestions.length > 0) {
        retryContainer.classList.remove('hidden');
    }
}

// Event listener for restarting the exam
document.getElementById('restart-btn').addEventListener('click', function() {
    resultContainer.classList.add('hidden');
    examContainer.classList.remove('hidden');
    score = 0;
    generateQuestions(questions);
});

// Event listener for retrying incorrect questions
document.getElementById('retry-btn').addEventListener('click', function() {
    retryContainer.classList.add('hidden');
    examContainer.classList.remove('hidden');
    generateQuestions(incorrectQuestions);
});

// Function to render MathJax content
function renderMathJax() {
    if (window.MathJax) {
        MathJax.typeset();
    }
}

// Example of how to render a question (existing code with MathJax call)
function displayQuestion(questionIndex) {
    const question = questions[questionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        ${question.answers.map((answer, index) => `
            <div class="answer">
                <input type="radio" name="answer" id="answer${index}" value="${answer}">
                <label for="answer${index}">${answer}</label>
            </div>
        `).join('')}
    `;
    renderMathJax();  // Render MathJax content after displaying the question
}


// Initial call to set up the login form
generateQuestions(questions);
