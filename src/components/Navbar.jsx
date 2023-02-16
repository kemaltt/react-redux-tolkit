import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { MdDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setDark, setLight } from "../stores/thema";
import { logout } from "../stores/auth-slice";

export default function Navbar({ isLogin, setIsLogin }) {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { dark } = useSelector((state) => state.thema);
  const { isAuthenticated } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDarkMode = () => {
    dispatch(setDark());
  };
  const handleLightMode = () => {
    dispatch(setLight());
  };

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      handleLightMode();
    } else {
      handleDarkMode();
    }
  };

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav style={{ background: dark ? "#000" : "#fff" }}>
      <h2
        style={{ cursor: "pointer", color: dark ? "#fff" : "#000 " }}
        onClick={() => navigate("/")}
      >
        Redux Tolkit
      </h2>
      <MdDarkMode
        style={{ cursor: "pointer", color: dark ? "#fff" : "#000 " }}
        onClick={handleToggle}
      />

      <ul className="nav_item_desktop">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/table">UserTable</Link>
        </li>
        {/* <li>
          <Link to="/register">Register</Link>
        </li> */}
        <li>
          {isAuthenticated ? (
            <LogoutIcon onClick={handleLogOut} color="primary" />
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
