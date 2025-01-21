const choiceSpan = 3

//create function for the PC's choice

function getComputerChoice(max) {
    let compChoice = Math.floor(Math.random() * max);
    return compChoice
}

//create function for the user's choice

let HumChoice

function getHumanChoice(arg) {
    arg = prompt("Make your choice:")
    arg = arg.toLowerCase()
    return arg
}

let humanScore = 0
let computerScore = 0

//function for a single game round

function playRound(humChoice, compChoice) {

}

console.log(getComputerChoice(choiceSpan))
console.log(getHumanChoice(HumChoice))