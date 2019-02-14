import React, { Component } from "react";

class Timer extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    time: 0
  };

  componentDidMount() {
    this.handleTimer(Date.now() / 1000 + 300);
  }

  handleTimer = expires => {
    let TimeInMs = expires * 1000 - Date.now();
    this.setState({ time: new Date(TimeInMs).toISOString().slice(14, -5) });
    const interval = setInterval(() => {
      if (TimeInMs < 0) {
        clearInterval(interval);
      }
      TimeInMs = expires * 1000 - Date.now();
      this.setState({ time: new Date(TimeInMs).toISOString().slice(14, -5) });
    }, TimeInMs % 1000);
  };

  render() {
    return <div id="Timer">{this.state.time}</div>;
  }
}

export default Timer;
