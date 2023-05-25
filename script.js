// 2.2 Переменные. Типы данных
// 1 mission
// let a = 10;
// alert(a);
// a = 20;
// alert(a);
// 2 mission
// const yearIphone = '09.01.2007';
// alert(yearIphone);
// 3 mission
// const godJs = "Brendan Eich";
// alert(godJs);
// 4 mission
// let num_1 = 10;
// let num_2 = 2;
// alert(num_1 + num_2);
// alert(num_1 - num_2);
// alert(num_1 * num_2);
// alert(num_1 / num_2);
// 5 mission
// let numberMult = 2**5;
// let result = numberMult;
// alert(result);
// 6 mission
// let a = 9;
// let b = 2;
// result = a % b;
// alert(result);
// 7 mission
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);
// 8 mission
// let age = prompt('Сколько вам лет?!');
// alert(age);
// 9-9.3 mission
// let user = {
//     name: 'Airat',
//     age: 20,
//     isAdmin: true
// }
// user["city of residence"] = "Moscow";
// user.name = "Vasya";
// user.age = 30;
// delete user["city of residence"];
// 9.4 mission
// let info = prompt("Какую информацию хотите узнать о пользователе?");
// alert(user.name);
// alert(user.age);
// alert(user.isAdmin);
// 10 mission
// let user = prompt("Введите ваше имя");
// alert(`Привет, ${user} !`);

// 2.3 Условное ветвление
// 1 mission
// let password = 'пароль';
// let userPassword = prompt('Введите пароль');
// if (userPassword === password) {
//     alert("Пароль введен верно");
// } else {
//     alert("Пароль введен неправильно");
// }
// 2 mission
// let c = 10;
// if (c > 0 && c < 10) {
//   console.log("Верно");
// } else {
//   console.log("Не верно");
// }
// 3 mission
// let d = 70;
// let e = 200;
// if (d > 100 || e > 100) {
//     console.log("Верно");
// } else {
//     console.log("Не верно");
// }
// 4 mission
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));
// 5 mission
// let numberMonth = Number(prompt("Введите номер месяца"));
// switch (numberMonth) {
//   case (numberMonth = 1):
//     console.log("Зима");
//     break;
//   case (numberMonth = 2):
//     console.log("Зима");
//     break;
//   case (numberMonth = 3):
//     console.log("Весна");
//     break;
//   case (numberMonth = 4):
//     console.log("Весна");
//     break;
//   case (numberMonth = 5):
//     console.log("Весна");
//     break;
//   case (numberMonth = 6):
//     console.log("Лето");
//     break;
//   case (numberMonth = 7):
//     console.log("Лето");
//     break;
//   case (numberMonth = 8):
//     console.log("Лето");
//   case (numberMonth = 9):
//     console.log("Осень");
//     break;
//   case (numberMonth = 10):
//     console.log("Осень");
//     break;
//   case (numberMonth = 11):
//     console.log("Осень");
//     break;
//   case (numberMonth = 12):
//     console.log("Зима");
//   case (numberMonth = 13):
//     console.log("НЕ РАБОТАЕТ");
//     break;
//   default:
//     break;
// }
// Practice 2.3
// mission 7
// let userNumber = prompt("Пожалуйста, введите любое число");
// if (userNumber % 2 === 0) {
//   alert("Число четное");
// } else {
//   alert("Число нечетное");
// }
// mission 8
// let clientOS = prompt(
//   "Введите пожалуйста цифру значением 0 или 1, 0 - если у вас IOS, 1 - android"
// );
// let clientDeviceYear = prompt(
//   "Введите год выпуска, если ваш телефон выпущен до 2015 года, вам будет предоставлена ссылка на установка упрощенные версии"
// );
// if (clientDeviceYear <= 2015) {
//   console.log("Установите упрощенную версию приложения для Android по ссылке: 'ссылка'");
//   console.log("Установите упрощенную версию приложения для iOS по ссылке: 'ссылка'");
// } else if (clientOS == true) {
//   console.log("Установите версию приложения для Android по ссылке");
// } else {
//   console.log("Установите версию приложения для iOS по ссылке");
// }
// if (clientOS == true) {
//   console.log("Установите версию приложения для Android по ссылке");
// } else {
//   console.log("Установите версию приложения для iOS по ссылке");
// }
// 2.4 урок
// let i = 1;
// let n = Number(prompt("Сколько раз вам сказать привет?"));
// while ( i <= n) {
//     alert("Привет");
//     i++;
// }
// let number;
// do {
//     number = Number(prompt("Введите 5 для проверки"));
// } while (number !== 5);
// while(true) {
//     const message = prompt("Введите ваше сообщение");
//     console.log(message);
//     if (message === 'end') {
//         break
//     }
// }
// let i = 0;
// let sum = 0;
// while (i < 10) {
//     i++;
//     if (i % 4 === 0) {
//         continue;
//     }
//     sum += i;
// }
// console.log(sum);
// while (true) {
//   const message = prompt("Введите ваше сообщение");
//   if (message === "continue") {
//     continue;
//   }
//   console.log(message);
//   if (message == "break") {
//     break;
//   }
// }
// let monthNumber = 1;
// while (monthNumber <= 12) {
//   if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
//     console.log("Зима");
//   } else if ( monthNumber >= 3 && monthNumber <= 5) {
//     console.log("Весна");
//   } else if (monthNumber >= 6 && monthNumber <= 8) {
//     console.log("Лето");
//   } else if (monthNumber >= 9 && monthNumber <= 11) {
//     console.log("Осень");
//   }
//   monthNumber++;
// }
// for (let monthNumber = 1; monthNumber <= 12; monthNumber++) {
//   if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
//     console.log("Зима");
//   } else if ( monthNumber >= 3 && monthNumber <= 5) {
//     console.log("Весна");
//   } else if (monthNumber >= 6 && monthNumber <= 8) {
//     console.log('Лето');
//   } else if (monthNumber >= 9 && monthNumber <= 11) {
//     console.log("Осень");
//   }
// }
// for (let dayNumber = 1; dayNumber <= 31; dayNumber++) {
//   if (dayNumber % 3 === 0) {
//     console.log("Сегодня отдыхаем!");
//     continue;
//   }
//   console.log("Рабочий день, братец. Вот тебе план работ: !!!");
// }
/* Для того чтобы определить существование свойства в объекте, используется оператор in.
 т.е. "name" in person // выведет true! {ОБЪЕКТ} [МАССИВ] */
// const week = {
//   mon: "Понедельник",
//   tue: "Вторник",
//   wed: "Среда",
//   thu: "Четверг",
//   fri: "Пятница",
//   sat: "Суббота",
//   sun: "Воскресенье",
// };
// for (let item in week) {
//   console.log(item);
//   console.log(week[item]);
// }
// const country = {
//   "Москва": "Россия ",
//   "Пекин": "Китай",
//   "Бразилиа": "Бразилия",
//   "Хельсинки": "Финляндия",
//   "Анкара": "Турция",
// };
// for (let capital in country) {
//     console.log(`${capital}, является столицей ${country[capital]}`);
// }
// const user = {
//   // создаем объект user
//   name: "Ivan",
//   age: 25,
//   city: "", // пустое свойство city
//   email: "ivan@vanya.com",
// };

// for (key in user) {
//   // перебираем объект
//   if (user[key]) {
//     // если свойство не пустое
//     console.log(`${key}: ${user[key]}`); // выводим ключ: значение
//   }
// }
// 2.4 homework
// 1 mission
// let i = 0;
// while (i < 2) {
//     i++;
//     console.log('hello!');
// }
// 2 mission
// for (let i = 0; i <= 5; i++) {
//    console.log(i);
// }
// 3 mission
// for (let i = 7; i <= 22; i++) {
//     console.log(i);
// }
// 4 mission
// const obj = {
//     "Коля": '200',
//     "Вася": '300',
//     "Петя": '400',
// }
// for (const money in obj) {
//     alert(`${money} - зарплата ${obj[money]} долларов`);
// }
// 5 mission
// let n = 1000;
// let num = 0;
// while (n >= 50) {
//     num++;
//     n /= 2;
// }
// console.log(n);
// console.log(num);
// 6 mission
// 4 gj 6 7 13 19 25
// for (let friday = 1; friday <= 31; friday +=7) {
//     alert(`Сегодня пятница, ${friday}. Необходимо подготовить отчёт`);
// }

 