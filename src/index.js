import {  getWeatherInfo } from '/src/js/getweatherinfo.js';
import {  setWeatherBackground } from '/src/js/setweatherbg.js';
import {  unsplashAccessKey, weatherApiKey } from '/src/js/env.js';
import '/src/css/style.css';
import bg1 from './images/bg1.webp';
import bg2 from './images/bg2.webp';
import bg3 from './images/bg3.webp';
import bg4 from './images/bg4.webp';
import bg5 from './images/bg5.webp';
import bg6 from './images/bg6.webp';
import bg7 from './images/bg7.webp';
import bg8 from './images/bg8.webp';
import bg9 from './images/bg9.webp';

// Default configuration options
const defaultConfig = {
  weatherApiUrl: `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=auto&units=imperial`,
  unsplashApiUrl: `https://api.unsplash.com/photos/random/?client_id=${unsplashAccessKey}&query=weather`,
  defaultBackgrounds: [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9],
  opacity: 0.5,
  weatherContainerId: "weather-container",
  weatherBackgroundClass: "weather-background",
  overlayClass: "overlay"
};

export const init = (config) => {
  // Merge the provided configuration options with the defaults
  const mergedConfig = {
    ...defaultConfig,
    ...config
  };

  // Set the API URLs with the provided API key
  const weatherApiUrl = mergedConfig.weatherApiUrl;
  const unsplashApiUrl = mergedConfig.unsplashApiUrl;

  // Create the weather background container
  const weatherContainer = document.getElementById(mergedConfig.weatherContainerId);
  const weatherBackground = document.createElement('div');
  weatherBackground.classList.add(mergedConfig.weatherBackgroundClass);
  weatherContainer.appendChild(weatherBackground);

  // Add the overlay element with the provided opacity
  const overlay = document.createElement('div');
  overlay.classList.add(mergedConfig.overlayClass);
  overlay.style.opacity = mergedConfig.opacity;
  weatherBackground.appendChild(overlay);

  // Call the functions to get the weather information and set the background
  getWeatherInfo(weatherApiUrl)
    .catch(() => {
      // Set the background image to a random image from the defaultBackgrounds array
      const randomIndex = Math.floor(Math.random() * mergedConfig.defaultBackgrounds.length);
      const imageUrl = mergedConfig.defaultBackgrounds[randomIndex];
      const backgroundElement = document.querySelector(`.${mergedConfig.weatherBackgroundClass}`);
      backgroundElement.style.backgroundImage = `url(${imageUrl})`;
    });

  setWeatherBackground(weatherApiUrl, unsplashApiUrl, mergedConfig.defaultBackgrounds)
    .catch(() => {
      // Set the background image to a random image from the defaultBackgrounds array
      const randomIndex = Math.floor(Math.random() * mergedConfig.defaultBackgrounds.length);
      const imageUrl = mergedConfig.defaultBackgrounds[randomIndex];
      const backgroundElement = document.querySelector(`.${mergedConfig.weatherBackgroundClass}`);
      backgroundElement.style.backgroundImage = `url(${imageUrl})`;
    });
};

init(defaultConfig);
