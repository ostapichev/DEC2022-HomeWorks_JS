//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
for (let i = 0; i < 10; i++) {
    document.write(`<div> ${text}</div>`);
}
document.write(`<br>`);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let textIndex = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} ${textIndex}</div>`);
}
document.write(`<br>`);

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let text2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
let i = 0;
while (i < 10) {
    document.write(`<div> ${text2}</div>`);
    i++;
}
document.write(`<br>`);

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let textIndex2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
let j = 0;
while (j < 10) {
    document.write(`<div>${j} ${textIndex2}</div>`);
    j++;
}
document.write(`<br>`);

//- Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону Масив:
//let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//ШАБЛОН:
    /*<ul>
        //<li>ITEM OF ARRAY</li>
        <!--
            і тд інші об'єкти масиву
             ...
             ...
             ...
        -->
    </ul>*/
//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<div><ul>`);
for (let listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`);
}
document.write(`</ul></div><br>`);
//-----------------------------------------------

//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону  Зробити адекватну стилізацію
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//ШАБЛОН
/*<div class="product-card">
    <h3 class="product-title">TITLE. Price - PRICE</h3>
<img src="IMAGE" alt="" class="product-image">
</div>*/
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let product of products) {
     document.write(`<div class="product-card">`);
     document.write(`<h3 class="product-title">
                        ${product['title']}. <span class="price">${Object.keys(product)[1]}</span> - ${product['price']}
                     </h3>`);
     document.write(`<img src="${product['image']}" alt="" class="product-image">`);
     document.write(`</div>`);
}
//--------------------

//є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//за допомоги циклу вивести: - користувачів зі статусом true
document.write(`<h4>Користувачі зі статусом true</h4>`)
for (let user of users) {
    if (user['status']) {
        document.write(`<p>${user['name']} - ${Object.keys(user)[2]} ${user['status']}</p>`);
    }
}

//- користувачів зі статусом false
document.write(`<h4>Користувачі зі статусом false</h4>`)
for (let user of users) {
    if (!user['status']) {
        document.write(`<p>${user['name']} - ${Object.keys(user)[2]} ${user['status']}</p>`);
    }
}

//- користувачів які старші за 30 років
document.write(`<h4>Користувачі які старші за 30 років</h4>`)
for (let user of users) {
    if (user['age'] > 30) {
        document.write(`<p>${user['name']} - ${Object.keys(user)[1]} ${user['age']}</p>`);
    }
}
