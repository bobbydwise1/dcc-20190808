/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/

// const testing = (yourString) => {
//   let regex1 = /[\[][^\[]*[\]]/
//   let regex2 = /[\(][^\(]*[\)]/
//   let regex3 = /[\{][^\{]*[\}]/
//   let condition1 = yourString.match(regex1);
//   console.log('1: ',condition1)
//   let condition2 = yourString.match(regex2);
//   console.log('2: ',condition2)
//   let condition3 = yourString.match(regex3);
//   console.log('3: ',condition3)
//
// }

const testingSquare = (yourString) => {
  let regex1 = /[\[]/
  let regex2 = /[\]]/
  let matches1 = yourString.match(regex1);
  let matches2 = yourString.match(regex2);
  if ((matches1 === null) && (matches2 === null)) {return 1}
  if ((matches1.length == matches2.length) && (yourString.search(regex1) < yourString.search(regex2))) {return 1;}
  return 0;
}

let test1 = "([])[]({})"; //true
let test2 = "([)]"; //false
let test3 = "((()"; //false
let test4 = "][]"

console.log(testingSquare(test1));
console.log(testingSquare(test2));
console.log(testingSquare(test3));
console.log(testingSquare(test4));

$(document).ready(function() {
    $('#output-section-1').text(1);
});
