import React, { useEffect, useState } from "react";
import StudentSidebar from "../sidebar";
import { Link } from "react-router-dom";
import Listing from "../../Api/Listing";
import SubDashboard from "../components/SubDashboard";
import DateFormate from "../components/DateFormate";
import LoadingPage from "../../../LoadingPage";
import AuthLayout from "../AuthLayout";
import { MdOutlineMessage } from "react-icons/md";

const List = () => {

  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);


  const ContactList = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.ContactGet();
      setListing(response?.data?.data?.contactget);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ContactList();
  }, []);
  return (
    <AuthLayout>

      <div className="main-wrapper mb-5">
        <SubDashboard />
        {/* Page Content */}
        <div className="page-content mt-5">
          <div className="container">
            <div className="row">
              <StudentSidebar />
              {loading ? (
                <LoadingPage />
              ) : (
                <div className="col-xl-9 col-lg-9">
                  <div className="settings-widget card-details">
                    <div className="settings-menu p-0">
                      <div className="profile-heading">
                        <h3>Contact History</h3>
                      </div>
                      <div className="checkout-form">
                        {/* Tab Content */}
                        <div className="tab-content">
                          {/* Today */}
                          <div className="tab-pane show active" id="today">
                            <div className="table-responsive custom-table">
                              <table className="table table-nowrap mb-0">
                                <thead>
                                  <tr>
                                    <th>S. No.</th>
                                    <th> Date</th>
                                    <th>Name & Number</th>
                                    <th>Email</th>
                                    <th>Page Name</th>
                                    <th>Subject</th>
                                    <th>Message</th>

                                    <th>Status</th>
                                    <th>Reply Message</th>

                                    <th />
                                  </tr>
                                </thead>
                                <tbody>
                                  {listing && listing?.map((item, index) => (

                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>
                                        <DateFormate data={item?.created_at} />
                                      </td>
                                      <td>
                                        <span style={{ display: "block" }}>{item?.name}</span>
                                        <span style={{ display: "block" }}>{item?.phone_number}</span>
                                      </td>
                                      <td>{item?.email}</td>
                                      <td>
                                        {item?.role}
                                      </td>
                                      <td>
                                        {item?.subject}
                                      </td>
                                      <td>
                                        {item?.message}
                                      </td>
                                      <td>
                                        {item?.contact_status
                                        }
                                      </td>
                                      <td>
                                        <MdOutlineMessage size={24} />
                                      </td>
                                    </tr>
                                  ))}

                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        {/* /Tab Content */}
                      </div>
                    </div>
                  </div>
                  <div className="dash-pagination">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p>Page 1 of 2</p>
                      </div>
                      <div className="col-6">
                        <ul className="pagination">
                          <li className="active">
                            <Link to="#">1</Link>
                          </li>
                          <li>
                            <Link to="#">2</Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="bx bx-chevron-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* /Student Order History */}
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>

    </AuthLayout>

  );
};

export default List;
