import { NavLink } from "react-router-dom";
import "../stylesheet/index.css";

function Menu() {
  return (
    <nav className="menu container">
      <ul className="menu-list">
        <li>
          <NavLink to="/" className="link" activeClassName="active">
            🏠 Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/psycho" className="link" activeClassName="active">
            🧠 Psycho
          </NavLink>
        </li>
        <li>
          <NavLink to="/approch" className="link" activeClassName="active">
            💡 Approch
          </NavLink>
        </li>
        <li>
          <NavLink to="/school" className="link" activeClassName="active">
            🎓 School
          </NavLink>
        </li>
        <li>
          <NavLink to="/learn" className="link" activeClassName="active">
            📚 Learn
          </NavLink>
        </li>
        <li>
          <NavLink to="/brevet" className="link" activeClassName="active">
            📝 Brevet
          </NavLink>
        </li>
        <li>
          <NavLink to="/pre" className="link" activeClassName="active">
            🛤️ Pre
          </NavLink>
        </li>
        <li>
          <NavLink to="/who" className="link" activeClassName="active">
            ❓ Who
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className="link" activeClassName="active">
            📞 Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
