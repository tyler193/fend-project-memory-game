/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

 //Setting up variables

 //<ul> of cards Selector
 let deck = document.getElementsByClassName('deck');

 // list of cards
 let cardList = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb",
                  "fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];

 // Card variable
 let cards = document.getElementsByClassName('card');

 //<ul> of Stars
 let stars = document.querySelector('.stars');

 //Individual star selector
 let starScore = document.getElementsByClassName('fa-star');

 //time
 let time = 0;

 //moves
 let moves = document.getElementsByClassName('moves');

 //Restart button
 let restart = document.getElementsByClassName('restart');

 //Open cards array
let openCards = [];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//start of game
document.body.onLoad = startGame();

function startGame() {
  shuffle(cardList);
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('open', 'show', 'match');
  }
}

//Flip cards
function flipCards() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
      cards[i].classList.toggle('open');
      cards[i].classList.toggle('show');
      openCards.push(cards[i]);
    })
  }
}
flipCards();

//matched cards
let match = document.getElementsByClassName('match');


function matching () {
  openCards.push(this);
  let size = openCards.length;
  if (size === 2) {
    if (openCards[0] === openCards[1]) {
      openCards[0].classList.add('match');
      openCards[1].classList.add('match');
      openCards[0].classList.remove('open', 'show');
      openCards[1].classList.remove('open', 'show');
    }
  }
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
