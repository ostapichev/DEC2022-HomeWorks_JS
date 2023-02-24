//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let leanne = new User(1, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031');
let ervin = new User(2, 'Ervin', 'Howell', 'Shanna@melissa.tv', '010-692-6593');
let clementine = new User(3, 'Clementine', 'Bauch', 'Nathan@yesenia.net', '1-463-123-4447');
let patricia = new User(4, 'Patricia', 'Lebsack', 'Julianne.OConner@kory.org', '493-170-9623');
let chelsey = new User(5, 'Chelsey', 'Dietrich', 'Lucio_Hettinger@annie.ca', '(254)954-1289)');
let dennis = new User(6, 'Mrs. Dennis', 'Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478');
let kurtis = new User(7, 'Kurtis', 'Weissna', 'Telly.Hoeger@billy.biz', '210-06-.6132');
let nicholas = new User(8, 'Nicholas', 'Runolfsdottir', 'Sherwood@rosamond.me', '586-493-6943');
let glenna = new User(9, 'Glenna', 'Reichert', 'Chaim_McDermott@dana.io', '(775)976-6794)');
let clementina = new User(10, 'Clementina', 'DuBuque', 'Rey.Padberg@karina.biz', '024-648-3804');

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

/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/