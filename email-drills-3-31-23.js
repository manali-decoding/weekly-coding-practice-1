// 1. Function that takes a parameter which is an array of numbers (or anything) and prints each element.
//    hint (testing this function will need you to create an array literal)

// function getNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// getNumbers([2, 4, 1, 777, 34, 67, 5]);

// // 2. Function that takes a parameter which is an array of numbers (or anything) and prints each element in reverse order.

// function getNumsInReverese(arr) {
//   for (let i = arr.length; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }
// getNumsInReverese([2, 4, 1, 777, 34, 67, 5]);

// 3. Function takes parameter which is an array of numbers and RETURNS another array which only contains even elements from the input array
// e.g parameter array [2,5,6,7,9] => returned array [2,6]
//     (hint : Inside this function you'll need to create a new array to hold result and use .push to populate it with even numbers
//      even number test is n % 2 == 0)

// function getEvenNums(arr) {
//   let allEvens = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       allEvens.push(arr[i]);
//     }
//   }
//   return allEvens;
// }

// console.log(getEvenNums([2, 4, 1, 777, 34, 67, 5]));

// 4. Same as 3 but new function that returns an odd numbered array

// function allOdds(arr) {
//   let allOddNums = [];
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] % 2 !== 0) {
//       allOddNums.push(arr[j]);
//     }
//   }
//   return allOddNums;
// }
// console.log(allOdds([2, 4, 1, 777, 34, 67, 5]));

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

// function isOdd(num) {
//   if (num % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function filter(arr, n) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (n(arr[i]) === true) {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// console.log(filter([2, 4, 1, 777, 34, 67, 5], isOdd));

// 6. (Simple) - Implement a function 'increment' that takes no parameter and returns an integer but always return an incremented value from previous run.

// e.g  increment() => returns 1 (then call again)
//        increment() => returns 2  (then call again)
//        increment() => returns 3  and so on

// let num = 0;
// function increment() {
//   num++;
//   return num;
// }

// console.log(increment());
// console.log(increment());
// console.log(increment());

// closure

// const increment = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

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

// const increment = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

// console.log(increment());
// console.log(increment());

// console.log(increment());
// console.log(increment());

// // ---------------------------------------------------
// // DAY 3
// // ---------------------------------------------------
// 1. Make an array of objects - each object contains two fields 'name', 'addr'.
//     Initialize the array with 3 objects each with name, addr

let info = [
  {
    myName: 'Amit',
    addr: '123 asdd place',
  },
  {
    myName: 'Bo',
    addr: '6734 sdfggfg lane',
  },
  {
    myName: 'Manali',
    addr: '098484 sdhskfhff terrace',
  },
];

// 2. write function printNames(arr) - that takes the array created in #1 and prints all names.

// function printNames(info) {
//   for (let i = 0; i < info.length; i++) {
//     console.log(info[i].myName);
//   }
// }

// printNames(info);
// 3. write function printAddresses(arr) - that takes the array created in #1 and prints all addresses.

// function getAddr() {
//   for (let i = 0; i < info.length; i++) {
//     console.log(info[i].addr);
//   }
// }

// getAddr();
// 4. create an array - where each element is also an array of numbers.

let numbersArr = [
  [2342, 23, 11, 767, 3],
  [4535, 45, 76, 1, 8, 342],
  [977879, 3],
  [62, 67, 09, 46, 5, 932],
];

// 5. write a function flatten(arrayOfArrays) - that takes this array from #4, and extracts all numbers from it in a single array and returns that array
// e.g

// flatten([[1,2], [3,4], [5,6]])  => returns (not prints) [1,2,3,4,5,6]

// function flattenArr(numbersArr) {
//   let flttenedArr = [];
//   for (let i = 0; i < numbersArr.length; i++) {
//     for (let j = 0; j < numbersArr[i].length; j++) {
//       flttenedArr.push(numbersArr[i][j]);
//     }
//   }
//   return flttenedArr;
// }

// console.log(flattenArr(numbersArr));

// 6. Read about closures
// http://www.w3schools.com/js/js_function_closures.asp
// Try to convert 'increment' example from yesterday using a function closure instead of global variable
