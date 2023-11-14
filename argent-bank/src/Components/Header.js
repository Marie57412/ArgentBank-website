import React from "react";
import Logo from "../assets/argentBankLogo.webp"
import { Link, useNavigate } from "react-router-dom";


function Header(){

    return (
    <nav className="main-nav">
      <Link to='/' className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src= {Logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      <Link to='/Login' className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  </nav>
    )
}

export default Header