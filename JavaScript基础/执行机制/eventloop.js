function first () {
    console.log('first');
}

function second () {
    console.log('second');
}

function third () {
    console.log('third');
}

first();
setTimeout(second, 1000);
third();

