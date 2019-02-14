import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Timer from "./Components/Timer";
import Card from "./Components/LoadingSabali";
import TestComponent from "./Components/TestComponent";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/timer" component={Timer} />
          <Route path="/loading" component={Card} />
          <Route exact path="/test" component={TestComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
