const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8')
const rucksacks = data.split("\n");

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
const itemTypes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const findCommonItem = (compartmentOne, compartmentTwo) => {
  const compartmentOneItems = compartmentOne.split("");
  const compartmentTwoItems = compartmentTwo.split("");

  let commonItem = null;

  for (const item of compartmentOneItems) {
    if (compartmentTwoItems.includes(item)) {
      commonItem = item;
      break;
    }
  }

  return commonItem;
}

const findPriority = (type) => {
  return itemTypes.indexOf(type) + 1;
}

let totalPriorities = 0;

const compartments = rucksacks.map((rucksack) => {
  const between = Math.floor(rucksack.length / 2);

  const firstHalf = rucksack.slice(0, between);
  const secondHalf = rucksack.slice(between);

  const type = findCommonItem(firstHalf, secondHalf);
  const priority = findPriority(type);

  totalPriorities += priority;
});

console.log(totalPriorities)