# Dynamic Weather Background

A simple web app that shows the current weather and sets a weather-related background image using the OpenWeatherMap and Unsplash APIs.

## Installation

You can install dynamic-weather-background via npm by running the following command:

```
npm install micah4thewin/dynamic-weather-background
```

## Usage

### Adding to HTML

To use dynamic-weather-background in your HTML, add the following code:

```html
<!-- This is the main container for the dynamic weather background -->
<div class="container-fluid d-flex" id="weather-container">

  <!-- This row centers the content horizontally and aligns it vertically -->
  <div class="row align-items-center w-100 justify-content-center mx-auto">

    <!-- This column has a maximum width of 8 and is centered horizontally -->
    <div class="col-md-8 text-center p-5" id="weather-container-content">

      <!-- Your website's main headline -->
      <h1 class="display-1 fw-bolder text-white my-2">WELCOME TO MY WEBSITE!</h1>

      <!-- This element will display the weather information -->
      <p class="text-light fs-4 fw-bold" id="weather-info"></p>

    </div>
  </div>
</div>
```

### Usage in Node.js

To use dynamic-weather-background in your Node.js environment, import the module and call the init() function with your configuration options:
```
import { init } from 'dynamic-weather-background/src/index.js';

init({
  weatherApiKey: 'your_openweathermap_api_key',
  unsplashAccessKey: 'your_unsplash_access_key',
  opacity: 0.5,
  defaultBackgrounds: ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'],
  location: 'New York', // or 'latitude,longitude'
  weatherContainerId: 'weather-container',
  weatherBackgroundClass: 'weather-background',
  overlayClass: 'overlay'
});
```

### Configuration Options

The following configuration options are available:

    -weatherApiKey (required): Your OpenWeatherMap API key.
    -unsplashAccessKey (required): Your Unsplash access key.
    -opacity: The opacity of the overlay element (default: 0.5).
    -defaultBackgrounds: An array of URLs for default background images (default: ['bg1.jpg', 'bg2.jpg', 'bg3.jpg']).
    -location: The location to use for the weather data, either as a string (e.g. "New York") or as a comma-separated latitude and longitude (e.g. "40.7128,-74.0060"). If not provided, the user's current location will be used.
    -weatherApiUrl: The URL for the OpenWeatherMap API (default: https://api.openweathermap.org/data/2.5/weather).
    -unsplashApiUrl: The URL for the Unsplash API (default: https://api.unsplash.com/photos/random).
    -weatherContainerId: The ID of the HTML element to use for the weather container (default: "weather-container").
    -weatherBackgroundClass: The CSS class to use for the weather background element (default: "weather-background").
    -overlayClass: The CSS class to use for the overlay element (default: "overlay").
