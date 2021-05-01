import React from "react";
import Icon from "./Icon";
import "./Forecast.css";

export default function ForecastDays(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <Icon code={props.data.weather[0].icon} size={30} />
      <div className="temps">
        <span className="maxTemp">{maxTemp()}</span>{" "}
        <span className="minTemp">{minTemp()}</span>
      </div>
    </div>
  );
}
