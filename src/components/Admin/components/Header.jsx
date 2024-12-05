import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { logo, User16 } from "../../imagepath";

const Header = () => {
    // const token  = localstorage?.getItem("Admintoken")
    useEffect(() => {
        document.body?.classList?.remove("menu-opened");
        return () => {
            document.body.className = "";
        };
    }, []);

    // change header background on scroll
    const [navbar, setNavbar] = useState(false);
    // Mobile Menu toggle

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
                            <Link id="mobile_btn" to="/admin/admin-dashboard" onClick={openMobileMenu}>
                                <span className="bar-icon">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            </Link>
                            <Link to="/admin/admin-dashboard" className="navbar-brand logo">
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
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;