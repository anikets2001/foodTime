import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          height={"80px"}
          width={"90px"}
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          {onlineStatus ? <li>✅</li> : <li>❌</li>}
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={"/grocery"}>Grocery</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Cart</NavLink>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
