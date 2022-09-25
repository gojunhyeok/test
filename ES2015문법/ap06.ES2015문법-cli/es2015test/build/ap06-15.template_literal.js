"use strict";

/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.

*/
//ES2015 문법
debugger;
var string1 = 'ㅎㅇㅎㅇ';
var string2 = 'ㅎㅇ요';
var greeting = '${string1) ${string2}'; // 달러가 뒤의 객체를 문자열로 바꾸는 것 인지 물어봐야함
// 그리고 만약 맞다면 왜 달러를 평소에 사용안하는지 물어보기

console.log(greeting);
var product = {
  name: '도서',
  price: '4200원'
};
var message = "제품 " + product.name + "의 가격은 " + product.price + "입니다.";
"\n    \uC81C\uD488 $(product.name}\uC758\n    \uAC00\uACA9\uC740 ".concat(product.price, "\uC785\uB2C8\uB2E4.\n"); // 그리고 길다란 문자열을 사용할때 가독성을 위해 한줄이아닌 두줄세줄 식으로 만들고
// 싶을떈 빽틱 (`)을 사용해야함      참고로 빽틱은 키보드 1번 왼쪽에 있는 점임 ㅇㅇ;

console.log(message);
var value1 = 1;
var value2 = 2;
var operator1 = '곱셈값은 $(value1 * value2) 입니다.';
var operator2 = '${value1 == value2  "true" : "false"} 입니다.';