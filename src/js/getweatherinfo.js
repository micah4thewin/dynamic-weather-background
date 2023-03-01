// Get the weather information for the user's location
// Get the weather information for the user's location from a weather API
export const getWeatherInfo = async (weatherApiUrl) => {
  try {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();

    const currentWeather = data.current;
    const temp_f = currentWeather.temp_f;
    const condition = currentWeather.condition.text.toLowerCase();
    const location = data.location.name;

    // Set the weather information in the HTML
    const weatherInfo = document.getElementById("weather-info");
    if (weatherInfo) {
      weatherInfo.innerHTML = `I coded a weather-responsive background using unsplash.com and weatherapi.com.`;
      console.log("Weather information has been set:", `${weatherInfo.innerText}`);
    }

    return { temp_f, condition };
  } catch (error) {
    weatherInfo.innerHTML = `Thank you for visiting my website!`;
    console.error(error);
  }
};
