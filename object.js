// let str = 'Строка';
// console.log(str.toUpperCase());
// console.log(str);
// let str = 'Строка';
// str = str.toUpperCase();
// console.log(str);
// let num = 123.098876;
// num = num.toFixed(2);
// console.log(num);
// Каждый примитив имеет свой собственный объект-обертку:
/* 
string - String
number - Number
boolean - Boolean
symbol - Symbol
bigint - BigInt
Встроенные объекты языка — это объекты, доступные в любом месте скрипта и в любой ситуации.
*/
// Изменение регистра
// const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает!');
// const answer = 'мороз';
// if (answerUser.toLowerCase() === answer.toLowerCase()) {
// alert('Это правильный ответ!');
// } else {
// alert(`Не угадал, правильный ответ будет: ${answer}`);
// }

// Поиск подстроки
// 1 метод строка.indexOf();
// const str = 'Поезд едет далеко';
// console.log(str.indexOf("едет"));// console.log(str);
// 2 метод строка.includes();
// const products = [
//   "Хлеб Бородинский",
//   "Молоко Молочник",
//   "Коровка Молоко",
//   "Груша конференция",
// ];
// const search = "молоко";
// products.forEach((product) => {
// if (product.toLowerCase().includes(search.toLowerCase())) {
// console.log(product);
// }
// })
// Код выше лежит в основе реализации элемента «поиск» во многих веб-приложениях.

// 3 метод str.startsWith и str.endsWidth
// const products = [
//   "Хлеб Бородинский",
//   "Молоко Молочник",
//   "Коровка Молоко",
//   "Груша конференция",
// ];
// const search = "молоко";
// products.forEach((product) => {
//     if (product.toLowerCase().startsWith(search.toLowerCase())) {
//         console.log(product);
//     }
// })
// function palindrom(word) {
//     return word.toUpperCase() === word.toUpperCase().split('').reverse().join('');
// }
// console.log(palindrom("мим"));
// console.log(palindrom("мак"));
// console.log(palindrom("заказ"));

// Объект MATH
// console.log(Math.round(Math.random() * 10));
// запомнить эту формулу Math.round(Math.random() * (maxValue - minValue)) + minValue;
// function getRandomInt(minValue, maxValue) {
//   return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }
// console.log(getRandomInt(10, 20));

// Объект Date
// let currentDate = new Date();
// console.log(currentDate);
// получение даты и времени
/*
getDate()
: возвращает день месяца.

getDay()
: возвращает день недели. Отсчет начинается с 0 — воскресенье, и последний день — 6 — суббота.

getMonth()
: возвращает номер месяца. Отсчет начинается с нуля, то есть месяц с номером 0 — январь.

getFullYear()
: возвращает год.

toDateString()
: возвращает полную дату в виде строки.

getHours()
: возвращает час (от 0 до 23).

getMinutes()
: возвращает минуты (от 0 до 59).

getSeconds()
: возвращает секунды (от 0 до 59).

getMilliseconds()
: возвращает миллисекунды (от 0 до 999).

toTimeString()
: возвращает полное время в виде строки.

*/
// const days = [
//   "Воскресенье",
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
// ];
// const month = [
//   "Январь",
//   "Февраль",
//   "Март",
//   "Апрель",
//   "Май",
//   "Июнь",
//   "Июль",
//   "Август",
//   "Сентябрь",
//   "Октябрь",
//   "Ноябрь",
//   "Декабрь",
// ];
// let myDate = new Date();
// let fullDate =
//   "Сегодня: " +
//   myDate.getDate() +
//   " " +
//   month[myDate.getMonth()] +
//   " " +
//   myDate.getFullYear() +
//   ", " +
//   days[myDate.getDay()];
// console.log(fullDate);
// let welcome;
// let myDate = new Date();
// let hour = myDate.getHours();
// let minute = myDate.getMinutes();
// let second = myDate.getSeconds();
// if (minute < 10) {
//     minute = "0" + minute;
// }
// if (second < 10) {
//     second = "0" + second;
// }
// if (hour < 12) {
//     welcome = "Доброе утро";
// } else if (hour < 17) {
//     welcome = "Добрый день";
// } else  {
//     welcome = "Добрый вечер";
// }
// console.log(welcome + ", текущее время: " + hour + ":" + minute + ":" + second);
// const days = [
//   "Воскресенье",
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
// ];
// const month = [
//   "Январь",
//   "Февраль",
//   "Март",
//   "Апрель",
//   "Май",
//   "Июнь",
//   "Июль",
//   "Август",
//   "Сентябрь",
//   "Октябрь",
//   "Ноябрь",
//   "Декабрь",
// ];
// let myDate = new Date();
// myDate.setDate(15)
// myDate.setMonth(6)
// myDate.setYear(2020)
// console.log(myDate);
// console.log(fullDate);
// Регулярные выражения, 6 флагов: i,g,m,s,u,y
// let regexp = new RegExp('^[а-яА-Я]*$'); // без флагов
// let regexpFlag = new RegExp('^[а-яА-Я]*$', 'gmi'); // с флагами gmi
// let regexp = /^[а-яА-Я]*$/; // что означает эта запись, мы разберем чуть ниже
// let name = prompt("Введите ваше имя. Используйте только кириллические символы");

// if (regexp.test(name)) {
//   alert("Ваше имя сохранено");
// } else {
//   alert("Введены некорректные символы");
// }
// const arrText = [
//   "Пункт1. Описание пункта",
//   "Заголовок1. Описание",
//   "Пункт2. Описание пункта",
//   "Заголовок2. Описание",
// ]; // массив с размеченным текстом

// let title = prompt("Вы хотите прочитать заголовки или пункты?"); // ожидаем
// ввод пользователя 'Заголовок' или ' Пункт'

// let regexp = `/${title}/`; // если попыться создать регулярное выражение через /.../
// и передать title, то в этом случае получим обычную строку
// console.log(regexp);
// let regexp = /`${title}`/; // в этом случае получим регулярное выражение, но
// оно будет выглядеть как /`${title}`/, т. е. значение title не передастся

// let regexp = new RegExp(`${title}`); // используя такую запись создания регулярного
// // выражения, мы получим то, что хотим. Например, при вводе 'Пункт' мы получим регулярное
// // выражение /Пункт/

// arrText.forEach((el) => {
//   if (regexp.test(el)) {
//     // если есть совпадения с регулярным выражением,
//     console.log(el); // то выводим этот элемент
//   }
// });

// homework object

// 1 mission
// let str = 'строка в нижнем регистре, а станет в верхнем!!!';
// console.log(str.toUpperCase());

// 2 mission
// Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.

// function searchStart(array, string) {
//   const newArr = [];
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     let result = element.substr(0, 2);
//     if (result.toLowerCase() == string) {
//       newArr.push(element);
//       console.log(newArr);
//     }
//   }
// }
// console.log(searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"));


// 3 mission
// let number = 32.58884;
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));

// 4 mission
// const numbers = [52, 53, 49, 77, 21, 32];
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

// 5 mission
// function randomizer(minValue, maxValue) {
//   return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }
// console.log(randomizer(1, 10));

// 6 mission
// function returnArray(a = 10) {
//   return Array.from(Array(a/2), () => Math.floor(Math.random() * 10) + 1);
// }
// console.log(returnArray());

// 7 mission

// function randomNums(a, b) {
//     return Math.round(Math.random() * (b - a)) + a;
// }
// console.log(randomNums(349, 444));

// 8 mission
// let todayDate = new Date();
// console.log(todayDate);

// 9 mission Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.
// let currentDate = new Date("6 June 2023");
// console.log(currentDate);
// currentDate.setDate(73);
// console.log(currentDate);

// 10 mission
// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.
// let data = new Date();
function russianData() {
    const today = new Date();
    const dateSrc = today.toLocaleString("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    dateDst = dateSrc.split(".").reverse().join("-");
    console.log(dateSrc);
}
russianData();
