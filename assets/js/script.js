// PSEUDOCODE
// make variable for the start button from id in html

// add event listener for click of start button

// onclick
    // replace the h1 to match the first question
    // replace p with an unordered list of multiple choice buttons
        // add click event for each button in list
        // onclick
            // replace the h1 to match the second question
            // replace p with an unordered list of multiple choice buttons
                // add click event for each button in list
                // onclick
                    // replace the h1 to match the third question
                    // replace p with an unordered list of multiple choice buttons
                        // add click event for each button in list
                        // onclick
                    // replace the h1 to match the fourth question
                    // replace p with an unordered list of multiple choice buttons
                        // add click event for each button in list
                        // onclick
                    // replace the h1 to match the fifth question
                    // replace p with an unordered list of multiple choice buttons
                        // add click event for each button in list

//FOR EACH MULTIPLE CHOICE LIST

// store multiple choice in an array
            // make for loop to create multiple buttons for each element in array
            // check each possible click and make if statement to say whether it is true or false and make conditions 
                // if (user clicks on first choice and it is true)
                    // user is taken to next question 
                    // "Correct!" is displayed in italics under the new question
                // else 
                    // user is taken to next question
                    // "Wrong!" is displayed in italics under the new question
                // etc.
// keep track of wins and losses, as well as the timer (store score in localStorage)

//once fifth question is over, display "All done!" as h1
    // display final score in p 
    // make new input element with button
    //"Wrong!" or "Correct!" will still be displayed in italics from last question

        // when input box is clicked, score from last question disappears
        // when submitted, initials and score will be stored in localStorage
            // then we are taken to a new h1 that displays "Highscores"
                // underneath is a new p text with the scores from localStorage from highest to lowest
                // this has a background color different from webpage (purple)
                // two new buttons will be displayed inline
                    // onclick of "Go Back"
                        // user is taken back to the first h1 and p with the origin "start quiz" button
                    // onclick of "Clear Highscores"
                        // the highscores disappear

// STARTED CODE
// makes variable for start button - finds the button in html with id
let startButton = document.querySelector("#start");
let secondsLeft = 76;
// make a function for quiz timer
function gameTimer() {
    let timer = setInterval(function() {
        secondsLeft--;
        document.querySelector("#timer").innerHTML = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// add event listener for click of start button
startButton.addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "Commonly used data types DO NOT include: ";
    gameTimer();
    // make new html smaller
    // make "start quiz" button disappear
    // change <p> into multiple choice or ul
});