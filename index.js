let choiceArr = ["rock", "paper", "scissors"]
let roundWinner = '';
let gameWinner = '';
let playerWinCount = 0;
let computerWinCount = 0;
let round = 0;


const btn = document.querySelector('#startbtn');
const gameWrapper = document.querySelector('.game-wrapper');
const startScreen = document.querySelector('.game-start-screen');
const inputs = document.querySelectorAll('#inp');
const pres = document.querySelector('#pres');
const cres = document.querySelector('#cres');
const presFig = document.querySelector('#pres i');
const roundCounterElement = document.querySelector('#roundcounter');
const roundWinnerElement = document.querySelector('#roundwinner');
const playerTimesWon = document.querySelector('#ptw');
const computerTimesWon = document.querySelector('#ctw');
const finalWinner = document.querySelector('#final-winner');
const endScreen = document.querySelector('.game-end-screen')
const playerFinal = document.querySelector('.player-final-count')
const computerFinal = document.querySelector('.computer-final-count')
const replay = document.querySelector('.replay')

btn.onclick = () => {
    startScreen.setAttribute('style', 'display: none;');
    gameWrapper.setAttribute('style', `height: 800px;
                                       width: 1200px;
                                       margin-top: 3rem;
                                       flex-direction: column;
                                       display: flex;`);
};

replay.onclick = () => {
    location.reload();
};

function getComputerChoice() {
    let choice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return choice;
}

function playOneRound(computerChoice, playerChoice) {
    let roundResult = ""
    if(playerChoice === computerChoice) {
        roundResult = "This round was a tie";
    } else if ((playerChoice === "rock" && computerChoice === "scissors")
      || (playerChoice === "paper" && computerChoice === "rock") 
      || (playerChoice === "scissors" && computerChoice === "paper")) {
        roundResult = "Player won this round";
    } else {
        roundResult = "Computer won this round";
    } 
    return roundResult;
}

function endGame(computerWinCount, playerWinCount) {
    gameWrapper.setAttribute('style', 'display: none;');
    endScreen.setAttribute('style', `height: 800px;
                                           margin-top: 3rem;
                                           display: flex;
                                           flex-direction: column;
                                           justify-content: center;`);
    playerFinal.textContent = `Computer won ${computerWinCount} rounds`;
    computerFinal.textContent = `Player won ${playerWinCount} rounds`;
    if(computerWinCount > playerWinCount) {
        finalWinner.textContent = "Winner: Computer";
    } else if(computerWinCount < playerWinCount) {
        finalWinner.textContent = "Winner: Player";
    } else {
        finalWinner.textContent = "Tie";
    }
}

function playGame() {
    let pChoice;
    let cChoice;
    inputs.forEach((input) => {
        input.onclick = () => {
            round += 1;

            roundCounterElement.textContent = `Round ${round}`;
            pres.setAttribute("class", `${input.className}`);
            if(input.className === 'fa fa-hand-rock-o') {
                pChoice = 'rock';
            } else if (input.className === 'fa fa-hand-paper-o') {
                pChoice = 'paper';
            } else {
                pChoice = 'scissors';
            }

            cChoice = getComputerChoice();

            if(cChoice === "rock") {
                cres.setAttribute("class", 'fa fa-hand-rock-o');
            } else if (cChoice === "paper") {
                cres.setAttribute("class", 'fa fa-hand-paper-o');
            } else {
                cres.setAttribute("class", 'fa fa-hand-scissors-o');
            }

            roundWinner = playOneRound(cChoice, pChoice);

            if (roundWinner === "Player won this round") {
                playerWinCount += 1;
                roundWinnerElement.textContent = "You won this round";
                playerTimesWon.textContent = `Player won ${playerWinCount} rounds`;
            } else if (roundWinner === "Computer won this round") {
                roundWinnerElement.textContent = "Computer won this round";
                computerWinCount += 1;
                computerTimesWon.textContent = `Computer won ${computerWinCount} rounds`;
            } else {
                roundWinnerElement.textContent = "Tie";
            }

            if(round == 5){
                endGame(computerWinCount, playerWinCount);
            }
        };
    });
}

playGame();



// function game() {
//     let playerWins = 0;
//     let computerWins = 0;
//     let finalResult = "";
//     for (let i = 0; i < 5; i++) {
//         let cc = getComputerChoice();
//         let pc = getPlayerChoice();
//         let resultRound = playOneRound(cc, pc); 
//         if(resultRound === "This round was a tie"){
//             continue;
//         } else if (resultRound === "Player won this round") {
//             playerWins += 1;
//         } else {
//             computerWins += 1;
//         }
//     }
//     if(playerWins === computerWins) {
//         finalResult = "Game result: tie";
//     } else if (playerWins > computerWins) {
//         finalResult = "Game result: player won";
//     } else {
//         finalResult = "Game result: computer won";
//     }
//     console.log(finalResult);
//     return finalResult;
// }

// game();


