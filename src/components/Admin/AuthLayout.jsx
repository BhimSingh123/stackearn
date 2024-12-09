import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import Listing from '../Api/Listing';


export default function AuthLayout({ children }) {
    const navigate = useNavigate();

    const fetchData = async (signal) => {
        try {
            const main = new Listing();
            const response = await main.profileVerify({ signal });
            console.log("response",response)
        } catch (error) {
            localStorage && localStorage.removeItem("token");
            toast.error("Please log in first.");
            navigate("/admin/login");
        }
    }


    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        fetchData(signal);
        return () => controller.abort();
    }, []);
    return (
        <>

            {children}
        </>



    );
}

AuthLayout.propTypes = {
    children: PropTypes.string.isRequired, // Ensures datarole is a required string
};
