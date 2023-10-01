// Elyse wants to double the number of every card in the deck. This may result in higher cards than 1-10.

// const deck = [1, 2, 3, 4, 10];
// seeingDouble(deck);
// // => [2, 4, 6, 8,


function seeingDouble(deck) {
    return deck.map(card => 2 * card);
    }

// Elyse wants to triplicate every 3 found in the deck. If a deck started with a single 3, after the trick the deck would have three 3's in place of the original.
// const deck = [1, 3, 9, 3, 7];
// threeOfEachThree(deck);
//     // => [1, 3, 3, 3, 9, 3, 3, 3

function threeOfEachThree(deck) {
    return deck.reduce((result, card) => {
    if (card == 3)
    result.push(3, 3, 3);
    else
    result.push(card);
    return result
    }, []);
    }


    // Elyse wants to triplicate every 3 found in the deck. If a deck started with a single 3, after the trick the deck would have three 3's in place of the original.

    // const deck = [1, 3, 9, 3, 7];
    // threeOfEachThree(deck);
    // // => [1, 3, 3, 3, 9, 3, 3, 3


    function threeOfEachThree(deck) {
        return deck.reduce((result, card) => {
        if (card == 3)
        result.push(3, 3, 3);
        else
        result.push(card);
        return result
        }, []);
        }