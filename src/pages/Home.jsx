import { useEffect, useState } from "react";
import useGeoLocation from "../hooks/useGeoLocation";
import LoadingSpinner from "../components/LoadingSpinner";
import Forecast3DaysData from "../components/Forecast3DaysData";

const URL = "http://api.weatherapi.com/v1";
const API_KEY = "f812fb823c9647548c8153827240910";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { location, error } = useGeoLocation();
  const currentLocation =
    location.coordinates.lat + "," + location.coordinates.lng;

  useEffect(() => {
    let cityWeatherToFetched = "";
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        if (city.length >= 3) {
          cityWeatherToFetched = city;
        } else {
          cityWeatherToFetched = currentLocation;
        }
        const response = await fetch(
          `${URL}/current.json?key=${API_KEY}&q=${cityWeatherToFetched}`,
          { signal }
        );

        if (!response.ok) {
          throw new Error(`No data found for the entered ${city}.`);
        }

        const data = await response.json();
        setWeatherData(data);
        setErrorMessage("");
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Abort Error", error);
        } else {
          setErrorMessage(error.message);
          setWeatherData(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();

    return () => controller.abort();
  }, [city, currentLocation]);

  const getWeatherBackground = (condition) => {
    if (condition?.includes("Sunny"))
      return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    if (condition?.includes("Rainy"))
      return "bg-gradient-to-r from-blue-400 to-blue-600";
    if (condition?.includes("Cloudy"))
      return "bg-gradient-to-r from-gray-400 to-gray-600";
    if (condition?.includes("Overcast"))
      return "bg-gradient-to-r from-gray-500 to-gray-700";
    if (condition?.includes("Mist"))
      return "bg-gradient-to-r from-gray-300 to-gray-500";
    return "bg-gradient-to-r from-indigo-500 to-purple-700";
  };

  if (error) {
    return <div>Error fetching location: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Enter city to check weather"
          className="w-full md:w-1/2 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/* Weather Cards and Forecast */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {errorMessage ? (
          <div className="rounded-lg shadow-lg p-6 text-center text-white bg-red-500">
            <h2 className="text-2xl font-bold mb-4">No Data Found</h2>
            <p className="text-xl">{errorMessage}</p>
          </div>
        ) : loading ? (
          <div className="rounded-lg shadow-lg p-6 text-center">
            <LoadingSpinner />
          </div>
        ) : weatherData ? (
          <div
            className={`rounded-lg shadow-lg p-6 text-center text-white transform hover:scale-105 transition-transform duration-300 ease-in-out ${getWeatherBackground(
              weatherData?.current?.condition?.text
            )}`}
          >
            <h2 className="text-3xl font-bold mb-4">
              {weatherData?.location?.name}
            </h2>
            <img
              className="w-24 h-24 mx-auto mb-4"
              src={weatherData?.current?.condition?.icon}
              alt="Weather Icon"
            />
            <p className="text-6xl font-bold mb-4">
              {weatherData?.current?.temp_c}°C
            </p>
            <p className="text-xl font-semibold mb-4">
              {weatherData?.current?.condition?.text}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-lg">
                  <strong>Humidity:</strong> {weatherData?.current?.humidity}%
                </p>
              </div>
              <div>
                <p className="text-lg">
                  <strong>Wind Speed:</strong> {weatherData?.current?.wind_kph}{" "}
                  kph
                </p>
              </div>
              <div>
                <p className="text-lg">
                  <strong>Feels Like:</strong>{" "}
                  {weatherData?.current?.feelslike_c}°C
                </p>
              </div>
              <div>
                <p className="text-lg">
                  <strong>Heat Index:</strong>{" "}
                  {weatherData?.current?.heatindex_c}°C
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {/* Forecast Data (side by side with weather card) */}
        <div className="rounded-lg shadow-lg p-6 text-center bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">3-Day Forecast</h2>
          <Forecast3DaysData
            locationOfUser={city.length >= 3 ? city : currentLocation}
          />
        </div>
      </div>
    </div>
  );
}
