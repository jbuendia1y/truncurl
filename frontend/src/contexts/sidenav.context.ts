import { createContext } from "react";

const SidenavCtx = createContext({
  open: false,
  toggle: () => {},
  isLargerThan900: false,
});

export default SidenavCtx;
