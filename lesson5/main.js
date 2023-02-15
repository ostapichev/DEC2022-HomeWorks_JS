//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let getSquare = (a, b) => a * b;
let a = 4;
let b = 5;

console.log(`Площа прямокутника буде: ${getSquare(a, b)}`);
console.log('');

//- створити функцію яка обчислює та повертає площу кола з радіусом r
let getCircle = (r, PI) => PI * r ** 2;
let r = 6;
const PI = 3.14;

console.log(`Площа кола буде: ${getCircle(r, PI)}`);
console.log('');

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let getCylinder = (r, h, PI) => 2 * PI * r * (h + r);
let h = 9;

console.log(`Площа циліндру буде: ${getCylinder(r, h, PI)}`);
console.log('');

//- створити функцію яка приймає масив та виводить кожен його елемент
let showFilms = (arr) => {
    for (let film of arr) {
        console.log(film);
    }
}

let arrayFilms = [
    'Райське шосе',
    'Вищий пілотаж',
    'Секс заради виживання',
    'Не бреши',
    'Покер фейс',
    'Бюро знахідок',
    'Крути 1918',
    'Одержимі бажанням',
    'Баракуда',
    'Кіборги'
];

showFilms(arrayFilms);
console.log('');

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let getParagraph = (text) => document.write(`<p>${text}</p>`);
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam.';
getParagraph(text);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let getLi = (text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

getLi(text);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let getUl_li = (text, li) => {
    document.write(`<ul>`);
    for (let i = 0; i < li; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

getUl_li(text, 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let getList = (arr) => {
    document.write(`<ul>`);
    for (let data of arr) {
        document.write(`<li>${data}</li>`);
    }
    document.write(`</ul>`);
}

let dataArr = ['string', NaN, true, false, 0, 1];
getList(dataArr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let getUserBlock = (users) => {
    for (let user of users) {
        document.write(`<h4>User ${user['id']}</h4>`);
        document.write(`<ul>`);
        document.write(`<li>${Object.keys(user)[2]} - ${user['id']}</li>`);
        document.write(`<li>${Object.keys(user)[0]} - ${user['name']}</li>`);
        document.write(`<li>${Object.keys(user)[1]} - ${user['age']}</li>`);
        document.write(`</ul>`);
    }
}

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];

getUserBlock(users);

//- створити функцію яка повертає найменьше число з масиву
let getMinNum = (arr) => {
    let num = arr[0];
    for (let item of arr) {
        if (num > item) {
            num = item;
        }
    }
    return num;
}

let arrRandomNum = [43, 45, 23, 7, 89, 234, 21];

console.log(`Найменьше число з масиву: ${getMinNum(arrRandomNum)}`);
console.log('');

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

let arrNum = [1, 2, 10];

console.log(`Сума значеннь елементів масиву: ${sum(arrNum)}`);
console.log('');

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let num1 = arr[index1];
    let num2 = arr[index2];
    arr[index2] = num1;
    arr[index1] = num2;
    return arr;
}

let arrIndex = [11, 22, 33, 44];

console.log(`Початковий масив: ${arrIndex}`);
console.log(`Кінцевий масив: ${swap(arrIndex, 0, 1)}`);
console.log('');

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
let exchange = (sum, currencyValues, exchangeCurrency, callback) => {
    for (let item of currencyValues) {
        if (exchangeCurrency === item['currency']) {
            return callback(sum, item);
        }
    }
}

let currencyUAH = (sum, item) => {
    return `${sum} ${'UAH'} ${(sum / item['value']).toFixed(2)} ${item['currency']}`;
}

let getChangeUAH  = (sum, item) => {
    return `${sum} ${item['currency']} ${(sum * item['value']).toFixed(2)} ${'UAH'}`;
}

let currencys = [
    {currency: 'USD',  value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'pound', value: 44},
    {currency: 'TL', value: 2}
]

console.log(exchange(10000, currencys, 'USD', currencyUAH));
console.log(exchange(1200, currencys, 'EUR', currencyUAH));
console.log(exchange(1000, currencys, 'pound', currencyUAH));
console.log(exchange(1000, currencys, 'pound', getChangeUAH));
console.log(exchange(1000, currencys, 'TL', getChangeUAH));
console.log(exchange(10000, currencys, 'TL', currencyUAH));
