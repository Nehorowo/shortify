import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    navigate("/");
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <nav>
          <div className="nav-wrapper orange lighten-2" style={{ padding: "0 2rem" }}>
            <span className="brand-logo">Shortify</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink to="/create">Create</NavLink>
              </li>
              <li>
                <NavLink to="/links">Links</NavLink>
              </li>
              <li>
                <a href="/" onClick={logoutHandler}>
                  Quit
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
