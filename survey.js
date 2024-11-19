// Pre-defined list of survey questions
const questions = [
    { question: "What is your name?", type: "text" },
    { question: "How old are you?", type: "text" },
    { question: "What is your favorite color?", type: "text" },
    { question: "Do you like coding?", type: "select", options: ["Yes", "No"] },
    { question: "What is your favorite programming language?", type: "text" },
    { question: "Do you have a pet?", type: "select", options: ["Yes", "No"] },
    { question: "What is your dream job?", type: "text" },
    { question: "How often do you exercise?", type: "select", options: ["Daily", "Weekly", "Rarely", "Never"] },
    { question: "Do you enjoy reading books?", type: "select", options: ["Yes", "No"] },
    { question: "What is your favorite season?", type: "text" }
];

// Function to select 5 random questions from the list
function getRandomQuestions() {
    const selectedQuestions = [];
    const questionIndexes = new Set();

    while (selectedQuestions.length < 5) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        if (!questionIndexes.has(randomIndex)) {
            questionIndexes.add(randomIndex);
            selectedQuestions.push(questions[randomIndex]);
        }
    }

    return selectedQuestions;
}

// Function to render questions dynamically
function renderQuestions() {
    const questionContainer = document.getElementById('question-container');
    const randomQuestions = getRandomQuestions();

    randomQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionLabel = document.createElement('label');
        questionLabel.textContent = question.question;
        
        if (question.type === "text") {
            const input = document.createElement('input');
            input.type = "text";
            input.name = `question_${index}`;
            input.required = true;
            questionDiv.appendChild(questionLabel);
            questionDiv.appendChild(input);
        } else if (question.type === "select") {
            const select = document.createElement('select');
            select.name = `question_${index}`;
            question.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            questionDiv.appendChild(questionLabel);
            questionDiv.appendChild(select);
        }

        questionContainer.appendChild(questionDiv);
    });
}

// Function to handle form submission and display answers
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const answersList = document.getElementById('answers-list');
    answersList.innerHTML = '';

    formData.forEach((value, key) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${key.replace("question_", "Question ")}: ${value}`;
        answersList.appendChild(listItem);
    });

    // Hide survey and show result
    document.getElementById('surveyForm').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});

// Initial setup when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderQuestions();
});
