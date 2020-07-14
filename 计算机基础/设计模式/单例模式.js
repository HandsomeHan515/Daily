class SingleDog {
    show () {
        console.log('我是一个单例对象');
    }

    // static getInstance () {
    //     if (!SingleDog.instance) {
    //         SingleDog.instance = new SingleDog();
    //     }
    //     return SingleDog.instance;
    // }
}



SingleDog.getInstance = (function () {
    let instance = null;
    return function () {
        if (!instance) {
            instance = new SingleDog();
        }
        return instance;
    }
})()

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();
console.log(s1 === s2);