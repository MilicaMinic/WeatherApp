const weatherData = {
  tempUnit: 'C',
  windSpeedUnit: 'm/s',
  days: [
    {day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10, type: 'sunny'},
    {day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy'},
    {day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy'},
    {day: 'Thu', temp: 20, windDirection: 'north-east', windSpeed: 10, type: 'rainy'},
    {day: 'Fri', temp: 15, windDirection: 'south-east', windSpeed: 15, type: 'rainy'},
    {day: 'Sat', temp: 25, windDirection: 'north-east', windSpeed: 17, type: 'sunny'},
    {day: 'Sun', temp: 26, windDirection: 'south-east', windSpeed: 10, type: 'sunny'}
  ]
}

var i, j, x = "";
for (i in weatherData.days) {
  x += "<li><button type='button' class='btn btn-primary' onclick='toggle()'>" +
  weatherData.days[i].day + "<br>" + weatherData.days[i].temp + "&#176;" + weatherData.tempUnit + "</button></li>";
}
  document.getElementById("days").innerHTML = x;

for (i in weatherData.days){
  j += "<li>" + weatherData.days[i].day + "<br>" + weatherData.days[i].temp + "&#176;" + weatherData.tempUnit + "<br>" +
  weatherData.days[i].windDirection + " " + weatherData.days[i].windSpeed + weatherData.windSpeedUnit + "<br>" +
  weatherData.days[i].type + "</li>";
}
  document.getElementById("showday").innerHTML = j;

  function toggle() {
  var x = document.getElementById("showday");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
