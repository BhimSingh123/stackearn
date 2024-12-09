import React, { useEffect, useState } from 'react'
import StudentSidebar from '../sidebar'
import Header from '../../header'
import { Footer3 } from '../../footer3'
import Listing from '../../Api/Listing'
import AuthLayout from '../../../AuthLayout'
import LoadingPage from '../../../LoadingPage'
import { Link } from 'react-router-dom'

const StudentProfile = () => {

    const [listing, setListing] = useState("");
    console.log("listing", listing)
    const [loading, setLoading] = useState(false);

    const ProfileData = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.userprfileId();
            console.log("Profile response:", response);
            setListing(response?.data || {});
        } catch (error) {
            console.error("ProfileData error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        ProfileData();
    }, []);
    return (
        <>
            <AuthLayout>
                {loading ? (
                    <LoadingPage />
                ) : (
                    <div className="main-wrapper">
                        {/* Header */}
                        <Header />
                        {/* /Header */}
                        {/* Breadcrumb */}
                        <div className="breadcrumb-bar breadcrumb-bar-info">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-12">
                                        <div className="breadcrumb-list">
                                            <h2 className="breadcrumb-title">My Profile</h2>
                                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">
                                                        <a to="/home">Home</a>
                                                    </li>
                                                    <li className="breadcrumb-item active" aria-current="page">
                                                        My Profile
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Breadcrumb */}
                        {/* Page Content */}
                        <div className="page-content">
                            <div className="container">
                                <div className="row">
                                    {/* sidebar */}
                                    <StudentSidebar />
                                    {/* /Sidebar */}
                                    {/* Student Profile */}
                                    {loading ? (

                                        <>
                                            Loading...
                                        </>
                                    ) : (

                                        <div className="col-xl-9 col-lg-9">
                                            <div className="settings-widget card-details mb-0">
                                                <div className="settings-menu p-0">
                                                    <div className="profile-heading">
                                                        <h3>My Profile</h3>
                                                    </div>
                                                    <div className="checkout-form personal-address">
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>First Name</h6>
                                                                    <p>{listing?.profile?.firstname}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>Last Name</h6>
                                                                    <p>{listing?.profile?.lastname}</p>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>User Name</h6>
                                                                    <p>{listing?.profile?.lastname}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>Email</h6>
                                                                    <p>{listing?.user?.email}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>Phone Number</h6>
                                                                    <p>{listing?.user?.phone_code} {listing?.user?.phone_number}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <div className="contact-info">
                                                                    <h6>Address</h6>
                                                                    <p>{listing?.profile?.address
                                                                    }</p>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>Account Holder Name</h6>
                                                                    <p>{listing?.Bank?.BankName}</p>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6> Branch Name</h6>
                                                                    <p>{listing?.Bank?.BranchName}</p>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6> Account Number </h6>
                                                                    <p>{listing?.Bank?.BankNumber}</p>

                                                                </div>
                                                            </div> 
                                                            
                                                              <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>IFSC Code</h6>
                                                                    <p>{listing?.Bank?.IFSC}</p>

                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                            <div className="contact-info mb-0">
                                                                <div className="social-icon-five mt-2">
                                                                    <ul className="nav">
                                                                        <li>
                                                                            <Link
                                                                                to={listing?.social?.twitter}
                                                                                target="_blank"
                                                                                className="twitter-icon  text-dark p-2 rounded-circle hover-bg-black"
                                                                            >
                                                                                <i className="fab fa-twitter"></i>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to={listing?.social?.linkedin}
                                                                                target="_blank"
                                                                                className="linked-icon  text-dark p-2 rounded-circle hover-bg-black"
                                                                            >
                                                                                <i className="fab fa-linkedin-in"></i>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to={listing?.social?.facebook}
                                                                                target="_blank"
                                                                                className="facebook-icon  text-dark p-2 rounded-circle hover-bg-black"
                                                                            >
                                                                                <i className="fab fa-facebook-f"></i>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to={listing?.social?.github}
                                                                                target="_blank"
                                                                                className="youtube-icon  text-dark p-2 rounded-circle hover-bg-black"
                                                                            >
                                                                                <i className="fab fa-instagram"></i>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="contact-info mb-0">
                                                                    <h6>Bio</h6>
                                                                    <p>
                                                                        {listing?.profile?.bio}
                                                                    </p>
                                                                </div>
                                                            </div>

                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Student Profile */}
                                </div>
                            </div>
                        </div>
                        {/* /Page Content */}
                        {/* Footer */}
                        <div className='home-three'>

                            <Footer3 />
                        </div>
                        {/* /Footer */}
                    </div>
                )}
                {/* Main Wrapper */}

                {/* /Main Wrapper */}
            </AuthLayout>
        </>

    )
}

export default StudentProfile
