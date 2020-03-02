var numbers = [10, 5, 20, 25, 15];
var message = numbers.reduce(function(acc, curr) {
    if(acc > curr) {
        return acc;
    }
    else {
        return curr;
    }
});

console.log(message);