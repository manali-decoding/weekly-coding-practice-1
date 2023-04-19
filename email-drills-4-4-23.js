// var mySchool = {
//    "kg" : [
//       { name : "vyom joshi",
//         address : {
//             streetName : "...",
//             streetNum : 129
//         }
//       },
//       { name : "..", address : { streetName : "... ", streetNum : 333 } ],

//     "grade-1" : [ .. ],

//     "grade-2" : [ .. ]
// }

// Assume this data structure for school population per grade. For testing function create your own and pass into functions

// 1. Function to return total number of kids in school (sum all kids from all grades)
//     function totalKids(schoolData) {
//     }

//    Here schoolData is an object like the one I showed above.

// var schoolData = {
//   kg: [
//     {
//       name: 'vyom joshi',
//       address: {
//         streetName: '...',
//         streetNum: 129,
//       },
//     },
//     {
//       name: 'amit joshi',
//       address: {
//         streetName: '...',
//         streetNum: 34234,
//       },
//     },
//     {
//       name: 'Bo joshi',
//       address: {
//         streetName: '...asdasd',
//         streetNum: 32423,
//       },
//     },
//   ],

//   grade1: [
//     {
//       name: 'Yagnik joshi',
//       address: {
//         streetName: '...',
//         streetNum: 56,
//       },
//     },
//   ],

//   grade2: [
//     {
//       name: 'xyz joshi',
//       address: {
//         streetName: '...',
//         streetNum: 129,
//       },
//     },
//     {
//       name: 'abc joshi',
//       address: {
//         streetName: '...',
//         streetNum: 345,
//       },
//     },
//   ],
// };

// function totalNumOfKids() {
//   let total = 0;
//   for (const key in schoolData) {
//     total = total += schoolData[key].length;
//   }
//   return total;
// }

// console.log(totalNumOfKids());

// 2. Function to find grade for a kid
//     function findGrade(schoolData, studentName) {}

// function findGrade(schoolData, studentName) {
//   for (const key in schoolData) {
//     for (let i = 0; i < schoolData[key].length; i++) {
//       if (schoolData[key][i]['name'] === studentName) {
//         return `${[key]}`;
//       }
//     }
//   }
// }
// console.log(findGrade(schoolData, 'xyz joshi'));

// 3. Function to find kid's address
//     function findAddress(schoolData, studentName) {}
//    It should return address in the form streetNum, streetName e.g 129, english rose circle

// function findAddress(schoolData, studentName) {
//   for (const key in schoolData) {
//     for (let i = 0; i < schoolData[key].length; i++) {
//       if (schoolData[key][i]['name'] === studentName) {
//         // console.log(schoolData[key][i]['address']['streetName']);
//         // console.log(schoolData[key][i]['address']['streetNum']);
//         return `${studentName}'s address is ${schoolData[key][i]['address']['streetName']} ${schoolData[key][i]['address']['streetNum']}.`;
//       }
//     }
//   }
// }

// console.log(findAddress(schoolData, 'Bo joshi'));

// -----------------------------------------
// DAY 8
// -----------------------------------------

// . Function Takes an array of numbers and a index (number) into the array
//    It should return the sum of elements from index 0 to the param index.
//    return -1 if index invalid (< 0 or > array length)

// function sumOfElements(arr, index) {
//   let sum = 0;
//   if (index < 0 || index > arr.length) {
//     return -1;
//   } else {
//     for (let i = 0; i <= index; i++) {
//       sum = sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(sumOfElements([3, 6, 11, 8, 3], 2));

// 2. Function (no parameter) that returns an object with property "random" - and its value has to be random number generated every time (look up http://www.w3schools.com/jsref/jsref_random.asp)

// function generateRandomNum() {
//   let x = { random: Math.floor(Math.random() * 100) };
//   return x;
// }

// console.log(generateRandomNum());

// 3. Function the takes object as a parameter and returns new object that has the same properties as the old object except properties are uppercase
// e.g { name : "amit", age : 37 } => should become {NAME :amit, AGE : 37}

function toUppercase(x) {
  let keys = Object.keys(x);
  return keys.capitalize();
}

console.log(toUppercase({ name: 'amit', age: 37 }));
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
