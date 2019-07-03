function closure (name) {
    let flag = false
    function inner () {
        console.log(name)
        if (flag) {
            console.log('flag')
        }
    }

    flag = true
    return inner
}

closure('hanshuai')()