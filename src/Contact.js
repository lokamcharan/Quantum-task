import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="header-container">
        <h2>Contact Us</h2>
      </div>
      <div className="content-container">
        <div className="image-container">
          <img src="./image6.png" alt="Contact" />
        </div>
        <div className="form-container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="Submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
