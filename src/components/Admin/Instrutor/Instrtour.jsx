import React, { useEffect, useState } from "react";
import StudentSidebar from "../sidebar";
import { Link } from "react-router-dom";
import Listing from "../../Api/Listing";
import SubDashboard from "../components/SubDashboard";
import { FaRegEye } from "react-icons/fa";
import DateFormate from "../components/DateFormate";
import LoadingPage from "../../../LoadingPage";
import AuthLayout from "../AuthLayout";
import { MdEdit } from "react-icons/md";
import Delete from "../components/Delete";
import { User2 } from "../../imagepath";

const Instrtour = () => {

    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);


    const fetchMarketLists = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.InstrutorGet();
            setListing(response?.data?.data?.Instructorget
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
            <div className="main-wrapper">

                <SubDashboard title={"instructor History"} />

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
                                            <div className="profile-heading d-flex justify-content-between align-items-center">
                                                <h3>Instructor History</h3>
                                                <Link
                                                    className="btn btn-primary"
                                                    to="/admin/add/instructor"
                                                >
                                                    Add Instructor
                                                </Link>
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
                                                                        <th>View</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {listing && listing?.map((item, index) => (

                                                                        <tr key={index}>
                                                                            <td>{index + 1}</td>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link to={`/admin/add/instructor/${item?._id}`}
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User2}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to={`/admin/add/instructor/${item?._id}`}>
                                                                                    {item?.firstName}
                                                                                    </Link>
                                                                                </h2>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <DateFormate data={item?.created_at} />
                                                                            </td>


                                                                            <td>{item?.email}</td>
                                                                         
                                                                            <td>
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                                                    {/* View Action */}
                                                                                    <Link
                                                                                        to={`/admin/add/instructor/${item?._id}`}
                                                                                        style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                                                                                    >
                                                                                        <FaRegEye size={24} title="View Instructor" />
                                                                                    </Link>

                                                                                    {/* Update Action */}
                                                                                    <Link
                                                                                        to={`/admin/update/instructor/${item?._id}`}
                                                                                        style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                                                                                    >
                                                                                        <MdEdit size={24} title="Edit Instructor" />
                                                                                    </Link>

                                                                                    {/* Delete Action */}
                                                                                    <Delete step={2} Id={item?._id} title="Delete Instructor" fetchMarketLists={fetchMarketLists} />
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
        </AuthLayout>

    );
};

export default Instrtour;
