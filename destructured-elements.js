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