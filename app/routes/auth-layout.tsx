import { Outlet, Navigate } from "react-router";
import { useAuth } from "~/context/AuthProvider";

export default function AuthLayout() {
  const { user, loading } = useAuth();

  console.log("AuthLayout rendered", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user && !loading) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
