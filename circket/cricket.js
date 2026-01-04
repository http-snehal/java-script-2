const bat = document.getElementById('bat');
const ball = document.getElementById('ball');
const stumps = document.getElementById('stump');



bat.onclick = function() { playGame('bat'); };
ball.onclick = function() { playGame('ball'); };
stumps.onclick = function() { playGame('stumps'); };

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
        alert(`Computer chose ${computer}. Match Drawn!`);
    } else if (
        (userChoice === 'bat' && computer === 'ball') ||
        (userChoice === 'ball' && computer === 'stumps') ||
        (userChoice === 'stumps' && computer === 'bat')
    ) {
        alert(`Computer chose ${computer}. You Win!`);
    } else {
        alert(`Computer chose ${computer}. You Lose!`);
    }
}


