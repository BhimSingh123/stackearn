import React, { useEffect, useState } from "react";
import StudentSidebar from "../sidebar";
import { Link } from "react-router-dom";
import Listing from "../../Api/Listing";
import SubDashboard from "../components/SubDashboard";
import DateFormate from "../components/DateFormate";
import MessagePopup from "../components/MessagePopup"
import LoadingPage from "../../../LoadingPage";
import AuthLayout from "../AuthLayout";
import { MdOutlineMessage } from "react-icons/md";

const List = () => {

  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);


  const PaymentLisitng = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.PaymentList();
      setListing(response?.data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    PaymentLisitng();
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
                                    <th>Order Id</th>
                                    <th>Payment Id</th>
                                    <th>Username </th>
                                    <th>Course Name</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>Currency</th>
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
                                        <MessagePopup message={item?.subject} wordLimit={5} />
                                      </td>
                                      <td>
                                        <MessagePopup message={item?.message} wordLimit={5} />

                                      </td>
                                      <td>
                                        {item?.contact_status
                                        }
                                      </td>
                                      <td className="text-center hover:text-blue-500">
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