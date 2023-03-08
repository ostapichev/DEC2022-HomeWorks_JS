let sessions = localStorage.getItem('sessions');

for (let session of JSON.parse(sessions)) {
    let container = document.getElementsByClassName('container')[0];
    let div = document.createElement('div');

    container.appendChild(div);
    div.classList.add('block');
    div.innerText = `Відвідування сторінки: 
                     ${session['hours']}:${session['minutes']} ${session['seconds']} seconds 
                     ${session['date']} ${session['months']} ${session['year']} year.`;
}