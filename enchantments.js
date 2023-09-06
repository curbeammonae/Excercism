// Elyse wants to know the position (index) of a card in the stack.

// const card = 2;
// getCardPosition([9, 7, 3, 2], card);
// // => 3

function getCardPosition(stack, card) {
    return stack.indexOf(card)
}  


// Elyse wants to determine if a card is present in the stack -- in other words, if the stack contains a specific number.

// const card = 3;
// doesStackIncludeCard([2, 3, 4, 5], card);
// // => 

function doesStackIncludeCard(stack, card) {
    return stack.includes(card)
}  