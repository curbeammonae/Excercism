// Implement the translate2d function that returns a function making use of a closure to perform a repeatable 2d translation of a coordinate pair.

// const moveCoordinatesRight2Px = translate2d(2, 0);
// const result = moveCoordinatesRight2Px(4, 8);
//

function translate2d(dx, dy) {
    return function translate(x, y) {
    return [x + dx, y + dy];
    }
    }