const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8')
const rucksacks = data.split("\n");

const findPriority = (type) => {
  const itemTypes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return itemTypes.indexOf(type) + 1;
}

const findCommonType = (rucksackOne, rucksackTwo, rucksackThree) => {
  const rucksackOneTypes = rucksackOne.split("");
  const rucksackTwoTypes = rucksackTwo.split("");
  const rucksackThreeTypes = rucksackThree.split("");

  const commonTypes = rucksackOneTypes.filter(type => {
    return rucksackTwoTypes.includes(type) && rucksackThreeTypes.includes(type);
  })

  return commonTypes[0];
}

let sumOfPriorities = 0;

for (let i = 0; i < rucksacks.length; i += 3) {
  const rucksackOne = rucksacks[i];
  const rucksackTwo = rucksacks[i + 1];
  const rucksackThree = rucksacks[i + 2];

  const commonType = findCommonType(rucksackOne, rucksackTwo, rucksackThree);
  const priority = findPriority(commonType);

  sumOfPriorities += priority;
}

console.log(sumOfPriorities)