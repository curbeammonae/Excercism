// Elyse will summon the first card in the deck without using the array[index] or .shift(). It's just like magic.

// const deck = [5, 9, 7, 1, 8];

// getFirstCard(deck);
// //

function discardTopCard(deck) {
    const [first, ...everythingElse] = deck;
    return [first, everythingElse];
    }


    // Elyse performs sleight of hand and summons the second card in the deck without using the array[index].

    // const deck = [3, 2, 10, 6, 7];
    
    // getSecondCard(deck);
    // //


function getSecondCard(deck) {
        const [first, second, ...everythingElse] = deck;
        return second;
        }

//  Elyse will make the top two cards of the deck switch places. She doesn't need to call a single function.

// const deck = [10, 7, 3, 8, 5];
        
// swapTopTwoCards(deck);


function swapTopTwoCards(deck) {
    const [first, second, ...everythingElse] = deck;
    return [second, first, ...everythingElse];
    }

    // Elyse will separate the deck into two piles. The first pile will contain only the top card of the original deck, while the second pile will contain all the other cards.

    // const deck = [2, 5, 4, 9, 3];
    
    // discardTopCard(deck);
    // // => [2, [5, 4, 9

    function discardTopCard(deck) {
        const [first, ...everythingElse] = deck;
        return [first, everythingElse];
        }