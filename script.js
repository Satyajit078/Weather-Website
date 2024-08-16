// Your OpenWeatherMap API key
const apiKey = 'c7f30816cd7983242eac04194bf01850';

document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Could not retrieve weather data');
        });
}

function displayWeather(data) {
    const weatherData = document.getElementById('weatherData');
    if (data.cod === 200) {
        weatherData.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } else {
        weatherData.innerHTML = `<p>${data.message}</p>`;
    }
}
