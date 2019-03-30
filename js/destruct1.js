// destructing assignment
var a, b, rest;
[a, b] = [10, 20]; //


console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50]; // ...rest는 스프레드연산자가 아니라, rest(나머지) 연산자, 나머지 30~50을 rest에 넣어라
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]