//===========
// VARIABLES
//===========

var main = document.querySelector("main");
var currentQuestion = 1;





//===========
// FUNCTIONS
//===========

function continueQuiz() {
    var answeredQuestion = document.querySelector("#question" + currentQuestion);
    answeredQuestion.setAttribute("class", "hidden");
    currentQuestion++;
    var nextQuestion = document.querySelector("#question" + currentQuestion);
    nextQuestion.setAttribute("class", "");
}






//=================
// EVENT LISTENERS
//=================

main.addEventListener("click", function(event) {
    var button = event.target;
    if (button.matches("button")) {
        continueQuiz();
    }
})
