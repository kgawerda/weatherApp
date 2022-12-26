import { getForecast, getUrl, getDataFromJson } from "./api.js";

const test = getForecast(getUrl("london"));
test.then(function (response) {
  console.log(response);
  console.log(getDataFromJson(response));
});
