// To determine the letters for the front door password, you need to respond with the first letter of the line of the poem, that the guard recites to you.

// To end up with a nice password, the members of the poetry club like to use acrostic poems. This means that the first letter of each sentence forms a word. Here is an example by one of their favorite writers Michael Lockwood.

// Stands so high
// Huge hooves too
// Impatiently waits for
// Reins and harness
// Eager to leave
// So when the guard recites Stands so high, you'll respond S, when the guard recites Huge hooves too, you'll respond H.

// Implement the function frontDoorResponse that takes a line of the poem as an argument and returns the first letter of that line.

// frontDoorResponse('Stands so high');
// // => "S"

function frontDoorResponse(line) {
    return line[0]
  }

//   Now that you have all the correct letters, all you need to do to get the password for the front door is to correctly capitalize the word.

// Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.

// frontDoorPassword('SHIRE');
// // => "Shire"

// frontDoorPassword('shire');
// // => "Shire"

function frontDoorPassword(word) {
    let letter = word[0].toUpperCase()
    let sliced = word.slice(1).toLowerCase()
      return letter + sliced
      
      
      
    }

//     To determine letters for the back door password, you need to respond with the last letter of the line of the poem that the guard recites to you.

// The members of the poetry club are really clever. The poem mentioned before is also telestich, which means that the last letter of each sentence also forms a word:

// Stands so high
// Huge hooves too
// Impatiently waits for
// Reins and harness
// Eager to leave
// When the guard recites Stands so high, you'll respond h, when the guard recites Huge hooves too, you'll respond o.

// Note that sometimes the guard does stylistic pauses (in the form of whitespace) at the beginning or at the end of a line. You will need to ignore those pauses to derive the correct letter.

// Implement the function backDoorResponse that takes a line of the poem as an argument and returns the last letter of that line that is not a whitespace character.

// backDoorResponse('Stands so high');
// // => "h"

// backDoorResponse('Stands so high   ');
// // => "h"

export function backDoorResponse(line) {
    let rm = line.trim()
    let last= rm[rm.length -1]
    return last
  }