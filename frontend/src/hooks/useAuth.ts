import { useContext } from "react";
import { AuthCtx } from "../contexts";

const useAuth = () => {
  const ctx = useContext(AuthCtx);
  return ctx;
};

export default useAuth;
