
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
        question: 'In CSS, "justify content" minipulates the spacing of content on what axis of flex?',
        choices: {
            a: 'A: Cross Axis',
            b: 'B: Main Axis',
            c: 'C: All Axis',
            d: 'D: None of the above'

        },
        answer: 'B: Main Axis'
    },
    {
        question: 'What HTML attribute allows a programmer to input something using a URL?',
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
            a: 'A: It is used in conjunction with Zuckerburg\'s Metaverse?',
            b: 'B: Defines data specifically about the webpage',
            c: 'C: There is no such thing as META tags',
            d: 'D: META is strictally for testing purposes'
        },
        answer: 'B: Defines data specifically about the webpage'
    },
    {
        question: 'Which of the following choices is the proper structure for an if statement',
        choices: {
            a: 'A: if ("Conditional statment") {"Expected excecution of code"};',
            b: 'B: if ("Executed code") {"Conditional statement"};',
            c: 'C: If {"Conditional statment"} ("executed code")',
            d: 'D: if {"Executed code"} (Conditional Statement)'
        },
        answer: 'A: if ("Conditional statment") {"Expected excecution of code"};'
    },
    {
        question: "Using Javascript how can we create a functioning button?",
        choices: {
            a: 'A: Addbuttonlistener("click", function)',
            b: 'B: Addclicklistener("click", function)',
            c: 'C: Addeventlistener("click", function)',
            d: 'D: Addpushlistener("click", function)',
        },
        answer: 'C: Addeventlistener("click", function)'
    },
    {
        question: "Which of these is the necessary decleration of an HTML file?",
        choices: {
            a: 'A: Doctype HTML',
            b: 'B: <Doctype web>',
            c: 'C: <html>',
            d: 'D: <!DOCTYPE html>'
        },
        answer: 'D: <!DOCTYPE html>'
    },
    {
        question: 'What is the main purpose of CSS\' "Flex Box"?',
        choices: {
            a: 'A: Interactions with Buttons',
            b: 'B: Creative design',
            c: 'C: Responsivness',
            d: 'D: Creating elements'
        },
        answer: 'C: Responsivness'
    },
    {
        question: "Which of the folloing tags is used to externally connect a CSS to an HTML file?",
        choices: {
            a: 'A: <Connect = " ">',
            b: 'B: Import= " "',
            c: 'C: CSS=" "',
            d: 'D: <link>'
        },
        answer: 'D: <link>'
    },
];
var questionNumDis = 1
var correctAnswers = 0;
var secondsLeft = 100;
var questionNum = 0;
var currentQuestion = document.getElementById("question");
var answer = testQuestions[questionNum].answer;
var choice1 = document.getElementById('a');
var choice2 = document.getElementById('b');
var choice3 = document.getElementById('c');
var choice4 = document.getElementById('d');
var timer = document.getElementById('timer');
var startbtn = document.querySelector('#start');
var messageBox = document.getElementById('messagebox');
var choices = document.getElementById('choices');
var questDisplay = document.getElementById('questNumDis');
questDisplay.textContent = "Question: " + questionNumDis; 

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
startbtn.addEventListener('click', function(){
    displayQuestion();
    clock();
    choices.setAttribute(
        'style',
        'visibility: visible')
    startbtn.setAttribute(
        'style',
        'visibility: hidden'
    )
    questDisplay.setAttribute(
        'style',
        'visibility: visible',
    )
})


var correctMess = 'Thats correct';
var incorrectMess = 'sorry, thats not correct, the answer is: '
