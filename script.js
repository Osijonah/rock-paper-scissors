/* 
1. plan or pseudocode solution
2. write code
3. test code

responsive design
ui
music
won, and lost effects
 */


// declaration of DOM elements
const rockBtn = document.querySelector(`#rock-btn`);
const paperBtn = document.querySelector(`#paper-btn`);
const scissorsBtn = document.querySelector(`#scissors-btn`);
const humanScoreDisplay = document.querySelector(`#human-score`);
const computerScoreDisplay = document.querySelector(`#comp-score`);
const resultDisplay = document.querySelector(`#result-div`);
const roundResults = document.querySelector(`#round-display`);
const winningScoreInput = document.querySelector(`#winning-score`);
const optionsDiv = document.querySelector(`#options-div`);
const newGameBtn = document.querySelector(`#new-game`);

// initializing scores for user and the computer; and declaration of the winning score
    let humanScore = 0, computerScore = 0, highScore;
    
    winningScoreInput.addEventListener(`change`, (e) => { highScore = parseInt(e.target.value);
    }
);


// display score of the user and computer on the DOM
humanScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;

// function to determine winner of each round and the whole game 
const playRound = (humanChoice, computerChoice) => {

        if (humanChoice === `Rock` && computerChoice === `Paper` || humanChoice === `Paper` && computerChoice === `Scissors` || humanChoice === `Scissors` && computerChoice === `Rock`) {
            computerScore ++;
            roundResults.innerHTML = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScoreDisplay.textContent = computerScore;
        }
        else if (humanChoice === `Paper` && computerChoice === `Rock` || humanChoice === `Scissors` && computerChoice === `Paper` || humanChoice === `Rock` && computerChoice === `Scissors`) {
            humanScore ++;
            roundResults.innerHTML = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScoreDisplay.textContent = humanScore;
        }

    // determining if the game should stop
       if ( humanScore === highScore ) {
        
           optionsDiv.innerHTML = ``;
           setTimeout(()=>{
                roundResults.innerHTML = ``;
                resultDisplay.innerHTML =  `You won by ${humanScore} : ${computerScore}`;

            }, 2000)
            
        }
        else if ( computerScore === highScore ) {
            resultDisplay.innerHTML =  `You lost by ${humanScore} : ${computerScore}`;
            optionsDiv.innerHTML = ``;
            setTimeout(()=>{
                roundResults.innerHTML = ``;
                resultDisplay.innerHTML =  `You won by ${humanScore} : ${computerScore}`;
            }, 2000)
        }
        
    }
    
    // determining the computer's selection
    const getComputerChoice = () => {
    let choiceNumber = Math.floor(Math.random() * 10);
    if (choiceNumber<=3) return `rock`;
    else if (choiceNumber>3 && choiceNumber<=6) return `paper`;
    else if (choiceNumber>6) return `scissors`;    
}

const computerChoice = () => {
    let compChoice = getComputerChoice();
    
    return compChoice.charAt(0).toUpperCase() + compChoice.slice(1).toLowerCase();
}


// program for rock button
rockBtn.addEventListener(`click`, (event) => {
    if ( computerScore < highScore && humanScore < highScore ) {
    let humanChoice = event.target.innerText.charAt(0).toUpperCase() + event.target.innerText.slice(1).toLowerCase();
    roundResults.innerHTML = ``;
    playRound( humanChoice, computerChoice());
    
}
}
)

// program for the paper button
paperBtn.addEventListener(`click`, (event) => {
    if ( computerScore < highScore && humanScore < highScore ) {
    let humanChoice = event.target.innerText.charAt(0).toUpperCase() + event.target.innerText.slice(1).toLowerCase();
    roundResults.innerHTML = ``;
    playRound( humanChoice, computerChoice());
} 
}
)

// program for the scissors button
scissorsBtn.addEventListener(`click`, (event) => {
    if ( computerScore < highScore && humanScore < highScore ) {
    let humanChoice = event.target.innerText.charAt(0).toUpperCase() + event.target.innerText.slice(1).toLowerCase();
    roundResults.innerHTML = ``;
    playRound( humanChoice, computerChoice());
    } 
} 
)   

// refresh the game by clicking the new game button
newGameBtn.addEventListener(`click`, ()=>window.location.reload());

