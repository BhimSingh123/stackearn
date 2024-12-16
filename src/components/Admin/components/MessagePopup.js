import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const MessagePopup = ({ message, wordLimit }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const truncateMessage = (text, limit) => {
        const words = text.split(' ');
        return words.length > limit
            ? words.slice(0, limit).join(' ') + '...'
            : text;
    };
    return (
        <div>
            <p onClick={handleShow} style={{ cursor: 'pointer' }} className='mt-0 mb-0'>
                {truncateMessage(message, wordLimit)}
            </p>
            {/* Bootstrap Modal */}
            <div
                className={`modal fade ${show ? 'show' : ''}`}
                style={{ display: show ? 'block' : 'none' }}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Popup Message</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={handleClose}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body mt-3 " >
                            <p className='text-break' style={{ whiteSpace: 'pre-line' }}>{message}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={handleClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

MessagePopup.propTypes = {
    wordLimit: 5, // Default word limit if not provided
    message: PropTypes.string.isRequired, // Ensures datarole is a required string
};


export default MessagePopup;
