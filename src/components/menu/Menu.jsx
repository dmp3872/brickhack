import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#reminders">Reminders</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#recommended">Recommended</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
