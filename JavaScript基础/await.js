let flag = false
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (flag) {
                resolve(1)
            } else {
                reject('error 1')
            }
        }, 0);
    })
}

let flag2 = false
function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (flag2) {
                resolve(2)
            } else {
                reject('error 2')
            }
        }, 0);
    })
}


async function log() {
    let result = '', errorMsg = '', success = true
    try {
        await getData()
        result = await getData2().then()
    } catch (error) {
        success = false
        errorMsg = '失败'
        result = error
    }

    return { success, errorMsg, result }
}

console.log(log())