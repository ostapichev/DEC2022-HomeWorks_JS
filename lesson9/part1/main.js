//- створити блок,
let block = document.createElement('div');

//- додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');

//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.innerText = 'Hello World';
block.style.background = 'blue';
block.style.color = 'silver';
block.style.fontSize = '24px';

//- додати цей блок в body.
document.body.appendChild(block);

//- клонувати його повністю, та додати клон в body.
document.body.appendChild(block.cloneNode(true));

//- Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts'];

//Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul = document.createElement('ul');
for (let item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);

//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.
let divCourses = document.createElement('div');
for (let item of coursesAndDurationArray) {
    let divItem = document.createElement('div');
    divItem.innerText = `course ${item['title']}: ${item['monthDuration']} mouths`;
    divCourses.appendChild(divItem);
}

document.body.appendChild(divCourses);
//=========================

//- Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//Завдання робити через цикли.
let divCourses2 = document.createElement('div');
for (let item of coursesAndDurationArray2) {
    let divItem = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    divItem.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');
    h1.innerText = `course ${item['title']}`;
    p.innerText = `Duration: ${item['monthDuration']} mouth`;
    divItem.append(h1, p);
    divCourses2.appendChild(divItem);
}

document.body.appendChild(divCourses2);
