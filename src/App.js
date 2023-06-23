import React from "react";
import Time from "./Time.js";
import Alarm from "./Alarm.js";
import Countdown from "./Countdown.js";
import WorldClock from "./WorldClock.js";
import Stopwatch from "./Stopwatch.js";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

const App = () => {
  return(
  <>
    <center>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Time/>}></Route>
          <Route path="/alarm" element={<Alarm/>}></Route>
          <Route path="/countdown" element={<Countdown/>}></Route>
          <Route path="/worldclock" element={<WorldClock/>}></Route>
          <Route path="/stopwatch" element={<Stopwatch/>}></Route>
          <Route path="*" element={<Time/>}></Route>
        </Routes>
      </BrowserRouter>
    </center>
  </>
  );
}

export default App;
