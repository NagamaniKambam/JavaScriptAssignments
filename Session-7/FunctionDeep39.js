// review
// function expressions
// anonymous expression
// IFFEs

function knockKnock() {
    return 'Who\'s there ?';
}
console.log(knockKnock());

// turn knockKnock into an anonymous function within a function expressions
var knockKnock = function() {
    return 'Who\'s there ?';
}
console.log(knockKnock());

//Immediately invoked function expressions
function dogWalker(person, dog) {
    return person + ' is talking ' + dog + ' for a walk.';
}
console.log(dogWalker('Joe', 'charlie'));

//create an immediately invoked function expressions
//store the IIFE within a variable and call it.

(function(person, dog) {
    return person + ' is talking ' + dog + ' for a walk.'
}('Joe', 'Charlie'));

var dogWalker = (function(person, dog) {
    return person + ' is talking ' + dog + ' for a walk.'
}('Joe', 'Charlie'));

console.log(dogWalker);