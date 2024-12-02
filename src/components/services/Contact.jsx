import React from "react";
import { LoginImg } from "../imagepath";

function Contact() {

    return (
        <div className="container my-5">
            <div className="row g-0">
                {/* Left Section (Image & Welcome Message) */}
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-light text-center p-4">
                    <img src={LoginImg} alt="Login Banner" className="img-fluid mb-2" />
                    <h2 className="mb-1">Welcome to DreamsLMS Courses</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam.
                    </p>
                </div>

                {/* Right Section (Login Form) */}

                <div className="col-md-6 login-wrapper loginbox  d-flex align-items-center bg-white p-4">
                    <div className="w-100">
                        <h1 className="mb-1">Contact Us </h1>
                        <p className="mb-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam.
                        </p>
                        {/* Logo */}
                        <form>
                            <div className="mb-3">
                                <label className="form-label">name</label>
                                <input
                                    type="email"
                                    className="form-control custom-textarea"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control custom-textarea"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="email"
                                    className="form-control custom-textarea"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input
                                    type="text"
                                    className="form-control custom-textarea"
                                    placeholder="Enter your subject"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea
                                    type="text"
                                    rows={5}
                                    cols={5}
                                    className="form-control custom-textarea"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className="d-grid">

                                <button type="submit" className="btn btn-primary btn-start w-100 p-2">
                                    Contact Us              </button>
                            </div>
                        </form>

                        {/* Social Login */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
