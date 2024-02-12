import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";

function Slider() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image1}
              className="d-block w-100"
              style={{ height: "200px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              className="d-block w-100 "
              style={{ height: "200px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={image3}
              className="d-block w-100"
              style={{ height: "200px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={image4}
              className="d-block w-100"
              style={{ height: "200px" }}
              alt="..."
            />
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

export default Slider;
