//===========
// VARIABLES
//===========

var main = document.querySelector("main");
var currentQuestion = 1;
var rightAnswers = 0;
var numberOfQuestions = 10;
var timer = document.querySelector("#timer");
var timeLeft = 5;




//===========
// FUNCTIONS
//===========


// Timer 
function setTimer() {
    var timerInterval = setInterval(function() {
        timer.textContent = timeLeft
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            main.classList.add("hidden");
            alert("End of quiz. You got " + rightAnswers + " right, and " + (numberOfQuestions - rightAnswers) + " wrong.");
        }
    }, 1000);
}


setTimer();








// Functio to continue the quiz. It will advance the user to the next question when they answer a question.
// When the last question is answered, it notifies the user of how many questions they anwered right and wrong.
    //  TO DO ---> It then asks if the user wants to save their score on the app.
function continueQuiz() {
    var answeredQuestion = document.querySelector("#question" + currentQuestion);
    answeredQuestion.classList.add("hidden");
    currentQuestion++;
    if (currentQuestion <= numberOfQuestions) {
        var nextQuestion = document.querySelector("#question" + currentQuestion);
        nextQuestion.classList.remove("hidden");    
    } else {
        alert("End of quiz. You got " + rightAnswers + " right, and " + (numberOfQuestions - rightAnswers) + " wrong.");
    }
}



//=================
// EVENT LISTENERS
//=================

main.addEventListener("click", function(event) {
    var button = event.target;
    var rightAnswer = button.classList;
    console.log(rightAnswer);
    if (rightAnswer == "rightAnswer") {
        rightAnswers++;
    }
    if (button.matches("button")) {
        continueQuiz();
    }
})