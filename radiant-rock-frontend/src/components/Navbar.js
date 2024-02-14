import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="container">
        <a href="#" class="logo">
          Gemstone World
        </a>
        <ul class="nav-links">
          <li>
            <Link to="/">All Gems</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
