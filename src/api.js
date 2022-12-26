function getUrl(cityName) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=980ff00baeb3dbfcf0e40c10cc3ebfba`;
}

async function getForecast(url) {
  const response = await fetch(url);
  const forecastData = await response.json();
  return forecastData;
}

function getDataFromJson(json) {
  //in kelvin
  const data = {
    name: json.name,
    temp: json.main.temp,
    feels_like: json.main.feels_like,
    humidity: json.main.humidity,
    weather: json.weather[0].description,
    wind: json.wind.speed, //m/s
  };
  return data;
}

export { getForecast, getUrl, getDataFromJson };
