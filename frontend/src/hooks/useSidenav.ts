import { useContext } from 'react';
import { SidenavCtx } from '../contexts';

const useSidenav = () => {
  const ctx = useContext(SidenavCtx);
  return ctx;
};

export default useSidenav;
