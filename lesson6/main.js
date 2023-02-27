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
let delSpace = str.split(' ')
    .filter(value => value !== '')
    .join(' ');
console.log(delSpace);
console.log('');

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let stringToarray = str => str.split(' ');
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
console.log(sortNums(nums,'ascending')); // [3,11,21]
console.log(sortNums(nums,'descending')); // [21,11,3]
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
    arr => arr['monthDuration'] > 5)
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

//=========================
//описати колоду карт (від 6 до туза без джокерів)
let playCards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'}
];

console.log(playCards, playCards.length);

//- знайти піковий туз
let spadeAce = playCards.find(value => {
    return value.cardSuit === 'spade' && value.value === 'ace';
})

console.log(spadeAce);

//- всі шістки
let cardSix = playCards.filter(value => {
    return value.value === '6';
})

console.log(cardSix());

//- всі червоні карти
let redCards = playCards.filter(value => {
    return value.color === 'red';
})

console.log(redCards);

//- всі буби
let diamondCards = playCards.filter(value => value.cardSuit === 'diamond');
console.log(diamondCards);

//- всі трефи від 9 та більше

let clubsCards = playCards
    .filter(value => value.cardSuit === 'clubs')
    .slice(3, playCards.length);

console.log(clubsCards);

//=========================
//    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let cardsBox = playCards.reduce((acc, value) => {
    if (value.cardSuit === 'spade') acc.spades.push(value);
    if (value.cardSuit === 'diamond') acc.diamonds.push(value);
    if (value.cardSuit === 'heart') acc.hearts.push(value);
    if (value.cardSuit === 'clubs') acc.clubs.push(value);
    return acc;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(cardsBox)

//=========================
//  взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//--написати пошук всіх об'єктів, в який в modules є sass
let sass = coursesArray.filter(item => {
        return item.modules.includes('sass');
    }
);

console.log(sass);

//--написати пошук всіх об'єктів, в який в modules є docker
let docker = coursesArray.filter(item => {
        return item.modules.includes('docker');
    }
);

console.log(docker);