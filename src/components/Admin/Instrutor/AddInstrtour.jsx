import React, { useState } from "react";
import AuthLayout from "../AuthLayout";
import SubDashboard from "../components/SubDashboard";
import StudentSidebar from "../sidebar";

function AddInstructor() {
  const [instructorDetails, setInstructorDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    address: "",
    profileImage: "",  // For profile image
    bio: "",            // For bio
    gender: "",         // Gender
    bankName: "",
    branchName: "",
    accountNumber: "",
    ifscCode: "",
    socialLinks: {
      linkedin: "",
      twitter: "",
      facebook: "",
      instagram: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstructorDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSocialInputChange = (e) => {
    const { name, value } = e.target;
    setInstructorDetails((prevState) => ({
      ...prevState,
      socialLinks: { ...prevState.socialLinks, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(instructorDetails);
    // You can add form submission logic here
  };

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
                    <form onSubmit={handleSubmit}>
                      <div className="checkout-form settings-wrap">
                        <div className="row">
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
                              <label className="form-label">User Name</label>
                              <input
                                type="text"
                                name="userName"
                                value={instructorDetails.userName}
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
                                type="text"
                                name="phoneNumber"
                                value={instructorDetails.phoneNumber}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
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

                          {/* Profile Image */}
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Profile Image</label>
                              <input
                                type="file"
                                name="profileImage"
                                onChange={(e) => setInstructorDetails({ ...instructorDetails, profileImage: e.target.files[0] })}
                                className="form-control"
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

                          {/* Bank Details */}
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Bank Name</label>
                              <input
                                type="text"
                                name="bankName"
                                value={instructorDetails.bankName}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Branch Name</label>
                              <input
                                type="text"
                                name="branchName"
                                value={instructorDetails.branchName}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Account Number</label>
                              <input
                                type="text"
                                name="accountNumber"
                                value={instructorDetails.accountNumber}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">IFSC Code</label>
                              <input
                                type="text"
                                name="ifscCode"
                                value={instructorDetails.ifscCode}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          {/* Social Links */}
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">LinkedIn</label>
                              <input
                                type="url"
                                name="linkedin"
                                value={instructorDetails.socialLinks.linkedin}
                                onChange={handleSocialInputChange}
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Twitter</label>
                              <input
                                type="url"
                                name="twitter"
                                value={instructorDetails.socialLinks.twitter}
                                onChange={handleSocialInputChange}
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Facebook</label>
                              <input
                                type="url"
                                name="facebook"
                                value={instructorDetails.socialLinks.facebook}
                                onChange={handleSocialInputChange}
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Instagram</label>
                              <input
                                type="url"
                                name="instagram"
                                value={instructorDetails.socialLinks.instagram}
                                onChange={handleSocialInputChange}
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Submit Button */}
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
