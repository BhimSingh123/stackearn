import React, { useEffect, useState } from "react";
import StudentSidebar from "../sidebar";
import { Link } from "react-router-dom";
import Listing from "../../Api/Listing";
import SubscribeHistory from "../Subscribe/SubscribeHistory";

const ContactHistory = () => {

  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);

  console.log("listing", listing)

  const fetchMarketLists = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.ContactGet();
      console.log("response", response)
      setListing(response?.data?.data?.contactget);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketLists();
  }, []);
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="main-wrapper mb-5">

          <SubscribeHistory title={"Contact History"} />
          {/* Page Content */}
          <div className="page-content mt-5">
            <div className="container">
              <div className="row">
                {/* sidebar */}
                <StudentSidebar />
                {/* /Sidebar */}
                {/* Student Order History */}
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
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Page Name</th>
                                    <th>Subject</th>



                                    <th>Status</th>
                                    <th />
                                  </tr>
                                </thead>
                                <tbody>
                                  {listing && listing?.map((item, index) => (

                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>
                                        <span className="title-course">
                                          {item?.created_at
                                          }
                                        </span>
                                      </td>
                                      <td>{item?.name}</td>
                                      <td>{item?.email}</td>
                                      <td>{item?.
                                        phone_number
                                      }</td>
                                      <td>
                                        {item?.role}
                                      </td>
                                      <td>
                                        {item?.subject}
                                      </td>
                                      <td>
                                        {item?.contact_status
                                        }
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
                {/* /Student Order History */}
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </div>
      )}

    </>

  );
};

export default ContactHistory;
