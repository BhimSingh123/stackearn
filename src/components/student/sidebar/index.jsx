import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { User16 } from "../../imagepath";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AuthLayout from "../../../AuthLayout";
import Listing from "../../Api/Listing";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
export default function StudentSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("token"); // Remove token or any other user-related data
    navigate("/login");  // Redirect user to the login page after logout
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
        navigate("/login");
    }
}


useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
}, []);


  return (
    <AuthLayout>
      <div className="col-xl-3 col-lg-3 theiaStickySidebar">
        <StickyBox offsetTop={20} offsetBottom={20}>
          <div className="settings-widget dash-profile">
            <div className="settings-menu">
              <div className="profile-bg">
                <div className="profile-img">
                  <Link to="/student/student-profile">
                    <img src={User16} alt="Img" />
                  </Link>
                </div>
              </div>
              <div className="profile-group">
                <div className="profile-name text-center">
                  <h4>
                  <Link to="/student/student-profile">
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
                <li className={`nav-item ${location.pathname === '/student/student-dashboard' ? 'active' : ''}`}>

                  <Link to="/student/student-dashboard" className="nav-link">
                    <i className="bx bxs-tachometer" />
                    Dashboard
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === '/student/student-profile' ? 'active' : ''}`}>

                  <Link to="/student/student-profile" className="nav-link">
                    <i className="bx bxs-user" />
                    My Profile
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname === '/student/student-courses' ? 'active' : ''}`}>
                  <Link
                    to="/student/student-courses"
                    className="nav-link"
                  >
                    <i className="bx bxs-graduation" />
                    Enrolled Courses
                  </Link>
                </li>

                <li className={`nav-item ${location.pathname === '/student/student-reviews' ? 'active' : ''}`}>

                  <Link to="/student/student-reviews" className="nav-link">
                    <i className="bx bxs-star" />
                    Reviews
                  </Link>
                </li>

                <li className={`nav-item ${location.pathname === '/student/student-order-history' ? 'active' : ''}`}>
                  <Link to="/student/student-order-history" className="nav-link">
                    <i className="bx bxs-cart" />
                    Order History
                  </Link>
                </li>

                <li className={`nav-item ${location.pathname === '/student/student-referral' ? 'active' : ''}`}>

                  <Link to="/student/student-referral" className="nav-link">
                    <i className="bx bxs-user-plus" />
                    Referrals
                  </Link>
                </li>
              </ul>
              <h3>Account Settings</h3>
              <ul>
                <li className={`nav-item ${location.pathname === '/student/student-setting' || location.pathname === '/student/student-change-password' || location.pathname === '/student/student-social-profile' || location.pathname === '/student/student-linked-accounts' || location.pathname === '/student/student-notification' ? 'active' : ''}`}>
                  <Link to="/student/student-setting" className="nav-link ">
                    <i className="bx bxs-cog" />
                    Settings
                  </Link>
                </li>
                <li className="nav-item">
                  <div onClick={handleLogout} className="nav-link">
                    <i className="bx bxs-log-out" />
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </StickyBox>
      </div>
    </AuthLayout>
  );
}
