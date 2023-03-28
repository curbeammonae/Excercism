// A client contacts the freelancer to enquire about their rates. The freelancer explains that they work 8 hours a day.
//  However, the freelancer knows only their hourly rates for the project. Help them estimate a day rate given an hourly rate.

// dayRate(89);
// // => 712

function dayRate(ratePerHour) {
    let total = ratePerHour * 8
    return total
    
  } 
  dayRate(89)

//   Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed budget and the freelancer's hourly rate, help 
// them calculate the number of days they would work until the budget is exhausted. The result must be rounded down to the nearest whole number.

// daysInBudget(20000, 89);
// // => 28

function daysInBudget(budget, ratePerHour) {
    let dayRate = ratePerHour * 8
    let total = budget / dayRate
    return Math.floor(total)
    
  
  }
  daysInBudget(20000, 89)