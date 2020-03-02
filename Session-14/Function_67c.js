// chain method

var numbers = [1, 2, 3, 4];
var triples = numbers.map(function(number) {
     return number * 3;
}).reduce(function(a, b){
    return a + b;
}, 0);

console.log(triples);