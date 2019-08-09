/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/

const testing = (yourString) => {
  let regex1 = /[\[][^\[]*[\]]/
  let regex2 = /[\(][^\(]*[\)]/
  let regex3 = /[\{][^\{]*[\}]/
  let condition1 = yourString.match(regex1);
  console.log('1: ',condition1)
  let condition2 = yourString.match(regex2);
  console.log('2: ',condition2)
  let condition3 = yourString.match(regex3);
  console.log('3: ',condition3)

}

let test1 = "([])[]({})"; //true
let test2 = "([)]"; //false
let test3 = "((()"; //false

console.log(testing(test1));
console.log(testing(test2));
console.log(testing(test3));

$(document).ready(function() {
    $('#output-section-1').text(1);
});
