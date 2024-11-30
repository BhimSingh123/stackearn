import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Lead1} from "../../imagepath";

const Companies = () => {
  var settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: false,
    nav: true,

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
        items: 6,
      },
    },
  };
  return (
    <OwlCarousel
      {...settings}
      className="lead-group-slider owl-carousel owl-theme"
    >
      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Lead1} />
        </div>
      </div>
     
      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Lead1} />
        </div>
      </div>

      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Lead1} />
        </div>
      </div>

      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Lead1} />
        </div>
      </div>

      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Lead1} />
        </div>
      </div>

      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Lead1} />
        </div>
      </div>

    </OwlCarousel>
  );
};

export default Companies;
