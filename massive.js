// 2.6 Массивы [], {} - объект
// const massive = ['стул','стол','кресло','диван'];
// console.log(massive);
// console.log(massive.length);
// console.log(massive[0]);
// console.log(massive[1]);
// console.log(massive[2]);
// console.log(massive[3]);
// massive[0] = 'комод';
// massive[1] = 'шкаф';
// massive[2] = 'кровать';
// massive[3] = 'кресло качалка';
// console.log(massive);
// massive[4] = 'журнальный столик';
// console.log(massive);
// const numbs = [2, 4, 5, 6, 8];
// for (let i = 0; i < numbs.length; i++) {
//     console.log(numbs[i]);
// }
// const numbers =[1,5,2,6];
// console.log(numbers.length);
// const listName = ['Anna','Inga']
// console.log(listName.length);
// const emptyArray = [];
// console.log(emptyArray.length);
// const numbs = [2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32,, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
// numbs.forEach((el, index) => {
//     console.log(`${index}: ${el}`);
// })
// const numbs = [2, 4, 5, 6, 8];
// numbs.forEach((el, index, arr) => {
//     console.log(`${index}: ${el}, массив: ${arr}`);
// })
// const numbs = [2,4,5,6,8];
// for (let i = 0; i < numbs.length; i++) {
//     if (numbs[i] == 5) break;
//     console.log(numbs[i]);
// }
// Методы массива при работе с текстом - split, sort, join
// split
// let greetings = 'hello';
// let arrGreetings = greetings.split('')
// console.log(arrGreetings);
// sort
// let greetings = ['h', 'e','l','l','o'];
// let greetings = [3, 43, 314, 1, 2, 5, 6, 200];
// greetings = greetings.sort();
// console.log(greetings);
// Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode
// join
// let greetings = ["h", "e", "l", "l", "o"];
// let greetings = [1, 2, 3, "т", "ы"];
// greetings = greetings.join("");
// console.log(greetings);
// let word = 'привет=как=дела';
// word = word.split('=');
// console.log(word);
// word = word.sort();
// console.log(word);
// word = word.join(" ");
// console.log(word);
// методы массива - pop, push, unshift, shift
// pop - удаляет последний элемент из массива и возвращает его:
// let products = ['Кресло','Стул','Стол'];
// console.log(products);
// console.log(products.pop());
// console.log(products);
// push - добавляет элемент в конец массива:
// let products = ['Кресло','Стул','Стол'];
// console.log(products);
// products.push('Комод');
// console.log(products);
// unshift - добавляет элемент в начало массива:
// let products = ['Кресло','Стул','Стол'];
// products.unshift('Комод');
// console.log(products);
// shift - удаляет первый элемент из массива и возвращает его:
// let products = ["Кресло", "Стул", "Стол"];
// console.log(products);
// console.log(products.shift())
// console.log(products);;
// Задача 1
// let str = "abcdef";
// let arrString = str.split("");
// console.log(arrString);

// arrString.forEach((el, index, arr) => {
//   console.log(`${index}: ${el}, массив: ${arr}`);
//   console.log(`В позиции ${index} находится элемент: ${el}`);
// });
// for (let elementArr = 0; elementArr < arrString.length; elementArr++) {
//   if (elementArr) {
// alert();
// }
// }
// Задача 2
// let str2 = "abcdef";
// // console.log(str2.includes(str2[2]));
// console.log(str2);
// const arrString2 = str2.split("");
// console.log(`МАССИВ ${arrString2}`);
// arrString2.forEach((el, index, arr) => {
//   if (el == 'c') {
//     return console.log('Буква c присутствует в этом массиве!');
//   }
//   // console.log(`${index}: ${el}`); Ура получилось с помощью перебора!!!!
// })
// Продвинутые методы массивов - filter, map, reduce
// filter - проверяет исходный массив и создаёт новый из элементов, прошедших проверку передавемой функции.
// const age = [11, 18, 119, 10, 31, 21, 16, 33, 43, 5, 7, 13, 14, ];
// const result = age.filter(item => item >= 12);
// console.log(result);
// map - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// const salary = [100000, 156000, 190000, 190000, 120000];
// let result = salary.map(item => (item - item * 0.13));
// console.log(result);
// const result2 = result.filter(item => item >= 165300);
// console.log(`Рекорды продаж: ${result2}`);
// reduce - применяет функцию reduce к каждому элементу массива, возвращая одно результирующее значение.
// const arr = [1, 2, 3, 4];
// const result = arr.reduce((intermediate, value) => intermediate + value);
// console.log(result);
// 5 раздел. 1 задача
// const nums = [3, 4, 6, 12, 11, 32, 5, 91, 66];
// const arr = [3, 5, 8, 2, 9, 10];
// const even = nums.filter(el => el % 2 ===0);
// const evenTwo = arr.filter(el => el % 2 ===0);
// console.log(even, evenTwo);
// 5 раздел. 2 задача
// const salary = [45000, 39000, 105000, 76000, 77000];
// const tax = salary.map(el => el * 0.13);
// console.log(tax);
// 5 раздел. 3 задача
// const salary = [45000, 39000, 105000, 76000, 77000];
// const totalSalary = salary.map((a, b) => a + b);
// console.log(totalSalary);
// Многомерные массивы
// const multArr = [
// [0],
// [1, 2, 3],
// [3, 4, 5],
// [5, 6, 7],
// [7, 8, 9],
// ["word", "rain", "pain", "casual", "moon"],
// ];
// console.log(multArr[5][0]);
// for (let arrIn of multArr) {
// for (const item of arrIn) {
// console.log(item);
// }
// }
// поиск искомого элемента в массиве. Оператор spread и rest
// let numbers = [1, 2, 3, 4, 5, 6];
// let search = numbers.includes(5);
// console.log(search);
// если у нас есть функция суммы и массив данных
// let arrSum = [3,4];
// const sum = (a, b) => {
//     let result = a + b;
//     return result;
// }
// console.log(sum(...arrSum));
// let arrMax = [1,2,3,4,5,6];
// let max = Math.max(...arrMax);
// console.log(max);
// function funcSum(...arrSum) {
// let sum = 0;
// for (const item of arrSum) {
// sum += item;
// }
// return sum;
// }
// console.log(funcSum(3,5,7));
// Оператор rest - для определения параметров, которые не используются в функции, можно использовать оператор rest
// let arrSum = [3, 4, 5, 6];
// const sum = (a, b, ...rest) => {
//   let result = a + b;
//   console.log(result);
//   console.log(rest);
// };
// console.log(sum(...arrSum));
// Использовать массивы нужно тогда, когда последовательность информации имеет большое значение.
// const newspaper = {
//   sports: {
//     title: "ARod Hits Home Run",
//     writers: ["Miramon Nuevo", "Rick Reilly", "Woddy Paige"],
//   },
//   business: {
//     title: "GE Stock Dips Again",
//     writers: ["Adam Smith", "Albert Humphrey", "Charles Handy"],
//   },
//   movies: {
//     title: "Superman Is A Flop",
//     writers: ["Rogert Ebert", "Andrew Sarris", "Wesley Morris"],
//   },
// };
// console.log(newspaper.sports.title);
// console.log(newspaper.business.writers[0]);
// console.log(newspaper["movies"]["title"]);
// homework massive


// // 1 mission
// let numArr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] === 10) break;
//   console.log(numArr[i]);
// }
// // 2 mission
// let arrNum = [1, 5, 4, 10, 0, 3];
// // console.log(arrNum.includes(4));
// // arrNum.forEach((el, index) => {
// //     console.log(`${index}: ${el}`);
// // })
// console.log(`Задание, 2 Позиция: ${arrNum.indexOf(4)}`);
// // 3 mission
// let numberArr = [1, 3, 5, 10, 20];
// let readyNumberArr = numberArr.join(" ");
// console.log(`Задание 3: ${readyNumberArr}`);
// // 4 mission
// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let l = 0; l < 3; l++) {
//     // arr[i].push(l + 1);
//     arr[i].push(1);
//   }
// }
// console.log(`Задание 4: ${arr}`);
// // 5 mission
// let arrNumber = [1, 1, 1];
// // arrNumber.push(1);
// console.log(arrNumber);
// for (let i = 0; i <= 2; i++) {
//   arrNumber.push(2);
// }
// console.log(arrNumber);
// // 6 mission
// const numArrStr = [9, 8, 7, "a", 6, 5];
// numArrStr.sort().pop();
// console.log(numArrStr);
// // 7 mission
// const arrayNumbers = [9, 8, 7, 6, 5];
// let userNumber = Number(prompt("Введите число от 1 до 10"));
// console.log(arrayNumbers.includes(userNumber));
// // function funcArr(userNumber) {
// //   // for (let num = 0; num < arrayNumbers.length; num++) {
// //   //   if (arrayNumbers[num] === userNumber) {
// //   //     alert("Число есть в массиве!");
// //   //   } else {
// //   //     alert("Числа нет в массиве");
// //   //     break;
// //   //   }
// //   // }
// //   return arrayNumbers.includes(userNumber);
// // }
// // console.log(funcArr());
// // 8 mission
// let massiveStr = "abcdef";
// let reverseMassiveStr = massiveStr.split("");
// console.log(reverseMassiveStr.reverse());
// // 9 mission
// const massiveNumbers = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(massiveNumbers.flat());
// // 10 mission
// const randomMassive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < randomMassive.length; i++) {
//   console.log(randomMassive[i + 1]);
// }
// // 11 mission
// // const wholeArr = [2, 4, 6, 8, 10];
// function squareNumbers(wholeArr) {
//   console.log(wholeArr.map((el) => el ** 2));
// }
// squareNumbers([2,4,6,8,10]);
// // 12 mission
// const arrString = ["word", "length", "arr", "massive", "Длинное предложение"];
// function arrayString() {
//   for (let el = 0; el < arrString.length; el++) {
//     console.log(arrString[el].length);
//   }
// }
// arrayString();
// // 13 mission
// function filterPositive(array) {
//   array.forEach((el) => {
//     if (el < 0) {
//       console.log(el);
//     }
//   });
// }
// filterPositive([1, 2, 3, 10, -1, -305]);
// 14 mission
// const rrrr = Math.random() * (10 - 0) + 0;
// console.log(rrrr);
// const generateArray = (length, max) => (
//   [...new Array(length)].map(() => Math.round(Math.random() * max))
// )
// const randomNumbers = generateArray(10,20);
// console.log(randomNumbers);

// практика на встрече
// мой способ
// function chec(str, char) {
//   const arr = str.split('');
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === char) {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(checkStr("мама", "м"));
// function checkStr(str, char) {
//   const arr = str.split(char); ['a', 'a']
//   return arr.length - 1;
//   // return str.split(char).length - 1;
// }
// console.log(checkStr("мама", "м"));
