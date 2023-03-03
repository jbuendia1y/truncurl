import { createContext } from "react";

const SidenavCtx = createContext({ open: false, toggle: () => {} });

export default SidenavCtx;
