import React, { useEffect, useState } from "react";
import StudentSidebar from "../sidebar";
import { Link } from "react-router-dom";
import Listing from "../../Api/Listing";
import SubDashboard from "../components/SubDashboard";
import LoadingPage from "../../../LoadingPage";
import AuthLayout from "../AuthLayout";
import { course02 } from "../../imagepath";
import Delete from "../components/Delete";
import { MdModeEditOutline } from "react-icons/md";

const BlogView = () => {

    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);
    console.log("listing", listing)
    const fetchMarketLists = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.BlogGet();
            console.log("response", response)
            setListing(response?.data?.data
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
        <AuthLayout>
            <div className="main-wrapper">

                <SubDashboard title={"Blog History"} className="p-3" />

                {/* Page Content */}
                <div className="page-content mt-5">
                    <div className="container">
                        <div className="row">
                            <StudentSidebar />

                            {loading ? (
                                <LoadingPage />
                            ) : (
                                <div className="col-xl-9 col-lg-9">
                                    <div className="settings-widget card-details">
                                        <div className="settings-menu p-0">
                                            <div className="profile-heading d-flex justify-content-between align-items-center">
                                                <h3>Blog History</h3>
                                                <Link
                                                    className="btn btn-primary"
                                                    to="/admin/blog-add"
                                                >
                                                    Add Blog
                                                </Link>
                                            </div>

                                            <div className="checkout-form pb-0">
                                                <div className="tab-content">
                                                    <div
                                                        className="tab-pane fade show active"
                                                        id="enroll-courses"
                                                    >
                                                        {loading ? (
                                                            <LoadingPage />
                                                        ) : (
                                                            <div className="row">
                                                                {loading ? (
                                                                    <LoadingPage />
                                                                ) : listing.length > 0 ? (
                                                                    listing.map((course, index) => (
                                                                        <div className="col-xxl-4 col-md-6 d-flex" key={index}>
                                                                            <div className="course-box flex-fill">
                                                                                <div className="product">
                                                                                    <div className="product-img ">

                                                                                        <Link to={`/course-details/${course.id}`}>
                                                                                            <img
                                                                                                className="img-fluid"
                                                                                                alt={course.title}
                                                                                                src={course.image || course02} // Fallback if no image is provided
                                                                                            />
                                                                                        </Link>
                                                                                    </div>
                                                                                    <div className="product-content">
                                                                                        <h3 className="title instructor-text">
                                                                                            <Link to={`/course-details/${course.id}`}>
                                                                                                {course.title || "Course Title"}
                                                                                            </Link>
                                                                                        </h3>
                                                                                        <div className="rating mb-0">
                                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                                <span>
                                                                                                    <Link to={`/admin/blog-update/${course?._id}`} className="btn btn-sm btn-primary">
                                                                                                        <MdModeEditOutline size={24} />
                                                                                                    </Link>
                                                                                                </span>
                                                                                                <span>
                                                                                                    <div className="btn btn-sm btn-primary">
                                                                                                        <Delete step={4} Id={course?._id} title="Delete Instructor" fetchMarketLists={fetchMarketLists} />
                                                                                                    </div>
                                                                                                </span>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <p>No courses available.</p>
                                                                )}
                                                            </div>

                                                        )}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dash-pagination">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <p>Page 1 of 2</p>
                                            </div>
                                            <div className="col-6">
                                                <ul className="pagination">
                                                    <li className="active">
                                                        <Link to="#">1</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">2</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="bx bx-chevron-right" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                {/* /Page Content */}
            </div>
        </AuthLayout>

    );
};

export default BlogView;
