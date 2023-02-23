fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        document.write(`<div class="users">`);
        for (let user of users) {
            document.write(`<div class="user">`);
            document.write(`<p>${Object.keys(user)[0]} ${':'} ${user['id']}</p>`);
            document.write(`<p>${Object.keys(user)[1]} ${':'} ${user['name']}</p>`);
            document.write(`<button><a href="#">Детальніше</a></button>`);
            document.write((`</div>`));
        }
    })