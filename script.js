const choiceSpan = 3
function getComputerChoice(max) {
    let CompChoice = Math.floor(Math.random() * max);
    return CompChoice
}

let HumChoice

function getHumanChoice() {
    HumChoice = prompt("Make your choice:")
    return HumChoice
}

console.log(getComputerChoice(choiceSpan))
console.log(getHumanChoice())