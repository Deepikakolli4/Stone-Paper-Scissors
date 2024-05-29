let userScore = 0;
let compScore = 0;
let choices = ['stone', 'paper', 'scissors'];
let choice1;
let choice2;
let choicesMade = 0;
let el = document.createElement("div");
el.style.backgroundColor = "yellow";
document.body.appendChild(el);
let paperBtn = document.querySelector("#paper");
let stoneBtn = document.querySelector("#stone");
let scissorsBtn = document.querySelector("#scissors");
getChoices();
function getChoices() {
    paperBtn.addEventListener("click", () => {
        console.log("User choice is paper");
        choice1 = 'paper';
        disableButtons();
        playRound();
    });
    stoneBtn.addEventListener("click", () => {
        console.log("User choice is stone");
        choice1 = 'stone';
        disableButtons();
        playRound();
    });
    scissorsBtn.addEventListener("click", () => {
        console.log("User choice is scissors");
        choice1 = 'scissors';
        disableButtons();
        playRound();
    });
}

function disableButtons() {
    paperBtn.disabled = true;
    stoneBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function enableButtons() {
    paperBtn.disabled = false;
    stoneBtn.disabled = false;
    scissorsBtn.disabled = false;
}

function playRound() {
    getComputerChoice();
    updateScores();
    choicesMade++;
    if (choicesMade === 5) {
        evaluate();
        setTimeout(resetGame, 2000);
    } else {
        enableButtons();
    }
}

function updateScores() {
    let userScoreDisplay = document.querySelector(".user-score p b");
    let compScoreDisplay = document.querySelector(".comp-score p b");
    if (choice1 === choice2) {
        return;
    } else {
        if ((choice1 === 'paper' && choice2 === 'stone') ||
            (choice1 === 'stone' && choice2 === 'scissors') ||
            (choice1 === 'scissors' && choice2 === 'paper')) {
            userScore++;
            userScoreDisplay.innerHTML = userScore;
        } else {
            compScore++;
            compScoreDisplay.innerHTML = compScore;
        }
    }
}

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    choice2 = choices[index];
    console.log(`Computer Choice: ${choices[index]}`);
    return choice2;
}

function evaluate() {
    console.log(`Computer Score: ${compScore}`);
    console.log(`User Score: ${userScore}`);
    let resultText;
    if (userScore > compScore) {
        resultText = "Winner is user, Try again you have 5 chances";
    } else if (userScore === compScore) {
        resultText = "It is a draw, Try again you have 5 chances";
    } else {
        resultText = "Winner is computer, Try again you have 5 chances";
    }
    console.log(resultText);
    el.textContent = resultText;
}

function resetGame() {
    choicesMade = 0;
    userScore = 0;
    compScore = 0;
    el.textContent = "Resetting game...";
    let userScoreDisplay = document.querySelector(".user-score p b");
    let compScoreDisplay = document.querySelector(".comp-score p b");
    userScoreDisplay.innerHTML = userScore;
    compScoreDisplay.innerHTML = compScore;
    setTimeout(() => {
        el.textContent = "";
        enableButtons();
    }, 1000);
}
