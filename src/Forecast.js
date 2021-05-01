import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDays from "./ForecastDays";

export default function Forecast(props) {
  let [show, setShow] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setShow(false);
  }, [props.coordinates]);

  function getForecast(response) {
    setForecast(response.data.daily);
    setShow(true);
  }
  function showEverything() {
    let apiKey = "bbc514bdb7c36a278a6660e973fff2d4";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={current,minutely,alerts}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getForecast);
  }

  if (show) {
    return (
      <div className="forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDays data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    showEverything();
    return null;
  }
}
