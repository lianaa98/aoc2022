/*
Rock = A, 1 point;
Paper = B, 2 points;
Scissors = C, 3 points;
Lost = X, 0 point;
Draw = Y, 3 points;
Won = Z, 6 points;
*/

let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");
let outcomes = [];

for (let i of array) {
  let output = i.toString().split(" ");
  outcomes.push(output);
}

console.log(outcomes);

let move = {A: 1, B: 2, C: 3};
let round = {X: 0, Y: 3, Z: 6};

let score = 0;

for (let num of outcomes) {
  score += round[num[1]];
  if(num[1] === 'X') {
    if(num[0] === 'A') score += move['C'];
    if(num[0] === 'B') score += move['A'];
    if(num[0] === 'C') score += move['B']; 
  } else if(num[1] === 'Y') {
    score += move[(num[0])];
  } else if(num[1] === 'Z') {
    if(num[0] === 'A') score += move['B'];
    if(num[0] === 'B') score += move['C'];
    if(num[0] === 'C') score += move['A'];
  }

}

console.log(score);