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
    if (playerSelection === computerSelection) {
        console.log('Draw');
        return 'draw';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        console.log('You Win!');
        return 'win';
    } else {
        console.log('You Lose!');
        return 'lose';
    }
}