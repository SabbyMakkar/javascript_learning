const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt'); // corrected from '#submit' to '#subt'
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); // removed '#.' from selector
const remaining = document.querySelector('.lastResult'); // removed '#.' from selector
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultSabby');

const p = document.createElement('p');

let prevGuess = [];
let numguesses = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a valid number');
    } else if (guess > 100) {
        alert('Please enter a valid number');
    } else {
        prevGuess.push(guess);
        if (numguesses === 11) {
            displayguess(guess);
            displaymessage(`Game Over. Random number was ${randomNumber}`);
            endgame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage(`You guessed right!`);
        endgame();
    } else if (guess < randomNumber) {
        displaymessage(`Number too low`);
    } else if (guess > randomNumber) {
        displaymessage(`Number too high`);
    }
}

function displayguess(guess) {
    userinput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numguesses++;

    remaining.innerHTML = `${11 - numguesses}`;
}

function displaymessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newgame() {
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numguesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numguesses}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p); // corrected from 'startover.remove(p)'
    });
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start new game</h2>`; // corrected from 'newgane' to 'newgame'
    startover.appendChild(p); // corrected from 'startover.append(p)' to 'startover.appendChild(p)'
    playGame = false;
    newgame();
}
