import { useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import { SidenavCtx } from '../contexts';

const SidenavProvider = (props: { children: any }) => {
  const { children } = props;
  const [isLargerThan900] = useMediaQuery('(min-width: 48em)');
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((v) => !v);
  };

  return (
    <SidenavCtx.Provider value={{ open, toggle, isLargerThan900 }}>
      {children}
    </SidenavCtx.Provider>
  );
};

export default SidenavProvider;
