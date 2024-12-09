import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentSidebar from "../sidebar";
import StudentSettingPageHeader from "./settingPageHeader";
import Header from "../../header";
import Listing from "../../Api/Listing";
import toast from "react-hot-toast";
import AuthLayout from "../../../AuthLayout";

const StudentLinkedAccounts = () => {

  const [listing, setListing] = useState({});
  const [Regs, setRegs] = useState({
    BankName: "",
    BankNumber: "",
    BranchName: "",
    IFSC: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setRegs((prevState) => ({ ...prevState, [name]: value }));
  };

  // Fetch user profile data
  const ProfileData = async () => {
    try {
      const main = new Listing();
      const response = await main.userprfileId();
      console.log("Profile response:", response);
      setListing(response?.data?.Bank || {});
    } catch (error) {
      console.error("ProfileData error:", error);
      toast.error("Failed to load profile data.");
    } 
  };

  // Handle form submission
  async function handleForms(e) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const main = new Listing();
    try {
      const response = await main.userBankData(Regs);
      console.log("Response:", response);
      if (response?.data) {
        toast.success(response.data.message);
        ProfileData(); // Refresh profile data after successful submission
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred while saving the profile.");
    } finally {
      setLoading(false);
    }
  }

  // Update form fields when listing changes
  useEffect(() => {
    setRegs((prevState) => ({
      ...prevState,
      BankName: listing?.BankName || "",
      IFSC: listing?.IFSC || "",
      BranchName: listing?.BranchName || "",
      BankNumber: listing?.BankNumber || "",
    }));
  }, [listing]);

  // Fetch profile data on component mount
  useEffect(() => {
    ProfileData();
  }, []);
  return (
    <AuthLayout>
    <div className="main-wrapper">
      <>
        {/* Header */}
        <Header activeMenu={"Dashboard"} />
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
                        Linked Accounts
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
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Account Holder Name</label>
                              <input type="text" className="form-control"
                                onChange={handleInputs}
                                value={Regs?.BankName}
                                name="BankName"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Bank Number</label>
                              <input type="text" className="form-control"
                                onChange={handleInputs}
                                value={Regs?.BankNumber}
                                name="BankNumber"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Branch Name</label>
                              <input type="text" className="form-control"

                                onChange={handleInputs}
                                value={Regs?.BranchName}
                                name="BranchName"

                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">IFSC</label>
                              <input type="text" className="form-control"

                                onChange={handleInputs}
                                value={Regs?.IFSC}
                                name="IFSC"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                          <button className="login-head button" type="submit" disabled={loading}>

                              {loading ? "Loading..." : "  Save Bank Details"}
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

export default StudentLinkedAccounts;
