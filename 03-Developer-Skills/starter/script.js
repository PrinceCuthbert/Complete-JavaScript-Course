// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23)
//   console.log(23);

const calcAge = (birthyear) => 2037 - birthyear;

// console.log(calcAge(1991));

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // console.log("max-temperature:", max, "min-temperature:", min);

  console.log(max, min);
  console.log(`the amplitude is :${max - min}`);
  return max - min;
};
// calcTempAmplitude([3, 70, 49, 1]);
const amplitude = calcTempAmplitude(temperatures);

console.log("___the given array__");
// Using the given array
calcTempAmplitude([3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]);

// PROBLEM 2:
// Function should now receive 2 arrays of input
// 1)Understanding
// _Does function remain the same? Yes (We just merge 2 arrays)
// 2)Breaking up into sub-problems
// -Merge 2 Arrays
