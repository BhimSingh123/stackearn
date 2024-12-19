import React, { useEffect, useState } from "react";

import Header from "../header";
import Select from "react-select";
import { useSelector } from "react-redux";
import { Icon22, Icon24 } from '../imagepath';
import { Link } from 'react-router-dom';

import {
    HomeMain,
    shape1,
    shape2,
    shape3,
    shape4,
} from "../imagepath";
import { Footer4 } from "../footer4";
import Listing from "../Api/Listing";
import LoadingPage from "../../LoadingPage";
function Index() {
    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);
  
    console.log("listing", listing ,loading)
  
    const fetchMarketLists = async () => {
      setLoading(true);
      try {
        const main = new Listing();
        const response = await main.courseGet();
        console.log("response",response)
        setListing(response?.data?.data?.Courseget
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
  
    const options = [
        { label: "Select Category", value: "Category" },
        { label: "Category One", value: "Category1" },
        { label: "Category Two", value: "Category2" },
    ];

    const mobileSidebar = useSelector(
        (state) => state.sidebarSlice.expandMenu
    );
    useEffect(() => {
        document.body.className = "home-two";

        return () => {
            document.body.className = "";
        };
    }, []);

    // Select Option
    const [setValue] = useState(null);
    const style = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: mobileSidebar === 'disabled' ? "white" : "#2b2838",
            border: state.isFocused ? 0 : 0,
            paddingLeft: "5px",
            marginTop: "1px",
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
            backgroundColor: mobileSidebar === 'disabled' ? "#fff" : "#000",
            color: mobileSidebar === 'disabled' ? '#000' : '#fff',
            fontSize: "14px",
            "&:hover": {
                backgroundColor: mobileSidebar === 'disabled' ? "#FFDEDA" : "#2b2838",
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
    return (<>
        <div className="main-wrapper">

            <Header />

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

            {/* Home banner */}
            <section className="course-content">
                <div className="container mt-4">
                    <div className="row">
                        {loading ? (
                            <LoadingPage/>
                        ) :(

                            <div className="col-lg-12 col-md-12">
                                <div className="row">
                                    {listing &&  listing((item,index)=>(
    
                                    <div className="col-md-4 col-sm-12" key={index}>
                                        {/* Blog Post */}
                                        <div className="blog grid-modern">
                                            <div className="blog-image">
                                                <Link to="/blog-details">
                                                    <img
                                                        className="img-fluid"
                                                        src={item.courseImage||""}
                                                        alt={item.title}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="blog-modern-box">
                                                <h3 className="blog-title">
                                                    <Link to="/blog-details">
                                                    {item.title || "Course Title"}
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
                                                                Programming, Angular
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
                                            <li className="page-item prev">
                                                <Link
                                                    className="page-link"
                                                    to=" #"
    
                                                >
                                                    <i className="fas fa-angle-left" />
                                                </Link>
                                            </li>
                                            <li className="page-item first-page active">
                                                <Link className="page-link" to=" #">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to=" #">
                                                    2
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to=" #">
                                                    3
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to=" #">
                                                    4
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to=" #">
                                                    5
                                                </Link>
                                            </li>
                                            <li className="page-item next">
                                                <Link className="page-link" to=" #">
                                                    <i className="fas fa-angle-right" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* /Blog pagination */}
                            </div>
                        ) }
                    </div>
                </div>
            </section>
            <Footer4/>
        </div>
    </>);
}

export default Index;