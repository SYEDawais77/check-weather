import { useState, useEffect } from "react";

function useGeoLocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" }
  });
  const [error, setError] = useState(null);

  // Success callback for getting position
  const onSuccess = (position) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    });
  };

  // Error callback for any failure to get location
  const onError = (error) => {
    setLocation({
      loaded: true,
      coordinates: { lat: "", lng: "" }
    });
    setError(error.message);
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { location, error };
}

export default useGeoLocation;
