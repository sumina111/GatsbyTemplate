import React from "react";
import logo from "../../assets/img/logo.png";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top trans-navigation">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="" className="img-fluid b-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa fa-bars" />
            </span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active smoth-scroll" href=".banner-area">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-scroll" href="#intro">
                  Benefits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-scroll" href="#service">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-scroll" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-scroll" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
