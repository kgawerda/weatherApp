import { getForecast, getUrl, getName } from "./api.js";

const test = getForecast(getUrl("london")).then(function (response) {
  let name = response.name + "123";
  console.log(name);
});
