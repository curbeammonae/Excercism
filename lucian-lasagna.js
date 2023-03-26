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
  remainingMinutesInOven(30)
  