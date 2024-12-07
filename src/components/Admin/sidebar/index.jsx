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


            </ul>
            <h3>Account Settings</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/admin/admin-setting' || location.pathname === '/admin/admin--change-password' || location.pathname === '/admin/admin--social-profile' || location.pathname === '/admin/admin--linked-accounts' || location.pathname === '/admin/admin--notification' ? 'active' : ''}`}>
                <Link to="/admin/admin-setting" className="nav-link ">
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
