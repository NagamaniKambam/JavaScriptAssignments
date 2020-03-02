var numbers = [2, 4, 6, 8, 10];

var double = numbers.map(function(mult) {
    return mult * 2;
}).map(function(mult) {
    return mult + 1;
})
console.log(double);