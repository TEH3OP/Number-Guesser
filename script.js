let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*9);

const getAbsoluteDistance = (firstNumber, secondNumber) => Math.abs(firstNumber - secondNumber);

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    if (humanGuess >= 0 && humanGuess<=9){
        const humanGuessDiff = getAbsoluteDistance(humanGuess, secretNumber);
        const computerGuessDiff = getAbsoluteDistance(computerGuess, secretNumber);
        return (humanGuessDiff <= computerGuessDiff);
    } else {
        alert('The number is out of range')
    }
}

const updateScore = winner => {
    if (winner === 'human'){
        humanScore ++;
    } else if (winner === 'computer'){
        computerScore ++;
    }
}

const advanceRound = () => currentRoundNumber++;