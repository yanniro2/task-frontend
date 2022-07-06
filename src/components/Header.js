import React from "react";
import logo from "../Img/Group 4214.png";
import { RiMenu3Line } from "react-icons/ri"
function Header(props)
{
  return (
    <div className="Header">
      <img src={logo} alt="logo img" className="logo-icon" />
      <div className="menu-nav">
        <ul>
          <li>
            <a href="#">Menu one</a>
          </li>
          <li>
            <a href="#">Menu Two </a>
          </li>
          <li>
            <a href="#">Menu Three</a>
          </li>
          <li>
            <a href="#">Menu Four</a>
          </li>
          <li>
            <a href="#">Menu Five</a>
          </li>
          <li>
            <a href="#">Menu Six</a>
          </li>
          <li>
            <a href="#">Menu Seven</a>
          </li>
          <li>
            <a href="#">Menu Eight</a>
          </li>
        </ul>
      </div>
      <div className="menu">
        <RiMenu3Line className="display" onClick={props.showMenu} />
      </div>
    </div>
  );
}

export default Header;
