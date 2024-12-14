import React, { useEffect, useState } from "react";
import StudentSidebar from "../sidebar";
import { Link } from "react-router-dom";
import Listing from "../../Api/Listing";
import SubDashboard from "../components/SubDashboard";
import { FaRegEye } from "react-icons/fa";
import DateFormate from "../components/DateFormate";
import LoadingPage from "../../../LoadingPage";
import AuthLayout from "../AuthLayout";
import { FaUser } from "react-icons/fa";
import Delete from "../components/Delete";

const UserList = () => {

    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);


    const fetchMarketLists = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.userList();
            setListing(response?.data?.data?.users
            );
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
        <AuthLayout>

            <>

                <div className="main-wrapper">

                    <SubDashboard title={"Subscribe History"} />

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
                                                    <h3>User History</h3>
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
                                                                            <th> Name</th>
                                                                            <th>Join  Date</th>
                                                                            <th>Email</th>
                                                                            <th>Course Name</th>

                                                                            <th>Status</th>
                                                                            <th>View</th>

                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {listing && listing?.map((item, index) => (
                                                                            <tr key={index}>
                                                                                <td>{index + 1}</td>
                                                                                <td>
                                                                                    <div className="d-flex align-items-center">
                                                                                        <div className="d-flex justify-content-center align-items-center rounded-circle bg-light mr-3" style={{ width: '40px', height: '40px' }}>
                                                                                            <FaUser className="text-secondary" style={{ fontSize: '20px' }} />
                                                                                        </div>
                                                                                        <div>
                                                                                            <span className="d-block text-capitalize">{item?.name}</span>
                                                                                            <span className="d-block">{item?.phone_number}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <DateFormate data={item?.created_at} />
                                                                                </td>


                                                                                <td>{item?.email}</td>
                                                                                <td>Course NAme</td>

                                                                                <td>
                                                                                    <span
                                                                                        className={`text-sm btn ${item?.user_status === 'active' ? 'btn-success' : 'btn-danger'
                                                                                            } text-capitalize rounded-pill px-2 py-1`}
                                                                                    >
                                                                                        {item?.user_status}
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                                                                        {/* View Link */}
                                                                                        <Link
                                                                                            to={`/admin/user-profile-Id/${item?._id}`}
                                                                                            className="text-decoration-none"
                                                                                        >
                                                                                            <FaRegEye size={24} className="text-primary" />
                                                                                        </Link>

                                                                                        {/* Delete Button */}
                                                                                        <Delete step={1} Id={item?._id} />
                                                                                    </div>
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

                            </div>
                        </div>
                    </div>
                    {/* /Page Content */}
                </div>

            </>
        </AuthLayout>

    );
};

export default UserList;
