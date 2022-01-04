// Set variables for the cards and the sum

let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard; 

// Set up game and player status

let hasBlackJack = false;
let isAlive = true;

// Set up empty message

let message = "";

// Set up HTML selectors

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

// Function to start the game

const startGame = () => {
    cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`

    if (sum<=20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false
    }
    messageEl.textContent = message;
}
