// MVP
// Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`; //scenario.murderer = MISS SCARLET
// }
//
// const verdict = declareMurderer(); //variable verdict equals the declareMurderer variable
// console.log(verdict); //PRINT variable Verdict = declareMurderer = MISS SCARLET
//
// //ANSWER 'The murderer is Miss Scarlet.' //All CONSTANT variables so no issues.

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock'; //CANNOT REASSIGN const variable.
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//ANSWER ERROR you cannot reassign a const variable = 'Prof. Plum' to murderer = 'Mrs. Peacock'.


// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer(); //murderer is called Mrs Peacock in variable declareMurderer.
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`; //murderer is called Professor Plum as we take Prof. Plum and not the variable called in declareMurderer
// console.log('Second Verdict: ', secondVerdict);

//ANSWER "First Verdict: The murderer is Mrs. Peacock"
//ANSWER "Second Verdict: The murderer is Professor Plum"

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`; //the variable suspectThree change to 'Colonel Mustard' is taken into account on this line.
// }
//
// const suspects = declareAllSuspects(); //variable suspects equals the variable declareAllSuspects above.
// console.log(suspects); //so line 57 is taken into account on this line.
// console.log(`Suspect three is ${suspectThree}.`); //variable suspectThree remains Mrs. Peacock. The variable inside declareAllSuspects is not taken into account.

//ANSWER "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard"
//ANSWER "Suspect three is Mrs. Peacock"

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon; //new weapon can be called in this function and will replace the 'Candle Stick above'
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver'); //using variable changeWeapon the 'Candle Stick' is replaced by a 'revolver'
// const verdict = declareWeapon(); // the variable verdict now equals the variable declareWeapon.
// console.log(verdict);

//ANSWER The weapon is the revolver.

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist(); //execute the function plotTwist which equals Mrs. White is the murderer.
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer(); //last action in changeMurderer() is to call plotTwist() = MRS. WHITE
// const verdict = declareMurderer();
// console.log(verdict);

//ANSWER 'The murderer is Mrs. White'

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome(); //murderer is MISS SCARLET
//   }
//
//   plotTwist();//murderer now changes to COLONEL MUSTARD
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer(); //the murderer finally changes to MR GREEN
// const verdict = declareMurderer();
// console.log(verdict);

//ANSWER 'The murderer is Mr. Green.'

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) { //scenario.room is 'Dining Room from line 145
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');  //scenario.murderer is COLONEL MUSTARD from line 149 so weapon is CANDLE STICK.
//   }
//
//   plotTwist('Dining Room'); // scenario.room is DINING ROOM from from line 145 so murderer is COLONEL MUSTARD.
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario(); //Called function changeScenario which contains the functions plotTwist and unexpectedOutcome.
// const verdict = declareWeapon();
// console.log(verdict);

//ANSWER "The weapon is the Candle Stick"

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//ANSWER "The murderer is Professor Plum"
