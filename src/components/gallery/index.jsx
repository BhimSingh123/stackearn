import { Link } from "react-router-dom";
import Header from "../header";
import Select from "react-select";

import {
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
  } from "../imagepath";

  import {
    HomeMain,
    shape1,
    shape2,
    shape3,
    shape4,
  } from "../imagepath";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Footer4 } from "../footer4";

function Index() {
    const mobileSidebar = useSelector(
        (state) => state.sidebarSlice.expandMenu
      );
      useEffect(() => {
        document.body.className = "home-two";
    
        return () => {
          document.body.className = "";
        };
      }, []);

      
const options = [
    { label: "Select Category", value: "Category" },
    { label: "Category One", value: "Category1" },
    { label: "Category Two", value: "Category2" },
  ];

      const [setValue] = useState(null);
      const style = {
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor:mobileSidebar === 'disabled' ? "white":"#2b2838",
          border: state.isFocused ? 0 : 0,
          paddingLeft: "5px",
          marginTop:"1px",
          // This line disable the blue border
          boxShadow: state.isFocused ? 0 : 0,
          borderRadius: state.isSelected ? "0" : "10px",
          fontSize: "14px",
          "&:hover": {
            border: state.isFocused ? 0 : 0,
            color: "black",
          },
          // borderRadius: "50px" ,
          outline: "none",
        }),
        menu: (base) => ({ ...base, marginTop: "2px" }),
        option: (provided) => ({
          ...provided,
          backgroundColor:  mobileSidebar === 'disabled' ? "#fff" : "#000",
          color:mobileSidebar === 'disabled'? '#000':'#fff',
          fontSize: "14px",
          "&:hover": {
            backgroundColor:mobileSidebar === 'disabled'? "#FFDEDA":"#2b2838",
          },
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: "none",
        }),
        dropdownIndicator: (base, state) => ({
          ...base,
          color: "black",
          transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
          transition: "250ms",
        }),
      };
    
    return (
        <div className="main-wrapper">
            <Header activeMenu="Cart" />
         
            <section
          className="home-two-slide d-flex align-items-center"
          style={{ backgroundImage: mobileSidebar === 'disabled' && "url(" + HomeMain + ")" }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-lg-8 col-12" data-aos="fade-up">
                <div className="home-slide-face">
                  <div className="home-slide-text ">
                    <h5>The Leader in Online Learning</h5>
                    <h1>Engaging & Accessible Online Courses For All</h1>
                  </div>
                  <div className="banner-content">
                    <form
                      className="form"
                      name="store"
                      id="store"
                      method="post"
                      action="course-list"
                    >
                      <div className="form-inner">
                        <div className="input-group">
                          <span className="drop-detail">
                            <Select
                              options={options}
                              value={options.value}
                              defaultValue={options[0]}
                              placeholder="Select Category"
                              onChange={setValue}
                              styles={style}
                            ></Select>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Search School, Online eductional centers, etc"
                          />
                          <button
                            className="btn sub-btn"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="trust-user-two">
                    <p>Trusted by over 15K Users worldwide since 2024</p>
                    <div className="rating-two">
                      <span>4.4</span>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Shapes  */}
            <div className="shapes">
              <img className="shapes-one" src={shape1} alt="" />
              <img className="shapes-two" src={shape2} alt="" />
              <img className="shapes-middle" src={shape3} alt="" />
              <img
                className="shapes-four wow animate__animated animate__slideInLeft"
                src={shape4}
                alt=""
              />
            </div>
            {/* Shapes */}
          </div>
        </section>
            <div className="home-three">
                <section className="gallery-three">
                    <div className="container">
                        <div
                            className="home-three-head section-header-title"
                            data-aos="fade-up"
                        >
                            <div className="row align-items-center d-flex justify-content-between">
                                <div className="col-lg-6 col-sm-12">
                                    <h2>Courses taught by real instructor</h2>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="see-all">
                                        <Link to="/instructor/instructor-list">
                                            See all
                                            <span className="see-all-icon">
                                                <i className="fas fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="courses-gallery-three">
                            <div className="row">
                                {/* Col */}
                                <div className="col-lg-5 col-md-5">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-7">
                                            <div className="gallery-three-img-item">
                                                <div className="content-three-main">
                                                    <div className="gallery-img">
                                                        <img src={Gallery1} alt="Instructor" />
                                                    </div>
                                                    <div className="content-three-overlay">
                                                        <div className="content-three-text">
                                                            <div>
                                                                <h6>Patricia</h6>
                                                                <p>Node Js</p>
                                                            </div>
                                                            <div>
                                                                <Link
                                                                    to="/instructor/instructor-list"
                                                                    className="content-three-arrows"
                                                                >
                                                                    <span>
                                                                        <i className="fas fa-arrow-right"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5">
                                            <div className="gallery-three-img-item">
                                                <div className="content-three-main">
                                                    <div className="gallery-img">
                                                        <img src={Gallery2} alt="Instructor" />
                                                    </div>
                                                    <div className="content-three-overlay">
                                                        <div className="content-three-text">
                                                            <div>
                                                                <h6>Patricia</h6>
                                                                <p>Node Js</p>
                                                            </div>
                                                            <div>
                                                                <Link
                                                                    to="/instructor/instructor-list"
                                                                    className="content-three-arrows"
                                                                >
                                                                    <span>
                                                                        <i className="fas fa-arrow-right"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5">
                                            <div className="gallery-three-img-item mb-0">
                                                <div className="content-three-main">
                                                    <div className="gallery-img">
                                                        <img src={Gallery3} alt="Instructor" />
                                                    </div>
                                                    <div className="content-three-overlay">
                                                        <div className="content-three-text">
                                                            <div>
                                                                <h6>Patricia</h6>
                                                                <p>Node Js</p>
                                                            </div>
                                                            <div>
                                                                <Link
                                                                    to="/instructor/instructor-list"
                                                                    className="content-three-arrows"
                                                                >
                                                                    <span>
                                                                        <i className="fas fa-arrow-right"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7">
                                            <div className="gallery-three-img-item mb-0">
                                                <div className="content-three-main">
                                                    <div className="gallery-img">
                                                        <img src={Gallery4} alt="Instructor" />
                                                    </div>
                                                    <div className="content-three-overlay">
                                                        <div className="content-three-text">
                                                            <div>
                                                                <h6>Patricia</h6>
                                                                <p>Node Js</p>
                                                            </div>
                                                            <div>
                                                                <Link
                                                                    to="/instructor/instructor-list"
                                                                    className="content-three-arrows"
                                                                >
                                                                    <span>
                                                                        <i className="fas fa-arrow-right"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Col */}

                                {/* Col */}
                                <div className="col-lg-3 col-md-3">
                                    <div className="gallery-three-img-item mb-0">
                                        <div className="content-three-main">
                                            <div className="gallery-img">
                                                <img src={Gallery5} alt="Instructor" />
                                            </div>
                                            <div className="content-three-overlay">
                                                <div className="content-three-text">
                                                    <div>
                                                        <h6>Patricia</h6>
                                                        <p>Node Js</p>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            to="/instructor/instructor-list"
                                                            className="content-three-arrows"
                                                        >
                                                            <span>
                                                                <i className="fas fa-arrow-right"></i>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Col */}

                                {/* Col */}
                                <div className="col-lg-4 col-md-4">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="gallery-three-img-item">
                                                <div className="content-three-main">
                                                    <div className="gallery-img">
                                                        <img src={Gallery6} alt="Instructor" />
                                                    </div>
                                                    <div className="content-three-overlay">
                                                        <div className="content-three-text">
                                                            <div>
                                                                <h6>Patricia</h6>
                                                                <p>Node Js</p>
                                                            </div>
                                                            <div>
                                                                <Link
                                                                    to="/instructor/instructor-list"
                                                                    className="content-three-arrows"
                                                                >
                                                                    <span>
                                                                        <i className="fas fa-arrow-right"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="gallery-three-img-item mb-0">
                                                <div className="content-three-main">
                                                    <div className="gallery-img">
                                                        <img src={Gallery7} alt="Instructor" />
                                                    </div>
                                                    <div className="content-three-overlay">
                                                        <div className="content-three-text">
                                                            <div>
                                                                <h6>Patricia</h6>
                                                                <p>Node Js</p>
                                                            </div>
                                                            <div>
                                                                <Link
                                                                    to="/instructor/instructor-list"
                                                                    className="content-three-arrows"
                                                                >
                                                                    <span>
                                                                        <i className="fas fa-arrow-right"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="gallery-three-img-item mb-0">
                                                <div className="content-three-main">
                                                    <div className="gallery-img">
                                                        <img src={Gallery8} alt="Instructor" />
                                                    </div>
                                                    <div className="content-three-overlay">
                                                        <div className="content-three-text">
                                                            <div>
                                                                <h6>Patricia</h6>
                                                                <p>Node Js</p>
                                                            </div>
                                                            <div>
                                                                <Link
                                                                    to="/instructor/instructor-list"
                                                                    className="content-three-arrows"
                                                                >
                                                                    <span>
                                                                        <i className="fas fa-arrow-right"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Col */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer4/>
        </div>
    );
}

export default Index;