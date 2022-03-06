import "./intro.scss"
import { init } from "ityped";

import { useEffect, useRef } from "react";


export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Drink Water", "Go for a walk", "Check your blood pressure"],
    });
  }, []);
  return (
    <div className="intro" id="intro" >
       <div className="left">
       <div className="wrapper">
          <h1>Do You Ever</h1>
          <h2>Forget To</h2>
          <h3>
             <span ref={textRef}></span>
          </h3>
        </div>
        </div>
         <div className="right">
         <a href="#reminders">
           <img src="assets/down3.png" alt="" />
           </a>
          </div>
    </div>
  )
}
