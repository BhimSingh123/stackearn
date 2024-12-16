import React, { useEffect, useState } from 'react'
import StudentSidebar from '../sidebar'
import { Footer3 } from '../../footer3'
import Listing from '../../Api/Listing'
import AuthLayout from '../../../AuthLayout'
import LoadingPage from '../../../LoadingPage'
import SubDashboard from '../components/SubDashboard'
import {  useParams } from 'react-router-dom'

const ViewProfile = () => {
const{Id} =useParams();
    const [listing, setListing] = useState("");
    console.log("listing",listing)
    const [loading, setLoading] = useState(false);

    
    const ProfileData = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.InstrutorGetId(Id);
            setListing(response?.data?.data);
        } catch (error) {
            console.error("ProfileData error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (Id) {
            ProfileData(Id);
        }
    }, [Id]);
    return (
        <>
            <AuthLayout>

                <div className="main-wrapper">
                    {/* Header */}
                    <SubDashboard />
                    {/* /Header */}
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
                                        <LoadingPage />
                                    </>
                                ) : (

                                    <div className="col-xl-9 col-lg-9">
                                        <div className="settings-widget card-details mb-0">
                                            <div className="settings-menu p-0">
                                                <div className="profile-heading">
                                                    <h3>Instructor Profile</h3>
                                                </div>
                                             


                                               <div className="checkout-form personal-address">
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>First Name</h6>
                                                                    <p>{listing?.firstName}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>Last Name</h6>
                                                                    <p>{listing?.lastName}</p>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>Email</h6>
                                                                    <p>{listing?.email}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>Phone Number</h6>
                                                                    <p>+91 {listing?.phoneNumber}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>Rating</h6>
                                                                    <p>{listing?.rating

                                                                    }</p>

                                                                </div>
                                                            </div>
                                                            
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>Total Student</h6>
                                                                    <p>{listing?.students
                                                                    }</p>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6>Gender</h6>
                                                                    <p>{listing?.gender}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6> Designation</h6>
                                                                    <p>{listing?.designation}</p>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="contact-info">
                                                                    <h6> Lessions
                                                                    </h6>
                                                                    <p>{listing?.lessions                                                                    }</p>

                                                                </div>
                                                            </div> 
                                                            
                                                              <div className="col-sm-6">
                                                                <div className="contact-info">
                                                                    <h6>Address</h6>
                                                                    <p>{listing?.address}</p>

                                                                </div>
                                                            </div>

                                                           

                                                            <div className="col-sm-6">
                                                                <div className="contact-info mb-0">
                                                                    <h6>Bio</h6>
                                                                    <p>
                                                                        {listing?.bio}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="contact-info mb-0">
                                                                    <h6>Skill</h6>
                                                                    <p>
                                                                        {listing?.Skill}
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
                {/* Main Wrapper */}

                {/* /Main Wrapper */}
            </AuthLayout>
        </>

    )
}

export default ViewProfile
