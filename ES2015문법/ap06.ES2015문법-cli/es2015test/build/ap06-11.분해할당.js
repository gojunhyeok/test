"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.


*/
debugger; //Es5 에서 분해할당 하는 방법
//Es5 에서 분해할당 하는 방법

var points = [20, 30, 40];
var x1 = points[0];
var y1 = points[1];
var z1 = points[2];
console.log(x1, y1, z1); // 20, 30, 40
//Es2015에서 분해할당 하는 방법

var x2 = points[0],
    y2 = points[1],
    z2 = points[2];
console.log([x2, y2, z2]); // 20, 30, 40
//두번쨰 값 무시하기

var x3 = points[0],
    z3 = points[2]; // 20 ,30, 40

console.log(x3, z3); // 20 40
//두번째, 세번째 값 무시하기

var x4 = points[0],
    w4 = points[3]; // [20. 30, 40]

console.log(x4, w4); // 20 , undefined
// 객체 분해할당

debugger;
var car = {
  type: "t",
  color: "s",
  model: 2021
}; //ES5

var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1); // ES2015

var type = car.type,
    color = car.color,
    model = car.model,
    gear = car.gear; //  ( 리액트에서 주로 사용하는 방법)

console.log(type, color, model, gear); // t S 2021 undefind

var type2 = car.type,
    color2 = car.color,
    model2 = car.model,
    gear2 = car.gear2;
console.log(type2, color2, model2, gear2); // t, s, 2021, undefined
// 지금 사용한 밑의 화살표 함수가 리액트를 사용할때의 30% 이상을 차지하는
//중요한 함수이다

var func1 = function func1(_ref) {
  var type = _ref.type,
      color = _ref.color;
  console.log(type);
  console.log(color);
};

func1(car); // 이렇게 될경우 원래 car에서의 함수에서 세가지의 객체가 아닌
// func1 로 지정한 함수에서  타입과 컬러만 나타 내어줌(객체의 분해할당)
//( 참고로 함수내에서 이미console.log()를 이용 해서 함수 func1 만 타이핑했을뿐인데도
//  디버깅을 할시 정확히 타입과 컬러가 나오는 경우이다.)