/* 
1. plan or pseudocode solution
playGame(5) call
as long as round is not 0 call playRound

2. write code
3. test code
 */

const rockBtn = document.querySelector(`#rock-btn`);
const paperBtn = document.querySelector(`#paper-btn`);
const scissorsBtn = document.querySelector(`#scissors-btn`);
const humanScoreDisplay = document.querySelector(`#human-score`);
const computerScoreDisplay = document.querySelector(`#comp-score`);
const resultDisplay = document.querySelector(`#result-div`);




    
    let humanScore = 0, computerScore = 0; highScore = 5;
humanScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;


const playRound = (humanChoice, computerChoice) => {

        if (humanChoice === `Rock` && computerChoice === `Paper` || humanChoice === `Paper` && computerChoice === `Scissors` || humanChoice === `Scissors` && computerChoice === `Rock`) {
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
        }
        else if (humanChoice === `Paper` && computerChoice === `Rock` || humanChoice === `Scissors` && computerChoice === `Paper` || humanChoice === `Rock` && computerChoice === `Scissors`) {
            humanScore ++;
            humanScoreDisplay.textContent = humanScore;
        }

       if ( humanScore === highScore ) {
            resultDisplay.innerHTML =  `You won by ${humanScore} : ${computerScore}`
        }
        else if ( computerScore === highScore ) {
            resultDisplay.innerHTML =  `You lost by ${humanScore} : ${computerScore}`
        }
}


const getComputerChoice = () => {
    let choiceNumber = Math.floor(Math.random() * 10);
    if (choiceNumber<=3) return `rock`
    else if (choiceNumber>3 && choiceNumber<=6) return `paper`
    else if (choiceNumber>6) return `scissors`    
}

const computerChoice = () => {
    let compChoice = getComputerChoice();
    
    return compChoice.charAt(0).toUpperCase() + compChoice.slice(1).toLowerCase();
}



rockBtn.addEventListener(`click`, () => {
    if ( computerScore < highScore && humanScore < highScore ) {
    let humanChoice = event.target.innerText.charAt(0).toUpperCase() + event.target.innerText.slice(1).toLowerCase()
    playRound( humanChoice, computerChoice())
    } 
}
)
paperBtn.addEventListener(`click`, () => {
    if ( computerScore < highScore && humanScore < highScore ) {
    let humanChoice = event.target.innerText.charAt(0).toUpperCase() + event.target.innerText.slice(1).toLowerCase()
    playRound( humanChoice, computerChoice())
} 
}
)
scissorsBtn.addEventListener(`click`, () => {
    if ( computerScore < highScore && humanScore < highScore ) {
    let humanChoice = event.target.innerText.charAt(0).toUpperCase() + event.target.innerText.slice(1).toLowerCase()
    playRound( humanChoice, computerChoice())
    } 
} 
)   