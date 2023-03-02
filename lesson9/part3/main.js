//Цикл в циклі
//- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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

//Створити для кожного елементу масиву свій блок, блок розділити блоками,
//в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let block = document.createElement('div');
for (let item of coursesArray) {
    let container = document.createElement('div');
    let title = document.createElement('h4');
    let duration = document.createElement('div');
    let monthDuration = document.createElement('p');
    let houreDuration = document.createElement('p');
    let modules = document.createElement('ul');

    container.classList.add('container');
    title.classList.add('title');
    duration.classList.add('duration');
    monthDuration.classList.add('monthDuration');
    houreDuration.classList.add('hourDuration');
    modules.classList.add('modules');

    title.innerText = `Course: ${item['title']}`;
    monthDuration.innerText = `Duration: ${item['monthDuration']} months`;
    houreDuration.innerText = `${item['hourDuration']} hours`;
    for (let value of item['modules']) {
        let module = document.createElement('li');
        module.innerText = value;
        modules.appendChild(module);
    }

    duration.append(monthDuration, houreDuration);
    container.append(title, duration, modules);
    block.appendChild(container);
}

block.classList.add('block');
document.body.appendChild(block);


