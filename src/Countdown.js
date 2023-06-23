import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Countdown.css"
export default function Countdown(){
    // i have declared the days hours minutes and seconds value
    const [days,setDays] = useState(0);
    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    //if we change this then the timer will change
    const deadline = "May, 29, 2023"    //here we have set the date till the countdown should end and also it is formated

    const getTime = ()=>{
        //time constant gives the actual time remaining 
        const time = Date.parse(deadline)- Date.now()
        //these are the formulas to convert the given time to Days and other format
        setDays(Math.floor(time/(1000*60*60*24)))
        setHours(Math.floor(time/(1000*60*60)%24))
        setMinutes(Math.floor((time/1000/60)%60))
        setSeconds(Math.floor((time/1000)%60))
    }
    useEffect(()=>{     //this is same as that of the timer we used in time.js which decrements the value that the getTime function returns
        const interval = setInterval(()=>getTime(deadline),1000)
        return () => clearInterval(interval)
    },[])
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
            <div className="row">
                <div className="col-3">
                    <h1>{days<10? "0"+days: days}</h1>
                    <span className='days'>days</span>
                </div>
                <div className="col-3">
                    <h1>{hours<10? "0"+hours: hours}</h1>
                    <span className='hour'>hours</span>
                </div>
                <div className="col-3">
                    <h1>{minutes<10? "0"+minutes: minutes}</h1>
                    <span className='mins'>minutes</span>
                </div>
                <div className="col-3">
                    <h1>{seconds<10? "0"+seconds: seconds}</h1>
                    <span className='secs'>Secs</span>
                </div>
                <div className="main-bottom">
                <button style={buttonStyle}><Link to="/" style={linkStyle}>Time</Link></button>
        <button style={buttonStyle}><Link to="/alarm" style={linkStyle}>Alarm</Link></button>
        <button style={buttonStyle}><Link to="/stopwatch" style={linkStyle}>Stopwatch</Link></button>
        <button style={buttonStyle}><Link to="/worldclock" style={linkStyle}>WorldClock</Link></button>
        </div>
            </div>
        </div>
        </>
    )
}