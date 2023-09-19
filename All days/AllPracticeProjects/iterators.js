a = ['zero', 'one', 'two', 'three', 'four',]
b = []
a.forEach((x, i) => b.push([i, x]),
   console.log(b))
/*
[
  [0, "zero"],
  [1, "one"],
  [2, "two"],
  [3, "three"],
  [4, "four"]
]
*/