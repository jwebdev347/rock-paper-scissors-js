console.log("Hello world");

let humanScore = 0;
let cpuScore = 0;

function getComputerChoice() {
    let rand_num = Math.random();
    let cpu_choice = "paper";

    if (rand_num < 0.33) {
        cpu_choice = "scissors";
    } else if (rand_num < 0.67) {
        cpu_choice = "rock";
    }

    return cpu_choice;
}

function getHumanChoice() {
    let input = prompt("Enter choice:");
    console.log(input)

    return input;
}

// const humanSelection = getHumanChoice();
// const cpuSelection = getComputerChoice();

function playRound() {
    let humanSelection = getHumanChoice();
    let cpuSelection = getComputerChoice();
    console.log(`${humanSelection} ${cpuSelection}`)

    if (humanSelection > cpuSelection) {
        humanScore += 1;
        console.log(`Incremented human score to ${humanScore}`)
    } else {
        cpuScore +=1;
        console.log(`Incremented CPU score to ${cpuScore}`)
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

playGame();