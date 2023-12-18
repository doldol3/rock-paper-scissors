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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));