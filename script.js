/* 
1. plan or pseudocode solution

playGame(5) call
as long as round is not 0 call playRound


2. write code
3. test code
 */





// console.log(playRound(humanChoice, computerChoice));

const playGame = ( rounds ) => {
    
    let humanScore = 0, computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    

        if (humanChoice === `Rock` && computerChoice === `Paper` || humanChoice === `Paper` && computerChoice === `Scissors` || humanChoice === `Scissors` && computerChoice === `Rock`) {
            computerScore ++;
            return `You lose! ${computerChoice} beats ${humanChoice}`
        }
        else if (humanChoice === `Paper` && computerChoice === `Rock` || humanChoice === `Scissors` && computerChoice === `Paper` || humanChoice === `Rock` && computerChoice === `Scissors`) {
            humanScore ++;
            return `You win! ${humanChoice} beats ${computerChoice}`
        }
}

for ( ; rounds > 0; rounds-- ) {
    const getComputerChoice = () => {
        let choiceNumber = Math.floor(Math.random() * 10);
        if (choiceNumber<=3) return `rock`
        else if (choiceNumber>3 && choiceNumber<=6) return `paper`
        else if (choiceNumber>6) return `scissors`    
    }
    
    let compChoice = getComputerChoice();
    
    let computerChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1).toLowerCase();
    
    
    const getHumanChoice = () => {
        let promptChoice = prompt(`rock, paper or scissors? `)
        
        return promptChoice.charAt(0).toUpperCase() + promptChoice.slice(1).toLowerCase();
        
    }
    let humanChoice = getHumanChoice();
    console.log(`human choice: ${humanChoice}, computer choice: ${computerChoice}`);
    
    if ( humanChoice !== computerChoice ) playRound(humanChoice, computerChoice);
    else if (humanChoice === computerChoice || humanScore === computerScore) {rounds++}
}

// deal with wrong user input

// if ( humanScore === computerScore ) console.log(`Deuce! Score is: Your Score ${humanScore} : ${computerScore} Computer Score`);

if ( humanScore > computerScore ) {
    console.log(`You won! Score is: Your Score ${humanScore} : ${computerScore} Computer Score`);
}
else if ( humanScore < computerScore ) {
    console.log(`You lost! Score is: Your Score ${humanScore} : ${computerScore} Computer Score`);
    
}

}

playGame(4);