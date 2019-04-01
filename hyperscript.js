const h = require('hyperscript')

// console.log(h('div#page',
//   h('div#header',
//     h('h1.classy', 'h', { style: {'background-color': '#22f'} })),
//   h('div#menu', { style: {'background-color': '#2f2'} },
//     h('ul',
//       h('li', 'one'),
//       h('li', 'two'),
//       h('li', 'three'))),
//     h('h2', 'content title',  { style: {'background-color': '#f22'} }),
//     h('p',
//       "so it's just like a templating engine,\n",
//       "but easy to use inline with javascript\n"),
//     h('p',
//       "the intention is for this to be used to create\n",
//       "reusable, interactive html widgets. ")).outerHTML)

console.log(h('h1.fun', {style: 'font-family: Comic Sans MS'}, 'Happy Birthday!').outerHTML)

var obj = {
    a: 'Apple',
    b: 'Banana',
    c: 'Cherry',
    d: 'Durian',
    e: 'Elder Berry'
  }
  console.log(h('table',
    h('tr', h('th', 'letter'), h('th', 'fruit')),
    Object.keys(obj).map(function (k) {
      return h('tr',
        h('th', k),
        h('td', obj[k])
      )
    })

  ))