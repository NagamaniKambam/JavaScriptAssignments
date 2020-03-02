var es5rain = ['red', 'orange', 'yellow'];
var es5bow = ['green', 'blue', 'indigo', 'violet'];

var es5rainbow = es5rain.concat(es5bow);
console.log(es5rainbow);

//es6 approach
let es6bow = ['green', 'blue', 'indigo', 'violet'];
let es6rainbow = ['red', 'orange', 'yellow',...es6bow];

console.log(es6rainbow);
