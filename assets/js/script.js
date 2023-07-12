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


// makes variable for start button - finds the button in html with id
let startButton = document.querySelector("#start");

// store buttons in variable
let multChoice1 = document.querySelector("#multiple-choice1");

// store btn1 in variable
let btnOne = document.querySelector("#btn1");
// store btn2 in variable
let btnTwo = document.querySelector("#btn2");
// store btn3 in variable
let btnThree = document.querySelector("#btn3");
// store btn4 in variable
let btnFour = document.querySelector("#btn4");

// store btn5 in variable
let btnFive = document.querySelector("#btn5");
// store btn6 in variable
let btnSix = document.querySelector("#btn6");
// store btn7 in variable
let btnSeven = document.querySelector("#btn7");
// store btn8 in variable
let btnEight = document.querySelector("#btn8");

// store btn9 in variable
let btnNine = document.querySelector("#btn9");
// store btn10 in variable
let btnTen = document.querySelector("#btn10");
// store btn11 in variable
let btnEleven = document.querySelector("#btn11");
// store btn12 in variable
let btnTwelve = document.querySelector("#btn12");

// store btn13 in variable
let btnThirteen = document.querySelector("#btn13");
// store btn14 in variable
let btnFourteen = document.querySelector("#btn14");
// store btn15 in variable
let btnFifteen = document.querySelector("#btn15");
// store btn16 in variable
let btnSixteen = document.querySelector("#btn16");

// store btn17 in variable
let btnSeventeen = document.querySelector("#btn17");
// store btn18 in variable
let btnEighteen = document.querySelector("#btn18");
// store btn19 in variable
let btnNineteen = document.querySelector("#btn19");
// store btn20 in variable
let btnTwenty = document.querySelector("#btn20");

// starts timer at 75 
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

// hide buttons on page load
window.onload = (event) => {
    document.querySelector("#multiple-choice1").style.visibility = "hidden";
    document.querySelector("#multiple-choice1").style.display = "none";
    document.querySelector("#multiple-choice2").style.visibility = "hidden";
    document.querySelector("#multiple-choice2").style.display = "none";
    document.querySelector("#multiple-choice3").style.visibility = "hidden";
    document.querySelector("#multiple-choice3").style.display = "none";
    document.querySelector("#multiple-choice4").style.visibility = "hidden";
    document.querySelector("#multiple-choice4").style.display = "none";
    document.querySelector("#multiple-choice5").style.visibility = "hidden";
    document.querySelector("#multiple-choice5").style.display = "none";
    //
}

// add event listener for click of start button
startButton.addEventListener("click", function(event) {
    // hides "start quiz" button
    document.querySelector("#start").style.visibility = "hidden";
    // replaces "Coding Quiz Challenge" with first question
    document.querySelector("#title").innerHTML = "Commonly used data types DO NOT include: ";
    // hide p element from beginning of quiz
    document.querySelector("p").style.visibility = "hidden";
    // make multiple choice buttons visible
    document.querySelector("#multiple-choice1").style.visibility = "visible";
    document.querySelector("#multiple-choice1").style.display = "block";
    // styling of question one header
    document.querySelector("#title").style.cssText = "font-size:20px;"
    // calls timer function 
    gameTimer();
});

// add event listener for click of multiple choice option buttons
document.querySelector("#btn1").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "The condition in an if/else statement is enclosed within ___.";
    document.querySelector("#multiple-choice1").style.visibility = "hidden";
    document.querySelector("#multiple-choice1").style.display = "none";
    document.querySelector("#multiple-choice2").style.visibility = "visible";
    document.querySelector("#multiple-choice2").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn2").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "The condition in an if/else statement is enclosed within ___.";
    document.querySelector("#multiple-choice1").style.visibility = "hidden";
    document.querySelector("#multiple-choice1").style.display = "none";
    document.querySelector("#multiple-choice2").style.visibility = "visible";
    document.querySelector("#multiple-choice2").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn3").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "The condition in an if/else statement is enclosed within ___.";
    document.querySelector("#multiple-choice1").style.visibility = "hidden";
    document.querySelector("#multiple-choice1").style.display = "none";
    document.querySelector("#multiple-choice2").style.visibility = "visible";
    document.querySelector("#multiple-choice2").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Correct!";
});

document.querySelector("#btn4").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "The condition in an if/else statement is enclosed within ___.";
    document.querySelector("#multiple-choice1").style.visibility = "hidden";
    document.querySelector("#multiple-choice1").style.display = "none";
    document.querySelector("#multiple-choice2").style.visibility = "visible";
    document.querySelector("#multiple-choice2").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

// add event listener for click of multiple choice option buttons
document.querySelector("#btn5").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "Arrays in JavaScript can be used to store ___.";
    document.querySelector("#multiple-choice2").style.visibility = "hidden";
    document.querySelector("#multiple-choice2").style.display = "none";
    document.querySelector("#multiple-choice3").style.visibility = "visible";
    document.querySelector("#multiple-choice3").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn6").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "Arrays in JavaScript can be used to store ___.";
    document.querySelector("#multiple-choice2").style.visibility = "hidden";
    document.querySelector("#multiple-choice2").style.display = "none";
    document.querySelector("#multiple-choice3").style.visibility = "visible";
    document.querySelector("#multiple-choice3").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Correct!";
});

document.querySelector("#btn7").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "Arrays in JavaScript can be used to store ___.";
    document.querySelector("#multiple-choice2").style.visibility = "hidden";
    document.querySelector("#multiple-choice2").style.display = "none";
    document.querySelector("#multiple-choice3").style.visibility = "visible";
    document.querySelector("#multiple-choice3").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn8").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "Arrays in JavaScript can be used to store ___.";
    document.querySelector("#multiple-choice2").style.visibility = "hidden";
    document.querySelector("#multiple-choice2").style.display = "none";
    document.querySelector("#multiple-choice3").style.visibility = "visible";
    document.querySelector("#multiple-choice3").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

// add event listener for click of multiple choice option buttons
document.querySelector("#btn9").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "String values must be enclosed within ___ when being assigned to variables.";
    document.querySelector("#multiple-choice3").style.visibility = "hidden";
    document.querySelector("#multiple-choice3").style.display = "none";
    document.querySelector("#multiple-choice4").style.visibility = "visible";
    document.querySelector("#multiple-choice4").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn10").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "String values must be enclosed within ___ when being assigned to variables.";
    document.querySelector("#multiple-choice3").style.visibility = "hidden";
    document.querySelector("#multiple-choice3").style.display = "none";
    document.querySelector("#multiple-choice4").style.visibility = "visible";
    document.querySelector("#multiple-choice4").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn11").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "String values must be enclosed within ___ when being assigned to variables.";
    document.querySelector("#multiple-choice3").style.visibility = "hidden";
    document.querySelector("#multiple-choice3").style.display = "none";
    document.querySelector("#multiple-choice4").style.visibility = "visible";
    document.querySelector("#multiple-choice4").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn12").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "String values must be enclosed within ___ when being assigned to variables.";
    document.querySelector("#multiple-choice3").style.visibility = "hidden";
    document.querySelector("#multiple-choice3").style.display = "none";
    document.querySelector("#multiple-choice4").style.visibility = "visible";
    document.querySelector("#multiple-choice4").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Correct!";
});

// add event listener for click of multiple choice option buttons
document.querySelector("#btn13").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    document.querySelector("#multiple-choice4").style.visibility = "hidden";
    document.querySelector("#multiple-choice4").style.display = "none";
    document.querySelector("#multiple-choice5").style.visibility = "visible";
    document.querySelector("#multiple-choice5").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn14").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    document.querySelector("#multiple-choice4").style.visibility = "hidden";
    document.querySelector("#multiple-choice4").style.display = "none";
    document.querySelector("#multiple-choice5").style.visibility = "visible";
    document.querySelector("#multiple-choice5").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn15").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    document.querySelector("#multiple-choice4").style.visibility = "hidden";
    document.querySelector("#multiple-choice4").style.display = "none";
    document.querySelector("#multiple-choice5").style.visibility = "visible";
    document.querySelector("#multiple-choice5").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Correct!";
});

document.querySelector("#btn16").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    document.querySelector("#multiple-choice4").style.visibility = "hidden";
    document.querySelector("#multiple-choice4").style.display = "none";
    document.querySelector("#multiple-choice5").style.visibility = "visible";
    document.querySelector("#multiple-choice5").style.display = "block";
    //
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});