import React, { Component } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";


export class NavBar extends Component {
  // static propTypes = {}

  render() {
    return (
      <>
        <header id="nav-wrapper ">
          <nav id="nav" className="navbar navbar-expand-lg fixed-top">
            <div className="nav left ">
              <span className="gradient skew">
                <h1 className="logo un-skew p-3">
                  <Link to="/ ">Meta-News</Link>
                </h1>
              </span>
              <button id="menu" className="btn-nav">
                <span className="fas fa-bars"></span>
              </button>
            </div>
            <div className="nav right">
              <Link to="/" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">Top Headlins</span>
                </span>
              </Link>
              <Link to="/health" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">health</span>
                </span>
              </Link>
              <Link to="/science" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">science</span>
                </span>
              </Link>
              <Link to="/sports" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">sports</span>
                </span>
              </Link>
              <Link to="/technology" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">technology</span>
                </span>
              </Link>
              <Link to="/entertainment" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">entertainment</span>
                </span>
              </Link>
            </div>
          </nav>
        </header>
      </>
    );
  }
}


export default NavBar;