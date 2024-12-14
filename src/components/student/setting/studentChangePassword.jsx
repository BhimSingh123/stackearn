import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentSidebar from "../sidebar";
import StudentSettingPageHeader from "./settingPageHeader";
import Header from "../../header";
import Listing from "../../Api/Listing";
import toast from "react-hot-toast";
import AuthLayout from "../../../AuthLayout";
const StudentChangePassword = () => {
  const [Regs, setRegs] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputs = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegs((prevState) => ({ ...prevState, [name]: value }));
  };

  const [loading, setLoading] = useState(false);

  async function handleForms(e) {
    e.preventDefault();
    if (loading) {
      return false;
    }

    if (Regs.newPassword !== Regs.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    const main = new Listing();
    try {
      const response = await main.resetpassword({ newPassword: Regs.newPassword });
      if (response?.data) {
        toast.success(response.data.message);
        setRegs({
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        toast.error(response.data.message);
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      toast.error("An error occurred while resetting the password.");
      setLoading(false);
    }
  }
  return (
    <AuthLayout>
      <div className="main-wrapper">
        <>
          {/* Header */}
          <Header />
          {/* /Header */}
          {/* Breadcrumb */}
          <div className="breadcrumb-bar breadcrumb-bar-info">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div className="breadcrumb-list">
                    <h2 className="breadcrumb-title">Settings</h2>
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/home">Home</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Change Password
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Page Content */}
          <div className="page-content">
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
                        <div className="checkout-form settings-wrap">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block">
                                <label className="form-label">New Password</label>
                                <input
                                  type="password"
                                  required
                                  name="newPassword"
                                  value={Regs?.newPassword}
                                  onChange={handleInputs}
                                  className="form-control"
                                  minLength="8"
                                  maxLength="10"
                                />
                              </div>
                              <div className="input-block">
                                <label className="form-label">
                                  Confirm Password
                                </label>
                                <input
                                  type="password"
                                  required
                                  name="confirmPassword"
                                  value={Regs?.confirmPassword}
                                  onChange={handleInputs}
                                  className="form-control"
                                  minLength="8"
                                  maxLength="10"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                className="login-head button"
                                type="submit"
                                disabled={loading}
                              >
                                {loading ? "Loading.." : "Reset Password"}
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

export default StudentChangePassword;
