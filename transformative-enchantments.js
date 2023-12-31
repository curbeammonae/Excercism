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

        // Elyse will take a deck of ten cards, and make every card disappear except the middle two cards.

        // const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // middleTwo(deck);
        // // => [5


        function middleTwo(deck) {
            const mid = deck.length / 2 - 1
            return deck.slice(mid, mid+2);
            }


            // Elyse wants to move the top and bottom cards of the deck into the middle, in reverse order.

            // You can assume that the deck has an even number of cards.
            
            // const deck = [1, 2, 3, 5, 6, 10];
            // sandwichTrick(deck);
            // // => [2, 3, 10, 1,
            function sandwichTrick(deck) {
                const mid = deck.length / 2;
                deck.splice(mid, 0, deck.pop());
                deck.splice(mid, 0, deck.shift());
                return deck;
                }
//    Elyse's favorite number today is 2. In this trick, every card that isn't a 2 will disappear from the deck.

// const deck = [1, 2, 3, 4, 10, 2];
//   twoIsSpecial(deck);
function twoIsSpecial(deck) {
    return deck.filter(card => card == 2);
    }

    // Elyse wishes to demonstrate her mastery of reordering the cards perfectly - no matter how well shuffled.

    // const deck = [10, 1, 5, 3, 2, 8, 7];
    // perfectlyOrdered(deck);
    // // => [1, 2, 3, 5, 7, 8,

    function perfectlyOrdered(deck) {
        deck.sort((a, b) => a - b);
        return deck;
        }

        // Elyse wants to change the order of the cards in the deck. After the trick, the card that is currently at the top should end up at the bottom of the deck. The second card should end up second last etc.

        // const deck = [10, 1, 5, 3, 2];
        // reorder(deck);
        // // => [2, 3, 5, 1,


        function reorder(deck) {
            deck.reverse();
            return deck;
            }