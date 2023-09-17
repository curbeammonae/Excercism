// Elyse wants to double the number of every card in the deck. This may result in higher cards than 1-10.

// const deck = [1, 2, 3, 4, 10];
// seeingDouble(deck);
// // => [2, 4, 6, 8,


function seeingDouble(deck) {
    return deck.map(card => 2 * card);
    }