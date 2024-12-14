import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo } from "../../imagepath";
import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import Listing from "../../Api/Listing";

const Login = () => {

    const [passwordType, setPasswordType] = useState("password");

    const [Regs, setRegs] = useState({
        email: "",
        password: "",
        role: "admin"
    });
    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };


    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }


    var settings = {
        //autoWidth: true,
        items: 2,
        margin: 25,
        dots: true,
        nav: true,
        navText: [
            '<i className="fas fa-arrow-left"></i>',
            '<i className="fas fa-arrow-right"></i>',
        ],

        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            },
        },
    };



    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const handleForms = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        const main = new Listing();
        try {
            const response = await main.login(Regs);
            if (response?.data?.status) {
                toast.success(response.data.message);
                setRegs({
                    email: "",
                    password: "",
                    name: "",
                    refral_code: "",
                    role: "",
                    phone_number: ""
                })
                localStorage.setItem("token", response?.data?.token);
                navigate("/admin/dashboard")
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="main-wrapper log-wrap">
                <div className="row">
                    {/* Login Banner */}
                    <div className="col-md-6 login-bg">
                        <OwlCarousel
                            {...settings}
                            className="owl-carousel login-slide owl-theme">
                            <div className="welcome-login">
                                <div className="login-banner">
                                    <img
                                        src={LoginImg}
                                        className="img-fluid"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="mentor-course text-center">
                                    <h2>
                                        Welcome to <br />
                                        DreamsLMS Courses.
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam.
                                    </p>
                                </div>
                            </div>
                            <div className="welcome-login">
                                <div className="login-banner">
                                    <img
                                        src={LoginImg}
                                        className="img-fluid"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="mentor-course text-center">
                                    <h2>
                                        Welcome to <br />
                                        DreamsLMS Courses.
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam.
                                    </p>
                                </div>
                            </div>
                            <div className="welcome-login">
                                <div className="login-banner">
                                    <img
                                        src={LoginImg}
                                        className="img-fluid"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="mentor-course text-center">
                                    <h2>
                                        Welcome to <br />
                                        DreamsLMS Courses.
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam.
                                    </p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    {/* /Login Banner */}
                    <div className="col-md-6 login-wrap-bg">
                        {/* Login */}
                        <div className="login-wrapper">
                            <div className="loginbox">
                                <div className="w-100">
                                    <div className="img-logo">
                                        <img
                                            src={logo}
                                            className="img-fluid"
                                            alt="Logo"
                                        />
                                        <div className="back-home">
                                            <Link to="/home">Back to Home</Link>
                                        </div>
                                    </div>
                                    <h1>Sign into Your Account</h1>
                                    <form >
                                        <div className="input-block">
                                            <label className="form-control-label">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={Regs?.email}
                                                onChange={handleInputs}

                                                className="form-control"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                        <div className="input-block">
                                            <label className="form-control-label">Password</label>
                                            <div className="pass-group">
                                                <input type={"password"} onChange={handleInputs} value={Regs?.password} name="password" className="form-control" placeholder="Password" />
                                                <span className="toggle-password feather-eye" onClick={togglePassword}>
                                                    {passwordType === "password" ? <FeatherIcon icon="eye" /> : <FeatherIcon icon="eye-off" />}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="forgot">
                                            <span>
                                                <Link className="forgot-link" to="/forgot-password">
                                                    Forgot Password ?
                                                </Link>
                                            </span>
                                        </div>
                                        <div className="remember-me">
                                            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                                                {" "}
                                                Remember me
                                                <input type="checkbox" name="radio" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="d-grid">
                                            <button
                                                onClick={handleForms}
                                                className="btn btn-start"
                                                type="submit"
                                            >
                                                {loading ? "Loading..." : "Sing In"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* /Login */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
