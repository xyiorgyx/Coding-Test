// The following variable is an object, containing all questions, answers, and choices.
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

// variables for the functioning of the test. including averages and documents by element. 
var questionNumDis = 1
var correctAnswers = 0;
var secondsLeft = 100;
var questionIndexNum = 0;
var currentQuestion = document.getElementById("question");
var answer = testQuestions[questionIndexNum].answer;
var choice1 = document.getElementById('a');
var choice2 = document.getElementById('b');
var choice3 = document.getElementById('c');
var choice4 = document.getElementById('d');
var timer = document.getElementById('timer');
var startbtn = document.querySelector('#start');
var messageBox = document.getElementById('messagebox');
var choices = document.getElementById('choices');
var questDisplay = document.getElementById('questNumDis');
var scoreboard = document.getElementById('score');
var test = document.getElementById('test');
var average = (correctAnswers / 10) * 100;

// displayed when answer is correct.
function displayCorrect() {
    messageBox.textContent = answer + " is correct! Great job! keep it up!"
    messageBox.setAttribute(
        "style",
        "color: green"
    )
}
// displayed when answer is wrong. 
function displayWrong() {
    messageBox.textContent = 'Im sorry, thats incorrect. the answer was: "' + answer + '"'
    messageBox.setAttribute(
        "style",
        "color: red"
    )
}
// clock counts down to 0, in which the test ends. 
function clock() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            
        }
        else if(secondsLeft < 1){
            showScoreboard();
        }

    }, 1000);
}
// displays questions as long as the clock is great than 0, 
function displayQuestion() {

    if (secondsLeft > 0 && questionIndexNum != 10) {
        let average = (correctAnswers / 10) * 100;
        answer = testQuestions[questionIndexNum].answer;
        currentQuestion.textContent = testQuestions[questionIndexNum].question;
        choice1.textContent = testQuestions[questionIndexNum].choices.a;
        choice2.textContent = testQuestions[questionIndexNum].choices.b;
        choice3.textContent = testQuestions[questionIndexNum].choices.c;
        choice4.textContent = testQuestions[questionIndexNum].choices.d;
        questDisplay.textContent = "Question: " + questionNumDis;


        console.log('Answer: ' + answer)
        console.log('Choice 1: ' + choice1.textContent)
        console.log('Choice 2: ' + choice2.textContent)
        console.log('Choice 3: ' + choice3.textContent)
        console.log('Choice 4: ' + choice4.textContent)
        console.log('Question Num: ' + questionIndexNum)
        console.log('Correct Answers: ' + correctAnswers)
        console.log(average);
    }
    else if (questionIndexNum === 10)
    showScoreboard();
    return;
}

// name input for scoreboard. 
function inputname (average) {
   average =  (correctAnswers / 10) * 100;
   var userName = window.prompt("Please enter your name or initials.")
   var li = document.createElement('li');
   var node = document.createTextNode(userName + ':'+ ' '  + average +'%');
   li.appendChild(node);
   document.getElementById('scoreList').appendChild(li);
   
}
// shows scoreboard when all questions are answred, or clock hits 0. remanings invisible until the function is called.
function showScoreboard() {
   scoreboard.setAttribute(
    'style',
    'visibility: visible'
   )
   
   inputname();

}
// follwing buttons are the choices, its choice has a function of checking the answer and displaying the proper message based on the answer.
choice1.addEventListener('click', function () {
    if (choice1.textContent === answer) {
        displayCorrect();
        correctAnswers++;

    } else {
        displayWrong();
        secondsLeft -= 5;

    }
    questionIndexNum++;
    questionNumDis++;
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
    questionIndexNum++;
    questionNumDis++;
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
    questionIndexNum++;
    questionNumDis++;
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
    questionIndexNum++;
    displayQuestion();
    questionNumDis++;
    return;
});
// start button activates the test and timer. It displays all questions as well as choices.
startbtn.addEventListener('click', function () {
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


