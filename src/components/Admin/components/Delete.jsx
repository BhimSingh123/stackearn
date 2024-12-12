import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Listing from "../../Api/Listing";

export default function Delete({ step, Id, PackageGet }) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const handlePackageDelete = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const res = await main.packageDelete({ Id });
            if (res?.data?.status) {
                toast.success(res.data.message);
                PackageGet();
                toggleModal();
            } else {
                toast.error(res.data?.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error?.response?.data?.message || "Error deleting package.");
        } finally {
            setLoading(false);
        }
    };

    const handleUserDelete = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const res = await main.DeleteUsers({ Id });
            if (res?.data?.status) {
                toast.success(res.data.message);
                toggleModal();
            } else {
                toast.error(res.data?.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error?.response?.data?.message || "Error deleting user.");
        } finally {
            setLoading(false);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (step === 1) handleUserDelete();
        else if (step === 2) handlePackageDelete();
        else console.warn("Invalid step");
    };

    return (
        <div>
            {/* Delete Button */}
            <div
                onClick={toggleModal}
            >
                <MdDelete size={20} className="text-red-600 hover:text-red-700" />
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete Confirmation</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={toggleModal}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    Are you sure you want to delete this{" "}
                                    {step === 1 ? "package" : "user"}?
                                </p>
                                <p className="text-danger">
                                    (This action cannot be undone.)
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={toggleModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleClick}
                                >
                                    {loading ? "Loading..." : "Delete"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

Delete.propTypes = {
    step: PropTypes.number.isRequired,
    Id: PropTypes.string.isRequired,
    PackageGet: PropTypes.func.isRequired,
};
