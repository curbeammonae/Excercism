// Let us start analyzing the data by getting a high-level view. Find out how many birds you counted in total since you started your logs.

// Implement a function totalBirdCount that accepts an array that contains the bird count per day. It should return the total number of birds that you counted.

// birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
// totalBirdCount(birdsPerDay);
// // => 34


function totalBirdCount(birdsPerDay) {
    return birdsPerDay.reduce((a,b) => a + b)
      
  }

const totalBirdCount = (birdsPerDay) => {
  return birdsPerDay.reduce((a,b)=> a+b)
}



//   Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.

// Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.

// birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
// birdsInWeek(birdsPerDay, 2);
// // => 12

function birdsInWeek(birdsPerDay, week) {
    const weekIndex = (week - 1) * 7;
    return totalBirdCount(birdsPerDay.slice(weekIndex, weekIndex + 7))
  }

  const birdsInWeek = (birdsPerDay, week) => {
    const weekIndex = (week - 1) * 7;
    return totalBirdCount(birdsPerDay.slice(weekIndex, weekIndex + 7))

  }
//   You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner of the garden. You figured out that this bird always spent every second day in your garden. You do not know exactly where it was in between those days but definitely not in your garden. Your bird watcher intuition also tells you that the bird was in your garden on the first day that you tracked in your list.

// Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument. It should correct the counting mistake and return the modified array.

// birdsPerDay = [2, 5, 0, 7, 4, 1];
// fixBirdCountLog(birdsPerDay);
// // => [3, 5, 1, 7, 5, 1]

function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i++) {
      if (i % 2 === 0) {
        birdsPerDay[i] = birdsPerDay[i] + 1;
      }
    }
    return birdsPerDay;
  }

  const fixBirdCountLog = (birdsPerDay) => {
      birdsPerDay.forEach(element => {
        if (i % 2 === 0) {
          birdsPerDay += birdsPerDay + 1;
        }

        
      });
  }