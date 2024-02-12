import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../images/companyLogo.png";
import "../css/customClasses.css";
import FAQs from "../adminPages/FAQs";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container">
          <Link to="../pages/Home.js">
            <img className="" src={companyLogo} alt="" />
          </Link>

          
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-0">
              <li className="nav-item dropdown marginInLi">
                <Link
                  className="nav-link  text-dark"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Content
                </Link>
                <ul className="dropdown-menu ">
                  <li>
                    <Link className="dropdown-item " to="#">
                      Team Members
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Our Advisors
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Mission & Vision
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        PPT
                      </Link>
                    </li>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Presentation
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active marginInLi "
                  aria-current="page"
                  to="#"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item marginInLi">
                <Link className="nav-link text-dark" to="#">
                  Experts' Advice
                </Link>
              </li>
              <li className="nav-item marginInLi">
                <Link className="nav-link text-dark" to=".././pages/FAQs.js">
                  FAQs'
                </Link>
              </li>
              <li className="nav-item marginInLi">
                <Link className="nav-link text-dark" to="#">
                  Youth Corner
                </Link>
              </li>
              <li className="nav-item marginInLi">
                <Link className="nav-link text-dark" to="#">
                  E-News
                </Link>
              </li>
              <li className="nav-item marginInLi ">
                <Link
                  className="nav-link text-dark"
                  aria-disabled="true"
                  to="/registration"
                >
                  Registration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
