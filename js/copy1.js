// # shallow copy 와 deep copy 사용방법



let book = {title: "인사이드 자바스크립트", price: 18000};
// 예제 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
// {title: "인사이드 자바스크립트", price: 20000};
let copyBook = book; // 메모리 주소값만 참조한다.  ?????
copyBook.price = 20000;
console.log(book);
console.log(copyBook);


// 예제 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.

// # 2-1 es5 Object.assign() 사용하여 deep copy하기
// let copyBook = Object.assign({}, book); // 빈 객체를 할당할때 메모리주소가 잡힌다. book 이 {} 에 값을 넣어주고 {} 는 return 하게 된다. 
let copyBook = Object.assign({}, book, {a: 1}, {title: 'temp'}); // 원본 book의 title를 override 하고 temp를 저장함
copyBook.price = 20000;
console.log(book);
console.log(copyBook);
// 실행결과 : price: 18000, price: 20000이 나옴 


// # 2-2 es6 spread 연산자를 사용하여 deep copy 하기
// let copyBook = {...book}; //book이 가지고 있는 모든 propertie를 펼쳐라
let copyBook = {...book, ...{a:1}, ...{title: 'temp'}}; //book이 가지고 있는 모든 propertie를 펼쳐라
copyBook.price = 20000;
console.log(book);
console.log(copyBook);
// 실행결과 : price: 18000, price: 20000이 나옴 