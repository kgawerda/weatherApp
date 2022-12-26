function cordsUrl(cityName, units) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&APPID=980ff00baeb3dbfcf0e40c10cc3ebfba`;
}

async function getForecast(url) {
  const response = await fetch(url);
  const forecastData = await response.json();
  console.log(forecastData);
  return forecastData;
}

export { getForecast, cordsUrl };
