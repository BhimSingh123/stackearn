import React, { useState } from "react";
import AuthLayout from "../AuthLayout";
import SubDashboard from "../components/SubDashboard";
import StudentSidebar from "../sidebar";
import { Link } from "react-router-dom";
import { User16 } from "../../imagepath";
import toast from "react-hot-toast";
import Listing from "../../Api/Listing";

function AddInstructor() {
  const [instructorDetails, setInstructorDetails] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    lessions: "",
    students: "",
    Skills: "",
    email: "",
    phoneNumber: "",
    address: "",
    profileImage: "",  // For profile image
    bio: "",            // For bio
    gender: "",         // Gender
    rating: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstructorDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [loading, setLoading] = useState(false);

  async function handleForms(e) {
    e.preventDefault();
    if (loading) {
      return false;
    }
    setLoading(true);
    const main = new Listing();
    try {
      const response = await main.Instrutor(instructorDetails);
      if (response?.data) {
        toast.success(response.data.message);
        setInstructorDetails({
          firstName: "",
          lastName: "",
          designation: "",
          lessions: "",
          students: "",
          Skills: "",
          email: "",
          phoneNumber: "",
          address: "",
          profileImage: "",  // For profile image
          bio: "",            // For bio
          gender: "",         // Gender
          rating: ""
        });
      } else {
        toast.error(response?.data?.message || "Unexpected error occurred.");
      }
    } catch (error) {
      console.error("error", error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <AuthLayout>
      <div className="main-wrapper">
        <SubDashboard title={"Add Instructor"} />

        {/* Page Content */}
        <div className="page-content mt-5">
          <div className="container">
            <div className="row">
              <StudentSidebar />

              <div className="col-xl-9 col-lg-9">
                <div className="settings-widget card-details">
                  <div className="settings-menu p-0">
                    <div className="profile-heading">
                      <h3>Add Instructor</h3>
                      <p>Please fill in the details to add an instructor</p>
                    </div>

                    {/* Add Instructor Form */}
                    <form onSubmit={handleForms}>
                      <div className="checkout-form settings-wrap">
                        <div className="row">
                          <div className="course-group profile-upload-group mb-3 d-flex ">
                            <div className="course-group-img profile-edit-field d-flex align-items-center">
                              <Link
                                to="/student/student-profile"
                                className="profile-pic"
                              >
                                <img src={User16} alt="Img" className="img-fluid" />
                              </Link>
                              <div className="profile-upload-head">
                                <h4>
                                  <Link to="/student/student-profile">Your avatar</Link>
                                </h4>
                                <p>
                                  PNG or JPG no bigger than 800px width and height
                                </p>
                                <div className="new-employee-field">
                                  <div className="d-flex align-items-center mt-2">
                                    <div className="image-upload mb-0">
                                      <input type="file" />
                                      <div className="image-uploads">
                                        <i className="bx bx-cloud-upload" />
                                      </div>
                                    </div>
                                    <div className="img-delete">
                                      <Link
                                        to="#"
                                        className="delete-icon"
                                      >
                                        <i className="bx bx-trash" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* First Name */}
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">First Name</label>
                              <input
                                type="text"
                                name="firstName"
                                value={instructorDetails.firstName}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          {/* Last Name */}
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Last Name</label>
                              <input
                                type="text"
                                name="lastName"
                                value={instructorDetails.lastName}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          {/* User Name */}
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Designation</label>
                              <input
                                type="text"
                                name="designation"
                                value={instructorDetails.designation}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Lessions</label>
                              <input
                                type="text"
                                name="lessions"
                                value={instructorDetails.lessions}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Students</label>
                              <input
                                type="text"
                                name="students"
                                value={instructorDetails.students}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Skills</label>
                              <input
                                type="text"
                                name="Skills"
                                value={instructorDetails.Skills}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          {/* Email */}
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Email</label>
                              <input
                                type="email"
                                name="email"
                                value={instructorDetails.email}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          {/* Phone Number */}
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Phone Number</label>

                              <input
                                type="tel"
                                className="form-control"
                                required
                                name="phoneNumber"
                                value={instructorDetails?.phoneNumber || ""}
                                onChange={handleInputChange}
                                placeholder="Enter your Phone Number"
                                pattern="\d{10}"
                                maxLength="10"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Rating</label>
                              <input
                                type="text"
                                name="rating"
                                value={instructorDetails.rating}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Gender</label>
                              <select
                                name="gender"
                                value={instructorDetails.gender}
                                onChange={handleInputChange}
                                className="form-control"
                              >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>

                          {/* Address */}
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Address</label>
                              <input
                                type="text"
                                name="address"
                                value={instructorDetails.address}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          {/* Bio */}
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Bio</label>
                              <textarea
                                name="bio"
                                value={instructorDetails.bio}
                                onChange={handleInputChange}
                                className="form-control"
                                rows="4"
                              ></textarea>
                            </div>
                          </div>

                          {/* Gender */}


                          <div className="col-md-12">
                            <button className="btn btn-success" type="submit">
                              Add Instructor
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default AddInstructor;
