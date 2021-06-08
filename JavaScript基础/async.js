function getFirstName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hello');
            resolve('hello');
        }, 2000);
    });
}

function getLastName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('world');
            resolve('world');
        }, 1000);
    });
}

async function say() {
    let firstName = await getFirstName();
    let secondName = await getLastName();
    return firstName + secondName;
}

console.log(say());