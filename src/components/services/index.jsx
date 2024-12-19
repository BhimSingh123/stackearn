import React, { useEffect, useState } from "react";
import Header from "../header";
import Select from "react-select";
import { useSelector } from "react-redux";
import { Icon22, Icon24 } from "../imagepath";
import { Link } from "react-router-dom";

import { HomeMain, shape1, shape2, shape3, shape4 } from "../imagepath";
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

  const options = [
    { label: "Select Category", value: "Category" },
    { label: "Category One", value: "Category1" },
    { label: "Category Two", value: "Category2" },
  ];

  const mobileSidebar = useSelector((state) => state.sidebarSlice.expandMenu);

  useEffect(() => {
    document.body.className = "home-two";
    return () => {
      document.body.className = "";
    };
  }, []);

  const [setValue] = useState(null);

  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: mobileSidebar === "disabled" ? "white" : "#2b2838",
      border: state.isFocused ? 0 : 0,
      paddingLeft: "5px",
      marginTop: "1px",
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        color: "black",
      },
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "2px" }),
    option: (provided) => ({
      ...provided,
      backgroundColor: mobileSidebar === "disabled" ? "#fff" : "#000",
      color: mobileSidebar === "disabled" ? "#000" : "#fff",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: mobileSidebar === "disabled" ? "#FFDEDA" : "#2b2838",
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen
        ? "rotate(-180deg)"
        : "rotate(0)",
      transition: "250ms",
    }),
  };

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

        <section className="course-content">
          <div className="container mt-4">
            <div className="row">
              {loading ? (
                <LoadingPage />
              ) : (
                <div className="col-lg-12 col-md-12">
                  <div className="row">
                    {listing.map((item, index) => (
                      <div className="col-md-4 col-sm-12" key={index}>
                        {/* Blog Post */}
                        <div className="blog grid-modern">
                          <div className="blog-image">
                            <Link to={`/course-details/${item?._id}`}>
                              <img
                                className="img-fluid"
                                src={item?.courseImage || ""}
                                alt={item?.title || "Course Image"}
                              />
                            </Link>
                          </div>
                          <div className="blog-modern-box">
                            <h3 className="blog-title">
                              <Link to={`/course-details/${item?._id}`}>
                                {item?.title || "Course Title"}
                              </Link>
                            </h3>
                            <div className="blog-info clearfix mb-0">
                              <div className="post-left">
                                <ul>
                                  <li>
                                    <img
                                      className="img-fluid"
                                      src={Icon22}
                                      alt=""
                                    />
                                    {item?.createdAt}
                                  </li>
                                  <li>
                                    <img
                                      className="img-fluid"
                                      src={Icon24}
                                      alt=""
                                    />
                                    {item?.category || "General Category"}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Blog Post */}
                      </div>
                    ))}
                  </div>
                  {/* Blog pagination */}
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="pagination lms-page">
                        {/* Pagination */}
                      </ul>
                    </div>
                  </div>
                  {/* /Blog pagination */}
                </div>
              )}
            </div>
          </div>
        </section>
        <Footer4 />
      </div>
    </>
  );
}

export default Index;
