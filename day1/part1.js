const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8');
const groups = data.split("\n\n");

const elves = groups.map(group => {
  const values = group.trim().split("\n").map(Number);
  return values.reduce((sum, value) => sum + value, 0);
});

const maxElf = Math.max(...elves);
console.log(maxElf);