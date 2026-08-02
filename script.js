let targetNumber = generateRandom();
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const attemptCount = document.getElementById('attemptCount');

function generateRandom() {
    return Math.floor(Math.random() * 10) + 1;
}

function handleGuess() {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 10) {
        message.textContent = "⚠️ Enter a valid number between 1 and 10!";
        message.style.background = "#fff5f5";
        message.style.color = "#c53030";
        return;
    }

    attempts++;
    attemptCount.textContent = attempts;

    if (userGuess === targetNumber) {
        message.textContent = `🎉 Correct! The number was ${targetNumber}. New number generated!`;
        message.style.background = "#f0fff4";
        message.style.color = "#276749";
        resetGame();
        return;
    }

    if (attempts >= 3) {
        message.textContent = `❌ Out of tries! The number was ${targetNumber}. New game started.`;
        message.style.background = "#fff5f5";
        message.style.color = "#c53030";
        resetGame();
        return;
    }

    let hint = userGuess < targetNumber ? "Higher 📈" : "Lower 📉";
    message.textContent = `Wrong! Try ${hint}. (Attempt ${attempts} of 3)`;
    message.style.background = "#fefcbf";
    message.style.color = "#744210";
    
    guessInput.value = "";
    guessInput.focus();
}

function resetGame() {
    targetNumber = generateRandom();
    attempts = 0;
    attemptCount.textContent = attempts;
    guessInput.value = "";
}

// Event Listeners
submitBtn.addEventListener('click', handleGuess);

// Allow pressing "Enter" to submit
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleGuess();
    }
});