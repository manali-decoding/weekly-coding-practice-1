// 5. Function that takes two parameters
//     1. input array of numbers
//      2. function that returns true/false and takes a number as a parameter

// e.g function filter(arr, fn) {
//        // make a new result array

//        // iterate over arr

//        // for every element in arr, call fn with that element as a parameter, assume return value to be true/false
//        // if return value true then add it to the results array

//        // return results array

//       }

//   Now test this function by calling filter and provide two params needed. Second param is of type function, so you can just pass in an anonymous function as well, or create a new function and pass its name --- or create a 'var' & assign an anonymous function to it and pass it into 'filter'

// 'Note that this is a little hard problem to grasp' - first 4 should be good enough

// function isEven(element) {
//   if (element % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function filter(arr, n) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (n(arr[i]) === false) {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// console.log(filter([1, 2, 3, 4, 5, 66, 88], isEven));

// 6. (Simple) - Implement a function 'increment' that takes no parameter and returns an integer but always return an incremented value from previous run.

// e.g  increment() => returns 1 (then call again)
//        increment() => returns 2  (then call again)
//        increment() => returns 3  and so on

// let count = 0;
// function increment() {
//   count++;
//   return count;
// }

// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

// const increment = (function () {
//   let count = 0;
//   return function () {
//     count += 1;
//     return count;
//   };
// })();

// console.log(increment());
// console.log(increment());

// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

// console.log(add());
// console.log(add());
// console.log(add());

// // ---------------------------------------------------
// // DAY 3
// // ---------------------------------------------------

// 1. Make an array of objects - each object contains two fields 'name', 'addr'.
//     Initialize the array with 3 objects each with name, addr

// let info = [
//   {
//     myName: 'Amit',
//     addr: '129 English Rose Circle',
//   },
//   {
//     myName: 'Manali',
//     addr: '22428 35th DR SE',
//   },
//   {
//     myName: 'Vyom',
//     addr: '222 Thomas Drive',
//   },
// ];

// 2. write function printNames(arr) - that takes the array created in #1 and prints all names.

// function printNames(info) {
//   for (let i = 0; i < info.length; i++) {
//     console.log(info[i].myName);
//   }
// }

// printNames(info);

// 3. write function printAddresses(arr) - that takes the array created in #1 and prints all addresses.

// function printAddresses() {
//   for (let i = 0; i < info.length; i++) {
//     console.log(info[i].addr);
//   }
// }

// printAddresses(info);

// 4. create an array - where each element is also an array of numbers.

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [554, 623, 23, 6456],
// ];

// 5. write a function flatten(arrayOfArrays) - that takes this array from #4, and extracts all numbers from it in a single array and returns that array
// e.g

// function flattenArr(arr) {
//   let flattenedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr === 'object') {
//       for (let j = 0; j < arr[i].length; j++) {
//         flattenedArr.push(arr[i][j]);
//       }
//     }
//   }
//   return flattenedArr;
// }

// console.log(flattenArr(arr));

// flatten([[1,2], [3,4], [5,6]])  => returns (not prints) [1,2,3,4,5,6]

// 6. Read about closures
// http://www.w3schools.com/js/js_function_closures.asp
// Try to convert 'increment' example from yesterday using a function closure instead of global variable

// let counter = 0;
// function increment() {
//   counter += 1;
//   return counter;
// }

// console.log(increment());
// console.log(increment());

// console.log(increment());

// const add = (function () {
//   counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

// console.log(add());
// console.log(add());
// console.log(add());

// console.log(add());
