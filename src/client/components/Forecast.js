import React from "react";

const Forecast = props => {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <td className="table-title" colSpan="4">
              5-Day/3-Hour Forecast
            </td>
          </tr>
          <tr>
            <td className="table-day">Day</td>
            <td className="table-time">Time</td>
            <td className="table-temp">Temperature</td>
            <td className="table-description">Description</td>
          </tr>

          {props.cityForecast[0].map((temp, idx) => {
            return (
              <React.Fragment key={idx}>
                <tr>
                  <td className="table-rows">{props.getDay(temp.dt)}</td>

                  <td className="table-rows">{props.getTime(temp.dt)}</td>

                  <td className="table-rows center">
                    {Math.trunc(temp.main.temp)}
                    &deg; F
                  </td>

                  <td className="table-rows center">
                    {temp.weather[0].description}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Forecast;
