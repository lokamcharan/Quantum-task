import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div style={{ color: "whitesmoke", paddingTop: "25px" }}>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item fade-in">
            <h5>Contact Us</h5>
            <br />
            <h6>Email</h6>
            <p>contact@JILLIONTECHNOLOGIES.com</p>
            <h6>Phone</h6>
            <p>123456789</p>
            <h6>Address</h6>
            <p>C-260, Sector-63, Noida, UP-201301,</p>
          </li>
          <li className="nav-item fade-in">
            <h5>Company</h5>
            <br />
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Development Process</p>
            <p>Career</p>
          </li>
          <li className="nav-item fade-in">
            <h5>Services</h5>
            <br />
            <p>Website Development</p>
            <p>Mobile App Development</p>
            <p>E-commerce Solutions</p>
            <p>Customer Software Development</p>
          </li>
          <li className="nav-item fade-in">
            <h5>Support</h5>
            <br />
            <p>Content</p>
            <p>Term & Policy</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
