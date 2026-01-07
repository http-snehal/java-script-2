const bat = document.getElementById('bat');
const ball = document.getElementById('ball');
const stumps = document.getElementById('stump');
const result = document.getElementById('result');
const reset = document.getElementById('reset');


bat.onclick = function() { playGame('bat'); };
ball.onclick = function() { playGame('ball'); };
stumps.onclick = function() { playGame('stumps'); };

let score = {
    win : 0,
    loss : 0,
    draw : 0,

}

const localStorageScore = localStorage.getItem('score');
if (localStorageScore) {
    score = JSON.parse(localStorageScore);
    displayScore();
}

function displayScore() {
    result.innerText = `Wins: ${score.win}, Losses: ${score.loss}, Draws: ${score.draw}`;
}

reset.onclick = function() {
    score.win = 0;
    score.loss = 0;
    score.draw = 0;
    localStorage.removeItem('score');
    alert("Score has been reset!");
    displayScore();
}

function playGame(userChoice) {
    
    let randomNumber = Math.random() * 3;
    let computer;
    
    if (randomNumber <= 1) {
        computer = 'bat';
    } else if (randomNumber <= 2) {
        computer = 'ball';
    } else {
        computer = 'stumps';
    }

   
    if (userChoice === computer) {
        score.draw++;
        alert(`Computer chose ${computer}. Match Drawn!`);
    } else if (
        (userChoice === 'bat' && computer === 'ball') ||
        (userChoice === 'ball' && computer === 'stumps') ||
        (userChoice === 'stumps' && computer === 'bat')
    ) {
        score.win++;
        alert(`Computer chose ${computer}. You Win!`);
    } else {
        score.loss++;
        alert(`Computer chose ${computer}. You Lose!`);
    }
    document.getElementById('computerMove').innerText = `Computer chose: ${computer}`;
    document.getElementById('userMove').innerText = `You chose: ${userChoice}`;
    // document.getElementById('outcome').innerText = result.innerText;
   

    localStorage.setItem('score', JSON.stringify(score));
    displayScore();
}




