// 2.8 Callback, setTimeout, setInterval
// 1
// const fibonacci = [1, 1, 2, 3, 5, 8];
// const multipleByTwoFib = fibonacci.map((item) => item * 2);
// console.log(multipleByTwoFib);
// const plusTenFib = fibonacci.map((el) => el + 10);
// console.log(plusTenFib);
// const onlyBigFib = fibonacci.filter((el) => el > 3);
// console.log(onlyBigFib);
//  Посмотрите внимательно: оба метода принимают в качестве параметра функцию — это и есть колбэк.
// Callback-функция, или просто колбэк, — это функция, переданная в другую функцию в качестве параметра.

// const greet = (name, surname) => {
//   console.log(`Привет, ${name} ${surname}!`);
// };

// function functionWithoutCallback() {
//   greet("Глеб", "Фокин");
// }

// functionWithoutCallback();
// => Выведет в консоль «Привет, Глеб Фокин!»

// practice
// tusk 1
// function callbackWithArrayLength(arr, callback) {
// console.log(arr);
// callback(arr.length);
// }
//
// callbackWithArrayLength([1], (length) => {
// console.log(length);
// });
//
// callbackWithArrayLength([1, 1], (len) => {
// console.log(len);
// });
// callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
// console.log(l);
// });
//
// tusk 2
// function log(arrItem) {
//   console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// }
// each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// function square(number) {
//   return number * number;
// }

// function squareRoot(number) {
//   return Math.sqrt(number);
// }

// function map(arr, ruleFunction) {
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     output.push(ruleFunction(arr[i]));
//   }

//   return output;
// }

// console.log(map([1, 4, 9, 16], square)); // => [ 1, 16, 81, 256 ]
// console.log(map([1, 4, 9, 16], squareRoot)); // => [ 1, 2, 3, 4 ]

// setTimeout

// function showAd() {
//   alert("Купи наш лучший в мире продукт, только сейчас со скидкой 90%");
// }

// setTimeout(showAd, 1000 * 60);

// practice
// ОСНОВА ТАЙМЕРОВ, РЕАЛИЗОВАННЫХ НА МНОГИХ САЙТАХ

// const timer = (deadline) => {
//   if (isNaN(+deadline)) {
//     console.log("Передано некорректное число");
//     return;
//   }
//   let time = deadline;
//   console.log(time);
//   const interval = setInterval(() => {
//     time -= 1;
//     console.log(time);
//     console.log(deadline);
//   }, 1000);

//   setTimeout(() => {
//     clearInterval(interval);
//     console.log("Время истекло!");
//   }, deadline * 1000);
// };
// const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
// timer(deadline);

// homework 2.8

// tusk 1

// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];
// console.log(
//   people.sort((a, b) => {
//     if (a.age > b.age) {
//       return 1;
//     }
//     if (a.age < b.age) {
//       return -1;
//     }
//     return 0;
//   })
// );

// tusk 2

// const people = [
//   { name: "Глеб", gender: "male" },
//   { name: "Анна", gender: "female" },
//   { name: "Олег", gender: "male" },
//   { name: "Оксана", gender: "female" },
// ];
// function isPositive(arr) {
//     return arr > 0;
// }
// function isMale(people) {
//     return people.gender == 'male';
// }
// function filter(arr,callback) {
//     const mass = [];
//     for (let i = 0; i < arr.length; i++) {
//        if (callback(arr[i])) {
//         mass.push(arr[i]);
//        }
//     }
//     return mass;
// }
// console.log(filter(people, isMale));
// console.log(filter([1, 2, 3, -5, -9, 1], isPositive));

// tusk 3

// let currentDate = new Date();

// const funcTime = (time) => {
//     const interval = setInterval(() => {
//         console.log(currentDate);
//     }, 3000)
//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло');
//     }, time * 10000 )
// }
// funcTime(3);

// tusk 4

// function delayForSecond(callback) {
//   setTimeout(callback, 1000);
// //   callback();
// }

// delayForSecond(function () {
//   console.log("Привет, Глеб!");
// });

// tusk 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда»,
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
// delayForSecond(sayHi("Глеб"));
sayHi("Глеб", delayForSecond());
