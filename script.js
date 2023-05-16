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
let numberMonth = Number(prompt("Введите номер месяца"));
switch (numberMonth) {
  case (numberMonth = 1):
    console.log("Зима");
    break;
  case (numberMonth = 2):
    console.log("Зима");
    break;
  case (numberMonth = 3):
    console.log("Весна");
    break;
  case (numberMonth = 4):
    console.log("Весна");
    break;
  case (numberMonth = 5):
    console.log("Весна");
    break;
  case (numberMonth = 6):
    console.log("Лето");
    break;
  case (numberMonth = 7):
    console.log("Лето");
    break;
  case (numberMonth = 8):
    console.log("Лето");
  case (numberMonth = 9):
    console.log("Осень");
    break;
  case (numberMonth = 10):
    console.log("Осень");
    break;
  case (numberMonth = 11):
    console.log("Осень");
    break;
  case (numberMonth = 12):
    console.log("Зима");
  case (numberMonth = 13):
    console.log("НЕ РАБОТАЕТ");
    break;
  default:
    break;
}
