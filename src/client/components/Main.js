import React, { Component } from "react";
import { connect } from "react-redux";
import { gettingFiveCities } from "../store/thunks";
import CardTemperature from "./CardTemperature";

class Main extends Component {
  componentDidMount() {
    this.props.fetchFiveCities();
  }
  render() {
    return (
      <React.Fragment>
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
    cities: state.cities
  };
};

const mapDispatchToProps = dispatch => ({
  fetchFiveCities: () => gettingFiveCities(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
