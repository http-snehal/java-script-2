
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


stone.onclick = function() { playGame('stone'); };
paper.onclick = function() { playGame('paper'); };
scissor.onclick = function() { playGame('scissor'); };


resetBtn.onclick = function() {
    score.win = 0;
    score.loss = 0;
    score.draw = 0;
    
  
    result.innerText = "Lets Play!";
    
    updateScoreBoard();
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

    if (
        (userChoice === 'stone' && computer === 'paper') ||
        (userChoice === 'paper' && computer === 'scissor') ||
        (userChoice === 'scissor' && computer === 'stone')
    ) {
        score.loss++;
        result.innerText = `Computer chose ${computer}. You Lose!`;
        result.style.color = '#f14c4c'; 
    } 
    else if (
        (userChoice === 'stone' && computer === 'scissor') ||
        (userChoice === 'paper' && computer === 'stone') ||
        (userChoice === 'scissor' && computer === 'paper')
    ) {
        score.win++;
        result.innerText = `Computer chose ${computer}. You Win!`;
        result.style.color = '#4ec9b0'; 
    } 
    else {
        score.draw++;
        result.innerText = `Computer chose ${computer}. Match Drawn!`;
        result.style.color = '#dcdcaa'; 
    }

    updateScoreBoard();
}

function updateScoreBoard() {
    winSpan.innerText = score.win;
    lossSpan.innerText = score.loss;
    drawSpan.innerText = score.draw;
}