import React, { Component } from "react";
import { connect } from "react-redux";
import { gettingFiveCities, gettingAnyCity } from "../store/thunks";
import InnerNavBar from "./InnerNavBar";
import CardTemperature from "./CardTemperature";

class Main extends Component {
  constructor() {
    super();
    this.pageChange = this.pageChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchFiveCities();
  }
  pageChange(id) {
    this.props.fetchAnyCity(id);
  }
  render() {
    return (
      <React.Fragment>
        <InnerNavBar pageChange={this.pageChange} />
        <div className="home-title">Current Weather</div>
        <div className="main-container">
          {this.props.cities.length
            ? this.props.cities[0].list.map((city, idx) => {
                return (
                  <CardTemperature
                    key={idx}
                    id={city.id}
                    city={city.name}
                    temp={city.main.temp}
                    lowTemp={city.main.temp_min}
                    highTemp={city.main.temp_max}
                  />
                );
              })
            : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    city: state.city,
    cityForecast: state.cityForecast
  };
};

const mapDispatchToProps = dispatch => ({
  fetchFiveCities: () => gettingFiveCities(dispatch),
  fetchAnyCity: id => dispatch(gettingAnyCity(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
