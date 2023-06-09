// CODEWARS TUSKS

// 1 tusk

// function arrayPlusArray(arr1, arr2) {
//     const resultArr = [...arr1,...arr2];
//     // const resultElementArr = resultArr.map((el) => el + el);
//     // console.log(resultElementArr);
//     // resultArr.forEach((el) => {
//     //     console.log(`Результат: ${el}+${el}`);
//     // });
//     const sumResultElement = resultArr.reduce((num_1, num_2) => num_1 + num_2)
//     return sumResultElement;
// }
// console.log(arrayPlusArray([20, 20, 20], [1, 1]));

// codewars решение

// function arrayPlusArray(arr1, arr2) {
// return arr1.concat(arr2).reduce((num_1, num_2) => num_1 + num_2)
// }
// console.log(arrayPlusArray([2,2,2,3],[3,3,4,3]));

// codewars tusk 2

// function solution(str) {
//   return str.split("").reverse().join('');
// }
// console.log(solution("WORLD"));

// codewars tusk 3

// function booleanToString(bool) {
//     // if (bool == true) {
//     //     console.log(String(bool));
//     // } else {
//     //     console.log(String(bool));
//     // }
//     if (bool == Boolean) {

//     }
//     return String(bool);
//     // return bool ? 'true' : 'false';
// }
// booleanToString('true');

// codewars tusk 4

// function removeChar(str) {
//     return str.slice(1, -1);
// }
// console.log(removeChar('boolean'));

// codewars tusk 5

// function makeUpperCase(str) {
// return str.toUpperCase();
// }
// console.log(makeUpperCase('stroka'));

// codewars tusk 6

// function removeExclamationMarks(string) {
//     let str = string.split('');
//     let massive = str.filter((el) => el !== '!');
//     // console.log(massive);
//     // console.log(massive.join(''));
//     // return string.split('!').join('');
//     return massive.join('');
// }
// console.log(removeExclamationMarks("!s!t!r!in!g!!!!"));

// codewars tusk 7

// function smash(words) {
// let result = words.join(' ');
// console.log(result);
// return result;
// }
// console.log(smash(["new", "arr", "masive"]));

// codewars tusk 8

// nfn

// const reverseSeq = (n) => {
//   const array = n.map((el) => el < n)
//   return n.map((el) => el < n)
// };
// console.log(reverseSeq(5));

// codewars tusk 8

// function pillars(numPill, dist, width) {
//   const arr = [
//     {
//       numPill: 10,
//       dist: 10,
//       width: 10,
//     },
//     {
//       numPill: 10,
//       dist: 10,
//       width: 10,
//     },
//     {
//       numPill: 10,
//       dist: 10,
//       width: 10,
//     },
//     {
//       numPill: 10,
//       dist: 10,
//       width: 10,
//     },
//   ];
//   console.log(arr);
// }

// Продленка 08.06.2023

// tusk 1
// function find(array, element) {
// return array.indexOf(element) >= 0 ? array.indexOf(element) : "Not found";
//   array.filter((element) => array.indexOf(element));
//   return "Not found";
//     for (let i = 0; i < array.length; i++) {
//     return array[i] === element ? i : "not found";
//   }
// return array.includes(element);
//   let i = array.indexOf(element);
//   if (array.includes(element)) {
//   return array.indexOf(element);
//   } else {
//   return "Not found";
//   }
//   return (array.includes(element)) ? array.indexOf(element) : "Not Found";
//  работает
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === element) return i;
// }
// return "Not found";
// }
// console.log(find([1, 2, 3, 4, 5, 6], 6));

// tusk 2
// function otherAngle(a,b) {
//     // let sum = 180;
//     return 180 - a - b;
// }
// console.log(otherAngle(45,50));

// tusk 3

// function greet(name) {
// return `Hello, ${name} how are you doing today?`;
// }
// console.log(greet('Airat'));

// tusk 4

// const min = (list) => {
//     return Math.min(...list);
// }
// const max = (list) => {
//     return Math.max(...list);
// }
// console.log(min([-1,2,3,4]));
// console.log(max([1, 2, 3, 4]));

// tusk 5

// function check(a, x) {
//   return a.includes(x);
// }
// console.log(check(["stroka", "element", "uoi"], "uoi"));

// tusk 6 

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     if (dadYearsOld / 2 == sonYearsOld) {
//         return sonYearsOld;
//         // return 'факт';
//     } else {
//         // return 'не тот возраст';
//     }
// }
// console.log(twiceAsOld(30,15));