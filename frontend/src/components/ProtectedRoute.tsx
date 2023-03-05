import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

const ProtectedRoute = (props: { children: any }) => {
  const { user } = useAuth();

  if (user !== null) return props.children;
  return <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
