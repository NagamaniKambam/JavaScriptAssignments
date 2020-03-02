var numbers = [1, 2, 3, 4];

var message = numbers.reduce(function(acc, curr, idx, arr) {
    return acc + curr;
},5);
console.log(message);