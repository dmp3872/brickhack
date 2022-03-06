import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Reminders from "./components/reminders/Reminders";
import "./app.scss"
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import {useState} from "react"
import Recommendations from "./components/recommendations/Recommendations";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Reminders/>
        <Recommendations/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
