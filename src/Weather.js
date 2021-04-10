import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState(null);
    const [realFeel, setRealFeel] = useState(null);
    const [wind, setWind] = useState(null);
    const [description, setDescription] = useState(null);
    const [icon, setIcon] = useState(null);

    function showWeather() {
    if (temperature) {
      return (
        <div>
          <ul className="weatherList">
            <li className="city">{city}</li>
            <li className="temp">Temperature: {Math.round(temperature)} °C</li>
            <li className="reality">Feels like: {Math.round(realFeel)} °C</li>
            <li className="whoosh"> Blowing {Math.round(wind)} km/h </li>
            <li className="justLies">{description}</li>
            <li className="icon">
              {" "}
              <img src={icon} alt={description} />{" "}
            </li>
          </ul>
          
        </div>
      );
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getResponses(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setRealFeel(response.data.main.feels_like);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "bbc514bdb7c36a278a6660e973fff2d4";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getResponses);
  }

  return (
    <div>
      <div>
        <h2 className="title"> Weather App </h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="search"
            onChange={updateCity}
            placeholder="What's the weather like in..."
            className="searchBar"
          />
          <input type="submit" value="Search" className="searchButton" />
        </form>
      </div>
      <div> {showWeather()} </div>
    </div>
  );
     

}