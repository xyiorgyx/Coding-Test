import testQuestions from "questions.js";


currentQuestion = document.querySelector('#question')
choice1 = document.selectelementbyid('a');
choice2 = document.selectelementbyid('b');
choice3 = document.selectelementbyid('c');
choice4 = document.selectelementbyid('d');

function displayQuestion() {

    var currentQuestion = [];
    var choice1 = [];
    var choice2 = [];
    var choice3 = [];
    var choice4 = [];
    var answer = [] 
    
    currentQuestion.innerHTML = testQuestions[0].question;
    choice1.push(testQuestions[0].choices[a]);
    choice2.push(testQuestions[0].choices[b]);
    choice3.push(testQuestions[0].choices[c]);
    choice4.push(testQuestions[0].choices[d]);
}

choice1.addEventListener('click', checkAnswer);
choice2.addEventListener('click', checkAnswer);
choice3.addEventListener('click', checkAnswer);
choice4.addEventListener('click', checkAnswer);
nextbtn.addEventListener('click', next)

var correctMess = 'Thats correct';
var quest = 0;



