const { groups, elves, maxElf } = require('./part1.js');

const filteredElvesOnce = elves.filter(elf => elf !== maxElf);
const secondElf = Math.max(...filteredElvesOnce);

const filteredElvesTwice = filteredElvesOnce.filter(elf => elf !== secondElf);
const thirdElf = Math.max(...filteredElvesTwice);

const totalCaloriesOfTopThreeElves = maxElf + secondElf + thirdElf;

console.log(totalCaloriesOfTopThreeElves);