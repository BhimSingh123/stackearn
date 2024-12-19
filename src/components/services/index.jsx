import React, { useEffect, useState } from "react";
import Header from "../header";
import { useSelector } from "react-redux";
import { FeaturedCourse5, User1 } from "../imagepath";
import { Link } from "react-router-dom";
import { HomeMain } from "../imagepath";
import { Footer4 } from "../footer4";
import Listing from "../Api/Listing";
import LoadingPage from "../../LoadingPage";

function Index() {
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);

  const fetchMarketLists = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.courseGet();
      setListing(response?.data?.data?.Courseget || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketLists();
  }, []);


  const mobileSidebar = useSelector((state) => state.sidebarSlice.expandMenu);

  useEffect(() => {
    document.body.className = "home-two";
    return () => {
      document.body.className = "";
    };
  }, []);



  return (
    <>
      <div className="main-wrapper">
        <Header />

        <section
          className="home-two-slide d-flex align-items-center"
          style={{
            backgroundImage: mobileSidebar === "disabled" && `url(${HomeMain})`,
          }}
        >
          {/* Banner Section */}
        </section>

        <section className="featured-section-five">
          <div className="container">
            <div className="row">
              <div className="featured-courses-five-tab">
                {loading ? (
                  <LoadingPage />
                ) : (

                  <div className="ux-design-five">
                    <div className="row">
                      {/* Col */}
                      {listing && listing?.map((item, index) => (

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={index}>
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to={`/course-details/${item?._id}`}>

                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={item?.courseImage || FeaturedCourse5}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to={`/course-details/${item?._id}`}>
                                      <img
                                        src={item?.InstrutorId?.profileImage || User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to={`/course-details/${item?._id}`}>
                                        {item?.InstrutorId?.firstName}
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      {Array.from({ length: 5 }).map((_, index) => (
                                        <i
                                          key={index}
                                          className={`fas fa-star ${index < item?.InstrutorId?.rating ? "filled" : ""}`}
                                        ></i>
                                      ))}
                                      <span className="d-inline-block average-rating">
                                        <span>{item?.InstrutorId?.rating}</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title ">
                                  <Link to={`/course-details/${item?._id}`} className="data-limit">
                                    {item?.description}
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>{item?.InstrutorId?.designation}</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>{item?.InstrutorId?.lessions} Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>{item?.title}</p>
                                  <h3>{item?.price}</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to={`/course-details/${item?._id}`}
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                      ))}
                      {/* Col */}
                    </div>
                  </div>
                )}
                {/* All Category*/}
              </div>
            </div>
          </div>
        </section>
        <Footer4 />
      </div>
    </>
  );
}

export default Index;
