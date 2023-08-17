const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf-8");
const pairs = data.split("\n");

let totalPairsWhereOneContainsTheOther = 0;

for (const pair of pairs) {
  const sectionOne = pair.split(",")[0];
  const sectionTwo = pair.split(",")[1];

  const sectionOneStartNum = Number(sectionOne.split("-")[0]);
  const sectionOneEndNum = Number(sectionOne.split("-")[1]);
  const sectionTwoStartNum = Number(sectionTwo.split("-")[0]);
  const sectionTwoEndNum = Number(sectionTwo.split("-")[1]);

  if (
    (sectionOneStartNum >= sectionTwoStartNum && sectionOneEndNum <= sectionTwoEndNum) ||
    (sectionTwoStartNum >= sectionOneStartNum && sectionTwoEndNum <= sectionOneEndNum)
  ) {
    totalPairsWhereOneContainsTheOther += 1;
  }
}

console.log(totalPairsWhereOneContainsTheOther);