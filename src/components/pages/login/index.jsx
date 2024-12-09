import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo } from "../../imagepath";
import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Listing from "../../Api/Listing";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [Regs, setRegs] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setRegs((prevState) => ({ ...prevState, [name]: value }));
  };

  const togglePassword = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!Regs.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(Regs.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!Regs.password) {
      formErrors.password = "Password is required";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleForms = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

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
          role: "user",
        });
        localStorage.setItem("token", response?.data?.token);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const settings = {
    items: 1,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],
    loop: true,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1170: { items: 1 },
    },
  };

  return (
    <div className="main-wrapper log-wrap">
      <div className="row">
        {/* Login Banner */}
        <div className="col-md-6 login-bg">
          <OwlCarousel {...settings} className="owl-carousel login-slide owl-theme">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>Welcome to <br /> DreamsLMS Courses</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        {/* /Login Banner */}
        <div className="col-md-6 login-wrap-bg">
          {/* Login */}
          <div className="login-wrapper">
            <div className="loginbox">
              <div className="w-100">
                <div className="img-logo">
                  <Link to="/home">
                    <img src={logo} className="img-fluid" alt="Logo" />
                  </Link>
                  <div className="back-home">
                    <Link to="/home">Back to Home</Link>
                  </div>
                </div>
                <h1>Sign into Your Account</h1>
                <form onSubmit={handleForms}>

                  <div className="input-block">
                    <label className="form-control-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={Regs.email}
                      onChange={handleInputs}
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group">
                      <input
                        type={passwordType}
                        name="password"
                        required
                        value={Regs.password}
                        onChange={handleInputs}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        placeholder="Password"
                      />
                      <span className="toggle-password feather-eye" onClick={togglePassword}>
                        {passwordType === "password" ? (
                          <FeatherIcon icon="eye-off" />
                        ) : (
                          <FeatherIcon icon="eye" />
                        )}
                      </span>
                    </div>
                    {errors.password && (
                      <small className="text-danger">{errors.password}</small>
                    )}
                  </div>
                  <div className="forgot">
                    <Link className="forgot-link" to="/forgot-password">
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="d-grid">
                    <button className="login-head button" type="submit" disabled={loading}>
                      {loading ? "Submitting..." : "Sign In"}
                    </button>
                  </div>
                  <div className="remember-me text-center mt-3">
                  <Link to="/register" className="mr-3 ml-2">
  <span style={{ marginRight: "5px" }}>Do Not Have Account? Please</span>
  <span className="forgot-link">Sign Up</span>
</Link>

                  </div>

                </form>
              </div>
            </div>
          </div>
          {/* /Login */}
        </div>
      </div>
    </div>
  );
};

export default Login;
