// Get the weather information for the user's location
export const getWeatherInfo = async (weatherApiUrl) => {
  try {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();
    const { temp_f, condition } = data.current;

    // Display the weather information in the HTML
    document.getElementById("weather-info").innerHTML = `${temp_f}°F and ${condition.text.toLowerCase()} weather.`;

  } catch (error) {
    console.error(error);
  }
};
