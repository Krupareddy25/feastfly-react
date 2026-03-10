import { useState } from "react";
import "./location.css";
export default function LocationBar() {
  const [location, setLocation] = useState("Detecting location...");
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=ea9c608b62b44c39a1d9fc8e09fedd4c`
          );
          const data = await res.json();
          const components = data.results[0].components;
          const city = components.city || components.town || components.village || "";
          const state = components.state || "";
          const country = components.country || "";
          setLocation([city, state, country].filter(Boolean).join(", "));
        } catch (err) {
          console.error(err);
          alert("Failed to fetch location");
        }
      },
      () => {
        alert("Location permission denied");
      }
    );
  };
  return (
    <section className="location-bar">
      <div className="location-container">
        <div className="location-pill">
          <div className="location-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin h-5 w-5 text-primary"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>{" "}
          <div className="location-text">
            <span>Delivering to</span>
            <strong>{location}</strong>
          </div>
          <span className="dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down h-4 w-4 mr-3 flex-shrink-0"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </span>
        </div>
        <button className="locate-btn" onClick={handleLocateMe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-navigation h-4 w-4 mr-2"
          >
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          Locate Me
        </button>
      </div>
    </section>
  );
}
