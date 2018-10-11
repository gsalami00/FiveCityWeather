import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { gettingFiveCities } from "../store/thunks";

class InnerNavBar extends Component {
  componentDidMount() {
    this.props.fetchFiveCities();
  }
  render() {
    return (
      <React.Fragment>
        <div id="inner-nav">
          <Link to="/" className="inner-nav-link">
            Home
          </Link>
          {this.props.cities.length
            ? this.props.cities[0].list.map((city, idx) => {
                return (
                  <Link
                    to={`/${city.id}`}
                    className="inner-nav-link"
                    key={idx}
                    onClick={() => this.props.pageChange(city.id)}
                  >
                    {city.name}
                  </Link>
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
)(InnerNavBar);
