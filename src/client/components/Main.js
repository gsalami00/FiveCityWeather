import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        {this.props.cities.length
          ? this.props.cities[0].list.map((city, idx) => {
              return (
                <CardTemperature
                  key={idx}
                  city={city.name}
                  temp={city.main.temp}
                  lowTemp={city.main.temp_min}
                  highTemp={city.main.temp_max}
                />
              );
            })
          : null}

        <Link to="/NewYork">New York</Link>
        <br />
        <Link to="/Dallas">Dallas</Link>
        <br />
        <Link to="/LosAngeles">Los Angeles</Link>
        <br />
        <Link to="/Boston">Boston</Link>
        <br />
        <Link to="/Waldorf">Waldorf</Link>
        <br />
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
