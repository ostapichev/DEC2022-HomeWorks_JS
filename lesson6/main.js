//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
console.log('');

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
console.log('');

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('lorem ipsum'.toLowerCase());
console.log('javascript is cool'.toLowerCase());
console.log('');

//- Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від  пробілів.
let str = ' dirty string   ';
console.log(str.trim());
console.log('');

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let stringToarray = (str) => str.split(' ');
let str2 = 'Ревуть воли як ясла повні';
let arr = stringToarray(str2); //['Ревуть', 'воли', 'як', 'ясла', 'повні'];
console.log(arr);
console.log('');

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrStr = arrNum.map(item => item.toString());
console.log(arrStr);
console.log('');

//- створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let sortNums = (arr, direction) => {
    if (direction === 'ascending') arr.sort((a, b) => a - b);
    if (direction === 'descending') arr.sort((a, b) => b - a);
    return arr;
}

let nums = [11, 21, 3];
console.log(sortNums(nums,'ascending')) // [3,11,21]
console.log(sortNums(nums,'descending')) // [21,11,3]
console.log('');

//==========================
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort(
    (a, b) => b['monthDuration'] - a['monthDuration'])
);

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(
    (arr) => arr['monthDuration'] > 5)
);

//-- за допомоги map перетворити кожен елемент на
// наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((value, index) => {
          return {
              id: index + 1,
              title: value['title'],
              monthDuration: value['monthDuration']
          }
    }
))
console.log('');

//=========================
//описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {
        cardSuit: ['spade', 'diamond', 'heart', 'clubs'],
        value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
        color: ['red', 'black']
    }
];

let playCards = cards.map(value => {
    let playCard = [];
    for (let item of cards) {
        for (item of item.cardSuit) {
            playCard.push({sute: item, value: });
        }
    return playCard;
    }
})

console.log(playCards)

//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше



/*=========================

    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}
=========================
    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker*/