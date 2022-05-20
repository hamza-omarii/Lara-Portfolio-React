import React from "react";
import "./topbar.scss";

import { MdPerson, MdMail } from "react-icons/md";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className={"logo " + (menuOpen && "active")}>
            Portfolio
          </a>
          <div className="itemContainer">
            <MdPerson className="icon" />
            <span>+962 79587 6750</span>
          </div>
          <div className="itemContainer">
            <MdMail className="icon" />
            <span>hamzaahmadomari@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
