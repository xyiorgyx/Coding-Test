
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
];


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
    for (i=0; i < 4; i++){
        currentQuestion.textContent = testQuestions[questionNum].question;
        choice1.textContent = testQuestions[questionNum].choices.a;
        choice2.textContent = testQuestions[questionNum].choices.b;
        choice3.textContent = testQuestions[questionNum].choices.c;
        choice4.textContent = testQuestions[questionNum].choices.d;
        
    }

}



displayQuestion()

choice1.addEventListener('click', function() {
    if (choice1.textcontent = answer){
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
});
choice2.addEventListener('click', function() {
    if (choice2.textcontent === answer){
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
});
choice3.addEventListener('click', function() {
    if (choice3.textcontent === answer){
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
});
choice4.addEventListener('click', function() {
    if (choice4.textcontent === answer){
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
});
// nextbtn.addEventListener('click', next)

var correctMess = 'Thats correct';
var incorrectMess = 'sorry, thats not correct, the answer is: '
console.log(answer)
console.log(choice1.textContent)
console.log(choice2.textContent)
