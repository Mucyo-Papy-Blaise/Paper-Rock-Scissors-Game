const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

playGame = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a Tie";
    } else {
        switch (playerChoice) {
            case "rock":
                result = computerChoice === "paper" ? "You Win" : "You Lose";
                break;
            case "paper":
                result = computerChoice === "scissors" ? "You Win" : "You Lose";
                break;
            case "scissors":
                result = computerChoice === "rock" ? "You Win" : "You Lose";
                break;

            default:
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `PLAYER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenColor", "redColor", "brownColor");

    switch (result) {
        case "You Win":
            resultDisplay.classList.add("greenColor")
            break;
        case "You Lose":
            resultDisplay.classList.add("redColor")
            break;
        case "It's a Tie":
            resultDisplay.classList.add("brownColor")
            break;
    }
}