// First way
var func1 = function() {
    return 'Hi';
}


//Second way
let func2 = () => 'Hi';
console.log(func2());
console.log();


// Third way
let func3 = () => { return 'Hi';}
console.log(func3());
console.log();


let es6name = () => 'Mani';
console.log(es6name());
console.log();


let es6mult = (x, y) => x * y;
var x = 5;
var y = 5;
console.log(es6mult(x, y));
console.log();


var numbers = [2, 4, 6, 8];
var es5squared = numbers.map(function(n) {
    return n * n;
})
console.log(es5squared);
console.log();

// OR

var es6squared = numbers.map(n => n * n);
console.log(es6squared);