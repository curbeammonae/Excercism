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