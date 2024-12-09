import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AuthLayout from "../../../AuthLayout";
const StudentSettingPageHeader = () => {
  const location = useLocation();
  return (
    <AuthLayout>
      <div>
        <div className="settings-page-head">
          <ul className="settings-pg-links">
            <li>
              <Link
                to="/student/student-setting"
                className={
                  location.pathname === "/student/student-setting" ? "active" : ""
                }
              >
                <i className="bx bx-edit" />
                Edit Profile
              </Link>
            </li>
            <li>
              <Link
                to="/student/student-change-password"
                className={
                  location.pathname === "/student/student-change-password"
                    ? "active"
                    : ""
                }
              >
                <i className="bx bx-lock" />
                Change Password
              </Link>
            </li>
            <li>
              <Link
                to="/student/student-social-profile"
                className={
                  location.pathname === "/student/student-social-profile"
                    ? "active"
                    : ""
                }
              >
                <i className="bx bx-user-circle" />
                Social Profiles
              </Link>
            </li>
            <li>
              <Link
                to="/student/student-linked-accounts"
                className={
                  location.pathname === "/student/student-linked-accounts"
                    ? "active"
                    : ""
                }
              >
                <i className="bx bx-link" />
               Bank Details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </AuthLayout>
  );
};

export default StudentSettingPageHeader;
