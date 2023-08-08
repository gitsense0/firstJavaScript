var C = 1;
console.log(C);
var D = 2;
console.log(D);

var greeting = 'Hello';
console.log(greeting);

var greeting = 'Hi';
console.log(greeting);

// Let은 중복 선언 불가, 재할당 만 가능
let let_greeting = 'Hello';
console.log(let_greeting);

// let let_greeting = 'Hi';
// console.log(let_greeting);

let_greeting = 'Hi';
console.log(let_greeting);

// const 선언과 재할당 불가

const const_greeting = 'let Hello';
console.log(const_greeting);
// const_greeting = 'hi';

func1();
func2();
// type 체크
func3();
// loop 확인

function func1(){
    console.log('Function Test1');
    if(true){
        var a = 1;
        console.log('function', a);
    }

}
// let, const는 block레벌
function func2(){
    console.log('Function Test2')
    if (true) {
        let c = 1;
        console.log(c);
    }
    // let, const는 block 레벨에서만 수행 됨
    // console.log(c);
}
// type 확인
function func3(){
    const name = "han";
    const age = 30;
    const hasJob = true;
    // array
    const habbies = ['walking', 'Reading a Book'];

    // Object
    const address = {
        province: '경기도',
        city: '성남시'
    }


    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof hasJob);
    // array인지 확인
    console.log(typeof habbies);

    console.log(Array.isArray(habbies));
}






