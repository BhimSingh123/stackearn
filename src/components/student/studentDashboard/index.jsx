import React from 'react'
import StudentSidebar from '../sidebar'
import { Link } from 'react-router-dom'
import Header from '../../header'
import { Footer3 } from '../../footer3'
import AuthLayout from '../../../AuthLayout'

const StudentDashboard = () => {


    return (
        <>
            <AuthLayout>
                {/* Main Wrapper */}
                <div className="main-wrapper">
                    {/* Header */}
                    <Header />
                    {/* <StudentHeader activeMenu={"Dashboard"} /> */}
                    {/* /Header */}
                    {/* Breadcrumb */}
                    <div className="breadcrumb-bar breadcrumb-bar-info">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-12">
                                    <div className="breadcrumb-list">
                                        <h2 className="breadcrumb-title">Dashboard</h2>
                                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link to="/home">Home</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    Dashboard
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
                                {/* Student Dashboard */}
                                <div className="col-xl-9 col-lg-9">
                                    {/* Dashboard Grid */}
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6 d-flex">
                                            <div className="card dash-info flex-fill">
                                                <div className="card-body">
                                                    <h5> Courses</h5>
                                                    <h2>12</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 d-flex">
                                            <div className="card dash-info flex-fill">
                                                <div className="card-body">
                                                    <h5>Today Income</h5>
                                                    <h2>03</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 d-flex">
                                            <div className="card dash-info flex-fill">
                                                <div className="card-body">
                                                    <h5>This Week Income</h5>
                                                    <h2>13</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6 d-flex">
                                            <div className="card dash-info flex-fill">
                                                <div className="card-body">
                                                    <h5>This Month Income</h5>
                                                    <h2>12</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 d-flex">
                                            <div className="card dash-info flex-fill">
                                                <div className="card-body">
                                                    <h5>OverAll Income</h5>
                                                    <h2>03</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 d-flex">
                                            <div className="card dash-info flex-fill">
                                                <div className="card-body">
                                                    <h5>Passive Income</h5>
                                                    <h2>13</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6 d-flex">
                                            <div className="card dash-info flex-fill">
                                                <div className="card-body">
                                                    <h5>OverAll Member</h5>
                                                    <h2>12</h2>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* /Dashboard Grid */}
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
                                {/* Student Dashboard */}
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
                {/* /Main Wrapper */}
            </AuthLayout>
        </>

    )
}

export default StudentDashboard
