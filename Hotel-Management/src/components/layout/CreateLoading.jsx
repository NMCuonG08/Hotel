import React from 'react';
import './custom-spinner.css'; // Đảm bảo rằng bạn đã tạo file CSS này

const CreateLoading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <span className="sr-only">Loading...  </span>
        <div className="spinner-border custom-spinner  " role="status">
        </div>
    </div>
  );
};

export default CreateLoading;
