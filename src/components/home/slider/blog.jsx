import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Avatar5, Blog1 } from "../../imagepath";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaLaptopCode } from "react-icons/fa";
const Blog = () => {
  var settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };

  return (
    <OwlCarousel
      {...settings}
      className="owl-carousel blogs-slide owl-theme aos"
      data-aos="fade-up"
    >
      <div className="instructors-widget blog-widget">
        <div className="instructors-img">
          <Link to="blog-list">
            <img
              className="img-fluid rounded"
              alt="data"
              src={Blog1}
              style={{ height: "200px", objectFit: "cover" }}
            />
          </Link>
        </div>

        <div className="instructors-content text-left">
          <div className="d-flex justify-content-between align-items-center ">
            {/* Left Side: Calendar Icon and Date */}
            <div className="d-flex align-items-center">
              <FaCalendarAlt className="me-2 text-primary fs-4" size={24} />
              <p className="fs-5">Jun 15, 2024</p>
            </div>

            {/* Right Side: IT Services Icon and Name */}
            <div className="d-flex align-items-center">
              <FaLaptopCode className="me-2 text-success fs-4" size={24} />
              <p className="fs-5">IT Services</p>
            </div>
          </div>
          <h5>
            <Link to="blog-list">Attract More Sales And Profits</Link>
          </h5>
          <p>Attract More Sales And Profits Attract More Sales And Profits Attract More Sales And Profits Attract More Sales And Profits</p>
          <div className="testimonial-container ">
            {/* Horizontal Line */}
            <hr className="mb-3" />
            {/* Row Layout */}
            <div className="d-flex align-items-center">
              {/* Left Side: Image */}
              <div className="me-2">
                <img
                  className="rounded-circle"
                  alt="Noah Aarons"
                  src={Avatar5}
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
              </div>

              {/* Right Side: Text */}
              <div>
                <h6 className="mb-0">Noah Aarons</h6>
              </div>
            </div>
          </div>

        </div>
      </div>



    </OwlCarousel>
  );
};

export default Blog;
