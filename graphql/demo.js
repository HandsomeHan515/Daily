// const obj = {
//     channelName: "channel",
//     channelMode: 1,
//     channelType: 2,
//     roles: [{ roleId: "111111" }, { roleId: "2222" }],
//     address: ["111111", '22222']
// }

// function objectToQuery (obj) {
//     const objStr = JSON.stringify(obj)
//     const reg = /"(\w+)":/g
//     return objStr.replace(reg, (val, $1) => {
//         console.log('val', val)
//         return $1 + ':'
//     })
// }

// console.log('obj', objectToQuery(obj))

function gql (one, ...values) {
    console.log(one)
    console.log(...values)
}

const person = 'han'
const age = 21

gql`{
    query {
        getRoleList(person: ${person}, age: ${age}) {
            person
            age
        }
    }
}`
