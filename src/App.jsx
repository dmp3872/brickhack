import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Reminders from "./components/reminders/Reminders";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Reminders/>
      </div>
    </div>
  );
}

export default App;
