var greeting = ['hi', 'hello', 'how', 'are', 'you ?'];

var shout = greeting.map(function(salutation) {
    return salutation.toUpperCase();
})

console.log(shout);

var greetingLowerCase = shout.map(function(salutation) {
    return salutation.toLowerCase();
})

console.log(greetingLowerCase);

var hiShout = shout.shift();

console.log(hiShout);