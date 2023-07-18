// Define the EXPECTED_MINUTES_IN_OVEN constant that represents how many minutes the lasagna 
// should be in the oven. It must be exported.
//  According to the cooking book, the expected oven time in minutes is 40.

export const EXPECTED_MINUTES_IN_OVEN = 40


// Implement the remainingMinutesInOven function that takes the actual minutes 
// the lasagna has been in the oven as a parameter and returns how many minutes 
// the lasagna still has to remain in the oven, based on the expected oven time in minutes
//  from the previous task.

// remainingMinutesInOven(30);
// // => 10

export function remainingMinutesInOven(actualMinutesInOven) {
    let remain= EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
    return remain
    
  }

  const remainingMinutesInOven = (actualMinutesInOven) => {
    let remain= EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
    return remain
  }
  remainingMinutesInOven(30)
  
//   Implement the preparationTimeInMinutes function that takes the number of layers 
//   you added to the lasagna as a parameter and returns how many minutes you spent 
//   preparing the lasagna, assuming each layer takes you 2 minutes to prepare.

// preparationTimeInMinutes(2);
// // => 4

export function preparationTimeInMinutes(numberOfLayers) {
    let min = numberOfLayers * PREPARATION_MINUTES_PER_LAYER
    return min
}

const preparationTimeInMinutes = (numberOfLayers) => {
  let min = numberOfLayers * PREPARATION_MINUTES_PER_LAYER
  return min
}
preparationTimeInMinutes(2)


// Implement the totalTimeInMinutes function that takes two parameters: the 
// numberOfLayers parameter is the number of layers you added to the lasagna, 
// and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. 
// The function should return how many minutes in total you've worked on cooking the lasagna, which is the 
// sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.

// totalTimeInMinutes(3, 20);
// // => 26

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    let total =  (numberOfLayers * PREPARATION_MINUTES_PER_LAYER) + actualMinutesInOven
  return total
  
}

const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) => {
  let total =  (numberOfLayers * PREPARATION_MINUTES_PER_LAYER) + actualMinutesInOven
  return total
}
totalTimeInMinutes(3, 20)
