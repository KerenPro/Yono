import React from "react";
import classes from "./header.module.css";
import Logo from "../../Assets/Logo/Logo-resize-small.png";

function Header() {
  return (
    <div className={classes.header}>
      <img className={classes.logo} src={Logo} alt="logo" />
      <h1 className={classes.heading}>Yono</h1>
    </div>
  );
}

export default Header;
