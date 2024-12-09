import React from "react";
import { Link, useNavigate } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo } from "../../imagepath";
import { useState } from "react";
import Listing from "../../Api/Listing";
import toast from "react-hot-toast";

const Register = () => {

  const navigate = useNavigate();
  const [Regs, setRegs] = useState({
    email: "",
    password: "",
    name: "",
    refral_code: "",
    role: "user",
    phone_number: "",
  });
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(true);
  const [loading, setLoading] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setRegs({ ...Regs, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setRegs({ ...Regs, password: value });
  };

  const onEyeClick = () => {
    setEye(!eye);
  };

  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
  };


  const messages = () => {
    if (password.length === 0) {
      return ;
    } else if (password.length < 4) {
      return <p className="text-danger">Weak Password</p>;
    } else if (password.length >= 4 && password.length < 8) {
      return <p className="text-warning">Average Password</p>;
    } else {
      return <p className="text-success">Strong Password</p>;
    }
  };

  const handleForms = async (e) => {
    e.preventDefault();
    if (loading) return;

    // Validation for required fields
    if (!Regs.name.trim() || !Regs.email.trim() || !Regs.phone_number.trim() || !Regs.password.trim() || !Regs.refral_code.trim()) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!checkboxChecked) {
      toast.error("You must agree to the terms and conditions.");
      return;
    }

    setLoading(true);
    const main = new Listing();
    try {
      const response = await main.singup(Regs);
      console.log("response", response);
      if (response?.data?.status) {
        toast.success(response.data.message);
        setRegs({
          email: "",
          password: "",
          name: "",
          refral_code: "",
          role: "user",
          phone_number: "",
        });
        setPassword("");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <>
      <div className="main-wrapper log-wrap">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
            <OwlCarousel
              {...settings}
              className="owl-carousel login-slide owl-theme"
            >
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
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
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
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
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
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
                <div className="img-logo">
                  <Link to="/home">

                    <img
                      src={logo}
                      className="img-fluid"
                      alt="Logo"
                    />
                  </Link>
                  <div className="back-home">
                    <Link to="/login">Login</Link>
                  </div>
                </div>
                <h1>Sign up</h1>
                <form onSubmit={handleForms}>
                  <div className="row">
                    <div className="col-md-6">

                      <div className="input-block">
                        <label className="form-control-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          name="name"
                          value={Regs?.name || ""}
                          onChange={handleInputs}
                          placeholder="Enter your Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label className="form-control-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          required
                          name="email"
                          value={Regs?.email || ""}
                          onChange={handleInputs}
                          placeholder="Enter your Email"
                        />
                      </div>
                    </div>

                  </div>



                  <div className="input-block">
                    <label className="form-control-label">Phone Number</label>
                    <input
  type="tel"
  className="form-control"
  required
  name="phone_number"
  value={Regs?.phone_number || ""}
  onChange={handleInputs}
  placeholder="Enter your Phone Number"
  pattern="\d{10}"
  maxLength="10"  
  title="Phone number must be exactly 10 digits"
/>

                  </div>

                  <div className="input-block">
                    <label className="form-control-label">Referral Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="refral_code"
                      value={Regs?.refral_code || ""}
                      onChange={handleInputs}
                      placeholder="Enter Referral Code"
                    />
                  </div>

                  <div className="input-block">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group">
                      <input
                        className="form-control pass-input"
                        name="password"
                        value={password || ""}
                        required
                        placeholder="Enter your password"
                        type={eye ? "password" : "text"}
                        onChange={handlePasswordChange}
                      />
                      <span onClick={onEyeClick} className={`fa toggle-password feather-eye ${eye ? " fa-eye-slash " : "fa-eye"}`} />
                    </div>
                    {messages()}
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="agree"
                      required
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label">I agree to the terms and conditions</label>
                  </div>

                  <button className="login-head button" type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Register"}
                  </button>
                </form>
              </div>
            </div>
            {/* /Login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
