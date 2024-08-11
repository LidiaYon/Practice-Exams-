function startExam() {
    // Initialize timer and lockdown counter if necessary
    // Example: startTimer();
}

function submitExam() {
    const answers = {
        q1: '2.40625',
        q2: '0.83',
        mc1: ['3/8', '6/16', '15/40', '37.5%'],
        q4: '1 1/2',
        q5: '4',
        q6: '11.4833',
        q7: '2.5',
        q8: '0.375',
        q9: '3.2857',
        q10: '1/3',
        q11: '0.25',
        q12: '-2.825',
        q13: '0.63',
        q14: ['0.667'],
        q15: '4.2',
        q16: '-1',
        q17: '-0.1',
        q18: '150',
        q19: '$42.00',
        q20: '90',
        q21: '4',
        q22: '10.63',
        q23: '450',
        q24: '4',
        q25: '$288',
        q26: '80 km/h',
        q27: '20 units',
        q28: '300 kilometers',
        q29: '150 toys',
        q30: '700000',
        q31: '2.3 million',
        q32: '1,000,000 streams',
        q33: '$10,000',
        q34: 'November',
        q35: '16 kilometers'
        
    };

    let score = 0;
    const form = document.getElementById('exam-form');
    const formData = new FormData(form);
    const feedback = document.getElementById('feedback');

    feedback.innerHTML = '';

    for (const [key, value] of formData.entries()) {
        const question = document.querySelector(`input[name="${key}"][value="${value}"]`);
        if (Array.isArray(answers[key])) {
            if (answers[key].includes(value)) {
                score++;
                if (question) {
                    question.parentElement.classList.add('correct');
                }
            } else {
                if (question) {
                    question.parentElement.classList.add('incorrect');
                }
                const correctAnswer = answers[key].join(', ');
                if (correctAnswer) {
                    feedback.innerHTML += `<p>Question ${key} - Correct Answer: <span class="correct-answer">${correctAnswer}</span></p>`;
                }
            }
        } else if (answers[key] && value === answers[key]) {
            score++;
            if (question) {
                question.parentElement.classList.add('correct');
            }
        } else {
            if (question) {
                question.parentElement.classList.add('incorrect');
            }
            const correctAnswer = answers[key];
            if (correctAnswer) {
                feedback.innerHTML += `<p>Question ${key} - Correct Answer: <span class="correct-answer">${correctAnswer}</span></p>`;
            }
        }
    }

    // Calculate and display score
    const totalQuestions = Object.keys(answers).length;
    const scorePercentage = (score / totalQuestions) * 100;
    document.getElementById('score').textContent = `You scored ${score} out of ${totalQuestions} (${scorePercentage.toFixed(2)}%).`;
    document.getElementById('score-container').style.display = 'block';

    return false; // Prevent form submission
}
