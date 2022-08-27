const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const sums = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    // console.time("addNums");
    const startTime = Date.now();
    sums.push(addNums(i));
    console.log(Date.now() - startTime);
    // console.timeLog("addNums");
    // console.timeEnd("addNums");
  }
  return sums;
}

function addManyNums10Timing(increment) {
  const sums = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    // console.time("addManyNums");
    const startTime = Date.now();
    sums.push(addManyNums(i));
    console.log(Date.now() - startTime);
    // console.timeLog("addManyNums");
    // console.timeEnd("addManyNums");
  }
  return sums;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);

// function addNums100Timing(increment) {
//   const sums = [];
//   for (let i = increment; i <= increment * 100; i += increment) {
//     // console.time("addNums");
//     const startTime = Date.now();
//     sums.push(addNums(i));
//     console.log(Date.now() - startTime);
//     // console.timeLog("addNums");
//     // console.timeEnd("addNums");
//   }
//   return sums;
// }

// function addManyNums100Timing(increment) {
//   const sums = [];
//   for (let i = increment; i <= increment * 100; i += increment) {
//     // console.time("addManyNums");
//     const startTime = Date.now();
//     sums.push(addManyNums(i));
//     console.log(Date.now() - startTime);
//     // console.timeLog("addManyNums");
//     // console.timeEnd("addManyNums");
//   }
//   return sums;
// }

// n = 1000000;
// console.log(`addNums(${n}): `);
// addNums100Timing(1000000);

// console.log("\n***********\n");

// n = 1000;
// console.log(`addManyNums(${n}): `);
// addManyNums100Timing(5000);
