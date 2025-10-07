import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './navbar';

function ProtectedRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default ProtectedRoutes;