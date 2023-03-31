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

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if(knightIsAwake === false && archerIsAwake === false && prisonerIsAwake === false){
      return false
    }else{
      return true
      
    }
   }

//    Implement a function named canSignalPrisoner that takes two boolean values, indicating if the archer and the prisoner, respectively, are awake. The function returns true if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns false:

// const archerIsAwake = false;
// const prisonerIsAwake = true;
// canSignalPrisoner(archerIsAwake, prisonerIsAwake);
// // => true

// Stuck? Reveal Hints
// Opens in a modal

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if(archerIsAwake === true || prisonerIsAwake === false){
      return false
    }else{
      return true
    }
  }