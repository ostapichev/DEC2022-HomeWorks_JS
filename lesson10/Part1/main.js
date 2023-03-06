//Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let User = function (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}
let homework = document.getElementsByClassName('homework')[0];
let userBlock = document.getElementsByClassName('users')[0];
let form = document.forms.form;

form.submit.addEventListener('click', (eo) => {
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
localStorage.setItem('count', count);
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
localStorage.setItem('sesions', new Date());
console.log(now);


/*=========================
    зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
    При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів


*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)*/