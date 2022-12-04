/*
Rock = A, X, 1 point;
Paper = B, Y, 2 points;
Scissors = C, Z, 3 points;
Lost = 0 point;
Draw = 3 points;
Won = 6 points;
*/

let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");
let outcomes = [];

for (let i of array) {
  let output = i.toString().split(" ");
  outcomes.push(output);
}
console.log(outcomes);

let score = 0;

for (let num of outcomes) {
if(num[1] === 'X') {
  if(num[0] === 'C') {
    score += (6 + 1);
  } else if(num[0] === 'B') {
    score += (0 + 1);
  } else if(num[0] === 'A') {
    score += (3 + 1);
  }
} else if(num[1] === 'Y') {
  if(num[0] === 'C') {
    score += (0 + 2);
  } else if(num[0] === 'A') {
    score += (6 + 2);
  } else if(num[0] === 'B') {
    score += (3 + 2);
  }
} else if(num[1] === 'Z') {
  if(num[0] === 'A') {
    score += (0 + 3);
  } else if(num[0] === 'B') {
    score += (6 + 3);
  } else if(num[0] === 'C') {
    score += (3 + 3);
  }
}
}

console.log(score);