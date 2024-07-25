function add(a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}
function multiply(a, b) {
return a * b;
}

function divide(a,b) {
return a / b
}
function increment(a) {
return a + 1
}
function decrement(a) {
return a - 1
}

function makeInt(a) {
    return parseInt(a, 10);
}
function preserveDecimal(a) {
    return parseFloat (a)
}

let number = 5
number += 3;
number -=2;
number *10;
number /=5;

number = 10

function add5() {
    return (number += 5);
  }

function divideBy3() {
    return (number /= 3);
  }
divideBy3();
add5();
number = 10;
add5();
divideBy3();


1 + 80;
60 - 40;
2 * 3.4;
5.0 / 2.5;
