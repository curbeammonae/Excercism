// Some kinds of vehicles require a drivers license to operate them. Assume only the kinds 'car' and 'truck' require a license, everything else can be operated without a license.

// Implement the needsLicense(kind) function that takes the kind of vehicle and returns a boolean indicating whether you need a license for that kind of vehicle.

// needsLicense('car');
// // => true

// needsLicense('bike');
// // => false

function needsLicense(kind) {
    if(kind == 'car' || kind == 'truck'){
      return true
    }else{
      return false
    }

}

// You evaluate your options of available vehicles. You manage to narrow it down to two options but you need help making the final decision. For that implement the function chooseVehicle(option1, option2) that takes two vehicles as arguments and returns a decision that includes the option that comes first in dictionary order.

// chooseVehicle('Wuling Hongguang', 'Toyota Corolla');
// // =>  'Toyota Corolla is clearly the better choice.'

// chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf');
// // =>  'Volkswagen Beetle is clearly

function chooseVehicle(option1, option2) {
    if(option1 < option2){
      return option1 + ' is clearly the better choice.'
    }else if(option2 < option1){
      return option2 + ' is clearly the better choice.'
    }
  }
  