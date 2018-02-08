"use strict";

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Zadanie 1
var a = "Hello";
var b = "World";

var greetingOne = a + " " + b;
console.log(greetingOne);

var greetingTwo = [].concat(_toConsumableArray(a), _toConsumableArray(b));
(_console = console).log.apply(_console, _toConsumableArray(greetingTwo));

//Zadanie 2
var e = function e() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(c * d);
};
e(2);

//Zadanie 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }) / args.length);
};
average(2, 8);

//Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

//Zadanie 5
var array = [1, 4, 'Iwona', false, 'Nowak'];
var third = array[2],
    fifth = array[4];

console.log(third, fifth);
