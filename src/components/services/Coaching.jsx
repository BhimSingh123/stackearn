import { Link } from "react-router-dom";
import { Footer3 } from "../footer3";
import Header from "../header";
import Select from "react-select";
import { TopCategories2 } from "../home3/slider/topCategories";
import {
    Career,
    Career01,
    Career02,
    Career03,
    Pattern01,
    HomeMain,
    Career04,
    HomeSlider,
} from "../imagepath";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

function Coaching() {

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    const options = [
        { label: "Select category", value: "category" },
        { label: "Angular", value: "Angular" },
        { label: "Node Js", value: "Node Js" },
        { label: "React", value: "React" },
        { label: "Python", value: "Python" },
    ];

    const mobileSidebar = useSelector(
        (state) => state.sidebarSlice.expandMenu
    );
    const [setValue] = useState(null);
    useEffect(() => {
        document.body.className = "home-three";

        return () => {
            document.body.className = "";
        };
    }, []);
    const style = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: mobileSidebar === 'disabled' ? "#f7f7f7f7" : "#2b2838",
            width: "100%",
            height: "56px",
            minHeight: "56px",
            border: state.isFocused ? 0 : 0,
            paddingLeft: "5px",
            // This line disable the blue border
            boxShadow: state.isFocused ? 0 : 0,
            // borderRadius: state.isSelected ? "0" : "10px",
            fontSize: "14px",
            "&:hover": {
                border: state.isFocused ? 0 : 0,
                color: "black",
            },
            outline: "none",
        }),
        menu: (base) => ({
            ...base,
            marginTop: "0px",
            borderRadius: "0",
            hyphens: "auto",
            width: "max-content",
            minWidth: "100%",
        }),
        menuList: (base) => ({ ...base, padding: "0" }),
        option: (provided) => ({
            ...provided,
            backgroundColor: mobileSidebar === 'disabled' ? "#fff" : "#000",
            color: mobileSidebar === 'disabled' ? '#000' : '#fff',
            fontSize: "14px",
            "&:hover": {
                backgroundColor: mobileSidebar === 'disabled' ? "#FFDEDA" : "#2b2838",
            },
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: "0 6px",
        }),
        indicatorSeparator: (base) => ({
            ...base,
            display: "none",
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
            transition: "250ms",
        }),
    };


    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (<>

        <div className="main-wrapper">
            <Header />
            <div className="home-three">

                <section
                    className="home-three-slide d-flex align-items-center"
                    style={{ backgroundImage: mobileSidebar === 'disabled' && "url(" + HomeMain + ")" }}
                >
                    <div className="container">
                        <div className="row ">
                            <div
                                className="col-xl-6 col-lg-8 col-md-12 col-12"
                                data-aos="fade-down"
                            >
                                <div className="home-three-slide-face">
                                    <div className="home-three-slide-text">
                                        <h5>The Leader in Online Learning</h5>
                                        <h1>
                                            Engaging <span>&</span> Accessible Online Courses For All
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Eget aenean accumsan bibendum gravida maecenas augue
                                            elementum et
                                        </p>
                                    </div>
                                    <div className="banner-three-content">
                                        <form className="form" action="course-list">
                                            <div className="form-inner-three">
                                                <div
                                                    className="input-group"
                                                // style={{ backgroundImage: `url(${})` }}
                                                >
                                                    {/* <img className="buildingSvg" src={BuildingSvg} alt="" /> */}
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Search School, Online eductional centers, etc"
                                                    />
                                                    <span className="drop-detail-three">
                                                        <Select
                                                            options={options}
                                                            value={options.value}
                                                            defaultValue={options[0]}
                                                            placeholder="Category"
                                                            onChange={setValue}
                                                            styles={style}
                                                        ></Select>
                                                    </span>
                                                    <button
                                                        className="btn btn-three-primary sub-btn"
                                                        type="submit"
                                                    >
                                                        <i className="fas fa-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-6 col-lg-4 col-md-6 col-12"
                                data-aos="fade-up"
                            >
                                <div className="girl-slide-img aos">
                                    <img className="img-fluid" src={HomeSlider} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="master-skill-three">
                    <div className="master-three-vector">
                        <img className="ellipse-right img-fluid" src={Pattern01} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12" data-aos="fade-right">
                                <div className="master-three-images">
                                    <div className="master-three-left">
                                        <img
                                            className="img-fluid"
                                            src={Career}
                                            alt="image-banner"
                                            title="image-banner"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12" data-aos="fade-left">
                                <div className="home-three-head" data-aos="fade-up">
                                    <h2>Master the skills to drive your career</h2>
                                </div>
                                <div className="home-three-content" data-aos="fade-up">
                                    <p>
                                        Get certified, master modern tech skills, and level up your
                                        career whether you’re starting out or a seasoned pro. 95% of
                                        eLearning learners report our hands-on content directly helped
                                        their careers.
                                    </p>
                                </div>
                                <div className="skils-group">
                                    <div className="row">
                                        <div
                                            className="col-lg-6 col-xs-12 col-sm-6"
                                            data-aos="fade-down"
                                        >
                                            <div className="skils-icon-item">
                                                <div className="skils-icon">
                                                    <img
                                                        className="img-fluid"
                                                        src={Career01}
                                                        alt="certified"
                                                    />
                                                </div>
                                                <div className="skils-content">
                                                    <p className="mb-0">
                                                        Get certified with 100+ certification courses
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-lg-6 col-xs-12 col-sm-6"
                                            data-aos="fade-up"
                                        >
                                            <div className="skils-icon-item">
                                                <div className="skils-icon">
                                                    <img
                                                        className="img-fluid"
                                                        src={Career02}
                                                        alt="Build skills"
                                                    />
                                                </div>
                                                <div className="skils-content">
                                                    <p className="mb-0">
                                                        Build skills your way, from labs to courses
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-lg-6 col-xs-12 col-sm-6"
                                            data-aos="fade-right"
                                        >
                                            <div className="skils-icon-item">
                                                <div className="skils-icon">
                                                    <img
                                                        className="img-fluid"
                                                        src={Career03}
                                                        alt="Stay Motivated"
                                                    />
                                                </div>
                                                <div className="skils-content">
                                                    <p className="mb-0">
                                                        Stay motivated with engaging instructors
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-lg-6 col-xs-12 col-sm-6"
                                            data-aos="fade-left"
                                        >
                                            <div className="skils-icon-item">
                                                <div className="skils-icon">
                                                    <img
                                                        className="img-fluid"
                                                        src={Career04}
                                                        alt="latest cloud"
                                                    />
                                                </div>
                                                <div className="skils-content">
                                                    <p className="mb-0">Keep up with the latest in cloud</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-three-favourite">
                    <div className="container">
                        <div className="row">
                            <div className="container">
                                <div
                                    className="home-three-head section-header-title"
                                    data-aos="fade-up"
                                >
                                    <div className="row align-items-center d-flex justify-content-between">
                                        <div className="col-lg-8 col-sm-12">
                                            <h2>Choose favourite Course from top Category</h2>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <div className="see-all">
                                                <Link to="/course-details">
                                                    See all
                                                    <span className="see-all-icon">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <TopCategories2 />
                            </div>
                        </div>
                        {/* Favorite Course */}
                    </div>
                </section>

            </div>

          
            <div className="home-three">
                <Footer3 />
            </div>
        </div>
    </>);
}

export default Coaching;