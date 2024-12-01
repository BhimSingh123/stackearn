import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
  import { logo ,
  User16,

   } from "../imagepath";
import DarkMode from "../common/darkMode";

const Header = () => {
  useEffect(() => {
    document.body?.classList?.remove("menu-opened");
    return () => {
      document.body.className = "";
    };
  }, []);

  // change header background on scroll
  const [navbar, setNavbar] = useState(false);
  // Mobile Menu toggle
  const [mobileSubMenu4, setMobileSubMenu4] = useState(false);
  const [mobileSubMenu5, setMobileSubMenu5] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
const navigate = useNavigate()
  const profileClick = (e) => {
    e.preventDefault();
    setShowProfile(!showProfile);
    navigate("/student/student-dashboard")
  };

  const openMobileMenu = () => {
    document.body?.classList?.add("menu-opened");
  };
  const hideMobileMenu = () => {
    document.body?.classList?.remove("menu-opened");
  };

  
  const openMobileSubMenu4 = (e) => {
    e.preventDefault();
    setMobileSubMenu4(!mobileSubMenu4);
  };
  const openMobileSubMenu5 = (e) => {
    e.preventDefault();
    setMobileSubMenu5(!mobileSubMenu5);
  };

  const changeHeaderBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);
  return (
    <header className="header">
      <div className="header-fixed">
        <nav
          className={
            navbar
              ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
              : "navbar navbar-expand-lg header-nav scroll-sticky"
          }
        >
          <div className="container">
            <div className="navbar-header">
              <Link id="mobile_btn" to="/home" onClick={openMobileMenu}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="/home"
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li className="has-submenu active">
                  <Link
                    to="/home"
                  >
                    Home
                  </Link>
                
                </li>
                <li className="has-submenu">
                  <Link to="/instructor/instructor-grid" >
                    Instructor 
                  </Link>
                </li>
                <li className="has-submenu">
                  <Link to="/gallery" >
                    Gallery 
                  </Link>
                </li>
                <li className="has-submenu">
                  <Link to="/services" >
                    Services 
                  </Link>
                </li>
                {/* <li className="has-submenu">
                  <Link to="/student/students-list" onClick={openMobileSubMenu3}>
                    Student <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu3
                        ? "submenu first-submenu submenuShow"
                        : "submenu first-submenu"
                    }
                  >
                    <li className="has-submenu ">
                      <Link to="/student/students-list">
                        Student
                        <i
                          // className=""
                          onClick={openMobileSubMenu32}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu32 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li>
                          <Link to="/student/students-list">List</Link>
                        </li>
                        <li>
                          <Link to="/student/students-grid">Grid</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/setting-edit-profile">Student Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-security">My Profile</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-social-profile">
                        Enrolled Cources
                      </Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-notification">
                        Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-privacy">Reviews</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-accounts">My Quiz Attempts</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-referral">Orders</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-subscription">
                        Question and Answer
                      </Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-billing">Refferals</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-payment">Message</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-support-tickets">Support Tickets</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-support-tickets">Settings</Link>
                    </li>
                  </ul>
                </li> */}
                <li className="has-submenu">
                  <Link to="/home" onClick={openMobileSubMenu4}>
                    Pages <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={
                      mobileSubMenu4 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/support">Support</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/blog-list" onClick={openMobileSubMenu5}>
                    Blog <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={
                      mobileSubMenu5 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/blog-list">Blog List</Link>
                    </li>
                    <li>
                      <Link to="/blog-grid">Blog Grid</Link>
                    </li>
                   
                    <li>
                      <Link to="/blog-modern">Blog Modern</Link>
                    </li>
                   
                  </ul>
                </li>
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <DarkMode/>
              <li className="nav-item">
                <Link className="nav-link header-sign" to="/login">
                  Signin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login" to="/register">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
              <div
                 className="nav-link"
                  onClick={profileClick}
                >
                  <span className="user-img">
                    <img src={User16} alt="" />
                    <span className="status online"></span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
