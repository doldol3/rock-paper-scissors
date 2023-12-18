const computerHand = [
    "Rock", 
    "Paper", 
    "Scissors"
];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let result = computerHand[randomNumber];
    console.log(result)
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log('You Lose!')
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log('You Win!')
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log('You Lose!')
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log('You Win!')
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log('You Lose!')
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log('You Win!')
    } else if (playerSelection == computerSelection) {
        console.log('Draw')
    }
}