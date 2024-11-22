import { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheet/Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/psycho">Psycho</Link>
        </li>
        <li>
          <Link to="/approch">Approch</Link>
        </li>
        <li>
          <Link to="/school">School</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/brevet">Brevet</Link>
        </li>
        <li>
          <Link to="/pre">Pre</Link>
        </li>
        <li>
          <Link to="/who">Who</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
