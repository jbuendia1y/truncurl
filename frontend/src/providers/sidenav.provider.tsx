import { useState } from "react";
import { SidenavCtx } from "../contexts";

const SidenavProvider = (props: { children: any }) => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((v) => !v);
  };

  return (
    <SidenavCtx.Provider value={{ open, toggle }}>
      {children}
    </SidenavCtx.Provider>
  );
};

export default SidenavProvider;
