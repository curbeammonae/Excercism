// Elyse will summon the first card in the deck without using the array[index] or .shift(). It's just like magic.

// const deck = [5, 9, 7, 1, 8];

// getFirstCard(deck);
// //

function discardTopCard(deck) {
    const [first, ...everythingElse] = deck;
    return [first, everythingElse];
    }