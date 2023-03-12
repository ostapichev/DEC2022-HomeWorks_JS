new Promise((resolve, reject) => {
    setTimeout(() => {
        if (false) {
            resolve('okten');
        } else {
            reject('something went wrong');
        }
    }, 500)
}).then(value => {
    console.log('value');
}).catch(reason => {
    console.log(reason);
})