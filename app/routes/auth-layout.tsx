import { Outlet, Navigate } from "react-router";
import GlobalLoader from "~/components/shared/GlobalLoader";
import { useAuth } from "~/context/AuthProvider";

export default function AuthLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return <GlobalLoader />;
  }

  if (!user && !loading) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
