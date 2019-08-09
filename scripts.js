/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/

const testingRound = (yourString) => {
  let regex1 = /[\(]/g
  let regex2 = /[\)]/g
  let matches1 = yourString.match(regex1);
  let matches2 = yourString.match(regex2);
  if ((matches1 === null) && (matches2 === null)) {return 1}
  if ((matches1.length == matches2.length) && (yourString.search(regex1) < yourString.search(regex2))) {return 1;}
  return 0;
}

const testingCurly = (yourString) => {
  let regex1 = /[\{]/g
  let regex2 = /[\}]/g
  let matches1 = yourString.match(regex1);
  let matches2 = yourString.match(regex2);
  if ((matches1 === null) && (matches2 === null)) {return 1}
  if ((matches1.length == matches2.length) && (yourString.search(regex1) < yourString.search(regex2))) {return 1;}
  return 0;
}

const testingSquare = (yourString) => {
  let regex1 = /[\[]/g
  let regex2 = /[\]]/g
  let matches1 = yourString.match(regex1);
  let matches2 = yourString.match(regex2);
  if ((matches1 === null) && (matches2 === null)) {return 1}
  if ((matches1.length == matches2.length) && (yourString.search(regex1) < yourString.search(regex2))) {return 1;}
  return 0;
}

const testingAll = (yourString) => {
  if ((testingRound(yourString) == true) &&
  (testingCurly(yourString) == true) &&
  (testingSquare(yourString) == true)) {
    return true
  }
  return false;
}

let test1 = "([])[]({})"; //true
let test2 = "([)]"; //false
let test3 = "((()"; //false
let test4 = "][]"; //false

console.log(testingAll(test1)); //true
console.log(testingAll(test2)); //incorrect true
console.log(testingAll(test3)); //false
console.log(testingAll(test4)); //false


$(document).ready(function() {
  $('#output-section-1').text(test1);
  $('#output-section-2').text(test2);
  $('#output-section-3').text(test3);
  $('#output-section-4').text(test4);
  $('#output-section-11').text(testingAll(test1));
  $('#output-section-22').text(testingAll(test2));
  $('#output-section-33').text(testingAll(test3));
  $('#output-section-44').text(testingAll(test4));

});
