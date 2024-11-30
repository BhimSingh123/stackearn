import { Link } from "react-router-dom";
import {
  PatternSvg5,
  PatternSvg6
} from "../imagepath";

import { Testimonial3 } from "./slider/testimonial";
function Testinomal() {
  return (
    <section className="testimonial-three">
      <div className="container">
        <div className="testimonial-pattern">
          <img className="pattern-left img-fluid" alt="" src={PatternSvg5} />
          <img className="pattern-right img-fluid" alt="" src={PatternSvg6} />
        </div>
        <div className="testimonial-three-content">
          <div className="row align-items-center">
            <div
              className="col-xl-4 col-lg-12 col-md-12"
              data-aos="fade-down"
            >
              <div className="become-content">
                <h2 className="aos-init aos-animate ">They Trusted us</h2>
                <h4 className="aos-init aos-animate text-white">
                  We are a very happy because we have a happy customer
                </h4>
              </div>

              {/* View all Testimonail */}
              <Link
                to="/instructor/instructor-profile"
                className="btn btn-action aos-init aos-animate mt-3"
                data-aos="fade-up"
              >
                View all Testimonial
              </Link>
              {/* View all Testimonail */}
            </div>
            <div
              className="col-xl-8 col-lg-12 col-md-12"
              data-aos="fade-down"
            >
              {/* Swiper Element */}
              <div
                className="swiper-testimonial-three"
                style={{ width: "100%", height: "400px" }}
              >
                <Testimonial3 />
              </div>
              {/* <Testimonial03 /> */}
              {/* Swiper Element */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testinomal;