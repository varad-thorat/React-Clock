import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmMessage, setAlarmMessage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAlarmChange = (event) => {
    setAlarmTime(event.target.value);
  };
  const handleSetAlarm = () => {
    const [timeString] = alarmTime.split(' ');
    const [hours, minutes] = timeString.split(':').map((part) => parseInt(part, 10));
    let alarmHours = hours;
    
    //here i declared the current time and the timer.js function
    const currentDateTime = new Date();
    const alarmDateTime = new Date(
      currentDateTime.getFullYear(),
      currentDateTime.getMonth(),
      currentDateTime.getDate(),
      alarmHours,
      minutes
    );
      // this is validation code to validate the correct input is entered
    if (isNaN(alarmDateTime)) {
      setAlarmMessage('Please select a valid time.');
    } else if (alarmDateTime < currentDateTime) {
      setAlarmMessage('Please select a future time.');
    } else {
      setAlarmMessage(`Alarm set for ${alarmDateTime.toLocaleTimeString()}`);// here date time is converted to string according to the device
      setTimeout(() => {
        alert('Wake up!');
      }, alarmDateTime - currentDateTime);// after the difference time is elapsed the alert will go off using the setTimeout
    }
  };
  const linkStyle = {
    textDecoration : "none",
    color: "blue",
    fontSize : "18px"

  }
  const buttonStyle = {
    width: "20%",
    height: "50px"
  }
  

  return (
    <div className="main">
      <h1>Alarm Clock</h1>
      <p>Current Time: {currentTime}</p>
      <div>
        <label htmlFor="alarmTime">Set Alarm:</label>
        <input
          type="time"
          id="alarmTime"
          value={alarmTime}
          onChange={handleAlarmChange}  //this is the function gettnig triggered
        />
        <button onClick={handleSetAlarm}>Set</button>
      </div>
      <p>{alarmMessage}</p>
      <div className="main-bottom">
      <button style={buttonStyle}><Link to="/" style={linkStyle}>Time</Link></button>
      <button style={buttonStyle}><Link to="/countdownn" style={linkStyle} >Countdown</Link></button>
      <button style={buttonStyle}><Link to="/stopwatch" style={linkStyle}>Stopwatch</Link></button>
      <button style={buttonStyle}><Link to="/worldclock" style={linkStyle}>WorldClock</Link></button>
      </div>
    </div>
  );
}

export default App;
