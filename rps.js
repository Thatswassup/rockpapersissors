function getComputerChoice (){
    let result = Math.floor(Math.random() * 3)
    switch (result){ 
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "sissors"    
    }
}

function getHumanChoice(){
    let answer = prompt("Type 1,2 or 3 for rock, paper, or sissors respectively");
    switch (answer){
        case "1":
            return "rock";
        case "2":
            return "paper";
        case "3":
            return "sissors"
    }
}

function playRound (humanChoice, computerChoice){
    if ((humanChoice == "rock") && (computerChoice == "rock")){
        console.log("It's a tie");
    } 
    else if ((humanChoice == "rock") && (computerChoice == "paper")){
        computerScore++;
        console.log("You Lose");
        
    }
    else if ((humanChoice == "rock") && (computerChoice == "sissors")){
        humanScore++;
        console.log("You Win");

    }
    else if ((humanChoice == "paper") && (computerChoice == "rock")){
        humanScore++;
        console.log("You Win");

    }
    else if ((humanChoice == "paper") && (computerChoice == "paper")){
        console.log("It's a tie");

    }
    else if ((humanChoice == "paper") && (computerChoice == "sissors")){
        computerScore++;
        console.log("You Lose");

    }
    else if ((humanChoice == "sissors") && (computerChoice == "rock")){
        computerScore++;
        console.log("You Lose");

    }
    else if ((humanChoice == "sissors") && (computerChoice == "paper")){
        humanScore++;
        console.log("You Win");

    }
    else if ((humanChoice == "sissors") && (computerChoice == "sissors")){
        console.log("It's a tie");

    }
    else{

        console.log("Invalid");
    }
}

function playGame(){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}

let humanScore = 0 ;
let computerScore = 0 ;


playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore > computerScore){
    console.log("You Win");
}
else if (humanScore < computerScore){
    console.log("You Lose");
}
else{
    console.log("Draw");
}




