//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
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

console.log(arrayFilms[0]);
console.log(arrayFilms[1]);
console.log(arrayFilms[2]);
console.log(arrayFilms[3]);
console.log(arrayFilms[4]);
console.log(arrayFilms[5]);
console.log(arrayFilms[6]);
console.log(arrayFilms[7]);
console.log(arrayFilms[8]);
console.log(arrayFilms[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre.
let book1 = {
    title: 'Особиста вендета',
    pageCount: 154,
    genre: 'Бойовик'
};

let book2 = {
    title: 'Лебідка',
    pageCount: 71,
    genre: 'Дедектив'
};

let book3 = {
    title: 'Після 2050',
    pageCount: 76,
    genre: 'Фантастика'
};

console.log(book1, book2, book3);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book_autors1 = {
    title: 'Особиста вендета',
    pageCount: 154,
    genre: 'Бойовик',
    autors: [
        {
            name: 'Холод Влада',
            age: 32
        },
        {
            name: 'Тарас Мельник',
            age: 35
        }
    ]
};

let book_autors2 = {
    title: 'Лебідка',
    pageCount: 71,
    genre: 'Дедектив',
    autors: [
        {
            name: 'Аделина Янг',
            age: 36
        }
    ]
};


let book_autors3 = {
    title: 'Після 2050',
    pageCount: 76,
    genre: 'Фантастика',
    autors: [
        {
            name: 'Роман Драй',
            age: 28
        }
    ]
};

console.log(book_autors1, book_autors2, book_autors3);
console.log(book_autors1['autors'][1]['name']);

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let arrayUsers = [
    {
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        password: 'Lebsackbury'
    },
    {
        name: 'Glenna Reichert',
        username: 'Delphine',
        password: 'Bartholomebury'
    },
    {
        name: 'Nicholas Runolfsdottir',
        username: 'Maxime_Nienow',
        password: 'Aliyaview'
    },
    {
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        password: 'Lebsackbury'
    },
    {
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        password: 'Howemouth'
    },
    {
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        password: 'Lebsackbury'
    },
    {
        name: 'Dennis Schulist',
        username: 'Leopoldo_Corkery',
        password: 'SouthChristy'
    },
    {
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        password: 'Roscoeview'
    },
    {
        name: 'Patricia Lebsack',
        username: 'Karianne',
        password: 'SouthElvis'
    },
    {
        name: 'Clementine Bauch',
        username: 'Samantha',
        password: 'McKenziehaven'
    }
];

console.log(arrayUsers[0]['password']);
console.log(arrayUsers[1]['password']);
console.log(arrayUsers[2]['password']);
console.log(arrayUsers[3]['password']);
console.log(arrayUsers[4]['password']);
console.log(arrayUsers[5]['password']);
console.log(arrayUsers[6]['password']);
console.log(arrayUsers[7]['password']);
console.log(arrayUsers[8]['password']);
console.log(arrayUsers[9]['password']);

//Логічні розгалуження:
//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
let x = +prompt('Введіть довільне число:', 0);
x !== 0 ? console.log('Вірно') : console.log('Невірно');

//Перевірте  скрипт при a, що дорівнює 1, 0, -3.
let a = +prompt('Введіть число 1, 0 чи -3:', 0);
if (a === 1) {
    console.log('1');
} else if (a === 0) {
    console.log('0');
} else if (a === -3) {
    console.log('-3');
} else {
    console.log('Друге число, або некоректне значення.');
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time = +prompt('Введіть хвилини: ', 0);
if (time <= 15) {
    console.log('Першо четверть години.');
} else if (time <= 30) {
    console.log('Друга частина години.');
} else if (time <= 45) {
    console.log('Третя частина години.');
} else if (time <= 59) {
    console.log('Четверта частина години.');
} else {
    console.log('Некоректне значення.');
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введіть число місяца:', 0);
if (day > 0 && day < 32) {
    if (day <= 10) {
        console.log('Перша декада місяца.');
    } else if (day <= 20) {
        console.log('Друга декада місяца.');
    } else if (day <= 31) {
        console.log('Третя декада місяца.');
    }
} else {
    console.log('Некоректне значення.');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let i = +prompt('Введіть порядковий номер тиждня (1-7):', 1);
switch (i) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Некоректне значення');
}

//- Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
let j = +prompt('Введіть число j:', 0);
let k = +prompt('Ввкдіть число k:', 0);
if (j === k) {
    console.log('Числа рівні');
} else if (j > k) {
    console.log('Число j більше числа k');
} else if (j < k) {
    console.log('Число k більше числа j');
} else {
    console.log('Некоректні значення');
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let dataArr = [undefined, null, 'string', NaN, true, false, 0, 1];

for (let f of dataArr) {
    console.log(f || 'default');
}

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i in coursesAndDurationArray) {
    if (coursesAndDurationArray[i]['monthDuration'] > 5) {
        console.log(coursesAndDurationArray[i]['title'] + ' Супер');
    }
}
// Перепрошую, але не витримав та зробив циклом ))).
