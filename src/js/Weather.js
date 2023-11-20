
function getWeather() {
  // API endpoint URL
    const latitude = 20.6870673;
    const longitude = -103.3504928;
    console.log(latitude, longitude);

    const API_KEY = '1c3145762413bddb20a71bd4fb8012fb';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    // Make the API request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the required weather information from the API response
            const temperature = data.main.temp - 273.15; 
            const weatherIcon = data.weather[0].icon;
            const weatherDescription = data.weather[0].description;

            // Render the weather information on the page
            const weatherContainer = document.getElementById('weather');
            weatherContainer.innerHTML = `
                    <div style="display: flex; align-items: center;">
                        <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">
                        <p style="margin-right: 10px;">${temperature.toFixed(1)}°C</p>
                        <p style="padding-right: 5px">${weatherDescription}</p>
                </div>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
getWeather();
