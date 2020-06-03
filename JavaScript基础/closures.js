function outer () {
    var a = 0;
    var b = 1;
    return function inner () {
        console.log(a, b)
    }
}
// console.dir(outer())

function fn1 () {
    var name = '小白';
    function getName () {
        console.log(name)
    }
    getName()
}

fn1()

function fn2 () {
    var name = '小白';
    function getName () {
        console.log(name)
        return name;
    }
    return getName;
}

fn2()()

function demo () {
    console.log('ajax请求')
}

function debounce (fn, wait) {
    let timer = null;
    return args => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn, wait);
    }
}

let input = document.querySelector('input')
input.addEventListener('input', debounce(demo, 1000))