//- Створити змінні. Присвоїти кожному з них значення:
//'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let hello = 'hello';
let str = 'owu';
let com = 'com';
let country = 'ua';
let num1 = 1;
let num2 =10;
let num3 = -999;
let num4 = 123;
const PI = 3.14;
let float = 2.7;
let num5 = 16;
let bool1 = true;
let bool2 = false;

// Вивести кожну змінну за допомогою: console.log
console.log(hello);
console.log(str);
console.log(com);
console.log(country);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(PI);
console.log(float);
console.log(num5);
console.log(bool1);
console.log(bool2);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName; let middleName; let lastName;
firstName = 'Oleh';
middleName = 'Oleksandrovich';
lastName = 'Ostapenko';
person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//  let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//Додаткове для тих хто цікавився prompt`oм
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt("Яке ваше ім'я?");
let middle_name = prompt("А як по-батькові?");
let age = prompt("Скількі вам років?");
console.log(`Им'я: ${name}, по-батькові: ${middle_name}, вік: ${age} років.`);

