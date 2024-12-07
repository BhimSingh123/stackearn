import React from "react";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function StudentSidebar() {
  const location = useLocation();
  return (
    <div className="col-xl-3 col-lg-4 theiaStickySidebar">
      <StickyBox offsetTop={20} offsetBottom={20}>
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
