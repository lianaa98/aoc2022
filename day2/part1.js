/*
Rock = A, X, 1 point;
Paper = B, Y, 2 points;
Scissors = C, Z, 3 points;
Lost = 0 point;
Draw = 3 points;
Won = 6 points;
*/

const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8')
const rounds = data.split("\n");

const myPoints = {
  X: 1,
  Y: 2,
  Z: 3 
}

const opponentPoints = {
  A: 1,
  B: 2,
  C: 3
}

const winningPoints = {
  lost: 0,
  draw: 3,
  won: 6
}

const myWinningPointsThisRound = (myChoice, opponentChoice) => {
  if (myPoints[myChoice] === 3 && opponentPoints[opponentChoice] === 1) {
    return winningPoints.lost;
  }
  if (myPoints[myChoice] === 1 && opponentPoints[opponentChoice] === 3) {
    return winningPoints.won;
  }
  if (myPoints[myChoice] === opponentPoints[opponentChoice]) {
    return winningPoints.draw;
  } 
  if (myPoints[myChoice] > opponentPoints[opponentChoice]) {
    return winningPoints.won;
  }
  if (myPoints[myChoice] < opponentPoints[opponentChoice]) {
    return winningPoints.lost;
  }
}

let myTotalPoints = 0;

const outcomes = rounds.map((round) => {
  const myChoice = round[2];
  const opponentChoice = round[0];

  const myWinningPoints = myWinningPointsThisRound(myChoice, opponentChoice);
  const myChoicePoints = myPoints[myChoice];

  myTotalPoints += myWinningPoints + myChoicePoints;
})

console.log(myTotalPoints);