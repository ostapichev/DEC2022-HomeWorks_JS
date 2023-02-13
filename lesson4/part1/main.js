//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function getSquare() {
    let a = 4;
    let b = 5;
    if (Number.isNaN(a) || Number.isNaN(b)) {
        return '???';
    }
    return a * b;
}

console.log(`Площа прямокутника буде: ${getSquare()}`);
console.log('');

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function getCircle() {
    let r = 6;
    if (Number.isNaN(r)) {
        return '???';
    }
    const PI = 3.14;
    return PI * r ** 2;
}

console.log(`Площа кола буде: ${getCircle()}`);
console.log('');

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function getCylinder() {
    let r = 8;
    let h = 9;
    if (Number.isNaN(r) || Number.isNaN(h)) {
        return '???';
    }
    const PI = 3.14;
    return 2 * PI * r * (h + r);
}

console.log(`Площа циліндру буде: ${getCylinder()}`);
console.log('');

//- створити функцію яка приймає масив та виводить кожен його елемент
function showFilms(arr) {
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
function getParagraph(text) {
    document.write(`<p>${text}</p>`);
}

let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam.';
getParagraph(text);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function getLi(text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

getLi(text);

//- створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function getUl_li(text, li) {
    document.write(`<ul>`);
    for (let i = 0; i < li; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

getUl_li(text, 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function getList(args) {
    document.write(`<ul>`);
    for (let data of args) {
        document.write(`<li>${data}</li>`);
    }
    document.write(`</ul>`);
}

let dataArr = ['string', NaN, true, false, 0, 1];
getList(dataArr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
function getUserBlock(users) {
    for (let user of users) {
        document.write(`<h6>User${user['id']}</h6>`);
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
function getMinNum(args) {
    minArr = args;
    for (let item of args) {
        for (i = 0; i < args.length; i++) {
            if (item > minArr[i]) {
                break;
            }
            if (i === args.length - 1) {
                return item;
            }
        }
    }
}

let arrRandomNum = [43, 45, 23, 7, 89, 234, 21];
console.log(`Найменьше число з масиву: ${getMinNum(arrRandomNum)}`);
console.log('');

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr) {
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
function swap(arr, index1, index2) {
    let num1 = arr[index1];
    let num2 = arr[index2];
    arr[index2] = num1;
    arr[index1] = num2;
    return arr;
}

let arrIndex = [11, 22, 33, 44];
console.log(`Початковий масив: ${arrIndex}`)
console.log(`Кінцевий масив: ${swap(arrIndex, 0, 1)}`);
console.log('');

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let item of currencyValues) {
        if (exchangeCurrency === item['currency']) {
            return `${sumUAH} ${' UAH - '} ${sumUAH / item['value']} ${item['currency']}`;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));