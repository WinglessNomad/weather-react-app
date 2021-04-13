import React from "react";
import Icon from "./Icon";

export default function CurrentWeather(props) {
    return (
        <div>
          <div>
            <h1 className="city">{props.data.city}</h1>
          </div>
          <div>
            <Icon code={props.data.icon} />
            <p className="justLies">{props.data.description}</p>
          </div>
          
          <ul className="weatherList">
            <li className="temp">Temperature: {Math.round(props.data.temperature)} °C</li>
            <li className="reality">Feels like: {Math.round(props.data.realFeel)} °C</li>
            <li className="whoosh"> Wind speed: {Math.round(props.data.wind)} km/h </li>
          </ul>
          
        </div>
      );
}