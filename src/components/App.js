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
    const currTime = this.state.time;
    const [hours, mins, secs] = [
      currTime.getHours(),
      currTime.getMinutes(),
      currTime.getSeconds(),
    ];

    const amOrPm = hours >= 12 ? "PM" : "AM";
    const twleveHourFormat = hours > 12 ? hours - 12 : hours;
    // const hourString = this.padNumberToTwoDigits(twleveHourFormat);
    const hourString = twleveHourFormat;
    const minuteString = this.padNumberToTwoDigits(mins);
    const secsString = this.padNumberToTwoDigits(secs);
    const timeString = `${hourString}:${minuteString}:${secsString} ${amOrPm}`;
    return timeString;
  }

  padNumberToTwoDigits(num) {
    return num >= 10 ? num : "0" + num.toString();
  }

  componentDidMount() {
      this.intervalId = setInterval(() => {
          this.setState({
              time: new Date()
          })
      },1*1000)
  }

  componentWillUnMount(){
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
