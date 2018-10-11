import React, { Component } from "react";
import { connect } from "react-redux";
import { gettingAnyCity } from "../store/thunks";
import Forecast from "./Forecast";
import InnerNavBar from "./InnerNavBar";

class SingleCity extends Component {
  constructor(props) {
    super(props);
    this.getTime = this.getTime.bind(this);
    this.getDay = this.getDay.bind(this);
    this.pageChange = this.pageChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchAnyCity(this.props.match.params.id);
  }
  getTime(num) {
    const date = new Date(num * 1000);
    let hours = date.getHours();
    let amOrPm = "AM";
    if (hours > 11 && hours < 24) {
      amOrPm = "PM";
    }
    if (hours > 12) {
      hours = hours % 12;
    }
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours + ":" + minutes.substr(-2) + " " + amOrPm;
    return formattedTime;
  }
  getDay(num) {
    const day = new Date(num * 1000);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const dayOfWeek = days[day.getDay()];
    return dayOfWeek;
  }
  pageChange(id) {
    this.props.fetchAnyCity(id);
  }
  render() {
    return (
      <React.Fragment>
        <InnerNavBar pageChange={this.pageChange} />
        {this.props.city.length ? (
          <React.Fragment>
            <div className="city-title">
              {this.props.city[0].name ? this.props.city[0].name : null}
            </div>
            <div className="content-container">
              <div className="content-container-left">
                <div className="temp-container">
                  <div className="card-title">Current Temperature</div>
                  <div className="card-temp">
                    {Math.trunc(this.props.city[0].main.temp)}
                    &deg;
                    <span className="big-f">F</span>
                  </div>
                  <div className="card-low-high">
                    <div className="low-high-title">Low</div>

                    <span className="small-deg">
                      {Math.trunc(this.props.city[0].main.temp_min)}
                      &deg;
                    </span>
                    <span className="small-f">F</span>
                  </div>
                  <div className="card-low-high">
                    <div className="low-high-title">High</div>

                    <span className="small-deg">
                      {Math.trunc(this.props.city[0].main.temp_max)}
                      &deg;
                    </span>
                    <span className="small-f">F</span>
                  </div>
                </div>

                <div className="content-details">
                  <table className="content-details-table">
                    <tbody>
                      <tr className="row">
                        <td className="field">Today:</td>
                        <td className="description">
                          {this.props.city[0].weather[0].description}
                        </td>
                      </tr>

                      <tr className="row">
                        <td className="field">Humidity:</td>
                        <td className="description">
                          {this.props.city[0].main.humidity}%
                        </td>
                      </tr>

                      <tr className="row">
                        <td className="field">Wind Speed:</td>
                        <td className="description">
                          {this.props.city[0].wind.speed} mph
                        </td>
                      </tr>

                      <tr className="row">
                        <td className="field">Sunrise:</td>
                        <td className="description">
                          {this.getTime(this.props.city[0].sys.sunrise)}
                        </td>
                      </tr>

                      <tr className="row">
                        <td className="field">Sunset:</td>
                        <td className="description">
                          {this.getTime(this.props.city[0].sys.sunset)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="content-container-right">
                {this.props.cityForecast.length ? (
                  <Forecast
                    cityForecast={this.props.cityForecast}
                    getTime={this.getTime}
                    getDay={this.getDay}
                  />
                ) : null}
              </div>
              <div className="clear" />
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state.city,
    cityForecast: state.cityForecast
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAnyCity: id => dispatch(gettingAnyCity(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCity);
