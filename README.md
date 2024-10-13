# Weather Checker App

This is a responsive Weather Checker App that allows users to view the current weather and a 3-day forecast for any city. The app leverages the [WeatherAPI](https://www.weatherapi.com/) to provide real-time weather data, including temperature, weather conditions, humidity, wind speed, and more.

## Features

- **Search Weather by City**: Users can search for any city worldwide and get current weather data instantly.
- **Current Location Detection**: The app automatically detects the user's location using the browser's Geolocation API and displays the weather for their current location.
- **3-Day Weather Forecast**: Users can view a 3-day weather forecast for the searched city or current location.
- **Real-Time Weather Data**: The app provides up-to-date information, including temperature (in Celsius), weather conditions, humidity, wind speed, precipitation, and more.
- **Dynamic Backgrounds**: Background colors change dynamically based on the current weather conditions (e.g., sunny, rainy, cloudy, etc.).
- **Loading Spinner**: A visually appealing loading spinner is shown while fetching data.
- **Responsive Design**: Fully responsive layout optimized for both desktop and mobile devices.
- **Error Handling**: Displays informative error messages in case of network errors or invalid city names.

## Development Technologies

The app is built using the following technologies:

- **React.js**: Frontend JavaScript library for building dynamic user interfaces.
- **Vite**: Next-generation front-end tool for fast development.
- **Tailwind CSS**: Utility-first CSS framework for responsive and modern design.
- **WeatherAPI**: External weather API used to fetch real-time weather data and 3-day forecasts.
- **Geolocation API**: Used to fetch the user's current location for weather display.
