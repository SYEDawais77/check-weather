export default function About() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-300">
        About This Application
      </h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <p className="text-xl mb-4">
          Welcome to the Weather Checker App! This application is designed to
          provide you with up-to-date weather information for any city across
          the globe. Powered by the{" "}
          <a
            href="https://www.weatherapi.com/"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WeatherAPI.com
          </a>
          , the app allows users to check real-time weather conditions based on
          their current location or by searching for any city.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            Real-time weather updates based on city name or user&#39;s location.
          </li>
          <li>
            Beautiful, responsive design with dynamically changing backgrounds
            based on weather conditions (e.g., Sunny, Rainy, Mist).
          </li>
          <li>
            Shows detailed weather data, including temperature, humidity, wind
            speed, and heat index.
          </li>
          <li>
            Loading spinner for smooth user experience during data fetches.
          </li>
          <li>Error handling for invalid locations or connection issues.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="text-lg mb-4">
          The app uses the user&#39;s geolocation to automatically detect the
          current location&#39;s weather or allows you to manually enter a city
          name. Once you submit the city, the app fetches the latest weather
          data and displays it in a beautifully designed card with relevant
          weather details and a condition-based background for enhanced visuals.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
        <p className="text-lg mb-4">
          This app is built using modern web technologies:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <strong>React.js:</strong> For building the interactive UI
            components.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> For styling the app and creating a
            responsive layout.
          </li>
          <li>
            <strong>WeatherAPI.com:</strong> To fetch real-time weather data.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Future Enhancements</h2>
        <p className="text-lg mb-4">
          In future versions, we plan to introduce additional features such as:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Hourly and weekly weather forecasts.</li>
          <li>Support for multiple languages and units of measurement.</li>
          <li>
            Additional weather details like UV index, sunrise/sunset times, and
            more.
          </li>
        </ul>
      </div>
    </div>
  );
}
