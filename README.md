#Dynamic Weather Background

A simple web app that shows the current weather and sets a weather-related background image using the OpenWeatherMap and Unsplash APIs.
Installation

## Usage

### Installation

You can install dynamic-weather-background via npm by running the following command:

```
npm install micah4thewin/dynamic-weather-background
```

### Adding to HTML

To use dynamic-weather-background in your HTML, add the following code:

```
<div id="weather-container"></div>
```

### Usage in Node.js

To use dynamic-weather-background in your Node.js environment, import the module and call the init() function with your configuration options:

```
const dwb = require('dynamic-weather-background');

dwb.init({
  weatherApiKey: 'your_openweathermap_api_key',
  unsplashAccessKey: 'your_unsplash_access_key',
  opacity: 0.5,
  defaultBackgrounds: ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'],
  weatherContainerId: 'weather-container',
  weatherBackgroundClass: 'weather-background',
  overlayClass: 'overlay'
});
```

### Configuration Options

The following configuration options are available:

- weatherApiKey (required): Your OpenWeatherMap API key.
- unsplashAccessKey (required): Your Unsplash access key.
- opacity: The opacity of the overlay element (default: 0.5).
- defaultBackgrounds: An array of URLs for default background images (default: ['bg1.jpg', 'bg2.jpg', 'bg3.jpg']).
- weatherApiUrl: The URL for the OpenWeatherMap API (default: https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=auto&units=imperial).
- unsplashApiUrl: The URL for the Unsplash API (default: https://api.unsplash.com/photos/random/?client_id=${unsplashAccessKey}&query=weather).
- weatherContainerId: The ID of the HTML element to use for the weather container (default: "weather-container").
- weatherBackgroundClass: The CSS class to use for the weather background element (default: "weather-background").
- overlayClass: The CSS class to use for the overlay element (default: "overlay").
