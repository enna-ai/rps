const choices = ["Lapis", "Papyrus", "Scalpellus"];

let player = {
    currentChoice: ''
}
let computer = {
    computerSelection: choices,
    currentChoice: ''
}

const allButtons = document.querySelectorAll('button')

for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', userChose);
}

function compare() {
    let playerChoice = player.currentChoice,
        computerChoice = computer.currentChoice,
        outcome = '';

    if (computerChoice === playerChoice) {
        outcome = "...it's a tie!";
    } else if (computerChoice === choices[0]) {
        if (playerChoice === choices[1]) {
            outcome = "...the player!";
        } else {
            outcome = "...the computer!";
        }
    } else if (computerChoice === choices[1]) {
        if (playerChoice === choices[2]) {
            outcome = "...the player!";
        } else {
            outcome = "...the computer!";
        }
    } else if (computerChoice === choices[2]) {
        if (playerChoice === choices[0]) {
            outcome = "...the player!";
        } else {
            outcome = "...the computer!";
        }
    }

    showResults(outcome)
}

function userChose(e) {
    player.currentChoice = this.id;
    compareChoices();
  }

function randomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length - 1) + 1;
    computer.currentChoice = computer.computerSelection[randomIndex];
}

function compareChoices() {
    randomChoice();
    compare();
}

function showResults(result) {
    const resultText = document.createElement('h4');
    resultText.innerText = result;
    document.body.appendChild(resultText);
}