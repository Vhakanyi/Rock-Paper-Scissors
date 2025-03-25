// The Function to get the computer choice.

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    }else if (randomNumber <0.66) {
        return "paper";
    }else {
        return "scissors";
    }
}
// The Function to get the Human choice.

function getHumanChoice() {
    return prompt ("Enter: rock, paper or scissors").toLowerCase();
}

// Declare the players score variables globally

let humanScore = 0;
let computerScore = 0;

// function to play a single round.

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie game!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" &&  computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        console.log(`You Win ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }else{
        console.log(`You lost ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}


