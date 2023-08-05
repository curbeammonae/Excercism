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


    //Besides reserving the time, you also want to make sure you have enough sauce and noodles to cook the lasagna of your dreams. For each noodle layer in your lasagna, you will need 50 grams of noodles. For each sauce layer in your lasagna, you will need 0.2 liters of sauce.
//
// Define the function quantities that takes an array of layers as a parameter. The function will then determine the quantity of noodles and sauce needed to make your meal. The result should be returned as an object with keys noodles and sauc
function quantities(ingredients) {
    return {
    noodles: ingredients.filter(i => i === 'noodles').length * 50,
    sauce: ingredients.filter(i => i === 'sauce').length * 0.2,
    }
    }