function Element(tagName, props, children) {
    this.tagName = tagName
    this.props = props
    this.children = children
}

Element.prototype.render = function () {
    const el = document.createElement(this.tagName)
    const props = this.props
    const children = this.children || []

    for (let propName in props) {
        let propValue = props[propName]
        el.setAttribute(propName, propValue)
    }

    children.forEach(child => {
        const childEl = (child instanceof Element)
            ? child.render()
            : document.createTextNode(child)
        el.appendChild(childEl)
    })

    return el
}


function createElement(vdom) {
    if (typeof vdom === 'string' || typeof vdom === 'number') {
        return document.createTextNode(vdom)
    }

    const { tag, props, children } = vdom
    // 1. create element
    const el = document.createElement(tag)
    // 2. set Attribute
    setProps(element, props)
    // 3. create children 
    children.map(createElement)
        .forEach(el.appendChild.bind(el))
}

function setProps(element, props) {
    for (let key in props) {
        element.setAttribute(key, props[key])
    }
}