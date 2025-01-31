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

function getHumanChoice(e) {
    // let input = prompt("Enter choice:");
    // console.log(input)

    let input = e.target.textContent;

    return input;
}

// const humanSelection = getHumanChoice();
// const cpuSelection = getComputerChoice();

function playRound(e) {
    let humanSelection = getHumanChoice(e);
    let cpuSelection = getComputerChoice();
    console.log(`${humanSelection} ${cpuSelection}`)

    if (humanSelection > cpuSelection) {
        humanScore += 1;
        resultText = `Incremented human score to ${humanScore}`;
    } else {
        cpuScore +=1;
        resultText = `Incremented CPU score to ${cpuScore}`;
    }

    divResults.textContent = resultText;
}

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

const divResults = document.querySelector(".results");

function test() {
    console.log("Testing");
}

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
// }

// playGame();