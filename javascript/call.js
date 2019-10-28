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
            console.log(this)
            console.log('I am ' + this.name, age, sex)
        }
    }
}

let name = 'nnnn'

dog.a.say.bind(window, 18, '女')()
