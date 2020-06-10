function sleep2 (ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms)
    })
}
sleep2(1000).then(() => {
    console.log(2000)
})