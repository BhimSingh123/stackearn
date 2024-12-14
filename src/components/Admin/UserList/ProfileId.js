import React, { useEffect, useState } from "react";
import {
    AddressIcon,
    EmailIcon,
    PhoneIcon,
    ProfileAvatar,
} from "../../imagepath";
import {
    User1,
    User13,
    User14,
    User2,
    User3,
    User4,
    User5,
    User6,
    User8,
} from "../../imagepath";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { initialSettings } from "../../common/dateRangePicker";
import DateRangePicker from "react-bootstrap-daterangepicker";
import LoadingPage from "../../../LoadingPage";

import { FaTimes } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import SubDashboard from "../components/SubDashboard";
import Listing from "../../Api/Listing";
import AuthLayout from "../AuthLayout";
import { MdOutlineVerified } from "react-icons/md";

export default function ProfileId() {
    const { id } = useParams()

    const [Regs, setRegs] = useState({
        id: id
    });
    useEffect(() => (
        setRegs(id)
    ), [Regs])
    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

    const ProfileData = async () => {
        setLoading(true);

        try {
            const main = new Listing();
            const response = await main.userprfileget(Regs);
            setListing(response?.data);
        } catch (error) {
            console.error("Error fetching profile data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        ProfileData();
    }, []);
    const status = listing?.user?.user_status;
    return (
        <>
            <AuthLayout>
                <div className="main-wrapper">
                    {/* Breadcrumb */}
                    <SubDashboard />
                    {loading ? (
                        <LoadingPage />
                    ) : (
                        <>

                            <div
                                className="page-banner  instructor-bg-blk md-flex align-items-center"
                            >
                                <div className="container mt-4">
                                    <div className="row">
                                        <div className="col-md-12 col-12 ">
                                            <div className="profile-info-blk">
                                                <Link to="#" className="profile-info-img">
                                                    <img src={ProfileAvatar} alt="" className="img-fluid" />
                                                </Link>
                                                <h4 className="mt-3 mb-2">
                                                    <Link to="#">{listing?.user?.name}</Link>
                                                    <span>Beginner</span>
                                                </h4>
                                                <p
                                                    className={` ${status === "active" ? "text-success font-bold" : "text-danger font-bold"}`}  // Conditional button class
                                                >
                                                    {status === "active" ? (
                                                        <>
                                                            <MdOutlineVerified size={18} /> {/* Right icon for active */}
                                                            Active
                                                        </>
                                                    ) : (
                                                        <>
                                                            <FaTimes style={{ marginRight: "8px" }} /> {/* Wrong icon for inactive */}
                                                            Inactive
                                                        </>
                                                    )}
                                                </p>

                                                <div className="social-icon-five mt-2">
                                                    <ul className="nav">
                                                        <li>
                                                            <Link to={listing?.social?.twitter} target="_blank" className="twitter-icon">
                                                                <i className="fab fa-twitter"></i>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to={listing?.social?.linkedin} target="_blank" className="linked-icon">
                                                                <i className="fab fa-linkedin-in"></i>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to={listing?.social?.facebook} target="_blank" className="facebook-icon">
                                                                <i className="fab fa-facebook-f"></i>
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link to={listing?.social?.github} target="_blank" className="youtube-icon">
                                                                <i className="fa-brands fa-instagram"></i>

                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Breadcrumb */}
                            {/* Course Content */}
                            <section className="page-content course-sec">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            {/* Overview */}
                                            <div className="">
                                                <div className="settings-widget card-details">
                                                    <div className="settings-menu p-0">
                                                        <div className="profile-heading">
                                                            <h3>Referrals</h3>
                                                        </div>
                                                        <div className="checkout-form pb-0">
                                                            <div className="row">
                                                                <div className="col-xl-3 col-sm-6">
                                                                    <div className="card refer-card">
                                                                        <div className="card-body">
                                                                            <h6>Net Earnings</h6>
                                                                            <h3>$12,000</h3>
                                                                            <p>Earning this month</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-3 col-sm-6">
                                                                    <div className="card refer-card">
                                                                        <div className="card-body">
                                                                            <h6>Balance</h6>
                                                                            <h3>$15,000</h3>
                                                                            <p>In the Wallet</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-3 col-sm-6">
                                                                    <div className="card refer-card">
                                                                        <div className="card-body">
                                                                            <h6>Avg Deal Size</h6>
                                                                            <h3>$2,000</h3>
                                                                            <p>Earning this month</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-3 col-sm-6">
                                                                    <div className="card refer-card">
                                                                        <div className="card-body">
                                                                            <h6>No of Referrals</h6>
                                                                            <h3>10</h3>
                                                                            <p>In this month</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xl-6 d-flex">
                                                                    <div className="card link-box flex-fill">
                                                                        <div className="card-body">
                                                                            <h5>Your Referral Link</h5>
                                                                            <p>
                                                                                You can earn easily money by copy and share the
                                                                                below link to your friends
                                                                            </p>
                                                                            <div className="input-block">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    defaultValue="https://dreamslmscourse.com/reffer/?refid=345re667877k9"
                                                                                />
                                                                            </div>
                                                                            <Link to="#">Copy link</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-6 d-flex">
                                                                    <div className="card link-box flex-fill">
                                                                        <div className="card-body">
                                                                            <h5>Withdraw Money</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Withdraw money securily to your bank account.{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Commision is $25 per transaction under $10,000
                                                                                </li>
                                                                            </ul>
                                                                            <Link to="#">Withdraw Money</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="settings-widget card-details">
                                                    <div className="settings-menu p-0">
                                                        <div className="profile-heading d-flex align-items-center justify-content-between">
                                                            <h3>Referred Users</h3>
                                                            <div className="icon-form mb-0">
                                                                <span className="form-icon">
                                                                    <i className="bx bx-calendar-edit" />
                                                                </span>
                                                                <DateRangePicker initialSettings={initialSettings}>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control bookingrange"
                                                                    />
                                                                </DateRangePicker>
                                                            </div>
                                                        </div>
                                                        <div className="checkout-form">
                                                            <div className="table-responsive custom-table">
                                                                <table className="table table-nowrap mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Referred ID</th>
                                                                            <th>Referrals</th>
                                                                            <th>URL</th>
                                                                            <th />
                                                                            <th>Visits</th>
                                                                            <th>Total Earned</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>09341</td>
                                                                            <td>
                                                                                <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link
                                                                                        to="/student/student-profile"
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User2}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/student/student-profile">
                                                                                        Thompson Hicks
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-wrap">
                                                                                    https://dreamslmscourse.com/reffer/?refid=345re667877k9
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                                                                                >
                                                                                    <Link to="#" className="action-icon">
                                                                                        <i className="bx bx-paste" />
                                                                                    </Link>
                                                                                </OverlayTrigger>
                                                                            </td>
                                                                            <td>10</td>
                                                                            <td>$45.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>09342</td>
                                                                            <td>
                                                                                <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link
                                                                                        to="/student/student-profile"
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User4}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/student/student-profile">
                                                                                        Jennifer Tovar
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-wrap">
                                                                                    https://dreamslmscourse.com/reffer/?refid=345re667877k9
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                                                                                >
                                                                                    <Link to="#" className="action-icon">
                                                                                        <i className="bx bx-paste" />
                                                                                    </Link>
                                                                                </OverlayTrigger>
                                                                            </td>
                                                                            <td>15</td>
                                                                            <td>$75.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>09343</td>
                                                                            <td>
                                                                                <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link
                                                                                        to="/student/student-profile"
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User3}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/student/student-profile">
                                                                                        James Schulte
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-wrap">
                                                                                    https://dreamslmscourse.com/reffer/?refid=345re667877k9
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                                                                                >
                                                                                    <Link to="#" className="action-icon">
                                                                                        <i className="bx bx-paste" />
                                                                                    </Link>
                                                                                </OverlayTrigger>
                                                                            </td>
                                                                            <td>20</td>
                                                                            <td>$100.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>09344</td>
                                                                            <td>
                                                                                <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link
                                                                                        to="/student/student-profile"
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User1}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/student/student-profile">
                                                                                        Kristy Cardona
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-wrap">
                                                                                    https://dreamslmscourse.com/reffer/?refid=345re667877k9
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                                                                                >
                                                                                    <Link to="#" className="action-icon">
                                                                                        <i className="bx bx-paste" />
                                                                                    </Link>
                                                                                </OverlayTrigger>
                                                                            </td>
                                                                            <td>1</td>
                                                                            <td>$44.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>09345</td>
                                                                            <td>
                                                                                <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link
                                                                                        to="/student/student-profile"
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User14}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/student/student-profile">
                                                                                        William Aragon
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-wrap">
                                                                                    https://dreamslmscourse.com/reffer/?refid=345re667877k9
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                                                                                >
                                                                                    <Link to="#" className="action-icon">
                                                                                        <i className="bx bx-paste" />
                                                                                    </Link>
                                                                                </OverlayTrigger>
                                                                            </td>
                                                                            <td>5</td>
                                                                            <td>$25.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>09346</td>
                                                                            <td>
                                                                                <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link
                                                                                        to="/student/student-profile"
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User8}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/student/student-profile">
                                                                                        Shirley Lis
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-wrap">
                                                                                    https://dreamslmscourse.com/reffer/?refid=345re667877k9
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                                                                                >
                                                                                    <Link to="#" className="action-icon">
                                                                                        <i className="bx bx-paste" />
                                                                                    </Link>
                                                                                </OverlayTrigger>
                                                                            </td>
                                                                            <td>500</td>
                                                                            <td>$160.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>09347</td>
                                                                            <td>
                                                                                <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link
                                                                                        to="/student/student-profile"
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User2}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/student/student-profile">
                                                                                        John Brewer
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-wrap">
                                                                                    https://dreamslmscourse.com/reffer/?refid=345re667877k9
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                                                                                >
                                                                                    <Link to="#" className="action-icon">
                                                                                        <i className="bx bx-paste" />
                                                                                    </Link>
                                                                                </OverlayTrigger>
                                                                            </td>
                                                                            <td>187</td>
                                                                            <td>$150.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>09348</td>
                                                                            <td>
                                                                                <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link
                                                                                        to="/student/student-profile"
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User5}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/student/student-profile">
                                                                                        Doris Hughes
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-wrap">
                                                                                    https://dreamslmscourse.com/reffer/?refid=345re667877k9
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                                                                                >
                                                                                    <Link to="#" className="action-icon">
                                                                                        <i className="bx bx-paste" />
                                                                                    </Link>
                                                                                </OverlayTrigger>
                                                                            </td>
                                                                            <td>10</td>
                                                                            <td>$45.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>09349</td>
                                                                            <td>
                                                                                <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link
                                                                                        to="/student/student-profile"
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User13}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/student/student-profile">
                                                                                        Arthur Nalley
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-wrap">
                                                                                    https://dreamslmscourse.com/reffer/?refid=345re667877k9
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                                                                                >
                                                                                    <Link to="#" className="action-icon">
                                                                                        <i className="bx bx-paste" />
                                                                                    </Link>
                                                                                </OverlayTrigger>
                                                                            </td>
                                                                            <td>15</td>
                                                                            <td>$10.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>09350</td>
                                                                            <td>
                                                                                <h2 className="table-avatar d-flex align-items-center">
                                                                                    <Link
                                                                                        to="/student/student-profile"
                                                                                        className="avatar"
                                                                                    >
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={User6}
                                                                                            alt="User Image"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/student/student-profile">
                                                                                        Sarah Martinez
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-wrap">
                                                                                    https://dreamslmscourse.com/reffer/?refid=345re667877k9
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                                                                                >
                                                                                    <Link to="#" className="action-icon">
                                                                                        <i className="bx bx-paste" />
                                                                                    </Link>
                                                                                </OverlayTrigger>
                                                                            </td>
                                                                            <td>98</td>
                                                                            <td>$10.00</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
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
                                            <div className="card overview-sec">
                                                <div className="card-body">
                                                    <h5 className="subs-title">About Me</h5>
                                                    <p>
                                                        {listing?.profile?.bio}
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Overview */}

                                            {/* Education Content */}
                                            {/* <div className="card education-sec">
                                                <div className="card-body">
                                                    <h5 className="subs-title">Designation
                                                    </h5>
                                                    <div className="edu-wrap">
                                                        <div className="edu-detail">
                                                            <p>
                                                                {listing?.profile?.designation
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* Education Content */}

                                            {/* Experience Content */}
                                            {/* <div className="card education-sec">
                                                <div className="card-body">
                                                    <h5 className="subs-title">Experience</h5>
                                                    <div className="edu-wrap">
                                                        <div className="edu-name">
                                                            <span>B</span>
                                                        </div>
                                                        <div className="edu-detail">
                                                            <h6>Web Design & Development Team Leader</h6>
                                                            <p className="edu-duration">
                                                                Creative Agency - (2013 - 2016)
                                                            </p>
                                                            <p>
                                                                There are many variations of passages of available, but
                                                                the majority alteration in some form. As a highly
                                                                skilled and successfull product development and design
                                                                specialist with more than 4 Years of My experience.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="edu-wrap">
                                                        <div className="edu-name">
                                                            <span>M</span>
                                                        </div>
                                                        <div className="edu-detail">
                                                            <h6>Project Manager</h6>
                                                            <p className="edu-duration">
                                                                Jobcy Technology Pvt.Ltd - (Pressent)
                                                            </p>
                                                            <p>
                                                                There are many variations of passages of available, but
                                                                the majority alteration in some form. As a highly
                                                                skilled and successfull product development and design
                                                                specialist with more than 4 Years of My experience.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {/* Reviews */}
                                            {/* <div className="card review-sec">
                                                <div className="card-body">
                                                    <h5 className="subs-title">Reviews</h5>
                                                    <div className="review-item">
                                                        <div className="instructor-wrap border-0 m-0">
                                                            <div className="about-instructor">
                                                                <div className="abt-instructor-img">
                                                                    <Link to="instructor-profile">
                                                                        <img src={User1} alt="img" className="img-fluid" />
                                                                    </Link>
                                                                </div>
                                                                <div className="instructor-detail">
                                                                    <h5>
                                                                        <Link to="instructor-profile">
                                                                            Nicole Brown
                                                                        </Link>
                                                                    </h5>
                                                                    <p>UX/UI Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <p className="rev-info">
                                                            “ This is the second Photoshop course I have completed
                                                            with Cristian. Worth every penny and recommend it highly.
                                                            To get the most out of this course, its best to to take
                                                            the Beginner to Advanced course first. The sound and video
                                                            quality is of a good standard. Thank you Cristian. “
                                                        </p>
                                                        <Link to="#" className="btn btn-reply">
                                                            <i className="feather-corner-up-left"></i> Reply
                                                        </Link>
                                                    </div>
                                                    <div className="review-item">
                                                        <div className="instructor-wrap border-0 m-0">
                                                            <div className="about-instructor">
                                                                <div className="abt-instructor-img">
                                                                    <Link to="instructor-profile">
                                                                        <img src={User1} alt="img" className="img-fluid" />
                                                                    </Link>
                                                                </div>
                                                                <div className="instructor-detail">
                                                                    <h5>
                                                                        <Link to="instructor-profile">
                                                                            Nicole Brown
                                                                        </Link>
                                                                    </h5>
                                                                    <p>UX/UI Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <p className="rev-info">
                                                            “ This is the second Photoshop course I have completed
                                                            with Cristian. Worth every penny and recommend it highly.
                                                            To get the most out of this course, its best to to take
                                                            the Beginner to Advanced course first. The sound and video
                                                            quality is of a good standard. Thank you Cristian. “
                                                        </p>
                                                        <Link to="#" className="btn btn-reply">
                                                            <i className="feather-corner-up-left"></i> Reply
                                                        </Link>
                                                    </div>
                                                    <div className="review-item">
                                                        <div className="instructor-wrap border-0 m-0">
                                                            <div className="about-instructor">
                                                                <div className="abt-instructor-img">
                                                                    <Link to="instructor-profile">
                                                                        <img src={User1} alt="img" className="img-fluid" />
                                                                    </Link>
                                                                </div>
                                                                <div className="instructor-detail">
                                                                    <h5>
                                                                        <Link to="instructor-profile">
                                                                            Nicole Brown
                                                                        </Link>
                                                                    </h5>
                                                                    <p>UX/UI Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <p className="rev-info">
                                                            “ This is the second Photoshop course I have completed
                                                            with Cristian. Worth every penny and recommend it highly.
                                                            To get the most out of this course, its best to to take
                                                            the Beginner to Advanced course first. The sound and video
                                                            quality is of a good standard. Thank you Cristian. “
                                                        </p>
                                                        <Link to="#" className="btn btn-reply">
                                                            <i className="feather-corner-up-left"></i> Reply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* Reviews */}

                                            {/* Comment */}
                                            {/* comment */}
                                        </div>

                                        <div className="col-lg-4">
                                            {/* Right Sidebar Tags Label */}
                                            <div className="card overview-sec">
                                                <div className="card-body">
                                                    <h5 className="subs-title">Bank  Details</h5>
                                                    <div className="contact-info-list">
                                                        <div className="edu-wrap">
                                                            <div className="edu-name">
                                                                <span>
                                                                    <img src={EmailIcon} alt="Address" />
                                                                </span>
                                                            </div>
                                                            <div className="edu-detail">
                                                                <h6>Account Holder Name </h6>
                                                                <p>
                                                                    <Link to="#">{listing?.BankData?.BankName
                                                                    }</Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="edu-wrap">
                                                            <div className="edu-name">
                                                                <span>
                                                                    <img src={AddressIcon} alt="Address" />
                                                                </span>
                                                            </div>
                                                            <div className="edu-detail">
                                                                <h6>Account Number</h6>
                                                                <p>{listing?.BankData?.BankNumber}</p>
                                                            </div>
                                                        </div>

                                                        <div className="edu-wrap">
                                                            <div className="edu-name">
                                                                <span>
                                                                    <img src={AddressIcon} alt="Address" />
                                                                </span>
                                                            </div>
                                                            <div className="edu-detail">
                                                                <h6>IFSC Code </h6>
                                                                <p>{listing?.BankData?.IFSC}</p>
                                                            </div>
                                                        </div>
                                                        <div className="edu-wrap">
                                                            <div className="edu-name">
                                                                <span>
                                                                    <img src={PhoneIcon} alt="Address" />
                                                                </span>
                                                            </div>
                                                            <div className="edu-detail">
                                                                <h6>Branch Name</h6>
                                                                <p>
                                                                    {" "}
                                                                    <Link to="#">{listing?.BankData?.BranchName} </Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Right Sidebar Tags Label */}

                                            {/* Right Sidebar Profile Overview */}
                                            {/* <div className="card overview-sec">
                                                <div className="card-body">
                                                    <h5 className="subs-title">Profile Overview</h5>
                                                    <div className="rating-grp">
                                                        <div className="rating">
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star filled"></i>
                                                            <i className="fas fa-star"></i>
                                                            <span className="d-inline-block average-rating">
                                                                <span>4.0</span> (15)
                                                            </span>
                                                        </div>
                                                        <div className="course-share d-flex align-items-center justify-content-center">
                                                            <Link to="#rate">
                                                                <i className="fa-regular fa-heart"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="profile-overview-list">
                                                        <div className="list-grp-blk d-flex">
                                                            <div className="flex-shrink-0">
                                                                <img src={CoursesIcon} alt="Courses" />
                                                            </div>
                                                            <div className="list-content-blk flex-grow-1 ms-3">
                                                                <h5>32</h5>
                                                                <p>Courses</p>
                                                            </div>
                                                        </div>
                                                        <div className="list-grp-blk d-flex">
                                                            <div className="flex-shrink-0">
                                                                <img src={TtlStudIcon} alt="Total Students" />
                                                            </div>
                                                            <div className="list-content-blk flex-grow-1 ms-3">
                                                                <h5>11,604</h5>
                                                                <p>Total Students</p>
                                                            </div>
                                                        </div>
                                                        <div className="list-grp-blk d-flex">
                                                            <div className="flex-shrink-0">
                                                                <img src={ReviewIcon} alt="Reviews" />
                                                            </div>
                                                            <div className="list-content-blk flex-grow-1 ms-3">
                                                                <h5>12,230</h5>
                                                                <p>Reviews</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* Right Sidebar Profile Overview */}

                                            {/* Right Contact Details */}
                                            <div className="card overview-sec">
                                                <div className="card-body">
                                                    <h5 className="subs-title">Contact Details</h5>
                                                    <div className="contact-info-list">
                                                        <div className="edu-wrap">
                                                            <div className="edu-name">
                                                                <span>
                                                                    <img src={EmailIcon} alt="Address" />
                                                                </span>
                                                            </div>
                                                            <div className="edu-detail">
                                                                <h6>Email</h6>
                                                                <p>
                                                                    <Link to="#">{listing?.user?.email
                                                                    }</Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="edu-wrap">
                                                            <div className="edu-name">
                                                                <span>
                                                                    <img src={AddressIcon} alt="Address" />
                                                                </span>
                                                            </div>
                                                            <div className="edu-detail">
                                                                <h6>Address</h6>
                                                                <p>{listing?.profile?.address}</p>
                                                            </div>
                                                        </div>
                                                        <div className="edu-wrap">
                                                            <div className="edu-name">
                                                                <span>
                                                                    <img src={PhoneIcon} alt="Address" />
                                                                </span>
                                                            </div>
                                                            <div className="edu-detail">
                                                                <h6>Phone</h6>
                                                                <p>
                                                                    {" "}
                                                                    <Link to="#">{listing?.user?.phone_code} {listing?.user?.phone_number}</Link>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="edu-wrap">
                                                            <div className="edu-name">
                                                                <span>
                                                                    <img src={PhoneIcon} alt="Address" />
                                                                </span>
                                                            </div>
                                                            <div className="edu-detail">
                                                                <h6>WhatApps Number</h6>
                                                                <p>
                                                                    {" "}
                                                                    <Link to="#">{listing?.user?.phone_code} {listing?.profile?.phone_number}</Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Right Contact Details */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}

                    {/* Course Content */}

                </div>
            </AuthLayout>
        </>
    );
}
