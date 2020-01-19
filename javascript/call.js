Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        return new Error('This is not function')
    }
    context = context || window
    context.fn = this
    console.log('this', this)
    const result = context.fn(...[...arguments].slice(1))
    delete context.fn
    return result
}

let person = {
    name: 'han'
}

function say (age, sex) {
    console.log('I am ' + this.name, age, sex)
}

let dog = {
    name: 'h',
    a: {
        name: 'a',
        say (age, sex) {
            console.log('I am ' + this.name, age, sex)
        }
    }
}

let name = 'nnnn'

// dog.a.say.myCall(person, 18, '女')


Function.prototype.call2 = function (context, ...args) {
    if (typeof this !== 'function') {
        return new Error('This is not a function')
    }

    context = context || window;
    context.fn = this;
    console.log('args', ...args)
    var result = context.fn(...args);
    delete context.fn;
    return result;
}

dog.a.say.call2(person, 18, '男')

