//--створити масив з:
// - з 5 числових значень
let numArr = [1, 2, 3, 4, 5];

//- з 5 стічкових значень
let stringArr = ['str', 'data', 'name', 'spam', '345'];

//- з 5 значень стрічкового, числового та булевого типу
let dataArr = ['string', 'main', 4, 7, true];

//- та вивести його в консоль
console.log(numArr);
console.log(stringArr);
console.log(dataArr);
console.log('');

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = [];
arr[0] = 'array';
arr[1] = 'spam';
arr[2] = false;
arr[3] = 4;
arr[4] = NaN;
console.log(arr);
console.log('');
//- є масив
let arrNum = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//1. перебрати його циклом while
let i = 0;
while(i < arrNum.length) {
    console.log(arrNum[i]);
    i++;
}
console.log('');

//2. перебрати його циклом for
for (i = 0; i < arrNum.length; i++) {
    console.log(arrNum[i]);
}
console.log('');

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while(j < arrNum.length) {
    if ([j] % 2 > 0) {
        console.log(arrNum[j]);
    }
    j++;
}
console.log('');

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 0; i < arrNum.length; i++) {
    if ([i] % 2 > 0) {
        console.log(arrNum[i]);
    }
}
console.log('');

//5. перебрати циклом while та вивести  числа тільки парні  значення
let k = 0;
while(k < arrNum.length) {
    if (arrNum[k] % 2 === 0) {
        console.log(arrNum[k]);
    }
    k++;
}
console.log('');

//6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
        console.log(arrNum[i]);
    }
}
console.log('');

//7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 3 === 0) {
        console.log(arrNum[i] = 'okten');
    }
}
console.log('');

//8. вивести масив в зворотньому порядку.
for (i = arrNum.length - 1; i >= 0; i--) {
    console.log(arrNum[i]);
}
console.log('');

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for (i = numArr.length - 1; i >= 0; i--) {
    console.log(numArr[i]);
}
console.log('');

for (i = stringArr.length - 1; i >= 0; i--) {
    console.log(stringArr[i]);
}
console.log('');

for (i = dataArr.length - 1; i >= 0; i--) {
    console.log(dataArr[i]);
}
console.log('');

let arrNum2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let n = arrNum2.length - 1;
while(n >= 0) {
    console.log(arrNum2[n]);
    n--;
}
console.log('');

for (i = arrNum2.length - 1; i >= 0; i--) {
    console.log(arrNum2[i]);
}
console.log('');

let m = arrNum2.length - 1;
while(m >= 0) {
    if ([m] % 2 > 0) {
        console.log(arrNum2[m]);
    }
    m--;
}
console.log('');

let l = arrNum2.length - 1;
while(l >= 0) {
    if (arrNum2[l] % 2 === 0) {
        console.log(arrNum2[l]);
    }
    l--;
}
console.log('');

for (i = arrNum2.length - 1; i >= 0; i--) {
    if (arrNum2[i] % 3 === 0) {
        console.log(arrNum2[i] = 'okten');
    }
}
console.log('');

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < arrnum.length; i++) {
    console.log(arrnum[i]);
}
console.log('');

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let filmsArr = [
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
for (i = 0; i < filmsArr.length; i++) {
    console.log(filmsArr[i]);
}
console.log('');

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let dataarr = [undefined, null, 'string', NaN, true, false, 0, 1, 'spam', 345];
for (i = 0; i < dataarr.length; i++) {
    console.log(dataarr[i]);
}
console.log('');

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (i = 0; i < dataarr.length; i++) {
    if (typeof dataarr[i] === "boolean") {
        console.log(dataarr[i]);
    }
}
console.log('');

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (i = 0; i < dataarr.length; i++) {
    if (typeof dataarr[i] === "number") {
        console.log(dataarr[i]);
    }
}
console.log('');

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (i = 0; i < dataarr.length; i++) {
    if (typeof dataarr[i] === "string") {
        console.log(dataarr[i]);
    }
}
console.log('');

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let dataarr2 = [];
dataarr2[0] = undefined;
dataarr2[1] = null;
dataarr2[2] = 'string';
dataarr2[3] = NaN;
dataarr2[4] = true;
dataarr2[5] = false;
dataarr2[6] = 0;
dataarr2[7] = 1;
dataarr2[8] = 'spam';
dataarr2[9] = 345;
for (i = 0; i < dataarr2.length; i++) {
    console.log(dataarr2[i]);
}
console.log('');

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < dataarr2.length; i += 2) {
    console.log([i]);
    document.write(`<div>${i}</div>`)
}
console.log('');

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write



//стоврити масив книжок (назва, кількість сторінок, автори , жанри).
//-знайти наібльшу книжку.
//- знайти книжку/ки з найбільшою кількістю жанрів
//- знайти книжку/ки з найдовшою назвою
//- знайти книжку/ки які писали 2 автори
//- знайти книжку/ки які писав 1 автор*/