import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ role, children }) => {
  const token = localStorage.getItem('token');
  
  if (!token || role !== 'College') {
    alert('Access Denied!');
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
