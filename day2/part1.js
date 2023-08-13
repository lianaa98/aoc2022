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

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const pointsOfChoice = {
  A: ROCK,
  X: ROCK,
  B: PAPER,
  Y: PAPER,
  C: SCISSORS,
  Z: SCISSORS
};

const winningPoints = {
  lost: 0,
  draw: 3,
  won: 6
}

const myWinningPointsThisRound = (myChoice, opponentChoice) => {

  if (pointsOfChoice[myChoice] === SCISSORS && pointsOfChoice[opponentChoice] === ROCK) {
    return winningPoints.lost;
  }
  if (pointsOfChoice[myChoice] === ROCK && pointsOfChoice[opponentChoice] === SCISSORS) {
    return winningPoints.won;
  }

  if (pointsOfChoice[myChoice] === pointsOfChoice[opponentChoice]) {
    return winningPoints.draw;
  } 
  if (pointsOfChoice[myChoice] > pointsOfChoice[opponentChoice]) {
    return winningPoints.won;
  }
  if (pointsOfChoice[myChoice] < pointsOfChoice[opponentChoice]) {
    return winningPoints.lost;
  }
}

let myTotalPoints = 0;

const outcomes = rounds.map((round) => {
  const myChoice = round[2];
  const opponentChoice = round[0];

  const myWinningPoints = myWinningPointsThisRound(myChoice, opponentChoice);
  const myChoicePoints = pointsOfChoice[myChoice];

  myTotalPoints += myWinningPoints + myChoicePoints;
})

console.log(myTotalPoints);