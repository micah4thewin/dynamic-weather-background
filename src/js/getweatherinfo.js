// Get the weather information for the user's location
export const getWeatherInfo = async (weatherApiUrl) => {
  try {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();

    const currentWeather = data.current;
    const temp_f = currentWeather.temp_f;
    const condition = currentWeather.condition.text.toLowerCase();

    // Set the weather information in the HTML
    const weatherInfo = document.getElementById("weather-info");
    if (weatherInfo) {
      weatherInfo.innerHTML = `It's ${temp_f}°F and ${condition} outside.`;
      console.log("Weather info thing fired", `${weatherInfo.innerText}`);
    }

    return { temp_f, condition };
  } catch (error) {
    console.error(error);
  }
};
