import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ThemeToggle from "./ThemeToggle";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const data = useContext(UserContext);

  return (
    <div className="flex justify-between items-center shadow-md border border-1 pr-2">
      <div>
        <img height={"80px"} width={"90px"} src={LOGO_URL} alt="logo" />
      </div>
      <div>
        <ul className="flex space-x-4">
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
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <ThemeToggle />
          <li>
            <p className="font-semibold">{data.loggedInUser}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
