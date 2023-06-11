import React from "react";
import { Link } from "react-router-dom";
export default function Main(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.nvbclr} bg-${props.nvbclr}`}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to="#">
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li>
                <div className="form-check form-switch offset-11">
                  <input
                    className="form-check-input my-3"
                    type="checkbox"
                    style={{
                      color:
                        props.handleEnableDark === "EnableDarkMode"
                          ? "black"
                          : "white",
                    }}
                    onChange={props.handleEnableDark}
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label my-2"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    {props.btntext}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
