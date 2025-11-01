//===============    Завдання 1   ==========================

// 1 - отримай body елемент і виведи його в консоль;

// const bodyEl = document.querySelector('body');
// console.log(bodyEl);


// 2 - отримай елемент id="title" і виведи його в консоль;

// const titleEl = document.querySelector('#title');
// console.log(titleEl);



// 3 - отримай елемент class="list" і виведи його в консоль;

// const listEl = document.querySelector('.list');
// console.log(listEl);



// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

// const topicElements = document.querySelectorAll('[data-topic]');
// console.log(elements);


// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;


// const firstElement = document.querySelector('[data-topic]');
// console.log(element);



// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;


// const lastElement = topicElements[topicElements.length - 1];
// console.log(lastElement);



// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;


// const sibling = titleEl.nextElementSibling;
// console.log(sibling);


// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;


// const allHeadingEl = document.querySelectorAll('h3');
// console.log(allHeadingEl);


// allHeadingEl.forEach(heading => console.log(heading));


// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

// allHeadingEl.forEach(heading => {
//     heading.classList.add('active');
// });


// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;


// const navigationEl = document.querySelector('[data-topic="navigation"]');
// console.log(navigationEl);



// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// navigationEl.style.backgroundColor = 'yellow';
// console.log(navigationEl);
 

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// const textEl = navigationEl.querySelector('p');

// textEl.textContent = 'Я змінив тут текст!';
// console.log(textEl);



// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, 
// яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation"

// const currentTopicEl = document.querySelector(`[data-topic = "${currentTopic}"]`);
// console.log(currentTopicEl);



// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

// currentTopicEl.style.backgroundColor = 'blue';
// console.log(currentTopicEl);



// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// const headingEl2 = document.querySelector('.completed');
// console.log(headingEl2);


// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// const liEl = headingEl2.parentElement;
// console.log(liEl);

// liEl.remove();


// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

// const pEl = document.createElement('p');
// console.log(pEl);

// pEl.textContent = "Об'єктна модель документа (Document Object Model)";

// const h1El = document.querySelector('h1');

// const ulEl = h1El.nextElementSibling;
// console.log(ulEl);


// h1El.parentElement.insertBefore(pEl, ulEl)

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи 
// і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". 
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const liEl2 = document.createElement('li');

// const h3El = document.createElement('h3');
// h3El.textContent = "Властивість innerHTML";

// const pEl2 = document.createElement('p');
// pEl2.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// liEl2.append(h3El, pEl2);

// ulEl.append(liEl2);


// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// const liEl2 = `<li><h3>Властивість innerHTML</h3>
// <p>'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу'</p></li>`

// const container = document.querySelector('ul');

// container.insertAdjacentHTML('beforeend', `${liEl2}`);



// 20 - очисти список

// ulEl.innerHTML = '';
// console.log(ulEl);






//===============    Завдання 2   ==========================



// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const numberContainer = document.createElement('div');

// numberContainer.classList.add('number-container');



// for (let i = 1; i <= 100; i += 1) {
//     const boxNumber = document.createElement('div');
//     boxNumber.classList.add('number');
//     boxNumber.textContent = randomNumber();

//     if (boxNumber.textContent % 2 === 0) {
//         boxNumber.classList.add('even');
//     } else {
//         boxNumber.classList.add('odd');
//     };

//     numberContainer.append(boxNumber);
// } 

// document.body.appendChild(numberContainer);

// console.log(numberContainer);









//===============    Завдання 3   ==========================

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const refs = {
//     form: document.querySelector('.js-contact-form'),
//     input: document.querySelector('.js-username-input'),
//     checkbox: document.querySelector('.js-policy-checkbox'),
//     userNameSpan: document.querySelector('.js-username-output'),
// }; 

// refs.input.addEventListener('input', e => {
//     console.log(e.currentTarget.value);

//     if (e.currentTarget.value.length >= 6 && e.currentTarget.value.trim() != '') {
//         refs.input.classList.add('success');
//         refs.input.classList.remove('error');

//     } else {
//         refs.input.classList.add('error')
//         refs.input.classList.remove('success');
//     }

// });




// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`


// refs.input.addEventListener('focus', e => {
//     if (e.currentTarget.value.trim() === '') {
//         refs.input.style.outline = '3px solid red';
//     } else {
//         refs.input.style.outline = '3px solid green';
//     };
// });



// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`


// refs.input.addEventListener('blur', e => {
//     if (e.currentTarget.value.trim() === '') {
//      refs.input.style.outline = '3px solid red';
//     } else {
//      refs.input.style.outline = '3px solid green';
//     };
// })



// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.



// refs.form.addEventListener('submit', e => {
//     e.preventDefault();

//     const userName = refs.input.value.trim();

//     if (userName === '' || !refs.checkbox.checked) {
//         alert ('Введіть, будь ласка, імʼя та підтвердьте згоду.')
//         return;
//     };

//     const userData = { userName };
//     console.log(userData);


//     refs.form.reset(); 
//     refs.userNameSpan.textContent = 'Anonymous';
// })

// refs.input.addEventListener('input', e => {
//     const userName = e.currentTarget.value.trim();
//     if (userName === '') return;
    
//     refs.userNameSpan.textContent = userName;
    
// })



//===============    Завдання 4   ==========================


 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
 

// const decreaseBtn = document.querySelector('.js-decrease');
// const increaseBtn = document.querySelector('.js-increase');
// const box = document.querySelector('.box');

// let sizes = 50;

// decreaseBtn.addEventListener('click', () => {
    
//     box.style.width = `${sizes += 20}px`;
//     box.style.height = `${sizes += 20}px`;
// });

// increaseBtn.addEventListener('click', () => {
//     sizes += 20;
//     box.style.width = `${sizes}px`;
//     box.style.height = `${sizes}px`;
// });

