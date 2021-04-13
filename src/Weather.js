import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

export default function Weather(props) {
    const [weather, setWeather] = useState({show: false});
    const [city, setCity] = useState(props.default);

    function getResponses(response) {
      setWeather({
        show: true,
        city: response.data.name,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        realFeel: response.data.main.feels_like,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon
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

    if(weather.show) {
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
         <div> <CurrentWeather data={weather} /> </div>
       </div>
     );
    } else {
        showWeather();
        return "Loading weather conditions...";
        }
}