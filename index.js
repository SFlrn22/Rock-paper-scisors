let choiceArr = ["rock", "paper", "scisors"]

function getComputerChoice() {
    let choice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return choice;
}

function getPlayerChoice() {
    let playerChoice = (window.prompt("Make your choice (rock/paper/scisors):")).toLowerCase();
    return playerChoice;
}

function playOneRound(computerChoice, playerChoice) {
    let roundResult = ""
    if(playerChoice === computerChoice) {
        roundResult = "This round was a tie";
    } else if ((playerChoice === "rock" && computerChoice === "scisors")
      || (playerChoice === "paper" && computerChoice === "rock") 
      || (playerChoice === "scisors" && computerChoice === "paper")) {
        roundResult = "Player won this round";
    } else {
        roundResult = "Computer won this round";
    }
    console.log(roundResult);
    return roundResult;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let finalResult = "";
    for (let i = 0; i < 5; i++) {
        let cc = getComputerChoice();
        let pc = getPlayerChoice();
        let resultRound = playOneRound(cc, pc); 
        if(resultRound === "This round was a tie"){
            continue;
        } else if (resultRound === "Player won this round") {
            playerWins += 1;
        } else {
            computerWins += 1;
        }
    }
    if(playerWins === computerWins) {
        finalResult = "Game result: tie";
    } else if (playerWins > computerWins) {
        finalResult = "Game result: player won";
    } else {
        finalResult = "Game result: computer won";
    }
    console.log(finalResult);
    return finalResult;
}

game();


