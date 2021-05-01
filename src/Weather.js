import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import "./Weather.scss";

export default function Weather(props) {
  const [weather, setWeather] = useState({ show: false });
  const [city, setCity] = useState(props.default);

  function getResponses(response) {
    setWeather({
      show: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      realFeel: response.data.main.feels_like,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function showWeather() {
    let apiKey = "42e97aa1960c10d8826372a5ee85406c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getResponses);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    showWeather();
  }

  if (weather.show) {
    return (
      <div className="container">
        <div className="search_bar">
          <form onSubmit={handleSubmit} className="form">
            <input
              type="search"
              onChange={updateCity}
              placeholder="What's the weather like in..."
              className="searchBar"
              aria-label="search"
            />
            <button
              type="submit"
              className="searchButton"
              aria-label="submit search"
            >
              <FontAwesomeIcon icon={faSearchLocation} />
            </button>
          </form>
        </div>
        <div>
          {" "}
          <CurrentWeather data={weather} />{" "}
        </div>
        <div>
          <Forecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    showWeather();
    return "Loading weather conditions...";
  }
}
