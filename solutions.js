// // Solution 1 🥴 

// var str = "abc def ghi";
// var str2 = "";

// var length = 0;

// while( str[length] != undefined){
//     length++;
// }

// for(var i = str.length - 1; i >= 0; i--){
//     str2 += str.charAt(i);
//   }

// console.log(str2);



// //solution 2😗

// var size = Math.floor((Math.random() * 10) + 1);;

// if(size == 1){
//   console.log("*");
// }
// else{
// console.log("*".repeat(size));
// for(var i = 0; i<size-2; i++){
//   console.log(`*${" ".repeat(size-2)}*`);
// }
// console.log("*".repeat(size));
// }



// // solution 3 😎

// let arr = [];
//  let arrayOfObjects = (arr1, arr2) => {
//   for(var i = 0; i< arr1.length; i++){
//     arr[i] = {stream: `${arr1[i]}`, name: `${arr2[i]}`};
//   }
//   return arr;
//  }

// let arr1 = [ "CSE","ECE","CSE","IT"];
// let arr2 = ["Tulsi", "Subhradeep","Suvam","Akash"];

// console.log(arrayOfObjects(arr1,arr2));



// // // solution 4 😒

// // setTimeout and setInterval methods are used in Javascript timing events. 
// // The window object allows execution of code at specified time intervals. 
// // These time intervals are called timing events.

// // setTimeout Executes a function after waiting a specified number of milliseconds.

// // setInterval repeats the execution of the function continuously after a specified number of milliseconds.

// // Example: setTimeout

// let printing1 = () =>{
//   console.log("Good Bye World");
// }

// let timeout1 = setTimeout(printing1, 5000);

// // Example: setInterval

// let printing2 = () =>{
//   console.log("Good Bye World");
// }

// let timeout2 = setInterval(printing2, 1000);



// // solution 5 😴

// let length = Math.floor(Math.random() * 10); //generating array length between 0 to 10, it can be anything we wish
// let arr = [];

// let randomArray = (len) => {
//   for (var i = 0; i < len; i++) {
//     arr[i] = Math.floor(Math.random() * 31) + 10;
//   }
//   return console.log(arr);
// }

// randomArray(length);



// // solution 6 😤

//let count = ((str) => str.split(' ').filter((n) => n != '').length console.log((str));

// let str = "Hello     World"
// console.log(str.split(' ').filter((n) => n != '').length);



// // solution 7 😞

// let sort = (a) => {
//     var swap;
//     do {
//         swap = 0;
//         for (var i = 0; i < a.length - 1; i++) {
//             if (a[i].length < a[i + 1].length) {
//                 var temp = a[i];
//                 a[i] = a[i + 1];
//                 a[i + 1] = temp;
//                 swap = 1;
//             }
//         }
//     } while (swap == 1);
// }

// var arr = ['abc', 'a', 'abcdefg', 'abcdd'];

// sort(arr);

// console.log(arr);



// // solution 8 🙃
 
// let newArray = (arr) => {
//         var unique = [];
//         arr.forEach(element => {
//             if (unique.includes(element) == 0) {
//                 unique.push(element);
//             }
//         });
//         return unique;
//     }

// var arr = [1, 21, 2, 1, 3, 3, 4 ,5 ,7, 5];
 
// console.log(newArray(arr));



// // solution 9 😵‍💫

// // The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
// // Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

// // Example:

// const arr = [1, 12, 122, 34, 8889];

// for ( let element of arr ) {
//     console.log(element);
// }



// // solution 10 🥳

// // map() creates a new array from calling a function for every array element.
// // It does not change the original array.

// // Example of map()

// const array1 = [4,169,144,25];

// let newArr = array1.map((curElm) => {
//     return Math.sqrt(curElm);
// })
// console.log(newArr);


// // The conditional (ternary) operator is the only JavaScript operator that takes three operands -> 
// // a condition followed by a question mark (?), then an expression to execute if the condition is truthy 
// // followed by a colon (:), and finally the expression to execute if the condition is falsy.
// // Example of Ternary Operator

// let marks = 50;

// let result = (marks >= 40) ? 'pass' : 'fail';

// console.log(`You ${result} the exam.`);