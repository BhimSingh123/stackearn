import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentSidebar from "../sidebar";
import { User16 } from "../../imagepath";
import StudentSettingPageHeader from "./settingPageHeader";
import AuthLayout from "../../../AuthLayout";
import Listing from "../../Api/Listing";
import toast from "react-hot-toast";
import SubDashboard from "../components/SubDashboard";

const StudentSetting = () => {
  const [listing, setListing] = useState("");
  const [Regs, setRegs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phone_number: "",
    designation: "",
    bio: "",
    address: "",
    id: ""
  });
  const [loading, setLoading] = useState(false);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setRegs((prevState) => ({ ...prevState, [name]: value }));
  };

  async function handleForms(e) {
    e.preventDefault();
    if (loading) {
      return false;
    }
    setLoading(true);
    const main = new Listing();
    try {
      const response = await main.userProfileAdd(Regs);
      console.log("response", response);
      if (response?.data) {
        toast.success(response.data.message);
        setRegs({
          firstname: "",
          lastname: "",
          username: "",
          phone_number: "",
          designation: "",
          bio: "",
          address: ""
        });
        ProfileData();
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

  const ProfileData = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.userprfileId();
      console.log("response", response);
      setListing(response?.data?.profile || {});
    } catch (error) {
      console.error("ProfileData error:", error);
      toast.error("Failed to load profile data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ProfileData();
  }, []);

  useEffect(() => {
    setRegs((prevState) => ({
      ...prevState,
      firstname: listing?.firstname || "",
      lastname: listing?.lastname || "",
      username: listing?.username || "",
      phone_number: listing?.phone_number || "",
      designation: listing?.designation || "",
      bio: listing?.bio || "",
      address: listing?.address || "",
      id: listing?._id || ""

    }));
  }, [listing]);
  return (
    <AuthLayout>

      <div className="main-wrapper">
        <>
          {/* Header */}
          <SubDashboard />
          {/* /Header */}
          {/* Breadcrumb */}
          {/* /Breadcrumb */}
          {/* Page Content */}
          <div className="page-content mt-5">
            <div className="container">
              <div className="row">
                {/* sidebar */}
                <StudentSidebar />
                {/* /Sidebar */}
                {/* Student Settings */}
                <div className="col-xl-9 col-lg-9">
                  <div className="settings-widget card-details">
                    <div className="settings-menu p-0">
                      <div className="profile-heading">
                        <h3>Settings</h3>
                        <p>
                          You have full control to manage your own account
                          settings
                        </p>
                      </div>
                      <StudentSettingPageHeader />
                      <form onSubmit={handleForms}>
                        <div className="course-group profile-upload-group mb-0 d-flex">
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
                        <div className="checkout-form settings-wrap">
                          <div className="edit-profile-info">
                            <h5>Personal Details</h5>
                            <p>Edit your personal information</p>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block">
                                <label className="form-label">First Name</label>
                                <input
                                  type="text"
                                  value={Regs?.firstname}
                                  onChange={handleInputs}
                                  name="firstname"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label className="form-label">Last Name </label>
                                <input
                                  type="text"
                                  value={Regs?.lastname}
                                  onChange={handleInputs}
                                  name="lastname"
                                  className="form-control"
                                  required

                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label className="form-label">WhatApps Number</label>
                                <input
                                  type="number"
                                  value={Regs?.phone_number}
                                  onChange={handleInputs}
                                  name="phone_number"
                                  required

                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-block">
                                <label className="form-label">Designation</label>
                                <input
                                  type="text"
                                  value={Regs?.designation}
                                  onChange={handleInputs}
                                  name="designation"
                                  required

                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-block">
                                <label className="form-label">Address</label>
                                <input
                                  value={Regs?.address}
                                  onChange={handleInputs}
                                  name="address"
                                  className="form-control"
                                  required

                                  placeholder="address"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-block">
                                <label className="form-label">Bio</label>
                                <textarea
                                  value={Regs?.bio}
                                  onChange={handleInputs}
                                  name="bio"
                                  rows={4}
                                  required

                                  className="form-control"
                                  defaultValue={
                                    "Hello! I'm Ronald Richard. I'm passionate about developing innovative software solutions, analyzing classic literature. I aspire to become a software developer, work as an editor. In my free time, I enjoy coding, reading, hiking etc."
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button className="login-head button" type="submit" disabled={loading}>
                                {loading ? "Loading..." : "Update Profile"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Student Settings */}
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>
      </div>
    </AuthLayout>
  );
};

export default StudentSetting;
