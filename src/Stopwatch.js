import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Stopwach.css"

export default function Stopwatch(){
    const [seconds, setSeconds] = useState(0); // this is a second variable which will update the second value 
    const [minutes, setminutes] = useState(0);  //similarly for minutes
    
    var timer;
    useEffect(()=>{     //here also we use use effect 
    timer= setInterval(()=>{    //we passed the function to a variable named timer
        setSeconds(seconds+1);  // the set interval increments the time by one second here and passes it to setSeconds
        if(seconds===59){       //this is a if condition that lets the minute variable to update after each 59 sec
            setminutes(minutes+1);
            setSeconds(0);
        }
        
    },1000)
    return()=> clearInterval(timer);    //this is used to stop the timer
});
    const start = ()=>{
        setSeconds(setSeconds);
        setminutes(setminutes);
    }
    const restart = ()=>{
        setSeconds(0);
        setminutes(0);
    }
    const stop = ()=>{
        clearInterval(timer);
    }
    const linkStyle = {
        textDecoration : "none",
        color: "blue",
        fontSize : "18px"
    
      }
      const buttonStyle = {
        width: "20%",
        height: "50px"
    }
    return(
        <>
        <div className="main">
        <h1>
            Stopwatch
        </h1>
        <h1>{minutes<10? "0"+minutes: minutes}:{seconds<10?"0"+seconds:seconds}</h1>    
        <div className="main-middle">
            <button class="start" onClick={start}>Start</button>
            <button class="restart" onClick={restart}>Restart</button>
            <button class="stop" onClick={stop}>Stop</button>
        </div>
        <br></br><br></br>
        <div className="main-bottom">
        <button style={buttonStyle}><Link to="/" style={linkStyle}>Time</Link></button>
        <button style={buttonStyle}><Link to="/alarm" style={linkStyle}>Alarm</Link></button>
        <button style={buttonStyle}><Link to="/worldclock" style={linkStyle}>WorldClock</Link></button>
        <button style={buttonStyle}><Link to="/countdown" style={linkStyle}>Countdown</Link></button>
        </div>
        </div>
        </>
    );
}