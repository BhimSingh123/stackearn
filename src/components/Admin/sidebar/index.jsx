import React from "react";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function StudentSidebar() {
  const location = useLocation();
  return (
    <div className="col-xl-3 col-lg-3 theiaStickySidebar">
      <StickyBox offsetTop={20} offsetBottom={20}>
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

              <li className={`nav-item ${location.pathname === '/admin/admin-contact' ? 'active' : ''}`}>
                <Link to="/admin/admin-contact" className="nav-link">
                  <i className="bx bxs-cart" />
                  Contact History
                </Link>
              </li>

              <li className={`nav-item ${location.pathname === '/admin/admin-subsribe' ? 'active' : ''}`}>
                <Link to="/admin/admin-subsribe" className="nav-link">
                  <i className="bx bxs-cart" />
                  Subsribe History
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
                <Link to="/home" className="nav-link">
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
