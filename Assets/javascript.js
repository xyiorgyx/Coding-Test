
var testQuestions = [
    {
        question: "What is the primary use for CSS code?",
        choices: {
            a: 'A: Styling',
            b: 'B: Structuring',
            c: 'C: Bug fixing',
            d: 'D: Debugging'
        },
        answer: 'A: Styling'
    },
    {
        question: 'In CSS, "justify content" minipulates the spacing of content on what axis?',
        choices: {
            a: 'A: Cross Axis',
            b: 'B: Main Axis',
            c: 'C: All Axis',
            d: 'D: None of the above'

        },
        answer: 'B: Main Axis'
    },
    {
        question: 'What HTML attribute allows a programmer to input data using a URL?',
        choices: {
            a: 'A: src = ""',
            b: 'B: <a>',
            c: 'C: href = ""',
            d: 'D: link=""'
        },
        answer: 'C: href = ""'
    },
    {
        question: 'Which one of these choices is a self closing tag?',
        choices: {
            a: 'A: <Button>',
            b: 'B: <a>',
            c: 'C: <hr>',
            d: 'D: <span>'
        },
        answer: 'C: <hr>'
    },
    {
        question: 'What is the main purpose of Meta Tags?',
        choices: {
            a: 'A: Used in conjunction with Zuckerburg\'s Metaverse?',
            b: 'B: Stores information specifically about the webpage',
            c: 'C: There is no such thing as a meta tage',
            d: 'D: '
        },
        answer: 'B: Stores information specifically about the webpage'
    },
    {
        question: 'Which of the following choices is the proper structure for an if statement',
        choices: {
            a: 'if ("Conditional statment") {"Expected excecution of code"};',
            b: 'if ("Executed code") {"Conditional statement"};',
            c: 'If {"Conditional statment"} ("executed code")',
            d: 'if {"Executed code"} (Conditional Statement)'
        },
        answer: 'if ("Conditional statment") {"Expected excecution of code"};'
    },
    {
        question: "Using Javascript how can we create a functioning button?",
        choices: {
            a: 'Addbuttonlistener("click", function)',
            b: 'Addclicklistener("click", function)',
            c: 'Addeventlistener("click", function)',
            d: 'Addpushlistener("click", function)',
        },
        answer: 'Addeventlistener("click", function)'
    },
    {
        question: "What is the primary use for CSS code?",
        choices: {
            a: 'Styling',
            b: 'Structuring',
            c: 'Bug fixing',
            d: ''
        },
        answer: 'a'
    },
    {
        question: "What is the primary use for CSS code?",
        choices: {
            a: 'Styling',
            b: 'Structuring',
            c: 'Bug fixing',
            d: ''
        },
        answer: 'a'
    },
    {
        question: "What is the primary use for CSS code?",
        choices: {
            a: 'Styling',
            b: 'Structuring',
            c: 'Bug fixing',
            d: ''
        },
        answer: 'a'
    },
];

var totalQuestion = 10
var correctAnswers = 0
var secondsLeft = 100;
var questionNum = 0;
var currentQuestion = document.getElementById("question");
var answer = testQuestions[questionNum].answer;
var choice1 = document.getElementById('a');
var choice2 = document.getElementById('b');
var choice3 = document.getElementById('c');
var choice4 = document.getElementById('d');
var timer = document.getElementById('timer');
var startbtn = document.querySelector('#start')
var messageBox = document.getElementById('messagebox')

function displayCorrect() {
    messageBox.textContent = "Thats correct!"
    messageBox.setAttribute(
        "style",
        "color: green"
    )
}

function displayWrong() {
    messageBox.textContent = "Im sorry, thats incorrect. 5 seconds has been removed from your remaining time"
    messageBox.setAttribute(
        "style",
        "color: red"
    )
}

function clock() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            displaymessage();
        }

    }, 1000);
}

clock();
function displayQuestion() {
    answer = testQuestions[questionNum].answer;
    currentQuestion.textContent = testQuestions[questionNum].question;
    choice1.textContent = testQuestions[questionNum].choices.a;
    choice2.textContent = testQuestions[questionNum].choices.b;
    choice3.textContent = testQuestions[questionNum].choices.c;
    choice4.textContent = testQuestions[questionNum].choices.d;

    console.log('Answer: ' + answer)
    console.log('Choice 1: ' + choice1.textContent)
    console.log('Choice 2: ' + choice2.textContent)
    console.log('Choice 3: ' + choice3.textContent)
    console.log('Choice 4: ' + choice4.textContent)
    console.log('Question Num: ' + questionNum)
    console.log('Correct Answers: ' + correctAnswers)
}
displayQuestion()

choice1.addEventListener('click', function () {
    if (choice1.textContent === answer) {
        displayCorrect();
        correctAnswers++;

    } else {
        displayWrong();
        secondsLeft -= 5;

    }
    questionNum++;
    displayQuestion();
    return;
});
choice2.addEventListener('click', function () {
    if (choice2.textContent === answer) {
        displayCorrect();
        correctAnswers++;

    } else {
        displayWrong();
        secondsLeft -= 5;
    }
    questionNum++;
    displayQuestion();
    return;
});
choice3.addEventListener('click', function () {
    if (choice3.textContent === answer) {
        displayCorrect();
        correctAnswers++;

    } else {
        displayWrong();
        secondsLeft -= 5;
    }
    questionNum++;
    displayQuestion();
    return;

});
choice4.addEventListener('click', function () {
    if (choice4.textContent === answer) {
        displayCorrect();
        correctAnswers++;

    } else {
        displayWrong();
        secondsLeft -= 5;
    }
    questionNum++;
    displayQuestion();
    return;
});



var correctMess = 'Thats correct';
var incorrectMess = 'sorry, thats not correct, the answer is: '
