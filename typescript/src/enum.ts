// 枚举类型
// 数字枚举
enum Dir1 {
  Up = 10,
  Down,
  Left,
  Right
}

console.log(Dir1.Up === 10); // true 后面的值会进行累加

// 字符串枚举
enum Dir2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Dir2.Up);

// 异构枚举
enum Dir3 {
  Up = 'Up',
  Down = 'Down',
  Left = 10,
  Right
}


console.log(Dir3.Up, Dir3.Right, Dir3, Dir3[10]);

// 反向映射

console.log(Dir1, Dir3[10]);
