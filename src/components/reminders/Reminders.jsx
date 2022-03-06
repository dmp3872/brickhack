import { useState } from "react";
import "./reminders.scss"

export default function Reminders() {
  const[message,setMessage] = useState(false)
  const handleSumbit =(e)=>{
    e.preventDefault();
    setMessage(true)
    const number= e.target.number.value;
    const reminder= e.target.reminder.value;
    const time = e.target.time.value;
    const days = e.target.days.value;
  }
  return (
    <div className="reminders" id="reminders">
      <h1>Set a new Reminder</h1>
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
