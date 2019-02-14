import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="Home">
        <Link to="/timer">Timer</Link>
        <br />
        <Link to="/loading">LoadingSabali</Link>
        <br />
        <Link to="/test">Test</Link>
      </div>
    );
  }
}

export default Home;
