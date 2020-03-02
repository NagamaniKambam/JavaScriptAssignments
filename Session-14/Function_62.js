var weather = [72, 84, 34, 56, 92, 24, 47, 85, 74, 54];

var goOutSide = [];
for(var i=0; i<weather.length; i++) {
    if(weather[i] > 70) {
        goOutSide.push(weather[i]);
    }
}

console.log(goOutSide);