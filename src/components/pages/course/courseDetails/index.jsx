import React, { useEffect, useState } from "react";
import DetailsContent from "./detailsContent";
import { Icon1, People, Timer, User1 } from "../../../imagepath";
import { Link, useParams } from "react-router-dom";
import Listing from "../../../Api/Listing";
import toast from "react-hot-toast";
import LoadingPage from "../../../../LoadingPage";
import Header from "../../../header";
import { Footer4 } from "../../../footer4";
const CourseDetails = () => {
  const { Id } = useParams();
  const [loading, setLoading] = useState(false);

  const [courseDetails, setCourseDetails] = useState("")
  console.log("courseDetails", courseDetails)
  const fetchCourseData = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.CourseGetId(Id);
      if (response?.data?.data) {
        setCourseDetails(response.data.data);
      } else {
        toast.error("Failed to fetch course details.");
      }
    } catch (error) {
      console.error("Error fetching course data:", error);
      toast.error("Unable to load course data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Id) fetchCourseData();
  }, [Id]);

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <div className="breadcrumb-bar mt-5 ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">Home</Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Courses
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        All Courses
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                      {courseDetails?.title}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <LoadingPage />
        ) : (
          <div
            className="inner-banner"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="instructor-wrap border-bottom-0 m-0">
                    <div className="about-instructor align-items-center">
                      <div className="abt-instructor-img">
                        <Link to="/instructor/instructor-profile">
                          <img
                            src={User1}
                            alt="img"
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="instructor-detail me-3">
                        <h5>
                          <Link to="/instructor/instructor-profile">{courseDetails?.InstrutorId?.firstName} {courseDetails?.InstrutorId?.lastName}</Link>
                        </h5>
                        <p>{courseDetails?.InstrutorId?.designation}</p>
                      </div>
                      <div className="rating">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <i
                            key={index}
                            className={`fas fa-star ${index < courseDetails?.InstrutorId?.rating ? "filled" : ""}`}
                          ></i>
                        ))}
                        <span className="d-inline-block average-rating">
                          <span>{courseDetails?.InstrutorId?.rating} Instructor Rating</span>
                        </span>
                      </div>
                    </div>
                    <span className="web-badge mb-3">{courseDetails?.title}</span>
                  </div>
                  <h2>{courseDetails?.title}</h2>
                  <p>
                    {courseDetails?.description}
                  </p>
                  <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                    <div className="cou-info">
                      <img src={Icon1} alt="" />
                      <p>{courseDetails?.InstrutorId?.lessions} Lesson</p>
                    </div>
                    <div className="cou-info">
                      <img src={Timer} alt="" />
                      <p>{courseDetails?.duration}</p>
                    </div>
                    <div className="cou-info">
                      <img src={People} alt="" />
                      <p>{courseDetails?.InstrutorId?.students} students enrolled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


        <DetailsContent item={courseDetails} />

        <Footer4 />

      </div>
    </>
  );
};

export default CourseDetails;
