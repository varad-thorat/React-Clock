import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);// this is the end of the timer which updates all the time for each timezone

  const getTimeInTimeZone = (timezone) => { //this function takes all inputs of time and the timezone 
    const options = {
      timeZone: timezone,
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    return time.toLocaleString('en-US', options);
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
      <h1>World Clock</h1>
      <div className="clock-container">
        <div className="clock">
          <h2>New York</h2>
          <p>{getTimeInTimeZone('America/New_York')}</p> 
        </div>
        <div className="clock">
          <h2>London</h2>
          <p>{getTimeInTimeZone('Europe/London')}</p>
        </div>
        <div className="clock">
          <h2>Tokyo</h2>
          <p>{getTimeInTimeZone('Asia/Tokyo')}</p>
        </div>
      </div>
      <div className="main-bottom">
        <button style={buttonStyle}><Link to="/" style={linkStyle}>Time</Link></button>
        <button style={buttonStyle}><Link to="/alarm" style={linkStyle}>Alarm</Link></button>
        <button style={buttonStyle}><Link to="/stopwatch" style={linkStyle}>Stopwatch</Link></button>
        <button style={buttonStyle}><Link to="/countdown" style={linkStyle}>Countdown</Link></button>
      </div>
    </div>
    
  );
}

export default App;
