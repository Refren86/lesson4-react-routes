import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  // if user is NOT logged in:
  if (!user) {
    return <Navigate to={"/login"} state={location} />;
  }

  return children;
};
