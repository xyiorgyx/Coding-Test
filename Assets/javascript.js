
var testQuestions = [
    {
        question: "What is the primary use for CSS code?",
        choices: {
            a: 'Styling',
            b: 'Structuring',
            c: 'Bug fixing',
            d: 'Debugging'
        },
        answer: 'a'
    },
    {
        question: 'In CSS, "justify content" minipulates the spacing of content on what axis?',
        choices: {
            a: 'Cross Axis',
            b: 'Main Axis',
            c: 'All Axis'

        },
        answer: 'b'
    },
];


var numCorrect = 0;
var userAnswer = '';
var secondsLeft = 100;
var questionNum = 0;
var answer = testQuestions[questionNum].answer
var currentQuestion = document.getElementById("question");
var choice1 = document.getElementById('a');
var choice2 = document.getElementById('b');
var choice3 = document.getElementById('c');
var choice4 = document.getElementById('d');
var timer = document.getElementById('timer');
function displaymessage(){

}

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

clock()
function displayQuestion() {
    currentQuestion.innerHTML = testQuestions[questionNum].question;
    choice1.innerHTML = testQuestions[questionNum].choices.a;
    choice2.innerHTML = testQuestions[questionNum].choices.b;
    choice3.innerHTML = testQuestions[questionNum].choices.c;
    choice4.innerHTML = testQuestions[questionNum].choices.d;
    console.log(testQuestions[questionNum].question)
}

function changeGreen() {
    currentTarget.setAttribute(
        "style",
        "background-color: green"
    );
}

function changeRed() {
    currentTarget.setAttribute(
        "style",
        "background-color: red"
    );
}

displayQuestion()
function checkAnswer() {
    for (var i=0, i < questions.length; i++ )
    userAnswer = (choices[i].querysSelector('input))
    if (testQuestions[questionNum].answer == userAnswer) {
        changeGreen();

    }
    else if (testQuestions[questionNum].answer !== userAnswer) {
        changeRed();

    }
}


displayQuestion()
choice1.addEventListener('click', checkAnswer);
choice2.addEventListener('click', checkAnswer);
choice3.addEventListener('click', checkAnswer);
choice4.addEventListener('click', checkAnswer);
// nextbtn.addEventListener('click', next)

var correctMess = 'Thats correct';
var incorrectMess = 'sorry, thats not correct, the answer is: '


console.log(secondsLeft)
