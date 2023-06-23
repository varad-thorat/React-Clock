import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Time.css"

const Time = () => {
  let time ; //time variable created 
  const[ctime, setCtime] = useState(time);// use state is defined with ctime as initial value = 0
  useEffect(()=>{       //by using use effect it renders each time and so the time variable gets updated and it updates using setCtime
    const updateTime = () =>{
      time = new Date().toLocaleTimeString();
      setCtime(time);
    }
    setInterval(updateTime,1000);  //this is where it increments by 1 sec or get updated in 1 sec 
  },[]);

  //css section for buttons
  const linkStyle = {
    textDecoration : "none",
    color: "blue",
    fontSize : "18px"
  }
  const buttonStyle = {
    width: "20%",
    height: "50px"
  }
  
  //displays the Time and routing components
  return(
    <>
    <div className="main">
    <center>
      <h1>
        {ctime}
      </h1>
      <h2>
        Time in IST
      </h2>
      <div className="main-bottom">
        <button style={buttonStyle}><Link to="/alarm" style={linkStyle}>Alarm</Link></button>
        <button style={buttonStyle}><Link to="/stopwatch" style={linkStyle}>Stopwatch</Link></button>
        <button style={buttonStyle}><Link to="/worldclock" style={linkStyle}>WorldClock</Link></button>
        <button style={buttonStyle}><Link to="/countdown" style={linkStyle}>Countdown</Link></button>
      </div>
    </center>
    </div>
    </>
  )
}

export default Time;