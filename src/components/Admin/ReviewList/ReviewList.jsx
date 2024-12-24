import React, { useEffect, useState } from "react";
import StudentSidebar from "../sidebar";
import { Link } from "react-router-dom";
import Listing from "../../Api/Listing";
import SubDashboard from "../components/SubDashboard";
import DateFormate from "../components/DateFormate";
import MessagePopup from "../components/MessagePopup"
import LoadingPage from "../../../LoadingPage";
import AuthLayout from "../AuthLayout";
import toast from "react-hot-toast";

const List = () => {

  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);

  console.log("listing", listing)

  const ContactList = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.ReviewGet();
      console.log("response", response)
      setListing(response?.data?.review);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ContactList();
  }, []);


  const toggleReadStatus = async (id, currentStatus) => {
    console.log("currentStatus", currentStatus)
    setLoading(true);
    try {
      const newStatus = currentStatus === "read" ? "unread" : "read";
      const main = new Listing();
      // Call API to update status
      const response = await main.ReviewStatus({
        _id: id, // Pass the unique ID
        status: newStatus, // Pass the updated status
      });
      if (response?.data?.status === true) {
        toast.success(response?.data?.message);
        ContactList();

      } else {
        toast.error(response?.data?.message || "Failed to update status.");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error("Error updating status:", error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

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
                                    <th>Name </th>
                                    <th>Course Name </th>
                                    <th>Name </th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listing && listing?.map((item, index) => (

                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>
                                        <DateFormate data={item?.created_at} />
                                      </td>
                                      <td>{item?.
                                        userId
                                        ?.name}</td>

                                      <td>{item?.courseId
                                        ?.title}</td>

                                      <td>
                                        <span style={{ display: "block" }}>{item?.name}</span>
                                      </td>
                                      <td>{item?.email}</td>
                                      <td>
                                        <MessagePopup message={item?.subject} wordLimit={5} />
                                      </td>
                                      <td>
                                        <MessagePopup message={item?.message} wordLimit={5} />

                                      </td>
                                      <td className="text-center">
                                        <button
                                          className={`btn ${item?.status === "read" ? "btn-success" : "btn-danger"} px-4 py-2`}
                                          onClick={() => toggleReadStatus(item?._id, item?.status)}
                                        >
                                          {item?.status === "unread" ? "Read" : "Unread"}
                                        </button>
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
