var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");

var guessCount = 1;
var resetButton;

function checkGuess() {
    var userGuess = Number(guessField.value);

    if( guessCount === 1 ) {
        guesses.textContent = 'Прошлая ваша догадка '; 
    }
    guesses.textContent += userGuess + " ";

    if( userGuess === randomNumber ) {
        lastResult.textContent = "Поздравляю! Вы отгадали число";
        lastResult.style.background = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }else if( guessCount === 10 ) {
        lastResult.textContent = "!!!Игра окончена!!!";
        setGameOver();
    }else {
        lastResult.textContent = "Ошибка!";
        lastResult.style.background = 'red'; 

        if( userGuess < randomNumber ) {
            lowOrHi.textContent = "Последнее предложение было слишком низким";
        }else if( userGuess > randomNumber ) {
            lowOrHi.textContent = "Последнее предложение было слишком высоким";
        }
    }

    guessCount++;
    guessField.value = ' ';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Начать игру заново';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
    document.getElementById('calc').classList.add('active');
  }

function resetGame() {
    guessCount = 1;
  
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }