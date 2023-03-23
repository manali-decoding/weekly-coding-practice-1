// // ---------------------------------------------------
// // DAY 4
// // ---------------------------------------------------
// var library = {
//    "amit" : ["book1", "book2"],
//    "vyom" : ["book4", "book5"],
//    "nobody" : ["book100", "book101"]
// }

// basically its an object with key as member name, value as an array of book names- books that the member checked out. There is one special key 'nobody' that indicates the list of books that no one has checked out yet.

// Build the library structure to have at least 5,6 members + 'nobody' entry with some books. Make sure book names don't repeat since a single book can not be checked out by more than one person.

let library = {
  amit: ['book1', 'book2'],
  vyom: ['book4', 'book5'],
  bo: ['book5', 'book6'],
  devika: ['book7', 'book8'],
  yagnik: ['book9', 'book10'],
  nobody: ['book100', 'book101'],
};

// Now you'll write a number of functions to implement library business logic

// 1. Function that returns all current members (make sure to not return nobody)
//    hint. iterate over object keys using for - in  loop

// function allMembers(n) {
//   let members = [];
//   for (const key in n) {
//     if (key !== 'nobody') {
//       members.push(key);
//     }
//   }
//   return members;
// }

// console.log(allMembers(library));

// 2. Function that returns all the books in the library
//    hint. you'll need to make a result array to collect all book names as you iterate over library object

// function allBooks(n) {
//   let books = [];
//   for (const key in n) {
//     if (key !== 'nobody') {
//       for (let i = 0; i < n[key].length; i++) {
//         books.push(n[key][i]);
//       }
//     }
//   }
//   return books;
// }

// console.log(allBooks(library));
// 3. Function to return all books checked out by a member passed as a param.
//    If the member name is invalid or does not have any books checked out return an empty array

// function booksCheckedOutByMember(memberName) {
//   let checkedOutBooks = [];
//   for (const key in library) {
//     if (library.hasOwnProperty(memberName) === false) {
//       return [];
//     } else {
//       for (let i = 0; i < library[key].length; i++) {
//         checkedOutBooks.push(library[key][i]);
//       }
//     }
//     return `${memberName} has checked out ${checkedOutBooks}`;
//   }
// }

// console.log(booksCheckedOutByMember('devika'));

// 4. Function that takes a parameter bookname - and returns member name who have checked out the book. Return empty string if bookname is not checked out by anyone.

// function getMemberName(bookName) {
//   for (const key in library) {
//     for (let i = 0; i < library[key].length; i++) {
//       if (library[key][i] === bookName) {
//         return key;
//       }
//     }
//   }
//   return [];
// }
// console.log(getMemberName('book8'));

// 5. function checkout(memberName, bookName)
//     This function updates library object to reflect checkout operation. Note that it involves
//    1. removing bookname from 'nobody' assigned array  (hint. find index of the book to be removed from the array and use splice method of array to drop the element from it.
// e.g l = [1,2,4,5],  l.splice(2,1) --- it starts deleting at index number 2 and does it for 1 element. so results in l == [1,2,5]

//     2. adding it to memberName assigned array.

//     If memberName or bookName is not valid - print a msg saying so.
//     If checkout is successful - print a msg saying memberName has checked out bookName

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
// 6. function returnBook(memberName, bookName)
//    same as above except bookName moves from member array to 'nobody'.
//    Print messages of success or failure (memberName or bookName invalid)

// function returnBook(memberName, bookName) {
//   if (!(memberName in library)) {
//     console.log(`Invalid member name`);
//   } else if (library[memberName].includes(bookName) === false) {
//     console.log(`The ${bookName} does not exist on members' account`);
//   } else {
//     let bookIndex = library[memberName].indexOf(bookName);
//     console.log(bookIndex);
//     let bookToReturn = library[memberName].splice(bookIndex, 1);
//     console.log(bookToReturn);

//     library['nobody'].push(bookToReturn);
//     console.log(`${bookName} has been returned by ${memberName}`);
//   }
// }
// returnBook('devika', 'bookthis');

// 7. Add a new MemberName
//     function addNewMember(memberName) -
//     adds new entry in library object with empty booklist

// function addNewMember(memberName) {
//   library[memberName] = [];
//   return library;
// }
// console.log(addNewMember('stranger'));

// 8. Add a new book to library
//     function addNewBook(bookName)
//     - adds new bookName to 'nobody' list since its not checked out yet

// function addNewBook(bookName) {
//   library['nobody'].push(bookName);
//   return library['nobody'];
// }

// console.log(addNewBook('bookThis'));
