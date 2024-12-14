import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { Link, useNavigate } from "react-router-dom";
import { User16 } from "../../imagepath";
import { useLocation } from "react-router-dom";
import Listing from "../../Api/Listing";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
export default function StudentSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token or any other user-related data
    navigate("/admin/login");  // Redirect user to the login page after logout
  };
  const [listing, setListing] = useState("");
  const [profile, setprofile] = useState("");


  const fetchData = async (signal) => {
    try {
      const main = new Listing();
      const response = await main.profileVerify({ signal });
      setListing(response?.data?.data)
      setprofile(response?.data?.profileData
      )
    } catch (error) {
      localStorage && localStorage.removeItem("token");
      toast.error("Please log in first.");
      navigate("/admin/login");
    }
  }


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);


  return (
    <div className="col-xl-3 col-lg-3 theiaStickySidebar">
      <StickyBox offsetTop={20} offsetBottom={20}>

        <div className="settings-widget dash-profile">
          <div className="settings-menu">
            <div className="profile-bg">
              <div className="profile-img">
                <Link to="/admin/admin-setting">
                  <img src={User16} alt="Img" />
                </Link>
              </div>
            </div>
            <div className="profile-group">
              <div className="profile-name text-center">
                <h4>
                  <Link to="/admin/admin-setting">
                    {profile?.firstname && profile?.lastname
                      ? `${profile.firstname} ${profile.lastname}`
                      : listing?.name}
                  </Link>

                </h4>
                <p>{listing?.email}</p>
                <p>{listing?.role}</p>

              </div>
            </div>
          </div>
        </div>
        <div className="settings-widget account-settings">
          <div className="settings-menu">
            <h3>Dashboard</h3>
            <ul>

              <li className={`nav-item ${location.pathname === '/admin/admin-contact' ? 'active' : ''}`}>
                <Link to="/admin/admin-contact" className="nav-link">
                  <i className="bx bxs-cart" />
                  Contact History
                </Link>
              </li>

              <li className={`nav-item ${location.pathname === '/admin/subsribe' ? 'active' : ''}`}>
                <Link to="/admin/subsribe" className="nav-link">
                  <i className="bx bxs-cart" />
                  Subsribe History
                </Link>
              </li>

              <li className={`nav-item ${location.pathname === '/admin/admin-user' ? 'active' : ''}`}>
                <Link to="/admin/admin-user" className="nav-link">
                  <i className="bx bxs-cart" />
                  User History
                </Link>
              </li>

              <li className={`nav-item ${location.pathname === '/admin/instructor' ? 'active' : ''}`}>
                <Link to="/admin/instructor" className="nav-link">
                  <i className="bx bxs-cart" />
                  Instructor History
                </Link>
              </li>


            </ul>
            <h3>Account Settings</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/admin/admin-setting' || location.pathname === '/admin/admin--change-password' || location.pathname === '/admin/admin--social-profile' || location.pathname === '/admin/admin--linked-accounts' || location.pathname === '/admin/admin--notification' ? 'active' : ''}`}>
                <Link to="/admin/admin-setting" className="nav-link ">
                  <i className="bx bxs-cog" />
                  Settings
                </Link>
              </li>
              <li className="nav-item" onClick={handleLogout}>
                <Link to="#" className="nav-link ">
                  <i className="bx bxs-log-out" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </StickyBox>
    </div>
  );
}
