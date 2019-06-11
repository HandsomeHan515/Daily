setTimeout(() => {
    console.log('1')
}, 2000);

setTimeout(() => {
    console.log(2)
    setTimeout(() => {
        console.log(3)
    }, 2000);
}, 1000);
setTimeout(() => { console.log(4) }, 6000)