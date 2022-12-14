const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  const sums = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    sums.push(addNums(i));
  }
  return sums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  const sums = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    sums.push(addManyNums(i));
  }
  return sums;
}

module.exports = [addNums10, addManyNums10];
