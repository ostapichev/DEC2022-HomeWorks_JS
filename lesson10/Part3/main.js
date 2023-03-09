// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)
let form = document.forms.form;
let table = document.getElementsByClassName('table')[0];
form.submit.addEventListener('click', function(eo) {
    eo.preventDefault();
    let trcount = form.tr.value;
    let tdcount = form.td.value;
    let content = form.content.value;
    content.innerText = content;
    for (let i = 0; i < trcount; i++) {
        let tr = document.createElement('tr');
        tr.classList.add('row');
        table.appendChild(tr);
        for (let i = 0; i < tdcount; i++) {
            let td = document.createElement('td');
            td.classList.add('column');
            td.innerText = content;
            tr.appendChild(td);
        }
    }
})