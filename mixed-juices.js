// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
const prepTime = {
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5
  }
 function timeToMixJuice(name) {
   if(Object.keys(prepTime).includes(name)) {
      return prepTime[name]
    } else {
      return 2.5;
    }}
  