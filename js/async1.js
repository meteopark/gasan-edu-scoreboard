console.log('start');

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) { // 즉시 실행이 아니라 큐에 쌓인다.

    const a = await resolveAfter2Seconds(20);
    console.log(a);
    const b = await resolveAfter2Seconds(30);
    console.log(b);
    return x + a + b;
}

// console.log(add1(10));
console.log(
    add1(10).then(
        value => console.log(value)
    )
);

console.log('end');

// async가 붙으면 Promise가 된다.
// async는 await와 같이 써야 한다.
// await뒤에는 Promise가 와야 한다.
// await에서 Promise 가 끝날때 까지 기다리면서 block 된다.
// await에서 끝나면 결과를 리턴 받는다.