let fs = require('fs');
let rucksacks = fs.readFileSync('input.txt').toString().split("\n");

console.log(rucksacks);

let items = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let priority = {};

for (let num = 0; num < items.length; num ++) {
  priority[items[num]] = num + 1
}

let sum = 0;

for (let i = 0; i < rucksacks.length; i++) {
  let half = Math.ceil(rucksacks[i].length / 2);
  let firstHalf = rucksacks[i].slice(0, half);
  let secondHalf = rucksacks[i].slice(half);

  let newFirstHalf = [...new Set([...firstHalf])].join("");
  let newSecondHalf = [...new Set([...secondHalf])].join("");

  for (let x = 0; x < newFirstHalf.length; x++) {
    for (let y = 0; y < newSecondHalf.length; y++) {
      if (newFirstHalf[x] === newSecondHalf[y]) {
       sum += priority[newFirstHalf[x]];
      }
    }
  }
}

console.log(sum);