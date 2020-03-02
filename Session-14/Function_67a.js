var numbers = [5, 10, 15, 20, 25];
var addition = numbers.reduce(function(x, y) {
    console.log(x, y);
    return x + y;    
});

console.log(addition);
console.log();
var multiplication = numbers.reduce(function(x, y) {
    console.log(x, y);
    return x * y;    
});

console.log(multiplication);