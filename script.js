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

function playGame() {
    const humanChoice1 = getHumanChoice();
    const computerChoice1 = getComputerChoice();
    playRound(humanChoice1, computerChoice1);
    
    const humanChoice2 = getHumanChoice();
    const computerChoice2 = getComputerChoice();
    playRound(humanChoice2, computerChoice2);

    const humanChoice3 = getHumanChoice();
    const computerChoice3 = getComputerChoice();
    playRound(humanChoice3, computerChoice3);

    const humanChoice4 = getHumanChoice();
    const computerChoice4= getComputerChoice();
    playRound(humanChoice4, computerChoice4);

    const humanChoice5 = getHumanChoice();
    const computerChoice5 = getComputerChoice();
    playRound(humanChoice5, computerChoice5);

    // display final score

    console.log(`Final Score - You: ${humanScore}, computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You Win the game");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game");
    } else {
        console.log("Its a tie game!");
    }

}

playGame();