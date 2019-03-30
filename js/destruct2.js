// 객체할당 : 똑같은 키가 있어야만 할당 됨.
var o = {p: 42, q: true};
var {p, q} = o;
// var {q, p} = o; 결과값은 같다. (키만 같으면됨))

console.log(p); // 42
console.log(q); // true
console.log(r); // undefined