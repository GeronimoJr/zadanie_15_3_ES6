//Zadanie 1
const a = "Hello";
const b = "World";

const greetingOne = `${a} ${b}`;
console.log(greetingOne);

const greetingTwo = [...a, ...b];
console.log(...greetingTwo);


//Zadanie 2
let e = (c = 1, d = 1) => console.log(c * d);
e(2);

//Zadanie 3
const average = (...args) => console.log((args.reduce((accumulator, currentValue) => accumulator + currentValue)) / args.length);
average(2, 8);

//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

//Zadanie 5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [,, third, , fifth] = array;
console.log(third, fifth);