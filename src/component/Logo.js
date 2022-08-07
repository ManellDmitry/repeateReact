import React from "react";
import logo_white from "../images/logo-white.png";
import logo_black from "../images/logo-black.png";

export const Logo = ({ color }) => {
  return (
    <div>
      <img src={color === "white" ? logo_white : logo_black} alt="logo" />
    </div>
  );
};
