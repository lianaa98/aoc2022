/*
Rock = A, 1 point;
Paper = B, 2 points;
Scissors = C, 3 points;
Lost = X, 0 point;
Draw = Y, 3 points;
Won = Z, 6 points;
*/

const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8')
const rounds = data.split("\n");

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const LOST = 0;
const DRAW = 3;
const WON = 6;

const myWinningPoints = {
  X: LOST,
  Y: DRAW,
  Z: WON
}

const opponentChoicePoints = {
  A: ROCK,
  B: PAPER,
  C: SCISSORS
}

const decideMyChoicePoints = (opponentChoice, outcome) => {
  if (myWinningPoints[outcome] === DRAW) {
    return opponentChoicePoints[opponentChoice];
  }

  if (myWinningPoints[outcome] === LOST) {
    return opponentChoicePoints[opponentChoice] === ROCK ? SCISSORS : opponentChoicePoints[opponentChoice] - 1;
  }

  if (myWinningPoints[outcome] === WON) {
    return opponentChoicePoints[opponentChoice] === SCISSORS ? ROCK : opponentChoicePoints[opponentChoice] + 1;
  }
}

let myTotalPoints = 0;

const outcomes = rounds.map((round) => {
  const outcome = round[2];
  const opponentChoice = round[0];

  const winningPointsThisRound = myWinningPoints[outcome];
  const choicePointsThisRound = decideMyChoicePoints(opponentChoice, outcome);

  myTotalPoints += winningPointsThisRound + choicePointsThisRound;
});

console.log(myTotalPoints);