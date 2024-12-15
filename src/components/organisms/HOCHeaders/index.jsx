import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import { Children } from "react";

const Headers = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Headers;
