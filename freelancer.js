// A client contacts the freelancer to enquire about their rates. The freelancer explains that they work 8 hours a day.
//  However, the freelancer knows only their hourly rates for the project. Help them estimate a day rate given an hourly rate.

// dayRate(89);
// // => 712

function dayRate(ratePerHour) {
    let total = ratePerHour * 8
    return total
    
  } 
  dayRate(89)

  const dayRate = (ratePerHour) => {
    let total = ratePerHour * 8
    return total
  }
//   Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed budget and the freelancer's hourly rate, help 
// them calculate the number of days they would work until the budget is exhausted. The result must be rounded down to the nearest whole number.

// daysInBudget(20000, 89);
// // => 28

function daysInBudget(budget, ratePerHour) {
    let dayRate = ratePerHour * 8
    let total = budget / dayRate
    return Math.floor(total)
    
  
  }

  const daysInBudget = (budget, ratePerHour) => {
    let dayRate = ratePerHour * 8
    let total = budget / dayRate
    return Math.floor(total)
    
  
  }
  daysInBudget(20000, 89)

//   Often, the freelancer's clients hire them for projects spanning over multiple months. In these cases, the
//    freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. 
//    Every month has 22 billable days. Help them estimate their cost for such projects, given an hourly rate, the number of days the project spans,
//     and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.

// priceWithMonthlyDiscount(89, 230, 0.42);
// // => 97972

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let rate = ratePerHour * 8
    let d = rate * numDays
    let t = d * discount
    let f = d - t
    return Math.ceil(f)  
    
  }
  priceWithMonthlyDiscount(89, 230, .42) 