import React from "react";
import "./HomePage.css";
import Products from "./Products";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        padding: "20px",
        marginLeft: "40px",
      }}
    >
      <div className="TopRight">
        <div className="TopRight">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a
                className="navbar-brand"
                href="#"
                style={{ color: "#9400D3", fontWeight: "600" }}
              >
                Jillion Technologies
              </a>
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
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "#9400D3", fontWeight: "600" }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "#9400D3", fontWeight: "600" }}
                    >
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "#9400D3", fontWeight: "600" }}
                    >
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "#9400D3", fontWeight: "600" }}
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "#9400D3", fontWeight: "600" }}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div className="card" style={{ border: "none" }}>
          <div className="card-body">
            <h5 className="card1">WE MAKE YOUR IDEA'S</h5>
            <h5 className="card2">INTO REALITY</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the
              card title and make up the bulk of the card's content.
            </p>

            <button className="button1" style={{ marginRight: '10px' }}>Get started</button>
<button className="button2">Contact Us</button>

          </div>
        </div>
        <img className="image1" src="./image1.avif" alt="pic1" />
      </div>

      <div>
        <div>
          <h4 style={{ textAlign: "center" }}>Features</h4>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            justifyContent: "space-around",
          }}
        >
          <img
            src="./image5.png"
            alt="quant1"
            style={{ width: "40%", height: "50%" }}
          />
          <div style={{ marginLeft: "20px" }}>
            <h6 className="quant2">Card Title</h6>
            <p className="quant2">
              Some quick example text to build on the card title and make up the
              bulk of card's content
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            justifyContent: "space-around",
          }}
        >
          <div style={{ marginLeft: "20px" }}>
            <h6 className="quant2">Card Title</h6>
            <p className="quant2">
              Some quick example text to build on the card title and make up the
              bulk of card's content
            </p>
          </div>
          <img
            src="./image3.svg"
            alt="quant1"
            style={{ width: "40%", height: "50%" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            justifyContent: "space-around",
          }}
        >
          <img
            src="./image7.png"
            alt="quant1"
            style={{ width: "40%", height: "50%" }}
          />

          <div style={{ marginLeft: "20px" }}>
            <h6 className="quant2">Card Title</h6>
            <p className="quant2">
              Some quick example text to build on the card title and make up the
              bulk of card's content
            </p>
          </div>
        </div>
      </div>
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
