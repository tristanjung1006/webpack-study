// a.js
// var num = 10;
// 각각의 파일명으로 namespace를 잡아줬기 때문에 다른 num이다.
var a = {
  num: 10
}
a.num // 10

// b.js
// var num = 20;
var b = {
  num: 20
}
b.num // 20