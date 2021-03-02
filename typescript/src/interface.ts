/* 接口 interface */

interface User1 {
  name: string
  age?: number
  readonly isMale: boolean
  say: (words: string) => string
}

const getUser = (user: User1) => user.name

// 继承接口
interface Vip extends User1 {
  broadcast: () => void
}

const getVip = (user: Vip) => user.broadcast 
