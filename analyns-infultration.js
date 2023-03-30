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