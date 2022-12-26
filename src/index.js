import { getForecast, cordsUrl } from "./api.js";

let test = getForecast(cordsUrl("london"), "imperial");
console.log(test);
