import React from "react";
import { Link } from "react-router-dom";
//react-router-dom sometimes doesn't recommend to use <a href>

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
