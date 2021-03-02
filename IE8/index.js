const { min } = require("lodash")

function dateFormat (date, format = 'yyyy-MM-dd hh:mm:ss') {
    /* eslint no-useless-escape: 0 */
    const year = '([0-9]{4})[-/年]?'
    const month = '([0-9]{2})[-/月]?'
    const day = '([0-9]{2})[\\s日]?'
    const time = '(([0-9]{2})[:]?([0-9]{2})[:]?([0-9]{2}))?'
    const reg = new RegExp(`^${year}${month}${day}${time}$`)
    const formatReg = /^[y]{4}(\S*)[M]{2}(\S*)[d]{2}(\S*)[h]{2}(\S*)[m]{2}(\S*)[s]{2}/
    if (!date) return
    let dateArr = date.match(reg)
    let splitTag = format.match(formatReg)
    console.log(dateArr, splitTag);

    date = `${dateArr[1]}${splitTag[1]}${dateArr[2]}${splitTag[2]}${dateArr[3]}${splitTag[3]}`
    let timeStr = `${dateArr[5] || ''}${splitTag[4] || ''}${dateArr[6] || ''}${splitTag[5] || ''}${dateArr[7] || ''}`
    return date + timeStr
}

const d = new Date()
let year = d.getFullYear()
let month = d.getMonth()
month = month < 10 ? `0${month + 1}` : month + 1
let day = d.getDate()
day = day < 10 ? `0${day}` : day
let hour = d.getHours()
hour = hour < 10 ? `0${hour}` : hour
let minutes = d.getMinutes()
minutes = minutes < 10 ? `0${minutes}` : minutes
let seconds = d.getSeconds()
seconds = seconds < 10 ? `0${seconds}` : seconds
console.log(`${year}-${month}-${day} ${hour}:${minutes}:${seconds}`);