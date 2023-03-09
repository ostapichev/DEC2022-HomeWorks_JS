//Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let User = function(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

let homework = document.getElementsByClassName('homework')[0];
let userBlock = document.getElementsByClassName('users')[0];
let form = document.forms.form;

form.submit.addEventListener('click', function(eo) {
    eo.preventDefault();
    let user = new User(
        form.username.value,
        form.usersurname.value,
        form.usage.value
    );

    let username = document.createElement('p');
    username.innerText = `Name: ${user['name']}.
                          Surname: ${user['surname']}. 
                          Age: ${user['age']}`;
    userBlock.append(username);
})

//==========================
//є сторінка, на якій є блок, в якому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1
let divCount = document.getElementsByClassName('divcount')[0];
let numCount = document.getElementsByClassName('numcounter')[0];
let button = document.createElement('button');
let count = parseInt(localStorage.getItem('count')) || 0;

count++;
numCount.innerText = count;
localStorage.setItem('count', JSON.stringify(count));
button.innerText = 'очистити';
button.addEventListener('click', () => {
    localStorage.clear();
    numCount.innerText = 0;
})

divCount.append(button);

//==========================
//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
//в масив sessions зберігається інформація про дату та час відвідування сторінки.
//Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
//відмалювати всю інформацію про відвідування сторінки index.html.
//Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let Session = function(hours, minutes, seconds, date, months, year) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.date = date;
    this.months = months;
    this.year = year;
}

let now = new Date();
let hours = now.getHours().toString();
let minutes = now.getMinutes().toString();
let seconds = now.getSeconds().toString();
let date = now.getDate().toString();
let months = (now.getMonth() + 1).toString();
let year = now.getFullYear().toString();
let session = new Session(hours, minutes, seconds, date, months, year);

window.addEventListener('load', function() {
    let sessionArray = JSON.parse(localStorage.getItem('sessions')) || [];
    sessionArray.push(session);
    localStorage.setItem('sessions', JSON.stringify(sessionArray));
})




