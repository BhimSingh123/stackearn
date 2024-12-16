import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../imagepath";
import AuthLayout from "../AuthLayout";

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
        <AuthLayout>

            <header className="header p-0">
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
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </AuthLayout>
    );
};

export default Header;