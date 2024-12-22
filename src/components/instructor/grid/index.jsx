import React, { useEffect, useState } from "react";
import { Grid, List, Search } from "react-feather";
import { Link } from "react-router-dom";
import {
  Icon1,
  User11,
  UserIconSvg,
} from "../../imagepath";
import Header from "../../header";
import { Footer4 } from "../../footer4";
import Listing from "../../Api/Listing";
import LoadingPage from "../../../LoadingPage";

export default function InstructorGrid() {


  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);


  const fetchMarketLists = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.InstrutorGet();
      setListing(response?.data?.data?.Instructorget
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketLists();
  }, []);

  console.log("lisitng", listing)
  return (
    <>
      <div className="main-wrapper">
        <Header />

        <div className="page-content home-slide d-flex align-items-center">
          <div className="container  mt-5">
            <div className="row">
              <div className="showing-list">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <div className="view-icons">
                        <Link to="/instructor/instructor-grid" className="grid-view active">
                          <Grid />
                        </Link>
                        <Link
                          to="/instructor/instructor-list"
                          className="list-view "
                        >
                          <List />
                        </Link>
                      </div>
                      <div className="show-result">
                        <h4>Showing 1-9 of 50 results</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="show-filter add-course-info">
                      <form action="#">
                        <div className="row gx-2 align-items-center">
                          <div className="col-md-6 col-item">
                            <div className=" search-group">
                              <Search
                                size={16}
                                style={{
                                  position: "absolute",
                                  left: "7px",
                                  color: "#F66962",
                                }}
                              />
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search our instructor"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Filter */}

              {loading ? (
                <LoadingPage />
              ) : (
                <div className="row">
                  {/* Instructor List */}
                  {listing && listing?.map((item, index) => (

                    <div className="col-lg-3 col-md-6  d-flex" key={index}>
                      <div className="instructor-box flex-fill">
                        <div className="instructor-img">
                          <img className="img-fluid" alt="" src={User11 || item?.profileImage} />
                          <Link to="#rate" className="rating-count">
                            <i className="fa-regular fa-heart"></i>
                          </Link>
                        </div>
                        <div className="instructor-content">
                          <h5>
                            {item?.firstName} {item?.lastName}
                          </h5>
                          <h6>{item?.designation}</h6>
                          <div className="rating-img d-flex align-items-center justify-content-center">
                            <img src={Icon1} className="me-1" alt="" />
                            <p>{item?.lessions} Lesson</p>
                          </div>
                          <div className="course-view d-flex align-items-center justify-content-center">
                            <img src={UserIconSvg} className="me-1" alt="" />
                            <p>{item?.students} Students</p>
                          </div>
                          <div className="rating">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <i
                                key={index}
                                className={`fas fa-star ${index < item?.rating ? "filled" : ""}`}
                              ></i>
                            ))}
                            <span className="d-inline-block average-rating">
                              <span>{item?.rating}</span>
                            </span>
                          </div>

                        </div>
                      </div>


                    </div>
                  ))}
                  {/* Instructor List */}

                  {/* Instructor List */}

                  {/* Instructor List */}
                  {/* Instructor List */}
                </div>
              )}



              {/* Pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="pagination lms-page">
                    <li className="page-item prev">
                      <Link
                        className="page-link"
                        to="#"

                      >
                        <i className="fas fa-angle-left"></i>
                      </Link>
                    </li>
                    <li className="page-item first-page active">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        4
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        5
                      </Link>
                    </li>
                    <li className="page-item next">
                      <Link className="page-link" to="#">
                        <i className="fas fa-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Pagination */}
            </div>
          </div>
        </div>
        {/* Page Wrapper */}
        {/* <Footer /> */}

        <Footer4 />
      </div>
    </>
  );
}
