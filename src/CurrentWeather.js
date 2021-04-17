import React from "react";
import Icon from "./Icon";
import Date from "./Date";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div>
      <div>
        <h1 className="city">{props.data.city}</h1>
      </div>
      <div>
        <Date date={props.data.date} />
      </div>
      <div className="icons">
        <p className="justLies">{props.data.description}</p>
        <Icon code={props.data.icon} />
      </div>
      <div className="temp">
        {Math.round(props.data.temperature)}{" "}
        <span className="celsius"> °C</span>
      </div>
      <div className="weatherList">
        <ul>
          <li className="reality">
            {" "}
            Feels like: {Math.round(props.data.realFeel)} °C{" "}
          </li>
          <li className="whoosh">
            {" "}
            Wind speed: {Math.round(props.data.wind)} km/h{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
