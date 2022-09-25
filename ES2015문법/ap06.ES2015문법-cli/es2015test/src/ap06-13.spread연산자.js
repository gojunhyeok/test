// 배열을 개별 변수로 만든.
const cities = ['서울', '부산', '제주'];
const x = cities[0]; // '서울'
const y = cities[1]; // '부산'
const z = cities[2]; // '제주
debugger
console.log( cities[0], cities[1], cities[2] ); // '서울', '부산', '제주'
console.log( ...cities ); // '서울', '부산', '제주'

// spread 연산자는 기존의 값을 이용하여 새로운 값을 만들때 사용된다.
// 복제된 배열, 복제된 객체
const east = ["U", "K", "T"];
const west = ["N", "C", "G"];
// const countries = ['U', 'K', 'T', 'N', 'C', 'G'];
console.log(east.concat(west)); // ["U", "K", "T", "N", "C", "G"]

const countries = [...east, ...west]; // ... : spread 연산자
console.log( countries );

debugger;
const car1 = {
  type:"t1",
  color: "S1",
  model: 2017
}
const car2 = {
  type: "t2",
  color: "c2",
  model: 2019
}

const aaa = 1;

aaa = 1;
aaa = 2;
debugger;
console.log( aaa );



const {type} = car1;
console.log(type); // t1
// 분해 할당 연산자는 프로퍼티를 변수로 만든다.
const func = function ( { type }){
  console.log(type);
}
func( {...car1, ...car2} );

// 이럴경우 무엇이 나올까 정답은  t2
// 그이유는
// 그리고 밑의 예제를 알아야함 (실행순서임)
//1. func({...car1, ...car2})
//2. { type } = {...car1, ...car2}

// 이것은 위쪽의 문제에서 func( {...car1, ...car2} ); 를 적을경우
// 처음으로 실행된func({...car1, ...car2}) 에서 spread 연산자에 의해 프로퍼티가 합쳐짐
//집가서 다시한번물어봄.
const moring = {
  breacfast: '미역국',
  lunuch: ' 삼치구이 ',

};

const diner = ' 스테이크 ';

const meals = {
  ...moring, // 이게 const moring 으로 지정한 객체들을 쉽게 한줄로 불러온것(spread)
  diner

};

console.log(meals);
// meals 에 출력되는 값은 무엇인가??
// 정답은  미역국 삼치구이 스테이크

// 다시한번 확실하게 말해야함
// spread 연산자란 분해할당연산자
//분해 할당 연산자는 프로퍼티를 변수로 만든다. (존내중요함)
//그렇기 떄문에 ...객체(spread연산자) 를 무슨함수를 사용하든 뭐를 하든 사용하는순간
// 프로퍼티가 한개의 함수로 만들어져 버림.   (근데 이게 맞는말인지 확실히모름)
// 물어봐야함 ㅇㅇ


function childComponent( ...props ){ //caller
  console.log( props );
};

//  ...props = ...message

const message = "passed from Parent Component";
value = childComponent( ...message ) //caller
