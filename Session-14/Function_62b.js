
var weather = [65, 25, 85, 75, 45, 95];
var goOutSide = weather.filter(function(temp) {
    return temp > 60;
})
console.log(goOutSide);