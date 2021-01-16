  
import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    this.intervalId = null;
  }
  getTimeString() {
    const currentTime = this.state.time;
//     const pad = (x) => x.toString().padStart(2, "0");
//     const [hrs, min, sec] = [
//       currentTime.getHours(),
//       currentTime.getMinutes(),
//       currentTime.getSeconds(),
//     ];
//     const pm = hrs >= 12 ? " PM" : " AM";
//     const hr = hrs > 12 ? hrs - 12 : hrs;
    let string = new Date().toLocaleTimeString();
//     `${pad(hr)}:${pad(min)}:${pad(sec)}${pm}`;
    return string;
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1 * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.getTimeString()}</h3>
      </div>
    );
  }
}

export default App;
