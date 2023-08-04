// 

function cookingStatus(time) {
    if (time === 0) {
    return 'Lasagna is done.';
    }
    else if (time > 0) {
    return 'Not done, please wait.';
    }
    else {
    return 'You forgot to set the timer.';
    }
    }


//     For the next lasagna that you will prepare, you want to make sure you have enough time reserved so you can enjoy the cooking. You already made a plan with all the layers your lasagna will have. Now you want to estimate how long the preparation will take based on that.

// Implement a function preparationTime that accepts an array of layers and the average preparation time per layer in minutes. The function should return the estimate for the total preparation time based on the number of layers. If the function is called without providing the average preparation time, 2 minutes should be assumed instea
function preparationTime(layers, timePerLayer=2) {
    return layers.length * timePerLayer;
    }