let list = [1, 2, 3, 4, 5]
function getData(list) {
    let arr = []
    let i = 0
    return new Promise(resolve => {
        !function getDetail(i) {
            setTimeout(() => {
                arr.push(list[i])
                i++

                if (i < list.length) {
                    getDetail(i)
                } else {
                    resolve(arr)
                }
            }, 300);
        }(i)
    })
}


async function getD() {
    let a = await getData(list).then(res => {
        console.log(res, 'res');
        return res
    })
    console.log('ar', a);
}

getD()
