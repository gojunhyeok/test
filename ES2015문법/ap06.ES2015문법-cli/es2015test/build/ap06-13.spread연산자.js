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

// ????????? ?????? ????????? ??????.
var cities = ['??????', '??????', '??????'];
var x = cities[0]; // '??????'

var y = cities[1]; // '??????'

var z = cities[2]; // '??????

debugger;
console.log(cities[0], cities[1], cities[2]); // '??????', '??????', '??????'

(_console = console).log.apply(_console, cities); // '??????', '??????', '??????'
// spread ???????????? ????????? ?????? ???????????? ????????? ?????? ????????? ????????????.
// ????????? ??????, ????????? ??????


var east = ["U", "K", "T"];
var west = ["N", "C", "G"]; // const countries = ['U', 'K', 'T', 'N', 'C', 'G'];

console.log(east.concat(west)); // ["U", "K", "T", "N", "C", "G"]

var countries = [].concat(east, west); // ... : spread ?????????

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
// ?????? ?????? ???????????? ??????????????? ????????? ?????????.

var func = function func(_ref) {
  var type = _ref.type;
  console.log(type);
};

func(_objectSpread(_objectSpread({}, car1), car2)); // ???????????? ????????? ????????? ?????????  t2
// ????????????
// ????????? ?????? ????????? ???????????? (???????????????)
//1. func({...car1, ...car2})
//2. { type } = {...car1, ...car2}
// ????????? ????????? ???????????? func( {...car1, ...car2} ); ??? ????????????
// ???????????? ?????????func({...car1, ...car2}) ?????? spread ???????????? ?????? ??????????????? ?????????
//????????? ?????????????????????.

var moring = {
  breacfast: '?????????',
  lunuch: ' ???????????? '
};
var diner = ' ???????????? ';

var meals = _objectSpread(_objectSpread({}, moring), {}, {
  // ?????? const moring ?????? ????????? ???????????? ?????? ????????? ????????????(spread)
  diner: diner
});

console.log(meals); // meals ??? ???????????? ?????? ??????????????
// ?????????  ????????? ???????????? ????????????
// ???????????? ???????????? ????????????
// spread ???????????? ?????????????????????
//?????? ?????? ???????????? ??????????????? ????????? ?????????. (???????????????)
//????????? ????????? ...??????(spread?????????) ??? ??????????????? ???????????? ?????? ?????? ??????????????????
// ??????????????? ????????? ????????? ???????????? ??????.   (?????? ?????? ??????????????? ???????????????)
// ??????????????? ??????

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