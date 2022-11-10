
var testQuestions = [
    {
        question: "What is the primary use for CSS code?",
        choices: {
            a: 'Styling',
            b: 'Structuring',
            c: 'Bug fixing',
            d: 'Debugging'
        },
        answer: 'Styling'
    }, 
    {
        question: 'In CSS, "justify content" minipulates the spacing of content on what axis?',
        choices: {
            a: 'Cross Axis',
            b: 'Main Axis',
            c: 'All Axis'

        },
        answer: 'Main Axis'
    },
    {
        question: 'What HTML attribute allows a programmer to input data using a URL?',
        choices: {
            a: 'src = ""',
            b: '<a>',
            c: 'href = ""',
            d:'link=""'
        },
        answer: 'href = ""'
    },
    {
        question: 'Which one of these choices is a self closing tag?',
        choices: {
            a: '<Button>',
            b: '<a>',
            c: '<hr>'
        },
        answer: '<hr>'
    },
    {
        question: 'What is the main purpose of Meta Tags?',
        choices: {
            a: 'Used in conjunction with Zuckerburg\'s Metaverse?',
            b: 'Stores information specifically about the webpage',
            c: 'There is no such thing as a meta tage'
        },
        answer: 'Stores information specifically about the webpage'
    },
    {
        question: 'Which of the following choices is the proper structure for an if statement',
        choices: {
            a: 'if ("Conditional statment") {"Expected excecution of code"};',
            b: 'if ("Executed code") {"Conditional statement"};',
            c: 'If {"Conditional statment"} ("executed code");',
            d: ''
        },
        answer: 'if ("Conditional statment") {"Expected excecution of code"};'
    },
    {
        question: "Using Javascript how can we create a functioning button?",
        choices: {
            a: 'Addbuttonlistener("click", function)',
            b: 'Addclicklistener("click", function)',
            c: 'Addeventlistener("click", function)',
            d: 'Addpushlistener("click",function)',
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
var numCorrect = 0;
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
// function displaymessage(){
// }

function clock() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left to complete the test.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            displaymessage();
        }

    }, 1000);
}

clock();
function displayQuestion() {
    choice1.chan

    currentQuestion.textContent = testQuestions[questionNum].question;
    choice1.textContent = testQuestions[questionNum].choices.a;
    choice2.textContent = testQuestions[questionNum].choices.b;
    choice3.textContent = testQuestions[questionNum].choices.c;
    choice4.textContent = testQuestions[questionNum].choices.d;

}
displayQuestion()

choice1.addEventListener('click', function () {
    if (choice1.textContent === answer) {
        choice1.setAttribute(
            "style",
            "background-color: green"
        );

    } else {
        choice1.setAttribute(
            "style",
            "background-color: red"
        );
    }
    questionNum++;
    displayQuestion();
    return;
});
choice2.addEventListener('click', function () {
    if (choice2.textContent === answer) {
        choice2.setAttribute(
            "style",
            "background-color: green"
        );

    } else {
        choice2.setAttribute(
            "style",
            "background-color: red"
        );
    }
    questionNum++;
    displayQuestion();
    return;
});
choice3.addEventListener('click', function () {
    if (choice3.textContent === answer) {
        choice3.setAttribute(
            "style",
            "background-color: green"
        );

    } else {
        choice3.setAttribute(
            "style",
            "background-color: red"
        );
    }
    questionNum++;
    displayQuestion();
    return;

});
choice4.addEventListener('click', function () {
    if (choice4.textContent === answer) {
        choice4.setAttribute(
            "style",
            "background-color: green"
        );

    } else {
        choice4.setAttribute(
            "style",
            "background-color: red"
        );
    }
    questionNum++;
    displayQuestion();
    return;
});



var correctMess = 'Thats correct';
var incorrectMess = 'sorry, thats not correct, the answer is: '
console.log('Answer: ' + answer)
console.log('Choice 1: ' + choice1.textContent)
console.log('Choice 2: ' + choice2.textContent)
console.log('Choice 3: ' + choice3.textContent)
console.log('Choice 4: ' + choice4.textContent)
console.log('Question Num: ' + questionNum)