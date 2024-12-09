import React, { useEffect, useState } from "react";
import StudentSidebar from "../sidebar";
import StudentSettingPageHeader from "./settingPageHeader";
import toast from "react-hot-toast";
import Listing from "../../Api/Listing";
import SubDashboard from "../components/SubDashboard";

const StudentSocialProfile = () => {
  const [listing, setListing] = useState("");

  const [Regs, setRegs] = useState({
    website :"",
    linkedin : "",
    github : "",
    facebook : "",
    twitter : "",
    id:""
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
      const response = await main.userSocialAdd(Regs);
      console.log("response", response)
      if (response?.data) {
        toast.success(response.data.message);
        setRegs({
          email: "",
          newPassword: ""
        })
        ProfileData();
      } else {
        toast.error(response.data.message);
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      toast.error(error);
      setLoading(false);
    }
  }


  const ProfileData = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.userprfileId();
      console.log("response", response);
      setListing(response?.data?.social        || {});
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
      website: listing?.website || "",
      linkedin: listing?.linkedin || "",
      github: listing?.github || "",
      twitter: listing?.twitter || "",
      facebook: listing?.facebook || "",
      id:listing?._id || ""
    }));
  }, [listing]);

  
  return (
    <div className="main-wrapper">
      <>
        {/* Header */}
        <SubDashboard activeMenu={"Dashboard"} />
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
                      <div className="checkout-form settings-wrap">
                        <div className="row">
                          <div className="col-md-12">
                            {/* <div className="input-block">
                              <label className="form-label">Website  </label>
                              <input type="text" className="form-control"
                              onChange={handleInputs}
                              value={Regs?.website}
                              name="website"
                              />
                            </div> */}
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Instragram</label>
                              <input type="text" className="form-control" 
                              onChange={handleInputs}
                              value={Regs?.github}
                              name="github"
                              required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Facebook</label>
                              <input type="text" className="form-control"
                               onChange={handleInputs}
                               value={Regs?.facebook}
                               name="facebook"
                              required

                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Twitter</label>
                              <input type="text" className="form-control" 
                              required
                              
                              onChange={handleInputs}
                              value={Regs?.twitter}
                              name="twitter"
                              
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Linkedin</label>
                              <input type="text" className="form-control"
                              required
                              onChange={handleInputs}
                              value={Regs?.linkedin}
                              name="linkedin"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                          <button className="login-head button" type="submit" disabled={loading}>

                            {loading  ? "Loading..." : "  Save Profile"}
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

export default StudentSocialProfile;
