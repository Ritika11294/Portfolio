import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  return (
    <>
      <div className = {` ${themename} section `}>
        <a
          href="https://github.com/Ritika11294"
          rel="noreferrer"
          target="_blank"
        >
          <h3  className = {` ${themename} footer`}>Made By Ritika Gupta</h3>
        </a>
      </div>
    </>
  );
};
