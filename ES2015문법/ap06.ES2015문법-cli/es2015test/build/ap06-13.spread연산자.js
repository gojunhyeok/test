"use strict";

var _console;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

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
debugger;
var car1 = {
  type: "t1",
  color: "S1",
  model: 2017
};
var car2 = {
  type: "t2",
  color: "c2",
  model: 2019
};
var aaa = 1;
1, _readOnlyError("aaa");
2, _readOnlyError("aaa");
debugger;
console.log(aaa);
var type = car1.type;
console.log(type); // t1
// 분해 할당 연산자는 프로퍼티를 변수로 만든다.

var func = function func(_ref) {
  var type = _ref.type;
  console.log(type);
};

func(_objectSpread(_objectSpread({}, car1), car2)); // 이럴경우 무엇이 나올까 정답은  t2
// 그이유는
// 그리고 밑의 예제를 알아야함 (실행순서임)
//1. func({...car1, ...car2})
//2. { type } = {...car1, ...car2}
// 이것은 위쪽의 문제에서 func( {...car1, ...car2} ); 를 적을경우
// 처음으로 실행된func({...car1, ...car2}) 에서 spread 연산자에 의해 프로퍼티가 합쳐짐
//집가서 다시한번물어봄.

var moring = {
  breacfast: '미역국',
  lunuch: ' 삼치구이 '
};
var diner = ' 스테이크 ';

var meals = _objectSpread(_objectSpread({}, moring), {}, {
  // 이게 const moring 으로 지정한 객체들을 쉽게 한줄로 불러온것(spread)
  diner: diner
});

console.log(meals); // meals 에 출력되는 값은 무엇인가??
// 정답은  미역국 삼치구이 스테이크
// 다시한번 확실하게 말해야함
// spread 연산자란 분해할당연산자
//분해 할당 연산자는 프로퍼티를 변수로 만든다. (존내중요함)
//그렇기 떄문에 ...객체(spread연산자) 를 무슨함수를 사용하든 뭐를 하든 사용하는순간
// 프로퍼티가 한개의 함수로 만들어져 버림.   (근데 이게 맞는말인지 확실히모름)
// 물어봐야함 ㅇㅇ

function childComponent() {
  for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }

  //caller
  console.log(props);
}

; //  ...props = ...message

var message = "passed from Parent Component";
value = childComponent.apply(void 0, _toConsumableArray(message)); //caller