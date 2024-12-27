import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheet/index.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubList = (e) => {
    e.preventDefault(); // Prevent navigation on toggle
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li>
          <NavLink to="/" className="link" activeClassName="active">
            📓 Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/psycho" className="link" activeClassName="active">
            🧠 Psychopédagogie ?
          </NavLink>
        </li>
        <li>
          <div>
            <NavLink
              to="/approch"
              className="link"
              activeClassName="active"
              onClick={toggleSubList}
            >
              🌟 Mon approche
            </NavLink>
            {isOpen && (
              <ul className="menu-list">
                <li>
                  <NavLink
                    to="/school"
                    className="link"
                    activeClassName="active"
                  >
                    📚 Suivi scolaire
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/learn"
                    className="link"
                    activeClassName="active"
                  >
                    🪄 Apprendre à apprendre
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/brevet"
                    className="link"
                    activeClassName="active"
                  >
                    🎓 Vers le brevet
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <NavLink to="/pre" className="link" activeClassName="active">
            🏫 Pré rentrée
          </NavLink>
        </li>
        <li>
          <NavLink to="/who" className="link" activeClassName="active">
            🙋🏻‍♀️ Qui suis-je ?
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
