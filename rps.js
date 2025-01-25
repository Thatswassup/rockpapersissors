// Variables to hold scores
let humanScore = 0;
let computerScore = 0;

// Function to get computer's choice randomly
function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    switch (result) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Function to play a round
function playRound(humanChoice, computerChoice) {
    let result = '';
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = "You Win!";
    } else {
        computerScore++;
        result = "You Lose!";
    }

    // Update the scoreboard
    updateScoreboard(result);
}

// Function to update the scoreboard on the page
function updateScoreboard(result) {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = `
        <p>Human Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p>
        <p>Result: ${result}</p>
    `;

    // Check if there's a winner
    if (humanScore === 5) {
        scoreboard.innerHTML += "<p>You won the game!</p>";
        resetGame();
    } else if (computerScore === 5) {
        scoreboard.innerHTML += "<p>The computer won the game!</p>";
        resetGame();
    }
}

// Function to reset the game after someone wins
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    setTimeout(() => {
        updateScoreboard("Start a new game!");
    }, 2000); // Delay the reset so the user can see the winner
}

// Function to handle human player's choice when a button is clicked
function getHumanChoice(event) {
    const humanChoice = event.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

// Creating the buttons for each choice
const btn1 = document.createElement("button");
btn1.id = "btn1";
btn1.textContent = "Rock";
btn1.addEventListener('click', getHumanChoice);

const btn2 = document.createElement("button");
btn2.id = "btn2";
btn2.textContent = "Paper";
btn2.addEventListener('click', getHumanChoice);

const btn3 = document.createElement("button");
btn3.id = "btn3";
btn3.textContent = "Scissors";
btn3.addEventListener('click', getHumanChoice);

// Append the buttons to the page
const header = document.querySelector(".divider");
header.appendChild(btn1);
header.appendChild(btn2);
header.appendChild(btn3);

// Initial scoreboard display
updateScoreboard("Start playing by choosing Rock, Paper, or Scissors!");
