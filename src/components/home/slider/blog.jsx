import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Blog1} from "../../imagepath";
import { Link } from "react-router-dom";

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
            <img className="img-fluid" alt="" src={Blog1} />
          </Link>
        </div>
        <div className="instructors-content text-center">
          <h5>
            <Link to="blog-list">Attract More Sales And Profits</Link>
          </h5>
          <p>Attract More Sales And Profits Attract More Sales And Profits Attract More Sales And Profits Attract More Sales And Profits</p>
          <div className="student-count d-flex justify-content-center">
            <i className="fa-solid fa-calendar-days" />
            <span>Jun 15, 2024</span>
          </div>
        </div>
      </div>
    
    
   
    </OwlCarousel>
  );
};

export default Blog;
