// makes variable for start button - finds the button in html with id
let startButton = document.querySelector("#start");

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

        // if (document.querySelector("#title").innerHTML = "All done!") {
        //     // setTimeout??
        // }
    }, 1000);
}

// hide multiple choice buttons on page load, as well as "All Done!" page"
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
    document.querySelector("#all-done").style.visibility = "hidden";
    document.querySelector("#all-done").style.display = "none";
}

// add event listener for click of start button
startButton.addEventListener("click", function(event) {
    // hides "start quiz" button
    document.querySelector("#start").style.visibility = "hidden";
    // replaces "Coding Quiz Challenge" with first question
    document.querySelector("#title").innerHTML = "Commonly used data types DO NOT include: ";
    // hide p element from beginning of quiz
    document.querySelector("p").style.visibility = "hidden";
    // makes first multiple choice question buttons visible
    document.querySelector("#multiple-choice1").style.visibility = "visible";
    document.querySelector("#multiple-choice1").style.display = "block";
    // styling of question one header
    document.querySelector("#title").style.cssText = "font-size:20px;"
    // calls timer function 
    gameTimer();
});

// SECOND QUESTION

// add event listener for click of multiple choice option buttons
document.querySelector("#btn1").addEventListener("click", function(event) {
    // replaces first question with second question text
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
    // replaces first question with second question text
    document.querySelector("#title").innerHTML = "The condition in an if/else statement is enclosed within ___.";
    // hide first question buttons
    document.querySelector("#multiple-choice1").style.visibility = "hidden";
    document.querySelector("#multiple-choice1").style.display = "none";
    // make second question buttons visible
    document.querySelector("#multiple-choice2").style.visibility = "visible";
    document.querySelector("#multiple-choice2").style.display = "block";
    // tell user their answer is wrong by displaying in empty div
    document.querySelector("#answer").innerHTML = "Wrong!";
    // deducts 15 seconds from time
    secondsLeft -= 15;
});

document.querySelector("#btn3").addEventListener("click", function(event) {
    // replaces first question with second question text
    document.querySelector("#title").innerHTML = "The condition in an if/else statement is enclosed within ___.";
    document.querySelector("#multiple-choice1").style.visibility = "hidden";
    document.querySelector("#multiple-choice1").style.display = "none";
    document.querySelector("#multiple-choice2").style.visibility = "visible";
    document.querySelector("#multiple-choice2").style.display = "block";
    document.querySelector("#answer").innerHTML = "Correct!";
});

document.querySelector("#btn4").addEventListener("click", function(event) {
    // replaces first question with second question text
    document.querySelector("#title").innerHTML = "The condition in an if/else statement is enclosed within ___.";
    document.querySelector("#multiple-choice1").style.visibility = "hidden";
    document.querySelector("#multiple-choice1").style.display = "none";
    document.querySelector("#multiple-choice2").style.visibility = "visible";
    document.querySelector("#multiple-choice2").style.display = "block";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

// THIRD QUESTION

// add event listener for click of multiple choice option buttons
document.querySelector("#btn5").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "Arrays in JavaScript can be used to store ___.";
    document.querySelector("#multiple-choice2").style.visibility = "hidden";
    document.querySelector("#multiple-choice2").style.display = "none";
    document.querySelector("#multiple-choice3").style.visibility = "visible";
    document.querySelector("#multiple-choice3").style.display = "block";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn6").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "Arrays in JavaScript can be used to store ___.";
    document.querySelector("#multiple-choice2").style.visibility = "hidden";
    document.querySelector("#multiple-choice2").style.display = "none";
    document.querySelector("#multiple-choice3").style.visibility = "visible";
    document.querySelector("#multiple-choice3").style.display = "block";
    document.querySelector("#answer").innerHTML = "Correct!";
});

document.querySelector("#btn7").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "Arrays in JavaScript can be used to store ___.";
    document.querySelector("#multiple-choice2").style.visibility = "hidden";
    document.querySelector("#multiple-choice2").style.display = "none";
    document.querySelector("#multiple-choice3").style.visibility = "visible";
    document.querySelector("#multiple-choice3").style.display = "block";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn8").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "Arrays in JavaScript can be used to store ___.";
    document.querySelector("#multiple-choice2").style.visibility = "hidden";
    document.querySelector("#multiple-choice2").style.display = "none";
    document.querySelector("#multiple-choice3").style.visibility = "visible";
    document.querySelector("#multiple-choice3").style.display = "block";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

// FOURTH QUESTION

// add event listener for click of multiple choice option buttons
document.querySelector("#btn9").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "String values must be enclosed within ___ when being assigned to variables.";
    document.querySelector("#multiple-choice3").style.visibility = "hidden";
    document.querySelector("#multiple-choice3").style.display = "none";
    document.querySelector("#multiple-choice4").style.visibility = "visible";
    document.querySelector("#multiple-choice4").style.display = "block";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn10").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "String values must be enclosed within ___ when being assigned to variables.";
    document.querySelector("#multiple-choice3").style.visibility = "hidden";
    document.querySelector("#multiple-choice3").style.display = "none";
    document.querySelector("#multiple-choice4").style.visibility = "visible";
    document.querySelector("#multiple-choice4").style.display = "block";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn11").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "String values must be enclosed within ___ when being assigned to variables.";
    document.querySelector("#multiple-choice3").style.visibility = "hidden";
    document.querySelector("#multiple-choice3").style.display = "none";
    document.querySelector("#multiple-choice4").style.visibility = "visible";
    document.querySelector("#multiple-choice4").style.display = "block";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn12").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "String values must be enclosed within ___ when being assigned to variables.";
    document.querySelector("#multiple-choice3").style.visibility = "hidden";
    document.querySelector("#multiple-choice3").style.display = "none";
    document.querySelector("#multiple-choice4").style.visibility = "visible";
    document.querySelector("#multiple-choice4").style.display = "block";
    document.querySelector("#answer").innerHTML = "Correct!";
});

// FIFTH QUESTION

// add event listener for click of multiple choice option buttons
document.querySelector("#btn13").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    document.querySelector("#multiple-choice4").style.visibility = "hidden";
    document.querySelector("#multiple-choice4").style.display = "none";
    document.querySelector("#multiple-choice5").style.visibility = "visible";
    document.querySelector("#multiple-choice5").style.display = "block";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn14").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    document.querySelector("#multiple-choice4").style.visibility = "hidden";
    document.querySelector("#multiple-choice4").style.display = "none";
    document.querySelector("#multiple-choice5").style.visibility = "visible";
    document.querySelector("#multiple-choice5").style.display = "block";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn15").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    document.querySelector("#multiple-choice4").style.visibility = "hidden";
    document.querySelector("#multiple-choice4").style.display = "none";
    document.querySelector("#multiple-choice5").style.visibility = "visible";
    document.querySelector("#multiple-choice5").style.display = "block";
    document.querySelector("#answer").innerHTML = "Correct!";
});

document.querySelector("#btn16").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    document.querySelector("#multiple-choice4").style.visibility = "hidden";
    document.querySelector("#multiple-choice4").style.display = "none";
    document.querySelector("#multiple-choice5").style.visibility = "visible";
    document.querySelector("#multiple-choice5").style.display = "block";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

// SCORE PAGE


// add event listener for click of multiple choice option buttons
document.querySelector("#btn17").addEventListener("click", function(event) {
    // makes score page visible
    document.querySelector("#title").innerHTML = "All done!";
    document.querySelector("#multiple-choice5").style.visibility = "hidden";
    document.querySelector("#multiple-choice5").style.display = "none";
    document.querySelector("#all-done").style.visibility = "visible";
    document.querySelector("#all-done").style.display = "block";
    document.querySelector("p").style.display = "none";
    document.querySelector("#start").style.display = "none";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn18").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "All done!";
    document.querySelector("#multiple-choice5").style.visibility = "hidden";
    document.querySelector("#multiple-choice5").style.display = "none";
    document.querySelector("#all-done").style.visibility = "visible";
    document.querySelector("#all-done").style.display = "block";
    document.querySelector("p").style.display = "none";
    document.querySelector("#start").style.display = "none";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn19").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "All done!";
    document.querySelector("#multiple-choice5").style.visibility = "hidden";
    document.querySelector("#multiple-choice5").style.display = "none";
    document.querySelector("#all-done").style.visibility = "visible";
    document.querySelector("#all-done").style.display = "block";
    document.querySelector("p").style.display = "none";
    document.querySelector("#start").style.display = "none";
    document.querySelector("#answer").innerHTML = "Wrong!";
    secondsLeft -= 15;
});

document.querySelector("#btn20").addEventListener("click", function(event) {
    document.querySelector("#title").innerHTML = "All done!";
    document.querySelector("#multiple-choice5").style.visibility = "hidden";
    document.querySelector("#multiple-choice5").style.display = "none";
    document.querySelector("#all-done").style.visibility = "visible";
    document.querySelector("#all-done").style.display = "block";
    document.querySelector("p").style.display = "none";
    document.querySelector("#start").style.display = "none";
    document.querySelector("#answer").innerHTML = "Correct!";
});