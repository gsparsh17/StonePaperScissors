
const rock1 = document.getElementById("rock");
const paper1 = document.getElementById("paper");
const scissors1 = document.getElementById("scissors");
const rock2 = document.getElementById("rock1");
const paper2 = document.getElementById("paper1");
const scissors2 = document.getElementById("scissors1");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

// Game state
let userScore = 0;
let cpuScore = 0;

// Get a random choice for the CPU
function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Update the score display
function updateScores() {
    score1.innerHTML = userScore;
    score2.innerHTML = cpuScore;
}

// Hide all choice elements
function hideAllChoices() {
    rock1.style.display = 'none';
    paper1.style.display = 'none';
    scissors1.style.display = 'none';
    rock2.style.display = 'none';
    paper2.style.display = 'none';
    scissors2.style.display = 'none';
}

// Show the user's choice
function showUserChoice(choice) {
    if (choice === "rock") {
        rock1.style.display = 'block';
    } else if (choice === "paper") {
        paper1.style.display = 'block';
    } else if (choice === "scissors") {
        scissors1.style.display = 'block';
    }
}

// Show the CPU's choice
function showCpuChoice(choice) {
    if (choice === "rock") {
        rock2.style.display = 'block';
    } else if (choice === "paper") {
        paper2.style.display = 'block';
    } else if (choice === "scissors") {
        scissors2.style.display = 'block';
    }
}

// Handle a user's choice
function handleUserChoice(userChoice) {
    const cpuChoice = getRandomChoice();
    showUserChoice(userChoice);
    showCpuChoice(cpuChoice);

    // Determine the winner
    if (userChoice === cpuChoice) {
        // It's a tie
    } else if ((userChoice === "rock" && cpuChoice === "scissors") ||
               (userChoice === "paper" && cpuChoice === "rock") ||
               (userChoice === "scissors" && cpuChoice === "paper")) {
        userScore++;
    } else {
        cpuScore++;
    }

    updateScores();
    setTimeout(() => {
        hideAllChoices();
        resetCpuChoices();
        checkGameEnd();
    }, 1000);
}

// Reset CPU choices' positions
function resetCpuChoices() {
    // rock2.style.marginLeft = '30px';
    // paper2.style.marginLeft = '30px';
    // scissors2.style.marginLeft = '30px';
    rock2.style.display = 'block';
    paper2.style.display = 'block';
    scissors2.style.display = 'block';
}

// Check if the game has ended
function checkGameEnd() {
    if (userScore === 10 || cpuScore === 10) {
        localStorage.setItem('userScore', userScore);
        localStorage.setItem('cpuScore', cpuScore);
        window.location.assign("game3.html");
    }
}

// Add event listeners to user choice elements
document.getElementById("rock1").addEventListener("click", () => handleUserChoice("rock"));
document.getElementById("paper1").addEventListener("click", () => handleUserChoice("paper"));
document.getElementById("scissors1").addEventListener("click", () => handleUserChoice("scissors"));

// Initialize the game state
hideAllChoices();
resetCpuChoices();

