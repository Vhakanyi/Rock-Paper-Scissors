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


