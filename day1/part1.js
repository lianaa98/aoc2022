let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n\n");

let elves = [];


for (let i of array) {

  if (i.includes("\n")) {
    let elf = i.toString().split("\n");
    let eachElf = 0;
    for (let num = 0; num < elf.length; num++) {
      eachElf = Number(eachElf) + Number(elf[num]);
    }
    elves.push(eachElf);
  } else if (!(i.includes("\n"))) {
    elves.push(Number(i));
  } 

}

console.log(Math.max(...elves));