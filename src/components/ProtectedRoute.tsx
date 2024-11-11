import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

const ProtectedRoute = () => {
  const { user } = useAuthStore((state) => state);

  if (!user) {
    return <Navigate to="/cover" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
