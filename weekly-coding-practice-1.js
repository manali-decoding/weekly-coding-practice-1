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
