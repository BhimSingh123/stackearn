import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { logo, User16 } from "../imagepath";
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
  const [mobileSubMenu43, setMobileSubMenu43] = useState(false);
  const [mobileSubMenu5, setMobileSubMenu5] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  console.log("dropdownOpen", dropdownOpen)
  const profileClick = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
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

  const openMobileSubMenu43 = (e) => {
    e.preventDefault();
    setMobileSubMenu43(!mobileSubMenu43);
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
                  <Link to="/services" onClick={openMobileSubMenu5}>
                    Services <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={
                      mobileSubMenu5 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/services">online Course</Link>
                    </li>
                    <li>
                      <Link to="/coaching">Coaching</Link>
                    </li>

                    <li>
                      <Link to="/school">School</Link>
                    </li>

                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/home" onClick={openMobileSubMenu4}>
                    Pages <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={
                      mobileSubMenu4 ? "submenu submenuShow" : "submenu"
                    }
                  >

                    <li className="has-submenu">
                      <Link to="#">
                        Error
                        <i
                          className=""
                          onClick={openMobileSubMenu43}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu43 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li>
                          <Link to="/come-soon">Coming soon</Link>
                        </li>
                        <li>
                          <Link to="/error-404">404</Link>
                        </li>
                        <li>
                          <Link to="/error-500">500</Link>
                        </li>
                        <li>
                          <Link to="/under-construction">
                            Under Construction
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/event">Event</Link>
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
                    <li>
                      <Link to="/login">About Us</Link>
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

                <li className="has-submenu">
                  <Link to="#" onClick={profileClick}>
                    <span className="user-img">
                      <img src={User16} alt="User" className="rounded-circle" />
                      <span className="status online"></span>
                    </span>
                  </Link>

                  <ul
                    className={
                      dropdownOpen ? "submenu submenuShow" : "submenu"
                    }
                  >
                       <li>
                      <Link to="/student/student-dashboard"> <FaTachometerAlt className="me-2" />
                        <span>Dashboard</span></Link>
                    </li>
                    <li>
                      <Link to="/student/student-profile">
                        <FaUserCircle className="me-2" />
                        <span>My Profile</span></Link>
                    </li>
                 

                    <li>
                      <Link to="#"> <FaSignOutAlt className="me-2" />
                        <span>Logout</span></Link>
                    </li>

                  </ul>
                </li>
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <DarkMode />
              <li className="nav-item">
                <Link className="nav-link header-sign" to="/login">
                  Signin
                </Link>
              </li>
            </ul>
            <div className="main-menu-wrapper">
              <div className="menu-header">

              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
