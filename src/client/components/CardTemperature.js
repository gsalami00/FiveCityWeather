import React from "react";
import { Link } from "react-router-dom";

const CardTemperature = props => {
  return (
    <React.Fragment>
      <div className="card-container-main">
        <div className="card-container">
          <div className="card-title">{props.city}</div>
          <div className="card-temp">
            {Math.trunc(props.temp)}
            &deg;
            <span className="big-f">F</span>
          </div>
          <div className="card-low-high">
            <div className="low-high-title">Low</div>

            <span className="small-deg">
              {Math.trunc(props.lowTemp)}
              &deg;
            </span>
            <span className="small-f">F</span>
          </div>
          <div className="card-low-high">
            <div className="low-high-title">High</div>

            <span className="small-deg">
              {Math.trunc(props.highTemp)}
              &deg;
            </span>
            <span className="small-f">F</span>
          </div>
        </div>
        <div className="card-details-btn">
          <Link to={`/${props.id}`}> More Details >></Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardTemperature;
