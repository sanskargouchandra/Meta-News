// import PropTypes from 'prop-types'
import React, { Component } from "react";
import "./style.scss";

export class NavBar extends Component {
  // static propTypes = {}

  render() {
    return (
      <>
        <header id="nav-wrapper ">
          <nav id="nav" className="navbar navbar-expand-lg ">
            <div className="nav left ">
              <span className="gradient skew">
                <h1 className="logo un-skew p-3">
                  <a href="/home">Meta-News</a>
                </h1>
              </span>
              <button id="menu" className="btn-nav">
                <span className="fas fa-bars"></span>
              </button>
            </div>
            <div className="nav right">
              <a href="/home" className="nav-link active">
                <span className="nav-link-span">
                  <span className="u-nav">Home</span>
                </span>
              </a>
              <a href="/about" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">About</span>
                </span>
              </a>
              <a href="/work" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">Work</span>
                </span>
              </a>
              <a href="/contact" className="nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">Contact</span>
                </span>
              </a>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;
