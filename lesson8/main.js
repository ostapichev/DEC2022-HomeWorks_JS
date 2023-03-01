//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let leanne = new User(11, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031');
let ervin = new User(21, 'Ervin', 'Howell', 'Shanna@melissa.tv', '010-692-6593');
let clementine = new User(44, 'Clementine', 'Bauch', 'Nathan@yesenia.net', '1-463-123-4447');
let patricia = new User(45, 'Patricia', 'Lebsack', 'Julianne.OConner@kory.org', '493-170-9623');
let chelsey = new User(51, 'Chelsey', 'Dietrich', 'Lucio_Hettinger@annie.ca', '(254)954-1289)');
let dennis = new User(65, 'Mrs. Dennis', 'Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478');
let kurtis = new User(71, 'Kurtis', 'Weissna', 'Telly.Hoeger@billy.biz', '210-06-.6132');
let nicholas = new User(28, 'Nicholas', 'Runolfsdottir', 'Sherwood@rosamond.me', '586-493-6943');
let glenna = new User(92, 'Glenna', 'Reichert', 'Chaim_McDermott@dana.io', '(775)976-6794)');
let clementina = new User(110, 'Clementina', 'DuBuque', 'Rey.Padberg@karina.biz', '024-648-3804');

let usersArr = new Array(
    leanne,
    ervin,
    clementine,
    patricia,
    chelsey,
    dennis,
    kurtis,
    nicholas,
    glenna,
    clementina
);

console.log(usersArr);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenIdUser = usersArr.filter(value => !(value['id'] % 2));
console.log(evenIdUser);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortIdUser = usersArr.sort((a, b) => a - b);
console.log(sortIdUser);
console.log('');

//- створити класс для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//створити пустий масив, наповнити його 10 об'єктами Client
let leanneClient = new Client(
    11, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031',
    ['order1', 'order2']
);

let ervinClient = new Client(
    21, 'Ervin', 'Howell', 'Shanna@melissa.tv', '010-692-6593',
    ['order1']
);

let clementineClient = new Client(
    43, 'Clementine', 'Bauch', 'Nathan@yesenia.net', '1-463-123-4447',
    ['order1', 'order2', 'order3', 'order4', 'order5']
);

let patriciaClient = new Client(
    45, 'Patricia', 'Lebsack', 'Julianne.OConner@kory.org', '493-170-9623',
    ['order1', 'order2', 'order3']
);

let chelseyClient = new Client(
    51, 'Chelsey', 'Dietrich', 'Lucio_Hettinger@annie.ca', '(254)954-1289)',
    ['order5']
);

let dennisClient = new Client(
    65, 'Mrs. Dennis', 'Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478',
    ['order1', 'order2', 'order5']
);

let kurtisClient = new Client(
    71, 'Kurtis', 'Weissna', 'Telly.Hoeger@billy.biz', '210-06-.6132',
    ['order1', 'order2', 'order4', 'order5']
);

let nicholasClient = new Client(
    28, 'Nicholas', 'Runolfsdottir', 'Sherwood@rosamond.me', '586-493-6943',
    ['order1', 'order2', 'order5']
);

let glennaClient = new Client(
    92, 'Glenna', 'Reichert', 'Chaim_McDermott@dana.io', '(775)976-6794)',
    ['order1', 'order2', 'order3', 'order4', 'order5']
);

let clementinaClient = new Client(
    110, 'Clementina', 'DuBuque', 'Rey.Padberg@karina.biz', '024-648-3804',
    ['order1', 'order2', 'order4', 'order5']
);

let arrClients = new Array(
    leanneClient,
    ervinClient,
    clementineClient,
    patriciaClient,
    chelseyClient,
    dennisClient,
    kurtisClient,
    nicholasClient,
    glennaClient,
    clementinaClient
);

console.log(arrClients);

//- Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortOrders = arrClients.sort((a, b) => {
    return a['order'].length - b['order'].length;
});

console.log(sortOrders);
console.log('');

//- Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, maker, year, maxspeed, motor) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxspeed = maxspeed;
    this.motor = motor;
    this.addDriver = function(driver) {
        this.driver = driver;
    }

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} км на годину.`);
    }

    this.info = function() {
        console.log(`
            Модель - ${this.model}
            Виробник - ${this.maker}
            Рік випуску - ${this.year} рік
            Максімальна швидкість - ${this.maxspeed} км/год
            Oб'єм двигуна - ${this.motor} літрів
        `);
    }

    this.increaseMaxSpeed = function(newSpeed) {
        console.log(`Швідкість змінено на ${this.maxspeed + newSpeed} км за годину`);
    }

    this.changeYear = function(newValue) {
        console.log(`Рік випуску змінено на ${this.year = newValue} рік`);
    }
};

let bmw = new Car('X5', 'BMW', 2010, 200, 3);

bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(20);
bmw.changeYear(2021);
bmw.addDriver({name: 'Vasya', surname: 'Pupkin', exp: 5});
console.log(bmw);
console.log('');

//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, maker, year, maxspeed, motor) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxspeed = maxspeed;
        this.motor = motor;
    }

    addDriver(driver) {
        this.driver = driver;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} км на годину.`);
    }

    info() {
        console.log(`
            Модель - ${this.model}
            Виробник - ${this.maker}
            Рік випуску - ${this.year} рік
            Максімальна швидкість - ${this.maxspeed} км/год
            Oб'єм двигуна - ${this.motor} літрів
        `);
    }

    increaseMaxSpeed(newSpeed) {
        console.log(`Швідкість змінено на ${this.maxspeed + newSpeed} км за годину`);
    }

    changeYear(newValue) {
        console.log(`Рік випуску змінено на ${this.year = newValue} рік`);
    }
}

let mercedes = new Cars('C-Class', 'Mercedes-Benz', 2013, 180, 1.8);

mercedes.drive();
mercedes.info();
mercedes.increaseMaxSpeed(30);
mercedes.changeYear(2019);
mercedes.addDriver({name: 'Петро', surname: 'Дудкін', exp: 3});
console.log(mercedes);
console.log('');

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Character {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class CinderelLa extends Character {
    constructor(name, age, size) {
        super(name, age);
        this.size = size;
    }
}

let melanie = new CinderelLa('Melanie', 20, 38);
let florence = new CinderelLa('Florence', 22, 38);
let agatha = new CinderelLa('Agatha', 19, 35);
let rebecca = new CinderelLa('Rebecca', 24, 36);
let barbara = new CinderelLa('Barbara', 21, 34);
let rhodopis = new CinderelLa('Rhodopis', 18, 32);
let amanda = new CinderelLa('Amanda', 25, 37);
let victoria = new CinderelLa('Victoria', 23, 34);
let miranda = new CinderelLa('Miranda', 24, 33);
let bridget = new CinderelLa('Bridget', 25, 35);

let arrCinderalas = new Array(
    melanie,
    florence,
    agatha,
    rebecca,
    barbara,
    rhodopis,
    amanda,
    victoria,
    miranda,
    bridget
);

console.log(arrCinderalas);
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Character {
    constructor(name, age, findSize) {
        super(name, age);
        this.findSize = findSize;
    }
}

let prince = new Prince('Prince', 25, 32);
console.log(prince);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let findCinderalla = ((arr, character) => {
    for (let person of arr) {
        if (person['size'] === character['findSize']) {
            return person['name'];
        }
    }
});

console.log(`Попелюшка знайдена: ${findCinderalla(arrCinderalas, prince)}`);

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
let findSize = arrCinderalas.find(value => {
    return value['size'] === prince['findSize'];
});

console.log(`Попелюшка знайдена: ${findSize['name']}`);