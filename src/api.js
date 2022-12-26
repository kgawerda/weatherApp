function getUrl(cityName) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=980ff00baeb3dbfcf0e40c10cc3ebfba`;
}

async function getForecast(url) {
  const response = await fetch(url);
  const forecastData = await response.json();
  //console.log(forecastData);
  return forecastData;
}

async function getName(data) {
  return data.name;
}

export { getForecast, getUrl, getName };
