import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <div id="navbar">
        <div id="top-bar">
          <div id="logo">
            <img
              src="logo.png"
              width="100"
              height="100"
              alt="Weather Checker"
            />
            <div id="title">Weather Checker</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
