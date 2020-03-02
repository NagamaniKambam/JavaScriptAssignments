let cat = {};

cat = {
    sound : 'meow',
    speak : function() {
        console.log(this.sound);
    }
};

console.log(cat.speak());

let speakFunction = cat.speak;

let speakFunctionBind = speakFunction.bind(cat);

console.log(speakFunctionBind());