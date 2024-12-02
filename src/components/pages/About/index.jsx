import { Link } from "react-router-dom";
import { CountFour, HomeRightBottom, Skill1, CountTwo, CountOne, CountThree, Skills03, Skills01, Skills02, SkillsIcon02, SkillsIcon01, SkillsIcon03, MapUser } from "../../imagepath";
import { Footer3 } from "../../footer3";
import Header from "../../header";
import CountUp from "react-countup";

function index() {
    return (<>

        <div className="main-wrapper">
            <Header activeMenu="Cart" />


            <section className="growup-section">
                <div className="home-two-shapes">
                    <img src={HomeRightBottom} alt="" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-xl-6 col-lg-6 col-md-5 col-12"
                            data-aos="fade-right"
                        >
                            <div className="growup-images-two">
                                <div className="growup-skills-img">
                                    <img
                                        className=""
                                        src={Skill1}
                                        alt="image-banner"
                                        title="image-banner"
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-xl-6 col-lg-6 col-md-7 col-12 wow fadeInLeft"
                            data-aos="fade-left"
                        >
                            <div className="header-two-title">
                                <p className="tagline">Growup Your Skill</p>
                                <h2 className="text-navy">Learn Anything you want today</h2>
                                <div className="header-two-text">
                                    <p className="mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quam dolor fermentum massa viverra congue proin. A
                                        volutpat eget ultrices velit nunc orci. Commodo quis
                                        integer a felis ac vel mauris a morbi. Scelerisque nunc
                                        accumsan elementum aenean nisl lacinia. Congue enim
                                        aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                                        ullamcorper morbi amet. Facilisi odio amet, nunc quam ut
                                        nulla purus adipiscing pharetra.
                                    </p>
                                </div>
                            </div>
                            <div className="about-button more-details">
                                <Link to="/register" className="discover-btn">
                                    Join Today <i className="fas fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className= "home-two">

            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 wow fadeInLeft order-lg-1 order-xs-2 order-sm-2"
                            data-aos="fade-up"
                        >
                            <div className="header-two-title">
                                <p className="tagline">Learn with DreamLMS</p>
                                <h2 className="mb-0">
                                    Get Trained By Experts & Professionals around the World
                                </h2>
                            </div>
                            <div className="header-two-title">
                                <p className="about-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quam dolor fermentum massa viverra congue proin. A volutpat
                                    eget ultrices velit nunc orci. Commodo quis integer a felis
                                    ac vel mauris a morbi. Scelerisque nunc accumsan elementum
                                    aenean nisl lacinia. Congue enim aliquet ac vitae turpis.
                                    Neque, bibendum imperdiet sed ullamcorper morbi amet.
                                    Facilisi odio amet, nunc quam ut nulla purus adipiscing
                                    pharetra.
                                </p>
                                <div className="about-button more-details">
                                    <Link to="/course-list" className="discover-btn">
                                        Learn more <i className="fas fa-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-2 order-xs-1 order-sm-1">
                            <div className="stylist-gallery">
                                <div className="row">
                                    <div
                                        className="col-lg-6 col-md-6 col-sm-12 col-12"
                                        data-aos="fade-down"
                                    >
                                        <div className="about-image count-one d-flex align-items-center justify-content-center flex-fill project-details">
                                            <div className="about-count">
                                                <div className="course-img">
                                                    <img src={CountOne} alt="" />
                                                </div>
                                                <div className="count-content-three course-count ms-0">
                                                    <h4>
                                                        <span className="d-flex">
                                                            <CountUp start={0} end={10} delay={1} duration={4} />K
                                                        </span>
                                                    </h4>
                                                    <p className="mb-0">Online Courses</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 col-sm-12 col-12"
                                        data-aos="fade-down"
                                    >
                                        <div className="about-image count-two d-flex align-items-center justify-content-center flex-fill project-details">
                                            <div className="about-count">
                                                <div className="course-img">
                                                    <img src={CountTwo} alt="" />
                                                </div>
                                                <div className="count-content-three course-count ms-0">
                                                    <h4>
                                                        <span className="d-flex">
                                                            <CountUp start={0} end={215} delay={1} />+
                                                            +
                                                        </span>
                                                    </h4>
                                                    <p className="mb-0">Expert Tutors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 col-sm-12 col-12"
                                        data-aos="fade-right"
                                        data-wow-delay="1.5"
                                    >
                                        <div className="about-image count-three d-flex align-items-center justify-content-center flex-fill project-details">
                                            <div className="about-count">
                                                <div className="course-img">
                                                    <img src={CountThree} alt="" />
                                                </div>
                                                <div className="count-content-three course-count ms-0">
                                                    <h4>
                                                        <span className="d-flex">
                                                            <CountUp start={0} end={10} delay={1} duration={4} />K
                                                        </span>
                                                    </h4>
                                                    <p className="mb-0">Ceritified Courses</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 col-sm-12 col-12"
                                        data-aos="fade-left"
                                        data-wow-delay="0.5"
                                    >
                                        <div className="about-image count-four d-flex align-items-center justify-content-center flex-fill project-details">
                                            <div className="about-count">
                                                <div className="course-img">
                                                    <img src={CountFour} alt="" />
                                                </div>
                                                <div className="count-content-three course-count ms-0">
                                                    <h4>
                                                        <span className="d-flex">
                                                            <CountUp start={0} end={10} delay={1} duration={4} />K
                                                        </span>
                                                    </h4>
                                                    <p className="mb-0">Online Students</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            <section className="master-skills-sec">
                <div className="container">
                    <div className="header-two-title text-center" data-aos="fade-up">
                        <p className="tagline">What’s New</p>
                        <h2>Master the skills to drive your career</h2>
                        <div className="header-two-text" data-aos="fade-up">
                            <p className="mb-0">
                                Get certified, master modern tech skills, and level up your
                                career — whether you’re starting out or a seasoned pro. 95% of
                                eLearning learners report our hands-on content directly helped
                                their careers.
                            </p>
                        </div>
                    </div>
                    {/* Course Info */}
                    <div className="course-info-two">
                        <div className="row align-items-center">
                            {/* Master Skills Content */}
                            <div
                                className="col-lg-6 col-md-12 order-lg-0 order-md-0 order-0"
                                data-aos="fade-up"
                            >
                                <div className="join-title-one">
                                    <h2>Award Winning Course Management</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quam dolor fermentum massa viverra congue proin. A
                                        volutpat eget ultrices velit nunc orci. Commodo quis
                                        integer a felis ac vel mauris a morbi. Scelerisque nunc
                                        accumsan elementum aenean nisl lacinia. Congue enim
                                        aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                                        ullamcorper morbi amet. Facilisi odio amet, nunc quam ut
                                        nulla purus adipiscing pharetra.
                                    </p>
                                </div>
                            </div>
                            {/* Master Skills Content */}

                            {/* Master Skills Image */}
                            <div
                                className="col-lg-6 col-md-12 order-lg-1 order-md-1 order-1"
                                data-aos="fade-up"
                            >
                                <div className="join-mentor-img">
                                    <div className="winning-two-one">
                                        <img src={Skills01} alt="" className="img-fluid" />
                                    </div>
                                    <div className="joing-icon-award">
                                        <img
                                            src={SkillsIcon01}
                                            alt=""
                                            className="joing-icon-one img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Master Skills Image */}

                            {/* Master Skills Content */}
                            <div
                                className="col-xl-6 col-lg-7 col-md-12 order-lg-2 order-md-3 order-3 joinPos"
                                data-aos="fade-up"
                            >
                                <div className="join-mentor-img">
                                    <div className="winning-two-two">
                                        <img src={Skills02} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="joing-icon-award">
                                    <img
                                        src={SkillsIcon02}
                                        alt=""
                                        className="joing-icon-two img-fluid"
                                    />
                                </div>
                            </div>
                            {/* Master Skills Content */}

                            {/* Master Skills Image */}
                            <div
                                className="col-xl-6 col-lg-5 col-md-12 order-lg-3 order-md-2 order-2"
                                data-aos="fade-up"
                            >
                                <div className="join-title-middle">
                                    <h2>Award Winning Course Management</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quam dolor fermentum massa viverra congue proin. A
                                        volutpat eget ultrices velit nunc orci. Commodo quis
                                        integer a felis ac vel mauris a morbi. Scelerisque nunc
                                        accumsan elementum aenean nisl lacinia. Congue enim
                                        aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                                        ullamcorper morbi amet. Facilisi odio amet, nunc quam ut
                                        nulla purus adipiscing pharetra.
                                    </p>
                                </div>
                            </div>
                            {/* Master Skills Image */}

                            {/* Master Skills Content */}
                            <div
                                className="col-xl-6 col-lg-7 col-md-12 order-lg-4 order-md-4 order-4"
                                data-aos="fade-up"
                            >
                                <div className="join-title-one">
                                    <h2>Certification for solid development of your Carrer</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quam dolor fermentum massa viverra congue proin. A
                                        volutpat eget ultrices velit nunc orci. Commodo quis
                                        integer a felis ac vel mauris a morbi. Scelerisque nunc
                                        accumsan elementum aenean nisl lacinia. Congue enim
                                        aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                                        ullamcorper morbi amet. Facilisi odio amet, nunc quam ut
                                        nulla purus adipiscing pharetra.
                                    </p>
                                </div>
                            </div>
                            {/* Master Skills Content */}

                            {/* Master Skills Image */}
                            <div
                                className="col-xl-6 col-lg-5 col-md-12 order-lg-5 order-md-5 order-5 joinPos"
                                data-aos="fade-up"
                            >
                                <div className="join-mentor-img mb-0">
                                    <div className="winning-two-three">
                                        <img src={Skills03} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="joing-icon-award">
                                    <img
                                        src={SkillsIcon03}
                                        alt=""
                                        className="joing-icon-three img-fluid"
                                    />
                                </div>
                            </div>
                            {/* Master Skills Image */}
                        </div>
                    </div>
                    {/* Course Info */}
                </div>
            </section>
            <section className="testimonial-sec mt-5 mb-5">
                <div className="container">
                    <div className="testimonial-two-img">
                        <img src={MapUser} alt="" className="img-fluid" />
                    </div>
                    <div className="testimonial-subhead-two">
                        <div
                            className="col-xl-8 col-lg-10 col-md-10 mx-auto"
                            data-aos="fade-down"
                        >
                            <div className="testimonial-inner">
                                <div className="header-two-title testimonial-head-two text-center">
                                    <h2 data-aos="fade-down">
                                        Join over <span>5 Million</span> Students
                                    </h2>
                                    <div className="header-two-text text-center">
                                        <p>
                                            Get certified, master modern tech skills, and level up
                                            your career — whether you’re starting out or a seasoned
                                            pro. 95% of eLearning learners report our hands-on
                                            content directly helped their careers.
                                        </p>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-md-4 col-sm-12" data-aos="fade-up">
                                        <div className="course-count-two course-count">
                                            <h4>
                                                <span className="counterUp text-orange"><CountUp start={0} end={253085} delay={0} /></span>
                                            </h4>
                                            <h5>Students Enrolled</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12" data-aos="fade-up">
                                        <div className="course-count-two  course-count">
                                            <h4>
                                                <span className="counterUp text-green"> <CountUp start={0} end={1205} delay={0.2} duration={2} /></span>
                                            </h4>
                                            <h5>Total Courses</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12" data-aos="fade-up">
                                        <div className="course-count-two  course-count">
                                            <h4>
                                                <span className="counterUp text-blue"><CountUp start={0} end={253085} delay={0} /></span>
                                            </h4>
                                            <h5>Students Worldwide</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="home-three">

                <Footer3 />
            </div>
        </div>
    </>);
}

export default index;