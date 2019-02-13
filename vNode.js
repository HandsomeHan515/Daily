class VNode {
    constructor(tag, data, children, text, elm) {
        this.tag = tag // 当前节点的标签名
        this.data = data // 当前节点的一些数据信息，比如 attrs、props 等数据
        this.children = children // 当前节点的子节点，是一个数组
        this.text = text // 当前节点的文本
        this.elm = elm // 当前虚拟节点对应的真实 dom 节点
    }
}

// 创建空节点
function createEmptyVNode() {
    return new VNode(undefined, undefined, undefined, '', undefined)
}

// 创建文本节点
function createTextVNode(val) { 
    return new VNode(undefined, undefined, undefined, String(val), undefined)
}

// 克隆一个 VNode 节点
function cloneVNode(node) {  
    return new VNode(node.tag, node.data, node.children, node.text, node.elm)
}

let arr = [1,2,3]
let obj = {}

Object.defineProperty(obj, 'arr', {
  get () {
    console.log('get arr')
    return arr
  },
  set (newVal) {
    console.log('set', newVal)
    arr = newVal
  }
})

obj.arr.push(4) // 只会打印 get arr, 不会打印 set
obj.arr = [1,2,3,4] // 这个能正常 set



const aryMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
const arrayAugmentations = [];

aryMethods.forEach((method)=> {

  // 这里是原生 Array 的原型方法
  let original = Array.prototype[method];

  // 将 push, pop 等封装好的方法定义在对象 arrayAugmentations 的属性上
  // 注意：是实例属性而非原型属性
  arrayAugmentations[method] = function () {
    console.log('我被改变啦!');

    // 调用对应的原生方法并返回结果
    return original.apply(this, arguments);
  };

});
