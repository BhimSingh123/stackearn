import React, { useState } from "react";
import { LoginImg } from "../imagepath";
import toast from "react-hot-toast";
import Listing from "../Api/Listing";
import PropTypes from "prop-types";

function Contact({ datarole }) {

    const [Regs, setRegs] = useState({
        name: "",
        email: "",
        role: datarole,
        message: "",
        subject: '',
        phone_number: ''
    });
    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };

    const [loading, setLoading] = useState(false);

    const handleForms = async (e) => {
        e.preventDefault();
        if (loading) return;

        if (!Regs.name || !Regs.email || !Regs.phone_number || !Regs.subject || !Regs.message) {
            toast.error("Please fill out all fields.");
            return;
        }

        setLoading(true);
        const main = new Listing();
        try {
            const response = await main.contact(Regs);
            console.log("response", response)
            if (response?.data?.status) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };
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
                                    type="text"
                                    name="name"
                                    value={Regs?.name}
                                    onChange={handleInputs}
                                    className="form-control custom-textarea"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={Regs?.email}
                                    onChange={handleInputs}
                                    className="form-control custom-textarea"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    value={Regs?.phone_number}
                                    onChange={handleInputs}
                                    className="form-control custom-textarea"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="mb-2">
                                <label className="form-label">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={Regs?.subject}
                                    onChange={handleInputs}
                                    className="form-control custom-textarea"
                                    placeholder="Enter your subject"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Message</label>
                                <textarea
                                    rows={5}
                                    cols={5}
                                    onChange={handleInputs}
                                    value={Regs?.message}
                                    name="message"
                                    className="form-control custom-textarea"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className="d-grid">

                                <button type="submit" onClick={handleForms} className="btn btn-primary btn-start w-100 p-2">
                                    {loading ? "loading.." : "Contact Us"}         </button>
                            </div>
                        </form>

                        {/* Social Login */}

                    </div>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    datarole: PropTypes.string.isRequired, // Ensures datarole is a required string
  };
  

export default Contact;
