const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf-8");
const pairs = data.split("\n");

let totalPairsWhereOneContainsTheOther = 0;

const compareArrays = (arrayOne, arrayTwo) => arrayOne.length === arrayTwo.length && arrayOne.every((element, index) => element === arrayTwo[index]);

for (const pair of pairs) {
  const sectionOne = pair.split(",")[0];
  const sectionTwo = pair.split(",")[1];

  const sectionOneStartNum = Number(sectionOne.split("-")[0]);
  const sectionOneEndNum = Number(sectionOne.split("-")[1]);
  const sectionTwoStartNum = Number(sectionTwo.split("-")[0]);
  const sectionTwoEndNum = Number(sectionTwo.split("-")[1]);

  const sectionOneArray = [];
  const sectionTwoArray = [];

  for (let i = sectionOneStartNum; i <= sectionOneEndNum; i++) {
    sectionOneArray.push(i);
  }
  for (let i = sectionTwoStartNum; i <= sectionTwoEndNum; i++) {
    sectionTwoArray.push(i);
  }

  const filteredArrayOne = sectionOneArray.filter(num => sectionTwoArray.includes(num));
  const filteredArrayTwo = sectionTwoArray.filter(num => sectionOneArray.includes(num));

  if (
    compareArrays(filteredArrayOne, sectionOneArray) ||
    compareArrays(filteredArrayTwo, sectionTwoArray)
  ) {
    totalPairsWhereOneContainsTheOther += 1;
  }
}

console.log(totalPairsWhereOneContainsTheOther);