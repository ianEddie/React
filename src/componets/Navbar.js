import React from "react";
import "bootstrap";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar bg-light border border-sucess border-4 rounded-4">
      <div className="container-fluid">
        <a className="navbar-brand"><CartWidget/></a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success" type="submit">
            Searc
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
