// 单链队列
class Queue {
    constructor() {
        this.queue = [];
    }

    enQueue(item) {
        this.queue.push(item);
    }

    deQueue(item) {
        this.queue.shift();
    }

    getHeader() {
        return this.queue[0];
    }

    getLength() {
        return this.queue.length;
    }

    isEmpty() {
        return this.getLength() === 0;
    }
}

// 循环队列
class Queue {
    constructor(length) {
        this.queue = new Array(length + 1)
        // 队头
        this.first = 0
        // 队尾
        this.last = 0
        // 当前队列大小
        this.size = 0
    }

    enQueue(item) {

    }

    getHeader() {
        if (this.isEmpty()) {
            throw Error('Queue is empty')
        } else {
            return this.queue[this.first]
        }
    }

    getLength() {
        return this.queue.length - 1
    }

    isEmpty() {
        return this.first === this.last
    }

    resize(length) {
        let q = new Array(length)
        for (let i = 0; i < length; i++) {
            q[i] = this.queue[(i + this.first) % this.queue.length]
        }
        this.queue = q
        this.first = 0
        this.last = this.size
    }
}