// Get the weather information for the user's location
export const getWeatherInfo = async (weatherApiUrl) => {
  try {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();
    const {
      temp_f,
      condition
    } = data.current;

    // Set the weather information in the HTML
    const weatherInfo = document.getElementById("weather-info");
    if (weatherInfo) {
      weatherInfo.innerHTML = `It's ${temp_f}°F and ${condition.text.toLowerCase()} outside.`;
    }

    return {
      temp_f,
      condition
    };
  } catch (error) {
    console.error(error);
  }
};
