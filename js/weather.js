

function getWeather(position){
  var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid=28684ab800ff418e0b300ee2bdc4cd62';
  $.ajax({
    url: url,
    type: 'GET',
    crossDomain: true,
    dataType: "jsonp",
    success: function(data){
      console.log(data);
      $('#temperature').text(kelvinToCelsius(data.main.temp));
      $('#windSpeed').text(data.wind.speed);
      $('#clouds').text(data.clouds.all);
      $('#city').text(data.name);
      $('#country').text(data.sys.country);
    }
  });
}

function kelvinToCelsius(kelvin){
  return kelvin-273.15;
}
