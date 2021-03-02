// var isValid = function (s) {
//     if (s.length % 2 !== 0) return false;
//     let stack = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//             stack.push(s[i]);
//         } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
//             stack.pop();
//         } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
//             stack.pop();
//         } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
//             stack.pop();
//         } else {
//             return false;
//         }
//     }
//     return !stack.length;
// };


var isValid = function (s) {
    if (s.length % 2 !== 0) return false
    while (s.includes('{}') || s.includes('()') || s.includes('[]')) {
        s = s.replace('{}', '')
        s = s.replace('()', '')
        s = s.replace('[]', '')
    }
    return s === ''
}


console.log('valid', isValid("{({})}"));

var validateStackSequences = function (pushed, popped) {
    let stack = [];
    for (let cur of pushed) {
        stack.push(cur);
        while (stack[stack.length - 1] === popped[0] && stack.length) {
            stack.pop();
            popped.shift();
        }
    }
    return !stack.length;
};

console.log('validate', validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));

var minAddToMakeValid = function (S) {
    if (!S.length) return 0
    let stack = []
    for (let i = 0; i < S.length; i++) {
        let ch = S[i];
        if (ch === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return stack.length;
};

console.log('min add to make', minAddToMakeValid('(()((('));

var StockSpanner = function () {
    this.spanner = [] // 股票跨度
    this.stockPrice = [] // 股票价格
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    if (!this.spanner.length) { // 第一天
        this.spanner.push(1);
        this.stockPrice.push(price);
        return 1;
    }

    let cnt = 0;
    let idx = this.stockPrice.length - 1;
    while (price >= this.stockPrice[idx] && idx >= 0) {
        cnt += this.spanner[idx];
        idx -= this.spanner[idx];
    }

    cnt++; // 加上本身
    this.spanner.push(cnt);
    this.stockPrice.push(price);
    return cnt;
};

var obj = new StockSpanner()
var param_1 = obj.next(100)
var param_2 = obj.next(80)
var param_3 = obj.next(60)
var param_4 = obj.next(70)
// var param_5 = obj.next(60)
// var param_6 = obj.next(75)
// var param_7 = obj.next(85)



console.log('params', param_1, param_2, param_3);

var dailyTemperatures = function (T) {
    let stack = [];
    let res = new Array(T.length).fill(0);
    console.log(res);
    for (let i = 0; i < T.length; i++) {
        while (T[i] > T[stack[stack.length - 1]] && stack.length) {
            let idx = stack.pop();
            res[idx] = i - idx;
        }
        stack.push(i)
    }
    return res;
};

console.log('dailyTemperatures', dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

var removeDuplicates = function (nums) {
    let j = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++
            nums[j] = nums[i]
        }
    }

    return j + 1
};
// @lc code=end
let nums = [1, 1, 2, 2, 2, 2, 3]

console.log(removeDuplicates(nums), nums);