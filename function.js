// 2.5 function
// function sayHello(name, lastName, age) {
//     alert(`Привет, ${name} ${lastName}, тебе ${age} лет`);
// }
// sayHello('Айрат', 'Бедретдинов', 20);
// function calc(a = 0, b = 0) {
//     let sum = a + b;
//     let mult = a * b;
//     console.log(`Сумма параметров равна: ${sum}
// Произведение параметров равно: ${mult}
//     `);
// }
// calc(139, 50);
// calc(89, 89);
// function riddles(question, answer) {
//   let userAnswer = prompt(question);
//   if (userAnswer === answer) {
//     console.log("угадал");
//   } else {
//     console.log("не угадал");
//   }
// }
// riddles(
//   "Сидит дед во сто шуб одет кто его раздевает тот слёзы проливает",
//   "лук"
// );
// riddles("Зимой и летом одним цветом", "елка");
// function sum(prepaidExpense, salary) {
//   return prepaidExpense + salary;
// }
// function mult(day, moneyDay) {
//   return day * moneyDay;
// }
// let month1 = sum(30, 40);
// let month2 = sum(40, 55);

// let result = month1 + month2;
// let result2 = mult(45, 3.4);
// console.log(`Всего заработал ${result}`);
// console.log(`Зарплата по дням ${result2}`);

// "use strict";
// let age = prompt("Сколько Вам лет?", 18);

// let printMessage;

// // в зависимости от условия объявляем функцию
// if (age < 18) {
//   printMessage = function () {
//     console.log("Привет!");
//   };
// } else {
//   printMessage = function () {
//     console.log("Здравствуйте!");
//   };
// }

// printMessage();

// const funcName = () => {} // стрелочная функция!!!!!
// let sum = (a, b) => a + b;
// let mult = (a, b) => {
// let result = a * b;
// return result;
// }
// console.log("Подключил файл с функциями");
// function delMessage() {
//   let del = confirm("Вы правда хотите удалить сообщение?"); // true or false
//   del ? alert("Сообщение удалено") : alert("Ничего страшного нет, мы ничего не удалили");
// }
// nfn tab or enter
// const mult = (a, b) => a * b;
// console.log(mult(2, 3));
// const reddles = (a, b) => {
//     if (a > b) {
//         return a + b;
//     } else {
//         return a * b;
//     }
// }
// console.log(reddles(3, 2));
// const dog = {
//   name: "Шарик",
//   breed: "корги",
//   weight: 6,
//   age: 2,
//   bark: function () {
//     console.log(`${dog.name} лает: ГАВ!`);
//   },
// };
// const dog = {
//   name: "Шарик",
//   breed: "корги",
//   weight: 6,
//   age: 2,
//   bark() {
//     console.log(`${dog.name} лает: ГАВ!`);
//   },
// };
// dog.bark();
// const cat = {
//   name: "Барсик",
//   breed: "перс",
//   weight: 3,
//   age: 4,
// };
// // function bark(dog) {
// //   console.log(`${dog.name} лает: ГАВ!`);
// // }
// dog.bark();
//И такая возможность есть: мы можем нашу функцию объявить внутри конкретного объекта. Давайте так и сделаем:
// Свойство объекта, принимающее в качестве значения объявление функции, называется методом объекта.
//Главное, что нужно запомнить – это обычная функция, а не стрелочная.
// const user = {
//   name: "Airat",
//   age: 20,
//   city: "Moscow",
//   getInfo() {
//     console.log(
//       `Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`
//     );
//   },
// };
// user.getInfo();
// решение SKYPRO
/* 
const user = {
	name: 'Джон',
	age: 45,
	city: 'Нью-Йорк',

	getInfo() {
		return 'Пользователь ${user.name}, возраст ${user.age}, проживает в ${user.city}';	
	}
};

console.log(user.getInfo());
*/
// function bark() {
//   console.log(`${this.name} лает: Гав!`);
// }
// const dog_1 = {
//   name: "Шарик",
//   breed: "Корги",
//   weight: 6,
//   age: 2,
//   bark: bark,
// };
// const dog_2 = {
//   name: "Бобик",
//   breed: "Шпиц",
//   weight: 3,
//   age: 4,
//   bark: bark,
// };
// dog_1.bark();
// dog_2.bark();
// practice
// function getRectangleArea() {
//     return this.width * this.height;
// }
// function getRectanglePerimeter() {
//     return (this.width + this.height) * 2;
// }
// const square1 = {
//     width: 100,
//     height: 100,
//     area: getRectangleArea,
//     perimeter: getRectanglePerimeter
// }
// const square2 = {
//     width: 200,
//     height: 200,
//     area: getRectangleArea,
//     perimeter: getRectanglePerimeter
// }
// console.log(square1.area());
// console.log(square2.perimeter());
// console.log(square2.area());
// console.log(square2.perimeter());
// ПОЛУЧИЛОСЬ !!!
// homework 2.5 function
// 1 mission
// function numbers(a,b) {
//     if (a <= b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(numbers(10, 5));
// numbers(2,3);
// 2 mission
// function number(a) {
//     if (a % 2 === 0) {
//         return "Число четное";
//     } else {
//         return "Число нечетное";
//     }
// }
// console.log(number(23));
// 3.1 mission
// function number(a) {
//     console.log(a**2);
// }
// number(3);
// 3.2 mission
// function number2(a) {
//   return a ** 2;
// }
// console.log(number2(4));
// 4 mission
// function userAge() {
//     let userAge = Number(prompt("Сколько вам лет?"));
//     if (userAge < 0 ) {
//         alert("Вы ввели неправильное значение");
//     } else if (userAge <= 12) {
//         alert("Привет, друг!");
//     } else if (userAge >= 13) {
//         alert("Добро пожаловать!");
//     }
// }
// userAge();
// 5 mission
// function numbers(a,b) {
//     if (isNaN(a) || isNaN(b) ) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b;
//     }
// }
// console.log(numbers(5, 5));
// 6 mission
// function userCub() {
//     let userNum = prompt("Введите число");
//     let numCub = Math.pow(userNum, 3);
//     if (isNaN(userNum)) {
//         alert('Переданный параметр не является числом!');
//     } else {
//         alert(`${userNum} в кубе равняется ${numCub}`);
//     }
// }
// userCub();
// 7 mission alt + shift + f - format
// function getArea() {
//   return Math.PI * this.radius**2;
// }
// function getPerimeter() {
//   return 2 * Math.PI * this.radius;
// }
// const circle1 = {
//   radius: 20,
//   area: getArea,
//   perimeter: getPerimeter,
// };
// const circle2 = {
//   radius: 10,
//   area: getArea,
//   perimeter: getPerimeter,
// };
// console.log(circle1.area());
// console.log(circle2.perimeter());
// console.log(circle2.area());
// console.log(circle2.perimeter());
