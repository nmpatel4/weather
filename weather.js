$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    window.data = data;
    // var nirav = {Name: "Nirav", state: "IL", status: "Awesome"};
    var markup = "Current Weather Conditions: Temp - " + data.currently.apparentTemperature + ", Cloud Cover - " + data.currently.cloudCover + ", Dew Point - " + data.currently.dewPoint + ", Humidity - " + data.currently.humidity + ", Icon - " + data.currently.icon + ", nearestStormBearing - " + data.currently.nearestStormBearing + ", nearestStormDistance - " + data.currently.nearestStormDistance + ", ozone - " + data.currently.ozone + ", precipIntensity - " + data.currently.precipIntensity + ", precipProbability - " + data.currently.precipProbability + ", pressure - " + data.currently.pressure + ", summary - " + data.currently.summary + ", Temp - " + data.currently.temperature + ", time - " + data.currently.time + ", visibility - " + data.currently.visibility + ", windBearing - " + data.currently.windBearing + ", windSpeed - " + data.currently.windSpeed
    + ".       Daily Forecast - Today: apparentTemperatureMax - " + data.daily.data[0].apparentTemperatureMax + ", apparentTemperatureMin - " + data.daily.data[0].apparentTemperatureMin + ", cloudCover - " + data.daily.data[0].cloudCover + ", dewPoint - " + data.daily.data[0].dewPoint + ", humidity - " + data.daily.data[0].humidity + ", icon - " + data.daily.data[0].icon + ", moonPhase - " + data.daily.data[0].moonPhase + ", ozone - " + data.daily.data[0].ozone + ", precipIntensity - " + data.daily.data[0].precipIntensity + ", precipProbability - " + data.daily.data[0].precipProbability + ", pressure - " + data.daily.data[0].pressure + ", summary - " + data.daily.data[0].summary + ", temperatureMax - " + data.daily.data[0].temperatureMax + ", temperatureMin - " + data.daily.data[0].temperatureMin + ", visibility - " + data.daily.data[0].visibility + ", windBearing - " + data.daily.data[0].windBearing + ", windSpeed - " + data.daily.data[0].windSpeed
    + ".       Daily Forecast - Tomorrow: apparentTemperatureMax - " + data.daily.data[1].apparentTemperatureMax + ", apparentTemperatureMin - " + data.daily.data[1].apparentTemperatureMin + ", cloudCover - " + data.daily.data[1].cloudCover + ", dewPoint - " + data.daily.data[1].dewPoint + ", humidity - " + data.daily.data[1].humidity + ", icon - " + data.daily.data[1].icon + ", moonPhase - " + data.daily.data[1].moonPhase + ", ozone - " + data.daily.data[1].ozone + ", precipIntensity - " + data.daily.data[1].precipIntensity + ", precipProbability - " + data.daily.data[1].precipProbability + ", pressure - " + data.daily.data[1].pressure + ", summary - " + data.daily.data[1].summary + ", temperatureMax - " + data.daily.data[1].temperatureMax + ", temperatureMin - " + data.daily.data[1].temperatureMin + ", visibility - " + data.daily.data[1].visibility + ", windBearing - " + data.daily.data[1].windBearing + ", windSpeed - " + data.daily.data[1].windSpeed
    + ".       Daily Forecast - Day after Tomorrow: apparentTemperatureMax - " + data.daily.data[2].apparentTemperatureMax + ", apparentTemperatureMin - " + data.daily.data[2].apparentTemperatureMin + ", cloudCover - " + data.daily.data[2].cloudCover + ", dewPoint - " + data.daily.data[2].dewPoint + ", humidity - " + data.daily.data[2].humidity + ", icon - " + data.daily.data[2].icon + ", moonPhase - " + data.daily.data[2].moonPhase + ", ozone - " + data.daily.data[2].ozone + ", precipIntensity - " + data.daily.data[2].precipIntensity + ", precipProbability - " + data.daily.data[2].precipProbability + ", pressure - " + data.daily.data[2].pressure + ", summary - " + data.daily.data[2].summary + ", temperatureMax - " + data.daily.data[2].temperatureMax + ", temperatureMin - " + data.daily.data[2].temperatureMin + ", visibility - " + data.daily.data[2].visibility + ", windBearing - " + data.daily.data[2].windBearing + ", windSpeed - " + data.daily.data[2].windSpeed;
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});