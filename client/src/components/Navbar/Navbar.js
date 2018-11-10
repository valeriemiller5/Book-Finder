import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item active title">
            <a className="nav-link" href="/">
                <h5>React Google Book Search</h5>
            </a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="/search">
                Search
            </a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="/saved">
                Saved
            </a>
        </li>
    </ul>
  </nav>
);

export default Navbar;