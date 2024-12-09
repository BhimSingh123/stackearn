import React, { useState } from "react";
import StudentSidebar from "../sidebar";
import StudentSettingPageHeader from "./settingPageHeader";
import Listing from "../../Api/Listing";
import toast from "react-hot-toast";
import SubDashboard from "../components/SubDashboard";
const StudentChangePassword = () => {


  const [Regs, setRegs] = useState({
    email: "",
    newPassword: "",
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
    setLoading(true);
    const main = new Listing();
    try {
      const response = await main.resetpassword(Regs);
      console.log("response", response)
      if (response?.data) {
        toast.success(response.data.message);
        setRegs({
          email: "",
          newPassword: ""
        })
      } else {
        toast.error(response.data.message);
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      toast.error("invalid Email/password");
      setLoading(false);
    }
  }
  return (
    <div className="main-wrapper">
      <>
        {/* Header */}
        <SubDashboard title={"Subscribe History"} />

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
                      <div className="checkout-form settings-wrap">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">
                                Email
                              </label>
                              <input
                                name="email"
                                value={Regs?.email}
                                onChange={handleInputs}
                                required

                                type="email" className="form-control" />
                            </div>
                            <div className="input-block">
                              <label className="form-label">New Password</label>
                              <input type="password"
                                required
                                name="newPassword"
                                value={Regs?.newPassword}
                                onChange={handleInputs}
                                className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button className="login-head button" type="submit" disabled={loading}>

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
  );
};

export default StudentChangePassword;
