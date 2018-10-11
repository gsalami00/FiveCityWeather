import React, { Component } from "react";

class Forecast extends Component {
  constructor(props) {
    super();
    this.state = {
      tableClamp: "table-clamp",
      more: "btn-see-more-show",
      less: "btn-see-less-hide"
    };
    this.hideRows = this.hideRows.bind(this);
    this.showRows = this.showRows.bind(this);
  }
  hideRows() {
    this.setState({
      tableClamp: "table-clamp",
      more: "btn-see-more-show",
      less: "btn-see-less-hide"
    });
  }
  showRows() {
    this.setState({
      tableClamp: "no-clamp",
      more: "btn-see-less-hide",
      less: "btn-see-more-show"
    });
  }
  render() {
    return (
      <React.Fragment>
        <table id="forecast-table">
          <tbody className={this.state.tableClamp}>
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

            {this.props.cityForecast[0].map((temp, idx) => {
              return (
                <React.Fragment key={idx}>
                  <tr>
                    <td className="table-rows">{this.props.getDay(temp.dt)}</td>

                    <td className="table-rows">
                      {this.props.getTime(temp.dt)}
                    </td>

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
        <button className={this.state.more} onClick={this.showRows}>
          See More &#x2193;
        </button>
        <button className={this.state.less} onClick={this.hideRows}>
          See Less &#x2191;
        </button>
      </React.Fragment>
    );
  }
}

export default Forecast;
