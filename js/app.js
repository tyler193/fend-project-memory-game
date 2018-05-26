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
 let deck = document.querySelector('.deck');

 // list of cards
 let cardList = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb",
                  "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];

 // Card variable
 let cards = document.getElementsByClassName('card');

 //<ul> of Stars
 let stars = document.querySelector('.stars');

 //Individual star selector
 let starScore = document.getElementsByClassName('fa-star');

 //time
 let timer = document.getElementById('timer');

 //moves
 let moves = document.querySelector('.moves').innerHTML;
 let movesCounter = 0;

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
document.body.onLoad = faceShuffle();

function startGame() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('open', 'show', 'match');
  }
}

//shuffle card displays
function faceShuffle() {
  shuffle(cardList);
  deck.innerHTML = '';
  for (let i = 0; i < cardList.length; i++) {
    let newLiElem = document.createElement('li');
    newLiElem.className = 'card';
    let newIElem = document.createElement('i');
    newIElem.className = cardList[i];
    newLiElem.appendChild(newIElem);
    deck.appendChild(newLiElem);
  }
}


//Flip cards
function flipCards() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
      cards[i].classList.toggle('open');
      cards[i].classList.toggle('show');
      openCards.push(cards[i]);
      moveCounter();


      //start timer with moves
      if (openCards.length === 1) {
        startTime();
      }

      //borrowed some advice from Mike's webinar :)
      if (openCards.length === 2) {
        //if cards match
        if (openCards[0].innerHTML === openCards[1].innerHTML) {
          console.log("matching");
          matching();
        }

        //If cards don't match
        setTimeout(function() {
          for (let j = 0; j < openCards.length; j++) {
            openCards[j].classList.remove('open', 'show');
          }

          openCards = [];
        }, 700)
      }
    })
  }
}
flipCards();

//matched cards
let match = document.getElementsByClassName('match');
let matchedCards = [];

function matching () {
      openCards[0].classList.add('match');
      openCards[1].classList.add('match');
      matchedCards.push(openCards[0]);
      matchedCards.push(openCards[1]);
      if (matchedCards === 16) {
        modal();
      }
}

//modal
function modal() {

}

//timer
let minutes = 0;
let seconds = 0;
let time = '';
function startTime() {
  time = setInterval(function() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    timer.innerHTML = minutes + ':' + seconds;
  }, 1000)
}

function score() {

}

function resetButton() {

}

function moveCounter() {
  movesCounter ++;
  document.querySelector('.moves').innerHTML = movesCounter;
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
