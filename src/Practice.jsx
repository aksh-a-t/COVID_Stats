import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Practice.css";

const App = () => {
  return (
    <>
      <nav class="main-menu">
        <ul>
          <li>
            <Link to="/">
              <span className="fa fa-laptop fa-2x">
                <AiIcons.AiFillHome />
              </span>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li >
            <Link to="/vaccine">
              <span className="fa fa-laptop fa-2x">
                <FaIcons.FaSyringe />
              </span>
              <span className="nav-text">Vaccine</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default App;
