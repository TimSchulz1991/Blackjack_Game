// Set variables for the cards and the sum
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  } // this function lets us create a random card

let firstCard = randomIntFromInterval(2, 11);
let secondCard = randomIntFromInterval(2, 11);
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
    let card = randomIntFromInterval(2, 11);;
    sum += card;
    cards.push(card)
    renderGame();
}
