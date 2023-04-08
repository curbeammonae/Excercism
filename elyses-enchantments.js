// To pick a card, return the card at index position from the given stack.

// const position = 2;
// getItem([1, 2, 4, 1], position);
// // => 4


export function getItem(cards, position) {
    return cards[position]
 }
 
//  Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.

// const position = 2;
// const replacementCard = 6;
// setItem([1, 2, 4, 1], position, replacementCard);
// // => [1, 2, 6, 1]

export function setItem(cards, position, replacementCard) {
    cards.splice(position, 1, replacementCard);
     return cards;
   }

//    Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.

// const newCard = 8;
// insertItemAtTop([5, 9, 7, 1], newCard);
// // => [5, 9, 7, 1, 8]

export function insertItemAtTop(cards, newCard) {
    cards.push(newCard)
    return cards
  }
//   Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.

// const position = 2;
// removeItem([3, 2, 6, 4, 8], position);
// // => [3, 2, 4, 8]


function removeItem(cards, position) {
    cards.splice(position, 1)
    return cards
  }