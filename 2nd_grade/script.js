// Simulated user credentials (replace with actual authentication logic)
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
let score = 0;
let incorrectQuestions = [];

// Sample algebraic questions for the practice exam
const questions = [
    // Easy questions
    {
        question: "What is 5 + 3?",
        answers: ["6", "7", "8", "9"],
        correctAnswer: "8"
    },
    {
        question: "What is 10 - 4?",
        answers: ["5", "6", "7", "4"],
        correctAnswer: "6"
    },
    {
        question: "What number comes after 18?",
        answers: ["17", "19", "20", "21"],
        correctAnswer: "19"
    },

    // Intermediate questions
    {
        question: "Which is greater: 45 or 54?",
        answers: ["45", "54", "They are equal", "None"],
        correctAnswer: "54"
    },
    {
        question: "If you have 3 dimes and 2 nickels, how much money do you have?",
        answers: ["20 cents", "40 cents", "30 cents", "50 cents"],
        correctAnswer: "40 cents"
    },
    {
        question: "What is the value of 6 tens and 8 ones?",
        answers: ["68", "86", "78", "88"],
        correctAnswer: "68"
    },
    {
        question: "What time is it if the minute hand is on 12 and the hour hand is on 3?",
        answers: ["2:00", "3:00", "4:00", "5:00"],
        correctAnswer: "3:00"
    },

    // Hard questions
    {
        question: "How many sides does a hexagon have?",
        answers: ["5", "6", "7", "8"],
        correctAnswer: "6"
    },
    {
        question: "What is 15 + 9?",
        answers: ["23", "24", "25", "26"],
        correctAnswer: "24"
    },
    {
        question: "Subtract: 30 - 12",
        answers: ["17", "18", "19", "20"],
        correctAnswer: "18"
    },
    {
        question: "What is 4 times 3?",
        answers: ["7", "10", "12", "14"],
        correctAnswer: "12"
    },
    {
        question: "Which is the correct equation for: 20 ÷ 5?",
        answers: ["4", "5", "6", "7"],
        correctAnswer: "4"
    },
    {
        question: "What is 7 more than 25?",
        answers: ["31", "32", "33", "34"],
        correctAnswer: "32"
    },
    {
        question: "If you have 2 quarters, 1 dime, and 2 nickels, how much money do you have?",
        answers: ["50 cents", "60 cents", "70 cents", "80 cents"],
        correctAnswer: "70 cents"
    },
    {
        question: "What is the perimeter of a rectangle with length 5 and width 3?",
        answers: ["15", "16", "17", "18"],
        correctAnswer: "16"
    },
    {
        question: "What is the sum of 13 and 19?",
        answers: ["31", "32", "33", "34"],
        correctAnswer: "32"
    },
    {
        question: "How many vertices does a triangle have?",
        answers: ["2", "3", "4", "5"],
        correctAnswer: "3"
    },
    {
        question: "What is 20 - 8 + 5?",
        answers: ["15", "16", "17", "18"],
        correctAnswer: "17"
    },
    {
        question: "If you buy 2 apples for 30 cents each, how much do you spend in total?",
        answers: ["50 cents", "60 cents", "70 cents", "80 cents"],
        correctAnswer: "60 cents"
    },
    {
        question: "What is the next number in the sequence: 12, 14, 16, ___?",
        answers: ["17", "18", "19", "20"],
        correctAnswer: "18"
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
    } 
    
    else {
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
