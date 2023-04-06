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