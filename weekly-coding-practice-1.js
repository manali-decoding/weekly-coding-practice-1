// // ---------------------------------------------------
// // WEEKLY CODING PRACTICE
// // ---------------------------------------------------

// // ---------------------------------------------------
// // DRILLS I
// // ---------------------------------------------------

// //Find maximum number from a list of numbers
// // findMax([2, 4, 6, 100, 2, 8]) => 100

// // Return a list of keys from object
// // getKeys({myName: "A", age: 44}) => [“name”, “age”]

// //Check if all numbers in an array are below a threshold (second parameter)
// // checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// //Add all even numbers from the list of numbers
// // addEvens([4, 5, 67, 100, 9]) => 104

// //Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// // addNums([4, 5, 67, 100, 9], true) => 104

// //Add two lists. Assume that the first array is shorter in length.
// // addLists([2, 4], [5, 6]) => [7, 10]

// // Check if a list has any duplicates
// // hasDups([4, 5, 67, 100, 9]) => false

// /* Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1} */

// // ---------------------------------------------------
// // DRILLS II - 2/20/23
// // ---------------------------------------------------

// Filter out even numbers
// filterEven([2, 4, 5, 101, 9, 8]) => [2, 4, 8]

// Return a list of values from object
// getValues({myName: 'A', age: 44}) => [“A”, “44”]

// Function takes two arrays as parameters. Return the larger sum of the elements of the two arrays
// getMaxSum([2, 4], [5, 6]) => 11

// getMaxSum([100, 4], [5, 6, 80]) => 104

// Filter array elements based on the predicate (function) passed as the second argument
// filter([4, 5, 67, 100, 9], e => e % 2 == 0) => [4, 100]

// filter([4, 5, 67, 100, 9], e => e > 50) => [67, 100]

// Build a HashTable / Object from a list of numbers. Assume even number of elements
// buildHashTable([“name”, “vyom”, “age”, 13]) => { “name” : “vyom”, “age”: 13 }

// // ---------------------------------------------------
// // CODING QUESTIONS END
// // ---------------------------------------------------

// //Find maximum number from a list of numbers
// // findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([2, 4, 6, 100, 2, 8]));

// // Return a list of keys from object
// // getKeys({“name” : “A”, “age” : 44”}) => [“name”, “age”]

// function getKeys(a) {
//   let arrOfProp = [];
//   for (let prop in a) {
//     arrOfProp.push(prop);
//   }
//   return arrOfProp;
//   // OR
//   return Object.keys(a);
// }
// console.log(getKeys({ myName: "A", age: 44 }));

// //Check if all numbers in an array are below a threshold (second parameter)
// // checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// function checkThreshold(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkThreshold([4, 5, 67, 100, 6, 9], 50));

// //Add all even numbers from the list of numbers
// // addEvens([4, 5, 67, 100, 9]) => 104

// function addEvens(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum = sum + arr[i];
//     }
//   }
//   return sum;
// }

// console.log(addEvens([4, 5, 67, 100, 9]));

// //Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// // addNums([4, 5, 67, 100, 9], true) => 104

// function addNums(array, bool) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (bool === true && array[i] % 2 === 0) {
//       sum = sum + array[i];
//     } else if (bool === false && array[i] % 2 !== 0) {
//       sum = sum + array[i];
//     }
//   }
//   return sum;
// }

// console.log(addNums([4, 5, 67, 100, 9], true));

// //Add two lists. Assume that the first array is shorter in length.
// // addLists([2, 4], [5, 6]) => [7, 10]

// // addLists([2, 4], [5, 6, 100]) => [7, 10]

// function addLists(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i] + arr2[i]);
//   }
//   return newArr;
// }

// console.log(addLists([2, 4], [5, 6, 100]));

// // Check if a list has any duplicates
// // hasDups([4, 5, 67, 100, 9]) => false

// // hasDups([4, 5, 67, 4, 100, 9]) => true
// function hasDups(arr) {
//   let a = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in a) {
//       return true;
//     } else {
//       a[arr[i]] = 1;
//     }
//   }
//   return false;
// }

// console.log(hasDups([4, 5, 67, 4, 100, 9]));

// /* Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1} */

// function buildFrequencyMap(arr) {
//   let a = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in a) {
//       a[arr[i]] = a[arr[i]] + 1;
//     } else {
//       a[arr[i]] = 1;
//     }
//   }
//   return a;
// }

// console.log(buildFrequencyMap([4, 5, 8, 5]));

// // ---------------------------------------------------
//2/1/2023
// // ---------------------------------------------------

//Find maximum number from a list of numbers
// findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([2, 4, 6, 100, 2, 8]));

// Return a list of keys from object
// getKeys({“name” : “A”, “age” : 44”}) => [“name”, “age”]

// function getKeys(a) {
//   let keys = [];
//   for (let key in a) {
//     keys.push(key);
//   }
//   return keys;
// }

// console.log(getKeys({ myName: 'A', age: 44 }));

// Check if all numbers in an array are below a threshold (second parameter)
// checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// checkThreshold([4, 5, 67, 100, 6, 9], 500) => true

// function checkThreshold(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkThreshold([4, 5, 7, 10, 6, 9], 50));

// Add all even numbers from the list of numbers
// addEvens([4, 5, 67, 100, 9]) => 104?

// function addEvens(arr) {
//   let sumOfEvens = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sumOfEvens = sumOfEvens + arr[i];
//     }
//   }
//   return sumOfEvens;
// }

// console.log(addEvens([4, 5, 67, 100, 9]));

// Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// addNums([4, 5, 67, 100, 9], true) => 104

// addNums([4, 5, 67, 100, 9], false) => 81

// function addNums(arr, bool) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (bool === true && arr[i] % 2 === 0) {
//       sum = sum + arr[i];
//     } else if (bool === false && arr[i] % 2 !== 0) {
//       sum = sum + arr[i];
//     }
//   }
//   return sum;
// }

// console.log(addNums([4, 5, 67, 100, 9], false));

// Add two lists. Assume that the first array is shorter in length.
// addLists([2, 4], [5, 6]) => [7, 10]

// addLists([2, 4], [5, 6, 100]) => [7, 10]

// function addLists(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i] + arr2[i]);
//   }
//   return newArr;
// }

// console.log(addLists([2, 4], [5, 6]));

// Check if a list has any duplicates
// hasDups([4, 5, 67, 100, 9]) => false

// hasDups([4, 5, 67, 4, 100, 9]) => true

// function hasDups(arr) {
//   let a = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in a) {
//       return true;
//     } else {
//       a[arr[i]] = 1;
//     }
//   }
//   return false;
// }

// console.log(hasDups([4, 5, 67, 100, 9]));

// Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1}

// function buildFrequencyMap(arr) {
//   let a = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in a) {
//       a[arr[i]] = a[arr[i]] + 1;
//     } else {
//       a[arr[i]] = 1;
//     }
//   }
//   return a;
// }

// console.log(buildFrequencyMap([4, 5, 4, 5, 6, 4, 4, 4, 4]));

// // ---------------------------------------------------
//2/2/2023
// // ---------------------------------------------------

//Find maximum number from a list of numbers
// findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let max = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//       max = arr[index];
//     }
//   }
//   return max;
// }

// console.log(findMax([2, 4, 6, 100, 2, 8]));

// Return a list of keys from object
// getKeys({myName: "A", age: 44}) => [“name”, “age”]

// function getKeys(a) {
//   let keys = [];
//   for (let key in a) {
//     keys.push(key);
//   }
//   return keys;
// }

// console.log(getKeys({ myName: 'A', age: 44 }));

// Check if all numbers in an array are below a threshold (second parameter)
// checkThreshold([4, 5, 67, 100, 6, 9], 50) => false
// checkThreshold([4, 5, 67, 100, 6, 9], 500) => true

// function checkThreshold(arr, num) {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > num) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkThreshold([4, 5, 67, 1000, 6, 9], 500));

// Add all even numbers from the list of numbers
// addEvens([4, 5, 67, 100, 9]) => 104?

// function addEvens(arr) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0) {
//       sum = sum + arr[index];
//     }
//   }
//   return sum;
// }

// console.log(addEvens([4, 5, 67, 100, 9]));

// Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// addNums([4, 5, 67, 100, 9], true) => 104
// addNums([4, 5, 67, 100, 9], false) => 81

// function addNums(arr, bool) {
//   let sumOfNums = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (bool === true && arr[index] % 2 === 0) {
//       sumOfNums += arr[index];
//     } else if (bool === false && arr[index] % 2 !== 0) {
//       sumOfNums += arr[index];
//     }
//   }
//   return sumOfNums;
// }

// console.log(addNums([4, 5, 67, 100, 9], false));

// Add two lists. Assume that the first array is shorter in length.
// addLists([2, 4], [5, 6]) => [7, 10]
// addLists([2, 4], [5, 6, 100]) => [7, 10]

// function addLists(arr1, arr2) {
//   let newArr = [];
//   for (let index = 0; index < arr1.length; index++) {
//     newArr.push(arr1[index] + arr2[index]);
//   }
//   return newArr;
// }

// console.log(addLists([2, 4], [5, 6, 100]));

// Check if a list has any duplicates
// hasDups([4, 5, 67, 100, 9]) => false
// hasDups([4, 5, 67, 4, 100, 9]) => true

// function hasDups(arr) {
//   let a = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] in a) {
//       return true;
//     } else {
//       a[arr[index]] = 1;
//     }
//   }
//   return false;
// }

// console.log(hasDups([4, 5, 67, 100, 9]));

// Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1}

// function buildFrequencyMap(arr) {
//   let a = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] in a) {
//       a[arr[index]] = a[arr[index]] + 1;
//     } else {
//       a[arr[index]] = 1;
//     }
//   }
//   return a;
// }

// console.log(buildFrequencyMap([4, 5, 4, 5, 6]));

// // ---------------------------------------------------
// // 2/3/2023
// // ---------------------------------------------------

// //Find maximum number from a list of numbers
// // findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let max = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//       max = arr[index];
//     }
//   }
//   return max;
// }

// console.log(findMax([2, 4, 6, 100, 2, 8]));

// // Return a list of keys from object
// // getKeys({MyName: "A", age: 44}) => [“name”, “age”]

// function getKeys(a) {
//   let newArr = [];
//   for (const key in a) {
//     newArr.push(key);
//   }
//   return newArr;
// }

// console.log(getKeys({ MyName: 'A', age: 44 }));

// //Check if all numbers in an array are below a threshold (second parameter)
// // checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// function checkThreshold(arr, num) {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > num) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkThreshold([4, 5, 67, 100, 6, 9], 50));

// //Add all even numbers from the list of numbers
// // addEvens([4, 5, 67, 100, 9]) => 104

// function addEvens(arr) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0) {
//       sum += arr[index];
//     }
//   }
//   return sum;
// }

// console.log(addEvens([4, 5, 67, 100, 9]));

// //Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// // addNums([4, 5, 67, 100, 9], true) => 104

// function addNums(arr, bool) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0 && bool === true) {
//       sum += arr[index];
//     } else if (arr[index] % 2 !== 0 && bool === false) {
//       sum += arr[index];
//     }
//   }
//   return sum;
// }

// console.log(addNums([4, 5, 66, 100, 9], false));

// //Add two lists. Assume that the first array is shorter in length.
// // addLists([2, 4], [5, 6]) => [7, 10]

// function addLists(arr1, arr2) {
//   let newArr = [];
//   for (let index = 0; index < arr1.length; index++) {
//     newArr.push(arr1[index] + arr2[index]);
//   }
//   return newArr;
// }

// console.log(addLists([2, 4], [5, 6]));

// // Check if a list has any duplicates
// // hasDups([4, 5, 67, 100, 9]) => false

// function hasDups(arr) {
//   let a = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] in a) {
//       return true;
//     } else {
//       a[arr[index]] = 1;
//     }
//   }
//   return false;
// }

// console.log(hasDups([4, 5, 4, 67, 100, 9]));

// /* Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1} */

// function buildFrequencyMap(arr) {
//   let x = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] in x) {
//       x[arr[index]] = x[arr[index]] + 1;
//     } else if (!(arr[index] in x)) {
//       x[arr[index]] = 1;
//     }
//   }
//   return x;
// }
// console.log(buildFrequencyMap([4, 5, 4, 5, 6]));

// // ---------------------------------------------------
// // 2/6/2023
// // ---------------------------------------------------

// //Find maximum number from a list of numbers
// // findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let max = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//       max = arr[index];
//     }
//   }
//   return max;
// }

// console.log(findMax([2, 4, 6, 100, 2, 8]));

// // Return a list of keys from object
// // getKeys({“name” : “A”, “age” : 44”}) => [“name”, “age”]

// function getKeys(a) {
//   let newArr = [];
//   for (const key in a) {
//     newArr.push(key);
//   }
//   return newArr;
// }

// console.log(getKeys({ myName: 'A', age: 44 }));

// //Check if all numbers in an array are below a threshold (second parameter)
// // checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// function checkThreshold(arr, num) {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > num) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkThreshold([4, 5, 6, 10, 6, 9], 50));

// //Add all even numbers from the list of numbers
// // addEvens([4, 5, 67, 100, 9]) => 104

// function addEvens(arr) {
//   let sumOfEvens = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0) {
//       sumOfEvens += arr[index];
//     }
//   }
//   return sumOfEvens;
// }

// console.log(addEvens([4, 5, 67, 100, 9]));

// //Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// // addNums([4, 5, 7, 100, 2], true) => 104

// function addNums(arr, bool) {
//   let sum = 0;
//   for (let element = 0; element < arr.length; element++) {
//     if (arr[element] % 2 === 0 && bool === true) {
//       sum += arr[element];
//     } else if (arr[element] % 2 !== 0 && bool === false) {
//       sum += arr[element];
//     }
//   }
//   return sum;
// }

// console.log(addNums([4, 5, 7, 10, 2], false));

// //Add two lists. Assume that the first array is shorter in length.
// // addLists([2, 4], [5, 6]) => [7, 10]

// function addLists(arr1, arr2) {
//   let addArray = [];
//   for (let index = 0; index < arr1.length; index++) {
//     addArray.push(arr1[index] + arr2[index]);
//   }
//   return addArray;
// }

// console.log(addLists([2, 4], [5, 6]));

// // Check if a list has any duplicates
// // hasDups([4, 5, 67, 100, 9]) => false

// function hasDups(arr) {
//   let a = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] in a) {
//       return true;
//     } else {
//       a[arr[index]] = 1;
//     }
//   }
//   return false;
// }
// console.log(hasDups([4, 5, 67, 4, 100, 9]));

// /* Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// function buildFrequencyMap(arr) {
//   let a = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] in a) {
//       a[arr[index]] = a[arr[index]] + 1;
//     } else {
//       a[arr[index]] = 1;
//     }
//   }
//   return a;
// }
// console.log(buildFrequencyMap([4, 5, 4, 5, 6]));

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1} */

// // ---------------------------------------------------
// // 2/7/23
// // ---------------------------------------------------

// //Find maximum number from a list of numbers
// // findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let max = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//       max = arr[index];
//     }
//   }
//   return max;
// }
// console.log(findMax([2, 4, 6, 100, 2, 8]));

// // Return a list of keys from object
// // getKeys({myName: "A", age: 44}) => [“name”, “age”]

// function getKeys(a) {
//   let keys = [];
//   for (const key in a) {
//     keys.push(key);
//   }
//   return keys;
// }
// console.log(getKeys({ myName: 'A', age: 44 }));

// //Check if all numbers in an array are below a threshold (second parameter)
// // checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// function checkThreshold(arr, num) {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > num) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkThreshold([4, 5, 6, 10, 6, 9], 50));

// //Add all even numbers from the list of numbers
// // addEvens([4, 5, 67, 100, 9]) => 104

// function addEvens(arr) {
//   let evens = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0) {
//       evens += arr[index];
//     }
//   }
//   return evens;
// }
// console.log(addEvens([4, 5, 67, 100, 9]));

// //Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// // addNums([4, 5, 67, 100, 9], true) => 104

// function addNums(arr, bool) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0 && bool === true) {
//       sum += arr[index];
//     } else if (arr[index] % 2 !== 0 && bool === false) {
//       sum += arr[index];
//     }
//   }
//   return sum;
// }

// console.log(addNums([4, 5, 6, 100, 9], false));

// //Add two lists. Assume that the first array is shorter in length.
// // addLists([2, 4], [5, 6]) => [7, 10]

// function addLists(arr1, arr2) {
//   let newArr = [];
//   for (let index = 0; index < arr1.length; index++) {
//     newArr.push(arr1[index] + arr2[index]);
//   }
//   return newArr;
// }

// console.log(addLists([2, 4], [5, 6]));

// // Check if a list has any duplicates
// // hasDups([4, 5, 67, 100, 9]) => false

// function hasDups(arr) {
//   let x = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] in x) {
//       return true;
//     } else {
//       x[arr[index]] = 1;
//     }
//   }
//   return false;
// }

// console.log(hasDups([4, 5, 67, 4, 100, 9]));

// /* Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1} */

// function buildFrequencyMap(array) {
//   let x = {};
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] in x) {
//       x[array[index]] = x[array[index]] + 1;
//     } else {
//       x[array[index]] = 1;
//     }
//   }
//   return x;
// }

// console.log(buildFrequencyMap([4, 5, 4, 5, 6]));

// // ---------------------------------------------------
// // 2/10/23
// // ---------------------------------------------------

// //Find maximum number from a list of numbers
// // findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let max = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//       max = arr[index];
//     }
//   }
//   return max;
// }

// console.log(findMax([2, 4, 6, 100, 2, 8]));

// // Return a list of keys from object
// // getKeys({myName: "A", age: 44}) => [“name”, “age”]

// function getKeys(x) {
//   let arr = [];
//   for (const key in x) {
//     arr.push(key);
//   }
//   return arr;
// }

// console.log(getKeys({ myName: 'A', age: 44 }));

// //Check if all numbers in an array are below a threshold (second parameter)
// // checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// function checkThreshold(arr, num) {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > num) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkThreshold([4, 5, 6, 10, 6, 9], 50));

// //Add all even numbers from the list of numbers
// // addEvens([4, 5, 67, 100, 9]) => 104

// function addEvens(arr) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0) {
//       sum += arr[index];
//     }
//   }
//   return sum;
// }

// console.log(addEvens([4, 5, 67, 100, 9]));

// //Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// // addNums([4, 5, 67, 100, 9], true) => 104

// function addNums(arr, bool) {
//   let sumOfEvens = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0 && bool === true) {
//       sumOfEvens += arr[index];
//     } else if (arr[index] % 2 !== 0 && bool === false) {
//       sumOfEvens += arr[index];
//     }
//   }
//   return sumOfEvens;
// }
// console.log(addNums([4, 5, 6, 100, 9], false));

// //Add two lists. Assume that the first array is shorter in length.
// // addLists([2, 4], [5, 6]) => [7, 10]

// function addLists(arr1, arr2) {
//   let newArr = [];
//   for (let index = 0; index < arr1.length; index++) {
//     newArr.push(arr1[index] + arr2[index]);
//   }
//   return newArr;
// }

// console.log(addLists([2, 4], [5, 6, 6]));

// // Check if a list has any duplicates
// // hasDups([4, 5, 67, 100, 9]) => false

// function hasDups(arr) {
//   let a = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] in a) {
//       return true;
//     } else {
//       a[arr[index]] = 1;
//     }
//   }
//   return false;
// }

// console.log(hasDups([4, 5, 4, 67, 100, 9]));
// /* Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1} */

// function buildFrequencyMap(arr) {
//   let a = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] in a) {
//       a[arr[index]] = a[arr[index]] + 1;
//     } else {
//       a[arr[index]] = 1;
//     }
//   }
//   return a;
// }

// console.log(buildFrequencyMap([4, 5, 8, 5, 3, 8, 8]));

// // ---------------------------------------------------
// // 2/20/23
// // ---------------------------------------------------

// //Find maximum number from a list of numbers
// // findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([2, 4, 6, 100, 2, 8]));

// // Return a list of keys from object
// // getKeys({myName: "A", age: 44}) => [“name”, “age”]

// function getKeys(a) {
//   let keys = [];
//   for (const key in a) {
//     keys.push(key);
//   }
//   return keys;
// }

// console.log(getKeys({ myName: 'A', age: 44 }));

// //Check if all numbers in an array are below a threshold (second parameter)
// // checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// function checkThreshold(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkThreshold([4, 5, 6, 10, 6, 9], 50));

// //Add all even numbers from the list of numbers
// // addEvens([4, 5, 67, 100, 9]) => 104

// function addEven(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(addEven([4, 5, 67, 100, 9]));

// //Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// // addNums([4, 5, 67, 100, 9], true) => 104

// function addNums(arr, bool) {
//   let sumOfNums = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (bool === true && arr[i] % 2 === 0) {
//       sumOfNums += arr[i];
//     } else if (bool === false && arr[i] % 2 !== 0) {
//       sumOfNums += arr[i];
//     }
//   }
//   return sumOfNums;
// }

// console.log(addNums([4, 5, 6, 100, 9], false));

// //Add two lists. Assume that the first array is shorter in length.
// // addLists([2, 4], [5, 6]) => [7, 10]

// function addLists(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i] + arr2[i]);
//   }
//   return newArr;
// }

// console.log(addLists([2, 4], [5, 6]));

// // Check if a list has any duplicates
// // hasDups([4, 5, 67, 100, 9]) => false

// function checkDuplicates(arr) {
//   let x = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in x) {
//       return true;
//     } else {
//       x[arr[i]] = 1;
//     }
//   }
//   return false;
// }
// console.log(checkDuplicates([4, 5, 67, 100, 9]));

// /* Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1} */

// function buildFrequencyMap(arr) {
//   let x = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in x) {
//       x[arr[i]] = x[arr[i]] + 1;
//     } else {
//       x[arr[i]] = 1;
//     }
//   }
//   return x;
// }

// console.log(buildFrequencyMap([4, 5, 4, 5, 6]));

// // ---------------------------------------------------
// // DRILLS II - 2/20/23
// // ---------------------------------------------------

// Filter out even numbers
// filterEven([2, 4, 5, 101, 9, 8]) => [2, 4, 8]

// function filterEven(arr) {
//   let evenNums = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNums.push(arr[i]);
//     }
//   }
//   return evenNums;
// }

// console.log(filterEven([2, 4, 5, 101, 9, 8]));

// Return a list of values from object
// getValues({myName: A, age: 44}) => [“A”, “44”]

// function getValues(a) {
//   let values = [];
//   for (const key in a) {
//     values.push(a[key]);
//   }
//   return values;
// }

// console.log(getValues({ myName: 'A', age: 44 }));

// Function takes two arrays as parameters. Return the larger sum of the elements of the two arrays
// getMaxSum([2, 4], [5, 6]) => 11
// getMaxSum([100, 4], [5, 6, 80]) => 104

// function getMaxSum(arr1, arr2) {
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i];
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     sum2 += arr2[j];
//   }

//   if (sum1 > sum2) {
//     return sum1;
//   } else {
//     return sum2;
//   }
// }

// console.log(getMaxSum([2, 14], [5, 6]));

// Filter array elements based on the predicate (function) passed as the second argument
// filter([4, 5, 67, 100, 9], e => e % 2 == 0) => [4, 100]
// filter([4, 5, 67, 100, 9], e => e > 50) => [67, 100]

// function filter(arr, predicate) {
//   return arr.filter(predicate);
// }
// console.log(filter([4, 5, 67, 100, 9], (e) => e > 50));

// Build a HashTable / Object from a list of numbers. Assume even number of elements
// buildHashTable([“name”, “vyom”, “age”, 13]) => { “name” : “vyom”, “age”: 13 }

// function buildHashTable(arr) {
//   let x = {};
//   for (let i = 0; i < arr.length; i++) {
//     x[arr[i]] = arr[i + 1];
//     i++;
//   }
//   return x;
// }

// console.log(buildHashTable(['myName', 'vyom', 'age', 4]));
// console.log(buildHashTable([('myName', 'vyom', 'age', 4)]));

// // ---------------------------------------------------
// // DRILLS II - 2/22/23
// // ---------------------------------------------------

// Filter out even numbers
// filterEven([2, 4, 5, 101, 9, 8]) => [2, 4, 8]

// function filterEven(arr) {
//   let evenNums = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNums.push(arr[i]);
//     }
//   }
//   return evenNums;
// }

// console.log(filterEven([2, 4, 5, 101, 9, 8]));

// Return a list of values from object
// getValues({myName: 'A', age: 44}) => [“A”, “44”]

// function getValues(a) {
//   let newArr = [];
//   for (const key in a) {
//     newArr.push(a[key]);
//   }
//   return newArr;
// }

// console.log(getValues({ myName: 'A', age: 44 }));

// Function takes two arrays as parameters. Return the larger sum of the elements of the two arrays
// getMaxSum([2, 4], [5, 6]) => 11

// getMaxSum([100, 4], [5, 6, 80]) => 104

// function getMaxSum(arr1, arr2) {
//   let sum1 = 0;
//   let sum2 = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i];
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     sum2 += arr2[j];
//   }

//   if (sum1 > sum2) {
//     return sum1;
//   } else {
//     return sum2;
//   }
// }

// console.log(getMaxSum([100, 4], [5, 6, 80]));

// Filter array elements based on the predicate (function) passed as the second argument
// filter([4, 5, 67, 100, 9], e => e % 2 == 0) => [4, 100]
// filter([4, 5, 67, 100, 9], e => e > 50) => [67, 100]

// function filter(arr, predicate) {
//   // return arr.filter(predicate);
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (predicate(arr[i]) === true) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filter([4, 5, 67, 100, 9], (e) => e % 2 === 0));

// Build a HashTable / Object from a list of numbers. Assume even number of elements
// buildHashTable([“name”, “vyom”, “age”, 13]) => { “name” : “vyom”, “age”: 13 }

// function buildHashTable(arr) {
//   let x = {};
//   for (let i = 0; i < arr.length; i++) {
//     x[arr[i]] = arr[i + 1];
//     i++;
//   }
//   return x;
// }

// console.log(buildHashTable(['myName', 'vyom', 'age', 4]));

// // ---------------------------------------------------
// // 2/27/2023
// // ---------------------------------------------------

// //Find maximum number from a list of numbers
// // findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([2, 4, 6, 100, 2, 8]));

// // Return a list of keys from object
// // getKeys({myName: "A", age: 44}) => [“name”, “age”]

// function getKeys(a) {
//   let arr = [];
//   for (const key in a) {
//     arr.push(key);
//   }
//   return arr;
// }

// console.log(getKeys({ myName: 'A', age: 44 }));

// //Check if all numbers in an array are below a threshold (second parameter)
// // checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// function checkThreshold(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkThreshold([4, 5, 7, 10, 6, 9], 50));

// //Add all even numbers from the list of numbers
// // addEvens([4, 5, 67, 100, 9]) => 104

// function addEvens(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(addEvens([4, 5, 67, 100, 9]));

// //Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// // addNums([4, 5, 67, 100, 9], true) => 104

// function addNums(arr, bool) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && bool === true) {
//       sum += arr[i];
//     } else if (arr[i] % 2 !== 0 && bool === false) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(addNums([4, 5, 6, 100, 9], false));

// //Add two lists. Assume that the first array is shorter in length.
// // addLists([2, 4], [5, 6]) => [7, 10]

// function addLists(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i] + arr2[i]);
//   }
//   return newArr;
// }
// console.log(addLists([2, 4], [5, 6]));

// // Check if a list has any duplicates
// // hasDups([4, 5, 67, 100, 9]) => false

// function hasDups(arr) {
//   let x = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in x) {
//       return true;
//     } else {
//       x[arr[i]] = 1;
//     }
//   }
//   return false;
// }

// console.log(hasDups([4, 5, 4, 67, 100, 9]));

// /* Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1} */

// function buildFrequencyMap(arr) {
//   let x = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in x) {
//       x[arr[i]] = x[arr[i]] + 1;
//     } else {
//       x[arr[i]] = 1;
//     }
//   }
//   return x;
// }

// console.log(buildFrequencyMap([4, 5, 4, 5, 6]));

// // ---------------------------------------------------
// // DRILLS II - 2/20/23
// // ---------------------------------------------------

// Filter out even numbers
// filterEven([2, 4, 5, 101, 9, 8]) => [2, 4, 8]

// function filterEven(arr) {
//   let evens = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evens.push(arr[i]);
//     }
//   }
//   return evens;
// }

// console.log(filterEven([2, 4, 5, 101, 9, 8]));

// Return a list of values from object
// getValues({myName: 'A', age: 44}) => [“A”, “44”]

// function getValues(a) {
//   let values = [];
//   for (const key in a) {
//     values.push(a[key]);
//   }
//   return values;
// }

// console.log(getValues({ myName: 'A', age: 44 }));

// Function takes two arrays as parameters. Return the larger sum of the elements of the two arrays
// getMaxSum([2, 4], [5, 6]) => 11

// function getMaxSum(arr1, arr2) {
//   let maxSum1 = 0;
//   let maxSum2 = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     maxSum1 += arr1[i];
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     maxSum2 += arr2[j];
//   }

//   if (maxSum1 > maxSum2) {
//     return maxSum1;
//   } else {
//     return maxSum2;
//   }
// }

// console.log(getMaxSum([2, 14], [5, 6]));

// getMaxSum([100, 4], [5, 6, 80]) => 104

// Filter array elements based on the predicate (function) passed as the second argument
// filter([4, 5, 67, 100, 9], e => e % 2 == 0) => [4, 100]

// filter([4, 5, 67, 100, 9], e => e > 50) => [67, 100]

// function filter(arr, predicate) {
//   // return arr.filter(predicate);
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (predicate(arr[i]) === true) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filter([4, 5, 67, 100, 9], (e) => e % 2 === 0));

// Build a HashTable / Object from a list of numbers. Assume even number of elements
// buildHashTable([“name”, “vyom”, “age”, 13]) => { “name” : “vyom”, “age”: 13 }

// function buildHashTable(arr) {
//   let x = {};
//   for (let i = 0; i < arr.length; i++) {
//     x[arr[i]] = arr[i + 1];
//     i++;
//   }
//   return x;
// }

// console.log(buildHashTable(['myName', 'vyom', 'age', 13]));

// scores = {
//   MU: 6,
//   Chelsea: 3,
//   MC: 9,
//   Laliga: 2,
// };

// function getResults(a) {
//   let arr = [];
//   for (const key in a) {
//     arr.push([key]);
//   }

//   if (a[arr[0]] > a[arr[1]]) {
//     scores[arr[0]] = scores[arr[0]] + 3;
//   } else if (a[arr[0]] < a[arr[1]]) {
//     scores[arr[1]] = scores[arr[1]] + 3;
//   } else if (a[arr[0]] === a[arr[1]]) {
//     scores[arr[0]] = scores[arr[0]] + 1;
//     scores[arr[1]] = scores[arr[1]] + 1;
//   }
//   return scores;
// }

// console.log(getResults({ MU: 3, MC: 7 }));

// // ---------------------------------------------------
// // EMAILS DRILLS  - 3/1/23 DAY 2
// // ---------------------------------------------------
// 1. Function that takes a parameter which is an array of numbers (or anything) and prints each element.
//    hint (testing this function will need you to create an array literal)

// function eachElm(arr) {
//   for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
//   }
// }

// eachElm([1, 2, 3, 4, 5]);

// 2. Function that takes a parameter which is an array of numbers (or anything) and prints each element in reverse order.

// function reverseNums(arr) {
//   for (let i = arr.length; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// reverseNums([1, 2, 3, 4, 5]);

// 3. Function takes parameter which is an array of numbers and RETURNS another array which only contains even elements from the input array
// e.g parameter array [2,5,6,7,9] => returned array [2,6]
//     (hint : Inside this function you'll need to create a new array to hold result and use .push to populate it with even numbers
//      even number test is n % 2 == 0)

// function evenNums(arr) {
//   let nums = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       nums.push(arr[i]);
//     }
//   }
//   return nums;
// }

// console.log(evenNums([2, 5, 6, 7, 9]));

// 4. Same as 3 but new function that returns an odd numbered array

// function oddNums(arr) {
//   let oddNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       oddNumbers.push(arr[i]);
//     }
//   }
//   return oddNumbers;
// }

// console.log(oddNums([2, 5, 6, 7, 9]));

// 5. Function that takes two parameters
//     1. input array of numbers
//      2. function that returns true/false and takes a number as a parameter

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function filter(arr, fn) {
//   let results = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i]) === true) {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// console.log(filter([2, 5, 6, 8, 9, 19], isEven));

// 6. (Simple) - Implement a function 'increment' that takes no parameter and returns an integer but always return an incremented value from previous run.

// e.g  increment() => returns 1 (then call again)
//        increment() => returns 2  (then call again)
//        increment() => returns 3  and so on

// counter = 0;
// function increment() {
//   counter++;
//   return counter;
// }

// console.log(increment());
// console.log(increment());
// console.log(increment());

// // ---------------------------------------------------
// // EMAILS DRILLS  - 3/1/23 DAY 3
// // ---------------------------------------------------

// 1. Make an array of objects - each object contains two fields 'name', 'addr'.
//     Initialize the array with 3 objects each with name, addr

// let info = [
//   {
//     myName: 'Amit',
//     addr: '123, Thomas Dr',
//   },
//   {
//     myName: 'Vyom',
//     addr: '22428 35th dr',
//   },
//   {
//     myName: 'Manali',
//     addr: '129 English Rose Circle',
//   },
// ];

// 2. write function printNames(arr) - that takes the array created in #1 and prints all names.

// function printNames(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]['myName']);
//   }
// }

// printNames(info);
// 3. write function printAddresses(arr) - that takes the array created in #1 and prints all addresses.

// function printAddresses(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]['addr']);
//   }
// }
// printAddresses(info);

// 4. create an array - where each element is also an array of numbers.

// let array = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [7, 8, 9],
// ];

// 5. write a function flatten(arrayOfArrays) - that takes this array from #4, and extracts all numbers from it in a single array and returns that array
// e.g

// flatten([[1,2], [3,4], [5,6]])  => returns (not prints) [1,2,3,4,5,6]

// function flattenArr(array) {
//   let flattenedArr = [];
//   for (let index = 0; index < array.length; index++) {
//     for (let i = 0; i < array[index].length; i++) {
//       flattenedArr.push(array[index][i]);
//     }
//   }
//   return flattenedArr;
// }

// console.log(flattenArr(array));

// 6. Read about closures
// http://www.w3schools.com/js/js_function_closures.asp
// Try to convert 'increment' example from yesterday using a function closure instead of global variable

// // ---------------------------------------------------
// // EMAILS DRILLS  - 3/1/23 DAY 4
// // ---------------------------------------------------
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

// const counter = (function () {
//   let count = 0;
//   return function () {
//     count += 1;
//     return count;
//   };
// })();
// console.log(counter());

// console.log(counter());

// console.log(counter());

// 1. Function that returns all current members (make sure to not return nobody)
//    hint. iterate over object keys using for - in  loop

// function members(a) {
//   let memberNames = [];
//   for (const key in a) {
//     memberNames.push(key);
//   }
//   return memberNames;
// }

// console.log(members(library));

// 2. Function that returns all the books in the library
//    hint. you'll need to make a result array to collect all book names as you iterate over library object

// function allBooks(a) {
//   let allBooksInLibrary = [];
//   for (const key in a) {
//     // console.log(typeof a[key]);
//     if (typeof a[key] === 'object') {
//       for (let i = 0; i < a[key].length; i++) {
//         allBooksInLibrary.push(a[key][i]);
//       }
//     }
//   }
//   return allBooksInLibrary;
// }

// console.log(allBooks(library));

// 3. Function to return all books checked out by a member passed as a param.
//    If the member name is invalid or does not have any books checked out return an empty array

// function booksThatAreCheckedOut(a, member) {
//   let arrayOfBooksCheckedOut = [];
//   for (let key in a) {
//     if (key !== member || a[key].length === 0) {
//       return [];
//     } else if (key == member) {
//       for (let i = 0; i < a[key].length; i++) {
//         // console.log(a[key][i]);
//         arrayOfBooksCheckedOut.push(a[key][i]);
//         console.log(arrayOfBooksCheckedOut);
//       }
//       return arrayOfBooksCheckedOut;
//     }
//   }
// }

// function booksThatAreCheckedOut(member) {
//   let arrayOfBooksCheckedOut = [];
//   if (member in library) {
//     for (let i = 0; i < library[member].length; i++) {
//       arrayOfBooksCheckedOut.push(library[member][i]);
//     }
//   } else {
//     return [];
//   }

//   return arrayOfBooksCheckedOut;
// }

// console.log(booksThatAreCheckedOut('abc'));

// 4. Function that takes a parameter bookname - and returns member name who have checked out the book. Return empty string if bookname is not checked out by anyone.

const library = {
  amit: ['book1', 'book2'],
  vyom: ['book4', 'book5'],
  manali: ['book6', 'book7'],
  abc: ['book8', 'book9'],
  nobody: ['book100', 'book101'],
};
// function checkedOutByMember(bookName) {
//   for (const key in library) {
//     for (let i = 0; i < library[key].length; i++) {
//       if (library[key][i] === bookName) {
//         return key;
//       }
//     }
//   }
//   return 'this';
// }

// console.log(checkedOutByMember('book100'));

// 5. function checkout(memberName, bookName)
//     This function updates library object to reflect checkout operation. Note that it involves
//    1. removing bookname from 'nobody' assigned array  (hint. find index of the book to be removed from the array and use splice method of array to drop the element from it.
// e.g l = [1,2,4,5],  l.splice(2,1) --- it starts deleting at index number 2 and does it for 1 element. so results in l == [1,2,5]

//     2. adding it to memberName assigned array.

//     If memberName or bookName is not valid - print a msg saying so.
//     If checkout is successful - print a msg saying memberName has checked out bookName

// function checkout(memberName, bookName) {
//   if (!(memberName in library)) {
//     console.log(`The ${memberName} is invalid`);
//   } else if (library['nobody'].includes(bookName) === false) {
//     console.log(library["'nobody'"]);
//     console.log(`The ${bookName} is not found`);
//   } else {
//     let index = library['nobody'].indexOf(bookName);
//     console.log(index);
//     let bookIndex = library['nobody'].splice(index, 1);

//     for (let i = 0; i < bookIndex.length; i++) {
//       library[memberName].push(bookIndex[i]);
//     }
//     console.log(`The ${bookName} has been checked out by ${memberName}`);
//   }
// }

// checkout('amit', 'book100');
// 6. function returnBook(memberName, bookName)
//    same as above except bookName moves from member array to 'nobody'.
//    Print messages of success or failure (memberName or bookName invalid)

// function returnBook(memberName, bookName) {
//   if (!(memberName in library)) {
//     console.log(`The ${memberName} is invalid`);
//   } else if (library[memberName].includes(bookName) === false) {
//     console.log(`The ${bookName} is not found`);
//   } else if (library[memberName].includes(bookName)) {
//     let indexOfBook = library[memberName].indexOf(bookName);
//     let bookIndex = library[memberName].splice(indexOfBook, 1);
//     console.log(bookIndex);
//     for (let i = 0; i < bookIndex.length; i++) {
//       library['nobody'].push(bookIndex[i]);
//     }
//     console.log(
//       `The ${bookName} has been returned to the library by ${memberName}`
//     );
//   }
// }

// returnBook('abc', 'book8');

// 7. Add a new MemberName
//     function addNewMember(memberName) -
//     adds new entry in library object with empty booklist

// function addNewMember(memberName) {
//   library[memberName] = [];
//   return library;
// }

// console.log(addNewMember('devika'));

// 8. Add a new book to library
//     function addNewBook(bookName)
//     - adds new bookName to 'nobody' list since its not checked out yet

// function addNewBook(bookName) {
//   library['nobody'].push(bookName);
//   return library;
// }

// console.log(addNewBook('book555'));

// // ---------------------------------------------------
// // EMAILS DRILLS  - 3/2/23 DAY 5
// // ---------------------------------------------------
// a. Function takes a string (which is a sentence) as a param and return the number of words in it.
// e.g 'I love bebu' => should return 3
// (hint - string has 'split' method - look it up, split on space)

// function getNumberOfWords(str) {
//   let words = str.split(' ');
//   return words.length;
// }

// console.log(getNumberOfWords('coding is powerful'));

// b. Function takes string and returns an array of word lengths
// e.g 'I love bebu' => [1, 4, 4]

// function arrOfWords(str) {
//   let words = str.split(' ');
//   let length = [];
//   //   console.log(words);
//   for (let i = 0; i < words.length; i++) {
//     length.push(words[i].length);
//   }
//   return length;
// }

// console.log(arrOfWords('coding is powerful'));

// c. Function takes a string (sentence) and returns a new string with words reversed
// e.g 'I love vyom' => 'vyom love I'
// This is a little bit hard - work on logic first

// function reversedWords(str) {
//   let arr = str.split(' ');
// //   console.log(arr);
//   let reveresedArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reveresedArr.push(arr[i]);
//   }
//   return reveresedArr;
// }

// console.log(reversedWords('coding is powerful'));

// d. Function takes an array of strings and a search string param
// function(inputArray, searchTerm)
// It should return another array containing string that contains 'searchTerm'
// e.g search(['aabbb', 'xxx', 'ggbbee'], 'bb')
// it should return ['aabbb', 'ggbbee']
// (hint string has indexOf method to return matching string index - look it up on w3schools. Search not found will return index as -1, use that in condition

// function searchItem(inputArray, searchTerm) {
//   let resultArr = [];
//   let position;
//   for (let i = 0; i < inputArray.length; i++) {
//     position = inputArray[i].search(searchTerm);
//     if (position !== -1) {
//       resultArr.push(inputArray[i]);
//     }
//   }
//   return resultArr;
// }
// console.log(searchItem(['aabbb', 'xxx', 'cceebbgg', 'ggbbee'], 'xx'));

// // ---------------------------------------------------
// // EMAILS DRILLS  - 3/3/23 DAY 6
// // ---------------------------------------------------
// 1. Function flatten(array)

// This version of flatten is little different than what we did before
// array can be mixed e.g [3, 4, [5, 6, 7], [9, 10],]  => this should return a single array with [3, 4,5,6,7,9.10]

// So you'll need to flatten the nested array only after checking (typeof) that it is an array (object).

// function flatten(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i]) === true) {
//       //   console.log('true');
//       for (let j = 0; j < arr[i].length; j++) {
//         newArr.push(arr[i][j]);
//       }
//     } else if (Array.isArray(arr[i]) === false) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(flatten([3, 4, [5, 6, 7], [9, 10]]));

// 2. Write function to Uppercase first letter of the string
// e.g ("manali")  ==> "Manali"
// (hint - use .split("") to create an array of single character strings,  and convert first on using .toUpperCase()  method.
// Function should return the output not just print it

// function toUpperCase(str) {
//   let result = [];
//   let arr = str.split('');
//   //   console.log(arr);
//   result.push(arr[0].toUpperCase());
//   for (let i = 1; i < arr.length; i++) {
//     result.push(arr[i]);
//   }

//   return result.join('');
// }

// console.log(toUpperCase('manali'));

// // ---------------------------------------------------
// // EMAILS DRILLS  - 3/3/23 DAY 7
// // ---------------------------------------------------

var mySchool = {
  kg: [
    {
      name: 'vyom joshi',
      address: {
        streetName: '...',
        streetNum: 129,
      },
    },
    {
      name: 'amit joshi',
      address: {
        streetName: '...',
        streetNum: 222,
      },
    },
  ],

  'grade-1': [
    {
      name: 'devika joshi',
      address: {
        streetName: 'Alta Vista Road',
        streetNum: 122,
      },
    },
    {
      name: 'raavi joshi',
      address: {
        streetName: '...',
        streetNum: 212,
      },
    },
  ],

  'grade-2': [
    {
      name: 'mandar joshi',
      address: {
        streetName: '...',
        streetNum: 322,
      },
    },
    {
      name: 'shraddha joshi',
      address: {
        streetName: '...',
        streetNum: 233,
      },
    },
    {
      name: 'Yagnik joshi',
      address: {
        streetName: '...',
        streetNum: 333,
      },
    },
    {
      name: 'Bo Joshi',
      address: {
        streetName: '...',
        streetNum: 22428,
      },
    },
  ],
};

// Assume this data structure for school population per grade. For testing function create your own and pass into functions

// 1. Function to return total number of kids in school (sum all kids from all grades)
//    Here schoolData is an object like the one I showed above.

// function totalKids(schoolData) {
//   let totalKids = 0;
//   for (const key in schoolData) {
//     totalKids += schoolData[key].length;
//   }
//   return `The total number of kids in the school are ${totalKids}`;
// }

// console.log(totalKids(mySchool));

// 2. Function to find grade for a kid
// function findGrade(studentName) {
//   for (const key in mySchool) {
//     for (let i = 0; i < mySchool[key].length; i++) {
//       if (
//         mySchool[key][i]['name'].toLowerCase() === studentName.toLowerCase()
//       ) {
//         return key;
//       }
//     }
//   }
// }

// console.log(findGrade('Bo joshi'));

// 3. Function to find kid's address
//     function findAddress(schoolData, studentName) {}
//    It should return address in the form streetNum, streetName e.g 129, english rose circle

// function findAddress(studentName) {
//   for (const key in mySchool) {
//     for (let i = 0; i < mySchool[key].length; i++) {
//       if (mySchool[key][i]['name'] === studentName) {
//         return (
//           mySchool[key][i].address.streetNum +
//           ', ' +
//           mySchool[key][i].address.streetName
//         );
//       }
//     }
//   }
// }

// console.log(findAddress('devika joshi'));

// // ---------------------------------------------------
// // EMAILS DRILLS  - 3/3/23 DAY 8
// // ---------------------------------------------------
// 1. Function Takes an array of numbers and a index (number) into the array
//    It should return the sum of elements from index 0 to the param index.
//    return -1 if index invalid (< 0 or > array length)

// function getSumOfNums(arr, index) {
//   let sum = 0;
//   for (let i = 0; i < index + 1; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(getSumOfNums([1, 2, 3, 14, 75, 6], 3));

// 2. Function (no parameter) that returns an object with property "random" - and its value has to be random number generated every time (look up http://www.w3schools.com/jsref/jsref_random.asp)

// function generateRandomNumber() {
//   let a = {};
//   a['random'] = Math.floor(Math.random() * 100);
//   return a['random'];
// }

// console.log(generateRandomNumber());

// 3. Function the takes object as a parameter and returns new object that has the same properties as the old object except properties are uppercase
// e.g { name : "amit", age : 37 } => should become {NAME :amit, AGE : 37}

// function capitalizeProps(x) {
//   for (const key in x) {
//     x[key.toUpperCase()] = x[key];
//     delete x[key];
//   }

//   return x;
// }

// console.log(capitalizeProps({ name: 'amit', age: 37 }));

// 4.
// palomar = [
//   {
//     25: {
//       numBeds: 4,
//       area: 1700,
//       upgrades: {
//         kitchen: ['upgrade1', 'upgrade2'],
//         bed2: ['bedup1', 'bedup3'],
//       },
//     },
//   },
//   {
//     25: {
//       numBeds: 4,
//       area: 1700,
//       upgrades: {
//         kitchen: ['upgrade1', 'upgrade2'],
//         bed2: ['bedup1', 'bedup3'],
//       },
//     },
//   },
//   {
//     25: {
//       numBeds: 4,
//       area: 1700,
//       upgrades: {
//         kitchen: ['upgrade1', 'upgrade2'],
//         bed2: ['bedup1', 'bedup3'],
//       },
//     },
//   },
//   {
//     25: {
//       numBeds: 4,
//       area: 1700,
//       upgrades: {
//         kitchen: ['upgrade1', 'upgrade2'],
//         bed2: ['bedup1', 'bedup3'],
//       },
//     },
//   },
// ];
//     Function takes palomar array of objects, returns full list of kitchen upgrades combining all lots

// function allUpgrades() {
//   let allKitchenUpgrades = [];
//   for (let i = 0; i < palomar.length; i++) {
//     for (const key in palomar[i]) {
//       // console.log(palomar[i][key]['upgrades'][each].length);
//       for (let j = 0; j < palomar[i][key]['upgrades']['kitchen'].length; j++) {
//         allKitchenUpgrades.push(palomar[i][key]['upgrades']['kitchen'][j]);
//       }
//     }
//   }
//   return allKitchenUpgrades;
// }

// console.log(allUpgrades());

// // ---------------------------------------------------
// // EMAILS DRILLS  - 3/3/23 DAY 9
// // ---------------------------------------------------

// 1. Function to write to take Array of numbers as input that returns the MAX number

// function getMaxNum(arr) {
//   let maxNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//       maxNum = arr[i];
//     }
//   }
//   return maxNum;
// }

// console.log(getMaxNum([3, 54, 7, 99, 2, 1]));
// 2. Same as 1 but returns MIN

// function getMinNum(arr) {
//   let minNum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minNum) {
//       minNum = arr[i];
//     }
//   }
//   return minNum;
// }

// console.log(getMinNum([37, 54, 7, 99, 5]));

// // ---------------------------------------------------
// // EMAILS DRILLS  - 3/3/23 DAY 10
// // ---------------------------------------------------
// 1. Function that dedups elements from array.
//  dedup([4,5,6,4,5,4,7]) should return (not print) an array [4,5,6,7]

// (hint - use an object as a hashmap to save elements from array and check object properties using property 'in' object syntax)

// function removeDups(arr) {
//   let x = {};
//   newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] in x)) {
//       x[arr[i]] = arr[i];
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeDups([4, 5, 6, 4, 5, 4, 7]));

// // ---------------------------------------------------
// // EMAILS DRILLS  - 3/7/23 DAY 11
// // ---------------------------------------------------
// 1. Write a function that prints a number on console.
// Each time you call a function - number would be incremented.

// e.g printNum() => prints 1
//       printNum() => prints 2

// let count = 1;
// function increment() {
//   return count;
//   count++;
// }

// const increment = (function () {
//   let count = 0;
//   return function () {
//     count += 1;
//     return count;
//   };
// })();

// 2. create a click event handler on 'body' that calls function from 1.
// So when you click on anywhere on page (blank page in your case), you should see number printed on js console, and as you click more it would print incrementing number. This way you are printing the number of clicks on the pages.

// http://www.w3schools.com/jsref/event_onclick.asp

// hint - you need to assign onclick property of the document global object so it gets applied to all of the page.

// document.addEventListener('click', increment());

// document.onclick = function () {
//   console.log(increment());
// };

// function fact(num) {
//   let count = 1;
//   for (let i = 1; i <= num; i++) {
//     count *= i;
//   }
//   return count;
// }

// console.log(fact(3));

// // ---------------------------------------------------
// // DRILLS I
// // ---------------------------------------------------

// //Find maximum number from a list of numbers
// // findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let maxNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//       maxNum = arr[i];
//     }
//   }
//   return maxNum;
// }

// console.log(findMax([2, 4, 6, 100, 2, 8]));
// // Return a list of keys from object
// // getKeys({myName: "A", age: 44}) => [“name”, “age”]

// function getKeys(a) {
//   let arr = [];
//   for (const key in a) {
//     arr.push(key);
//   }
//   return arr;
// }

// console.log(getKeys({ myName: 'A', age: 44 }));

// //Check if all numbers in an array are below a threshold (second parameter)
// // checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// function isBelowThreshold(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isBelowThreshold([4, 5, 6, 10, 6, 9], 50));

// //Add all even numbers from the list of numbers
// // addEvens([4, 5, 67, 100, 9]) => 104

// function addEvens(arr) {
//   let evenNums = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNums += arr[i];
//     }
//   }
//   return evenNums;
// }

// console.log(addEvens([4, 5, 67, 100, 9]));

// //Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// // addNums([4, 5, 67, 100, 9], fasle) => 104

// function sum(arr, bool) {
//   let sumOfNums = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (bool === true && arr[i] % 2 === 0) {
//       sumOfNums += arr[i];
//     } else if (bool === false && arr[i] % 2 !== 0) {
//       sumOfNums += arr[i];
//     }
//   }
//   return sumOfNums;
// }

// console.log(sum([4, 5, 67, 100, 9], false));

// //Add two lists. Assume that the first array is shorter in length.
// // addLists([2, 4], [5, 6]) => [7, 10]

// function addLists(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i] + arr2[i]);
//   }
//   return newArr;
// }

// console.log(addLists([2, 4], [5, 6]));

// // Check if a list has any duplicates
// // hasDups([4, 5, 67, 100, 9]) => false

// function hasDups(arr) {
//   let a = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] in a)) {
//       a[arr[i]] = arr[i];
//     } else {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(hasDups([4, 5, 67, 100, 9]));

// /* Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1} */

// function buildFrequencyMap(arr) {
//   let a = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in a) {
//       a[arr[i]] = a[arr[i]] + 1;
//     } else {
//       a[arr[i]] = 1;
//     }
//   }
//   return a;
// }

// console.log(buildFrequencyMap([4, 5, 8, 5]));

// // ---------------------------------------------------
// // DRILLS I 3/20/23
// // ---------------------------------------------------

// //Find maximum number from a list of numbers
// // findMax([2, 4, 6, 100, 2, 8]) => 100

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([2, 4, 6, 100, 2, 8]));

// // Return a list of keys from object
// // getKeys({myName: "A", age: 44}) => [“name”, “age”]

// function getKeys(x) {
//   let allKeys = [];
//   for (const key in x) {
//     allKeys.push(key);
//   }
//   return allKeys;
// }

// console.log(getKeys({ myName: 'A', age: 44 }));

// //Check if all numbers in an array are below a threshold (second parameter)
// // checkThreshold([4, 5, 67, 100, 6, 9], 50) => false

// function checkThreshold(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkThreshold([4, 5, 6, 10, 6, 9], 50));

// //Add all even numbers from the list of numbers
// // addEvens([4, 5, 67, 100, 9]) => 104

// function addEvens(arr) {
//   let sumOfEvens = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sumOfEvens += arr[i];
//     }
//   }
//   return sumOfEvens;
// }

// console.log(addEvens([4, 5, 67, 100, 9]));

// //Add all numbers from the list of numbers, even or odd based on second parameter (onlyEven)
// // addNums([4, 5, 67, 100, 9], true) => 104

// function addNums(arr, bool) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && bool === true) {
//       sum += arr[i];
//     } else if (arr[i] % 2 !== 0 && bool === false) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(addNums([4, 5, 9], false));

// //Add two lists. Assume that the first array is shorter in length.
// // addLists([2, 4], [5, 6]) => [7, 10]

// function addLists(arr1, arr2) {
//   let addition = [];
//   for (let i = 0; i < arr1.length; i++) {
//     addition.push(arr1[i] + arr2[i]);
//   }
//   return addition;
// }

// console.log(addLists([2, 4], [5, 6]));

// // Check if a list has any duplicates
// // hasDups([4, 5, 67, 100, 9]) => false

// function hasDups(arr) {
//   let x = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] in x)) {
//       x[arr[i]] = arr[i];
//     } else if (arr[i] in x) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(hasDups([4, 5, 9, 67, 100, 9]));

// /* Return a map (hashtable/object) of number as the key, and value as the number of times it occurs in a list
// buildFrequencyMap([4, 5, 4, 5, 6]) => { 4: 2, 5: 2, 6 : 1}

// buildFrequencyMap([4, 5, 8, 5]) => {4 : 1, 5: 2, 8 : 1} */

// function buildFrequencyMap(arr) {
//   let x = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in x) {
//       x[arr[i]] = x[arr[i]] + 1;
//     } else {
//       x[arr[i]] = 1;
//     }
//   }
//   return x;
// }

// console.log(buildFrequencyMap([4, 5, 8, 5]));

// // ---------------------------------------------------
// // DRILLS II - 2/20/23
// // ---------------------------------------------------

// Filter out even numbers
// filterEven([2, 4, 5, 101, 9, 8]) => [2, 4, 8]

// function filterEven(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filterEven([2, 4, 5, 101, 9, 8]));

// Return a list of values from object
// getValues({myName: 'A', age: 44}) => [“A”, “44”]

// function getValues(x) {
//   let values = [];
//   for (const key in x) {
//     values.push(x[key]);
//   }
//   return values;
// }

// console.log(getValues({ myName: 'A', age: 44 }));

// Function takes two arrays as parameters. Return the larger sum of the elements of the two arrays
// getMaxSum([2, 4], [5, 6]) => 11

// function getMaxSum(arr1, arr2) {
//   let sumOfArr1 = 0;
//   let sumOfArr2 = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     sumOfArr1 += arr1[i];
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     sumOfArr2 += arr2[j];
//   }

//   if (sumOfArr1 > sumOfArr2) {
//     return sumOfArr1;
//   } else {
//     return sumOfArr2;
//   }
// }

// console.log(getMaxSum([2, 4], [5, 6]));

// getMaxSum([100, 4], [5, 6, 80]) => 104

// Filter array elements based on the predicate (function) passed as the second argument
// filter([4, 5, 67, 100, 9], e => e % 2 == 0) => [4, 100]

// function filter(arr, predicate) {
//   let NewArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (predicate(arr[i]) === true) {
//       NewArr.push(arr[i]);
//     }
//   }
//   return NewArr;
// }

// console.log(filter([4, 5, 67, 100, 9], (e) => e % 2 == 0));

// filter([4, 5, 67, 100, 9], e => e > 50) => [67, 100]

// Build a HashTable / Object from a list of numbers. Assume even number of elements
// buildHashTable([“name”, “vyom”, “age”, 13]) => { “name” : “vyom”, “age”: 13 }

// function buildHashTable(arr) {
//   let x = {};
//   for (let i = 0; i < arr.length; i++) {
//     x[arr[i]] = arr[i + 1];
//     i++;
//   }
//   return x;
// }

// console.log(buildHashTable(['myName', 'vyom', 'age', 13]));
