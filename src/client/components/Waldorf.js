import React, { Component } from "react";
import { connect } from "react-redux";
import { gettingFiveCities, gettingWaldorf } from "../store/thunks";
import Forecast from "./Forecast";

class Waldorf extends Component {
  constructor(props) {
    super(props);
    this.getTime = this.getTime.bind(this);
    this.getDay = this.getDay.bind(this);
  }
  componentDidMount() {
    // In case user saves this page and doesn't come from the home page,
    // cities' data will still be fetched
    this.props.fetchFiveCities();
    this.props.fetchWaldorf();
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
  render() {
    return (
      <React.Fragment>
        {this.props.cities.length ? (
          <React.Fragment>
            <div className="city-title">
              {this.props.cities[0].list[4].name}
            </div>
            <div className="content-container">
              <div className="content-container-left">
                <div className="temp-container">
                  <div className="card-title">Current Temperature</div>
                  <div className="card-temp">
                    {Math.trunc(this.props.cities[0].list[4].main.temp)}
                    &deg;
                    <span className="big-f">F</span>
                  </div>
                  <div className="card-low-high">
                    <div className="low-high-title">Low</div>

                    <span className="small-deg">
                      {Math.trunc(this.props.cities[0].list[4].main.temp_min)}
                      &deg;
                    </span>
                    <span className="small-f">F</span>
                  </div>
                  <div className="card-low-high">
                    <div className="low-high-title">High</div>

                    <span className="small-deg">
                      {Math.trunc(this.props.cities[0].list[4].main.temp_max)}
                      &deg;
                    </span>
                    <span className="small-f">F</span>
                  </div>
                </div>

                <div className="content-details">
                  <table>
                    <tbody>
                      <tr className="row">
                        <td className="field">Today:</td>
                        <td className="description">
                          {this.props.cities[0].list[4].weather[0].description}
                        </td>
                      </tr>

                      <tr className="row">
                        <td className="field">Humidity:</td>
                        <td className="description">
                          {this.props.cities[0].list[4].main.humidity}
                        </td>
                      </tr>

                      <tr className="row">
                        <td className="field">Wind Speed:</td>
                        <td className="description">
                          {this.props.cities[0].list[4].wind.speed} mph
                        </td>
                      </tr>

                      <tr className="row">
                        <td className="field">Sunrise:</td>
                        <td className="description">
                          {this.getTime(
                            this.props.cities[0].list[4].sys.sunrise
                          )}
                        </td>
                      </tr>

                      <tr className="row">
                        <td className="field">Sunset:</td>
                        <td className="description">
                          {this.getTime(
                            this.props.cities[0].list[4].sys.sunset
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="content-container-right">
                <Forecast
                  city={this.props.waldorf}
                  getTime={this.getTime}
                  getDay={this.getDay}
                />
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    waldorf: state.dallas
  };
};

const mapDispatchToProps = dispatch => ({
  fetchFiveCities: () => gettingFiveCities(dispatch),
  fetchWaldorf: () => gettingWaldorf(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Waldorf);
