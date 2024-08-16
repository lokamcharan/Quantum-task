import React from "react";
import "./Products.css";

export default function Products() {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3 style={{ textAlign: "center" }}>Products</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "space-around",
          paddingTop: "",
        }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img src="" alt=" " />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              This is wider card with supporting text below as a natural lead-in
              to additional content.This content is little bit longer.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="" className="card-img-top" alt="" />
          <img src="" alt=" " />
          <div className="card-body">
            <h5 className="card-title">Card Title 2</h5>
            <p className="card-text">
              This is wider card with supporting text below as a natural lead-in
              to additional content.This content is little bit longer.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="" alt=" " />
          <div className="card-body">
            <h5 className="card-title">Card Title 3</h5>
            <p className="card-text">
              This is wider card with supporting text below as a natural lead-in
              to additional content.This content is little bit longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
