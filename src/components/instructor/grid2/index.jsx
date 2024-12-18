import React, { useEffect, useState } from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import {
  Icon1,
  Icon2,
  User11,
} from "../../imagepath";
import { Grid, List, Search } from "react-feather";
import { Link } from "react-router-dom";
import Listing from "../../Api/Listing";
import LoadingPage from "../../../LoadingPage";

export default function InstructorGrid2() {

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
  return (
    <div className="main-wrapper">
      <InstructorHeader />
      {/* BreadCrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">Instructors Grid</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BreadCrumb */}
      {/* Page Wrapper */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Filter */}
              <div className="showing-list">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <div className="view-icons">
                        <Link
                          to="/instructor/instructor-grid"
                          className="grid-view active"
                        >
                          <Grid />
                        </Link>
                        <Link to="/instructor/instructor-list" className="list-view">
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
                                placeholder="Search our courses"
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

                    <div className="col-lg-4 col-md-6 d-flex" key={index}>
                      <div className="instructor-box instruct-grid flex-fill">
                        <div className="instructor-img">
                          <Link to="instructor-profile">
                            <img className="img-fluid" alt="" src={User11} />
                          </Link>
                          <Link to="#rate" className="rating-count">
                            <i className="fa-regular fa-heart"></i>
                          </Link>
                        </div>
                        <div className="instructor-content">
                          <h5>
                            <Link to="instructor-profile">{item?.name}</Link>
                          </h5>
                          <h6>Instructor</h6>
                          <div className="rating-img d-flex align-items-center justify-content-center">
                            <img src={Icon1} className="me-1" alt="" />
                            <p>12+ Lesson</p>
                          </div>
                          <div className="course-view d-flex align-items-center justify-content-center">
                            <img src={Icon2} className="me-1" alt="" />
                            <p>9hr 30min</p>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star"></i>
                            <span className="d-inline-block average-rating">
                              <span>4.0</span> (15)
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
      </div>
      {/* Page Wrapper */}
      <Footer />
    </div>
  );
}
