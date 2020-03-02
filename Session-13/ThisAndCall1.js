var person1 = {firstName : 'Nagamani', lastName : 'Kambham'};

var person2 = {firstName : 'Swetha', lastName : 'Kambham'};

function hell0(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

console.log(hell0.call(person1, 'Hello'));
console.log(hell0.call(person2, 'Hello'));