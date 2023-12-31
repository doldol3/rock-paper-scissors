const computerHand = [
    "Rock", 
    "Paper", 
    "Scissors"
];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let result = computerHand[randomNumber];
    return result;
}

function playRound(playerSelection, computerSelection) {
    const playerChoiceLower = playerSelection.toLowerCase();
    const computerChoiceLower = computerSelection.toLowerCase();

    if (playerChoiceLower == computerChoiceLower) {
        return 'draw';
    } else if (
        (playerChoiceLower == 'rock' && computerChoiceLower == 'scissors') ||
        (playerChoiceLower == 'scissors' && computerChoiceLower == 'paper') ||
        (playerChoiceLower == 'paper' && computerChoiceLower == 'rock')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: ${result}`);

        if (result === 'You win!') {
            playerScore++;
        } else if (result === 'You lose!') {
            computerScore++;
        }
    }

    console.log('Game Over!');
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (playerScore === 3) {
        console.log('Congratulations! You win the game!');
    } else if (computerScore === 3) {
        console.log('Sorry! You lose the game.');
    } else {
        console.log('It\'s a tie! No clear winner.');
    }

}

game();