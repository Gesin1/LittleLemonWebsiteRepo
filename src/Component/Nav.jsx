import Logo from "../img/Logo .svg";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [showBar, setShowBar] = useState(false);

  return (
    <>
      <nav className="container1">
        <img src={Logo} alt="little lemon" />
        <FaBars
          className="icons"
          onClick={() => {
            setShowBar((prevshowBar) => !prevshowBar);
          }}
        />
        <ul className={showBar ? "open" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Ab">About</NavLink>
          </li>
          <li>
            <NavLink to="/reserveTable">Reserved</NavLink>
          </li>
          <li>
            <NavLink to="/order">Order online</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
