//зробити масив на 100 об'єктів та дві кнопки prev next
//при завантажені сторінки з'являються перші 10 об'єктів.
//При натисканні next виводяться настпні 10 об'єктів
//При натисканні prev виводяться попередні 10 об'єктів
let locations = [
    {
        "title": "м. Київ",
        "type": "city"
    },
    {
        "title": "Житомирська область",
        "type": "oblast"
    },
    {
        "title": "Харківська область",
        "type": "oblast"
    },
    {
        "title": "Вінницька область",
        "type": "oblast"
    },
    {
        "title": "Чернігівська область",
        "type": "oblast"
    },
    {
        "title": "Дніпропетровська область",
        "type": "oblast"
    },
    {
        "title": "Черкаська область",
        "type": "oblast"
    },
    {
        "title": "Волинська область",
        "type": "oblast"
    },
    {
        "title": "Київська область",
        "type": "oblast"
    },
    {
        "title": "Миколаївська область",
        "type": "oblast"
    },
    {
        "title": "Рівненська область",
        "type": "oblast"
    },
    {
        "title": "Сумська область",
        "type": "oblast"
    },
    {
        "title": "Тернопільська область",
        "type": "oblast"
    },
    {
        "title": "Краматорський район",
        "type": "raion"
    },
    {
        "title": "Кіровоградська область",
        "type": "oblast"
    },
    {
        "title": "Хмельницька область",
        "type": "oblast"
    },
    {
        "title": "Запорізька область",
        "type": "oblast"
    },
    {
        "title": "Одеська область",
        "type": "oblast"
    },
    {
        "title": "Полтавська область",
        "type": "oblast"
    },
    {
        "title": "Львівська область",
        "type": "oblast"
    },
    {
        "title": "м. Кривий Ріг",
        "type": "city"
    },
    {
        "title": "Криворізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Івано-Франківська область",
        "type": "oblast"
    },
    {
        "title": "Чернівецька область",
        "type": "oblast"
    },
    {
        "title": "Ізюмський район",
        "type": "raion"
    },
    {
        "title": "Бахмутська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Васильків",
        "type": "city"
    },
    {
        "title": "Васильківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білоцерківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Біла Церква",
        "type": "city"
    },
    {
        "title": "Донецька область",
        "type": "oblast"
    },
    {
        "title": "Покровський район",
        "type": "raion"
    },
    {
        "title": "Уманська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Бахмутський район",
        "type": "raion"
    },
    {
        "title": "Закарпатська область",
        "type": "oblast"
    },
    {
        "title": "Лубенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Лубни",
        "type": "city"
    },
    {
        "title": "Полтавська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Полтава",
        "type": "city"
    },
    {
        "title": "м. Старокостянтинів",
        "type": "city"
    },
    {
        "title": "Старокостянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миколаїв",
        "type": "city"
    },
    {
        "title": "Миколаївська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Торецька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кропивницький район",
        "type": "raion"
    },
    {
        "title": "Першотравенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Нікопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Нікополь",
        "type": "city"
    },
    {
        "title": "м. Першотравенськ",
        "type": "city"
    },
    {
        "title": "Одеський район",
        "type": "raion"
    },
    {
        "title": "м. Черкаси",
        "type": "city"
    },
    {
        "title": "Черкаська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Добропільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Херсонська область",
        "type": "oblast"
    },
    {
        "title": "Сумська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Суми",
        "type": "city"
    },
    {
        "title": "Первомайська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Краматорська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Макарівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Краматорськ",
        "type": "city"
    },
    {
        "title": "Миргородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бориспіль",
        "type": "city"
    },
    {
        "title": "Броварська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миргород",
        "type": "city"
    },
    {
        "title": "Бориспільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бровари",
        "type": "city"
    },
    {
        "title": "м. Вознесенськ",
        "type": "city"
    },
    {
        "title": "Коростенський район",
        "type": "raion"
    },
    {
        "title": "м. Первомайськ",
        "type": "city"
    },
    {
        "title": "Миронівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенський район",
        "type": "raion"
    },
    {
        "title": "Синельниківський район",
        "type": "raion"
    },
    {
        "title": "Фастівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Житомирський район",
        "type": "raion"
    },
    {
        "title": "Дружківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Фастів",
        "type": "city"
    },
    {
        "title": "Слов'янська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Запорізький район",
        "type": "raion"
    },
    {
        "title": "м. Слов'янськ",
        "type": "city"
    },
    {
        "title": "м. Кременчук",
        "type": "city"
    },
    {
        "title": "Ніжинський район",
        "type": "raion"
    },
    {
        "title": "м. Ватутіне",
        "type": "city"
    },
    {
        "title": "Ватутінська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кременчуцька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Пологівський район",
        "type": "raion"
    },
    {
        "title": "Дніпровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Дніпро",
        "type": "city"
    },
    {
        "title": "Лозівський район",
        "type": "raion"
    },
    {
        "title": "Покровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Обухів",
        "type": "city"
    },
    {
        "title": "Узинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шепетівський район",
        "type": "raion"
    },
    {
        "title": "Пирятинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сумський район",
        "type": "raion"
    },
    {
        "title": "Харківський район",
        "type": "raion"
    },
    {
        "title": "Жашківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Пирятин",
        "type": "city"
    },
    {
        "title": "Павлоградський район",
        "type": "raion"
    },
    {
        "title": "Голованівський район",
        "type": "raion"
    },
];

window.addEventListener('load', function(eo) {
    eo.preventDefault(eo);

    const STEP = 10;
    const PREV = document.getElementsByClassName('prev')[0];
    const NEXT = document.getElementsByClassName('next')[0];
    const DIV = document.getElementsByClassName('list')[0];

    let idLocations = locations.map((value, index) => {
        return {
            id: index + 1,
            title: value['title'],
            type: value['type']
        }
    })

    let show = (p) => {
        p.classList.remove('hidden');
        p.classList.add('show');
    }

    let hidden = (p) => {
        p.classList.remove('show');
        p.classList.add('hidden');
    }

    for (let i = 0; i < idLocations.length; i++) {
        const LOCATION = idLocations[i];
        const P = document.createElement('p');

        P.setAttribute('id', i + 1);
        P.innerText = `id: ${LOCATION['id']} 
                       Title: ${LOCATION['title']} 
                       type: ${LOCATION['type']}`;

        if (LOCATION['id'] <= STEP) {
            P.classList.add('show');
        } else {
            P.classList.add('hidden');
        }
        DIV.append(P);
    }

    PREV.addEventListener('click', function(eo) {
        eo.preventDefault(eo);

        const ID = parseInt(document.getElementsByClassName('show')[0].id);
        const START = ID;
        const STOP = ID - STEP;

        if (ID <= STEP + 1) {
            PREV.disabled = true;
        }

        if (ID <= idLocations.length - (STEP - 1)) {
            NEXT.disabled = false;
        }

        for (let i = 0; i < idLocations.length; i++) {
            const P = document.getElementsByTagName('p')[i];
            const getID = P.getAttribute('id');

            if (getID >= START) {
                hidden(P);
            } else if (getID <= START && getID >= STOP) {
                show(P);
            }
        }
    })

    NEXT.addEventListener('click', function(eo) {
        eo.preventDefault(eo);
        PREV.disabled = false;

        const ID = parseInt(document.getElementsByClassName('show')[STEP - 1].id);
        const START = ID;
        const STOP = ID + STEP;

        if (ID >= idLocations.length - STEP) {
            NEXT.disabled = true;
        }

        for (let i = 0; i < idLocations.length; i++) {
            const P = document.getElementsByTagName('p')[i];
            const getID = P.getAttribute('id');

            if (getID <= START) {
                hidden(P);
            } else if (getID >= START && getID <= STOP) {
                show(P);
            }
        }
    })
})