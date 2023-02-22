import {  getWeatherInfo } from '/src/js/getweatherinfo.js';
import {  setWeatherBackground } from '/src/js/setweatherbg.js';
import {  unsplashAccessKey, weatherApiKey } from '/src/js/env.js';
import '/src/css/style.css';

// Unsplash API key and URL
const unsplashApiUrl = `https://api.unsplash.com/photos/random/?client_id=${unsplashAccessKey}&query=weather`;
// Weather API key and URL
const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=auto&units=imperial`;
// Call the functions to get the weather information and set the background
getWeatherInfo(weatherApiUrl);
setWeatherBackground(weatherApiUrl, unsplashApiUrl);
