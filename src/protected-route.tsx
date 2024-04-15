import { Navigate } from "react-router-dom";
import Auth from "./shared/services/auth";
import React from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  return Auth.isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
