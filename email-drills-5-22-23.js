// 1. Function that takes a parameter which is an array of numbers (or anything) and prints each element.
//    hint (testing this function will need you to create an array literal)

// const getNumbers = (arr) => {
//   for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
//   }
// };

// getNumbers([3, 4, 5, 6, 7, 78, 9]);

// 2. Function that takes a parameter which is an array of numbers (or anything) and prints each element in reverse order.

// const getNumsInReverse = (arr) => {
//   for (let index = arr.length; index >= 0; index--) {
//     console.log(arr[index]);
//   }
// };

// getNumsInReverse([3, 4, 5, 6, 7, 78, 9]);

// Function takes parameter which is an array of numbers and RETURNS another array which only contains even elements from the input array
// e.g parameter array [2,5,6,7,9] => returned array [2,6]
//     (hint : Inside this function you'll need to create a new array to hold result and use .push to populate it with even numbers
//      even number test is n % 2 == 0)

// const getEvenNums = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// console.log(getEvenNums([45, 6567, 782, 4, 68, 9, 63, 77]));

// Same as 3 but new function that returns an odd numbered array

// const getOddNums = (arr) => {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 !== 0) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// };

// console.log(getOddNums([45, 6567, 782, 4, 68, 9, 63, 77]));

// Function that takes two parameters
//     1. input array of numbers
//      2. function that returns true/false and takes a number as a parameter
// e.g function filter(arr, fn) {

// const filter = (arr, bool) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (bool === true && arr[i] % 2 === 0) {
//       newArr.push(arr[i]);
//     } else if (bool === false && arr[i] % 2 !== 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// console.log(filter([45, 6567, 782, 4, 68, 9, 63, 77], false));

let counter = 0;
const increment = () => {
  counter++;
  console.log(counter);
};

increment();
increment();
increment();
