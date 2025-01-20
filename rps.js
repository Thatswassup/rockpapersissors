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

console.log(getComputerChoice());
console.log(getHumanChoice());