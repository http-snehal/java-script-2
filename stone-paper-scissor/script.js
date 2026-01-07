// 1. Select DOM elements
const stone = document.getElementById('stone');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissors'); 
const result = document.getElementById('result');
const resetBtn = document.getElementById('reset');
const winSpan = document.querySelector('.box-win .score-num');
const lossSpan = document.querySelector('.box-loss .score-num');
const drawSpan = document.querySelector('.box-draw .score-num');

let score = {
    win: 0,
    loss: 0,
    draw: 0
};

const localStorageScore = localStorage.getItem('score');
if (localStorageScore) {
    score = JSON.parse(localStorageScore);
    updateScoreBoard(); 
}

stone.onclick = function() { playGame('stone'); };
paper.onclick = function() { playGame('paper'); };
scissor.onclick = function() { playGame('scissor'); };

resetBtn.onclick = function() {
    score.win = 0;
    score.loss = 0;
    score.draw = 0;
    
    localStorage.removeItem('score'); 
    
    result.innerText = "Let's Play!";
    result.style.color = '#333'; 

    winSpan.innerText = 0;
    lossSpan.innerText = 0;
    drawSpan.innerText = 0;
    
    // updateScoreBoard();
};

function playGame(userChoice) {
    let randomNumber = Math.random() * 3;
    let computer;

    if (randomNumber <= 1) {
        computer = 'stone';
    } else if (randomNumber <= 2) {
        computer = 'paper';
    } else {
        computer = 'scissor';
    }

    if (userChoice === computer) {
        score.draw++;
        result.innerText = `Computer chose ${computer}. Match Drawn!`;
        result.style.color = '#dcdcaa'; 
    } 
    else if (
        (userChoice === 'stone' && computer === 'paper') ||
        (userChoice === 'paper' && computer === 'scissor') ||
        (userChoice === 'scissor' && computer === 'stone')
    ) {
        score.loss++;
        result.innerText = `Computer chose ${computer}. You Lose!`;
        result.style.color = '#f14c4c'; 
    } 
    else {
         score.win++;
        result.innerText = `Computer chose ${computer}. You Win!`;
        result.style.color = '#4ec9b0'; 
    }

    updateScoreBoard();
}

function updateScoreBoard() {
    
    localStorage.setItem('score', JSON.stringify(score));
     
    winSpan.innerText = score.win;
    lossSpan.innerText = score.loss;
    drawSpan.innerText = score.draw;
}