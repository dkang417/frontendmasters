import React from "react";
import { Link } from "_@reach/router";

const NavBar = () => (
  <header>
    <Link to="/">Adopt Me!</Link>
    <Link to="/search-params">
      {/* emoji   */}
      <span aria-label="search" role="img">
        🔍
      </span>
    </Link>
  </header>
);

export default NavBar;
