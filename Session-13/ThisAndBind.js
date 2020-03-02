let number = {
    x : 25,
    y : 25
};

let count = function() {
    console.log(this.x + this.y);
}

console.log(count());

let boundFunc = count.bind(number);

console.log(boundFunc());