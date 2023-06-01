// ********************************************************
//DAY 7
// ********************************************************

// let schoolData = {
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
//       name: 'yagnik joshi',
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

// // Assume this data structure for school population per grade. For testing function create your own and pass into functions

// // 1. Function to return total number of kids in school (sum all kids from all grades)
// //     function totalKids(schoolData) {
// //     }

// //    Here schoolData is an object like the one I showed above.

// const totalKids = () => {
//   let totalKids = 0;
//   for (const key in schoolData) {
//     totalKids += schoolData[key].length;
//   }
//   return totalKids;
// };

// console.log(totalKids());

// // 2. Function to find grade for a kid
// //     function findGrade(schoolData, studentName) {}

// const findGrade = (studenName) => {
//   for (const key in schoolData) {
//     for (let i = 0; i < schoolData[key].length; i++) {
//       if (schoolData[key][i]['name'] === studenName) {
//         return key;
//       }
//     }
//   }
// };
// console.log(findGrade('abc joshi'));

// // 3. Function to find kid's address
// //     function findAddress(schoolData, studentName) {}
// //    It should return address in the form streetNum, streetName e.g 129, english rose circle

// const findAddress = (studentName) => {
//   for (const key in schoolData) {
//     for (let i = 0; i < schoolData[key].length; i++) {
//       if (schoolData[key][i]['name'] === studentName) {
//         return `${studentName}'s address is ${schoolData[key][i]['address']['streetNum']}  ${schoolData[key][i]['address']['streetName']}}`;
//       }
//     }
//   }
// };

// console.log(findAddress('yagnik joshi'));

// ********************************************************
//DAY 8
// ********************************************************

// 1. Function Takes an array of numbers and a index (number) into the array
//    It should return the sum of elements from index 0 to the param index.
//    return -1 if index invalid (< 0 or > array length)

// const sumOfElements = (arr, index) => {
//   let sum = 0;
//   if (index < 0 || index > arr.length) {
//     return -1;
//   } else {
//     for (let i = 0; i <= index; i++) {
//       sum = sum + arr[i];
//     }
//   }
//   return sum;
// };

// console.log(sumOfElements([1, 2, 3, 4, 5, 6], 19));

// 2. Function (no parameter) that returns an object with property "random" - and its value has to be random number generated every time (look up http://www.w3schools.com/jsref/jsref_random.asp)

// const generateRandomNum = () => {
//   let randomNum = { random: Math.floor(Math.random() * 1000) };
//   return randomNum;
// };

// console.log(generateRandomNum());

// 3. Function the takes object as a parameter and returns new object that has the same properties as the old object except properties are uppercase
// e.g { name : "amit", age : 37 } => should become {NAME :amit, AGE : 37}

const getUpperCase = (data) =>
  Object.keys(data).reduce((newData, k) => {
    newData[k.toUpperCase()] = data[k];
    return newData;
  }, {});

console.log(getUpperCase({ name: 'amit', age: 37 }));
