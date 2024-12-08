import React from 'react';

const LoadingPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        backgroundColor: '#f8f9fa',
        borderRadius: '20px',
      }}
    >
      <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
