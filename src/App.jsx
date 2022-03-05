import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Reminders from "./components/reminders/Reminders";
import "./app.scss"
import Contact from "./components/contact/Contact";
import {useState} from "react"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Reminders/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
