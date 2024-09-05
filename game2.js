<<<<<<< HEAD
// Get DOM elements
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
=======
let rock1=document.getElementById("rock");
let paper1=document.getElementById("paper");
let scissors1=document.getElementById("scissors");
let rock2=document.getElementById("rock1");
let paper2=document.getElementById("paper1");
let scissors2=document.getElementById("scissors1");
let score11=document.getElementById("score1");
let score22=document.getElementById("score2");

let a="";
var one=0;
var second=0;
let boxes1=document.getElementsByClassName("boxes");
console.log(boxes1)
function rockf(){
    a="rock";
    console.log(a);
    let cpu=Math.floor(Math.random()*3);
let b=["rock","paper","scissors"][cpu];
console.log(b);
if(b=="scissors"){
    one=one+1;
}
if(b=="paper"){
    second=second+1;
}
console.log(one);
console.log(second);
score11.innerHTML=one;
score22.innerHTML=second;
rock2.style.marginLeft='230px';
paper2.style.display='none';
scissors2.style.display='none';
dis(b);
setTimeout(result,1000);
}
function paperf(){
    console.log("paper");
    a="paper";
    let cpu=Math.floor(Math.random()*3);
let b=["rock","paper","scissors"][cpu];
console.log(b);
if(b=="rock"){
    one=one+1;
}
if(b=="scissors"){
    second=second+1;
}
score11.innerHTML=one;
score22.innerHTML=second;
console.log(one);
console.log(second);
paper2.style.marginLeft='240px';
rock2.style.display='none';
scissors2.style.display='none';
dis(b);
setTimeout(result,1000);
}
function scissorsf(){
    console.log("scissors");
    a="scissors";
    let cpu=Math.floor(Math.random()*3);
let b=["rock","paper","scissors"][cpu];
console.log(b);
if(b=="paper")
{
    one=one+1;
}
if(b=="rock")
{
    second=second+1;
}
score11.innerHTML=one;
score22.innerHTML=second;
console.log(one);
console.log(second);
scissors2.style.marginLeft='240px';
paper2.style.display='none';
rock2.style.display='none';
dis(b);
setTimeout(result,1000);
}
function dis(c){
    if(c=="rock")
    {
        paper1.style.display='none';
        scissors1.style.display='none';
        rock1.style.display='block';
    }
    if(c=="paper")
    {
        rock1.style.display='none';
        scissors1.style.display='none';
        paper1.style.display='block';
    }
    if(c=="scissors")
    {
        scissors1.style.display='block';
        paper1.style.display='none';
        rock1.style.display='none';
    }
    setTimeout(redis,700)
}
function redis(){
    scissors1.style.display='none';
    paper1.style.display='none';
    rock1.style.display='none';
    scissors2.style.display='block';
    paper2.style.display='block';
    rock2.style.display='block';
    rock2.style.marginLeft='30px';
    paper2.style.marginLeft='30px';
    scissors2.style.marginLeft='30px';
}
function result(){
    if(one==10||second==10){
        localStorage.one=one;
        localStorage.second=second;
    window.location.assign("game3.html");
    }
}

>>>>>>> 20e84225dafe8a9c3e5dde0baab8a5664d7b8913
