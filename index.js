// Function to get a random number while making sure that 10,J,Q,K count all as 10 and ace as 11
const getRandomCard = () => {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >= 10) {
        return 10
    } else {
        return randomNumber
    }
}
// Set variables for the cards and the sum
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard] // array that holds all our cards
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
    renderGame();
}

const renderGame = () => {
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
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

// Function for new card

const newCard = () => {
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
}
