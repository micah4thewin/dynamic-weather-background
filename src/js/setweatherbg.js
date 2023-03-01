// Set the weather background based on the user's location
export const setWeatherBackground = async (weatherApiUrl, unsplashApiUrl, defaultBackgrounds) => {
  // Set the background image to a random image from the defaultBackgrounds array
  const randomIndex = Math.floor(Math.random() * defaultBackgrounds.length);
  const imageUrl = defaultBackgrounds[randomIndex];
  const backgroundElement = document.querySelector('.weather-background');
  backgroundElement.style.backgroundImage = `url(${imageUrl})`;
  try {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();
    const {
      condition
    } = data.current;

    // Get the appropriate search query for the Unsplash API based on the weather condition
    const hour = new Date().getHours();
    let searchQuery = "HD ";
    switch (condition.code) {
      case 1000: // Sunny
        searchQuery = "HD sunny";
        break;
      case 1003: // Partly cloudy
      searchQuery = "HD Partly cloudy";
      break;
      case 1006: // Cloudy
      searchQuery = "HD ";
      break;
      case 1009: // Overcast
        if (hour >= 6 && hour < 18) {
          searchQuery = "HD cloudy-day";
        } else {
          searchQuery = "HD cloudy-night";
        }
        break;
        case 1063: // Patchy rain possible
        searchQuery = "HD Patchy rain";
        break;
        case 1183: // Patchy light rain
        searchQuery = "HD Patchy light rain";
        break;
        case 1186: // Light rain
        searchQuery = "HD Light rain";
        break;
        case 1189: // Moderate rain at times
        searchQuery = "HD Moderate rain";
        break;
        case 1192: // Heavy rain at times
        searchQuery = "HD Heavy rain";
        break;
        case 1195: // Heavy rain
        searchQuery = "HD Heavy rain";
        break;
        case 1240: // Light rain shower
        searchQuery = "HD Light rain shower";
        break;
      case 1243: // Moderate or heavy rain shower
        if (hour >= 6 && hour < 18) {
          searchQuery = "HD rainy-day";
        } else {
          searchQuery = "HD rainy-night";
        }
        break;
        case 1066: // Patchy snow possible
        searchQuery = "HD Patchy snow";
        break;
        case 1210: // Light snow
        searchQuery = "HD Light snow";
        break;
        case 1213: // Patchy moderate snow
        searchQuery = "HD moderate snow";
        break;
        case 1216: // Moderate snow
        searchQuery = "HD moderate snow";
        break;
        case 1219: // Heavy snow
        searchQuery = "HD heavy snow";
        break;
        case 1222: // Blowing snow
        searchQuery = "HD blowing snow";
        break;
      case 1225: // Blizzard
        if (hour >= 6 && hour < 18) {
          searchQuery = "HD snowy-day";
        } else {
          searchQuery = "HD snowy-night";
        }
        break;
        case 1072: // Patchy sleat possible
        searchQuery = "HD patchy sleat";
        break;
        case 1237: // Ice pellets
        searchQuery = "HD ice";
        break;
        case 1255: // Light sleet
        searchQuery = "HD Light sleet";
        break;
        case 1258: // Moderate or heavy sleet
        if (hour >= 6 && hour < 18) {
        searchQuery = "HD heavy sleet during the day";
        } else {
        searchQuery = "HD heavy sleet during the night";
}
        break;
        case 1087: // Thundery outbreaks possible
        searchQuery = "HD Thunder";
        break;
        case 1273: // Patchy freezing drizzle possible
        searchQuery = "HD freezing drizzle";
        break;
        case 1276: // Freezing drizzle
        searchQuery = "HD Freezing drizzle";
        break;
        case 1279: // Heavy freezing drizzle
        searchQuery = "HD Heavy freezing drizzle";
        break;
        case 1282: // Patchy light snow
        searchQuery = "HD Patchy light snow";
        break;
        case 1285: // Light snow showers
        searchQuery = "HD Light snow showers";
        break;
        case 1288: // Patchy moderate snow
        searchQuery = "HD Patchy moderate snow";
        break;
        case 1291: // Moderate snow showers
        searchQuery = "HD Moderate snow showers";
        break;
        case 1294: // Heavy snow showrs
        searchQuery = "HD Heavy snow showers";
        break;
        case 1297: // Light showers of ice pellets
        searchQuery = "HD Light showers of ice pellets";
        break;
        case 1300: // Moderate or heavy showers of ice pellets
        searchQuery = "HD Moderate or heavy showers of ice pellets";
        break;
        case 1303: // Light sleet showers
        searchQuery = "HD Light sleet showers";
        break;
        case 1306: // Moderate or heavy sleet showers
        searchQuery = "HD Moderate or heavy sleet showers";
        break;
        case 1309: // Patchy light rain with thunder
        searchQuery = "HD Patchy light rain with thunder";
        break;
        case 1312: // Moderate or heavy rain with thunder
        searchQuery = "HD Moderate or heavy rain with thunder";
        break;
        case 1315: // Patchy light snow with thunder
        searchQuery = "HD Patchy light snow with thunder";
        break;
      case 1318: // Moderate or heavy snow with thunder
        if (hour >= 6 && hour < 18) {
          searchQuery = "HD stormy-day";
        } else {
          searchQuery = "HD stormy-night";
        }
        break;
      default:
        searchQuery = "HD weather";
    }

    // Add season to search query
    const currentMonth = new Date().getMonth() + 1;
    if (currentMonth >= 3 && currentMonth <= 5) { // Spring
      searchQuery += " spring";
    } else if (currentMonth >= 6 && currentMonth <= 8) { // Summer
      searchQuery += " summer";
    } else if (currentMonth >= 9 && currentMonth <= 11) { // Autumn
      searchQuery += " autumn";
    } else { // Winter
      searchQuery += " winter";
    }


    // Get a random background image from Unsplash based on the search query
    const response2 = await fetch(`${unsplashApiUrl}&query=${searchQuery}`);
    const data2 = await response2.json();
    let imageUrl = data2.urls.full;


    // Set the background image in the HTML
    const backgroundElement = document.querySelector(".weather-background");
    setTimeout(() => {
      backgroundElement.style.backgroundImage = `url(${imageUrl})`;
    }, 2000);

  } catch (error) {

    backgroundElement.style.backgroundImage = `url(${imageUrl})`;
  }
};
