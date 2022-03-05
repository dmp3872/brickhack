import "./topbar.scss"
import {Favorite, DirectionsRun, Spa} from "@material-ui/icons"


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              Remind Health
              </a>
            <div className="itemContainer">
                <Favorite className="icon"/>
                <span>Health</span>
              </div>
              <div className="itemContainer">
                <DirectionsRun className="icon"/>
                <span>Is</span>
                </div>
                <div className="itemContainer">
                  <Spa className="icon"/>
                  <span>Wealth</span>
                  </div>
              </div>
            <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
              </div>
            </div>
          </div>
    </div>
  )
}
