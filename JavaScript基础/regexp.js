// var str = '{{message.a}}';

// str.replace(/{{([^}]+)}}/g, (...args) => {
//     console.log(args[1])
// })



var re = /^\d{10}$/


console.log(re.test('1111111111'));

const hospitalOtherMap = {
    'ywlsh': '业务流水号', 'blh': '病历号', 'zyh': '住院号', 'zykb': '住院科别',
    'zysj': '住院时间', 'yjje': '预缴金额', 'bjje': '补缴金额', 'tfje': '退费金额',
    'yljglx': '医疗机构类型', 'yblx': '医保类型', 'ybbh': '医保编号', 'xb': '性别',
    'ybtcjjzf': '医保统筹基金支付', 'qtzf': '其他支付', 'grzhzf': '个人账户支付', 'grxjzf': '个人现金支付',
    'grzf': '个人自付', 'grzfs': '个人自费'
}

let arr = []
for (const key in hospitalOtherMap) {
    arr.push({ key: key, title: hospitalOtherMap[key], width: 210 })
}

console.log(arr)