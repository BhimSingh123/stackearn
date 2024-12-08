import React, { useEffect, useState } from "react";
import {
    AddressIcon,
    CoursesIcon,
    EmailIcon,
    PhoneIcon,
    ProfileAvatar,
    ReviewIcon,
    TtlStudIcon,
    User1,
} from "../../imagepath";
import { Link, useParams } from "react-router-dom";
import SubDashboard from "../components/SubDashboard";
import Listing from "../../Api/Listing";

export default function ProfileId() {
    const { id } = useParams()

    const [Regs, setRegs] = useState({
        id: id
    });
    useEffect(() => (
        setRegs(id)
    ), [Regs])
    console.log("id", id)
    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

    console.log("listing", listing)
    const ProfileData = async () => {
        setLoading(true);

        try {
            const main = new Listing();
            const response = await main.userprfileget(Regs);
            console.log("response", response);
            setListing(response?.data);
        } catch (error) {
            console.error("Error fetching profile data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        ProfileData();
    }, []);
    return (
        <>

            <div className="main-wrapper">
                {/* Breadcrumb */}
                <SubDashboard />
                {loading ? (
                    <>
                    </>
                ) : (
                    <>

                        <div
                            className="page-banner  instructor-bg-blk md-flex align-items-center"
                        >
                            <div className="container mt-4">
                                <div className="row">
                                    <div className="col-md-12 col-12 ">
                                        <div className="profile-info-blk">
                                            <Link to="#" className="profile-info-img">
                                                <img src={ProfileAvatar} alt="" className="img-fluid" />
                                            </Link>
                                            <h4>
                                                <Link to="#">{listing?.user?.name}</Link>
                                                <span>Beginner</span>
                                            </h4>
                                            <p>User</p>
                                            <ul className="list-unstyled inline-inline profile-info-social">
                                                <li className="list-inline-item">
                                                    <Link to={listing?.social?.facebook}>
                                                        <i className="fa-brands fa-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to={listing?.social?.twitter}>
                                                        <i className="fa-brands fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to={listing?.social?.website
                                                    }>
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to={listing?.social?.linkedin}>
                                                        <i className="fa-brands fa-linkedin"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Breadcrumb */}
                        {/* Course Content */}
                        <section className="page-content course-sec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        {/* Overview */}
                                        <div className="card overview-sec">
                                            <div className="card-body">
                                                <h5 className="subs-title">About Me</h5>
                                                <p>
                                                    {listing?.profile?.bio}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Overview */}

                                        {/* Education Content */}
                                        <div className="card education-sec">
                                            <div className="card-body">
                                                <h5 className="subs-title">Designation
                                                </h5>
                                                <div className="edu-wrap">
                                                    <div className="edu-detail">
                                                        <p>
                                                            {listing?.profile?.designation
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Education Content */}

                                        {/* Experience Content */}
                                        <div className="card education-sec">
                                            <div className="card-body">
                                                <h5 className="subs-title">Experience</h5>
                                                <div className="edu-wrap">
                                                    <div className="edu-name">
                                                        <span>B</span>
                                                    </div>
                                                    <div className="edu-detail">
                                                        <h6>Web Design & Development Team Leader</h6>
                                                        <p className="edu-duration">
                                                            Creative Agency - (2013 - 2016)
                                                        </p>
                                                        <p>
                                                            There are many variations of passages of available, but
                                                            the majority alteration in some form. As a highly
                                                            skilled and successfull product development and design
                                                            specialist with more than 4 Years of My experience.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="edu-wrap">
                                                    <div className="edu-name">
                                                        <span>M</span>
                                                    </div>
                                                    <div className="edu-detail">
                                                        <h6>Project Manager</h6>
                                                        <p className="edu-duration">
                                                            Jobcy Technology Pvt.Ltd - (Pressent)
                                                        </p>
                                                        <p>
                                                            There are many variations of passages of available, but
                                                            the majority alteration in some form. As a highly
                                                            skilled and successfull product development and design
                                                            specialist with more than 4 Years of My experience.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Reviews */}
                                        <div className="card review-sec">
                                            <div className="card-body">
                                                <h5 className="subs-title">Reviews</h5>
                                                <div className="review-item">
                                                    <div className="instructor-wrap border-0 m-0">
                                                        <div className="about-instructor">
                                                            <div className="abt-instructor-img">
                                                                <Link to="instructor-profile">
                                                                    <img src={User1} alt="img" className="img-fluid" />
                                                                </Link>
                                                            </div>
                                                            <div className="instructor-detail">
                                                                <h5>
                                                                    <Link to="instructor-profile">
                                                                        Nicole Brown
                                                                    </Link>
                                                                </h5>
                                                                <p>UX/UI Designer</p>
                                                            </div>
                                                        </div>
                                                        <div className="rating">
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p className="rev-info">
                                                        “ This is the second Photoshop course I have completed
                                                        with Cristian. Worth every penny and recommend it highly.
                                                        To get the most out of this course, its best to to take
                                                        the Beginner to Advanced course first. The sound and video
                                                        quality is of a good standard. Thank you Cristian. “
                                                    </p>
                                                    <Link to="#" className="btn btn-reply">
                                                        <i className="feather-corner-up-left"></i> Reply
                                                    </Link>
                                                </div>
                                                <div className="review-item">
                                                    <div className="instructor-wrap border-0 m-0">
                                                        <div className="about-instructor">
                                                            <div className="abt-instructor-img">
                                                                <Link to="instructor-profile">
                                                                    <img src={User1} alt="img" className="img-fluid" />
                                                                </Link>
                                                            </div>
                                                            <div className="instructor-detail">
                                                                <h5>
                                                                    <Link to="instructor-profile">
                                                                        Nicole Brown
                                                                    </Link>
                                                                </h5>
                                                                <p>UX/UI Designer</p>
                                                            </div>
                                                        </div>
                                                        <div className="rating">
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p className="rev-info">
                                                        “ This is the second Photoshop course I have completed
                                                        with Cristian. Worth every penny and recommend it highly.
                                                        To get the most out of this course, its best to to take
                                                        the Beginner to Advanced course first. The sound and video
                                                        quality is of a good standard. Thank you Cristian. “
                                                    </p>
                                                    <Link to="#" className="btn btn-reply">
                                                        <i className="feather-corner-up-left"></i> Reply
                                                    </Link>
                                                </div>
                                                <div className="review-item">
                                                    <div className="instructor-wrap border-0 m-0">
                                                        <div className="about-instructor">
                                                            <div className="abt-instructor-img">
                                                                <Link to="instructor-profile">
                                                                    <img src={User1} alt="img" className="img-fluid" />
                                                                </Link>
                                                            </div>
                                                            <div className="instructor-detail">
                                                                <h5>
                                                                    <Link to="instructor-profile">
                                                                        Nicole Brown
                                                                    </Link>
                                                                </h5>
                                                                <p>UX/UI Designer</p>
                                                            </div>
                                                        </div>
                                                        <div className="rating">
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p className="rev-info">
                                                        “ This is the second Photoshop course I have completed
                                                        with Cristian. Worth every penny and recommend it highly.
                                                        To get the most out of this course, its best to to take
                                                        the Beginner to Advanced course first. The sound and video
                                                        quality is of a good standard. Thank you Cristian. “
                                                    </p>
                                                    <Link to="#" className="btn btn-reply">
                                                        <i className="feather-corner-up-left"></i> Reply
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reviews */}

                                        {/* Comment */}
                                        {/* comment */}
                                    </div>

                                    <div className="col-lg-4">
                                        {/* Right Sidebar Tags Label */}
                                        <div className="card overview-sec">
                                            <div className="card-body">
                                                <h5 className="subs-title">Bank  Details</h5>
                                                <div className="contact-info-list">
                                                    <div className="edu-wrap">
                                                        <div className="edu-name">
                                                            <span>
                                                                <img src={EmailIcon} alt="Address" />
                                                            </span>
                                                        </div>
                                                        <div className="edu-detail">
                                                            <h6>Account Holder Name </h6>
                                                            <p>
                                                                <Link to="#">{listing?.BankData?.BankName
                                                                }</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="edu-wrap">
                                                        <div className="edu-name">
                                                            <span>
                                                                <img src={AddressIcon} alt="Address" />
                                                            </span>
                                                        </div>
                                                        <div className="edu-detail">
                                                            <h6>Account Number</h6>
                                                            <p>{listing?.BankData?.BankNumber}</p>
                                                        </div>
                                                    </div>

                                                    <div className="edu-wrap">
                                                        <div className="edu-name">
                                                            <span>
                                                                <img src={AddressIcon} alt="Address" />
                                                            </span>
                                                        </div>
                                                        <div className="edu-detail">
                                                            <h6>IFSC Code </h6>
                                                            <p>{listing?.BankData?.IFSC}</p>
                                                        </div>
                                                    </div>
                                                    <div className="edu-wrap">
                                                        <div className="edu-name">
                                                            <span>
                                                                <img src={PhoneIcon} alt="Address" />
                                                            </span>
                                                        </div>
                                                        <div className="edu-detail">
                                                            <h6>Branch Name</h6>
                                                            <p>
                                                                {" "}
                                                                <Link to="#">{listing?.BankData?.BranchName} </Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Right Sidebar Tags Label */}

                                        {/* Right Sidebar Profile Overview */}
                                        <div className="card overview-sec">
                                            <div className="card-body">
                                                <h5 className="subs-title">Profile Overview</h5>
                                                <div className="rating-grp">
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
                                                    <div className="course-share d-flex align-items-center justify-content-center">
                                                        <Link to="#rate">
                                                            <i className="fa-regular fa-heart"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="profile-overview-list">
                                                    <div className="list-grp-blk d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={CoursesIcon} alt="Courses" />
                                                        </div>
                                                        <div className="list-content-blk flex-grow-1 ms-3">
                                                            <h5>32</h5>
                                                            <p>Courses</p>
                                                        </div>
                                                    </div>
                                                    <div className="list-grp-blk d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={TtlStudIcon} alt="Total Students" />
                                                        </div>
                                                        <div className="list-content-blk flex-grow-1 ms-3">
                                                            <h5>11,604</h5>
                                                            <p>Total Students</p>
                                                        </div>
                                                    </div>
                                                    <div className="list-grp-blk d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={ReviewIcon} alt="Reviews" />
                                                        </div>
                                                        <div className="list-content-blk flex-grow-1 ms-3">
                                                            <h5>12,230</h5>
                                                            <p>Reviews</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Right Sidebar Profile Overview */}

                                        {/* Right Contact Details */}
                                        <div className="card overview-sec">
                                            <div className="card-body">
                                                <h5 className="subs-title">Contact Details</h5>
                                                <div className="contact-info-list">
                                                    <div className="edu-wrap">
                                                        <div className="edu-name">
                                                            <span>
                                                                <img src={EmailIcon} alt="Address" />
                                                            </span>
                                                        </div>
                                                        <div className="edu-detail">
                                                            <h6>Email</h6>
                                                            <p>
                                                                <Link to="#">{listing?.user?.email
                                                                }</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="edu-wrap">
                                                        <div className="edu-name">
                                                            <span>
                                                                <img src={AddressIcon} alt="Address" />
                                                            </span>
                                                        </div>
                                                        <div className="edu-detail">
                                                            <h6>Address</h6>
                                                            <p>{listing?.profile?.address}</p>
                                                        </div>
                                                    </div>
                                                    <div className="edu-wrap">
                                                        <div className="edu-name">
                                                            <span>
                                                                <img src={PhoneIcon} alt="Address" />
                                                            </span>
                                                        </div>
                                                        <div className="edu-detail">
                                                            <h6>Phone</h6>
                                                            <p>
                                                                {" "}
                                                                <Link to="#">{listing?.user?.phone_code} {listing?.user?.phone_number}</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Right Contact Details */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* Course Content */}

            </div>
        </>
    );
}
