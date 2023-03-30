// Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false:

// const knightIsAwake = true;
// canExecuteFastAttack(knightIsAwake);
// // => false


function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if(knightIsAwake === false && archerIsAwake === false && prisonerIsAwake === false){
      return false
    }else{
      return true
      
    }
   }

//    Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters. Otherwise, returns false:

// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
// canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
// // => true

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if(archerIsAwake === true || prisonerIsAwake === false){
      return false
    }else{
      return true
    }
  }
  