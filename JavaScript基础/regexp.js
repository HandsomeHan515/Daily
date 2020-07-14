var str = '{{message.a}}';

str.replace(/{{([^}]+)}}/g, (...args) => {
    console.log(args[1])
})