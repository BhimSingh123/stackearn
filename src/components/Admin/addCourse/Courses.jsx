import React, { useEffect, useState } from "react";
import StudentSidebar from "../sidebar";
import {
  Icon1,
  Icon2,
  course02,
} from "../../imagepath";
import { Link } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import Listing from "../../Api/Listing";
import LoadingPage from "../../../LoadingPage";
import Delete from "../components/Delete";
import { MdModeEditOutline } from "react-icons/md";
import SubDashboard from "../components/SubDashboard";


const Courses = () => {
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);

  console.log("listing", listing)

  const fetchMarketLists = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.courseGet();
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

  return (
    <AuthLayout>

      <div className="main-wrapper">
        {/* Page Content */}
        <SubDashboard title={"instructor History"}  className="p-3"/>

        <div className="page-content  mt-[10px]">
          <div className="container">
            <div className="row">
              {/* sidebar */}
              <StudentSidebar />
              {/* /Sidebar */}
              {/* Student Courses */}
              <div className="col-xl-9 col-lg-9">
                <div className="settings-widget card-info">
                  <div className="settings-menu p-0">
                    <div className="profile-heading d-flex justify-content-between align-items-center">
                      <h3>Enrolled Courses</h3>
                      <Link
                        className="btn btn-primary"
                        to="/admin/add-course"
                      >
                        Add Course
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
                                          <div className="price">
                                            <h3>
                                              ${course.price}{" "}
                                              <span>${course.originalPrice || "99.00"}</span>
                                            </h3>
                                          </div>
                                        </div>
                                        <div className="product-content">
                                          <h3 className="title instructor-text">
                                            <Link to={`/course-details/${course.id}`}>
                                              {course.title || "Course Title"}
                                            </Link>
                                          </h3>
                                          <p className="title instructor-text">
                                            <Link to={`/course-details/${course._id}`}>
                                              {course.description || "Course description"}
                                            </Link>
                                          </p>
                                          <div className="course-info d-flex align-items-center">
                                            <div className="rating-img d-flex align-items-center">
                                              <img src={Icon1} alt="Lessons Icon" />
                                              <p>{course.lessons || "0"}+ Lessons</p>
                                            </div>
                                            <div className="course-view d-flex align-items-center">
                                              <img src={Icon2} alt="Duration Icon" />
                                              <p>{course.duration || "0hr"} Duration</p>
                                            </div>
                                          </div>
                                          <div className="rating mb-0">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <span>
                                                <Link to={`/admin/update-course/${course?._id}`} className="btn btn-sm btn-primary">
                                                  <MdModeEditOutline size={24} />
                                                </Link>
                                              </span>
                                              <span>
                                                <div className="btn btn-sm btn-primary">
                                                  <Delete step={3} Id={course?._id} title="Delete Instructor" fetchMarketLists={fetchMarketLists} />
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
              {/* /Student Courses */}
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </AuthLayout>
  );
};

export default Courses;
