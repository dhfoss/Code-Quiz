# Code-Quiz

https://dhfoss.github.io/Code-Quiz/

My code quiz exists on one page. The navigation is achieved by toggling the class of elements to "hidden", which is defined as "display: none" in my css file. For example, the first thing the user sees is my Welcome "Page" ("Page" is in quotes because it is all on the same page) because it is the only main element without the "hidden" class.

![Welcome Page Not Hidden](/assets/screen-shots/mainNotHidden.png?raw=true "Optional Title")

When the button is clicked to advance, the "hidden" class gets added to the Welcome "Page" and the "hidden" class is added to the next main element, in this case the Countdown "Page".

![Hidden Class](/assets/screen-shots/hiddenClass.png?raw=true "Optional Title")

![Advance Button](/assets/screen-shots/advanceButtons.png?raw=true "Optional Title")


My script file is organized in three main sections: Variables, Functions, and Event listeners.

* Variables

I organized this section by grouping the global variables by in which "page" they occur.

![Variables](/assets/screen-shots/variables.png?raw=true "Optional Title")

* Functions

My first function sets the timer in the Countdown "Page".  When the timer runs out, the user is brought to the Quiz "Page". It also runs the next function that sets the timer for the quiz itself.

![Function1](/assets/screen-shots/function1.png?raw=true "Optional Title")

My second function starts the timer of the quiz to 60 seconds, the user's score to 0, the number of the current question, and the number of questions in the quiz. There are two ways to clear the timer interval in this function: if the user answers the last question, or if the user's time reaches 0 seconds. If the user answers the questions in time, the user is brought to the Results "Page".

![Function2](/assets/screen-shots/function2.png?raw=true "Optional Title")

My third function advances the user from one question to the next. It selects the current question by looking for the section element whose id matches the currentQuestion count.  It then iterates the currentQuestion count, and displays the question with the id that matches the new currentQuestion count. It also updates the user's score. If the user answers the final question, it will display the Results "Page".

![Function3](/assets/screen-shots/function3.png?raw=true "Optional Title")


My fourth function displays the user's results from the quiz. This function is called when the user runs out of time (due to the timer running out, or answering too many wrong questions), or if the user answers the final question. 

![Function4](/assets/screen-shots/function4.png?raw=true "Optional Title")



* Event Listenters

My first event listener is for the quiz page. First, it listens for a click by storing the target in a variable.  Then it checks if the target is a button.  It then checks the class to see if its a right answer (which is assigned in the html file). If the class matches rightAnswer, the user gets a point, otherwise the user loses five seconds on the timer. Either way, the continueQuiz function is run to get the user to the next page.

![Event Listener1](/assets/screen-shots/eventListener1.png?raw=true "Optional Title")

My second event listener is for the form to submit a user's high score. First it checks if the user submitted anything at all and alerts them if they did not. It then checks for local storage for the list of other high scores.  If there is no score stored, it creates an empty array (otherwise it would return null). If there are previous scores stored, the values are parsed into an array.  The user's score is then appended to the newly created array.  The array is then transformed into an unordered list that gets displayed on the Hall of Fame "Page".  Finally, the user is brought to the Hall of Fame "Page".

![Event Listener2](/assets/screen-shots/eventListener2.png?raw=true "Optional Title")

My third event listener does the same as the previous, but it gives the user the option to visit the Hall of Fame "Page" without saving their own score.

![Event Listener3](/assets/screen-shots/eventListener3.png?raw=true "Optional Title")

My next event listeners are for the buttons on the Welcome "Page". They simply advance the user to the next section.

![Event Listener4](/assets/screen-shots/eventListener4.png?raw=true "Optional Title")

My next event listener clears the local storage, and clears the list of saved high scores on the Hall of Fame "Page".

![Event Listener5](/assets/screen-shots/eventListener5.png?raw=true "Optional Title")

My final event listener is for the restart button. It lets the user restart the quiz. It first has to delete the list elements, and clear the form input so they don't hold over from the previous quiz.

![Event Listener6](/assets/screen-shots/eventListener6.png?raw=true "Optional Title")