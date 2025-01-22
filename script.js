//create function for the PC's choice

function getComputerChoice() {
    let compChoiceArg = Math.floor(Math.random() * 3);
    return compChoiceArg
}

//create function for the user's choice

function getHumanChoice() {
    let humChoicearg
    humChoicearg = prompt("Make your choice:")
    humChoicearg = humChoicearg.toLowerCase()
    return humChoicearg
}

let humanScore = 0
let computerScore = 0

//function for a single game round

function playRound(compChoice, humChoice) { //playRound logic: [0 is rock, 1 is paper, 2 is scissors]
     //check if user's choice is correct
    if ((humChoice == "rock") || (humChoice == "paper") || (humChoice == "scissors")) {
        //losing scenarios
        if (compChoice == 0 && humChoice == "scissors") {
            choiceDisplay(computerSelection, humanSelection)
            console.log("You lose! Rock beats scissors.")
            ++computerScore
        } else if (compChoice == 1 && humChoice == "rock") {
            choiceDisplay(computerSelection, humanSelection)
            console.log("You lose! Paper beats rock.")
            ++computerScore
        } else if (compChoice == 2 && humChoice == "paper") {
            choiceDisplay(computerSelection, humanSelection)
            console.log("You lose! Scissors beats paper.")
            ++computerScore         
        //winning scenarios   
        } else if (compChoice == 0 && humChoice == "paper") {
            choiceDisplay(computerSelection, humanSelection)  
            console.log("You win! Paper beats rock.")
            ++humanScore
        } else if (compChoice == 1 && humChoice == "scissors") {
            choiceDisplay(computerSelection, humanSelection)
            console.log("You win! Scissors beats paper.")
            ++humanScore
        } else if (compChoice == 2 && humChoice == "rock") {
            choiceDisplay(computerSelection, humanSelection)
            console.log("You win! Rock beats scissors.")
            ++humanScore
        } else {
            choiceDisplay(computerSelection, humanSelection)
            console.log("It's a tie!")
        }
    } else {
        console.log(`What is ${humChoice}? Your choice is incorrect, you can choose rock, paper or scissors only. Try again.`)
        --counter
    }
}

//create function displaying choices of players in console

function choiceDisplay (compChoiceArg, humChoiceArg) {
    let compChoice
    if (compChoiceArg == 0) {
        compChoice = "rock"
    } else if (compChoiceArg == 1) {
        compChoice = "paper"
    } else if (compChoiceArg == 2) {
        compChoice = "scissors"
    }
    console.log("Computer chose " + compChoice + ".")
    console.log("You chose " + humChoiceArg + ".")
}

let computerSelection
let humanSelection
let counter = 1;

function playGame() {
    
    if (counter < 6) {
        console.log(`Round ${counter}`)
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
        ++counter
        playGame()
    } else {
        if (humanScore < computerScore) {
            console.log(`Final score: you - ${humanScore}, computer - ${computerScore}. You lost the game. :(`)
        } else if (humanScore > computerScore) {console.log(`Final score: you - ${humanScore}, computer - ${computerScore}. You won the game! :)`)}
        else {console.log(`Final score: you - ${humanScore}, computer - ${computerScore}. It's a tie!`)}
    }
}

playGame()
