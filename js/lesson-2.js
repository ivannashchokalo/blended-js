//========= 1 =================

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// const styles = ['jazz', 'blues'];
// console.log(styles);

// styles.push('rock-n-roll');
// console.log(styles);

// if (styles.indexOf('blues') !== -1) {
//    styles[styles.indexOf('blues')] = 'classic'; 
// }
// console.log(styles);

// if (styles.indexOf('blues') !== -1) {
//    styles.splice(styles.indexOf('blues'), 1, 'classic'); 
// }
// console.log(styles);




// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).


// function logItems(array) {
//     for (let i = 0; i < array.length; i += 1) {
//         const element = array[i];
//         console.log(`${i + 1} - ${element}`);
//     }
// }

// logItems([1, 2, 3, 4, 5]);
// logItems(['a', 'b', 'c']);





//===================== 2 ===================

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".


// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const userName = prompt('Введіть логін');

//     if (array.includes(userName)) {
//         alert(`Welcome, ${userName}`);
//     } else {
//        alert('User not found'); 
//     }
// }

// checkLogin(logins);


//======================== 3 =====================

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.


// function caclculateAverage(...args) {
//     let total = 0;
//     let quantity = 0;

//     for (const arg of args) {
//         if (typeof(arg) === 'number' && !isNaN(arg)) {
//             total += arg;
//             quantity += 1;
//         }
//     }
//     return quantity > 0 ? total / quantity : 0;
// }
// console.log(caclculateAverage(1, 2, 3));
// console.log(caclculateAverage(1, 2, 'qwe'));
// console.log(caclculateAverage(1, 2, NaN));
// console.log(caclculateAverage());


//======================== 4 ======================

// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const sumNumbers = function (numbers) {
//     let newNumbers = [];

//     for (let i = 0; i < numbers.length - 1; i++) {
//         if (i < numbers.length) {
//         newNumbers.push(numbers[i] + numbers[i + 1]); 
//     }
               
//     }
//     return newNumbers;
// }
// console.log(sumNumbers(someArr));



//======================== 5 =====================

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers){
//     if (Array.isArray(numbers)) {     
//       return Math.min(...numbers);
//     };

//     return 'Sory, it is not an array!';
// };
// console.log(findSmallestNumber(numbers));
// console.log(findSmallestNumber(1, 2, 3));


//=================== 6 ===========================
 
// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


// function findLongestWord(string) {
//     const words = string.split(' ');
//     let longerWord = words[0];

//     for (const word of words) {
//         if (word.length > longerWord.length) {
//             longerWord = word;
//         }
//     }
//     return longerWord;
// };
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'



//==================== 7 ===========================

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (const key of Object.keys(user)) {
//     console.log(`${key}:${user[key]}`);
// }


//=================== 8 =============================

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0


// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// let sum = 0;

// for (const value of Object.values(salaries)) {
//     sum += value; 
// }
// console.log(sum);




//=================== 9 ===========================

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'


// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     sum() {
//         return this.exist() ? this.a + this.b : 'No such propeties';
//     },
//     mult() {
//          return this.exist() ? this.a * this.b : 'No such propeties';
//     },
//     exist() {
//         return this.a && this.b;
//     }
// }
// calculator.read(1, 2);

// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.exist());


//====================== 10 =========================

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

// function calcTotalPrice(fruits, fruitName) {
//      let total = 0;

//      for (const fruit of fruits) {
//          if (fruit.name === fruitName) {
//              total += fruit.price * fruit.quantity;
//         }
//      }
//     return total;
// }

// console.log(calcTotalPrice(fruits, 'Яблуко'));
// console.log(calcTotalPrice(fruits, 'Банан'));