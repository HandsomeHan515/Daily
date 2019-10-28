var arr = [{ a: 1, b: 2, children: [1, 2, 3] }]

var a = [{ "resourceId": "1300000063088", "resourceName": "壹账通(测试)", "children": [{ "resourceId": "9000001", "resourceName": "企业注册" }, { "resourceId": "9000006", "resourceName": "基础管理" }, { "resourceId": "9000009", "resourceName": "开具管理" }, { "resourceId": "9000012", "resourceName": "监控管理" }], "expand": true }]

arr = arr.reduce((pre, cur) => {
    console.log('han', pre, cur)
    return pre.children.concat(cur.children)
})

console.log(arr)