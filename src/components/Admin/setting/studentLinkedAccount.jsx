import React from "react";
import { Link } from "react-router-dom";
import StudentSidebar from "../sidebar";
import { fb, google, github, twitter } from '../../imagepath'
import StudentSettingPageHeader from "./settingPageHeader";
import SubDashboard from "../components/SubDashboard";

const StudentLinkedAccounts = () => (
  <div className="main-wrapper">
    <>
      {/* Header */}
      <SubDashboard />
      {/* /Header */}
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
                  <div className="checkout-form settings-wrap">
                    <ul className="lined-accounts-list">
                      <li>
                        <div className="account-icon">
                          <img src={fb} alt="Img" />
                        </div>
                        <div className="account-info">
                          <div className="account-name">
                            <h5>Facebook</h5>
                          </div>
                          <p>
                            Enable one - click login and receive more
                            personalized course recommendations
                          </p>
                          <Link to="#" className="linked-btn">
                            Remove my facebook account
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="account-icon">
                          <img
                            src={google}
                            alt="Img" />
                        </div>
                        <div className="account-info">
                          <div className="account-name">
                            <h5>Google</h5>
                          </div>
                          <p>
                            Enable one - click login and receive more
                            personalized course recommendations
                          </p>
                          <Link to="#" className="linked-btn">
                            Link my google account
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="account-icon">
                          <img
                            src={github}
                            alt="Img" />
                        </div>
                        <div className="account-info">
                          <div className="account-name">
                            <h5>Github</h5>
                          </div>
                          <p>
                            Enable one - click login and receive more
                            personalized course recommendations
                          </p>
                          <Link to="#" className="linked-btn">
                            Link my github account
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="account-icon">
                          <img
                            src={twitter}
                            alt="Img" />
                        </div>
                        <div className="account-info">
                          <div className="account-name">
                            <h5>Twitter</h5>
                          </div>
                          <p>
                            Enable one - click login and receive more
                            personalized course recommendations
                          </p>
                          <Link to="#" className="linked-btn">
                            Link my twitter account
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
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

export default StudentLinkedAccounts;
