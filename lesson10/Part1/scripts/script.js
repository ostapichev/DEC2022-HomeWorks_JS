let sessions = localStorage.getItem('sessions');
for (let session of JSON.parse(sessions)) {
    let div = document.createElement('div');
    div.innerText = `Відвідування сторінки: ${session}`;
    document.body.appendChild(div);
}