// Set the weather background based on the user's location
export const setWeatherBackground = async (weatherApiUrl, unsplashApiUrl) => {
  try {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();
    const {
      condition
    } = data.current;

    // Get the appropriate search query for the Unsplash API based on the weather condition
    let searchQuery = "";
    switch (condition.code) {
      case 1000: // Sunny
        searchQuery = "sunny";
        break;
      case 1003: // Partly cloudy
      case 1006: // Cloudy
      case 1009: // Overcast
        searchQuery = "cloudy";
        break;
      case 1063: // Patchy rain possible
      case 1183: // Patchy light rain
      case 1186: // Light rain
      case 1189: // Moderate rain at times
      case 1192: // Heavy rain at times
      case 1195: // Heavy rain
      case 1240: // Light rain shower
      case 1243: // Moderate or heavy rain shower
        searchQuery = "rainy";
        break;
      case 1066: // Patchy snow possible
      case 1210: // Light snow
      case 1213: // Patchy moderate snow
      case 1216: // Moderate snow
      case 1219: // Heavy snow
      case 1222: // Blowing snow
      case 1225: // Blizzard
        searchQuery = "snowy";
        break;
      case 1072: // Patchy sleat possible
      case 1237: // Ice pellets
      case 1255: // Light sleet
      case 1258: // Moderate or heavy sleet
        searchQuery = "icy";
        break;
      case 1087: // Thundery outbreaks possible
      case 1273: // Patchy freezing drizzle possible
      case 1276: // Freezing drizzle
      case 1279: // Heavy freezing drizzle
      case 1282: // Patchy light snow
      case 1285: // Light snow showers
      case 1288: // Patchy moderate snow
      case 1291: // Moderate snow showers
      case 1294: // Heavy snow showrs
      case 1297: // Light showers of ice pellets
      case 1300: // Moderate or heavy showers of ice pellets
      case 1303: // Light sleet showers
      case 1306: // Moderate or heavy sleet showers
      case 1309: // Patchy light rain with thunder
      case 1312: // Moderate or heavy rain with thunder
      case 1315: // Patchy light snow with thunder
      case 1318: // Moderate or heavy snow with thunder
        searchQuery = "stormy";
        break;
      default:
        searchQuery = "weather";
    }

    // Get a random background image from Unsplash based on the search query
    const response2 = await fetch(`${unsplashApiUrl}&query=${searchQuery}`);
    const data2 = await response2.json();
    const imageUrl = data2.urls.full;

    // Set the background image in the HTML
    const backgroundElement = document.querySelector(".weather-background");
    backgroundElement.style.backgroundImage = `url(${imageUrl})`;
  } catch (error) {
    console.error(error);
  }
};
