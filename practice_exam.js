// Questions
const transformationQuestions = [
    { question: "What is the image of the point (2,3) after a translation of 4 units right and 2 units up?", choices: ["a) (6,5)", "b) (6,7)", "c) (2,5)", "d) (4,3)"], correct: "a) (6,5)" },
    { question: "What is the image of the point (-3,-2) after a rotation of 90 degrees counterclockwise around the origin?", choices: ["a) (2,-3)", "b) (-2,3)", "c) (3,2)", "d) (-3,2)"], correct: "a) (2,-3)" },
    { question: "What is the image of the point (4, -1) after a reflection over the x-axis?", choices: ["a) (4,1)", "b) (-4,-1)", "c) (-4,1)", "d) (4,-1)"], correct: "a) (4,1)" },
    { question: "What is the image of the point (1,2) after a dilation with a scale factor of 3 centered at the origin?", choices: ["a) (3,6)", "b) (2,6)", "c) (3,2)", "d) (1,5)"], correct: "a) (3,6)" },
    { question: "What is the image of the point (5,4) after a translation of 3 units left and 4 units down?", choices: ["a) (2,0)", "b) (8,8)", "c) (2,-4)", "d) (8,0)"], correct: "a) (2,0)" },
    { question: "What is the image of the point (0,5) after a reflection over the y-axis?", choices: ["a) (0,5)", "b) (0,-5)", "c) (-5,0)", "d) (5,0)"], correct: "a) (0,5)" },
    { question: "What is the image of the point (-2,3) after a rotation of 180 degrees around the origin?", choices: ["a) (2,-3)", "b) (-2,-3)", "c) (3,-2)", "d) (-3,2)"], correct: "a) (2,-3)" },
    { question: "What is the image of the point (3,-3) after a dilation with a scale factor of 2 centered at the origin?", choices: ["a) (6,-6)", "b) (3,-6)", "c) (6,-3)", "d) (0,0)"], correct: "a) (6,-6)" },
    { question: "What is the image of the point (-1,-4) after a translation of 5 units right and 2 units up?", choices: ["a) (4,-2)", "b) (-6,2)", "c) (4,-6)", "d) (-6,-2)"], correct: "a) (4,-2)" },
    { question: "What is the image of the point (2,2) after a rotation of 90 degrees clockwise around the origin?", choices: ["a) (-2,2)", "b) (2,-2)", "c) (-2,-2)", "d) (2,2)"], correct: "a) (2,-2)" }
];

const algebraQuestions = [
    { question: "Solve for x: 2x + 5 = 15", choices: ["a) 5", "b) 6", "c) 7", "d) 8"], correct: "b) 6" },
    { question: "Simplify: 3(x + 2) - 2(x - 1)", choices: ["a) x + 8", "b) x + 2", "c) x - 2", "d) x - 8"], correct: "b) x + 2" },
    { question: "Find the value of 3x + 2 when x = 4", choices: ["a) 8", "b) 10", "c) 12", "d) 14"], correct: "d) 14" },
    { question: "Solve for y: 2y - 7 = 5", choices: ["a) 1", "b) 3", "c) 6", "d) 7"], correct: "c) 6" },
    { question: "Simplify: 4x - 2(x + 3)", choices: ["a) 2x - 6", "b) 2x - 12", "c) 2x + 6", "d) 2x + 12"], correct: "a) 2x - 6" },
    { question: "Find the value of 5x - 3 when x = 2", choices: ["a) 7", "b) 8", "c) 9", "d) 10"], correct: "b) 8" },
    { question: "Solve for z: 3z + 4 = 13", choices: ["a) 3", "b) 4", "c) 5", "d) 6"], correct: "c) 5" },
    { question: "Simplify: 2(x - 4) + 3(2x + 1)", choices: ["a) 7x - 5", "b) 7x - 7", "c) 8x - 5", "d) 8x - 7"], correct: "a) 7x - 5" },
    { question: "Find the value of 4y - 5 when y = 3", choices: ["a) 7", "b) 8", "c) 9", "d) 10"], correct: "b) 8" },
    { question: "Solve for x: 3x - 7 = 8", choices: ["a) 5", "b) 6", "c) 7", "d) 8"], correct: "b) 6" },
    { question: "Simplify: 5(x - 2) - 3(2x + 1)", choices: ["a) 5x - 13", "b) 7x - 10", "c) 3x - 11", "d) 4x - 7"], correct: "a) 5x - 13" },
    { question: "Find the value of 2y + 3 when y = 4", choices: ["a) 7", "b) 8", "c) 9", "d) 10"], correct: "a) 7" },
    { question: "Solve for z: 4z - 5 = 11", choices: ["a) 2", "b) 3", "c) 4", "d) 5"], correct: "c) 4" },
    { question: "Simplify: 3(2x - 5) + 4(3x + 1)", choices: ["a) 12x - 7", "b) 12x + 7", "c) 13x - 11", "d) 13x + 11"], correct: "a) 12x - 7" },
    { question: "Find the value of 5y - 2 when y = 3", choices: ["a) 13", "b) 14", "c) 15", "d) 16"], correct: "b) 14" },
    { question: "Solve for x: 4x + 3 = 15", choices: ["a) 3", "b) 4", "c) 5", "d) 6"], correct: "c) 3" },
    { question: "Simplify: 2(3x + 4) - 3(2x - 1)", choices: ["a) 4x + 14", "b) 5x + 14", "c) 4x + 10", "d) 5x + 10"], correct: "b) 5x + 14" },
    { question: "Find the value of 2y + 5 when y = 4", choices: ["a) 7", "b) 8", "c) 9", "d) 10"], correct: "a) 7" },
    { question: "Solve for z: 5z - 7 = 18", choices: ["a) 3", "b) 4", "c) 5", "d) 6"], correct: "d) 5" },
    { question: "Simplify: 3(4x - 2) + 2(3x + 1)", choices: ["a) 18x - 4", "b) 18x + 4", "c) 17x - 4", "d) 17x + 4"], correct: "a) 18x - 4" }
];

// Authorization
let loggedIn = false;

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated authentication (replace with actual authentication logic)
    if (username === 'sid' && password === '123') {
        loggedIn = true;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('exam-container').style.display = 'block';
        generateExam();
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// Generate Exam
function generateExam() {
    const examForm = document.getElementById('exam-form');
    let html = '';

    // Generate transformation questions
    transformationQuestions.forEach((question, index) => {
        html += `
            <div class="question">
                <p><strong>Q${index + 1}:</strong> ${question.question}</p>
                <ul class="choices" id="question-${index}">
                    ${question.choices.map(choice => `<li><input type="radio" name="q${index}" value="${choice}" required> ${choice}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    // Generate algebra questions
    algebraQuestions.forEach((question, index) => {
        const questionNumber = transformationQuestions.length + index + 1;
        html += `
            <div class="question">
                <p><strong>Q${questionNumber}:</strong> ${question.question}</p>
                <ul class="choices" id="question-${questionNumber}">
                    ${question.choices.map(choice => `<li><input type="radio" name="q${questionNumber}" value="${choice}" required> ${choice}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    examForm.innerHTML = html;
}

// Submit Exam
function submitExam() {
    if (!loggedIn) {
        alert('Please log in to submit the exam.');
        return;
    }

    const examForm = document.getElementById('exam-form');
    const scoreElement = document.getElementById('score');
    let score = 0;

    // Check answers for transformation questions
    transformationQuestions.forEach((question, index) => {
        const selectedAnswer = examForm.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correct) {
            score++;
            document.getElementById(`question-${index}`).classList.add('correct');
        } else if (selectedAnswer) {
            document.getElementById(`question-${index}`).classList.add('incorrect');
        }
    });

    // Check answers for algebra questions
    algebraQuestions.forEach((question, index) => {
        const questionNumber = transformationQuestions.length + index + 1;
        const selectedAnswer = examForm.querySelector(`input[name="q${questionNumber}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correct) {
            score++;
            document.getElementById(`question-${questionNumber}`).classList.add('correct');
        } else if (selectedAnswer) {
            document.getElementById(`question-${questionNumber}`).classList.add('incorrect');
        }
    });

    // Display score
    scoreElement.textContent = `Your score: ${score}/${transformationQuestions.length + algebraQuestions.length}`;
    scoreElement.style.display = 'block';
}

