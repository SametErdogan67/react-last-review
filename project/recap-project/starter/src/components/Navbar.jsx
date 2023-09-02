import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../util/img/checkout-xxl.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary bg-body-tertiary  ">
      <div className="container-fluid ">
        <NavLink className="navbar-brand text-light" to="/">
          <img src={logo} alt="" style={{ width: 65, height: 60 }} />
        </NavLink>
        <button
          className="navbar-toggler bg-light "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light" />
        </button>
        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/new-product">
                New Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/product-list">
                Product List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
