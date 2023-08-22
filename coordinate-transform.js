// Implement the translate2d function that returns a function making use of a closure to perform a repeatable 2d translation of a coordinate pair.

// const moveCoordinatesRight2Px = translate2d(2, 0);
// const result = moveCoordinatesRight2Px(4, 8);
//

function translate2d(dx, dy) {
    return function translate(x, y) {
    return [x + dx, y + dy];
    }
    }


    // Implement the scale2d function that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair.

    // For this exercise, assume only positive scaling values.
    
    // const doubleScale = scale2d(2, 2);
    // const result = doubleScale(6, -3);
    // // result => [
        
    function scale2d(sx, sy) {
        return function scale(x, y) {
        return [x * sx, y * sy];
        }
        }


        // Combine two transformation functions to perform a repeatable transformation. This is often called function composition, where the result of the first function 'f(x)' is used as the input to the second function 'g(x)'.

        // const moveCoordinatesRight2Px = translate2d(2, 0);
        // const doubleCoordinates = scale2d(2, 2);
        // const composedTransformations = composeTransform(
        //   moveCoordinatesRight2Px,
        //   doubleCoordinates,
        // );
        // const result = composedTransformations(0, 1);
       
        function composeTransform(f, g) {
            return function composed(x, y) {
            return g(...f(x, y))
            }
            }

 // Implement the memoizeTransform function. It takes a function to memoize, then returns a new function that remembers the inputs to the supplied function so that the last return value can be "remembered" and only calculated once if it is called again with the same arguments.

// Memoizing is sometimes used in dynamic programming. It allows for expensive operations to be done only once since their results are remembered. Note that in this exercise only the last result is remembered, unlike some solutions in dynamic programming that memoize all result
function memoizeTransform(f) {
    let previousX, previousY, previousResult
    return function memoised(x, y) {
    if (previousX === x && previousY === y) {
    return previousResult
    }
    previousX = x
    previousY = y
    return previousResult = f(x, y)
    }
    }