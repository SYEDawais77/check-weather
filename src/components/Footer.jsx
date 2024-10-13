export default function Footer() {
  return (
    <div className="flex justify-center gap-4 bg-gray-800 text-white py-2 mt-5 text-center">
      <p className="text-lg font-light">
        Powered by{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Weather API"
          className="text-blue-400 hover:text-blue-600 underline transition-colors duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          WeatherAPI.com
        </a>
      </p>
      <p>
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/syed-awais-shah-784a8a277/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          className="text-blue-400 hover:text-blue-600 underline transition-colors duration-300"
        >
          Syed Awais Shah
        </a>
      </p>
    </div>
  );
}
