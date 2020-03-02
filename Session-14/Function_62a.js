
var weather =  [85, 54, 92, 45, 63];
var niceWeather = function(temp) {
    return temp > 70;
}

var goOutSide = weather.filter(niceWeather);

console.log(goOutSide);