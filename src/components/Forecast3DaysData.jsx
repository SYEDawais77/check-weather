/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useGeoLocation from "../hooks/useGeoLocation";

const URL = "http://api.weatherapi.com/v1";
const API_KEY = "f812fb823c9647548c8153827240910";

export default function Forecast3DaysData({ locationOfUser }) {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { location } = useGeoLocation();

  // Construct location string
  const locationFor3DaysForecast =
    locationOfUser.length >= 3
      ? locationOfUser
      : `${location.coordinates.lat},${location.coordinates.lng}`;

  useEffect(() => {
    const fetchForecastData = async () => {
      if (locationFor3DaysForecast === ",") {
        return;
      }

      console.log("Fetching forecast for:", locationFor3DaysForecast); // Debugging log
      setLoading(true);
      setErrorMessage(""); // Clear previous error messages

      try {
        const response = await fetch(
          `${URL}/forecast.json?key=${API_KEY}&q=${locationFor3DaysForecast}&days=3`
        );

        if (!response.ok) {
          throw new Error(
            `Error fetching the forecast: ${response.statusText}`
          );
        }

        const data = await response.json();
        if (!data.forecast || !data.forecast.forecastday) {
          throw new Error("No forecast data found.");
        }

        setForecastData(data.forecast.forecastday);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecastData();
  }, [locationFor3DaysForecast]); // Depend on the locationFor3DaysForecast

  if (loading) {
    return <div className="text-center text-lg">Loading forecast...</div>;
  }

  if (errorMessage) {
    return (
      <div className="text-red-500 text-center text-lg">{errorMessage}</div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:gap-4 mt-4">
      {forecastData.map((day) => (
        <div
          key={day.date}
          className="bg-white rounded-lg shadow-md p-4 text-center flex flex-col justify-between items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
        >
          <h3 className="text-lg font-bold mb-2">
            {new Date(day.date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric"
            })}
          </h3>
          <img
            src={day.day.condition.icon}
            alt={day.day.condition.text}
            className="w-20 h-20 mb-2"
          />
          <p className="text-sm font-semibold">{day.day.condition.text}</p>
          <p className="text-sm">
            <strong>Max:</strong> {day.day.maxtemp_c}°C
          </p>
          <p className="text-sm">
            <strong>Min:</strong> {day.day.mintemp_c}°C
          </p>
          <p className="text-sm">
            <strong>Precipitation:</strong> {day.day.totalprecip_mm} mm
          </p>
        </div>
      ))}
    </div>
  );
}
