import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <h5 style={{ textAlign: "center" }}>TESTIMONIALS</h5>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ marginTop: "-50px" }}>
          <div className="carousel-item active">
            <div className="image-container">
              <img
                src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ="
                className="d-block circular-image"
                alt="Testimonial 1"
                style={{ marginLeft: "100px" }}
              />
            </div>
            <div className="slidetext" style={{ textAlign: "center" }}>
              <p>
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id
                lacinia.Etiam faucibus mauris id tempor egestas.Dusi luctus
                turpid at accumsan tincidunt.Phasellus risus risus, volutapt vel
                tellus ac, tincidunt fringilla massa.Etiam hedrerit dolor egaet
                rutrum
              </p>
              <h6>
                PAULA WILSON,<span>Media Analyst</span>
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <div className="image-container">
              <img
                src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ="
                className="d-block circular-image" 
                alt="Testimonial 2"
                style={{ marginLeft: "100px" }}
              />
            </div>
            <div className="slidetext" style={{ textAlign: "center" }}>
              <p>
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id
                lacinia.Etiam faucibus mauris id tempor egestas.Dusi luctus
                turpid at accumsan tincidunt.Phasellus risus risus, volutapt vel
                tellus ac, tincidunt fringilla massa.Etiam hedrerit dolor egaet
                rutrum
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="image-container">
              <img
                src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ="
                className="d-block circular-image" 
                alt="Testimonial 3"
                style={{ marginLeft: "100px" }}
              />
            </div>
            <div className="slidetext" style={{ textAlign: "center" }}>
              <p>
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id
                lacinia.Etiam faucibus mauris id tempor egestas.Dusi luctus
                turpid at accumsan tincidunt.Phasellus risus risus, volutapt vel
                tellus ac, tincidunt fringilla massa.Etiam hedrerit dolor egaet
                rutrum
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
