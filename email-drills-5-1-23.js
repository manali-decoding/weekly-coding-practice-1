//**************************************************
//Day 4
//****************************************************

// var library = {
//    "amit" : ["book1", "book2"],
//    "vyom" : ["book4", "book5"],
//    "nobody" : ["book100", "book101"]
// }

// basically its an object with key as member name, value as an array of book names- books that the member checked out. There is one special key 'nobody' that indicates the list of books that no one has checked out yet.

// Build the library structure to have at least 5,6 members + 'nobody' entry with some books. Make sure book names don't repeat since a single book can not be checked out by more than one person.

// Now you'll write a number of functions to implement library business logic

// 6. function returnBook(memberName, bookName)
//    same as above except bookName moves from member array to 'nobody'.
//    Print messages of success or failure (memberName or bookName invalid)

// 7. Add a new MemberName
//     function addNewMember(memberName) -
//     adds new entry in library object with empty booklist

// 8. Add a new book to library
//     function addNewBook(bookName)
//     - adds new bookName to 'nobody' list since its not checked out yet

var library = {
  amit: ['book1', 'book2'],
  vyom: ['book4', 'book5'],
  bo: ['book5', 'book6'],
  devika: ['book7', 'book8'],
  yagnik: ['book9', 'book10'],
  nobody: ['book100', 'book101'],
};

// 1. Function that returns all current members (make sure to not return nobody)
//    hint. iterate over object keys using for - in  loop

function allMembers(library) {
  let keys = [];
  for (const key in library) {
    if (key !== 'nobody') {
      keys.push(key);
    }
  }
  return keys;
}

// console.log(allMembers(library));

//  2. Function that returns all the books in the library
//    hint. you'll need to make a result array to collect all book names as you iterate over library object

function allBooks() {
  let books = [];
  for (const key in library) {
    for (let i = 0; i < library[key].length; i++) {
      books.push(library[key][i]);
    }
  }
  return books;
}

// console.log(allBooks(library));

// 3. Function to return all books checked out by a member passed as a param.
//    If the member name is invalid or does not have any books checked out return an empty array

// function booksCheckedOut(memberName) {
//     let booksCheckedOutByMember = [];
//     for (const key in library) {
//         if (library.hasOwnProperty(memberName) === false) {
//             return [];
//         } else {
//             for (let i = 0; i < library[key].length; i++) {
//                 booksCheckedOutByMember.push(library[key][i]);
//             }
//         }
//         return booksCheckedOutByMember;
//     }
// }

// console.log(booksCheckedOut('devika'));

// 4. Function that takes a parameter bookname - and returns member name who have checked out the book. Return empty string if bookname is not checked out by anyone.

// function getMemberName(bookName) {
//   for (const key in library) {
//     for (let i = 0; i < library[key].length; i++) {
//       if (library[key][i] === bookName) {
//         return `${bookName} has been checked out by ${key}`;
//       }
//     }
//   }
// }

// console.log(getMemberName('book9'));

// 5. function checkout(memberName, bookName)
//     This function updates library object to reflect checkout operation. Note that it involves
//    1. removing bookname from 'nobody' assigned array  (hint. find index of the book to be removed from the array and use splice method of array to drop the element from it.
// e.g l = [1,2,4,5],  l.splice(2,1) --- it starts deleting at index number 2 and does it for 1 element. so results in l == [1,2,5]

//     2. adding it to memberName assigned array.

//     If memberName or bookName is not valid - print a msg saying so.
//     If checkout is successful - print a msg saying memberName has checked out bookName

function checkout(memberName, bookName) {
  if (!(memberName in library)) {
    console.log('invalid member');
  } else if (library['nobody'].includes(bookName) === false) {
    console.log(`${bookName} does not exist in the library`);
  } else {
    let index = library['nobody'].indexOf(bookName);
    let bookArr = library['nobody'].splice(index, 1);
    for (let i = 0; i < bookArr.length; i++) {
      library[memberName].push(bookArr[i]);
    }
    console.log(`${bookName} has been checked out by ${memberName}`);
    console.log(library);
  }
}

checkout('devika', 'book100');

// function checkOut(memberName, bookName) {
//   if (!(memberName in library)) {
//     console.log(`Invalid membername`);
//   } else if (library['nobody'].includes(bookName) === false) {
//     console.log(`${bookName} does not exist in the library`);
//   } else {
//     // console.log(memberName);
//     let index = library['nobody'].indexOf(bookName);
//     let bookIndex = library['nobody'].splice(index, 1);
//     for (let i = 0; i < bookIndex.length; i++) {
//       library[memberName].push(bookIndex[i]);
//     }
//     console.log(`${bookName} has been checked out by ${memberName}`);
//   }
// }

// checkOut('bo', 'book00');
