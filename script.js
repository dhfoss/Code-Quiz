//===========
// VARIABLES
//===========

//Welcome "Page"
var welcomePage = document.querySelector("#welcomePage");
var yesButton = document.querySelector("#yesButton");
var noButton = document.querySelector("#noButton");
var maybeButton = document.querySelector("#maybeButton");
var howAboutNow = document.querySelector("#howAboutNow");

//Countdown "Page"
var countdownPage = document.querySelector("#countdownPage");
var countdownTimer = document.querySelector("#countdownTimer");
var tooBad = document.querySelector("#tooBad");
var countdownTimeLeft = 5;

// Quiz "Page"
var quizPage = document.querySelector("#quizPage");
var currentQuestion = 1;
var rightAnswers = 0;
var numberOfQuestions = 10;
var timer = document.querySelector("#timer");
//Time left is only 10 for testing purpuses. Dont forget to change!
var timeLeft = 10;
var score = document.querySelector("#score");

// Results "Page"
var resultsPage = document.querySelector("#resultsPage");
var scoreResultsSpan = document.querySelector("#scoreResultsSpan");
var rightAnswersSpan = document.querySelector("#rightAnswersSpan");
var wrongAnswersSpan = document.querySelector("#wrongAnswersSpan");
var unansweredSpan = document.querySelector("#unansweredSpan");
var form = document.querySelector("#form");

//High Scores "Page"
var highScoresPage = document.querySelector("#highScoresPage");
var highScoresList = document.querySelector("#highScoresList");


//===========
// FUNCTIONS
//===========


function setCountdown() {
    countdownTimer.textContent = countdownTimeLeft;
    var timerInterval = setInterval(function() {
        countdownTimeLeft--;
        countdownTimer.textContent = countdownTimeLeft;
        if (countdownTimeLeft < 0) {
            clearInterval(timerInterval);
            countdownPage.classList.add("hidden");
            quizPage.classList.remove("hidden");
            setTimer();
        }
    }, 1000);
}

// Game timer function.  This will cound down how much time the user has left to finish the quiz.
// If the user finishes the quiz before the timer runs out, the timer will stop.
function setTimer() {
    timer.textContent = timeLeft;
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        if (currentQuestion > numberOfQuestions) {
            clearInterval(timerInterval);
        }
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            displayResultsPage();
        }
    }, 1000);
}

// setTimer();


function displayResultsPage() {
    quizPage.classList.add("hidden");
    resultsPage.classList.remove("hidden");
    scoreResultsSpan.textContent = rightAnswers;
    rightAnswersSpan.textContent = rightAnswers;
    wrongAnswersSpan.textContent = currentQuestion - rightAnswers - 1;
    unansweredSpan.textContent = numberOfQuestions - currentQuestion + 1;
}





// Function to continue the quiz. It will advance the user to the next question when they answer a question.
// When the last question is answered it notifies the user of how many questions they anwered right and wrong.
function continueQuiz() {
    score.textContent = rightAnswers;
    var answeredQuestion = document.querySelector("#question" + currentQuestion);
    answeredQuestion.classList.add("hidden");
    currentQuestion++;
    if (currentQuestion <= numberOfQuestions) {
        var nextQuestion = document.querySelector("#question" + currentQuestion);
        nextQuestion.classList.remove("hidden");    
    } else {
        displayResultsPage();
    }
}



//=================
// EVENT LISTENERS
//=================

//This detects if the user clicks a button. If they answered right, their number of right answers is updated.
    //To do! Subtract time if answer is wrong.
quizPage.addEventListener("click", function(event) {
    var button = event.target;
    var rightAnswer = button.classList;
    console.log(rightAnswer);
    if (rightAnswer == "rightAnswer") {
        rightAnswers++;
    }
    if (rightAnswer != "rightAnswer") {
        timeLeft = timeLeft -5;
    }
    if (button.matches("button")) {
        continueQuiz();
    }
})

form.addEventListener("submit", function(event) {
    event.preventDefault();
})

yesButton.addEventListener("click", function() {
    welcomePage.classList.add("hidden");
    countdownPage.classList.remove("hidden");
    setCountdown();
})

noButton.addEventListener("click", function() {
    welcomePage.classList.add("hidden");
    countdownPage.classList.remove("hidden");
    tooBad.classList.remove("hidden");
    setCountdown();
})

maybeButton.addEventListener("click", function() {
    var annoyingSpan = document.createElement("span");
    annoyingSpan.textContent = "How about now? ";
    howAboutNow.append(annoyingSpan);
})

//========
// ONLOAD
//========