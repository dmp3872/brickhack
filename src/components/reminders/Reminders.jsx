import { useState } from "react";
import "./reminders.scss"

export default function Reminders() {
  let state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  }
  function sendText() {
    const { text } = state;
    //pass text message GET variables via query string
    fetch(`http://127.0.0.1:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
      .catch(err => console.error(err));
  }
  const[message,setMessage] = useState(false)
  const handleSumbit =(e)=>{
    e.preventDefault();
    setMessage(true)
    let number= e.target.number.value;
    let reminder= e.target.reminder.value;
    let time = e.target.time.value;
    let days = e.target.days.value;
    state = {number, reminder};
    sendText();
  }
  return (
    <div className="reminders" id="reminders">
      <h1>Send Yourself A Reminder</h1>
      <form onSubmit={handleSumbit}>
        <input type="text" name="number" placeholder="Phone Number"/>
        <textarea name="reminder" placeholder="Set Reminder..."></textarea>
        <input type="text" className="time" placeholder="Time"/>
        <input type="text" name="days" placeholder="# of days per week"/>
        <button type= "submit">Add Reminder</button>
        {message && <span>Reminder Added</span>}
        </form>
      </div>
  )

}
