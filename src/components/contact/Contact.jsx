import "./contact.scss"
import React, { useState } from "react";

export default function Contact() {
const [message,setMessage] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault();
  setMessage(true);
};

  return (
    <div className="contact" id="contact">
          <div className="left">
          <h2>Contact.</h2>  
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Message"></textarea>
            <button>Submit</button>
            {message && <span>Your message has been received!</span>}
          </form>
        </div>
        <div className="right">
            
        </div>
    </div>
  )
}