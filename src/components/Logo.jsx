import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoIcon from "../assets/shared/desktop/logo.svg";

const Logo = () => {
  return (
    <NavLink to='/'>
      <img src={LogoIcon} alt="logo" />
    </NavLink>
  );
}

export default Logo