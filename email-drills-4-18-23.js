/******************************************************
 * Day 10
 ******************************************************/

// 1. Function that dedups elements from array.
//  dedup([4,5,6,4,5,4,7]) should return (not print) an array [4,5,6,7]

// (hint - use an object as a hashmap to save elements from array and check object properties using property 'in' object syntax)

// function dedup(arr) {
//   let a = {};
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] in a)) {
//       a[arr[i]] = arr[i];
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(dedup([4, 5, 6, 4, 5, 4, 7]));

/******************************************************
 * Day 9
 ******************************************************/

// 1. Function to write to take Array of numbers as input that returns the MAX number

// function getMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(getMax([43, 45, 1, 6, 833, 54, 9]));

// 2. Same as 1 but returns MIN

// function getMin(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[0]) {
//       return arr[i];
//     }
//   }
// }

// console.log(getMin([43, 45, 1, 6, 833, 54, 9]));

/******************************************************
 * Day 8
 ******************************************************/

// 1. Function Takes an array of numbers and a index (number) into the array
//    It should return the sum of elements from index 0 to the param index.
//    return -1 if index invalid (< 0 or > array length)

// function sumOfElements(arr, index) {
//   let sum = 0;
//   for (let i = 0; i <= index; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(sumOfElements([1, 2, 3, 4, 5, 6, 7], 3));

// 2. Function (no parameter) that returns an object with property "random" - and its value has to be random number generated every time (look up http://www.w3schools.com/jsref/jsref_random.asp)

// function getRandomNumber() {
//   let a = {};
//   let random = 'random';
//   a[random] = Math.floor(Math.random() * 10);
//   return a;
// }

// console.log(getRandomNumber());

// 3. Function the takes object as a parameter and returns new object that has the same properties as the old object except properties are uppercase
// e.g { name : "amit", age : 37 } => should become {NAME :amit, AGE : 37}

// function keyToUpperCase(a) {
//   const keys = Object.keys(a);
//   let newObj = {};
//   keys.map((key) => {
//     // console.log(key.toUpperCase());
//     newObj[key.toUpperCase()] = a[key];
//   });
//   console.log(newObj);
// }

// keyToUpperCase({ name: 'amit', age: 37 });
// 4.
//      palomar = [
//            { 25 : {
//              numBeds : 4,
//              area : 1700,
//              upgrades : {
//                    kitchen : [ "upgrade1", "upgrade2"],
//                    bed2 :  ["bedup1", "bedup3"]
//              }
//           }, {...}]

//     Function takes palomar array of objects, returns full list of kitchen upgrades combining all lots

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
//     26: {
//       numBeds: 4,
//       area: 1700,
//       upgrades: {
//         kitchen: ['upgrade101', 'upgrade202'],
//         bed2: ['bedup1', 'bedup3'],
//       },
//     },
//   },
//   {
//     27: {
//       numBeds: 4,
//       area: 1700,
//       upgrades: {
//         kitchen: ['upgrade11', 'upgrade22'],
//         bed2: ['bedup1', 'bedup3'],
//       },
//     },
//   },
//   {
//     28: {
//       numBeds: 4,
//       area: 1700,
//       upgrades: {
//         kitchen: ['upgrade1111', 'upgrade2222'],
//         bed2: ['bedup1', 'bedup3'],
//       },
//     },
//   },
// ];

// function getAllUpgrades(palomar) {
//   let allUpgrades = [];
//   for (let i = 0; i < palomar.length; i++) {
//     for (const key in palomar[i]) {
//       for (let j = 0; j < palomar[i][key]['upgrades']['kitchen'].length; j++) {
//         allUpgrades.push(palomar[i][key]['upgrades']['kitchen'][j]);
//       }
//       //   console.log(palomar[i][key]['upgrades']);

//       //   for (let j = 0; j < palomar[i]['upgrades']['kitchen'].length; j++) {
//       //     allUpgrades.push(palomar[i]['upgrades']['kitchen'][j]);
//       //   }
//     }
//   }
//   return allUpgrades;
// }

// console.log(getAllUpgrades(palomar));
