//EXERCISE 1
//
// Open the console and reload the index page to see the result of the code.
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//   _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//  | T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//  |____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be "true"




function dniLetter( dni ) {

  var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
  var result = '';
  var num = ('' + dni).length === 8 ? dni % 23 : 'invalid'

  if (num >= 0 && num <= 22) {
    result = lockup.charAt(num);
    return result;
  } else {
    return 'Invalid parameter'
  }

}

console.log( dniLetter( 12345678 ) === 'Z');
console.log( dniLetter( 34667892 ) === 'S');
console.log( dniLetter( 92234488 ) === 'A');





//EXERCISE 2
//
// Open the console and reload the index page to see the result of the code.
// Improve the exercise above to be able to perform this new functionality
// Of course it has to keep working as usual with right inputs.



console.log( dniLetter( -1 ) === 'Invalid parameter');
console.log( dniLetter( "A1234567" ) === 'Invalid parameter');

