var forecast = [
    {day : 'Monday' , sun : true},
    {day : 'Tuesday' , sun : false},
    {day : 'Wednesday' , sun : false},
    {day : 'Thursday' , sun : true},
    {day : 'Friday' , sun : false},
    {day : 'Saturday' , sun : true},
    {day : 'Sunday' , sun : false}
];

var sunnyDays = forecast.filter(function(weather) {
    return weather.sun;
})

console.log(sunnyDays);
