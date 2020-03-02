var forecast = [
    {day : 'Monday' , sun : true, humidity : 10},
    {day : 'Tuesday' , sun : false, humidity : 100},
    {day : 'Wednesday' , sun : false, humidity : 100},
    {day : 'Thursday' , sun : true, humidity : 25},
    {day : 'Friday' , sun : false, humidity : 100},
    {day : 'Saturday' , sun : true, humidity : 15},
    {day : 'Sunday' , sun : false, humidity : 100}
];

var humid = [];

for (var i = 0; i < forecast.length; i++) {
    humid.push(forecast[i].humidity);
}

console.log(humid);

var humid = forecast.map(function(wetness) {
    return wetness.humidity;
})

console.log(humid);