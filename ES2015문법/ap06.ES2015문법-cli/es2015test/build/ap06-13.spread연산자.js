"use strict";

var _console;

// 배열을 개별 변수로 만든.
var cities = ['서울', '부산', '제주'];
var x = cities[0]; // '서울'

var y = cities[1]; // '부산'

var z = cities[2]; // '제주

debugger;
console.log(cities[0], cities[1], cities[2]); // '서울', '부산', '제주'

(_console = console).log.apply(_console, cities); // '서울', '부산', '제주'
// spread 연산자는 기존의 값을 이용하여 새로운 값을 만들때 사용된다.
// 복제된 배열, 복제된 객체


var east = ["U", "K", "T"];
var west = ["N", "C", "G"]; // const countries = ['U', 'K', 'T', 'N', 'C', 'G'];

console.log(east.concat(west)); // ["U", "K", "T", "N", "C", "G"]

var countries = [].concat(east, west); // ... : spread 연산자

console.log(countries);